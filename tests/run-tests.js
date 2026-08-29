/**
 * PulseCare Automated Test Runner
 * Executes unit and integration test suites with assertion reporting.
 */

const fs = require('fs');
const path = require('path');
const { initializeDatabase } = require('../server/database/storage');

// Initialize database in memory
initializeDatabase();

let totalPassed = 0;
let totalFailed = 0;
const failures = [];

global.test = function(description, fn) {
  try {
    fn();
    totalPassed++;
    console.log(`  [PASS] ${description}`);
  } catch (err) {
    totalFailed++;
    failures.push({ description, error: err });
    console.error(`  [FAIL] ${description}`);
    console.error(`    ${err.message}`);
  }
};

global.describe = function(suiteName, fn) {
  console.log(`\n[Suite] ${suiteName}`);
  fn();
};

async function runAllTests() {
  console.log('================================================================');
  console.log(' PULSECARE AUTOMATED CLINICAL TEST SUITE RUNNER');
  console.log('================================================================');

  const unitDir = path.join(__dirname, 'unit');
  const integDir = path.join(__dirname, 'integration');

  const testFiles = [];

  if (fs.existsSync(unitDir)) {
    const files = fs.readdirSync(unitDir).filter(f => f.endsWith('.test.js'));
    for (const f of files) testFiles.push(path.join(unitDir, f));
  }

  if (fs.existsSync(integDir)) {
    const files = fs.readdirSync(integDir).filter(f => f.endsWith('.test.js'));
    for (const f of files) testFiles.push(path.join(integDir, f));
  }

  for (const file of testFiles) {
    require(file);
  }

  console.log('\n================================================================');
  console.log(` TEST SUMMARY: ${totalPassed} Passed, ${totalFailed} Failed`);
  console.log('================================================================');

  if (totalFailed > 0) {
    console.error(`\n${totalFailed} test(s) failed!`);
    process.exit(1);
  } else {
    console.log('\nAll clinical unit and integration tests passed successfully!');
    process.exit(0);
  }
}

runAllTests();
