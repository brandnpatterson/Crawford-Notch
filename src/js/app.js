/**
 *  Handles Navigation
**/

import $ from 'jquery';

$(document).ready(function crawfordNotch() {
  // $medium same var name as sass
  const $medium = 724;
  const app = {
    init () {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM () {
      this.$aboutImg = $('.about-img');
      this.$document = $(document);
      this.$dropBtn = $('.drop-btn');
      this.$instafeed = $('#instafeed');
      this.$nav = $('nav');
      this.$selection = $('#selection');
      this.$window = $(window);
    },
    bindEvents () {
      this.$dropBtn.on('click', this.toggleDropBtn.bind(this));
      this.$nav.on('click', this.toggleDropBtn.bind(this));
      this.$window.scroll(this.listenForScroll.bind(this));
    },
    toggleDropBtn () {
      if (this.$dropBtn.is(':visible')) {
        this.$dropBtn
        .toggleClass('drop-btn-x')
        .toggleClass('drop-btn-hamburger');
        this.$nav.toggleClass('nav-mobile-visible');
      }
    },
    listenForScroll () {
      if (this.$document.scrollTop() > 90 && this.$window.width() > $medium) {
        this.$nav.addClass('nav-desktop-scrolled');
      } else if (this.$document.scrollTop() < 90) {
        this.$nav.removeClass('nav-desktop-scrolled');
      }
      if (this.$document.scrollTop() > 230) {
        this.$aboutImg.addClass('fade-in');
      }
      if (this.$document.scrollTop() > 750) {
        this.$selection.addClass('fade-in');
      }
      if (this.$document.scrollTop() > 1700) {
        this.$instafeed.addClass('fade-in');
      }
    }
  };
  app.init();
});
