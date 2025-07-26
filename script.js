// Efecte de text "Paulacasito"
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

// Estrelles de fons
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

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.querySelector('.selector-idioma');
  const botonPrincipal = selector.querySelector('button');
  const iconoBandera = botonPrincipal.querySelector('.bandera-icono');
  const menu = selector.querySelector('.menu-idiomas');
  const botonesIdioma = selector.querySelectorAll('.menu-idiomas button');

  // Función para ocultar la opción activa en el menú
  function actualizarMenu() {
    const srcActivo = iconoBandera.src;
    botonesIdioma.forEach(btn => {
      const imgBtn = btn.querySelector('img');
      if (imgBtn.src === srcActivo) {
        btn.style.display = 'none';  // Oculta la opción que está activa
      } else {
        btn.style.display = 'flex';  // Muestra las otras opciones
      }
    });
  }

  // Al abrir/cerrar menú y actualizar opciones visibles
  botonPrincipal.addEventListener('click', (e) => {
    e.stopPropagation();
    selector.classList.toggle('open');
    if (selector.classList.contains('open')) {
      actualizarMenu();
      menu.style.display = 'block';  // Aseguramos mostrar menú
    } else {
      // Cuando se cierra el menú, restauramos el display de todas las opciones
      botonesIdioma.forEach(btn => {
        btn.style.display = 'flex';
      });
      menu.style.display = 'none';  // Ocultamos menú
    }
  });

  // Cambiar idioma al seleccionar opción
  botonesIdioma.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const nuevaSrc = btn.querySelector('img').src;
      iconoBandera.src = nuevaSrc;
      selector.classList.remove('open');
      // Cuando cierres el menú, asegúrate que todas las opciones estén visibles para la próxima apertura
      botonesIdioma.forEach(btn => {
        btn.style.display = 'flex';
      });
      menu.style.display = 'none';
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', () => {
    if (selector.classList.contains('open')) {
      selector.classList.remove('open');
      // Restaurar estado al cerrar con clic fuera
      botonesIdioma.forEach(btn => {
        btn.style.display = 'flex';
      });
      menu.style.display = 'none';
    }
  });
});
const textos = {
  val: {
    sobreMi: "SOBRE MI",
    hola: "Hola,",
    soy: "Sóc",
    nombre: "Pau Ribera,",
    cargo: "Senior Software Engineer.",
    menuSobreMi: "SOBRE MI",
    menuHabilidades: "HABILITATS",
    menuEducacion: "EDUCACIÓ",
    menuExperiencia: "EXPERIÈNCIA",
    menuProyectos: "PROJECTES",
    menuContacto: "CONTACTE",
    educacion: "EDUCACIÓ",
    fechaActual: "2024 - actualitat",
    gradoSuperior: "Cicle Superior en Desenvolupament d’Aplicacions Web",
    ies: "IES José Rodrigo Botet",
    formNombre: "Nom",
    formEmail: "Correu electrònic",
    formMensaje: "Missatge",
    formEnviar: "Enviar missatge",
    habilidades: "HABILITATS",
    experiencia: "EXPERIÈNCIA",
    proyectos: "PROJECTES",
    proyectosTexto: "Estem treballant en els projectes",
    contacto: "CONTACTE",
    footer: "© 2025 Pau Ribera. Tots els drets reservats."
  },
  es: {
    sobreMi: "SOBRE MÍ",
    hola: "Hola,",
    soy: "Soy",
    nombre: "Pau Ribera,",
    cargo: "Senior Software Engineer.",
    menuSobreMi: "SOBRE MÍ",
    menuHabilidades: "HABILIDADES",
    menuEducacion: "EDUCACIÓN",
    menuExperiencia: "EXPERIENCIA",
    menuProyectos: "PROYECTOS",
    menuContacto: "CONTACTO",
    educacion: "EDUCACIÓN",
    fechaActual: "2024 - actualidad",
    gradoSuperior: "Ciclo Superior en Desarrollo de Aplicaciones Web",
    ies: "IES José Rodrigo Botet",
    formNombre: "Nombre",
    formEmail: "Correo electrónico",
    formMensaje: "Mensaje",
    formEnviar: "Enviar mensaje",
    habilidades: "HABILIDADES",
    experiencia: "EXPERIENCIA",
    proyectos: "PROYECTOS",
    proyectosTexto: "Estamos trabajando en los proyectos",
    contacto: "CONTACTO",
    footer: "© 2025 Pau Ribera. Todos los derechos reservados."
  },
  en: {
    sobreMi: "ABOUT ME",
    hola: "Hello,",
    soy: "I am",
    nombre: "Pau Ribera,",
    cargo: "Senior Software Engineer.",
    menuSobreMi: "ABOUT ME",
    menuHabilidades: "SKILLS",
    menuEducacion: "EDUCATION",
    menuExperiencia: "EXPERIENCE",
    menuProyectos: "PROJECTS",
    menuContacto: "CONTACT",
    educacion: "EDUCATION",
    fechaActual: "2024 - current",
    gradoSuperior: "Higher Degree in Web Application Development",
    ies: "IES José Rodrigo Botet",
    formNombre: "Name",
    formEmail: "Email",
    formMensaje: "Message",
    formEnviar: "Send message",
    habilidades: "SKILLS",
    experiencia: "EXPERIENCE",
    proyectos: "PROJECTS",
    proyectosTexto: "We are working on the projects",
    contacto: "CONTACT",
    footer: "© 2025 Pau Ribera. All rights reserved."
  }
};

function traducir(idioma) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const clave = el.getAttribute("data-key");
    if (textos[idioma] && textos[idioma][clave]) {
      el.textContent = textos[idioma][clave];
    }
  });
}

// Código del selector de idioma + bandera

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.querySelector('.selector-idioma');
  const botonPrincipal = selector.querySelector('button');
  const iconoBandera = botonPrincipal.querySelector('.bandera-icono');
  const menu = selector.querySelector('.menu-idiomas');
  const botonesIdioma = selector.querySelectorAll('.menu-idiomas button');

  // Por defecto idioma valenciano
  traducir('val');
  iconoBandera.src = "imagenes/valencia.png";
  iconoBandera.alt = "Valencià";

  botonPrincipal.addEventListener('click', (e) => {
    e.stopPropagation();
    selector.classList.toggle('open');
  });

  botonesIdioma.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const nuevaSrc = btn.querySelector('img').src;
      const nuevoAlt = btn.querySelector('img').alt;
      const nuevoIdioma = btn.getAttribute('data-idioma');

      iconoBandera.src = nuevaSrc;
      iconoBandera.alt = nuevoAlt;

      traducir(nuevoIdioma);
      selector.classList.remove('open');
    });
  });

  document.addEventListener('click', () => {
    selector.classList.remove('open');
  });
});
