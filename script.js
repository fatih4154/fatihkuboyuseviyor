const form = document.getElementById("quizForm");
const resultBox = document.getElementById("result");
const resultText = document.getElementById("resultText");
const restartBtn = document.getElementById("restart");
const heartsContainer = document.getElementById("hearts");

let heartInterval = null;

function spawnHeart() {
  const el = document.createElement("div");
  el.className = "heart-float";

  const hearts = ["❤️","💖","💗","💘","💕","💞"];
  el.textContent = hearts[Math.floor(Math.random() * hearts.length)];

  const size = 18 + Math.random() * 22;           // 18-40px
  const left = Math.random() * 100;               // vw
  const dur  = 3 + Math.random() * 2.7;           // 3-5.7s

  el.style.left = left + "vw";
  el.style.fontSize = size + "px";
  el.style.animationDuration = dur + "s";

  heartsContainer.appendChild(el);

  setTimeout(() => el.remove(), 7000);
}

function startHearts(durationMs = 9000) {
  stopHearts();
  heartInterval = setInterval(spawnHeart, 200);
  setTimeout(stopHearts, durationMs);
}

function stopHearts() {
  if (heartInterval) {
    clearInterval(heartInterval);
    heartInterval = null;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Cevaplar ne olursa olsun mesaj:
  resultText.textContent = "Özür dilerim aşkım seni çok seviyorum";

  form.classList.add("hidden");
  resultBox.classList.remove("hidden");

  startHearts(10000);
});

restartBtn.addEventListener("click", () => {
  form.reset();
  resultBox.classList.add("hidden");
  form.classList.remove("hidden");
  stopHearts();
  heartsContainer.innerHTML = "";
});
