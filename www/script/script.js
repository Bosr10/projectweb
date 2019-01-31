//*filter aan/uit
var filter = document.querySelector('form + form');
var button = document.querySelector('fieldset + button');

function show() {
  filter.classList.toggle('show');
}

function showbutton() {
  button.classList.toggle('showbutton');
}

button.addEventListener('click', show);
button.addEventListener('click', showbutton);



//*Like microinteractie
var buttonhartje = document.querySelector('article button');

function starthartje() {
  buttonhartje.classList.toggle('starthartje');
}

buttonhartje.addEventListener('click', starthartje);
