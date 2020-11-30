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

//SENDING EMAIL CONFIRMATION FUNCTIONALITY
//user input
let inputs = document.querySelectorAll('input');
let name = inputs[0];
let email = inputs[1];
let subject = inputs[2];
let message = document.querySelector("textarea");

// flag variable for sending email
let sendEmail = false;

//checking if user has entered in info for each field
function emailConfirm(){
  // regex patter for email 
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  //letting user know what is wrong
  let alertMessage = "";

  //checking for a valid email since form already takes care of other stuff for me
  if(!email.value.match(pattern) || email.value.length < 0){
    alertMessage = "Please enter a valid email.";
    sendEmail = false;
  }else{
    alertMessage = "Email has been sent!"
    sendEmail = true;
  }

  //letting user know what has happened
  window.alert(alertMessage);

  return sendEmail;
}

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
