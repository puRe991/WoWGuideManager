import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';

const roots = ['src', 'scripts'];
const rules = [
  { name: 'no var declarations', pattern: /\bvar\s+\w/, allow: () => false },
  { name: 'no leftover console.log', pattern: /console\.log\(/, allow: (file) => file.startsWith('scripts/') },
  { name: 'no debugger statements', pattern: /\bdebugger\b/, allow: () => false },
  { name: 'no tab indentation', pattern: /\t/, allow: () => false }
];

function collectFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);
    if (stats.isDirectory()) return collectFiles(fullPath);
    if (extname(fullPath) === '.js' || extname(fullPath) === '.mjs') return [fullPath];
    return [];
  });
}

const files = roots.flatMap(collectFiles);
const violations = [];

for (const file of files) {
  execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });

  if (file === 'scripts/lint.mjs') continue;

  const content = readFileSync(file, 'utf8');
  for (const rule of rules) {
    if (rule.allow(file)) continue;
    if (rule.pattern.test(content)) {
      violations.push(`${file}: ${rule.name}`);
    }
  }
}

if (violations.length > 0) {
  console.error(`Lint failed with ${violations.length} issue(s):`);
  for (const violation of violations) {
    console.error(`- ${violation}`);
  }
  process.exit(1);
}

console.log(`Lint passed for ${files.length} file(s).`);
