@echo off
title Test Portfolio Backend

echo.
echo ===================================================
echo  🧪 백엔드 서버 테스트 중...
echo ===================================================
echo.

REM Node.js 경로를 PATH에 추가
set "PATH=C:\Program Files\nodejs;%PATH%"

cd backend

echo 📋 Node.js 버전 확인...
node --version

echo 📦 의존성 확인...
if not exist "node_modules" (
    echo ❌ 의존성이 설치되지 않았습니다. install.bat을 먼저 실행하세요.
    pause
    exit /b 1
)

echo 🔍 서버 파일 확인...
if not exist "src\server.js" (
    echo ❌ 서버 파일이 없습니다.
    pause
    exit /b 1
)

echo 🚀 백엔드 서버를 5초간 테스트 실행합니다...
echo 🌐 API 서버: http://localhost:3001
echo 📊 헬스체크: http://localhost:3001/health
echo.

timeout /t 2 /nobreak >nul
start /b node src/server.js

echo 서버가 시작되었습니다. 5초 후 자동으로 종료됩니다.
timeout /t 5 /nobreak >nul

echo.
echo ===================================================
echo  ✅ 백엔드 테스트가 완료되었습니다!
echo ===================================================
echo.
echo 🚀 실제 서버 실행: start-backend.bat
echo 🌐 프론트엔드 실행: start-frontend.bat
echo.
pause
