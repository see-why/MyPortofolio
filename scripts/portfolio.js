const listItem = document.getElementById('Hamburger');

function clickHamburger() {
  const menu = document.getElementById('mobile-nav');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}

listItem.addEventListener('click', clickHamburger);

const cancelImage = document.getElementById('cancel-img');

function clickCancel() {
  const menu = document.getElementById('mobile-nav');
  menu.style.display = 'none';
}

cancelImage.addEventListener('click', clickCancel);

const listItems = document.querySelectorAll('ul.mobile-nav-menu-list > li');
listItems.forEach((x) => x.addEventListener('click', clickCancel));

function closePopUp() {
  const popup = document.getElementById('mobile-pop-up');
  popup.style.display = 'none';
}

const closeImage = document.getElementById('cancel-img-popup');

if (closeImage !== null) {
  closeImage.addEventListener('click', closePopUp);
}

const button = document.getElementById('submit-form-button');
button.addEventListener('click', () => {
  const errortag = document.getElementById('error-tag');
  errortag.classList.toggle('display');
});

const form = document.getElementById('get-started-contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.elements.user_email;

  const errortag = document.getElementById('error-tag');

  if (errortag.className !== 'form-error display') {
    errortag.classList.add('display');
  }

  if (email.value.toLowerCase() !== email.value) {
    errortag.innerHTML = 'email must be in small letters';
  } else {
    errortag.classList.remove('display');
    form.submit();
  }
});