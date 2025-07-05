@echo off
title Portfolio Quick Start Guide

echo.
echo ===================================================
echo  🚀 Portfolio Website Quick Start Guide
echo ===================================================
echo.

echo 📋 Checking Node.js...
set "PATH=C:\Program Files\nodejs;%PATH%"

node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or path not found.
    echo 🔧 Solution:
    echo    1. Install Node.js from https://nodejs.org/
    echo    2. Restart computer
    echo    3. Update PATH in this script if needed
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js is installed.
node --version

echo.
echo 📦 Checking dependencies...
if not exist "backend\node_modules" (
    echo ❌ Backend dependencies not installed.
    echo 🔧 Please run install.bat first.
    pause
    exit /b 1
)

if not exist "frontend\node_modules" (
    echo ❌ Frontend dependencies not installed.
    echo 🔧 Please run install.bat first.
    pause
    exit /b 1
)

echo ✅ All dependencies are installed.

echo.
echo ===================================================
echo  🎯 Choose an execution option:
echo ===================================================
echo.
echo 1. Run Backend Server only
echo 2. Run Frontend Server only
echo 3. Test Backend Server
echo 4. View Full Guide
echo.
echo 💡 To see the full website, you need to run both backend and frontend
echo    (Run each in separate terminal windows)
echo.

set /p choice="Choose option (1-4): "

if "%choice%"=="1" (
    echo 🔧 Starting Backend Server...
    start start-backend.bat
) else if "%choice%"=="2" (
    echo 🎨 Starting Frontend Server...
    start start-frontend.bat
) else if "%choice%"=="3" (
    echo 🧪 Running Backend Test...
    start test-backend.bat
) else if "%choice%"=="4" (
    echo 📖 Opening README.md file for full guide.
    start notepad README.md
) else (
    echo ❌ Invalid selection.
)

echo.
echo ===================================================
echo  📝 Access URLs:
echo  🌐 Website: http://localhost:3000
echo  🔧 Backend API: http://localhost:3001
echo  📊 Health Check: http://localhost:3001/health
echo ===================================================
echo.
pause
