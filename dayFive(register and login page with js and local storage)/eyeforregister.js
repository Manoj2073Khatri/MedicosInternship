
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#userPassword');

togglePassword.addEventListener('click', function () {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye');
  });
