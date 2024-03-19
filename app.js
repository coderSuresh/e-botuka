const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

const menuItems = document.querySelectorAll('li');

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        ul.style.right = '-100%';
    });
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        ul.style.right = '1rem';
    } else {
        ul.style.right = '-100%';
    }
});

const dateContainer = document.querySelector('.date');
const date = new Date();
dateContainer.textContent = date.getFullYear();