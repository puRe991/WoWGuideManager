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

call :run "npm run package:handoff" npm run package:handoff
if errorlevel 1 goto :failed

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
where node >nul 2>nul
set NODE_FOUND=%ERRORLEVEL%
where npm >nul 2>nul
set NPM_FOUND=%ERRORLEVEL%

if "%NODE_FOUND%"=="0" if "%NPM_FOUND%"=="0" (
  echo Node.js und npm wurden gefunden.
  node --version
  npm --version
  exit /b 0
)

echo Node.js/npm wurde nicht gefunden. Installation wird versucht ...

where winget >nul 2>nul
if "%ERRORLEVEL%"=="0" (
  echo winget gefunden. Installiere Node.js LTS ueber winget ...
  winget install --id OpenJS.NodeJS.LTS --exact --silent --accept-package-agreements --accept-source-agreements
  set "PATH=%ProgramFiles%\nodejs;%PATH%"
  where node >nul 2>nul
  set NODE_FOUND=%ERRORLEVEL%
  where npm >nul 2>nul
  set NPM_FOUND=%ERRORLEVEL%
  if "!NODE_FOUND!"=="0" if "!NPM_FOUND!"=="0" (
    echo Node.js und npm wurden erfolgreich installiert.
    node --version
    npm --version
    exit /b 0
  )
)

echo winget war nicht verfuegbar oder die Installation war nicht erfolgreich.
echo Versuche Node.js LTS MSI automatisch per PowerShell herunterzuladen ...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='Stop'; $ProgressPreference='SilentlyContinue'; $releases=Invoke-RestMethod 'https://nodejs.org/dist/index.json'; $lts=$releases | Where-Object { $_.lts -ne $false } | Select-Object -First 1; if (-not $lts) { throw 'No LTS release found.' }; $url='https://nodejs.org/dist/' + $lts.version + '/node-' + $lts.version + '-x64.msi'; $installer=Join-Path $env:TEMP ('node-' + $lts.version + '-x64.msi'); Write-Host ('Downloading ' + $url); Invoke-WebRequest $url -OutFile $installer; Start-Process msiexec.exe -Wait -ArgumentList @('/i', $installer, '/qn', '/norestart')"
if errorlevel 1 (
  echo Automatischer Node.js Download ist fehlgeschlagen.
  echo Bitte oeffne https://nodejs.org/ und installiere Node.js LTS manuell.
  start https://nodejs.org/
  exit /b 1
)

set "PATH=%ProgramFiles%\nodejs;%PATH%"
where node >nul 2>nul
set NODE_FOUND=%ERRORLEVEL%
where npm >nul 2>nul
set NPM_FOUND=%ERRORLEVEL%
if "%NODE_FOUND%"=="0" if "%NPM_FOUND%"=="0" (
  echo Node.js und npm wurden erfolgreich installiert.
  node --version
  npm --version
  exit /b 0
)

echo Node.js/npm ist nach der Installation noch nicht im PATH.
echo Starte dieses Fenster neu oder installiere Node.js LTS manuell.
exit /b 1

:run
echo.
echo ------------------------------------------------------------
echo  Fuehre aus: %~1
echo ------------------------------------------------------------
set "STEP_NAME=%~1"
%~2 %~3 %~4 %~5 %~6 %~7 %~8 %~9
if errorlevel 1 (
  echo Fehler bei: %STEP_NAME%
  exit /b 1
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
