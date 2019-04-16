$(function () {

    // VARIABLE
    var navLink = $(".nav__link"),
        windowHeight = $(window).height(),
        header = $(".header"),
        navBar = $(".nav").innerHeight(),
        progressBar = $(".myskills__progress-bar"),
        mySkills = $(".section-myskills"),
        myPortfolio = $(".section-portfolio"),
        myServices = $(".section-services"),
        buttonScroll = $(".button-scrollup"),
        classSection = $(".section");


    // START TOGGLE NAV LINK
    navLink.on("click", function () {
        $(this).addClass('nav__link--active').parent().siblings().find('a').removeClass('nav__link--active');    
    });
    // END TOGGLE NAV LINK

    // START RESIZE HEIGHT
    header.height(windowHeight - navBar);

    $(window).on("resize", function () {
        header.height($(this).height() - navBar);
    });
    // END RESIZE HEIGHT
    
    // START SCROLL RUNNING BROGRESSBAR
    $(window).scroll(function () {

        if ($(this).scrollTop() >= mySkills.offset().top - 70) {

            $(".myskills__progress-item .progress").each(function () {

                $(this).animate({

                    width: $(this).data('progress') + '%'

                }, 2000, function () {

                    $(this).parents(".progress-box").children(".pre-progress").text($(this).data('progress') + '%').fadeIn(2000);

                });

            });

        }

    });
    // END SCROLL RUNNING BROGRESSBAR

    // START TOGGGLE BUTTON NAVBAR
    $(".nav__button").on("click", function () {
        
        $(".nav__nav").slideToggle(1000);
        $(this).children().toggleClass('nav__button-icon--active');

    });
    // END TOGGGLE BUTTON NAVBAR

    // START TRIGGER NICESCROLL PLUGINS
    $("html").niceScroll({
        cursorwidth: "10px",
        cursorcolor: "#3f4848",
        cursorborder: ".5px solid #7eabab",
        cursorborderradius: 0,
        scrollspeed: 300,
        zindex: 99999999,
    });
    // END TRIGGER NICESCROLL PLUGINS
    
    // START SCROLLING SECTION SMOOTHLY
    navLink.on("click", function (e) {

        e.preventDefault();

        $("html, body").animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top - 70

        }, 2000);

        

    });
    // END SCROLLING SECTION SMOOTHLY

    // START WINDOW SCROLL
    $(window).on("scroll", function () {
        // START ANIMATION SECTION MY SERVICES
        if ($(this).scrollTop() >= myServices.offset().top - 70) {

            $(".services__heading-box").addClass('services__heading-box--active');

            $(".services__box").delay(1000).fadeIn(1000);

        }
        // END ANIMATION SECTION MY SERVICES

        // START BUTTON CLICK SCROLL TOP
        if ($(this).scrollTop() > mySkills.offset().top) {

            if (buttonScroll.is(':hidden')) {

                buttonScroll.fadeIn(1000);

                buttonScroll.on("click", function () {

                    $('html, body').animate({

                        scrollTop: 0

                    }, 1000);

                });

            }

        } else {

            buttonScroll.fadeOut(1000);

        }
        // END BUTTON CLICK SCROLL TOP

        // START SYNC SCROLL TOP ADD CLASS ON NAV LINK
        classSection.each(function () {

            if ($(window).scrollTop() >= $(this).offset().top) {

                var sections = $(this).attr('id');

                $(".nav__nav a").parent().siblings().find('a').removeClass('nav__link--active');

                $('.nav__nav a[data-scroll="' + sections + '"]').addClass('nav__link--active');

            }

        });
        // END SYNC SCROLL TOP ADD CLASS ON NAV LINK
    });

    // END WINDOW SCROLL


    // START PORTFOLIO 
    var portBox = '.section-portfolio-box',
        portImage = '.section-portfolio-image',
        control = '.section-portfolio-control > a';
        controlNext = 'section-portfolio-arrow--next',
        controlPrev = 'section-portfolio-arrow--prev',
        sliderInner = '.section-portfolio-slider-inner';
  
    // SHOW AND HIDDEN
    $(portImage).hide();
    $(portImage + '.active').show();


   // 
   $(control).on('click', function(e) {

    // PREVENT DEFAULT
    e.preventDefault();

       // CHECK ARROW CONTROL 
        $(this).each(function() {

            // IF ARROW NEXT
            if( $(this).hasClass(controlNext) ) {
                
                // LAST CHILD
                if( $(portImage).is('.active:last-child') ) {

                    $(portImage).fadeOut(0).removeClass('active');
                    $(portImage).first().addClass('active').fadeIn();

                } else {

                    $(portImage).fadeOut(0).removeClass('active').next().addClass('active').fadeIn();

                }

            // IF ARROW PREV
            } else if ( $(this).hasClass(controlPrev) ) {

                // FIRST CHILD
                if( $(portImage).is('.active:first-child') ) {

                    $(portImage).fadeOut(0).removeClass('active');
                    $(portImage).last().addClass('active').fadeIn();

                } else {

                    $(portImage).fadeOut(0).removeClass('active').prev().addClass('active').fadeIn();

                }

            }

        });
   });

   var status = true;

   // SETINTERVAL
   setInterval(function() {

    if(status) {

        if( $(portImage).is('.active:last-child') ) {
    
            $(portImage).fadeOut(0).removeClass('active');
            $(portImage).first().addClass('active').fadeIn();
            
        } else {
            
            $(portImage).fadeOut(0).removeClass('active').next().addClass('active').fadeIn();
            
        }

    }

   }, 4000);

   // SWITCH SETINTERVAL
   $(sliderInner).on({

    'mouseenter': function() { status = false},
    'mouseleave': function() { status = true}

   });

    // END PORTFOLIO

    // START FORM VALIDATION
    var inputName = $('#contact-input-name'),
        inputSubmit = $('#contact-input-submit'),
        inputTextArea = $('#contact-input-textarea'),
        messTextArea = $('#contact-message-textarea'),
        messInputName = $('#contact-message-name');

    inputName.add(inputTextArea).on('keyup', validationForm);
    inputSubmit.on('click', validationForm);

    function validationForm(e) {

        var exp = new RegExp(/^[a-zA-Z]{3,}$/);

        // INPUT
        if( inputName.val() === '' ) {

            e.preventDefault();
            messInputName.text('sorr\'y must be write name');

        } else if( !exp.test( inputName.val() ) ) {

            e.preventDefault();
            messInputName.text('sorr\'y must be write name at lest 3 letter');

        } else {

            messInputName.text('correct :)');

        }

        // TEXTAREA
        if( inputTextArea.val() === '') {

            e.preventDefault();
            messTextArea.text('sorr\'y must be write message');

        } else {

            messTextArea.text('correct :)');

        }
 
    }
    // END FORM VALIDATION
    
    // SECTION ABOUT ME
    var seAboutMe = $('#about-me'),
        heading = $('.section-about-me-heading').innerHeight(),
        content = $('.section-about-me-content').innerHeight(),
        totalHeight = (heading + content) / 10;

    // HEIGHT
    seAboutMe.height(totalHeight + 'rem');

    // START INCLUDE YEAR IN FOOTER
    $('.year').text( new Date().getFullYear() );
    // END INCLUDE YEAR IN FOOTER

});

