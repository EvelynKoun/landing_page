  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('show');
  })

  $("#navA .navmenu-nav a").click(function(e){
  e.preventDefault();
  $('.navmenu').offcanvas('hide');
    $(location).attr('href', $(this).attr(href));
  });

// ------------------------

// var btnContainer = document.getElementById("navbarNav");

// var btns = btnContainer.getElementsByClassName("nav-link");

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");

//     if (current.length > 0) { 
//       current[0].className = current[0].className.replace("active", "");
//     }

//     this.className += " active";
//   });
// }

// ------------------------

  // var scroll = new SmoothScroll('a[href*="#"]');

// All animations will take exactly 500ms
// var scroll = new SmoothScroll('a[href*="#"]', {
// 	speed: 500,
// 	speedAsDuration: true
// });


// ----- Owl Carousel ----------
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// ------------------------

$(document).on("scroll", function() {

if($(document).scrollTop()>100) {
  $(".navbar").addClass("navShadow");
} else {
  $(".navbar").removeClass("navShadow");
}

});

// --- Scroll Back To Top Button ---
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}