@echo offREM Check if Node.js is installed
echo 🔍 Checking Node.js installation...

REM First try to find Node.js in PATH
set NODE_FOUND=0
set NODE_PATH=

where node >nul 2>&1
if %errorlevel% equ 0 (
    set NODE_FOUND=1
    echo ✅ Node.js found in PATH
    goto :nodejs_found
)

REM Check common Node.js installation paths
set COMMON_PATHS="%ProgramFiles%\nodejs" "%ProgramFiles(x86)%\nodejs" "%USERPROFILE%\AppData\Roaming\npm" "%LOCALAPPDATA%\Programs\nodejs"

for %%P in (%COMMON_PATHS%) do (
    if exist "%%~P\node.exe" (
        set NODE_FOUND=1
        set NODE_PATH=%%~P
        echo ✅ Node.js found at: %%~P
        REM Add to PATH for this session
        set PATH=%%~P;%PATH%
        goto :nodejs_found
    )
)

REM If Node.js is still not found
if %NODE_FOUND% equ 0 (
    echo ❌ Node.js is not installed or not found in PATH.
    echo 🔧 Please install Node.js from https://nodejs.org/
    echo 💡 After installation, restart your computer and try again.
    echo.
    pause
    exit /b 1
)

:nodejs_found

REM Check if npm is available
where npm >nul 2>&1
if %errorlevel% neq 0 (
    if defined NODE_PATH (
        echo 💡 Using npm from Node.js installation directory
        set PATH=%NODE_PATH%;%PATH%
    ) else (
        echo ❌ npm is not available
        echo 🔧 Please reinstall Node.js from https://nodejs.org/
        echo.
        pause
        exit /b 1
    )
)nstall Dependencies
chcp 65001 >nul

echo.
echo ===================================================
echo  📦 Installing Portfolio Project Dependencies...
echo ===================================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed.
    echo � Please install Node.js from https://nodejs.org/
    echo 💡 Make sure to add Node.js to your system PATH.
    echo.
    pause
    exit /b 1
)

REM Check if npm is available
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not available.
    echo 🔧 Please reinstall Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo 📋 Checking Node.js and npm versions...
echo Node.js: 
node --version
echo npm: 
npm --version
echo.

echo 📦 Installing root dependencies...
npm install
if %errorlevel% neq 0 (
    echo ❌ Root dependency installation failed.
    echo 💡 Try running as administrator or check your internet connection.
    pause
    exit /b 1
)

echo.
echo 📦 Installing backend dependencies...
cd backend
npm install
if %errorlevel% neq 0 (
    echo ❌ Backend dependency installation failed.
    echo 💡 Try running as administrator or check your internet connection.
    cd ..
    pause
    exit /b 1
)

echo.
echo 📦 Installing frontend dependencies...
cd ..\frontend
npm install
if %errorlevel% neq 0 (
    echo ❌ Frontend dependency installation failed.
    echo 💡 Try running as administrator or check your internet connection.
    cd ..
    pause
    exit /b 1
)

cd ..

echo.
echo ===================================================
echo  ✅ All dependencies successfully installed!
echo ===================================================
echo.
echo 🚀 Quick Start Options:
echo.
echo 1. quick-start.bat     (Recommended - Auto start both servers)
echo 2. start-backend.bat   (Run Backend Server only)
echo 3. start-frontend.bat  (Run Frontend Server only)
echo 4. npm start           (Run both servers with concurrently)
echo.
echo 📝 See README.md for detailed instructions.
echo.
pause
