/**
 * Validates i18n JSON parity across bg/en/zh:
 *  - identical nested key structure
 *  - identical array lengths at the same key paths
 *  - expected gallery caption count matches public/gallery file count
 *
 * Run: node scripts/check-i18n.mjs
 */
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const locales = ['bg', 'en', 'zh'];
const messages = {};

for (const loc of locales) {
  const file = join(root, 'src', 'messages', `${loc}.json`);
  messages[loc] = JSON.parse(readFileSync(file, 'utf8'));
}

let errors = [];
let checks = 0;

function walkKeys(obj, path = '') {
  const keys = Object.keys(obj).sort();
  return { keys, path };
}

// Collect all key paths present in at least one locale
const allKeyPaths = new Set();
for (const loc of locales) {
  (function collect(node, path) {
    for (const [k, v] of Object.entries(node)) {
      const p = path ? `${path}.${k}` : k;
      allKeyPaths.add(p);
      if (v && typeof v === 'object' && !Array.isArray(v)) {
        collect(v, p);
      }
    }
  })(messages[loc], '');
}

// Check key presence parity
for (const loc of locales) {
  const present = new Set();
  (function collect(node, path) {
    for (const [k, v] of Object.entries(node)) {
      const p = path ? `${path}.${k}` : k;
      present.add(p);
      if (v && typeof v === 'object' && !Array.isArray(v)) collect(v, p);
    }
  })(messages[loc], '');
  for (const p of allKeyPaths) {
    checks++;
    if (!present.has(p)) errors.push(`[${loc}] missing key: ${p}`);
  }
}

// Check array length parity + expected counts
const expectedArrays = {
  'gallery.captions': 19,
  'faq.items': 10,
  'knowledge.sections': 6,
  'route.steps': 6,
  'reviews.items': 6,
  'intro.visitGuide.items': 4,
  'intro.alsoKnownAs.items': 4,
  'facilities.items': 8,
  'stories.items': 6,
  'sources.items': 7,
};

for (const [path, expected] of Object.entries(expectedArrays)) {
  const lengths = {};
  for (const loc of locales) {
    let node = messages[loc];
    let ok = true;
    for (const part of path.split('.')) {
      if (!node || !(part in node)) { ok = false; break; }
      node = node[part];
    }
    if (ok && Array.isArray(node)) lengths[loc] = node.length;
    checks++;
  }
  for (const loc of locales) {
    if (!(loc in lengths)) {
      errors.push(`[${loc}] array not found: ${path}`);
      continue;
    }
    if (lengths[loc] !== expected) {
      errors.push(`[${loc}] ${path} length ${lengths[loc]} != expected ${expected}`);
    }
  }
  // parity across locales
  const vals = Object.values(lengths);
  if (vals.length && new Set(vals).size > 1) {
    errors.push(`[parity] ${path} lengths differ: ${JSON.stringify(lengths)}`);
  }
}

// Check gallery images exist (01..19)
const galleryDir = join(root, 'public', 'gallery');
let galleryFiles;
try {
  galleryFiles = readdirSync(galleryDir).filter((f) => /\.jpg$/i.test(f)).sort();
} catch {
  galleryFiles = [];
}
for (let i = 1; i <= 19; i++) {
  const name = `youth-hill-${String(i).padStart(2, '0')}.jpg`;
  checks++;
  if (!galleryFiles.includes(name)) errors.push(`[gallery] missing file: ${name}`);
}
checks++;
if (galleryFiles.some((f) => /[() ]/.test(f))) {
  errors.push(`[gallery] filenames still contain spaces/parentheses: ${galleryFiles.filter((f) => /[() ]/.test(f)).join(', ')}`);
}

if (errors.length) {
  console.error(`FAIL (${checks} checks, ${errors.length} errors)`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}

console.log(`PASS (${checks} checks): bg/en/zh key parity OK, arrays OK, gallery 01..19 OK`);
