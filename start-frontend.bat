@echo off
title Frontend Server - Portfolio

echo.
echo ===================================================
echo  🎨 Starting Frontend Server...
echo ===================================================
echo.

cd frontend

echo 📦 Checking dependencies...
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    set "PATH=C:\Program Files\nodejs;%PATH%"
    npm install
)

echo 🚀 Starting frontend server...
echo 🌐 Website: http://localhost:3000
echo 🔄 Browser will open automatically when dev server starts.
echo.

REM Add Node.js path to PATH
set "PATH=C:\Program Files\nodejs;%PATH%"

npm start
