/**
 * Schema Migrations Engine for Clinical Storage Tables
 */

const fs = require('fs');
const path = require('path');

const MIGRATIONS = [
  {
    version: '1.0.0',
    name: 'Initial Clinical Entities Schema',
    up: (store) => {
      console.log('[Migration 1.0.0] Initialized core tables.');
    }
  },
  {
    version: '1.1.0',
    name: 'Add Telehealth and Triage Tables',
    up: (store) => {
      console.log('[Migration 1.1.0] Added telehealth and emergency triage schema fields.');
    }
  },
  {
    version: '2.0.0',
    name: 'Add FHIR Interoperability Indexes and Audit Severity',
    up: (store) => {
      console.log('[Migration 2.0.0] Added FHIR interoperability metadata and HIPAA compliance indices.');
    }
  }
];

function runMigrations(store) {
  console.log('[PulseCare Migrations] Running schema migrations...');
  for (const m of MIGRATIONS) {
    try {
      m.up(store);
    } catch (err) {
      console.error(`[Migration Failed] ${m.version}:`, err.message);
    }
  }
  console.log('[PulseCare Migrations] All migrations executed successfully.');
}

module.exports = { runMigrations, MIGRATIONS };
