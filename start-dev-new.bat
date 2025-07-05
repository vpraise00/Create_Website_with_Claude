@echo off
title Portfolio Development Environment

echo.
echo ===================================================
echo  🚀 Starting Portfolio Website Development Environment...
echo ===================================================
echo.

echo 📋 Checking Node.js and npm versions...
node --version
npm --version

if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or not in PATH.
    echo 🔧 Solution:
    echo    1. Install Node.js: https://nodejs.org/
    echo    2. Restart command prompt
    echo    3. Restart computer
    pause
    exit /b 1
)

echo.
echo 📦 Installing backend dependencies...
cd backend
npm install

if %errorlevel% neq 0 (
    echo ❌ Backend dependency installation failed.
    pause
    exit /b 1
)

echo.
echo 📦 Installing frontend dependencies...
cd ..\frontend
npm install

if %errorlevel% neq 0 (
    echo ❌ Frontend dependency installation failed.
    pause
    exit /b 1
)

echo.
echo ===================================================
echo  ✅ Dependencies installation completed!
echo ===================================================
echo.
echo 🚀 To start servers, run the following commands:
echo.
echo 1. Backend (in new terminal):
echo    cd backend
echo    npm start
echo.
echo 2. Frontend (in another new terminal):
echo    cd frontend
echo    npm start
echo.
echo 3. Access in browser:
echo    http://localhost:3000
echo.
echo ===================================================
echo.
pause
