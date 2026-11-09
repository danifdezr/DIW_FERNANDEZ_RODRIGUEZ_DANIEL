
// ------------------------------------
// CONTROL RANGE
// ------------------------------------

const intervalo = document.getElementById("intervalo");
const valorIntervalo = document.getElementById("valor-intervalo");

intervalo.addEventListener("input", () => {
  valorIntervalo.value = intervalo.value;
});


// ------------------------------------
// GENERADOR DE NÚMEROS ALEATORIOS
// ------------------------------------

$("#obtener-random").on("click", function () {
  $("#random").text(Math.random());
});


// ------------------------------------
// DESPLEGABLE
// ------------------------------------

$("#titulo-desplegable").on("click", function () {
  const panel = document.getElementById("desplegable");
  const estaAbierto = !panel.hidden;

  panel.hidden = estaAbierto;

  this.setAttribute("aria-expanded", String(!estaAbierto));

  this.textContent = estaAbierto
    ? "Despliega la información"
    : "Oculta la información";
});


// ------------------------------------
// PESTAÑAS (TABS)
// ------------------------------------

const tabs = $("#tab1, #tab2");
const paneles = $("#section1, #section2");

function activar(indice) {
  const tabActiva = tabs.eq(indice);
  const tabInactiva = tabs.eq(1 - indice);

  const panelActivo = paneles.eq(indice);
  const panelInactivo = paneles.eq(1 - indice);

  // Actualizar pestañas
  tabActiva
    .addClass("selected")
    .attr("aria-selected", "true")
    .attr("tabindex", "0");

  tabInactiva
    .removeClass("selected")
    .attr("aria-selected", "false")
    .attr("tabindex", "-1");

  // Actualizar paneles
  panelActivo.prop("hidden", false);
  panelInactivo.prop("hidden", true);

  // Actualizar foco
  tabActiva.trigger("focus");
}

// Activación mediante ratón
tabs.on("click", function (e) {
  e.preventDefault();
  activar(tabs.index(this));
});

// Navegación mediante teclado
tabs.on("keydown", function (e) {
  const indiceActual = tabs.index(this);
  let nuevoIndice = indiceActual;

  switch (e.key) {
    case "ArrowRight":
      nuevoIndice = (indiceActual + 1) % tabs.length;
      break;

    case "ArrowLeft":
      nuevoIndice = (indiceActual - 1 + tabs.length) % tabs.length;
      break;

    case "Home":
      nuevoIndice = 0;
      break;

    case "End":
      nuevoIndice = tabs.length - 1;
      break;

    default:
      return;
  }

  e.preventDefault();
  activar(nuevoIndice);
});
