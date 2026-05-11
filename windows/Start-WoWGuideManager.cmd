@echo off
setlocal
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0WoWGuideManager.ps1" -DataPath "%~dp0app-data.json"
