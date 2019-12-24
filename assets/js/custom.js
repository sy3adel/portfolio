jQuery(document).ready(function ($) {
    "use strict";


// Home Slider Start
// ******************************************************************************************

    if ($('.data-owl').length) {

        $('.data-owl').each(function (index) {
            var $this = $(this);
            $this.owlCarousel(
                {
                    loop:true,
                    autoPlay: true,
                    autoplayTimeout:5000,
                    autoplayHoverPause:false,
                    items: $this.data('items'),
                    navigation: $this.data('navigation'),
                    singleItem: $this.data('singleitem'),
                    itemsScaleUp: $this.data('itemsscaleup'),
                    navigationText: ['', ''],
                    pagination: $this.data('pagination'),
                    paginationNumbers: $this.data('paginationnumbers'),
                    autoHeight: $this.data('autoheight'),
                    mouseDrag: $this.data('mousedrag'),
                    transitionStyle: $this.data('transitionstyle'),
                    responsive: true,
                    lazyLoad: true,
                    addClassActive: true,
                    itemsDesktop: [1450, 4],
                    afterInit: function () {

                        $('.active .caption-content-position', $this).children().each(function (index, val) {
                            $(this).addClass('animated ' + $(this).data('animation'));
                        });
                    },
                    beforeMove: function () {
                        $('.caption-content-position').children().each(function (index, val) {
                            $(this).removeClass('animated ' + $(this).data('animation'));
                        });
                    },
                    afterMove: function () {
                        $('.active .caption-content-position', $this).children().each(function (index, val) {
                            $(this).addClass('animated ' + $(this).data('animation'));
                        });

                    }
                });

        });

    }
//Home Slider Start


//Preloader 
// ******************************************************************************************

    $("body").jpreLoader(
        {
            splashID: "#jSplash",
            showPercentage: !0,
            autoClose: !0,
            showSplash: true,
            splashFunction: function () {
                $("#circle").delay(1250).animate({opacity: 1}, 700, "linear");

            }
        })

//Preloader END

// Contact Form Start
// ******************************************************************************************
    $('#contact_form').validate(
        {
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    phone: true
                },
                subject: {
                    minlength: 2,
                    required: true
                },
                message: {
                    minlength: 2,
                    required: true
                }
            },
            highlight: function (element) {
                $(element).closest('.control-group').removeClass('success').addClass('error');
            },
            success: function (element) {
                element
                    .text('OK!').addClass('valid')
                    .closest('.control-group').removeClass('error').addClass('success');
            },
            submitHandler: function (form) {
                // do other stuff for a valid form
                $.post('email_process.php/wp-admin/setup-config.html', $("#contact_form").serialize(), function (data) { // action file is here
                    $('#post_message').html(data);
                });
            }
        });

//Contact Form END


    /***************************************************
     //  appear animated function
     ***************************************************/
//Count  function
    $('.funfacts-num').appear(function () {
        // custom formatting example
        $('.funfacts-num').data('countToOptions', {
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });
        // start all the timers
        $('.timer').each(count);

        // restart a timer when a button is clicked
        $('.restart').on("click", function (event) {
            event.preventDefault();
            var target = $(this).data('target');
            count.call($(target));
        });

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });
// Count  function end


    /***************************************************
     //Navigation smooth Scrolling
     ***************************************************/
    $('.nav a, .nav li a, .arrow-link a, .arrow-link2 a, .arrow-link3 a,#cbp-spmenu-s4 a,.btn a ,.down-arrow a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 90
        }, 1700, 'easeInOutExpo');
        event.preventDefault();
    });


    /***************************************************
     //    (Back to Top)
     ***************************************************/

    var offset = 250;
    var duration = 300;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').on("click", function (event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

// Push Menu
    $('.toggle-menu').jPushMenu();

    /* Home sliding_title  */

    /* function Slider  Title animated :Auto  */
    function loadSlidingTitleAnimated() {
        var myInterval;
        var counter = 1;
        var myFunc = function () {
            var cur = $('.main-title ul li').length;
            if (cur == counter) {
                ; //if conditon for resetting counter
                $('.main-title ul li.sliding_title').removeClass('sliding_title');
                $('.main-title ul li').first().addClass('sliding_title');
                counter = 1;
            } else {
                counter++;
                $('.main-title ul li.sliding_title').removeClass('sliding_title').next().addClass('sliding_title');
            }
        };
        myInterval = setInterval(myFunc, 5000); // Set Animation Time Intervals in Miliseconds
    }

    loadSlidingTitleAnimated();

    /* Home sliding_title  */


//Portfolio filters for projects
    $('#portfolio-grid').mixitup({
        effects: ['fade', 'scale'],
        easing: 'snap'
    });


//Portfolio filters for Gallery 
    $('#gallery-grid').mixitup({
        effects: ['fade', 'scale'],
        easing: 'snap'
    });


// Owl Slider

// Featured Projects
    var carousel = $(".portfolio-grid");
    carousel.owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: [""]
    });


// My Services
    var carousel = $("#service_slide");
    carousel.owlCarousel({
        autoPlay: true,
        pagination: false,
        navigation: true,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsTablet: [990, 2],
        itemsMobile: [600, 1],
        navigationText: [""],
    });


// My Skills
    var carousel = $("#skills_slide");
    carousel.owlCarousel({
        autoPlay: true,
        pagination: true,
        navigation: false,
        rewindNav: true,
        scrollPerPage: false,
        items: 4,
        navigationText: [""],
    });


// Pie Chart
    $(function () {
        $('.chart').easyPieChart({
            barColor: '#0084ffa0',
            trackColor: "#d5d5d5",
            lineWidth: 15,
            size: 180
        });
    });


// Modal Body Scroll Hide
    $('.modal').on('show.bs.modal', function () {
        if ($(document).height() > $(window).height()) {
            // no-scroll
            $('body').addClass("modal-open-noscroll");
        } else {
            $('body').removeClass("modal-open-noscroll");
        }
    })
    $('.modal').on('hide.bs.modal', function () {
        $('body').removeClass("modal-open-noscroll");
    })

// tooltips 
    $('[data-toggle="tooltip"]').tooltip();

// Skills Page

    /*  Carousel Slider Used In Project Modal page  */
    $('.carousel').carousel({
        interval: 3000
    })
    /* Carousel Slider end */


    $('.ss-style-doublediagonal').each(function () {
        $(this).appear(function () {
            $('.ss-style-doublediagonal').addClass('show');
        });
    });

    $('.chevron').each(function () {
        $(this).appear(function () {
            $(this).addClass('show');
        });
    });

    $('.ss-style-roundedsplit').each(function () {
        $(this).appear(function () {
            $(this).addClass('show');
        });
    });

    $('h1').each(function () {
        $(this).appear(function () {
            $(this).addClass('show');
        });
    });

    $('.folded-corner').addClass('flip');

}); // end document.ready


// WOW Init Reveal Animation
wow = new WOW(
    {
        animateClass: 'animated',
        offset: 100
    }
);
wow.init();
//   
// wow end 


