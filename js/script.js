// type write
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// GREETING

const date = new Date();
const hour = date.getHours();
const greeting = document.getElementById('greeting');

if (hour >= 0 && hour < 12) {
  greeting.textContent = 'Good morning!';
} else if (hour >= 12 && hour < 18) {
  greeting.textContent = 'Good afternoon!';
} else {
  greeting.textContent = 'Good evening!';
}

// about

// $(document).ready(function () {
//   $(window).scroll(function () {
    // ------------------------------ sticky navbar on scroll script ------------------------------ //
    // if (this.scrollY > 20) {
    //   $(".navbar").addClass("sticky");
    // } else {
    //   $(".navbar").removeClass("sticky");
    // }

    // ------------------------------ scroll-up button show/hide script ------------------------------ //
  //   if (this.scrollY > 500) {
  //     $(".scroll-up-btn").addClass("show");
  //   } else {
  //     $(".scroll-up-btn").removeClass("show");
  //   }
  // });

  // ------------------------------ slide-up script ------------------------------ //

  // $(".scroll-up-btn").click(function () {
  //   $("html").animate({ scrollTop: 0 });
    // ------------------------------ removing smooth scroll on slide-up button click ------------------------------ //
  //   $("html").css("scrollBehavior", "auto");
  // });

  // $(".navbar .menu li a").click(function () {
    // ------------------------------ Smooth scroll on Menu Items click ------------------------------ //

  //   $("html").css("scrollBehavior", "smooth");
  // });

  // ------------------------------ Toggle Navbar ------------------------------ //

//   $(".menu-btn").click(function () {
//     $(".navbar .menu").toggleClass("active");
//     $(".menu-btn i").toggleClass("active");
//   });
 
// });

// id
$(document).ready(function(){
  $('a').click(function(){
    $('a').removeClass("selected");
    $(this).addClass("selected");
  });
});