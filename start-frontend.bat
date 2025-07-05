@echo off
setlocal enabledelayedexpansion
title Frontend Server - Portfolio
chcp 65001 >nul

echo.
echo ===================================================
echo  🎨 Starting Frontend Server...
echo ===================================================
echo.

echo 🔍 Checking Node.js installation...

REM Try to run node directly from common locations
"C:\Program Files\nodejs\node.exe" --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js found at: C:\Program Files\nodejs
    "C:\Program Files\nodejs\node.exe" --version
    set "PATH=C:\Program Files\nodejs;%PATH%"
    set "NODE_PATH=C:\Program Files\nodejs"
    echo.
    goto :nodejs_found
)

"C:\Program Files (x86)\nodejs\node.exe" --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js found at: C:\Program Files (x86)\nodejs
    "C:\Program Files (x86)\nodejs\node.exe" --version
    set "PATH=C:\Program Files (x86)\nodejs;%PATH%"
    set "NODE_PATH=C:\Program Files (x86)\nodejs"
    echo.
    goto :nodejs_found
)

REM Try from PATH
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js found in PATH
    node --version
    echo.
    goto :nodejs_found
)

REM If no Node.js found
echo ❌ Node.js not found in common locations
echo.
echo 🔧 To fix this issue:
echo    1. Download Node.js LTS from https://nodejs.org/
echo    2. Install with default settings
echo    3. Restart your computer (important!)
echo    4. Try running this script again
echo.
pause
exit /b 1

:nodejs_found

cd frontend

echo 📦 Checking frontend dependencies...
if not exist "node_modules" (
    echo 📦 Installing frontend dependencies...
    if defined NODE_PATH (
        "%NODE_PATH%\npm.cmd" install
    ) else (
        npm install
    )
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
)

echo ✅ Frontend dependencies are ready
echo.
echo 🚀 Starting frontend server...
echo 💡 Frontend will be available at: http://localhost:3000
echo 📝 Press Ctrl+C to stop the server
echo.

if defined NODE_PATH (
    "%NODE_PATH%\npm.cmd" start
) else (
    npm start
)

echo.
echo ===================================================
echo  🎨 Starting Frontend Server...
echo ===================================================
echo.

REM Check if Node.js is available
echo 🔍 Checking Node.js installation...

where node >nul 2>&1
if %errorlevel% neq 0 (
    REM Try common installation paths
    set COMMON_PATHS="%ProgramFiles%\nodejs" "%ProgramFiles(x86)%\nodejs" "%LOCALAPPDATA%\Programs\nodejs"
    set NODE_FOUND=0
    
    for %%P in (%COMMON_PATHS%) do (
        if exist "%%~P\node.exe" (
            set NODE_FOUND=1
            set PATH=%%~P;%PATH%
            echo ✅ Node.js found at: %%~P
            goto :nodejs_found
        )
    )
    
    if !NODE_FOUND! equ 0 (
        echo ❌ Node.js not found
        echo 💡 Please install Node.js from https://nodejs.org/
        pause
        exit /b 1
    )
)

:nodejs_found

cd frontend

echo 📦 Checking frontend dependencies...
if not exist "node_modules" (
    echo � Installing frontend dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
) else (
    echo ✅ Dependencies already installed
)

echo.
echo 🚀 Starting frontend server...
echo 🌐 Website: http://localhost:3000
echo 🔄 Browser will open automatically when dev server starts.
echo.

REM Add Node.js path to PATH
set "PATH=C:\Program Files\nodejs;%PATH%"

npm start
