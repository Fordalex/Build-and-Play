// Menu 

let menuItems = document.querySelectorAll('[data-menu]');
menuItems.forEach((i) => {
    i.addEventListener('click', changeActive)
});

function changeActive() {
    activeMenuItem = this.dataset.menu;

    menuItems.forEach((i) => i.classList.remove('active'));
    this.classList.add('active');
}
