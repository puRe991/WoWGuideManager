@echo off
setlocal
cd /d "%~dp0"

where powershell >nul 2>nul
if errorlevel 1 (
  echo WoW Guide Manager konnte nicht gestartet werden: Windows PowerShell wurde nicht gefunden.
  echo Bitte stelle sicher, dass Windows PowerShell installiert und im PATH verfuegbar ist.
  pause
  exit /b 1
)

powershell -NoProfile -STA -ExecutionPolicy Bypass -File "%~dp0WoWGuideManager.ps1" -DataPath "%~dp0app-data.json"
if errorlevel 1 (
  echo.
  echo WoW Guide Manager konnte nicht gestartet werden ^(Fehlercode %errorlevel%^).
  echo Pruefe, ob Windows PowerShell und .NET Framework 4.8+ ^(fuer WPF^) installiert sind.
  pause
  exit /b 1
)

exit /b 0
