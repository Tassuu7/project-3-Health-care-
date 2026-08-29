/**
 * Clinical Currency, Phone, and Medical Data Formatters
 */

function formatCurrency(amount, currency = 'USD') {
  const num = Number(amount) || 0;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(num);
}

function formatPhoneNumber(phone) {
  if (!phone) return '';
  const cleaned = ('' + phone).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

function formatBloodPressure(sys, dia) {
  if (!sys || !dia) return 'N/A';
  return `${sys}/${dia} mmHg`;
}

module.exports = {
  formatCurrency,
  formatPhoneNumber,
  formatBloodPressure
};
