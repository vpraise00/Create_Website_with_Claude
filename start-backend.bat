@echo off
title Backend Server - Portfolio

echo.
echo ===================================================
echo  🔧 백엔드 서버를 시작합니다...
echo ===================================================
echo.

cd backend

echo 📦 의존성 확인 중...
if not exist "node_modules" (
    echo 📦 의존성을 설치합니다...
    set "PATH=C:\Program Files\nodejs;%PATH%"
    npm install
)

echo 🚀 백엔드 서버를 시작합니다...
echo 🌐 API 서버: http://localhost:3001
echo 📊 헬스체크: http://localhost:3001/health
echo.

REM Node.js 경로를 PATH에 추가
set "PATH=C:\Program Files\nodejs;%PATH%"

npm start
