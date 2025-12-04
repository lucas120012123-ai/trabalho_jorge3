@echo off
echo ========================================
echo Iniciando aplicacao de Consulta CNPJ
echo ========================================
echo.
echo Instalando dependencias do Python...
pip install -r requirements.txt
echo.
echo Iniciando FastAPI Backend na porta 8000...
echo.
start cmd /k "cd src\Api && uvicorn main:app --reload --host 0.0.0.0 --port 8000"
timeout /t 3
echo.
echo Iniciando React Frontend na porta 5173...
echo.
npm install
npm run dev
