/**
 * Request Payload Validation Helper
 */

function validateSchema(data, schema) {
  const errors = [];
  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field];

    if (rules.required && (value === undefined || value === null || value === '')) {
      errors.push(`Field '${field}' is required.`);
      continue;
    }

    if (value !== undefined && value !== null) {
      if (rules.type === 'string' && typeof value !== 'string') {
        errors.push(`Field '${field}' must be a string.`);
      } else if (rules.type === 'number' && typeof value !== 'number' && isNaN(Number(value))) {
        errors.push(`Field '${field}' must be a valid number.`);
      } else if (rules.type === 'array' && !Array.isArray(value)) {
        errors.push(`Field '${field}' must be an array.`);
      } else if (rules.type === 'boolean' && typeof value !== 'boolean') {
        errors.push(`Field '${field}' must be a boolean.`);
      }

      if (rules.minLength && String(value).length < rules.minLength) {
        errors.push(`Field '${field}' must be at least ${rules.minLength} characters.`);
      }

      if (rules.enum && !rules.enum.includes(value)) {
        errors.push(`Field '${field}' must be one of [${rules.enum.join(', ')}].`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

module.exports = { validateSchema };
