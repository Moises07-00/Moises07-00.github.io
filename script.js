// Datos de las piñatas del catálogo con categorías
const pinatas = [
    {
        id: 1,
        nombre: "Piñata de Spider-Man",
        precio: "$380",
        imagen: "img/spiderman_mod1.png",
        descripcion: "El amigable vecino Spider-Man, perfecta para fiestas de superhéroes. Hecha con materiales de alta calidad y colores vibrantes.",
        categoria: "superheroes"
    },
    {
        id: 2,
        nombre: "Piñata de Batman",
        precio: "$370",
        imagen: "https://via.placeholder.com/300x200/2C3E50/FFFFFF?text=Batman",
        descripcion: "El caballero de la noche en una piñata espectacular. Ideal para los fans del héroe de Gotham.",
        categoria: "superheroes"
    },
    {
        id: 3,
        nombre: "Piñata de Wonder Woman",
        precio: "$390",
        imagen: "https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Wonder+Woman",
        descripcion: "La princesa amazona lista para la aventura. Diseño detallado y resistente.",
        categoria: "superheroes"
    },
    {
        id: 4,
        nombre: "Piñata de Princesa Disney",
        precio: "$400",
        imagen: "https://via.placeholder.com/300x200/FF69B4/FFFFFF?text=Princesa+Disney",
        descripcion: "Elegante piñata para princesas. Incluye todos los detalles mágicos de las princesas Disney.",
        categoria: "princesas"
    },
    {
        id: 5,
        nombre: "Piñata de Elsa",
        precio: "$420",
        imagen: "https://via.placeholder.com/300x200/87CEEB/FFFFFF?text=Elsa",
        descripcion: "La reina de la nieve con su vestido característico. Perfecta para fiestas temáticas de Frozen.",
        categoria: "princesas"
    },
    {
        id: 6,
        nombre: "Piñata de Balón de Fútbol",
        precio: "$320",
        imagen: "https://via.placeholder.com/300x200/000000/FFFFFF?text=Balón+Fútbol",
        descripcion: "Clásico balón de fútbol para los amantes del deporte. Diseño realista y duradero.",
        categoria: "futbol"
    },
    {
        id: 7,
        nombre: "Piñata de Jugador de Fútbol",
        precio: "$350",
        imagen: "https://via.placeholder.com/300x200/006400/FFFFFF?text=Jugador+Fútbol",
        descripcion: "Jugador de fútbol listo para el gol. Personalizable con el número de tu jugador favorito.",
        categoria: "futbol"
    },
    {
        id: 8,
        nombre: "Piñata de Unicornio",
        precio: "$360",
        imagen: "https://via.placeholder.com/300x200/BB8FCE/FFFFFF?text=Unicornio",
        descripcion: "Mágica y colorida piñata unicornio. Con cuerno dorado y colores pastel.",
        categoria: "animales"
    },
    {
        id: 9,
        nombre: "Piñata de Dinosaurio",
        precio: "$340",
        imagen: "https://via.placeholder.com/300x200/82E0AA/FFFFFF?text=Dinosaurio",
        descripcion: "Para los amantes de los dinosaurios. Diseño prehistórico y divertido.",
        categoria: "animales"
    },
    {
        id: 10,
        nombre: "Piñata de Pokémon",
        precio: "$390",
        imagen: "https://via.placeholder.com/300x200/FFCC00/FFFFFF?text=Pokémon",
        descripcion: "Tus Pokémon favoritos en una piñata emocionante. Elige entre Pikachu, Charmander y más.",
        categoria: "anime"
    },
    {
        id: 11,
        nombre: "Piñata de Dragon Ball",
        precio: "$380",
        imagen: "https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Dragon+Ball",
        descripcion: "Personajes de Dragon Ball Z. Goku, Vegeta y todos tus favoritos.",
        categoria: "anime"
    },
    {
        id: 12,
        nombre: "Piñata de Mickey Mouse",
        precio: "$350",
        imagen: "https://via.placeholder.com/300x200/000000/FFFFFF?text=Mickey+Mouse",
        descripcion: "El ratón más famoso del mundo. Clásico y siempre divertido.",
        categoria: "anime"
    },
    {
        id: 13,
        nombre: "Piñata de Guitarra",
        precio: "$370",
        imagen: "https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Guitarra",
        descripcion: "Para futuros rockstars. Diseño de guitarra eléctrica rockera.",
        categoria: "musica"
    },
    {
        id: 14,
        nombre: "Piñata de Nota Musical",
        precio: "$320",
        imagen: "https://via.placeholder.com/300x200/FFD700/FFFFFF?text=Nota+Musical",
        descripcion: "Colorida nota musical perfecta para fiestas con tema musical.",
        categoria: "musica"
    },
    {
        id: 15,
        nombre: "Piñata de Mario Bros",
        precio: "$400",
        imagen: "https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Mario+Bros",
        descripcion: "Mario y sus amigos en una aventura piñatera. Ideal para gamers.",
        categoria: "videojuegos"
    },
    {
        id: 16,
        nombre: "Piñata de Minecraft",
        precio: "$380",
        imagen: "https://via.placeholder.com/300x200/32CD32/FFFFFF?text=Minecraft",
        descripcion: "El mundo cuadrado de Minecraft cobra vida. Diseño pixelado característico.",
        categoria: "videojuegos"
    },
    {
        id: 17,
        nombre: "Piñata de Among Us",
        precio: "$350",
        imagen: "https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Among+Us",
        descripcion: "¡Alguien es el impostor! Divertida piñata del juego más popular.",
        categoria: "videojuegos"
    }
];

// Variables globales actualizadas
let pinataSeleccionada = null;
let medidaSeleccionada = null;
let precioSeleccionado = 0;
let anticipo = 0;

// Inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    cargarCatalogo();
    inicializarNavegacion();
    inicializarFormularios();
    inicializarFiltros();
    inicializarMedidas();
    inicializarModales();
    inicializarFormularioPedido();
    inicializarValidaciones();
});

// Cargar catálogo de piñatas
function cargarCatalogo(pinatasFiltradas = pinatas) {
    const catalogoGrid = document.querySelector('.catalogo-grid');
    catalogoGrid.innerHTML = '';
    
    if (pinatasFiltradas.length === 0) {
        catalogoGrid.innerHTML = `
            <div class="no-resultados">
                <i class="fas fa-search"></i>
                <h3>No encontramos piñatas en esta categoría</h3>
                <p>Prueba con otra categoría o contáctanos para una piñata personalizada</p>
                <button class="cta-button" onclick="openContactModal()">Solicitar Personalizada</button>
            </div>
        `;
        return;
    }
    
    pinatasFiltradas.forEach(pinata => {
        const pinataCard = document.createElement('div');
        pinataCard.className = 'pinata-card';
        pinataCard.innerHTML = `
            <img src="${pinata.imagen}" alt="${pinata.nombre}" loading="lazy">
            <div class="pinata-info">
                <h3>${pinata.nombre}</h3>
                <div class="price">Desde ${pinata.precio}</div>
                <button class="seleccionar-btn" data-pinata-id="${pinata.id}">
                    <i class="fas fa-plus-circle"></i> Seleccionar
                </button>
            </div>
        `;
        catalogoGrid.appendChild(pinataCard);
    });
    
    // Agregar event listeners a los botones de seleccionar
    agregarEventListenersSeleccionar();
    
    // Animar las nuevas tarjetas
    observarElementosCatalogo();
}

// Agregar event listeners a los botones de seleccionar
function agregarEventListenersSeleccionar() {
    const botonesSeleccionar = document.querySelectorAll('.seleccionar-btn');
    
    botonesSeleccionar.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.stopPropagation();
            const pinataId = parseInt(this.getAttribute('data-pinata-id'));
            const pinata = pinatas.find(p => p.id === pinataId);
            if (pinata) {
                abrirModalPinata(pinata);
            }
        });
    });
    
    // Remover el event listener de click en toda la tarjeta
    const pinataCards = document.querySelectorAll('.pinata-card');
    pinataCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Solo permitir click en el botón de seleccionar
            if (!e.target.closest('.seleccionar-btn')) {
                e.stopPropagation();
            }
        });
    });
}

// Inicializar filtros por categoría
function inicializarFiltros() {
    const botonesCategoria = document.querySelectorAll('.categoria-btn');
    
    botonesCategoria.forEach(boton => {
        boton.addEventListener('click', function() {
            // Remover clase active de todos los botones
            botonesCategoria.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Filtrar piñatas
            const categoria = this.getAttribute('data-categoria');
            filtrarPinatas(categoria);
        });
    });
}

// Filtrar piñatas por categoría
function filtrarPinatas(categoria) {
    let pinatasFiltradas;
    
    if (categoria === 'todas') {
        pinatasFiltradas = pinatas;
    } else {
        pinatasFiltradas = pinatas.filter(pinata => pinata.categoria === categoria);
    }
    
    // Mostrar loading state
    const catalogoGrid = document.querySelector('.catalogo-grid');
    catalogoGrid.innerHTML = '<div class="no-resultados"><i class="fas fa-spinner fa-spin"></i><p>Cargando piñatas...</p></div>';
    
    // Simular carga (en producción esto sería instantáneo)
    setTimeout(() => {
        cargarCatalogo(pinatasFiltradas);
        
        // Scroll suave hacia el catálogo si estamos en otra sección
        const catalogoSection = document.getElementById('catalogo');
        const rect = catalogoSection.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
            scrollToSection('catalogo');
        }
    }, 300);
}

// Observar elementos del catálogo para animaciones
function observarElementosCatalogo() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.pinata-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Inicializar event listeners para las medidas
function inicializarMedidas() {
    const radioButtons = document.querySelectorAll('input[name="medida"]');
    
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                medidaSeleccionada = this.value;
                precioSeleccionado = parseInt(this.getAttribute('data-precio'));
                
                // Actualizar precio mostrado
                document.getElementById('precioSeleccionado').textContent = `$${precioSeleccionado}.00`;
                
                // Habilitar botón
                document.getElementById('agendarPedidoBtn').disabled = false;
                
                // Agregar efecto visual a la opción seleccionada
                document.querySelectorAll('.medida-option').forEach(option => {
                    option.style.borderColor = '#e0e0e0';
                    option.style.backgroundColor = 'transparent';
                });
                
                this.closest('.medida-option').style.borderColor = '#FF6B6B';
                this.closest('.medida-option').style.backgroundColor = '#fff5f5';
            }
        });
    });
}

// Función para abrir el modal de piñata
function abrirModalPinata(pinata) {
    pinataSeleccionada = pinata;
    medidaSeleccionada = null;
    precioSeleccionado = 0;
    
    // Actualizar contenido del modal
    document.getElementById('modalPinataImage').src = pinata.imagen;
    document.getElementById('modalPinataImage').alt = pinata.nombre;
    document.getElementById('modalPinataTitle').textContent = pinata.nombre;
    document.getElementById('modalPinataDescription').textContent = pinata.descripcion;
    
    // Resetear selección de medidas
    const radioButtons = document.querySelectorAll('input[name="medida"]');
    radioButtons.forEach(radio => {
        radio.checked = false;
    });
    
    // Resetear estilos de las opciones
    document.querySelectorAll('.medida-option').forEach(option => {
        option.style.borderColor = '#e0e0e0';
        option.style.backgroundColor = 'transparent';
    });
    
    // Actualizar precio
    document.getElementById('precioSeleccionado').textContent = '$0.00';
    
    // Deshabilitar botón
    document.getElementById('agendarPedidoBtn').disabled = true;
    
    // Mostrar modal
    document.getElementById('pinataModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal de piñata
function closePinataModal() {
    document.getElementById('pinataModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    pinataSeleccionada = null;
    medidaSeleccionada = null;
    precioSeleccionado = 0;
}

// Modificar la función agendarPedido
function agendarPedido() {
    if (!pinataSeleccionada || !medidaSeleccionada) {
        mostrarNotificacion('Por favor selecciona una medida para la piñata', 'error');
        return;
    }
    
    // Calcular anticipo (50%)
    anticipo = Math.round(precioSeleccionado * 0.5);
    
    // Cerrar modal de piñata
    closePinataModal();
    
    // Abrir modal de pedido después de un breve delay
    setTimeout(() => {
        abrirModalPedido();
    }, 300);
}

// Función para abrir el modal de pedido
function abrirModalPedido() {
    // Actualizar resumen en el modal
    document.getElementById('resumenPinata').textContent = pinataSeleccionada.nombre;
    document.getElementById('resumenMedida').textContent = medidaSeleccionada;
    document.getElementById('resumenPrecio').textContent = `$${precioSeleccionado}.00`;
    document.getElementById('resumenAnticipo').textContent = `$${anticipo}.00`;
    
    // Configurar fecha mínima (hoy)
    const fechaInput = document.getElementById('fechaEntrega');
    const hoy = new Date().toISOString().split('T')[0];
    fechaInput.min = hoy;
    
    // Limpiar formulario
    document.getElementById('pedidoForm').reset();
    
    // Mostrar modal
    document.getElementById('pedidoModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal de pedido
function closePedidoModal() {
    document.getElementById('pedidoModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Inicializar formulario de pedido
function inicializarFormularioPedido() {
    const pedidoForm = document.getElementById('pedidoForm');
    
    if (pedidoForm) {
        pedidoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            enviarPedidoWhatsApp();
        });
    }
}

// Función para enviar pedido por WhatsApp
function enviarPedidoWhatsApp() {
    // Obtener datos del formulario
    const nombreCliente = document.getElementById('nombreCliente').value.trim();
    const telefonoCliente = document.getElementById('telefonoCliente').value.trim();
    const direccionCliente = document.getElementById('direccionCliente').value.trim();
    const fechaEntrega = document.getElementById('fechaEntrega').value;
    
    // Validar campos
    if (!nombreCliente || !telefonoCliente || !direccionCliente || !fechaEntrega) {
        mostrarNotificacion('Por favor completa todos los campos requeridos', 'error');
        return;
    }
    
    // Validar formato de teléfono (mínimo 10 dígitos)
    const telefonoLimpio = telefonoCliente.replace(/\D/g, '');
    if (telefonoLimpio.length < 10) {
        mostrarNotificacion('Por favor ingresa un número de teléfono válido (mínimo 10 dígitos)', 'error');
        return;
    }
    
    // Formatear fecha
    const fechaFormateada = new Date(fechaEntrega).toLocaleDateString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Crear mensaje para WhatsApp
    const mensaje = `¡Hola! Quiero agendar mi pedido en Piñatas Pro 🎉

📦 *DETALLES DEL PEDIDO:*
• *Piñata:* ${pinataSeleccionada.nombre}
• *Medida:* ${medidaSeleccionada}
• *Precio Total:* $${precioSeleccionado}.00 MXN
• *Anticipo (50%):* $${anticipo}.00 MXN
• *Fecha de Entrega:* ${fechaFormateada}

👤 *DATOS DEL CLIENTE:*
• *Nombre:* ${nombreCliente}
• *Teléfono:* ${telefonoCliente}
• *Dirección:* ${direccionCliente}

💳 *INFORMACIÓN DE PAGO:*
Para confirmar tu pedido necesitas pagar el anticipo del 50% ($${anticipo}.00 MXN).

¿Podrías proporcionarme los detalles para proceder con el pago?`;

    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Número de WhatsApp de Piñatas Pro (CAMBIAR POR EL NÚMERO REAL)
    const numeroWhatsApp = '529996172863'; // Ejemplo: +52 55 5123 4567
    
    // Crear URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(urlWhatsApp, '_blank');
    
    // Mostrar confirmación
    mostrarNotificacion('¡Pedido enviado! Se abrirá WhatsApp para confirmar.', 'success');
    
    // Cerrar modal después de un breve delay
    setTimeout(() => {
        closePedidoModal();
        
        // Resetear selección después de enviar
        pinataSeleccionada = null;
        medidaSeleccionada = null;
        precioSeleccionado = 0;
        anticipo = 0;
    }, 2000);
}

// Navegación suave
function inicializarNavegacion() {
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Menú hamburguesa para móviles
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Animación de hamburguesa a X
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#fff';
                header.style.backdropFilter = 'none';
            }
        }
    });
}

// Funciones para el modal de contacto
function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Inicializar modales
function inicializarModales() {
    // Cerrar modal al hacer click fuera
    window.addEventListener('click', function(e) {
        const pinataModal = document.getElementById('pinataModal');
        const contactModal = document.getElementById('contactModal');
        const pedidoModal = document.getElementById('pedidoModal');
        
        if (e.target === pinataModal) {
            closePinataModal();
        }
        if (e.target === contactModal) {
            closeContactModal();
        }
        if (e.target === pedidoModal) {
            closePedidoModal();
        }
    });

    // Cerrar modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePinataModal();
            closeContactModal();
            closePedidoModal();
        }
    });
}

// Inicializar formularios
function inicializarFormularios() {
    const contactForm = document.getElementById('contactForm');
    const quoteForm = document.getElementById('quoteForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            enviarFormulario(this, 'Mensaje enviado correctamente. Te contactaremos pronto.');
        });
    }

    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            enviarFormulario(this, 'Solicitud de pedido enviada. Te contactaremos para confirmar los detalles.');
            closeContactModal();
        });
    }
}

// Función para enviar formularios (simulación)
function enviarFormulario(form, mensajeExito) {
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    // Validar campos requeridos
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#FF6B6B';
        } else {
            field.style.borderColor = '#ddd';
        }
    });
    
    if (!isValid) {
        mostrarNotificacion('Por favor, completa todos los campos requeridos', 'error');
        return;
    }
    
    // Simular envío
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    // Aquí normalmente enviarías los datos a un servidor
    // Por ahora solo simulamos el envío con un timeout
    setTimeout(() => {
        // Mostrar notificación de éxito
        mostrarNotificacion(mensajeExito, 'success');
        
        // Resetear formulario
        form.reset();
        
        // Restaurar botón
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = 'success') {
    // Remover notificaciones existentes
    const notificacionesExistentes = document.querySelectorAll('.notificacion');
    notificacionesExistentes.forEach(notif => notif.remove());
    
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion ${tipo}`;
    notificacion.innerHTML = `
        <i class="fas fa-${tipo === 'success' ? 'check' : 'exclamation'}-circle"></i>
        <span>${mensaje}</span>
    `;
    
    document.body.appendChild(notificacion);
    
    // Animación de entrada
    setTimeout(() => {
        notificacion.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        notificacion.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notificacion.parentNode) {
                notificacion.parentNode.removeChild(notificacion);
            }
        }, 300);
    }, 5000);
}

// Función para scroll a sección específica
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Agregar validación para el teléfono
function inicializarValidaciones() {
    const telefonoInput = document.getElementById('telefonoCliente');
    
    if (telefonoInput) {
        telefonoInput.addEventListener('input', function(e) {
            // Permitir solo números y caracteres básicos de teléfono
            this.value = this.value.replace(/[^0-9+()-\s]/g, '');
        });
    }
    
    // Inicializar date picker con restricciones
    const fechaInput = document.getElementById('fechaEntrega');
    if (fechaInput) {
        const hoy = new Date();
        fechaInput.min = hoy.toISOString().split('T')[0];
        
        // Establecer fecha máxima (6 meses desde hoy)
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 6);
        fechaInput.max = maxDate.toISOString().split('T')[0];
    }
}

// Efectos de aparición al hacer scroll
function observarElementos() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Observar elementos que queremos animar
    document.querySelectorAll('.personalizadas-content, .nosotros-content, .categorias').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Contador animado para las estadísticas
function animarContadores() {
    const counters = document.querySelectorAll('.stat h3');
    const speed = 200;

    counters.forEach(counter => {
        const targetText = counter.innerText;
        const target = parseInt(targetText);
        const hasPlus = targetText.includes('+');
        const hasPercent = targetText.includes('%');

        const increment = target / speed;
        let current = 0;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current) + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
            }
        };

        updateCount();
    });
}

// Observar la sección de estadísticas para animar los contadores
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animarContadores();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Llamar a las funciones de inicialización cuando la página cargue
window.addEventListener('load', function() {
    observarElementos();
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // Cargar imágenes con lazy loading
    inicializarLazyLoading();
});

// Lazy loading para imágenes
function inicializarLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Agregar animación shake para CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);