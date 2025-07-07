@echo off
echo ===============================================
echo   🚀 Quick GitHub Pages Deploy
echo ===============================================
echo.

cd /d "%~dp0\frontend"

echo 📦 Building React app...
npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed!
    pause
    exit /b 1
)

echo ✅ Build successful!
echo.

echo 🚀 Deploying to GitHub Pages...
npx gh-pages -d build -r https://github.com/vpraise00/Create_Website_with_Claude.git
if %errorlevel% neq 0 (
    echo [ERROR] Deploy failed!
    echo.
    echo Try these solutions:
    echo 1. Make sure you're logged into Git
    echo 2. Check if repository exists on GitHub
    echo 3. Verify homepage URL in package.json
    echo 4. Check Git user configuration:
    echo    git config --global user.name "Your Name"
    echo    git config --global user.email "your@email.com"
    echo.
    pause
    exit /b 1
)

echo.
echo ===============================================
echo   🎉 Deployment Complete!
echo ===============================================
echo.
echo Your website: https://vpraise00.github.io/Create_Website_with_Claude
echo.
echo ⏳ GitHub Pages may take 2-5 minutes to update.
echo 📋 Check GitHub repository Settings → Pages for status
echo.
pause
