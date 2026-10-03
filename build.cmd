@echo off
python build.py
if %errorlevel% neq 0 (
  echo.
  echo Python is required. Install from python.org or the Microsoft Store.
)
pause
