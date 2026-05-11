import { mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const root = process.cwd();
const handoffDir = path.join(root, 'handoff');
const archiveName = 'WoWGuideManager-source-handoff.zip';
const archivePath = path.join(handoffDir, archiveName);

const trackedFiles = spawnSync('git', ['ls-files'], { cwd: root, encoding: 'utf8' });

if (trackedFiles.status !== 0) {
  console.error(trackedFiles.stderr || 'Unable to list tracked files.');
  process.exit(trackedFiles.status ?? 1);
}

await mkdir(handoffDir, { recursive: true });
await rm(archivePath, { force: true });

const files = trackedFiles.stdout
  .split('\n')
  .map((file) => file.trim())
  .filter(Boolean)
  .filter((file) => !file.startsWith('handoff/'));

function quotePowerShell(value) {
  return `'${value.replaceAll("'", "''")}'`;
}

function createArchive() {
  if (process.platform === 'win32') {
    const literalPaths = files.map((file) => quotePowerShell(path.join(root, file))).join(',');
    const command = `$files=@(${literalPaths}); Compress-Archive -LiteralPath $files -DestinationPath ${quotePowerShell(archivePath)} -Force`;
    return spawnSync('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-Command', command], { cwd: root, encoding: 'utf8' });
  }

  return spawnSync('zip', ['-q', archivePath, ...files], { cwd: root, encoding: 'utf8' });
}

const zip = createArchive();

if (zip.status !== 0) {
  console.error(zip.stderr || zip.stdout || 'Unable to create source handoff zip.');
  process.exit(zip.status ?? 1);
}

if (!existsSync(archivePath)) {
  console.error(`Archive was not created: ${archivePath}`);
  process.exit(1);
}

console.log(`Source handoff archive created: ${archivePath}`);
