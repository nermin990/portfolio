$ = jQuery;

// Script for mouse background

// const cursor = document.querySelector(".cursor");
// const portfolio = document.querySelector(".portfolio");
//
// portfolio.addEventListener("mousemove", (event) => {
//     cursor.style.left = `${event.pageX}px`;
//     cursor.style.top = `${event.pageY}px`;
// });
//
// portfolio.addEventListener("mouseenter", () => {
//     cursor.style.background = `radial-gradient(circle, rgba(46,92,107,0.2) 0%, rgba(35,66,79,0.1) 40%, rgba(17,32,38,0) 80%)`;
// });
//
// portfolio.addEventListener("mouseleave", () => {
//     cursor.style.backgroundColor = "rgba(255, 255, 255, 0)";
// });



// Script for heading typing animation

var textWrapper = document.querySelector(
    ".portfolio-holder__left-heading .letters"
);
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime.timeline().add({
    targets: ".portfolio-holder__left-heading .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 80 * (i + 1),
});

// Select all the navigation links

$(document).ready(function () {
    function activateNavLink() {
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();

        $(".content-holder").each(function () {
            var sectionTop = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();

            if (scrollPosition + windowHeight / 6 >= sectionTop && scrollPosition + windowHeight / 2 < sectionTop + sectionHeight) {
                var id = $(this).attr("id");

                $(".portfolio-holder__left-content .portfolio-navigation ul li a").removeClass("active");
                $(".portfolio-holder__left-content .portfolio-navigation ul li a span").removeClass("active-line");

                $('a[href="#' + id + '"]').addClass("active");
                $('a[href="#' + id + '"] span').addClass("active-line");
            }
        });
    }

    $(window).on("scroll", function () {
        activateNavLink();
    });

    $(".portfolio-holder__left-content .portfolio-navigation ul li a").on("click", function () {
        $(".portfolio-holder__left-content .portfolio-navigation ul li a").removeClass("active");
        $(".portfolio-holder__left-content .portfolio-navigation ul li a span").removeClass("active-line");

        $(this).addClass("active");
        $(this).find("span").addClass("active-line");
    });
});

// Hamburger menu
$(document).ready(function (){
    $('.hamburger-icon').on('click', function (){
        $(this).toggleClass("is-active");
        $('.hamburger').slideToggle();
    })
    $('.hamburger .hamburger-menu .portfolio-navigation ul li a').on('click', function (){
        $('.hamburger').slideUp();
        $('.hamburger-icon').toggleClass("is-active");
    })
})

