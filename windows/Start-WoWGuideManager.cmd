@echo off
setlocal EnableExtensions
cd /d "%~dp0"

set "APP_INDEX=%~dp0..\app\index.html"
if not exist "%APP_INDEX%" (
  echo WoW Guide Manager: App-Dateien wurden nicht gefunden ^(%APP_INDEX%^).
  echo Bitte fuehre zuerst "npm run dist:win" aus, um das portable Build zu erzeugen.
  pause
  exit /b 1
)

set "EDGE_EXE="
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" set "EDGE_EXE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if not defined EDGE_EXE if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" set "EDGE_EXE=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
if not defined EDGE_EXE (
  where msedge >nul 2>nul
  if not errorlevel 1 set "EDGE_EXE=msedge"
)

set "APP_URL=file:///%APP_INDEX:\=/%"

if defined EDGE_EXE (
  rem --app opens a chromeless window so the real app UI (styles.css, fonts, layout) shows exactly as designed.
  start "" "%EDGE_EXE%" --app="%APP_URL%"
) else (
  echo Microsoft Edge wurde nicht gefunden, oeffne die App im Standardbrowser ...
  start "" "%APP_URL%"
)

exit /b 0
