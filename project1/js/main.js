$(function () {
    let navbar = $('.navbar'),
        body = $('body'),
        formHeader = $('.newsletter'),
        showCase = $('.showcase');

    // Padding top in body
    body.css('paddingTop', navbar.innerHeight());

    // FUNCTION HEIGHT HEADER
    function heightHeader() {
        showCase.height(  $(window).height() - (navbar.innerHeight() + formHeader.innerHeight() + 108) );
    };
    heightHeader();

    // RESIZE
    $(window).resize(function () {
        $(window).height() < 700 ?  $('div .showcase-title').addClass('change') : $('div .showcase-title').removeClass('change');
        heightHeader();
    });

    // CHECK ARROW BUTTON
    function checkArrow() {
       $('.accordion').each(function () {
            if( $(this).children('.collapse').is(':visible')  ) {
                $(this).find('i').toggleClass('fa-arrow-circle-down fa-arrow-circle-up');
            }
       });
    };
    checkArrow();

    // CLICK SPAN TOGGLE ICON
    $('.accordion span').on('click', function () {
        $(this).find('i').toggleClass('fa-arrow-circle-down fa-arrow-circle-up');
    });

    //
    $('#year').text( new Date().getFullYear() );

    //
    $('#main-nav a').on('click', function (e) {
        if(this.hash !== '') {
            e.preventDefault();
            // Save 
            const hash = this.hash;
            // animate
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900);
        }
    });

    //
    $('body').scrollspy({target: '#main-navbar'});

});