const assert = require('assert');
const AuthService = require('../../server/services/AuthService');

describe('Authentication & Session Service', () => {
  test('authenticates valid clinician credentials', () => {
    const res = AuthService.login('dr.smith', 'PulseCare2026!');
    assert.strictEqual(res.success, true);
    assert.ok(res.token);
    assert.strictEqual(res.user.username, 'dr.smith');
  });

  test('rejects invalid password', () => {
    const res = AuthService.login('dr.smith', 'WrongPassword123!');
    assert.strictEqual(res.success, false);
  });

  test('rejects non-existent username', () => {
    const res = AuthService.login('nonexistent.user', 'AnyPassword');
    assert.strictEqual(res.success, false);
  });
});
