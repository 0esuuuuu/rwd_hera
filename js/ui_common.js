$(function () {
  // 헤더
  $(window).on('scroll', function () {
    var st = $(window).scrollTop();
    if (st > 35) {
      $('#header').addClass('on');
    } else {
      $('#header').removeClass('on');
    }
  });

  // 검색창
  $('#header .util_wrap .btn_search, #header .m_btn_wrap .btn_search').on('click', function () {
    $('body').toggleClass('on');
    $('#header .search_wrap').slideToggle();
    $('.dimmed').toggle();
  });

  // 검색어 삭제
  var searchInput = $('.search_wrap .input_wrap input[type=text]');
  $('.search_wrap .input_wrap .btn_clear').on('click', function () {
    searchInput.val('').trigger('focus');
    $(this).hide();
  });

  searchInput.on('keyup', function () {
    $('.search_wrap .input_wrap .btn_clear').show();
  });

  $('.search_wrap .btn_close,#header .m_btn_wrap .btn_open, .dimmed').on('click', function () {
    $('#header .search_wrap').hide();
    $('body').removeClass('on');
    $('.dimmed').hide();
  });

  $('#header .util_wrap .lang_wrap .btn_lang').on('click', function () {
    $('#header .util_wrap .lang_wrap .lang').slideToggle();
  });

  // gnb
  $('#header .gnb>li:not(:last-child)').on('mouseenter', function () {
    $(this).find('.depth02_area').show().parent().siblings().find('.depth02_area').hide();
    $('.dimmed').show();
  });

  $('#header .gnb>li').on('mouseleave', function () {
    $(this).find('.depth02_area').hide();
    $('.dimmed').hide();
  });

  // 모바일 gnb
  $('#header .m_btn_wrap .btn_open').on('click', function () {
    $('#header .m_gnb_wrap').stop().addClass('on');
  });

  $('#header .m_gnb>li>a').on('click', function () {
    $(this).parent().toggleClass('on').siblings().removeClass('on');
    if (!$(this).next().is(':visible')) {
      $(this).next().slideToggle().parent().siblings().find('.depth02_area').slideUp();
    } else {
      $(this).next().slideUp();
    }
  });

  $('#header .m_gnb .depth02>li>a').on('click', function () {
    $(this).parent().toggleClass('on').siblings().removeClass('on');
    if (!$(this).next().is(':visible')) {
      $(this).next().slideToggle().parent().siblings().find('.depth03').slideUp();
    } else {
      $(this).next().slideUp();
    }
  });

  $('#header .m_gnb_wrap .btn_close').on('click', function () {
    $('#header .m_gnb_wrap').removeClass('on');
  });

  // 메인 슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    effect: 'fade',
    speed: 800,
    autoplay: {
      delay: 3000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // face슬라이더
  var faceSlider = new Swiper('.face_slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      // 1200이하
      1200: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
      // 1000이하
      1000: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // 767이하
      767: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });

  // lip슬라이더
  var lipsSlider = new Swiper('.lips_slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 80,
      },
      1000: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  //  recommend슬라이더
  var recommendSlider = new Swiper('.recommend_slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: {
      delay: 1500,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  // campaign슬라이더
  var campaignSlider = new Swiper('.campaign_slider', {
    slidesPerView: 'auto',
    spaceBetween: 140,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });
});
