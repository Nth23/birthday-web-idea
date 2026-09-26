const heartIcon = `<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9.5-9C.7 7.6 2.6 4 6 4c2 0 3.4 1.1 4 2.1C10.6 5.1 12 4 14 4c3.4 0 5.3 3.6 3.5 7-2.5 4.6-9.5 9-9.5 9z"/></svg>`;

const uniPhoto = "./images/university.jpg";
const gradPhoto = "./images/grad.png";
const nyscPhoto = "./images/nysc.jpg";
const brandPhoto = "./images/brand.png";
const birthdayPhoto = "./images/mr-remi.jpeg";
const cakePhoto = "./images/cake.png";

const slides = [
  {
    type: "intro",
    title: "Happy Birthday, Daddy 🤍",
    msg: "Today, I just want to celebrate you and the part you have played in my story.",
  },
  {
    type: "photo",
    src: uniPhoto,
    label: "University days",
    title: "University Days",
    msg: "This was me back in my university days. Through those years, you made sure I had what I needed to get through school and actually enjoy the experience. You took care of me in ways I may not have fully appreciated at the time, but I do now.",
  },
  {
    type: "photo",
    src: gradPhoto,
    label: "Graduation",
    title: "Graduation",
    msg: "Then came graduation. A moment I got to share with my parents and celebrate how far I had come. And honestly, if not for you and everything you did for me along the way, I\u2019m not sure this moment would have looked the same.",
  },
  {
    type: "photo",
    src: nyscPhoto,
    label: "NYSC, Lagos",
    title: "NYSC",
    msg: "Then it was time for NYSC. Off to Lagos, ready to serve and start another chapter of my life. From being a student you were taking care of to now stepping into the world on my own.",
  },
  {
    type: "photo",
    src: brandPhoto,
    label: "Building my brand",
    title: "Growing & Building",
    msg: "Today, I\u2019m working, learning, growing, and even building a brand of my own. Looking at where I am now, I can see how much of my journey has been shaped by the support you gave me.",
  },
  {
    type: "photo",
    src: birthdayPhoto,
    label: "Thank you, Daddy",
    title: "Thank You, Daddy",
    msg: "Daddy, thank you for allowing God to bless me through you. A lot of what I have today started with the things you did for me when I was still finding my way. I pray God keeps you strong, keeps you in good health, and gives you many more years to see the lives you have helped shape flourish. Happy birthday, Daddy. 🤍",
  },
];

let i = 0;
const visual = document.getElementById("visual");
const titleEl = document.getElementById("title");
const msgEl = document.getElementById("msg");
const dotsEl = document.getElementById("dots");

slides.forEach((_, idx) => {
  const d = document.createElement("div");
  d.className = "dot" + (idx === 0 ? " active" : "");
  dotsEl.appendChild(d);
});

function render() {
  const s = slides[i];
  if (s.type === "intro") {
    visual.innerHTML = `<div class="icon-wrap"><img src="${cakePhoto}" alt="Birthday cake"></div>`;
  } else {
    visual.innerHTML = `<div class="photo-frame">${
      s.src
        ? `<img src="${s.src}" alt="${s.label}">`
        : `<span class="placeholder-label">${s.label}</span>`
    }</div>`;
  }
  titleEl.textContent = s.title;
  msgEl.textContent = s.msg;
  [...dotsEl.children].forEach((d, idx) =>
    d.classList.toggle("active", idx === i),
  );
}
document.getElementById("next").onclick = () => {
  i = (i + 1) % slides.length;
  render();
};
document.getElementById("prev").onclick = () => {
  i = (i - 1 + slides.length) % slides.length;
  render();
};
render();

// --- Background music ---
const bgMusic = document.getElementById("bgMusic");
const soundToggle = document.getElementById("soundToggle");
let musicStarted = false;

function startMusic() {
  if (musicStarted) return;
  bgMusic.volume = 0.5;
  bgMusic
    .play()
    .then(() => {
      musicStarted = true;
      soundToggle.textContent = "🔊";
    })
    .catch(() => {});
}

document.body.addEventListener("click", startMusic, { once: true });

soundToggle.onclick = (e) => {
  e.stopPropagation();
  startMusic();
  bgMusic.muted = !bgMusic.muted;
  soundToggle.textContent = bgMusic.muted ? "🔇" : "🔊";
};
