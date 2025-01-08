const toggleBtn = document.querySelector('.toggle');
const toggleBtnIcon = document.querySelector('.toggle ion-icon');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.setAttribute('name', isOpen ? 'close-outline' : 'menu-outline');
};





const words = ["me", "projects", "skills", "tools"];
let currentIndex = 0;


const wordElement = document.querySelector(".word");


function rotateWords() {
  wordElement.textContent = words[currentIndex];
  
  wordElement.style.color = getRandomColor();

  
  currentIndex = (currentIndex + 1) % words.length;
}


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

