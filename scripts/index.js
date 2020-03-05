$(function() {

    // Add Class Active
    $('.navbar .collapse ul li').click(function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

    // Make The Slider Fill The Screen

    let mySlider = $('.slider');

    mySlider.height($(window).height());
    $('.slider .overlay').height($(window).height());
    $('.slider img').height($(window).height());

    let carouselCaption = $('.carousel-caption');
    $(window).resize(function() {
        mySlider.height($(window).height());
        $('.slider .overlay').height($(window).height());
        $('.slider img').height($(window).height());
        carouselCaption.css('padding-top', ($('.overlay').height() - carouselCaption.height()) / 2);
        carouselCaption.css('padding-bottom', ($('.overlay').height() - carouselCaption.height()) / 2);
    });

    // Make The Carousel-Caption In The Center On Height
    carouselCaption.css('padding-top', ($('.overlay').height() - carouselCaption.height()) / 2);
    carouselCaption.css('padding-bottom', ($('.overlay').height() - carouselCaption.height()) / 2);


    // Make The Name In Overlay In center
    // $('.our-team .rightside div div .overlay p').css('padding-top', $('.our-team .rightside div div .overlay').height() / 2);

    // Make Fade In 
    $('.our-team .rightside div div').hover(function() {
        $(this).children('.overlay').fadeIn();

    }, function() {
        $(this).children('.overlay').fadeOut();
    });

});

//  Make Slider

$(function autoSlider() {

    $('.whay-say .opp.active').each(function() {

        if (!$(this).is(':last-of-type')) {

            $(this).delay(3000).fadeOut('slow', function() {

                $(this).removeClass('active').next('.opp').addClass('active').fadeIn();
                autoSlider();

            });

        } else {

            $(this).addClass('active').delay(3000).fadeIn('slow', function() {
                $(this).removeClass('active').fadeOut('slow');
                $('.whay-say .opp:eq(0)').addClass('active').fadeIn('slow');
                autoSlider();
            });

        };

    });

});

// Add Class Active To Buttons In Our Works
$('.our-works .mybuttons button').click(function() {

    $(this).addClass('active').siblings().removeClass('active');

});

// Show The OverLay Images On Hover

$('.our-works .imgbox').hover(function() {
    $(this).children('.overlay, .imgbox span').fadeIn();

}, function() {
    $(this).children('.overlay, .imgbox span').fadeOut();
});

$('.our-works .gallery .works').hover(function() {
    $(this).children('.overlay').fadeIn();

}, function() {
    $(this).children('.overlay').fadeOut();
});

// Make Scrolled 
$(document).ready(function() {

    $('.navbar .navbar-nav li').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).data('val')).offset().top
        }, 600);

    });

});

// Add Nice Padding When Hover On Links

$('.navbar .navbar-nav li').hover(function() {
    $(this).animate({
        paddingLeft: '5px'
    }, 300)

}, function() {
    $(this).animate({
        paddingLeft: 0
    }, 300)
});