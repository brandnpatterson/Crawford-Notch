/**
 *  Navbar
**/

import $ from 'jquery';

const navbar = (function () {
  // CacheDOM
  const $document     = $(document);
  const $defaultState = $('.slide');
  const $navbar       = $('.navbar');
  const $window       = $(window);

  // Initial state
  $navbar.hide();

  function toggleNavbar () {
    if($document.scrollTop() > 10) {
      $navbar.addClass('shrink-navbar').fadeIn();
      $navbar.removeClass('grow-navbar');
      $defaultState.addClass('shrink-slide');
      $defaultState.removeClass('grow-slide');

    } else if($document.scrollTop() <= 5) {
      $navbar.addClass('grow-navbar').fadeOut();
      $navbar.removeClass('shrink-navbar');
      $defaultState.addClass('grow-slide');
      $defaultState.removeClass('shrink-slide');
    }
  }

  // Events
  $window.scroll(toggleNavbar);
}());
