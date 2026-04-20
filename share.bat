@echo off
echo ===================================================
echo ROOIBOS TRAVEL - MODO PUBLICO (RAPIDO)
echo ===================================================
echo.
echo Generando link publico... (No requiere clave)
echo.
echo Copia el link que termina en ".serveo.net"
echo.
ssh -R 80:localhost:5173 serveo.net
pause
