@echo off
title Frontend Server - Portfolio

echo.
echo ===================================================
echo  🎨 프론트엔드 서버를 시작합니다...
echo ===================================================
echo.

cd frontend

echo 📦 의존성 확인 중...
if not exist "node_modules" (
    echo 📦 의존성을 설치합니다...
    set "PATH=C:\Program Files\nodejs;%PATH%"
    npm install
)

echo 🚀 프론트엔드 서버를 시작합니다...
echo 🌐 웹사이트: http://localhost:3000
echo 🔄 개발 서버가 시작되면 브라우저가 자동으로 열립니다.
echo.

REM Node.js 경로를 PATH에 추가
set "PATH=C:\Program Files\nodejs;%PATH%"

npm start
