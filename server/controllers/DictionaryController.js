/**
 * Clinical Dictionaries API Controller (ICD-10, CPT, Drugs, Lab Reference)
 */

const fs = require('fs');
const path = require('path');

function readDict(name) {
  const p = path.join(__dirname, '..', 'dictionaries', `${name}.json`);
  if (fs.existsSync(p)) {
    return JSON.parse(fs.readFileSync(p, 'utf-8'));
  }
  return [];
}

class DictionaryController {
  static async getICD10(req, res) {
    const data = readDict('icd10_codes');
    const { q, chapter } = req.query;
    let filtered = data;
    if (q) {
      const search = q.toLowerCase();
      filtered = filtered.filter(item => item.code.toLowerCase().includes(search) || item.description.toLowerCase().includes(search));
    }
    if (chapter) {
      filtered = filtered.filter(item => item.chapter.toLowerCase().includes(chapter.toLowerCase()));
    }
    res.json({ success: true, count: filtered.length, data: filtered.slice(0, 100) });
  }

  static async getCPT(req, res) {
    const data = readDict('cpt_codes');
    const { q } = req.query;
    let filtered = data;
    if (q) {
      const search = q.toLowerCase();
      filtered = filtered.filter(item => item.code.includes(search) || item.description.toLowerCase().includes(search));
    }
    res.json({ success: true, count: filtered.length, data: filtered.slice(0, 100) });
  }

  static async getDrugs(req, res) {
    const data = readDict('drug_formulary');
    const { q } = req.query;
    let filtered = data;
    if (q) {
      const search = q.toLowerCase();
      filtered = filtered.filter(item => item.genericName.toLowerCase().includes(search) || (item.brandNames || []).some(b => b.toLowerCase().includes(search)));
    }
    res.json({ success: true, count: filtered.length, data: filtered.slice(0, 100) });
  }

  static async getLabReference(req, res) {
    const data = readDict('lab_reference_ranges');
    res.json({ success: true, data });
  }
}

module.exports = DictionaryController;
