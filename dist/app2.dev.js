"use strict";

//For selecting elements
var intro2 = document.querySelector(".intro2");
var video2 = intro2.querySelector("video");
var text2 = intro2.querySelector("h1"); //END SECTION

var section2 = document.querySelector("section2");
var end2 = section2.querySelector("h1"); //SCROLLMAGIC

var controller2 = new ScrollMagic.Controller(); //Scenes

var scene3 = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro2,
  triggerHook: 0
}).addIndicators().setPin(intro2).addTo(controller2); //Video Animation

var accelamount2 = 0.1;
var scrollpos2 = 0;
var delay2 = 0;
scene3.on("update", function (e2) {
  scrollpos2 = e2.scrollPos / 1000;
});
setInterval(function () {
  delay2 += (scrollpos2 - delay2) * accelamount2;
  console.log(scrollpos2, delay2);
  video2.currentTime = delay2;
}, 33.3); //Text Animation 2

var textAnim2 = TweenMax.fromTo(text2, 1, {
  opacity: 1
}, {
  opacity: 0
});
var scene4 = new ScrollMagic.Scene({
  duration: 1500,
  triggerElement: intro2,
  triggerHook: 0
}).setTween(textAnim2).addTo(controller2);
//# sourceMappingURL=app2.dev.js.map
