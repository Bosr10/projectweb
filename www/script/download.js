//*downloaden
var dlbar = document.querySelector('.download');
var dlbutton = document.querySelector('.download button');
var article = document.querySelector('article');
var articlep = document.querySelector('p');

function greenbar() {
  dlbar.classList.toggle('greenbar');
}

function changebutton() {
  dlbutton.classList.toggle('changebutton');
}

function movearticle() {
  article.classList.toggle('movearticle');
}

function changep() {
  document.getElementById("p1").innerHTML = "Verhalen gedownload!";
  articlep.classList.toggle('changep')
}


dlbutton.addEventListener('click', greenbar);
dlbutton.addEventListener('click', changebutton);
dlbutton.addEventListener('click', movearticle)
dlbutton.addEventListener('click', changep)
