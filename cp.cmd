@echo off
rd css
rd fonts
rd js
xcopy ..\dist .\ /s /f /h
