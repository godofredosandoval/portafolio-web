
// IMPLEMENTACIÓN DE JAVASCRIPT 
// 3.3 Implementación de JavaScript
// Esperar a que el documento HTML cargue completamente
document.addEventListener("DOMContentLoaded", function() {

    // Seleccionamos el formulario usando su ID
    const formulario = document.getElementById('miFormulario');

    // FUNCIONES CREADAS: Función que manejará el evento de envío
    function procesarFormulario(evento) {
        // Prevenimos que la página se recargue al enviar el formulario
        evento.preventDefault();

        // VARIABLES UTILIZADAS: Obtenemos los elementos del DOM
        const campoNombre = document.getElementById('nombre');
        const campoEmail = document.getElementById('email');
        const campoMensaje = document.getElementById('mensaje');

        // Extraemos los valores y quitamos espacios en blanco al inicio y final
        let nombre = campoNombre.value.trim();
        let email = campoEmail.value.trim();
        let mensaje = campoMensaje.value.trim();

        // INTERACCIÓN: console.log() - Útil para el desarrollador
        console.log("Iniciando validación del formulario...");
        console.log("Datos ingresados:", { nombre, email, mensaje });

        // CONDICIONALES APLICADAS: Validaciones de seguridad
        
        // Condicional 1: Verificar que no haya campos vacíos
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Error: Por favor, completa todos los campos del formulario.");
            return; // Detenemos la ejecución de la función
        }

        // Condicional 2: Validación sencilla para el correo electrónico
        if (!email.includes("@") || !email.includes(".")) {
            alert("Error: El correo electrónico ingresado no es válido.");
            return;
        }

        // INTERACCIÓN: prompt() - Pedimos un dato extra al usuario
        let asunto = prompt("Antes de enviar, por favor ingresa el asunto de tu mensaje (Opcional):");

        // Condicional 3: Evaluar qué respondió el usuario en el prompt
        if (asunto === null || asunto.trim() === "") {
            asunto = "Sin asunto especificado"; // Tipo de dato: String
        }

        // INTERACCIÓN: alert() - Retroalimentación final para el usuario
        alert(`¡Excelente ${nombre}! Tu mensaje con el asunto "${asunto}" ha sido enviado correctamente. Nos pondremos en contacto pronto.`);

        // Mostramos el éxito en la consola
        console.log("Formulario enviado con éxito. Asunto asignado:", asunto);

        // Limpiamos los campos del formulario
        formulario.reset();
    }

    // Escuchamos el evento 'submit' (cuando el usuario hace clic en "Enviar Mensaje")
    formulario.addEventListener('submit', procesarFormulario);
});


// <!-- 3.4 MANIPULACIÓN DEL DOM -->
// <!-- :::::::::::::::::::::::::::::::::: -->

// 1. Uso de getElementById
function cambiarTexto() {
    // Modificación de texto
    const titulo = document.getElementById('proyectos').querySelector('.section-title');
    titulo.textContent = '¡Mis Proyectos Actualizados! ';

    // Cambiar el texto de las descripciones usando getElementsByClassName
    const descripciones = document.getElementsByClassName('project-desc');
    for (let i = 0; i < descripciones.length; i++) {
        descripciones[i].textContent = `Descripción actualizada del proyecto 2026 ${i + 1} - Texto modificado dinámicamente.`;
    }
}

// 2. Uso de getElementsByClassName y getElementsByTagName
function cambiarEstilos() {
    // Cambiar estilos CSS usando getElementsByClassName
    const cards = document.getElementsByClassName('project-card');
    for (let card of cards) {
        card.style.backgroundColor = '#f8f9fa';
        card.style.border = '2px solid #007bff';
        card.style.transform = 'scale(1.02)';
        card.style.transition = 'all 0.3s ease';
    }

    // Cambiar estilos usando getElementsByTagName
    const botones = document.getElementsByTagName('a');
    for (let btn of botones) {
        if (btn.classList.contains('btn-outline-primary')) {
            btn.style.backgroundColor = '#007bff';
            btn.style.color = 'white';
        }
    }

    // Cambiar tamaño de títulos con getElementsByClassName
    const titulos = document.getElementsByClassName('project-title');
    for (let titulo of titulos) {
        titulo.style.color = '#007bff';
        titulo.style.fontSize = '1.5rem';
        titulo.style.textTransform = 'uppercase';
    }
}

// 3. Mostrar/Ocultar elementos
let proyectosVisibles = true;
function mostrarOcultar() {
    const proyectos = document.getElementsByClassName('project-item');

    if (proyectosVisibles) {
        // Ocultar elementos
        for (let proyecto of proyectos) {
            proyecto.style.display = 'none';
        }
        proyectosVisibles = false;
    } else {
        // Mostrar elementos
        for (let proyecto of proyectos) {
            proyecto.style.display = 'block';
        }
        proyectosVisibles = true;
    }
}

// 4. Cambio de imágenes
let imagenActual = 1;
function cambiarImagenes() {
    const imagenes = document.getElementsByClassName('project-img');
    const imagenesAlternativas = [
        'img/ecommerce-02.jpg',
        'img/img001.jpg',
        'img/img003.jpg'
    ];

    // Cambiar imágenes usando getElementsByClassName
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].src = imagenesAlternativas[i % imagenesAlternativas.length];
        imagenes[i].alt = `Imagen del proyecto ${i + 1} actualizada`;
    }
}

// 5. Restablecer todo al estado original
function restablecerTodo() {
    // 1. Restaurar Textos
    const titulo = document.getElementById('proyectos').querySelector('.section-title');
    titulo.textContent = 'Mis Proyectos'; // Cambia esto por tu título original exacto

    const descripciones = document.getElementsByClassName('project-desc');
    for (let i = 0; i < descripciones.length; i++) {
        descripciones[i].textContent = `Descripción original del proyecto ${i + 1}.`; // Cambia por tu texto original
    }

    // 2. Restaurar Estilos (eliminando los estilos en línea aplicados)
    const cards = document.getElementsByClassName('project-card');
    for (let card of cards) {
        card.style.backgroundColor = '';
        card.style.border = '';
        card.style.transform = '';
        card.style.transition = '';
    }

    const botones = document.getElementsByTagName('a');
    for (let btn of botones) {
        if (btn.classList.contains('btn-outline-primary')) {
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }
    }

    const titulos = document.getElementsByClassName('project-title');
    for (let titulo of titulos) {
        titulo.style.color = '';
        titulo.style.fontSize = '';
        titulo.style.textTransform = '';
    }

    // 3. Restaurar Visibilidad
    const proyectos = document.getElementsByClassName('project-item');
    for (let proyecto of proyectos) {
        proyecto.style.display = ''; // Elimina el display: none
    }
    proyectosVisibles = true; // Reiniciamos la variable de estado para que el botón de ocultar vuelva a funcionar

    // 4. Restaurar Imágenes
    const imagenes = document.getElementsByClassName('project-img');
    // Asegúrate de poner aquí las rutas de tus imágenes originales
    const imagenesOriginales = [
        'img/ecommerce-02.jpg',
        'img/img001.jpg',
        'img/img003.jpg'
    ];

    for (let i = 0; i < imagenes.length; i++) {
        // Se asegura de no romper si hay más imágenes que rutas originales en el array
        if(imagenesOriginales[i]) {
            imagenes[i].src = imagenesOriginales[i];
            imagenes[i].alt = `Imagen original del proyecto ${i + 1}`;
        }
    }
}


// ====================================================
// 3.5 IMPLEMENTACIÓN DE EVENTOS
// ====================================================

// --- onload: revisa si hay cotizaciones previas guardadas ---
window.onload = function () {
    const guardadas = JSON.parse(localStorage.getItem('cotizaciones')) || [];
    const mensaje = document.getElementById('mensajeBienvenida');

    mensaje.textContent = guardadas.length > 0
        ? `Tienes ${guardadas.length} solicitud(es) guardada(s). Revísalas en la tarjeta de la derecha.`
        : 'Elige el plan que mejor se adapte a lo que necesitas.';
};

// --- onchange: resalta la tarjeta Y actualiza la vista previa en vivo ---
document.getElementById('tipoBasico').onchange = function () {
    document.getElementById('cardBasico').style.borderLeft = this.value ? '5px solid #0d6efd' : '';
    actualizarVistaPrevia();
};

document.getElementById('tipoMedida').onchange = function () {
    document.getElementById('cardMedida').style.borderLeft = this.value ? '5px solid #0d6efd' : '';
    actualizarVistaPrevia();
};

document.getElementById('extraHosting').onchange = actualizarVistaPrevia;
document.getElementById('extraDominio').onchange = actualizarVistaPrevia;

// --- onmouseover / onmouseout: efecto hover en las tres tarjetas ---
const tarjetasPlan = document.getElementsByClassName('plan-card');
for (let tarjeta of tarjetasPlan) {
    tarjeta.onmouseover = function () {
        this.style.boxShadow = '0 0 15px rgba(13,110,253,0.4)';
    };
    tarjeta.onmouseout = function () {
        this.style.boxShadow = '';
    };
}

// --- onkeydown: contador de caracteres + vista previa en vivo mientras escribe ---
document.getElementById('detalleMedida').onkeydown = function () {
    setTimeout(() => {
        document.getElementById('contadorCaracteres').textContent = this.value.length + ' / 200 caracteres';
        actualizarVistaPrevia();
    }, 0);
};

// --- onclick: guarda la cotización actual en el historial ---
document.getElementById('btnCotizarBasico').onclick = function () {
    const tipo = document.getElementById('tipoBasico').value;
    if (!tipo) { alert('Por favor selecciona qué necesitas.'); return; }

    const hosting = document.getElementById('extraHosting').checked ? 'con Hosting' : 'sin Hosting';
    const dominio = document.getElementById('extraDominio').checked ? 'con Dominio' : 'sin Dominio';
    guardarCotizacion(`Plan Básico: ${tipo}, ${hosting}, ${dominio} — S/ 350 (precio referencial)`);
};

document.getElementById('btnCotizarMedida').onclick = function () {
    const tipo = document.getElementById('tipoMedida').value;
    const detalle = document.getElementById('detalleMedida').value.trim();
    if (!tipo) { alert('Por favor selecciona qué necesitas.'); return; }

    guardarCotizacion(`Software a Medida: ${tipo}. Detalle: ${detalle || 'sin detalle adicional'} — S/ 750 (precio referencial)`);
};

// Función  de texto en vista previa según lo que el usuario va llenando
function actualizarVistaPrevia() {
    const tipoBasico = document.getElementById('tipoBasico').value;
    const tipoMedida = document.getElementById('tipoMedida').value;
    const vista = document.getElementById('vistaPrevia');

    if (tipoBasico) {
        const hosting = document.getElementById('extraHosting').checked ? 'con Hosting' : 'sin Hosting';
        const dominio = document.getElementById('extraDominio').checked ? 'con Dominio' : 'sin Dominio';
        vista.innerHTML = `<strong>Plan Básico</strong><br>${tipoBasico}, ${hosting}, ${dominio}.`;
    } else if (tipoMedida) {
        const detalle = document.getElementById('detalleMedida').value.trim();
        vista.innerHTML = `<strong>Software a Medida</strong><br>${tipoMedida}.<br><small>${detalle || 'Sin detalle aún...'}</small>`;
    } else {
        vista.innerHTML = '<em class="text-muted">Aún no has seleccionado ninguna opción.</em>';
    }
}

// ====================================================
// 3.6 USO DE JQUERY
// ====================================================
$(document).ready(function () {

    // Renderiza la lista de cotizaciones guardadas con fadeIn
    window.renderizarLista = function () {
        const guardadas = JSON.parse(localStorage.getItem('cotizaciones')) || [];
        const $lista = $('#listaCotizaciones');
        $lista.empty();

        if (guardadas.length === 0) {
            $lista.append('<li class="list-group-item text-muted">Sin registros aún.</li>');
            return;
        }

        guardadas.forEach(function (item, index) {
            const $li = $(`
                <li class="list-group-item d-flex justify-content-between align-items-center" style="display:none;">
                    <span>${item}</span>
                    <button class="btn btn-sm btn-outline-danger btn-eliminar" data-index="${index}">
                        <i class="bi bi-trash"></i>
                    </button>
                </li>
            `);
            $lista.append($li);
            $li.fadeIn(400); // efecto jQuery al insertar cada registro
        });
    };

    renderizarLista();

    // hide()/show(): oculta el contador si el textarea está vacío
    $('#detalleMedida').on('keyup', function () {
        $('#contadorCaracteres').toggle($(this).val().length > 0);
    });

    // Eliminar un registro individual (delegado, porque los <li> se crean dinámicamente)
    $('#listaCotizaciones').on('click', '.btn-eliminar', function () {
        const index = $(this).data('index');
        const $li = $(this).closest('li');

        $li.fadeOut(300, function () {
            eliminarCotizacion(index);
            renderizarLista();
        });
    });

    // Eliminar todas las cotizaciones
    $('#btnLimpiarTodo').on('click', function () {
        $('#listaCotizaciones li').fadeOut(300, function () {
            limpiarTodasLasCotizaciones();
            renderizarLista();
            $('#mensajeBienvenida').text('Elige el plan que mejor se adapte a lo que necesitas.');
        });
    });

});

// ====================================================
// 3.7 Implementación de Local Storage
// ====================================================

// setItem(): agrega una nueva cotización al arreglo guardado (como JSON)
function guardarCotizacion(texto) {
    const guardadas = JSON.parse(localStorage.getItem('cotizaciones')) || [];
    guardadas.push(texto);
    localStorage.setItem('cotizaciones', JSON.stringify(guardadas));
    renderizarLista();
}

// getItem(): recupera el arreglo completo de cotizaciones guardadas
function obtenerCotizaciones() {
    return JSON.parse(localStorage.getItem('cotizaciones')) || [];
}

// removeItem() (aplicado a un elemento del arreglo): elimina solo una cotización por índice
function eliminarCotizacion(index) {
    const guardadas = obtenerCotizaciones();
    guardadas.splice(index, 1);
    localStorage.setItem('cotizaciones', JSON.stringify(guardadas));
}

// clear(): elimina TODO lo guardado en localStorage para este sitio
function limpiarTodasLasCotizaciones() {
    localStorage.clear();
}
alert("Integrantes del Grupo 2:\n\n- Godofredo Sandoval Ramírez\n- Máximo Polo Salinas\n- Jhon Bryan Curo Maldonado\n- Rafael Alberto Sipión Díaz\n- Gálvez Martínez Jim Antony\n- Gabriela Mirtha Rios Villanueva\n- Luis Helbert Otoya Medina");