@echo off
echo ===============================================
echo   GitHub Pages Deployment Script
echo ===============================================
echo.

cd /d "%~dp0"

echo 1. Checking Node.js and npm installation...
echo.

:: Check if Node.js is installed
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH.
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

:: Check if npm is installed
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed or not in PATH.
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Node.js and npm are installed.
echo.

echo 2. Installing gh-pages package...
echo.
cd frontend
npm install gh-pages --save-dev
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install gh-pages package
    echo.
    pause
    exit /b 1
)

echo.
echo 3. Building the React app...
echo.
npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Failed to build React app
    echo.
    pause
    exit /b 1
)

echo.
echo 4. Deploying to GitHub Pages...
echo.
echo [INFO] Make sure you have:
echo   1. Created a GitHub repository
echo   2. Added 'homepage' field to package.json
echo   3. Set up Git remote origin
echo.
echo Press any key to continue with deployment...
pause

npm run deploy
if %errorlevel% neq 0 (
    echo [ERROR] Failed to deploy to GitHub Pages
    echo.
    echo Please check:
    echo   1. Git is installed and configured
    echo   2. You have push access to the repository
    echo   3. The 'homepage' field is set in package.json
    echo.
    pause
    exit /b 1
)

echo.
echo ===============================================
echo   Deployment completed successfully!
echo ===============================================
echo.
echo Your website should be available at:
echo https://[your-username].github.io/[repository-name]
echo.
echo Note: It may take a few minutes for changes to appear.
echo.
pause
