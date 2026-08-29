/**
 * Pharmacy Formulary & Inventory Stock Service
 */

const { getStorage } = require('../database/storage');
const InventoryItem = require('../models/InventoryItem');

class PharmacyService {
  static getInventory(query = {}) {
    const store = getStorage();
    const { lowStockOnly } = query;

    return store.query('inventory', item => {
      if (lowStockOnly === 'true' && item.stockQuantity > item.reorderLevel) return false;
      return true;
    }, { sortBy: 'name', sortOrder: 'asc' });
  }

  static updateStock(id, quantityDelta) {
    const store = getStorage();
    const item = store.get('inventory', id);
    if (!item) throw new Error('Inventory item not found');

    const newQty = Math.max(0, item.stockQuantity + Number(quantityDelta));
    return store.update('inventory', id, { stockQuantity: newQty });
  }
}

module.exports = PharmacyService;
