/**
 *  Shop-now
**/

import $ from 'jquery';

const shopNow = (function () {
  // CacheDOM
  const $document = $(document);
  const $shopNow  = $('.shop-now li a');
  const $window   = $(window);

  // Initial state
  $shopNow.hide();

  function toggleShop () {
    if($document.scrollTop() > 30) {
      $shopNow.fadeIn()
      .addClass('slide-in-shop-now')
      .removeClass('slide-out-shop-now');
    } else if($document.scrollTop() === 0) {
      $shopNow.fadeOut()
      .addClass('slide-out-shop-now')
      .removeClass('slide-in-shop-now');
    }
  }

  // Events
  $window.scroll(toggleShop);
}());
