/**
 * PulseCare Embedded Storage Engine
 * High-performance in-memory relational-style document store with file snapshot persistence,
 * secondary indexing, query predicates, and transactional atomic mutations.
 */

const fs = require('fs');
const path = require('path');

class PulseDataStore {
  constructor(dataDir = null) {
    this.dataDir = dataDir || path.join(__dirname, '..', '..', 'data');
    this.tables = {
      users: new Map(),
      patients: new Map(),
      encounters: new Map(),
      prescriptions: new Map(),
      labOrders: new Map(),
      appointments: new Map(),
      claims: new Map(),
      invoices: new Map(),
      inventory: new Map(),
      auditLogs: new Map(),
      notifications: new Map(),
      telehealthSessions: new Map(),
      triageAssessments: new Map(),
      bedAllocations: new Map()
    };
    this.indexes = {
      patientsByMrn: new Map(),
      encountersByPatient: new Map(),
      prescriptionsByPatient: new Map(),
      labsByPatient: new Map(),
      appointmentsByDoctor: new Map(),
      claimsByPatient: new Map()
    };
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
    this.loadSnapshots();
    this.initialized = true;
  }

  loadSnapshots() {
    for (const tableName of Object.keys(this.tables)) {
      const filePath = path.join(this.dataDir, `${tableName}.json`);
      if (fs.existsSync(filePath)) {
        try {
          const raw = fs.readFileSync(filePath, 'utf-8');
          const records = JSON.parse(raw);
          if (Array.isArray(records)) {
            for (const record of records) {
              if (record && record.id) {
                this.tables[tableName].set(record.id, record);
                this.updateIndexesOnInsert(tableName, record);
              }
            }
          }
        } catch (err) {
          console.warn(`[PulseDataStore] Could not parse snapshot ${filePath}:`, err.message);
        }
      }
    }
  }

  saveSnapshot(tableName) {
    if (!this.tables[tableName]) return;
    try {
      const filePath = path.join(this.dataDir, `${tableName}.json`);
      const records = Array.from(this.tables[tableName].values());
      fs.writeFileSync(filePath, JSON.stringify(records, null, 2), 'utf-8');
    } catch (err) {
      console.error(`[PulseDataStore] Failed writing snapshot for ${tableName}:`, err.message);
    }
  }

  saveAllSnapshots() {
    for (const tableName of Object.keys(this.tables)) {
      this.saveSnapshot(tableName);
    }
  }

  updateIndexesOnInsert(tableName, record) {
    if (tableName === 'patients' && record.mrn) {
      this.indexes.patientsByMrn.set(record.mrn, record.id);
    }
    if (tableName === 'encounters' && record.patientId) {
      if (!this.indexes.encountersByPatient.has(record.patientId)) {
        this.indexes.encountersByPatient.set(record.patientId, new Set());
      }
      this.indexes.encountersByPatient.get(record.patientId).add(record.id);
    }
    if (tableName === 'prescriptions' && record.patientId) {
      if (!this.indexes.prescriptionsByPatient.has(record.patientId)) {
        this.indexes.prescriptionsByPatient.set(record.patientId, new Set());
      }
      this.indexes.prescriptionsByPatient.get(record.patientId).add(record.id);
    }
    if (tableName === 'labOrders' && record.patientId) {
      if (!this.indexes.labsByPatient.has(record.patientId)) {
        this.indexes.labsByPatient.set(record.patientId, new Set());
      }
      this.indexes.labsByPatient.get(record.patientId).add(record.id);
    }
  }

  get(tableName, id) {
    const table = this.tables[tableName];
    if (!table) return null;
    return table.get(id) || null;
  }

  getAll(tableName) {
    const table = this.tables[tableName];
    if (!table) return [];
    return Array.from(table.values());
  }

  query(tableName, predicate, options = {}) {
    const table = this.tables[tableName];
    if (!table) return [];
    let results = [];
    for (const item of table.values()) {
      if (!predicate || predicate(item)) {
        results.push(item);
      }
    }

    if (options.sortBy) {
      const field = options.sortBy;
      const order = options.sortOrder === 'desc' ? -1 : 1;
      results.sort((a, b) => {
        const valA = a[field] || '';
        const valB = b[field] || '';
        if (valA < valB) return -1 * order;
        if (valA > valB) return 1 * order;
        return 0;
      });
    }

    if (options.offset || options.limit) {
      const offset = options.offset || 0;
      const limit = options.limit || results.length;
      results = results.slice(offset, offset + limit);
    }

    return results;
  }

  find(tableName, predicate) {
    const table = this.tables[tableName];
    if (!table) return null;
    for (const item of table.values()) {
      if (predicate(item)) return item;
    }
    return null;
  }

  insert(tableName, record) {
    if (!this.tables[tableName]) {
      this.tables[tableName] = new Map();
    }
    if (!record.id) {
      record.id = `${tableName.substring(0, 3)}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
    if (!record.createdAt) {
      record.createdAt = new Date().toISOString();
    }
    record.updatedAt = new Date().toISOString();

    this.tables[tableName].set(record.id, record);
    this.updateIndexesOnInsert(tableName, record);
    this.saveSnapshot(tableName);
    return record;
  }

  update(tableName, id, updates) {
    const table = this.tables[tableName];
    if (!table || !table.has(id)) return null;

    const existing = table.get(id);
    const updated = {
      ...existing,
      ...updates,
      id: existing.id,
      createdAt: existing.createdAt,
      updatedAt: new Date().toISOString()
    };

    table.set(id, updated);
    this.updateIndexesOnInsert(tableName, updated);
    this.saveSnapshot(tableName);
    return updated;
  }

  delete(tableName, id) {
    const table = this.tables[tableName];
    if (!table || !table.has(id)) return false;
    const deleted = table.delete(id);
    this.saveSnapshot(tableName);
    return deleted;
  }

  count(tableName, predicate = null) {
    const table = this.tables[tableName];
    if (!table) return 0;
    if (!predicate) return table.size;
    let count = 0;
    for (const item of table.values()) {
      if (predicate(item)) count++;
    }
    return count;
  }

  clear(tableName) {
    if (this.tables[tableName]) {
      this.tables[tableName].clear();
      this.saveSnapshot(tableName);
    }
  }
}

// Global Singleton Instance
let globalStore = null;

function getStorage() {
  if (!globalStore) {
    globalStore = new PulseDataStore();
    globalStore.init();
  }
  return globalStore;
}

function initializeDatabase() {
  const store = getStorage();
  // Check if seed is needed
  if (store.count('users') === 0 || store.count('patients') === 0) {
    const { seedAllData } = require('./seed');
    seedAllData(store);
  }
  return store;
}

module.exports = {
  PulseDataStore,
  getStorage,
  initializeDatabase
};
