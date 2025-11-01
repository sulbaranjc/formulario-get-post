/**
 * JavaScript para el formulario principal
 * Funcionalidades: validación en tiempo real, efectos visuales, experiencia de usuario
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Formulario cargado correctamente');
    
    // Elementos del formulario
    const form = document.querySelector('form');
    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Validación en tiempo real del nombre
    nombreInput.addEventListener('input', function() {
        const nombre = this.value.trim();
        
        if (nombre.length === 0) {
            this.style.borderColor = '#ddd';
            removeValidationMessage(this);
        } else if (nombre.length < 2) {
            this.style.borderColor = '#f44336';
            showValidationMessage(this, '⚠️ El nombre debe tener al menos 2 caracteres', 'error');
        } else if (nombre.length > 50) {
            this.style.borderColor = '#f44336';
            showValidationMessage(this, '⚠️ El nombre no puede tener más de 50 caracteres', 'error');
        } else {
            this.style.borderColor = '#4CAF50';
            showValidationMessage(this, '✅ Nombre válido', 'success');
        }
        
        updateSubmitButton();
    });
    
    // Validación en tiempo real de la edad
    edadInput.addEventListener('input', function() {
        const edad = parseInt(this.value);
        
        if (isNaN(edad)) {
            this.style.borderColor = '#ddd';
            removeValidationMessage(this);
        } else if (edad < 1) {
            this.style.borderColor = '#f44336';
            showValidationMessage(this, '⚠️ La edad debe ser mayor a 0', 'error');
        } else if (edad > 120) {
            this.style.borderColor = '#f44336';
            showValidationMessage(this, '⚠️ La edad no puede ser mayor a 120', 'error');
        } else {
            this.style.borderColor = '#4CAF50';
            if (edad >= 18) {
                showValidationMessage(this, '🎉 Serás redirigido a la página de mayores de edad', 'info');
            } else {
                showValidationMessage(this, '🌟 Serás redirigido a la página de menores de edad', 'info');
            }
        }
        
        updateSubmitButton();
    });
    
    // Función para mostrar mensajes de validación
    function showValidationMessage(input, message, type) {
        removeValidationMessage(input);
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `validation-message ${type}`;
        messageDiv.textContent = message;
        
        input.parentNode.appendChild(messageDiv);
    }
    
    // Función para remover mensajes de validación
    function removeValidationMessage(input) {
        const existingMessage = input.parentNode.querySelector('.validation-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }
    
    // Función para actualizar el estado del botón de envío
    function updateSubmitButton() {
        const nombreValido = nombreInput.value.trim().length >= 2 && nombreInput.value.trim().length <= 50;
        const edad = parseInt(edadInput.value);
        const edadValida = !isNaN(edad) && edad >= 1 && edad <= 120;
        
        if (nombreValido && edadValida) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.textContent = '✅ Enviar Datos';
        } else {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.6';
            submitBtn.textContent = '📝 Completa el formulario';
        }
    }
    
    // Validación al enviar el formulario
    form.addEventListener('submit', function(e) {
        const nombre = nombreInput.value.trim();
        const edad = parseInt(edadInput.value);
        
        // Validación final
        if (!nombre || nombre.length < 2) {
            e.preventDefault();
            alert('❌ Por favor, ingresa un nombre válido (mínimo 2 caracteres)');
            nombreInput.focus();
            return;
        }
        
        if (isNaN(edad) || edad < 1 || edad > 120) {
            e.preventDefault();
            alert('❌ Por favor, ingresa una edad válida (1-120 años)');
            edadInput.focus();
            return;
        }
        
        // Animación de envío
        submitBtn.textContent = '⏳ Enviando...';
        submitBtn.style.background = '#ff9800';
        
        // Mostrar mensaje de confirmación
        const confirmacion = confirm(`¿Confirmas que quieres enviar estos datos?\n\nNombre: ${nombre}\nEdad: ${edad} años`);
        
        if (!confirmacion) {
            e.preventDefault();
            submitBtn.textContent = '✅ Enviar Datos';
            submitBtn.style.background = '#4CAF50';
        }
    });
    
    // Efectos visuales adicionales
    nombreInput.addEventListener('focus', function() {
        this.parentNode.style.transform = 'scale(1.02)';
        this.parentNode.style.transition = 'transform 0.2s ease';
    });
    
    nombreInput.addEventListener('blur', function() {
        this.parentNode.style.transform = 'scale(1)';
    });
    
    edadInput.addEventListener('focus', function() {
        this.parentNode.style.transform = 'scale(1.02)';
        this.parentNode.style.transition = 'transform 0.2s ease';
    });
    
    edadInput.addEventListener('blur', function() {
        this.parentNode.style.transform = 'scale(1)';
    });
    
    // Inicializar estado del botón
    updateSubmitButton();
    
    // Contador de caracteres para el nombre
    nombreInput.addEventListener('input', function() {
        const contador = this.value.length;
        const maxCaracteres = 50;
        
        let contadorElement = document.getElementById('contador-caracteres');
        if (!contadorElement) {
            contadorElement = document.createElement('small');
            contadorElement.id = 'contador-caracteres';
            contadorElement.style.color = '#666';
            contadorElement.style.fontSize = '12px';
            this.parentNode.appendChild(contadorElement);
        }
        
        contadorElement.textContent = `${contador}/${maxCaracteres} caracteres`;
        
        if (contador > maxCaracteres * 0.8) {
            contadorElement.style.color = '#f44336';
        } else {
            contadorElement.style.color = '#666';
        }
    });
    
    console.log('✅ Todas las funcionalidades de JavaScript cargadas');
});