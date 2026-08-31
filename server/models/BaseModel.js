/**
 * Base Clinical Entity Model
 */

class BaseModel {
  constructor(attributes = {}) {
    this.id = attributes.id || null;
    this.createdAt = attributes.createdAt || new Date().toISOString();
    this.updatedAt = attributes.updatedAt || new Date().toISOString();
  }

  toJSON() {
    return { ...this };
  }

  validate() {
    return { valid: true, errors: [] };
  }
}

module.exports = BaseModel;
