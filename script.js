// Texto typing efecto
const texto = "Paulacasito";
const target = document.getElementById("typing-text");

let i = 0;
let forward = true;

function escribirTexto() {
  if (forward) {
    target.textContent = texto.slice(0, i);
    i++;
    if (i > texto.length) {
      forward = false;
      setTimeout(escribirTexto, 1000);
    } else {
      setTimeout(escribirTexto, 150);
    }
  } else {
    i--;
    target.textContent = texto.slice(0, i);
    if (i < 0) {
      forward = true;
      setTimeout(escribirTexto, 800);
    } else {
      setTimeout(escribirTexto, 75);
    }
  }
}

escribirTexto();

// Generar estrellas
const container = document.querySelector(".stars");

for (let j = 0; j < 100; j++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const top = Math.random() * 100;
  const left = Math.random() * 100;

  star.style.top = `${top}%`;
  star.style.left = `${left}%`;

  container.appendChild(star);
}

// Desplegable idiomas
const dropdown = document.querySelector('.dropdown');
const btn = dropdown.querySelector('.dropbtn');
const menu = dropdown.querySelector('.dropdown-content');
const items = menu.querySelectorAll('a');

// Ocultar menú al inicio y deshabilitar tabulación en items
menu.style.display = 'none';
items.forEach(item => item.setAttribute('tabindex', '-1'));
btn.setAttribute('aria-expanded', 'false');

// Función para abrir menú
function abrirMenu() {
  menu.style.display = 'block';
  btn.setAttribute('aria-expanded', 'true');
  items.forEach(item => item.setAttribute('tabindex', '0'));
  items[0].focus();
}

// Función para cerrar menú
function cerrarMenu() {
  menu.style.display = 'none';
  btn.setAttribute('aria-expanded', 'false');
  items.forEach(item => item.setAttribute('tabindex', '-1'));
  btn.focus();
}

// Abrir/cerrar menú con click en el botón
btn.addEventListener('click', () => {
  if (btn.getAttribute('aria-expanded') === 'true') {
    cerrarMenu();
  } else {
    abrirMenu();
  }
});

// Cerrar menú si se hace click fuera
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    cerrarMenu();
  }
});

// Navegación con teclado dentro del menú desplegable
dropdown.addEventListener('keydown', (e) => {
  const key = e.key;
  const focused = document.activeElement;
  const index = Array.from(items).indexOf(focused);

  if (key === 'ArrowDown') {
    e.preventDefault();
    if (index < items.length - 1) {
      items[index + 1].focus();
    } else {
      items[0].focus();
    }
  } else if (key === 'ArrowUp') {
    e.preventDefault();
    if (index > 0) {
      items[index - 1].focus();
    } else {
      items[items.length - 1].focus();
    }
  } else if (key === 'Escape') {
    cerrarMenu();
  }
});

// Cambiar la bandera mostrada al seleccionar idioma
items.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const selectedFlagSrc = item.querySelector('img').src;
    const selectedAlt = item.querySelector('img').alt;
    const dropbtnImg = btn.querySelector('img.flag-icon');

    // Cambiar la imagen del botón
    dropbtnImg.src = selectedFlagSrc;
    dropbtnImg.alt = selectedAlt;

    // Cierra el menú al seleccionar
    cerrarMenu();

    // Aquí puedes añadir lógica para cambiar idioma real de la página
    console.log('Idioma seleccionado:', item.dataset.lang);
  });
});
