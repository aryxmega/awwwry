$(document).ready(function() {
  'use strict';

  var headerOverlay = $('.header__overlay'),
    menuList = $('.main-nav__box'),
    menuOpenIcon = $('.main-nav__open'),
    menuCloseIcon = $('.main-nav__close');


  /* =======================
  // Menu and Navigation
  ======================= */
  menuOpenIcon.click(function() {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  headerOverlay.click(function () {
    menuClose();
    searchClose();
  });

  function menuOpen() {
    menuList.addClass('visible');
    headerOverlay.addClass('visible');
  }

  function menuClose() {
    menuList.removeClass('visible');
    headerOverlay.removeClass('visible');
  }


  /* ================================
  // Progress Scroll
  ================================ */
  const progress_line = document.querySelector('.progress_bar');

  function progress() {
      const window_height    = window.innerHeight;
      const page_height      = document.body.clientHeight;
      const scrolled        = window.scrollY;
      const scroll_percentage = (scrolled / (page_height - window_height)) * 100;

      progress_line.style.width = `${scroll_percentage}%`;
  }

  window.addEventListener('scroll', debounce(progress));

  function debounce(func, wait = 15, immediate) {
      var timeout;

      return function() {
          var context = this, args = arguments;
          var later = function() {
              timeout = null;
              
              if (!immediate) func.apply(context, args);
          };

          var callNow = immediate && !timeout;

          clearTimeout(timeout);
          
          timeout = setTimeout(later, wait);
          
          if (callNow) func.apply(context, args);
      };
  }


  /* ================================
  // AOS - Animate On Scroll Library
  ================================ */
  AOS.init();


  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]']
  });


});
