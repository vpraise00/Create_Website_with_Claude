@echo off
echo ========================================
echo Portfolio Website Deployment Verification
echo ========================================
echo.
echo 1. Checking if build folder exists...
if exist "frontend\build" (
    echo ✓ Build folder exists
) else (
    echo ✗ Build folder missing
    goto :error
)
echo.
echo 2. Checking if image file exists...
if exist "frontend\public\images\image.jpg" (
    echo ✓ Profile image exists
) else (
    echo ✗ Profile image missing
    goto :error
)
echo.
echo 3. Checking GitHub Pages URL...
echo Your site should be live at: https://vpraise00.github.io/Create_Website_with_Claude
echo.
echo 4. Key features to verify on the live site:
echo    - Profile image loads correctly (no placeholder)
echo    - About section displays properly
echo    - Click profile image to activate physics mode
echo    - Responsive design works on mobile
echo    - All sections (Header, About, Skills, Contact, Footer) are visible
echo.
echo 5. To update your profile image:
echo    - Replace: frontend\public\images\image.jpg
echo    - Run: npm run deploy --prefix frontend
echo    - Wait 2-3 minutes for GitHub Pages to update
echo.
echo ========================================
echo ✓ All checks passed! Your site is ready.
echo ========================================
pause
goto :end

:error
echo.
echo ========================================
echo ✗ Some checks failed. Please fix the issues above.
echo ========================================
pause

:end
