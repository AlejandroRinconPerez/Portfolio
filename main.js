const toggleBtn = document.querySelector(".toggle");
const toggleBtnIcon = document.querySelector(".toggle ion-icon");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.setAttribute("name", isOpen ? "close-outline" : "menu-outline");
};

const words = [
  "Html",
  "CSS",
  "Javascript",
  "Python",
  "Java",
  "SQL",
  "PostgreSQL",
  "GitHub",
  "Markdown",
  "Git",
];

let currentIndex = 0;

const wordElement = document.querySelector(".word");

function rotateWords() {
  wordElement.textContent = words[currentIndex];

  wordElement.style.color = getRandomColor();

  currentIndex = (currentIndex + 1) % words.length;
}

function newhover() {
  const spans = document.querySelectorAll(".scroll div span");

  spans.forEach((span) => {
    span.addEventListener("mouseover", function () {
      if (span.style.background != "transparent") {
        span.style.background = "1a1225";
      }

      span.style.background = getRandomColor();
    });
  });
}
newhover();

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

rotateWords();
setInterval(rotateWords, 2000);

// Projecst

let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;

function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = `none`;
  items[active].style.opacity = 1;

  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${stt * 120}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px)  rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = `blur(2px)`;
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${stt * -120}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px)  rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = `blur(2px)`;
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}

loadShow();

next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
};
