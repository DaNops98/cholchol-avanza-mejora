/**
 * main.js
 * Comportamiento del Home mejorado: menú móvil accesible y año del footer.
 */

document.addEventListener("DOMContentLoaded", () => {
  inicializarMenuMovil();
  completarAnio();
});

function inicializarMenuMovil() {
  const boton = document.querySelector("#botonMenuMovil");
  const menu = document.querySelector("#menuPrincipal");
  if (!boton || !menu) return;

  boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", String(abierto));
  });

  // Cierra el menú al elegir una opción (mejor experiencia en móvil)
  menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("abierto");
      boton.setAttribute("aria-expanded", "false");
    });
  });
}

function completarAnio() {
  const nodo = document.querySelector("#anioActual");
  if (nodo) nodo.textContent = new Date().getFullYear();
}
