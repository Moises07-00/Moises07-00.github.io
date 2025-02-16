/* ----------------------------------
   Selección de elementos del DOM
------------------------------------- */

// El sobre que gira
const envelope = document.getElementById("envelope");

// El botón para abrir/cerrar la carta
const openBtn = document.getElementById("openBtn");

// La hoja (mensaje) que debe mostrarse tras la animación
const letter = document.getElementById("letter");

// El audio que se reproducirá al abrir
const music = document.getElementById("loveSong");

/*
  Texto que se escribirá con efecto typewriter.
  Incluye saltos de línea (\n) si deseas.
*/
const messageText = `Cuanto más tiempo paso contigo,
más me enamoro de ti.
¡Eres lo mejor que me ha pasado!

Yo te cuidaré y tú me honrarás; caminaremos juntos todos los días de nuestra vida.
(\n) 
\n***Por lo demás, cada uno de vosotros ame también a su mujer como a sí mismo; y la mujer respete a su marido.***

Efesios 5:33`;

// Etiqueta donde aparece el texto
const typedMessage = document.getElementById("typedMessage");

// Variables para el efecto typewriter
let currentChar = 0;      // Índice del carácter actual
let typingSpeed = 120;     // Velocidad de escritura (ms entre cada carácter)
let isTyping = false;     // Bandera para saber si se está escribiendo

/* ----------------------------------
   Funciones para manejar la música
------------------------------------- */
function playMusic() {
  music.currentTime = 0;
  music.play();
}
function stopMusic() {
  music.pause();
  // music.currentTime = 0; // Descomenta si deseas que reinicie cada vez
}

/* ----------------------------------
   Función para lanzar el confeti principal
------------------------------------- */
function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 } 
  });
}

/* ----------------------------------
   Segunda ráfaga: “fuegos artificiales”
   al finalizar el texto
------------------------------------- */
function launchFireworks() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}

/* ----------------------------------
   Efecto de escribir el mensaje
------------------------------------- */
function typeMessage() {
  // Si ya se escribió todo el texto
  if (currentChar >= messageText.length) {
    isTyping = false;
    // Lanza una segunda ráfaga de confeti cuando se termine de escribir
    launchFireworks();
    return;
  }

  // Agrega el siguiente carácter al texto
  typedMessage.textContent += messageText.charAt(currentChar);
  currentChar++;

  // Con un pequeño retraso llamamos al siguiente carácter
  setTimeout(typeMessage, typingSpeed);
}

function startTypingEffect() {
  if (!isTyping) {
    isTyping = true;
    currentChar = 0;
    typedMessage.textContent = ""; // Limpia antes de volver a escribir
    typeMessage();
  }
}

/* ----------------------------------
   Manejo del evento “Abrir” (Click)
------------------------------------- */
openBtn.addEventListener("click", () => {
  // Alternamos la clase "opened" para girar la carta
  envelope.classList.toggle("opened");
  
  // Si la carta se abre
  if (envelope.classList.contains("opened")) {
    // Esperamos al final de la transición para ejecutar acciones
    envelope.addEventListener("transitionend", onEnvelopeOpened, { once: true });
  } else {
    // Si se cierra, removemos la hoja, detenemos la música
    letter.classList.remove("show");
    stopMusic();

    // Reiniciamos el estado del typewriter
    typedMessage.textContent = "";
    isTyping = false;
  }
});

/* ----------------------------------
   Función que se ejecuta tras abrirse
------------------------------------- */
function onEnvelopeOpened(e) {
  // Verificamos que la propiedad que terminó sea "transform"
  if (e.propertyName === "transform") {
    // Mostramos la hoja
    letter.classList.add("show");

    // Primera ráfaga de confeti
    launchConfetti();

    // Música
    playMusic();

    // Iniciamos el efecto de escritura
    startTypingEffect();
  }
}