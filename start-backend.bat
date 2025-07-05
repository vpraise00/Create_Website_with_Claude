@echo off
title Backend Server - Portfolio

echo.
echo ===================================================
echo  🔧 Starting Backend Server...
echo ===================================================
echo.

cd backend

echo 📦 Checking dependencies...
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    set "PATH=C:\Program Files\nodejs;%PATH%"
    npm install
)

echo 🚀 Starting backend server...
echo 🌐 API Server: http://localhost:3001
echo 📊 Health Check: http://localhost:3001/health
echo.

REM Add Node.js path to PATH
set "PATH=C:\Program Files\nodejs;%PATH%"

npm start
