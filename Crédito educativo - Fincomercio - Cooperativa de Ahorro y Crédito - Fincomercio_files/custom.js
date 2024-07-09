// interacción menu responsive

$(".menu-btn").on("click", function () {
  $(this).toggleClass("close-menu");
  $(".open-search").removeClass("close-search");
  $(".open-search").find("i").removeClass("icon-close");
  $(".open-search").find("i").addClass("icon-search");
  $(".search-container").removeClass("show-search");
  $(".menu").toggleClass("show-menu");
  $(".menu-shadow").toggleClass("visible");
  $(".sub-menu").removeClass("show-submenu");
});

//Submenu

$(window).on("load resize", function () {
  width = $(this).width();
  if (width <= 1200) {
    $(".menu-btn , .menu").on("click", function (e) {
      e.stopPropagation();
    });
    $(".dropup-center").removeClass("dropdown");
    $(".dropup-center .dropdown-menu").removeClass("dropdown-menu");
    $(".dropup-center  button").on("click", function () {
      $(this).parent().find(".submenu-principal").addClass("show-submenu");
    });
    $(".dropup-center .submenu-principal ul button").on("click", function () {
      $(this).parent().parent().removeClass("show-submenu");
    });
  } else {
    $(".dropup-center").addClass("dropdown");
    $(".dropup-center .submenu-principal").addClass("dropdown-menu");
  }
});

// re-estructuración menu para interactividad ↓↓

$(".menu > .menu-item.menu-item-has-children > a").each(function (index) {
  $(this).replaceWith(
    $('<button class="submenu-headline">' + this.innerHTML + "</button>")
  );
});

$(".menu > .menu-item-has-children > .sub-menu").each(function (index) {
  $(this).prepend(
    '<button class="go-back"> <i class="icon-arrowline-left"></i> Atrás </button>'
  );
});

$(".go-back").on("click", function () {
  $(this).parent().removeClass("show-submenu");
});

$(
  ".menu > .menu-item.menu-item-has-children .sub-menu .menu-item-has-children > a"
).each(function (index) {
  $(this).replaceWith(
    $('<p class="sub-submenu-headline">' + this.innerHTML + "</p>")
  );
});

// Interactividad submenus ↓↓

$(".menu .menu-item.menu-item-has-children > button").on("click", function () {
  $(this).next(".sub-menu").addClass("show-submenu");
});

$(window).on("load", function () {
  $('.menu > .menu-item:nth-child(4) > a').attr("target", '_blank')
});

$(".submenu-headline").on("click", function () {
  $(this).parent().parent().removeClass("show-submenu");
});

$(".fincobot").on("click", function () {
  $(".ng-trigger").trigger("click");
});

$(".salute-body").on("click", function () {
  $(".fincobot").trigger("click");
});

//Busqueda
$(".open-search").on("click", function () {
  $(this).toggleClass("close-search");
  $(this).find("i").toggleClass("icon-close");
  $(this).find("i").toggleClass("icon-search");
  $(".search-container").toggleClass("show-search");
  setTimeout(function () {
    $(".search-container form input").trigger("focus");
  }, 600);
  $(".navigation-links-container").removeClass("show-menu");
  $("header").removeClass("menu-isopen");
  $(".menu-btn").removeClass("close-btn");
});

//Botones flotantes

$(".access-btn").on("click", function () {
  $(".access-btns-container").toggleClass("show-access");
});

$(".access-btn , .access-btns-container").on("click", function (e) {
  e.stopPropagation();
});

$("body").on("click", function () {
  $(".menu-btn").removeClass("close-menu");
  $(".menu").removeClass("show-menu");
  $(".menu-shadow").removeClass("visible");
  $(".access-btns-container").removeClass("show-access");
});

var swiper = new Swiper(".banner-home", {
  slidesPerView: 1,
  speed: 500,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
//   autoplay: {
//     delay: 6000,
//     disableOnInteraction: false,
//   },
  navigation: {
    nextEl: ".arrow-homefinco.next",
    prevEl: ".arrow-homefinco.prev",
  },
  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".brands_container", {
  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 8,
      spaceBetween: 5,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    578: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".fincomercio-banner", {
  navigation: {
    nextEl: ".arrow-finco.next",
    prevEl: ".arrow-finco.prev",
  },
  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".home-news-slider", {
  loop: false,
  spaceBetween: 24,
  navigation: {
    nextEl: ".arrow-slider.next",
    prevEl: ".arrow-slider.prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 1.5,
    },

    200: {
      slidesPerView: 1,

      spaceBetween: 24,
    },
  },
});

// var feed = new Instafeed({
//   userId: 7593739768,
//   accessToken: 'IGQVJWUGNoNUd2b1VXaVp3a1FUMU0za01uajRfWWhBTGlDVDhxVzBjYlhHRXhXVjEyb2I4cTU5dkJGdHVkandkbnZARaFFFMWlhSUVaZAm04SmJWRkNROG9NUjlGTENrckUzWWZAWZAEZAR',
// template: '<a href="{{link}}" class="img-fit" target="_blank"><img title="{{caption}}" src="{{image}}" /></a>',
// limit:9,
// debug:true,
// });
// feed.run();
