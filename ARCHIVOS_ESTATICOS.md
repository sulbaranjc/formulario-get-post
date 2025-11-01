# 🎨 Guía de Archivos Estáticos - CSS y JavaScript

## 📁 Estructura de Archivos Estáticos

```
app/static/
├── css/
│   ├── formulario.css     # Estilos para la página del formulario
│   ├── mayor_edad.css     # Estilos para página de mayores de edad
│   ├── menor_edad.css     # Estilos para página de menores de edad
│   └── validacion.css     # Estilos para mensajes de validación JS
└── js/
    ├── formulario.js      # Validación y efectos del formulario
    └── resultados.js      # Interactividad en páginas de resultado
```

## 🎯 ¿Por qué Separar CSS y JavaScript?

### ✅ Ventajas de la Separación:

1. **Mejor Organización**: Cada tipo de archivo en su lugar
2. **Reutilización**: Los estilos se pueden usar en múltiples páginas
3. **Mantenimiento**: Más fácil encontrar y editar código específico
4. **Rendimiento**: Los navegadores pueden cachear archivos estáticos
5. **Colaboración**: Diseñadores y programadores pueden trabajar por separado
6. **Limpieza**: HTML más legible sin bloques de CSS/JS incrustados

### 📚 Buenas Prácticas Aplicadas:

- ✅ Archivos CSS separados por página/funcionalidad
- ✅ JavaScript modular y bien comentado
- ✅ Nombres de archivos descriptivos y consistentes
- ✅ Uso de `/static/` como prefijo estándar
- ✅ Animaciones CSS suaves y profesionales

## 🎨 Descripción de Archivos CSS

### 1. `formulario.css`
**Propósito**: Estilos para la página principal del formulario

**Características principales**:
- Layout centrado y responsive
- Efectos de hover en campos de entrada
- Animaciones suaves de transición
- Estilos para mensajes informativos
- Media queries para dispositivos móviles

```css
/* Ejemplo de estilo key */
.submit-btn:hover {
    background-color: #45a049;
    transform: translateY(-1px);
}
```

### 2. `mayor_edad.css`
**Propósito**: Estilos para la página de mayores de edad

**Características principales**:
- Gradiente de fondo profesional (azul/morado)
- Animaciones de entrada (slideInUp, bounceIn)
- Efectos hover en elementos de lista
- Esquema de colores para usuarios adultos
- Animación pulse en mensaje de bienvenida

```css
/* Ejemplo de animación */
@keyframes bounceIn {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
}
```

### 3. `menor_edad.css`
**Propósito**: Estilos para la página de menores de edad

**Características principales**:
- Gradiente de fondo juvenil (naranja/rojo)
- Animaciones divertidas (wobble, tada, bounce)
- Colores vibrantes y amigables
- Efectos especiales para elementos importantes
- Latido de corazón en contador de años

```css
/* Animación específica para jóvenes */
@keyframes heartBeat {
    0% { transform: scale(1); }
    14% { transform: scale(1.05); }
    28% { transform: scale(1); }
}
```

### 4. `validacion.css`
**Propósito**: Estilos para mensajes de validación JavaScript

**Características principales**:
- Mensajes de error, éxito e información
- Animaciones de entrada suaves
- Estados deshabilitados para botones
- Contador de caracteres estilizado

## 💻 Descripción de Archivos JavaScript

### 1. `formulario.js`
**Propósito**: Validación en tiempo real y efectos interactivos

**Funcionalidades principales**:

```javascript
// Validación en tiempo real
nombreInput.addEventListener('input', function() {
    const nombre = this.value.trim();
    if (nombre.length < 2) {
        showValidationMessage(this, '⚠️ Mínimo 2 caracteres', 'error');
    }
});
```

**Características**:
- ✅ Validación de nombre (2-50 caracteres)
- ✅ Validación de edad (1-120 años)
- ✅ Mensajes visuales dinámicos
- ✅ Habilitación/deshabilitación de botón
- ✅ Contador de caracteres en tiempo real
- ✅ Confirmación antes de envío
- ✅ Efectos visuales de focus/blur

### 2. `resultados.js`
**Propósito**: Interactividad en páginas de resultado

**Funcionalidades principales**:

```javascript
// Efecto typewriter para el nombre
const typeWriter = () => {
    if (i < textoOriginal.length) {
        nombreElement.textContent += textoOriginal.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
};
```

**Características**:
- ✅ Efecto máquina de escribir en el nombre
- ✅ Efectos hover dinámicos en listas
- ✅ Confirmación para volver al formulario
- ✅ Contador de tiempo en página
- ✅ Información adicional después de 10 segundos
- ✅ Funcionalidades específicas por edad:
  - **Mayores**: Botón de servicios premium
  - **Menores**: Juego interactivo + countdown

## 🔧 Configuración en FastAPI

Para servir archivos estáticos, agregamos en `main.py`:

```python
from fastapi.staticfiles import StaticFiles

# Montar archivos estáticos
app.mount("/static", StaticFiles(directory="app/static"), name="static")
```

## 📖 Uso en Templates HTML

### Enlazar CSS:
```html
<link rel="stylesheet" href="/static/css/formulario.css">
<link rel="stylesheet" href="/static/css/validacion.css">
```

### Enlazar JavaScript:
```html
<script src="/static/js/formulario.js"></script>
<script src="/static/js/resultados.js"></script>
```

## 🎯 Ejercicios para Estudiantes

### Nivel Principiante:
1. **Cambiar colores**: Modifica los colores en cualquier archivo CSS
2. **Personalizar mensajes**: Cambia los textos de validación en JS
3. **Añadir efectos**: Agrega más animaciones CSS

### Nivel Intermedio:
1. **Nuevo archivo CSS**: Crea estilos para una página de error
2. **Validación adicional**: Añade validación de email en el formulario
3. **Efectos sonoros**: Agrega sonidos con JavaScript

### Nivel Avanzado:
1. **Tema oscuro/claro**: Implementa un switch de temas
2. **Animaciones complejas**: Crea transiciones entre páginas
3. **Almacenamiento local**: Guarda preferencias del usuario

## 🛠️ Troubleshooting

### Problema: CSS no se carga
**Solución**: Verifica que la ruta `/static/css/` esté correcta

### Problema: JavaScript no funciona
**Solución**: Abre las herramientas de desarrollador (F12) y revisa errores

### Problema: Archivos no encontrados
**Solución**: Asegúrate de que `app.mount("/static", ...)` esté configurado

## 📈 Próximos Pasos

1. **Agregar imágenes**: Crear carpeta `/static/img/`
2. **Iconos personalizados**: Usar fuentes de iconos
3. **CSS Framework**: Integrar Bootstrap o Tailwind
4. **Build process**: Configurar minificación y optimización
5. **PWA**: Convertir en Progressive Web App

---

**💡 Recuerda**: Los archivos estáticos mejoran la experiencia del usuario y mantienen el código organizado. ¡Es una práctica fundamental en desarrollo web profesional!