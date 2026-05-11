import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const portable = path.join(root, 'release', 'WoW-Guide-Manager-0.1.0-portable');
const makePortable = process.argv.includes('--portable');

async function copyApp(target) {
  await mkdir(target, { recursive: true });
  await cp(path.join(root, 'index.html'), path.join(target, 'index.html'));
  await cp(path.join(root, 'src'), path.join(target, 'src'), { recursive: true });
}

async function main() {
  await rm(dist, { recursive: true, force: true });
  await copyApp(dist);

  if (makePortable) {
    await rm(portable, { recursive: true, force: true });
    await copyApp(path.join(portable, 'app'));
    await writeFile(
      path.join(portable, 'WoW Guide Manager.cmd'),
      '@echo off\r\nsetlocal\r\nstart "WoW Guide Manager" "%~dp0app\\index.html"\r\n',
      'utf8'
    );
    await writeFile(
      path.join(portable, 'README-PORTABLE.txt'),
      'WoW Guide Manager portable MVP\r\n\r\nStart: Doppelklicke "WoW Guide Manager.cmd" oder öffne app\\index.html in einem modernen Browser.\r\nAlle Dateien bleiben im portablen Ordner.\r\n',
      'utf8'
    );
  }

  if (!existsSync(path.join(dist, 'index.html'))) {
    throw new Error('Build failed: dist/index.html was not created.');
  }

  console.log(makePortable ? `Portable build created: ${portable}` : `Build created: ${dist}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
