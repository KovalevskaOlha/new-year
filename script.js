const snowContainer = document.querySelector(".snow");

const createSnowflakes = (count = 80) => {
  const symbols = ["•", "✶", "✻", "❄", "✼"];
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const flake = document.createElement("span");
    const size = Math.random() * 1.1 + 0.6; // rem
    const duration = Math.random() * 8 + 8; // 8-16s
    const delay = Math.random() * 10; // spread start times
    const drift = (Math.random() * 80 - 40).toFixed(0) + "px";
    const spin = (Math.random() * 720 - 360).toFixed(0) + "deg";

    flake.className = "flake";
    flake.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    flake.style.left = Math.random() * 100 + "vw";
    flake.style.fontSize = `${size}rem`;
    flake.style.opacity = String(Math.random() * 0.6 + 0.4);
    flake.style.animation = `fall ${duration}s linear ${delay}s infinite`;
    flake.style.setProperty("--drift", drift);
    flake.style.setProperty("--spin", spin);

    frag.appendChild(flake);
  }

  snowContainer.appendChild(frag);
};

document.addEventListener("DOMContentLoaded", () => {
  createSnowflakes(90);
});

