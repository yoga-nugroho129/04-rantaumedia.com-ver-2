// <============== JQuery ==============> //
$(document).ready(function() {

    // SCROLLED NAVBAR //
    $(window).scroll(function() {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 70) {
            $('#home-nav-scroll').removeClass('bg-transparent');
            $('#home-nav-scroll').addClass('scrolled-nav');
            $('#red-text').removeClass('media-text');
            $('#red-text').addClass('rantau-text');
        } else {
            $('#home-nav-scroll').removeClass('scrolled-nav');
            $('#red-text').addClass('media-text');
        }

        console.log(scrollValue);
        //END OF SCROLLED NAVBAR //
        // ============================================= //

        // NAVBAR ACTIVE SECTION //
        if (scrollValue < 250) {
            $('#home-pos').addClass('nav-link-active');
            $('#portfolio-pos').removeClass('nav-link-active');
            $('#about-pos').removeClass('nav-link-active');
            $('#process-pos').removeClass('nav-link-active');
            $('#contact-pos').removeClass('nav-link-active');
        } else if (scrollValue > 250 && scrollValue < 1250) {
            $('#about-pos').addClass('nav-link-active');
            $('#home-pos').removeClass('nav-link-active');
            $('#portfolio-pos').removeClass('nav-link-active');
            $('#process-pos').removeClass('nav-link-active');
            $('#contact-pos').removeClass('nav-link-active');
        } else if (scrollValue > 1250 && scrollValue < 1775) {
            $('#process-pos').addClass('nav-link-active');
            $('#home-pos').removeClass('nav-link-active');
            $('#portfolio-pos').removeClass('nav-link-active');
            $('#about-pos').removeClass('nav-link-active');
            $('#contact-pos').removeClass('nav-link-active');
        } else if (scrollValue > 1775 && scrollValue < 2100) {
            $('#portfolio-pos').addClass('nav-link-active');
            $('#home-pos').removeClass('nav-link-active');
            $('#about-pos').removeClass('nav-link-active');
            $('#process-pos').removeClass('nav-link-active');
            $('#contact-pos').removeClass('nav-link-active');
        } else if (scrollValue > 2100) {
            $('#contact-pos').addClass('nav-link-active');
            $('#home-pos').removeClass('nav-link-active');
            $('#portfolio-pos').removeClass('nav-link-active');
            $('#about-pos').removeClass('nav-link-active');
            $('#process-pos').removeClass('nav-link-active');
        }

        // console.log(scrollValue);

    });
    // NAVBAR ACTIVE SECTION //
    // ============================================= //

    // PORTFOLIO CAROUSEL //
    $('.customer-logos').slick({
        slidesToShow: 5, // number of displayed portfolio image to show on desktop screen size
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500, // time for slider movement in mili-second
        arrows: false,
        dots: false,
        pauseOnHover: true, // pause slide movement during mouse hover
        responsive: [{
            breakpoint: 1050,
            settings: {
                slidesToShow: 4 // 
            }
        }, {
            breakpoint: 770,
            settings: {
                slidesToShow: 3 //
            }
        }]
    });
    // ENF OF PORTFOLIO CAROUSEL //
    // ============================================= //

    // SMOOTH SCROLL //
    $('.page-scroll').on('click', function(e) {
        var hrefTarget = $(this).attr('href');
        var sectionTarget = $(hrefTarget);

        // $('body').animate({
        //     scrollTop: sectionTarget.offset().top - 50
        // }, 1000, 'swing');

        e.preventDefault();
    });

    $('.about-click').click(function(e) {
        // var hrefTarget = $(this).attr('href');
        // var sectionTarget = $(hrefTarget);
        $('body').animate({
            scrollTop: $('#body').offset()
        }, 1000);
        e.preventDefault();
    });

});

// <============== END OF JQuery ==============> //