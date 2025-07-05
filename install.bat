@echo off
title Portfolio - Install Dependencies

echo.
echo ===================================================
echo  📦 포트폴리오 프로젝트 의존성을 설치합니다...
echo ===================================================
echo.

REM Node.js 경로를 PATH에 추가
set "PATH=C:\Program Files\nodejs;%PATH%"

echo 📋 Node.js 및 npm 버전 확인 중...
node --version
npm --version

if %errorlevel% neq 0 (
    echo ❌ Node.js가 설치되어 있지 않습니다.
    echo 🔧 https://nodejs.org/ 에서 Node.js를 설치해주세요.
    echo 💡 또는 다른 경로에 설치되어 있다면 이 스크립트의 PATH를 수정해주세요.
    pause
    exit /b 1
)

echo.
echo 📦 백엔드 의존성 설치 중...
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

cd ..

echo.
echo ===================================================
echo  ✅ 모든 의존성이 성공적으로 설치되었습니다!
echo ===================================================
echo.
echo 🚀 이제 다음 중 하나를 선택하여 실행하세요:
echo.
echo 1. start-backend.bat   (백엔드 서버 실행)
echo 2. start-frontend.bat  (프론트엔드 서버 실행)
echo 3. 또는 두 파일을 각각 실행하세요
echo.
echo 📝 자세한 내용은 README.md 파일을 참조하세요.
echo.
pause
