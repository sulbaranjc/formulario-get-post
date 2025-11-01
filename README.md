# 📝 Proyecto: Formulario GET y POST con FastAPI

## 📋 Descripción del Proyecto

Este proyecto demuestra el uso básico de los métodos HTTP **GET** y **POST** en FastAPI usando formularios HTML. Es un ejemplo educativo perfecto para enseñar a los estudiantes cómo funciona la comunicación entre frontend y backend.

## 🎯 Objetivos de Aprendizaje

- ✅ Entender la diferencia entre GET y POST
- ✅ Crear formularios HTML que envían datos al backend
- ✅ Procesar datos de formularios en FastAPI
- ✅ Usar plantillas HTML con Jinja2
- ✅ Implementar lógica condicional en el backend
- ✅ Manejo básico de validación de datos

## 🏗️ Estructura del Proyecto

```
formulario-get-post/
├── app/
│   ├── main.py              # Archivo principal con las rutas de FastAPI
│   ├── templates/           # Carpeta con las plantillas HTML
│   │   ├── formulario.html  # Página principal con el formulario
│   │   ├── mayor_edad.html  # Página para mayores de edad
│   │   └── menor_edad.html  # Página para menores de edad
│   └── __pycache__/        # Archivos compilados de Python
├── requirements.txt         # Dependencias del proyecto
└── README.md               # Este archivo de documentación
```

## 🔄 Flujo de la Aplicación

1. **GET /** → Muestra el formulario inicial
2. **POST /procesar-formulario** → Recibe los datos del formulario
3. **Lógica del servidor** → Decide según la edad:
   - Si edad ≥ 18: Muestra página para mayores de edad
   - Si edad < 18: Muestra página para menores de edad

## 🚀 Instrucciones para Ejecutar

### Prerequisitos
- Python 3.8 o superior
- pip (gestor de paquetes de Python)

### Pasos para ejecutar:

1. **Activar el entorno virtual**:
   ```bash
   source .venv/bin/activate
   ```

2. **Instalar las dependencias**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Ejecutar la aplicación**:
   ```bash
   uvicorn app.main:app --reload
   ```

4. **Abrir el navegador**:
   - Ve a: http://127.0.0.1:8000
   - La aplicación estará funcionando

## 🌐 Rutas Disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Página principal con el formulario |
| POST | `/procesar-formulario` | Procesa los datos del formulario |
| GET | `/mayor-edad` | Vista de ejemplo para mayores de edad |
| GET | `/menor-edad` | Vista de ejemplo para menores de edad |
| GET | `/ping` | Ruta de prueba del servidor |
| GET | `/info` | Información sobre la API |

## 🧠 Conceptos Técnicos Explicados

### GET vs POST

- **GET**: Se usa para **obtener** información del servidor
  - Los datos van en la URL
  - Es visible en la barra de direcciones
  - Se puede guardar en marcadores
  - Ideal para mostrar páginas

- **POST**: Se usa para **enviar** información al servidor
  - Los datos van en el cuerpo de la petición
  - No es visible en la URL
  - Más seguro para datos sensibles
  - Ideal para formularios

### Componentes del Proyecto

1. **FastAPI**: Framework web para crear APIs rápidas
2. **Jinja2**: Motor de plantillas para generar HTML dinámico
3. **python-multipart**: Para manejar datos de formularios
4. **HTML Forms**: Formularios web estándar
5. **CSS**: Estilos para hacer las páginas atractivas

## 📚 Para los Estudiantes

### Lo que aprenderás:

1. **Cómo crear un servidor web básico**
2. **Diferencias prácticas entre GET y POST**
3. **Cómo procesar datos de formularios**
4. **Lógica condicional en el backend**
5. **Generación de páginas HTML dinámicas**

### Experimentos sugeridos:

1. **Cambiar la edad límite**: Modifica el `18` por otro número
2. **Agregar más campos**: Añade email, teléfono, etc.
3. **Crear nuevas páginas**: Para diferentes rangos de edad
4. **Mejorar la validación**: Añadir más verificaciones
5. **Personalizar el diseño**: Cambiar colores y estilos CSS

## 🔧 Troubleshooting

### Problemas comunes:

1. **Error: ModuleNotFoundError**
   - Solución: Asegúrate de tener activado el entorno virtual

2. **Error: Port already in use**
   - Solución: Cambia el puerto en main.py o mata el proceso existente

3. **Formulario no funciona**
   - Verifica que las rutas en HTML coincidan con las de main.py

4. **Templates no encontrados**
   - Asegúrate de que la carpeta templates esté en app/

## 💡 Ideas para Expandir el Proyecto

- 🗃️ Conectar a una base de datos
- 🔐 Añadir autenticación de usuarios
- 📊 Crear dashboard con estadísticas
- 📧 Enviar emails de confirmación
- 🎨 Hacer el diseño responsive
- ⚡ Añadir JavaScript para interactividad

## 📖 Recursos Adicionales

- [Documentación de FastAPI](https://fastapi.tiangolo.com/)
- [Tutorial de Jinja2](https://jinja.palletsprojects.com/)
- [Guía de formularios HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element/form)
- [HTTP Methods explicados](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)

---

**¡Diviértete aprendiendo! 🚀**