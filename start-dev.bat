@echo off
title Portfolio Development Environment

echo.
echo ===================================================
echo  🚀 포트폴리오 웹사이트 개발 환경을 시작합니다...
echo ===================================================
echo.

echo � Node.js 및 npm 버전 확인 중...
node --version
npm --version

if %errorlevel% neq 0 (
    echo ❌ Node.js가 설치되어 있지 않거나 PATH에 추가되지 않았습니다.
    echo 🔧 해결방법:
    echo    1. Node.js 설치: https://nodejs.org/
    echo    2. 명령 프롬프트 재시작
    echo    3. 컴퓨터 재시작
    pause
    exit /b 1
)

echo.
echo �📦 백엔드 의존성 설치 중...
cd backend
npm install

if %errorlevel% neq 0 (
    echo ❌ 백엔드 의존성 설치에 실패했습니다.
    pause
    exit /b 1
)

echo.
echo 📦 프론트엔드 의존성 설치 중...
cd ..\frontend
npm install

if %errorlevel% neq 0 (
    echo ❌ 프론트엔드 의존성 설치에 실패했습니다.
    pause
    exit /b 1
)

echo.
echo ===================================================
echo  ✅ 의존성 설치가 완료되었습니다!
echo ===================================================
echo.
echo 🚀 서버를 시작하려면 다음 명령어를 실행하세요:
echo.
echo 1. 백엔드 실행 (새 터미널에서):
echo    cd backend
echo    npm start
echo.
echo 2. 프론트엔드 실행 (또 다른 새 터미널에서):
echo    cd frontend
echo    npm start
echo.
echo 3. 브라우저에서 접속:
echo    http://localhost:3000
echo.
echo ===================================================
echo.
pause
