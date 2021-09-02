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

function setFormData(name, email, message) {
  const formData = {};
  formData.name = name;
  formData.email = email;
  formData.message = message;

  const formDatestring = JSON.stringify(formData);

  localStorage.setItem('formData', formDatestring);
}

function setFormDataForInput() {
  const inputName = document.getElementById('user_name');
  const inputEmail = document.getElementById('user_email');
  const inputMessage = document.getElementById('user_message');

  const name = inputName.value;
  const email = inputEmail.value;
  const message = inputMessage.value;

  setFormData(name, email, message);
}

const inputName = document.getElementById('user_name');
const inputEmail = document.getElementById('user_email');
const inputMessage = document.getElementById('user_message');

inputName.addEventListener('change', setFormDataForInput);
inputEmail.addEventListener('change', setFormDataForInput);
inputMessage.addEventListener('change', setFormDataForInput);

const button = document.getElementById('submit-form-button');
button.addEventListener('click', () => {
  const errortag = document.getElementById('error-tag');
  errortag.classList.toggle('display');

  const form = document.getElementById('get-started-contact-form');

  const name = form.elements.user_name.value;
  const email = form.elements.user_email.value;
  const message = form.elements.user_message.value;

  setFormData(name, email, message);
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

const formDataString = localStorage.getItem('formData');
if (formDataString !== null) {
  const formData = JSON.parse(formDataString);
  form.elements.user_name.value = formData.name;
  form.elements.user_email.value = formData.email;
  form.elements.user_message.value = formData.message;
}