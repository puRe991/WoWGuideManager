@echo off
setlocal EnableExtensions EnableDelayedExpansion

title WoW Guide Manager - Windows Setup und Build
cd /d "%~dp0"

echo ============================================================
echo  WoW Guide Manager - automatisches Windows/NPM Setup
echo ============================================================
echo.

call :ensure_node
if errorlevel 1 goto :failed

call :run "npm install" npm install
if errorlevel 1 goto :failed

call :run "npm run test" npm run test
if errorlevel 1 goto :failed

call :run "npm run build" npm run build
if errorlevel 1 goto :failed

call :run "npm run dist:win" npm run dist:win
if errorlevel 1 goto :failed

call :run_optional "npm run package:handoff" npm run package:handoff

echo.
echo ============================================================
echo  Fertig!
echo ============================================================
echo  Portable App:   release\WoW-Guide-Manager-0.1.0-portable\
echo  Browser Build:  dist\
echo  GitHub ZIP:     handoff\WoWGuideManager-source-handoff.zip
echo.
echo  Tipp: Falls GitHub Push in der Cloud blockiert ist, lade die
echo  ZIP-Datei aus handoff\ im Browser bei GitHub hoch.
echo.
pause
exit /b 0

:ensure_node
call :refresh_path
call :verify_node "vorhandene Installation"
if not errorlevel 1 exit /b 0

echo Node.js/npm wurde nicht gefunden oder ist nicht startbar. Installation wird versucht ...

where winget >nul 2>nul
if "%ERRORLEVEL%"=="0" (
  echo winget gefunden. Installiere Node.js LTS ueber winget ...
  winget install --id OpenJS.NodeJS.LTS --exact --source winget --silent --accept-package-agreements --accept-source-agreements
  if errorlevel 1 (
    echo winget konnte Node.js LTS nicht installieren. Portable Fallback wird versucht ...
  ) else (
    echo winget Installation beendet. Pruefe Node.js/npm ...
  )
  call :refresh_path
  call :verify_node "winget Installation"
  if not errorlevel 1 exit /b 0
)

echo winget war nicht verfuegbar oder Node.js/npm ist danach nicht startbar.
echo Installiere Node.js jetzt ohne MSI/Adminrechte als portable ZIP in .tools\node ...
call :install_portable_node
if errorlevel 1 (
  echo Portable Node.js Installation ist fehlgeschlagen.
  echo Bitte pruefe die Netzwerkverbindung oder installiere Node.js LTS manuell von https://nodejs.org/.
  start https://nodejs.org/
  exit /b 1
)

call :refresh_path
call :verify_node "portable ZIP Installation"
if not errorlevel 1 exit /b 0

echo Node.js/npm ist nach der portablen Installation noch nicht startbar.
echo Starte dieses Fenster neu oder installiere Node.js LTS manuell.
exit /b 1

:install_portable_node
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='Stop'; $ProgressPreference='SilentlyContinue'; $root=(Resolve-Path '.').Path; $tools=Join-Path $root '.tools'; $target=Join-Path $tools 'node'; New-Item -ItemType Directory -Force -Path $tools | Out-Null; $arch=if ([Environment]::Is64BitOperatingSystem) { if ($env:PROCESSOR_ARCHITECTURE -eq 'ARM64') { 'arm64' } else { 'x64' } } else { 'x86' }; $releases=Invoke-RestMethod 'https://nodejs.org/dist/index.json'; $release=$releases | Where-Object { $_.lts -ne $false -and $_.files -contains ('win-' + $arch + '-zip') } | Select-Object -First 1; if (-not $release -and $arch -eq 'arm64') { $arch='x64'; $release=$releases | Where-Object { $_.lts -ne $false -and $_.files -contains 'win-x64-zip' } | Select-Object -First 1 }; if (-not $release) { throw ('No Node.js LTS portable zip found for Windows ' + $arch) }; $zipName='node-' + $release.version + '-win-' + $arch + '.zip'; $url='https://nodejs.org/dist/' + $release.version + '/' + $zipName; $zip=Join-Path $env:TEMP $zipName; Write-Host ('Downloading portable Node.js ' + $release.version + ' for win-' + $arch); Invoke-WebRequest $url -OutFile $zip; $extract=Join-Path $tools ('node-' + $release.version + '-win-' + $arch); if (Test-Path $extract) { Remove-Item $extract -Recurse -Force }; Expand-Archive -LiteralPath $zip -DestinationPath $tools -Force; if (Test-Path $target) { Remove-Item $target -Recurse -Force }; Rename-Item -Path $extract -NewName 'node'; $node=Join-Path $target 'node.exe'; $npm=Join-Path $target 'npm.cmd'; if (!(Test-Path $node) -or !(Test-Path $npm)) { throw 'Portable Node.js extraction did not produce node.exe and npm.cmd' }; & $node --version; & $npm --version"
exit /b %ERRORLEVEL%

:refresh_path
set "PATH=%CD%\.tools\node;%ProgramFiles%\nodejs;%ProgramFiles(x86)%\nodejs;%LocalAppData%\Programs\nodejs;%AppData%\npm;%PATH%"
exit /b 0

:verify_node
set "VERIFY_SOURCE=%~1"
where node >nul 2>nul
if errorlevel 1 exit /b 1
where npm >nul 2>nul
if errorlevel 1 exit /b 1

call node --version >nul 2>nul
if errorlevel 1 exit /b 1
call npm --version >nul 2>nul
if errorlevel 1 exit /b 1

echo Node.js und npm sind startbar (%VERIFY_SOURCE%).
call node --version
call npm --version
exit /b 0

:run
echo.
echo ------------------------------------------------------------
echo  Fuehre aus: %~1
echo ------------------------------------------------------------
set "STEP_NAME=%~1"
shift
call %1 %2 %3 %4 %5 %6 %7 %8 %9
if errorlevel 1 (
  echo Fehler bei: %STEP_NAME%
  exit /b 1
)
exit /b 0

:run_optional
echo.
echo ------------------------------------------------------------
echo  Fuehre optional aus: %~1
echo ------------------------------------------------------------
set "STEP_NAME=%~1"
shift
call %1 %2 %3 %4 %5 %6 %7 %8 %9
if errorlevel 1 (
  echo Warnung: Optionaler Schritt fehlgeschlagen: %STEP_NAME%
  echo Das portable Build wurde bereits erstellt. Du kannst handoff spaeter erneut ausfuehren.
)
exit /b 0

:failed
echo.
echo ============================================================
echo  Setup/Build fehlgeschlagen.
echo ============================================================
echo  Pruefe die Fehlermeldung oben und starte setup-windows.bat erneut.
echo.
pause
exit /b 1
