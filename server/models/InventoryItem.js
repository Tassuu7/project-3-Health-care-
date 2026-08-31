/**
 * Pharmacy Formulary & Medication Inventory Model
 */

const BaseModel = require('./BaseModel');

class InventoryItem extends BaseModel {
  constructor(data = {}) {
    super(data);
    this.drugId = data.drugId || null;
    this.name = data.name || '';
    this.batchNumber = data.batchNumber || '';
    this.manufacturer = data.manufacturer || '';
    this.stockQuantity = Number(data.stockQuantity) || 0;
    this.unitCost = Number(data.unitCost) || 0;
    this.reorderLevel = Number(data.reorderLevel) || 50;
    this.expiryDate = data.expiryDate || '';
  }

  isLowStock() {
    return this.stockQuantity <= this.reorderLevel;
  }

  isExpired() {
    if (!this.expiryDate) return false;
    return new Date(this.expiryDate) < new Date();
  }
}

module.exports = InventoryItem;
