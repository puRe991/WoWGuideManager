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
call :refresh_path
call :verify_node "vorhandene Installation"
if not errorlevel 1 exit /b 0

echo Node.js/npm wurde nicht gefunden oder ist nicht startbar. Installation wird versucht ...

where winget >nul 2>nul
if "%ERRORLEVEL%"=="0" (
  echo winget gefunden. Installiere Node.js LTS ueber winget ...
  winget install --id OpenJS.NodeJS.LTS --exact --source winget --silent --accept-package-agreements --accept-source-agreements
  if errorlevel 1 (
    echo winget konnte Node.js LTS nicht installieren. Fallback wird versucht ...
  ) else (
    echo winget Installation beendet. Pruefe Node.js/npm ...
  )
  call :refresh_path
  call :verify_node "winget Installation"
  if not errorlevel 1 exit /b 0
)

echo winget war nicht verfuegbar oder die Installation war nicht erfolgreich.
echo Versuche Node.js LTS MSI automatisch per PowerShell herunterzuladen ...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='Stop'; $ProgressPreference='SilentlyContinue'; $releases=Invoke-RestMethod 'https://nodejs.org/dist/index.json'; $lts=$releases | Where-Object { $_.lts -ne $false } | Select-Object -First 1; if (-not $lts) { throw 'No LTS release found.' }; $url='https://nodejs.org/dist/' + $lts.version + '/node-' + $lts.version + '-x64.msi'; $installer=Join-Path $env:TEMP ('node-' + $lts.version + '-x64.msi'); Write-Host ('Downloading ' + $url); Invoke-WebRequest $url -OutFile $installer; $process=Start-Process msiexec.exe -Wait -PassThru -ArgumentList @('/i', $installer, '/qn', '/norestart'); if ($process.ExitCode -ne 0) { throw ('msiexec failed with exit code ' + $process.ExitCode) }"
if errorlevel 1 (
  echo Automatischer Node.js Download ist fehlgeschlagen.
  echo Bitte oeffne https://nodejs.org/ und installiere Node.js LTS manuell.
  start https://nodejs.org/
  exit /b 1
)

call :refresh_path
call :verify_node "MSI Installation"
if not errorlevel 1 exit /b 0

echo Node.js/npm ist nach der Installation noch nicht startbar.
echo Starte dieses Fenster neu oder installiere Node.js LTS manuell.
exit /b 1

:refresh_path
set "PATH=%ProgramFiles%\nodejs;%ProgramFiles(x86)%\nodejs;%LocalAppData%\Programs\nodejs;%AppData%\npm;%PATH%"
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

:failed
echo.
echo ============================================================
echo  Setup/Build fehlgeschlagen.
echo ============================================================
echo  Pruefe die Fehlermeldung oben und starte setup-windows.bat erneut.
echo.
pause
exit /b 1
