/**
 * Clinical Input Data Validators
 */

function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidMRN(mrn) {
  if (!mrn || typeof mrn !== 'string') return false;
  return /^MRN-\d{4,8}$/i.test(mrn.trim());
}

function isValidPhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10;
}

function isValidDate(dateStr) {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  return !isNaN(d.getTime());
}

module.exports = {
  isValidEmail,
  isValidMRN,
  isValidPhone,
  isValidDate
};
