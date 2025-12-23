/* =========================
   Snowflakes
========================= */
const snowContainer = document.querySelector(".snow");

const createSnowflakes = (count = 80) => {
  const symbols = ["•", "✶", "✻", "❄", "✼"];
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const flake = document.createElement("span");
    const size = Math.random() * 1.1 + 0.6;
    const duration = Math.random() * 8 + 8;
    const delay = Math.random() * 10;
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

/* =========================
   Countdown to New Year
========================= */
const initCountdown = () => {
  const container = document.getElementById("countdown");
  if (!container) return;

  const update = () => {
    const now = new Date();
    const target = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
    const diff = target - now;

    if (diff <= 0) {
      container.innerHTML =
        `<div class="countdown-finished">A new chapter has just begun ✨</div>`;
      clearInterval(timerId);
      return;
    }

    const total = Math.floor(diff / 1000);
    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;

    const pad = (n) => String(n).padStart(2, "0");

    container.innerHTML = `
      <div class="countdown-part">
        <span class="countdown-value">${pad(days)}</span>
        <span class="countdown-label">Days</span>
      </div>
      <div class="countdown-part">
        <span class="countdown-value">${pad(hours)}</span>
        <span class="countdown-label">Hours</span>
      </div>
      <div class="countdown-part">
        <span class="countdown-value">${pad(minutes)}</span>
        <span class="countdown-label">Minutes</span>
      </div>
      <div class="countdown-part">
        <span class="countdown-value">${pad(seconds)}</span>
        <span class="countdown-label">Seconds</span>
      </div>
    `;
  };

  update();
  const timerId = setInterval(update, 1000);
};

/* =========================
   Wish Modal
========================= */
const initWishModal = () => {
  const button = document.getElementById("wish-button");
  const overlay = document.getElementById("wish-overlay");
  const closeBtn = document.getElementById("wish-close");
  const text = document.getElementById("wish-text");

  if (!button || !overlay || !closeBtn || !text) return;

  const wishes = [
    "May the New Year bring you inspiration, warmth, and joy.",
    "Thank you for your wisdom, patience, and support.",
    "Wishing you health, happiness, and bright moments ahead.",
    "May every day of the coming year bring a reason to smile.",
    "With gratitude and best wishes for the New Year."
  ];

  const open = () => {
    text.textContent = wishes[Math.floor(Math.random() * wishes.length)];
    overlay.classList.add("visible");
    overlay.setAttribute("aria-hidden", "false");
  };

  const close = () => {
    overlay.classList.remove("visible");
    overlay.setAttribute("aria-hidden", "true");
  };

  button.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
};

/* =========================
   Init
========================= */
document.addEventListener("DOMContentLoaded", () => {
  createSnowflakes(90);
  initCountdown();
  initWishModal();
});