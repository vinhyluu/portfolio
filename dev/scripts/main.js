particlesJS.load('particles-js', 
    'particles.json', function(){
        console.log('callback - particles.js config loaded');
});

const navCollapse = function navCollapse() {
    const windowSize = $(window).width();
    const minWindow = 670;

    if (windowSize <= minWindow) {
        $('a[href^="#"]').on('click', function () {
            console.log("clicked");
            $('input[type="checkbox"]').prop('checked', false);
        });
    }
};

navCollapse();

$("nav ul li").click(function () {
    $("nav").toggleClass("close");
});

$(function () {
    $(".downArrow").click(function () {
        $('html,body').animate({
            scrollTop: $(".aboutContent").offset().top - 135
        }, 1000);
    });

    $(".aboutLink").click(function () {
        $('html,body').animate({
            scrollTop: $(".aboutContent").offset().top - 135
        }, 1000);
    });

    $(".skillsLink").click(function () {
        $('html,body').animate({
            scrollTop: $(".skillsContainer").offset().top - 100
        }, 1000);
    });

    $(".portfolioLink").click(function () {
        $('html,body').animate({
            scrollTop: $(".portfolioContainer").offset().top - -30
        }, 1000);
    });

    $(".contactLink").click(function () {
        $('html,body').animate({
            scrollTop: $(".contactContainer").offset().top - 100
        }, 1000);
    });

    $(".fa-angle-double-up").click(function () {
        $('html,body').animate({
            scrollTop: $(".aboutContent").offset().top - 150
        }, 1000);
    });

    $(".workLink").click(function () {
        $('html,body').animate({
            scrollTop: $(".portfolioContainer").offset().top - 0
        }, 1000);
    });

    $('.menu-toggle').click(function (){
        $('ul').toggleClass('opening');
        
        $(this).toggleClass('open');
    })

    $('.aboutLink').click(function (event) {
        event.preventDefault();
    });

    $('.skillsLink').click(function (event) {
        event.preventDefault();
    });

    $('.portfolioLink').click(function (event) {
        event.preventDefault();
    });

    $('.contactLink').click(function (event) {
        event.preventDefault();
    });

    $('.workLink').click(function (event) {
        event.preventDefault();
    });
});