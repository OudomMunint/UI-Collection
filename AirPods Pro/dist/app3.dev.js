"use strict";

var html = document.documentElement;
var canvas = document.getElementById("hero-lightpass");
var context = canvas.getContext("2d");
var intro3 = document.querySelector(".intro3");
var text2 = intro3.querySelector("h1");
var frameCount = 148;

var currentFrame = function currentFrame(index) {
  return "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/".concat(index.toString().padStart(4, '0'), ".jpg");
};

var preloadImages = function preloadImages() {
  for (var i = 1; i < frameCount; i++) {
    var _img = new Image();

    _img.src = currentFrame(i);
  }
};

var controller3 = new ScrollMagic.Controller();
var scene5 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro3,
  triggerHook: 0
}).setPin(intro3).addTo(controller3);
var textAnim = TweenMax.fromTo(text2, 1, {
  opacity: 1
}, {
  opacity: 0
});
var scene3 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro3,
  triggerHook: 0
}).setTween(textAnim).addTo(controller3);
var img = new Image();
img.src = currentFrame(1);
canvas.width = 1158;
canvas.height = 770;

img.onload = function () {
  context.drawImage(img, 0, 0);
};

var updateImage = function updateImage(index) {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener('scroll', function () {
  var scrollTop = html.scrollTop;
  var maxScrollTop = html.scrollHeight - window.innerHeight;
  var scrollFraction = scrollTop / maxScrollTop;
  var frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));
  requestAnimationFrame(function () {
    return updateImage(frameIndex + 1);
  });
});
preloadImages();
//# sourceMappingURL=app3.dev.js.map
