/**
 *  Dropdown-menu
 */

import $ from 'jquery';

const dropdownMenu = (function () {

  // CacheDOM
  const $body             = $('body');
  const $dropBtn          = $('.drop-btn');
  const $dropdownMenuCont = $('.dropdown-menu-container');
  const $logo             = $('.logo');
  const $logoHeader       = $('.logo-header');
  const $navbar           = $('.navbar');

  // Initial state
  $dropdownMenuCont.hide();

  function toggleDropBtn () {
    $dropBtn.toggleClass('drop-btn-change');

    $dropdownMenuCont.fadeToggle();
    if ($logo.is(':visible')) {
      $dropdownMenuCont.css('top', '13%');
    } else if ($logoHeader.is(':visible')) {
      $dropdownMenuCont.css('top', '25%');
    }

    if(!$navbar.hasClass('shrink-navbar')) {
      $navbar.fadeToggle();
    }
  }

  // Events
  $dropBtn.on('click', toggleDropBtn);
}());
