import { mkdir, readdir, rm, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const root = process.cwd();
const handoffDir = path.join(root, 'handoff');
const archiveName = 'WoWGuideManager-source-handoff.zip';
const archivePath = path.join(handoffDir, archiveName);
const excludedDirectories = new Set(['.git', '.tools', 'dist', 'release', 'handoff', 'node_modules']);
const excludedFiles = new Set(['.DS_Store']);

async function listProjectFiles(directory = root) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.') && excludedDirectories.has(entry.name)) {
      continue;
    }

    if (entry.isDirectory() && excludedDirectories.has(entry.name)) {
      continue;
    }

    if (excludedFiles.has(entry.name) || entry.name.startsWith('npm-debug.log')) {
      continue;
    }

    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.relative(root, absolutePath).replaceAll(path.sep, '/');

    if (entry.isDirectory()) {
      files.push(...(await listProjectFiles(absolutePath)));
      continue;
    }

    if (entry.isFile()) {
      files.push(relativePath);
    }
  }

  return files.sort((a, b) => a.localeCompare(b));
}

function listGitFiles() {
  const trackedFiles = spawnSync('git', ['ls-files'], { cwd: root, encoding: 'utf8' });

  if (trackedFiles.status !== 0) {
    return [];
  }

  return trackedFiles.stdout
    .split('\n')
    .map((file) => file.trim())
    .filter(Boolean)
    .filter((file) => !file.startsWith('handoff/'));
}

async function getPackageFiles() {
  const gitFiles = listGitFiles();

  if (gitFiles.length > 0) {
    return gitFiles;
  }

  console.warn('Git tracked files unavailable; packaging project files by directory scan instead.');
  return listProjectFiles();
}

function quotePowerShell(value) {
  return `'${value.replaceAll("'", "''")}'`;
}

function createArchive(files) {
  if (process.platform === 'win32') {
    const literalPaths = files.map((file) => quotePowerShell(path.join(root, file))).join(',');
    const command = `$files=@(${literalPaths}); Compress-Archive -LiteralPath $files -DestinationPath ${quotePowerShell(archivePath)} -Force`;
    return spawnSync('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-Command', command], { cwd: root, encoding: 'utf8' });
  }

  return spawnSync('zip', ['-q', archivePath, ...files], { cwd: root, encoding: 'utf8' });
}

await mkdir(handoffDir, { recursive: true });
await rm(archivePath, { force: true });

const files = await getPackageFiles();

if (files.length === 0) {
  console.error('Unable to find files for source handoff archive.');
  process.exit(1);
}

const zip = createArchive(files);

if (zip.status !== 0) {
  console.error(zip.stderr || zip.stdout || 'Unable to create source handoff zip.');
  process.exit(zip.status ?? 1);
}

if (!existsSync(archivePath)) {
  console.error(`Archive was not created: ${archivePath}`);
  process.exit(1);
}

const archiveStats = await stat(archivePath);
console.log(`Source handoff archive created: ${archivePath}`);
console.log(`Packaged ${files.length} files (${archiveStats.size} bytes).`);
