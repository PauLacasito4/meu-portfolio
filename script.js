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