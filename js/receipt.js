//BACK TO TOP BUTTON FUNCTIONALITY
//Get the button:
let backTopBtn = document.getElementById("backTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {this.backTopScroll()};

function backTopScroll() {
  if ((document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ) && (document.body.scrollWidth > 600 || document.documentElement.scrollWidth > 600)) {
    backTopBtn.style.display = "block";
  } else {
    backTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// adding the event to the button 
backTopBtn.addEventListener('click', goTop);

// THE OVERLAY HAMBURGER MENU 
// getting the hamburger menu 
let hamburger = document.querySelector(".icon");

// getting the close icon
let closeBtn = document.querySelector(".closebtn");

// the hamburger links 
let hamburgerLinks = document.querySelectorAll(".overlay-content a");

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  backTopBtn.style.display = "none";

  //prevent window scrolling
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
}

  /* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";

  // When the nav is hidden...
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

// adding the functions to the buttons
hamburger.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);

//adding close to all hamburger links
for(let link of hamburgerLinks){
  link.addEventListener('click', closeNav);
}

// SLIDE SHOW FUNCTIONALITY

// THE SLIDE SHOW BUTTONS 
const researchButtons = document.querySelectorAll(".research-button");
const conceptButtons = document.querySelectorAll(".concept-button");
const iterationButtons = document.querySelectorAll(".iteration-button");

researchButtons.forEach(researchButton => researchButton.addEventListener('click', function(){
  for(button of researchButtons){
    button.classList.remove('active-image');
  }

  researchButton.classList.add('active-image');
}));

conceptButtons.forEach(conceptButton => conceptButton.addEventListener('click', function(){
  for(button of conceptButtons){
    button.classList.remove('active-image');
  }

  conceptButton.classList.add('active-image');
}));

iterationButtons.forEach(iterationButton => iterationButton.addEventListener('click', function(){
  for(button of iterationButtons){
    button.classList.remove('active-image');
  }

  iterationButton.classList.add('active-image');
}));

// MODAL IMAGE
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  
  // When the modal is shown, we want a fixed body
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

  // When the modal is hidden...
  const scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}