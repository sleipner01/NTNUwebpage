const mobileBtn = document.getElementById('mobile-cta')
      nav = document.querySelector('nav')
      mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('nav-btn');
});

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('nav-btn');
});