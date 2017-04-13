/**
 *  Dropdown-menu
 */

import $ from 'jquery';

const dropdownMenu = (function () {

  // CacheDOM
  const $body    = $('body');
  const $dropBtn = $('.drop-btn');
  const $modal   = $('.modal');
  const $navbar  = $('.navbar');

  // Initial state
  $modal.hide();

  function toggleDropBtn () {
    $dropBtn.toggleClass('drop-btn-change');
    $modal.fadeToggle();

    if(!$navbar.hasClass('shrink-navbar')) {
      $navbar.fadeToggle();
    }
  }

  // Events
  $dropBtn.on('click', toggleDropBtn);
}());
