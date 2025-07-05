@echo off
title Test Portfolio Backend

echo.
echo ===================================================
echo  🧪 Testing Backend Server...
echo ===================================================
echo.

REM Add Node.js path to PATH
set "PATH=C:\Program Files\nodejs;%PATH%"

cd backend

echo 📋 Checking Node.js version...
node --version

echo 📦 Checking dependencies...
if not exist "node_modules" (
    echo ❌ Dependencies not installed. Please run install.bat first.
    pause
    exit /b 1
)

echo 🔍 Checking server files...
if not exist "src\server.js" (
    echo ❌ Server file not found.
    pause
    exit /b 1
)

echo 🚀 Testing backend server for 5 seconds...
echo 🌐 API Server: http://localhost:3001
echo 📊 Health Check: http://localhost:3001/health
echo.

timeout /t 2 /nobreak >nul
start /b node src/server.js

echo Server started. Will auto-close after 5 seconds.
timeout /t 5 /nobreak >nul

echo.
echo ===================================================
echo  ✅ Backend test completed!
echo ===================================================
echo.
echo 🚀 To run actual server: start-backend.bat
echo 🌐 To run frontend: start-frontend.bat
echo.
pause
