# Importar las librerías necesarias
from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import os

# Crear la instancia de FastAPI
app = FastAPI(
    title="Ejemplo GET y POST con Formularios",
    description="Aplicación que demuestra el uso de GET y POST con formularios HTML",
    version="1.0.0"
)

# Configurar las plantillas HTML
# La carpeta templates debe estar en el mismo directorio que main.py
templates = Jinja2Templates(directory=os.path.join(os.path.dirname(__file__), "templates"))

# RUTA GET: Página principal con el formulario
@app.get("/", response_class=HTMLResponse)
async def mostrar_formulario(request: Request):
    """
    Ruta GET que muestra la página principal con el formulario.
    Los estudiantes verán cómo se carga una página con GET.
    """
    return templates.TemplateResponse("formulario.html", {"request": request})

# RUTA POST: Procesar los datos del formulario
@app.post("/procesar-formulario")
async def procesar_formulario(request: Request, nombre: str = Form(...), edad: int = Form(...)):
    """
    Ruta POST que recibe los datos del formulario y decide a qué página redirigir.
    
    Args:
        nombre: El nombre enviado desde el formulario
        edad: La edad enviada desde el formulario
    
    Returns:
        Redirección a la página correspondiente según la edad
    """
    # Validar que los datos sean correctos
    if not nombre or not nombre.strip():
        # En un caso real, aquí manejarías el error apropiadamente
        return templates.TemplateResponse("formulario.html", {
            "request": request, 
            "error": "El nombre no puede estar vacío"
        })
    
    if edad < 1 or edad > 120:
        return templates.TemplateResponse("formulario.html", {
            "request": request, 
            "error": "La edad debe estar entre 1 y 120 años"
        })
    
    # Lógica principal: decidir a qué página redirigir según la edad
    if edad >= 18:
        # Mayor de edad: mostrar página para adultos
        return templates.TemplateResponse("mayor_edad.html", {
            "request": request,
            "nombre": nombre.strip().title(),  # Capitalizar el nombre
            "edad": edad
        })
    else:
        # Menor de edad: mostrar página para menores
        return templates.TemplateResponse("menor_edad.html", {
            "request": request,
            "nombre": nombre.strip().title(),  # Capitalizar el nombre
            "edad": edad
        })

# RUTAS GET ADICIONALES: Para acceder directamente a las páginas de resultado
@app.get("/mayor-edad", response_class=HTMLResponse)
async def vista_mayor_edad(request: Request):
    """
    Ruta GET alternativa para ver la página de mayores de edad.
    Útil para pruebas o acceso directo.
    """
    return templates.TemplateResponse("mayor_edad.html", {
        "request": request,
        "nombre": "Usuario de Ejemplo",
        "edad": 25
    })

@app.get("/menor-edad", response_class=HTMLResponse)
async def vista_menor_edad(request: Request):
    """
    Ruta GET alternativa para ver la página de menores de edad.
    Útil para pruebas o acceso directo.
    """
    return templates.TemplateResponse("menor_edad.html", {
        "request": request,
        "nombre": "Joven de Ejemplo",
        "edad": 15
    })

# Ruta de prueba (mantener la original)
@app.get("/ping")
def ping():
    """Ruta de prueba para verificar que el servidor funciona"""
    return {"message": "pong!", "status": "ok"}

# Ruta para mostrar información de la API
@app.get("/info")
def info_api():
    """
    Información sobre las rutas disponibles para los estudiantes
    """
    return {
        "mensaje": "API de Ejemplo - GET y POST con Formularios",
        "rutas_disponibles": {
            "GET /": "Página principal con formulario",
            "POST /procesar-formulario": "Procesa los datos del formulario",
            "GET /mayor-edad": "Vista para mayores de edad (ejemplo)",
            "GET /menor-edad": "Vista para menores de edad (ejemplo)",
            "GET /ping": "Ruta de prueba",
            "GET /info": "Esta información"
        },
        "explicacion": {
            "GET": "Se usa para obtener/mostrar páginas web",
            "POST": "Se usa para enviar datos desde formularios",
            "flujo": "GET (mostrar formulario) -> POST (procesar datos) -> GET (mostrar resultado)"
        }
    }

# Ejecutar la aplicación (solo para desarrollo)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)

# INSTRUCCIONES PARA EJECUTAR:
# 1. Activar el entorno virtual: source .venv/bin/activate
# 2. Instalar dependencias: pip install -r requirements.txt
# 3. Ejecutar: uvicorn app.main:app --reload
# 4. Abrir navegador en: http://127.0.0.1:8000