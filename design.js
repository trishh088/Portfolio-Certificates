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
// for slide show on page 2
function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}
var slideIndexb = 1;
showSlidesb(slideIndexb);

function plusSlides2(n) {
  showSlidesb(slideIndexb += n);
}

function currentSlide2(n) {
  showSlidesb(slideIndexb = n);
}

function showSlidesb(n) {
  var b;
  var slidesb = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("demo2");
  var captionText2 = document.getElementById("caption2");
  if (n > slidesb.length) {slideIndexb = 1}
  if (n < 1) {slideIndexb = slidesb.length}
  for (b = 0; b < slidesb.length; b++) {
      slidesb[b].style.display = "none";
  }
  for (b = 0; b < dots2.length; b++) {
      dots2[b].className = dots2[b].className.replace(" active", "");
  }
  slidesb[slideIndexb-1].style.display = "block";
  dots2[slideIndexb-1].className += " active";
  captionText2.innerHTML = dots2[slideIndexb-1].alt;
}

// for slide show on page 3

function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}

function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}
var slideIndexc = 1;
showSlidesc(slideIndexc);

function plusSlides3(n) {
  showSlidesc(slideIndexc += n);
}

function currentSlide3(n) {
  showSlidesc(slideIndexc = n);
}

function showSlidesc(n) {
  var c;
  var slidesc = document.getElementsByClassName("mySlides3");
  var dotsc = document.getElementsByClassName("demo3");
  var captionText3 = document.getElementById("caption3");
  if (n > slidesc.length) {slideIndexc = 1}
  if (n < 1) {slideIndexc = slidesc.length}
  for (c = 0; c < slidesc.length; c++) {
      slidesc[c].style.display = "none";
  }
  for (c = 0; c < dotsc.length; c++) {
      dotsc[c].className = dotsc[c].className.replace(" active", "");
  }
  slidesc[slideIndexc-1].style.display = "block";
  dotsc[slideIndexc-1].className += " active";
  captionText3.innerHTML = dotsc[slideIndexc-1].alt;
}



// for slide show on page 4

function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}

function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}
var slideIndexD = 1;
showSlidesD(slideIndexD);

function plusSlides4(n) {
  showSlidesD(slideIndexD += n);
}

function currentSlide4(n) {
  showSlidesD(slideIndexD = n);
}

function showSlidesD(n) {
  var d;
  var slidesD = document.getElementsByClassName("mySlides4");
  var dotsD = document.getElementsByClassName("demo4");
  var captionText4 = document.getElementById("caption4");
  if (n > slidesD.length) {slideIndexD = 1}
  if (n < 1) {slideIndexD = slidesD.length}
  for (d = 0; d < slidesD.length; d++) {
      slidesD[d].style.display = "none";
  }
  for (d = 0; d < dotsD.length; d++) {
      dotsD[d].className = dotsD[d].className.replace(" active", "");
  }
  slidesD[slideIndexD-1].style.display = "block";
  dotsD[slideIndexD-1].className += " active";
  captionText4.innerHTML = dotsD[slideIndexD-1].alt;
}
