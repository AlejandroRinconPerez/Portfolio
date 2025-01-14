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
  const blurEffect = `blur(2px)`;
  const perspective = `perspective(16px)`;
  const itemsLength = items.length;
  const maxOpacityIndex = 2;
  const scaleStep = 0.2;
  const translateStep = 120;

  
  const activeItem = items[active];
  activeItem.style.transform = `none`;
  activeItem.style.zIndex = 1;
  activeItem.style.filter = `none`;
  activeItem.style.opacity = 1;

  
  for (let i = 0; i < itemsLength; i++) {
    if (i === active) continue;

    const offset = i - active;
    const stt = Math.abs(offset); 
    const direction = offset > 0 ? 1 : -1; 

    const transform = `translateX(${stt * translateStep * direction}px) scale(${
      1 - scaleStep * stt
    }) ${perspective} rotateY(${direction * -1}deg)`;

    const zIndex = -stt;
    const filter = blurEffect;
    const opacity = stt > maxOpacityIndex ? 0 : 0.6;

   
    const item = items[i];
    item.style.transform = transform;
    item.style.zIndex = zIndex;
    item.style.filter = filter;
    item.style.opacity = opacity;
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


document.addEventListener('DOMContentLoaded', function() {
  const titles = document.querySelectorAll('.accordion-title');

  titles.forEach(title => {
      title.addEventListener('click', function() {
          const content = this.nextElementSibling;

        
          document.querySelectorAll('.accordion-content').forEach(item => {
              if (item !== content) {
                  item.style.display = 'none';
              }
          });

      
          if (content.style.display === 'block') {
              content.style.display = 'none';
            
          } else {
              content.style.display = 'block';
          }
      });
  });
});



const accordionTitles = document.querySelectorAll('.accordion-title');


accordionTitles.forEach((button) => {
  button.addEventListener('click', () => {
   
    button.classList.toggle('no-border');
  });
});
