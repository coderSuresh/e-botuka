const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');

showPasswordCheckbox.addEventListener('change', function() {
    if (passwordInput.type = 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
