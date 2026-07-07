# Add Gemini CLI to Windows Explorer Context Menu
# This script adds "Open Gemini CLI here" to the right-click menu of folders.

$geminiPath = "C:\Users\PC\AppData\Roaming\npm\gemini.cmd"

if (-not (Test-Path $geminiPath)) {
    Write-Error "Gemini CLI not found at $geminiPath. Please check your installation."
    return
}

$registryPath = "Registry::HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\GeminiCLI"
$commandPath = "$registryPath\command"

if (-not (Test-Path $registryPath)) {
    New-Item -Path $registryPath -Force | Out-Null
}

Set-ItemProperty -Path $registryPath -Name "(Default)" -Value "Open Gemini CLI Here"
Set-ItemProperty -Path $registryPath -Name "Icon" -Value "cmd.exe"

if (-not (Test-Path $commandPath)) {
    New-Item -Path $commandPath -Force | Out-Null
}

Set-ItemProperty -Path $commandPath -Name "(Default)" -Value "cmd.exe /s /k chcp 65001 && pushd `"%V`" && gemini"

Write-Host "Gemini CLI context menu added successfully!" -ForegroundColor Green
Write-Host "Now you can right-click any folder background and select 'Gemini CLI 여기서 열기'."
