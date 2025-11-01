# 🎓 GUÍA PARA ESTUDIANTES - Formulario GET y POST

## 🚀 ¡Bienvenido al mundo de FastAPI!

Este proyecto te enseñará los conceptos fundamentales de desarrollo web backend usando Python.

## 📝 ¿Qué vas a aprender?

### 1. Métodos HTTP básicos
- **GET**: Para obtener/mostrar información
- **POST**: Para enviar/guardar información

### 2. Formularios HTML
- Cómo crear campos de entrada
- Cómo enviar datos al servidor
- Validación básica

### 3. Procesamiento en el backend
- Recibir datos del formulario
- Aplicar lógica de negocio
- Devolver respuestas dinámicas

## 🔍 Análisis del Código

### main.py - El cerebro de la aplicación

```python
# Esta ruta responde a GET y muestra el formulario
@app.get("/")
async def mostrar_formulario(request: Request):
    return templates.TemplateResponse("formulario.html", {"request": request})

# Esta ruta responde a POST y procesa los datos
@app.post("/procesar-formulario")
async def procesar_formulario(request: Request, nombre: str = Form(...), edad: int = Form(...)):
    # Aquí es donde sucede la magia:
    if edad >= 18:
        return templates.TemplateResponse("mayor_edad.html", {...})
    else:
        return templates.TemplateResponse("menor_edad.html", {...})
```

### Formulario HTML - La interfaz del usuario

```html
<!-- Este formulario envía datos con POST -->
<form action="/procesar-formulario" method="POST">
    <input type="text" name="nombre" required>
    <input type="number" name="edad" required>
    <button type="submit">Enviar</button>
</form>
```

## 🧪 Experimentos para Probar

### Experimento 1: Cambiar la edad límite
1. Ve a `main.py`
2. Encuentra la línea: `if edad >= 18:`
3. Cambia `18` por `21`
4. Guarda y prueba

### Experimento 2: Agregar más campos
1. Añade en `formulario.html`:
```html
<input type="email" name="email" placeholder="Tu email">
```
2. Modifica la función en `main.py`:
```python
async def procesar_formulario(request: Request, nombre: str = Form(...), edad: int = Form(...), email: str = Form(...)):
```

### Experimento 3: Crear nueva categoría
¿Qué tal una categoría para "adultos mayores" (65+)?

## 🎯 Desafíos Progresivos

### Nivel Principiante
1. ✅ Ejecuta la aplicación
2. ✅ Prueba con diferentes nombres y edades
3. ✅ Observa cómo cambia la URL en el navegador

### Nivel Intermedio
1. 🔄 Añade validación para nombres muy cortos
2. 🔄 Crea una página de error personalizada
3. 🔄 Añade más campos al formulario (ciudad, teléfono)

### Nivel Avanzado
1. 🚀 Guarda los datos en un archivo JSON
2. 🚀 Crea estadísticas de usuarios registrados
3. 🚀 Añade CSS personalizado

## 📊 Conceptos Importantes

### 1. Separación de Responsabilidades
- **HTML**: Estructura y contenido
- **CSS**: Apariencia y estilos
- **Python**: Lógica de negocio
- **FastAPI**: Servidor web

### 2. Flujo de Datos
```
Usuario rellena formulario → POST a /procesar-formulario → 
Servidor procesa datos → Decide qué página mostrar → 
Envía HTML al navegador → Usuario ve resultado
```

### 3. Debugging y Pruebas
- Usa `print()` para ver qué datos llegan
- Revisa la consola del navegador (F12)
- Mira los logs del servidor en la terminal

## 🛠️ Herramientas Útiles

### Para ver los datos que llegan:
```python
print(f"Nombre recibido: {nombre}")
print(f"Edad recibida: {edad}")
```

### Para agregar mensajes de error:
```python
if not nombre.strip():
    return {"error": "El nombre no puede estar vacío"}
```

## 🎨 Personalización

### Cambiar colores:
1. Abre cualquier archivo `.html`
2. Busca la sección `<style>`
3. Cambia los valores de `background-color`, `color`, etc.

### Añadir emojis:
Los emojis hacen todo más divertido: 🎉 📱 ⭐ 🔥 💡

## 📚 Recursos para Seguir Aprendiendo

1. **FastAPI Docs**: https://fastapi.tiangolo.com/
2. **HTML Forms**: https://www.w3schools.com/html/html_forms.asp
3. **CSS Básico**: https://www.w3schools.com/css/
4. **Python para Web**: https://tutorial.djangogirls.org/

## ❓ Preguntas Frecuentes

**P: ¿Por qué uso POST para el formulario?**
R: Porque enviamos datos al servidor. GET se usa para obtener información.

**P: ¿Puedo usar una base de datos?**
R: ¡Por supuesto! Este es solo el primer paso. Más adelante aprenderás SQLite, PostgreSQL, etc.

**P: ¿Es seguro este código?**
R: Para aprender, sí. Para producción necesitarías más validaciones y seguridad.

**P: ¿Funciona en móviles?**
R: Sí, pero puedes mejorarlo con CSS responsive.

## 🎉 ¡Enhorabuena!

Si llegaste hasta aquí, ya entiendes los conceptos básicos de desarrollo web con Python. 
¡Estás listo para proyectos más avanzados!

---
**¿Tienes dudas? ¡Pregunta a tu instructor! 👨‍🏫👩‍🏫**