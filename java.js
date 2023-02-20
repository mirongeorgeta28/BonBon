/*Bara de sus/Meniul*/
const navLinks = document.querySelector('#navLinks');
const navToggleBtn = document.querySelector('#navToggleBtn');
 
navToggleBtn.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
})
function myFunction(x) {
  x.classList.toggle("change");
}

/*Servicii/poze*/ 
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
/*Servicii video*/
function playPause(){
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}

/*Servicii/transition*/
function gotoLink(link){
  console.log(link.value);
  location.href = link.value
}
/*Bara servicii*/
function primFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
