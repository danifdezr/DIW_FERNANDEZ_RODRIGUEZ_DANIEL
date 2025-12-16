// Genera 70 copos con CSS puro (animación controlada por CSS)
const nieve = document.getElementById("nieve");
for (let i = 0; i < 70; i++) {
  const copo = document.createElement("div");
  copo.classList.add("copo");

  // Tamaño aleatorio
  const size = Math.random() * 6 + 2; // 2px a 8px
  copo.style.width = `${size}px`;
  copo.style.height = `${size}px`;

  // Posición horizontal aleatoria
  copo.style.left = `${Math.random() * 100}vw`;

  // Animación: duración y delay aleatorios
  const duracion = Math.random() * 10 + 8; // 8s a 18s
  const delay = Math.random() * 5;
  copo.style.animationDuration = `${duracion}s`;
  copo.style.animationDelay = `${delay}s`;

  // Ligera deriva horizontal (más realista)
  const desvio = (Math.random() - 0.5) * 100; // -50px a +50px
  copo.style.setProperty("--desvio", `${desvio}px`);

  nieve.appendChild(copo);
}
