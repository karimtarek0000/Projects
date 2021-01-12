$(function () {
  var e = $(".nav__link"),
    t = $(window).height(),
    o = $(".header"),
    n = $(".nav").innerHeight();
  $(".nav__nav").outerHeight();
  (progressBar = $(".myskills__progress-bar")),
    (mySkills = $(".section-myskills")),
    (myPortfolio = $(".section-portfolio")),
    (myServices = $(".section-services")),
    (buttonScroll = $(".button-scrollup")),
    (classSection = $(".section")),
    (test = null),
    window.innerWidth <= 900 ? o.height(t - test) : o.height(t - n),
    $(window).on("resize", function () {
      o.height($(this).height() - n);
    }),
    $(window).scroll(function () {
      $(this).scrollTop() >= mySkills.offset().top &&
        $(".myskills__progress-item .progress").each(function () {
          $(this).animate(
            { width: $(this).data("progress") + "%" },
            2e3,
            function () {
              $(this)
                .parents(".progress-box")
                .children(".pre-progress")
                .text($(this).data("progress") + "%")
                .fadeIn(2e3);
            }
          );
        });
    }),
    $(".nav__button").on("click", function () {
      $(".nav__nav").slideToggle(500),
        $(this).children().toggleClass("nav__button-icon--active"),
        (test = $(".nav__nav").innerHeight()),
        console.log(test);
    }),
    e.on("click", function (e) {
      e.preventDefault();
      const t = $(this).data("scroll");
      $("html, body").animate(
        { scrollTop: $(`#${t}`).offset().top },
        600,
        function () {
          $(".nav__nav").slideUp(500),
            $(".nav__button")
              .children()
              .removeClass("nav__button-icon--active");
        }
      );
    }),
    $(window).on("scroll", function () {
      $(this).scrollTop() >= myServices.offset().top &&
        ($(".services__heading-box").addClass("services__heading-box--active"),
        $(".services__box").delay(1e3).fadeIn(1e3)),
        $(this).scrollTop() > mySkills.offset().top
          ? buttonScroll.is(":hidden") &&
            (buttonScroll.fadeIn(1e3),
            buttonScroll.on("click", function () {
              $("html, body").animate({ scrollTop: 0 }, 1e3);
            }))
          : buttonScroll.fadeOut(1e3);
    });
  var s = ".section-portfolio-box .active",
    i = ".section-portfolio-image";
  (controlNext = "section-portfolio-arrow--next"),
    (controlPrev = "section-portfolio-arrow--prev"),
    (sliderInner = ".section-portfolio-slider-inner"),
    $(i).hide(),
    $(i + ".active").show(),
    $(".section-portfolio-control > a").on("click", function (e) {
      e.preventDefault(),
        $(this).each(function () {
          $(this).hasClass(controlNext)
            ? $(i).is(".active:last-child")
              ? ($(s).fadeOut(0).removeClass("active"),
                $(i).first().addClass("active").fadeIn())
              : $(s)
                  .fadeOut(0)
                  .removeClass("active")
                  .next()
                  .addClass("active")
                  .fadeIn()
            : $(this).hasClass(controlPrev) &&
              ($(i).is(".active:first-child")
                ? ($(s).fadeOut(0).removeClass("active"),
                  $(i).last().addClass("active").fadeIn())
                : $(s)
                    .fadeOut(0)
                    .removeClass("active")
                    .prev()
                    .addClass("active")
                    .fadeIn());
        });
    });
  var a = !0;
  setInterval(function () {
    a &&
      ($(i).is(".active:last-child")
        ? ($(s).fadeOut(0).removeClass("active"),
          $(i).first().addClass("active").fadeIn())
        : $(s)
            .fadeOut(0)
            .removeClass("active")
            .next()
            .addClass("active")
            .fadeIn());
  }, 4e3),
    $(sliderInner).on({
      mouseenter: function () {
        a = !1;
      },
      mouseleave: function () {
        a = !0;
      },
    });
  var r = $("#contact-input-name"),
    l = $("#contact-input-submit"),
    c = $("#contact-input-textarea"),
    v = $("#contact-message-textarea"),
    d = $("#contact-message-name");
  function f(e) {
    var t = new RegExp(/^[a-zA-Z]{3,}$/);
    "" === r.val()
      ? (e.preventDefault(), d.text("sorr'y must be write name"))
      : t.test(r.val())
      ? d.text("correct :)")
      : (e.preventDefault(),
        d.text("sorr'y must be write name at lest 3 letter")),
      "" === c.val()
        ? (e.preventDefault(), v.text("sorr'y must be write message"))
        : v.text("correct :)");
  }
  r.add(c).on("keyup", f), l.on("click", f);
  var u = $("#about-me"),
    h =
      ($(".section-about-me-heading").innerHeight() +
        $(".section-about-me-content").innerHeight()) /
      10;
  u.height(h + "rem"), $(".year").text(new Date().getFullYear());
});
