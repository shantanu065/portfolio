@echo off
echo Starting automated deployment...

echo.
echo 1. Adding changes to git...
git add .

echo.
echo 2. Committing changes...
git commit -m "Automated update via deploy script"

echo.
echo 3. Pushing to GitHub main branch...
git push origin main

echo.
echo 4. Deploying to live website...
cmd.exe /c npm run deploy

echo.
echo Deployment process finished! You can check your live site in a few minutes.
pause
