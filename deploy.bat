@echo off
echo ===============================================
echo   🚀 GitHub Pages Deployment Script
echo ===============================================
echo.

cd /d "%~dp0"

echo 1. Checking Node.js and npm installation...
echo.

:: Check Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js not found. Please install from https://nodejs.org/
    pause
    exit /b 1
)

:: Check npm
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm not found. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed.
echo.

echo 2. Checking Git configuration...
echo.
git remote -v
if %errorlevel% neq 0 (
    echo [ERROR] Git repository not configured
    echo Please set up Git remote:
    echo   git remote add origin https://github.com/username/repository.git
    pause
    exit /b 1
)

echo ✅ Git repository is configured.
echo.

echo 3. Installing/updating gh-pages...
echo.
npm install gh-pages --save-dev
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install gh-pages
    pause
    exit /b 1
)

echo ✅ gh-pages package ready.
echo.

echo 4. Checking homepage configuration...
echo.
findstr "homepage" package.json
if %errorlevel% neq 0 (
    echo [WARNING] No homepage field found in package.json
    echo Please add: "homepage": "https://username.github.io/repository-name"
    echo [INFO] Continuing with deployment anyway...
    echo.
) else (
    echo ✅ Homepage configuration found.
    echo.
)

echo.
echo 5. Building React application...
echo.
npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed. Please check for errors above.
    pause
    exit /b 1
)

echo ✅ Build completed successfully.
echo.

echo 6. Deploying to GitHub Pages...
echo.
npm run deploy
if %errorlevel% neq 0 (
    echo [ERROR] Deployment failed.
    echo.
    echo Common solutions:
    echo   1. Check Git authentication (git config --global user.name/email)
    echo   2. Verify repository permissions
    echo   3. Ensure homepage URL is correct
    echo   4. Make sure gh-pages branch exists
    echo.
    pause
    exit /b 1
)

echo.
echo ===============================================
echo   🎉 Deployment Successful!
echo ===============================================
echo.
echo Your website should be available at:
findstr "homepage" package.json
echo.
echo Note: GitHub Pages may take a few minutes to update.
echo.
echo Next steps:
echo   1. Visit your GitHub repository
echo   2. Go to Settings → Pages
echo   3. Verify source is set to 'gh-pages' branch
echo.
pause
