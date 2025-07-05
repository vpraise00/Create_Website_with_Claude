@echo off
setlocal enabledelayedexpansion
title Portfolio - Quick Start
chcp 65001 >nul

echo.
echo ===================================================
echo  🚀 Portfolio Website Quick Start
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
echo 💡 Or run: diagnose-nodejs.bat for detailed diagnosis
echo.
pause
exit /b 1

:nodejs_found

echo 🔍 Checking npm availability...
if defined NODE_PATH (
    "%NODE_PATH%\npm.cmd" --version >nul 2>&1
    if %errorlevel% equ 0 (
        echo ✅ npm is available
        "%NODE_PATH%\npm.cmd" --version
        echo.
    ) else (
        echo ❌ npm not available at %NODE_PATH%
        pause
        exit /b 1
    )
) else (
    npm --version >nul 2>&1
    if %errorlevel% equ 0 (
        echo ✅ npm is available
        npm --version
        echo.
    ) else (
        echo ❌ npm not available
        pause
        exit /b 1
    )
)

echo 📦 Checking dependencies...
if not exist "node_modules" (
    echo 📦 Root dependencies not found. Installing...
    if defined NODE_PATH (
        "%NODE_PATH%\npm.cmd" install
    ) else (
        npm install
    )
    if %errorlevel% neq 0 (
        echo ❌ Failed to install root dependencies
        pause
        exit /b 1
    )
)

if not exist "backend\node_modules" (
    echo ❌ Backend dependencies not installed
    echo 🔧 Please run install.bat first
    pause
    exit /b 1
)

if not exist "frontend\node_modules" (
    echo ❌ Frontend dependencies not installed
    echo 🔧 Please run install.bat first
    pause
    exit /b 1
)

echo ✅ All dependencies are installed.
echo.

echo ===================================================
echo  🎯 Choose an execution option:
echo ===================================================
echo  1. Start both servers (recommended)
echo  2. Start backend only
echo  3. Start frontend only
echo  4. Build production version
echo  5. Exit
echo.

set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo.
    echo 🚀 Starting both servers...
    echo 📝 Press Ctrl+C to stop the servers
    echo.
    if defined NODE_PATH (
        "%NODE_PATH%\npm.cmd" start
    ) else (
        npm start
    )
) else if "%choice%"=="2" (
    echo.
    echo 🔧 Starting backend server only...
    cd backend
    if defined NODE_PATH (
        "%NODE_PATH%\npm.cmd" start
    ) else (
        npm start
    )
) else if "%choice%"=="3" (
    echo.
    echo 🎨 Starting frontend server only...
    cd frontend
    if defined NODE_PATH (
        "%NODE_PATH%\npm.cmd" start
    ) else (
        npm start
    )
) else if "%choice%"=="4" (
    echo.
    echo 🏗️ Building production version...
    if defined NODE_PATH (
        "%NODE_PATH%\npm.cmd" run build
    ) else (
        npm run build
    )
) else if "%choice%"=="5" (
    echo.
    echo 👋 Goodbye!
    exit /b 0
) else (
    echo.
    echo ❌ Invalid choice. Please run the script again.
    pause
    exit /b 1
)
