// Меню
var navMain = document.querySelectorAll('.main-nav');
var navBtn = document.querySelector('.main-nav__button');

// Модальное окно
var button = document.querySelector('.featured__button'); // Кнопка "Заказать" на главной странице
var cart_buttons = document.querySelectorAll('.for-order__button'); // Кнопки корзин на странице каталога
var popup = document.querySelector('.modal-order');
if(popup) {
  var close_button = popup.querySelector('.modal-order__button');
}
var cur_size = document.querySelectorAll('.size__button');

// Меню
navMain[0].classList.remove('main-nav--nojs');
navMain[1].classList.remove('main-nav--nojs');

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

// Модальное окно
if(button) {
  button.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-order--show");
  });
}

for(var i = 0; i < 3; i++) {
  if(cart_buttons[i]) {
    cart_buttons[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-order--show");
    });
  }
}

if(close_button) {
  close_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-order--show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-order--show")) {
      popup.classList.remove("modal-order--show");
    }
  }
});

if(cur_size[0] && cur_size[1] && cur_size[2]) {
  cur_size[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    cur_size[0].classList.add("size__button--cur");
    cur_size[1].classList.remove("size__button--cur");
    cur_size[2].classList.remove("size__button--cur");
  });

  cur_size[1].addEventListener("click", function (evt) {
    evt.preventDefault();
    cur_size[1].classList.add("size__button--cur");
    cur_size[0].classList.remove("size__button--cur");
    cur_size[2].classList.remove("size__button--cur");
  });

  cur_size[2].addEventListener("click", function (evt) {
    evt.preventDefault();
    cur_size[2].classList.add("size__button--cur");
    cur_size[0].classList.remove("size__button--cur");
    cur_size[1].classList.remove("size__button--cur");
  });
}
