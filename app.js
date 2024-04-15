const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');

const menuItems = document.querySelectorAll('li');

menuItems &&
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        ul.style.right = '-100%';
    });
});

hamburger && 
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
dateContainer &&
(dateContainer.textContent = date.getFullYear());

const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');

showPasswordCheckbox &&
showPasswordCheckbox.addEventListener('change', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
