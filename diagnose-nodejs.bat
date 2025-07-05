@echo off
setlocal enabledelayedexpansion
title Node.js Diagnostics - Portfolio
chcp 65001 >nul

echo.
echo ===================================================
echo  🔍 Node.js Installation Diagnostics
echo ===================================================
echo.

echo 📋 System Information:
echo OS: %OS%
echo Architecture: %PROCESSOR_ARCHITECTURE%
echo User: %USERNAME%
echo.

echo 🔍 Checking PATH environment variable...
echo Current PATH contains:
echo "%PATH%" | findstr /I "node" >nul
if %errorlevel% equ 0 (
    echo ✅ Node.js path found in PATH variable
    echo "%PATH%" | findstr /I "node"
) else (
    echo ❌ No Node.js path found in PATH variable
)
echo.

echo 🔍 Checking Node.js in standard locations...
set NODE_FOUND=0
set NODE_LOCATIONS=

REM Check common installation paths
set SEARCH_PATHS="%ProgramFiles%\nodejs" "%ProgramFiles(x86)%\nodejs" "%LOCALAPPDATA%\Programs\nodejs" "%USERPROFILE%\AppData\Roaming\npm"

for %%P in (%SEARCH_PATHS%) do (
    if exist "%%~P\node.exe" (
        set NODE_FOUND=1
        set NODE_LOCATIONS=!NODE_LOCATIONS! %%~P
        echo ✅ Found Node.js at: %%~P
        echo    Version: 
        "%%~P\node.exe" --version 2>nul
        echo    npm version:
        "%%~P\npm.cmd" --version 2>nul
        echo.
    ) else (
        echo ❌ Not found at: %%~P
    )
)

if !NODE_FOUND! equ 0 (
    echo.
    echo ❌ Node.js not found in any standard location
    echo.
    echo 🔧 To fix this:
    echo 1. Download Node.js from https://nodejs.org/
    echo 2. Choose LTS version (recommended)
    echo 3. Install with default settings
    echo 4. Make sure "Add to PATH" is checked during installation
    echo 5. Restart your computer
    echo 6. Open a new Command Prompt
    echo.
) else (
    echo.
    echo ✅ Node.js installations found at:
    echo !NODE_LOCATIONS!
    echo.
)

echo 🔍 Testing direct commands...
echo Testing 'node --version':
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ 'node' command works
    node --version
) else (
    echo ❌ 'node' command failed
)

echo.
echo Testing 'npm --version':
npm --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ 'npm' command works
    npm --version
) else (
    echo ❌ 'npm' command failed
)

echo.
echo Testing 'where node':
where node >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ 'where node' found:
    where node
) else (
    echo ❌ 'where node' failed - Node.js not in PATH
)

echo.
echo Testing 'where npm':
where npm >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ 'where npm' found:
    where npm
) else (
    echo ❌ 'where npm' failed - npm not in PATH
)

echo.
echo ===================================================
echo  💡 Recommendations:
echo ===================================================
echo.

if !NODE_FOUND! equ 0 (
    echo 1. Install Node.js from https://nodejs.org/
    echo 2. Choose the LTS version
    echo 3. Run the installer as Administrator
    echo 4. Restart your computer after installation
) else (
    node --version >nul 2>&1
    if %errorlevel% neq 0 (
        echo 1. Node.js is installed but not in PATH
        echo 2. Add the Node.js installation directory to your PATH
        echo 3. Restart your Command Prompt
        echo 4. Or run: setx PATH "%PATH%;!NODE_LOCATIONS!"
    ) else (
        echo ✅ Node.js is properly installed and configured!
        echo You can now use the portfolio project scripts.
    )
)

echo.
echo Press any key to exit...
pause >nul
