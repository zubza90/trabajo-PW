
 
// codigo login y register
const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp =  document.querySelector('.sign-up-btn'),
      $signUp = document.querySelector('.sign-up'),
      $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});





//validacion para cuando inicie sesion ya no aparezca el boton "iniciar sesion"

