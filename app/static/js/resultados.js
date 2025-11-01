/**
 * JavaScript para las páginas de resultados (mayor y menor edad)
 * Funcionalidades: efectos visuales, interactividad, información adicional
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Página de resultado cargada');
    
    // Animación de bienvenida personalizada
    const container = document.querySelector('.container');
    const welcomeMessage = document.querySelector('.welcome-message');
    const userInfo = document.querySelector('.user-info');
    
    // Efecto de typewriter para el nombre de usuario
    const nombreElement = userInfo.querySelector('p:first-of-type');
    if (nombreElement) {
        const textoOriginal = nombreElement.textContent;
        nombreElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < textoOriginal.length) {
                nombreElement.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
    
    // Agregar efectos hover a las listas
    const listItems = document.querySelectorAll('.feature-list li, .restriction-list li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(0,0,0,0.05)';
            this.style.borderRadius = '5px';
            this.style.padding = '8px';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.padding = '0 0 0 10px';
        });
    });
    
    // Botón de regreso con confirmación
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const confirmacion = confirm('¿Quieres volver al formulario para ingresar otros datos?');
            if (confirmacion) {
                // Animación de salida
                container.style.animation = 'slideOutDown 0.5s ease-in';
                
                setTimeout(() => {
                    window.location.href = '/';
                }, 500);
            }
        });
    }
    
    // Contador de tiempo en la página
    let tiempoEnPagina = 0;
    const contadorTiempo = setInterval(() => {
        tiempoEnPagina++;
        console.log(`⏱️ Tiempo en página: ${tiempoEnPagina} segundos`);
        
        // Agregar información después de 10 segundos
        if (tiempoEnPagina === 10) {
            mostrarInformacionAdicional();
        }
    }, 1000);
    
    // Función para mostrar información adicional
    function mostrarInformacionAdicional() {
        const infoAdicional = document.createElement('div');
        infoAdicional.className = 'info-adicional';
        infoAdicional.style.cssText = `
            background-color: #e8f5e8;
            border: 2px solid #4CAF50;
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
            animation: bounceIn 0.8s ease-out;
        `;
        
        infoAdicional.innerHTML = `
            <h4 style="margin-top: 0; color: #2e7d32;">💡 ¿Sabías que...?</h4>
            <p style="margin-bottom: 0;">Has estado explorando esta página por 10 segundos. 
            Los datos del formulario se procesaron usando FastAPI y se mostraron dinámicamente 
            con plantillas Jinja2.</p>
        `;
        
        // Insertar antes del botón de regreso
        backBtn.parentNode.insertBefore(infoAdicional, backBtn);
    }
    
    // Detectar si es página de mayor o menor edad
    const esMayorEdad = document.querySelector('.feature-list');
    const esMenorEdad = document.querySelector('.restriction-list');
    
    if (esMayorEdad && !esMenorEdad) {
        console.log('👨‍💼 Página de mayor de edad detectada');
        agregarFuncionalidadesMayorEdad();
    } else if (esMenorEdad) {
        console.log('👶 Página de menor de edad detectada');
        agregarFuncionalidadesMenorEdad();
    }
    
    // Funcionalidades específicas para mayores de edad
    function agregarFuncionalidadesMayorEdad() {
        // Agregar botón de servicios premium
        const contenidoExtra = document.createElement('div');
        contenidoExtra.innerHTML = `
            <button id="servicios-premium" style="
                background: linear-gradient(45deg, #gold, #ffd700);
                color: #333;
                border: none;
                padding: 12px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: bold;
                margin: 10px;
                transition: transform 0.3s ease;
            ">🌟 Ver Servicios Premium</button>
        `;
        
        document.querySelector('.content').appendChild(contenidoExtra);
        
        document.getElementById('servicios-premium').addEventListener('click', function() {
            alert('🎉 ¡Próximamente servicios premium disponibles!\n\n• Asesoría financiera personalizada\n• Descuentos exclusivos\n• Acceso prioritario');
        });
    }
    
    // Funcionalidades específicas para menores de edad
    function agregarFuncionalidadesMenorEdad() {
        // Calcular años restantes dinámicamente
        const yearsLeftElement = document.querySelector('.years-left');
        if (yearsLeftElement) {
            const edadTexto = document.querySelector('.user-info p:nth-child(3)').textContent;
            const edad = parseInt(edadTexto.match(/\d+/)[0]);
            const añosRestantes = 18 - edad;
            
            // Agregar cuenta regresiva animada
            let diasRestantes = añosRestantes * 365;
            const contadorDias = document.createElement('p');
            contadorDias.style.cssText = `
                font-size: 0.9em;
                margin-top: 10px;
                animation: pulse 2s infinite;
            `;
            
            const actualizarContador = () => {
                const años = Math.floor(diasRestantes / 365);
                const meses = Math.floor((diasRestantes % 365) / 30);
                const dias = diasRestantes % 30;
                
                contadorDias.textContent = `⏳ Aproximadamente: ${años} años, ${meses} meses y ${dias} días`;
                diasRestantes--;
                
                if (diasRestantes > 0) {
                    setTimeout(actualizarContador, 100); // Cuenta regresiva rápida para demo
                }
            };
            
            yearsLeftElement.appendChild(contadorDias);
            setTimeout(actualizarContador, 2000);
        }
        
        // Agregar juego simple
        const juegoDiv = document.createElement('div');
        juegoDiv.innerHTML = `
            <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h4 style="color: #1976d2;">🎮 Mini Juego: Adivina el Número</h4>
                <p>Piensa en un número del 1 al 10 y haz clic en el botón:</p>
                <button id="juego-numero" style="
                    background: #2196F3;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                ">🎲 ¿Cuál es tu número?</button>
                <div id="resultado-juego" style="margin-top: 10px;"></div>
            </div>
        `;
        
        document.querySelector('.content').appendChild(juegoDiv);
        
        document.getElementById('juego-numero').addEventListener('click', function() {
            const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
            const numeroUsuario = prompt('¿En qué número pensaste? (1-10)');
            
            if (numeroUsuario) {
                const resultado = document.getElementById('resultado-juego');
                if (parseInt(numeroUsuario) === numeroAleatorio) {
                    resultado.innerHTML = '🎉 ¡Increíble! ¡Adiviné tu número! Era ' + numeroAleatorio;
                    resultado.style.color = '#4CAF50';
                } else {
                    resultado.innerHTML = '😅 Pensaste en ' + numeroUsuario + ' pero yo tenía ' + numeroAleatorio + '. ¡Inténtalo de nuevo!';
                    resultado.style.color = '#ff9800';
                }
            }
        });
    }
    
    // Limpiar interval cuando se abandone la página
    window.addEventListener('beforeunload', function() {
        clearInterval(contadorTiempo);
    });
    
    console.log('✅ JavaScript de página de resultado completamente cargado');
});