"use strict";

//For selecting elements
var intro = document.querySelector(".intro");
var video = intro.querySelector("video");
var text = intro.querySelector("h1"); //END SECTION
//SCROLLMAGIC

var controller = new ScrollMagic.Controller(); //Scenes

var scene1 = new ScrollMagic.Scene({
  duration: 57000,
  triggerElement: intro,
  triggerHook: 0
}).setPin(intro).addTo(controller); //Video Animation

var accelamount = 0.1;
var scrollpos = 0;
var delay = 0;
scene1.on("update", function (e1) {
  scrollpos = e1.scrollPos / 1000;
});
setInterval(function () {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);
  video.currentTime = delay;
}, 33.3); //Text Animation
//Need to stop both animations from playing at the same time
//Get the button:

mybutton = document.getElementById("myBtn"); // When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
} // When the user clicks on the button, scroll to the top of the document


function topFunction() {
  document.body.scrollTop = 0; // For Safari

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//# sourceMappingURL=app.dev.js.map
