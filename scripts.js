// full screen mobile menu
$('.nav__trigger',).on('click', function(e){
     e.preventDefault(); // prevent default behavior
     $(this).parent().toggleClass('nav--active').show(); //add nav--active class to nav icon
     $('body').toggleClass('no-scroll'); //disable scroll behind nav
   });
// clicking on a link or anywhere in the nav closes the menu and enables scroll on body
$('.nav li, .nav').on('click', function(){
  $(".nav__trigger").parent().removeClass("nav--active");
  $(".nav__icon").removeClass("nav--active");
  $('body').removeClass('no-scroll');
});

// on desktop, adds scrolled class to nav
var myNav = document.querySelector("nav");
var nav = document.querySelector(".nav__list");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    nav.classList.add("scrolled");
    myNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    myNav.classList.remove("scrolled");
  }
};

/*
  minified smooth scroll from w3schools
*/
$(document).ready(function(){$("a").on("click",function(o){if(""!==this.hash){o.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},800,function(){window.location.hash=t})}})});
