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

  // When the nav hamburger is hidden, we want to remain at the top of the scroll position
  document.body.style.position = '';
  document.body.style.top = '';

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