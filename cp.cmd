@echo off
cd qiuzhijin.github.io
rd css
rd fonts
rd js
xcopy ..\dist .\ /s /f /h

git add *
git commit -m "Auto add"
git push
