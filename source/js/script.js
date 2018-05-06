var navMain = document.querySelectorAll('.main-nav');
var navBtn = document.querySelector('.main-nav__button');

navMain[0].classList.remove('main-nav--nojs');

navBtn.addEventListener('click', function() {
  for(var i = 0; i < 2; i++)
  {
    if (navMain[i].classList.contains('main-nav--closed')) {
      navMain[i].classList.remove('main-nav--closed');
      navMain[i].classList.add('main-nav--opened');
    } else {
      navMain[i].classList.add('main-nav--closed');
      navMain[i].classList.remove('main-nav--opened');
    }
  }
});
