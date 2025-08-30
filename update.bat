@echo off
echo 正在更新相册...

:: 进入项目目录
cd /d "%~dp0"

:: 添加所有改动
echo 1. 添加文件到暂存区...
git add .

:: 提交更改
echo 2. 提交更改...
git commit -m "Auto-update from script"

:: 推送更改到 GitHub
echo 3. 推送到 GitHub...
git push origin master

echo.
echo 任务完成！请稍后访问你的网站查看更新。
pause