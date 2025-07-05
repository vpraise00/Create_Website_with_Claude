@echo off
title Portfolio Quick Start Guide

echo.
echo ===================================================
echo  🚀 포트폴리오 웹사이트 빠른 실행 가이드
echo ===================================================
echo.

echo 📋 Node.js 확인 중...
set "PATH=C:\Program Files\nodejs;%PATH%"

node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js가 설치되어 있지 않거나 경로를 찾을 수 없습니다.
    echo 🔧 해결 방법:
    echo    1. https://nodejs.org/ 에서 Node.js 설치
    echo    2. 컴퓨터 재시작
    echo    3. 이 스크립트의 PATH 경로 수정
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js가 설치되어 있습니다.
node --version

echo.
echo 📦 의존성 확인 중...
if not exist "backend\node_modules" (
    echo ❌ 백엔드 의존성이 설치되지 않았습니다.
    echo 🔧 install.bat을 먼저 실행하세요.
    pause
    exit /b 1
)

if not exist "frontend\node_modules" (
    echo ❌ 프론트엔드 의존성이 설치되지 않았습니다.
    echo 🔧 install.bat을 먼저 실행하세요.
    pause
    exit /b 1
)

echo ✅ 모든 의존성이 설치되어 있습니다.

echo.
echo ===================================================
echo  🎯 실행 옵션을 선택하세요:
echo ===================================================
echo.
echo 1. 백엔드 서버만 실행
echo 2. 프론트엔드 서버만 실행
echo 3. 백엔드 테스트 실행
echo 4. 전체 가이드 보기
echo.
echo 💡 전체 웹사이트를 보려면 백엔드와 프론트엔드를 모두 실행해야 합니다.
echo    (각각 새 터미널 창에서 실행)
echo.

set /p choice="선택하세요 (1-4): "

if "%choice%"=="1" (
    echo 🔧 백엔드 서버를 실행합니다...
    start start-backend.bat
) else if "%choice%"=="2" (
    echo 🎨 프론트엔드 서버를 실행합니다...
    start start-frontend.bat
) else if "%choice%"=="3" (
    echo 🧪 백엔드 테스트를 실행합니다...
    start test-backend.bat
) else if "%choice%"=="4" (
    echo 📖 README.md 파일을 열어 전체 가이드를 확인하세요.
    start notepad README.md
) else (
    echo ❌ 잘못된 선택입니다.
)

echo.
echo ===================================================
echo  📝 접속 주소:
echo  🌐 웹사이트: http://localhost:3000
echo  🔧 백엔드 API: http://localhost:3001
echo  📊 헬스체크: http://localhost:3001/health
echo ===================================================
echo.
pause
