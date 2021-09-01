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
closeImage.addEventListener('click', closePopUp);