@echo off
echo Running Context Menu Setup...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0add-to-context-menu.ps1"
pause
