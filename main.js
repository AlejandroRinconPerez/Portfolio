const toggleBtn = document.querySelector('.toggle');
const toggleBtnIcon = document.querySelector('.toggle ion-icon');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.setAttribute('name', isOpen ? 'close-outline' : 'menu-outline');
};
