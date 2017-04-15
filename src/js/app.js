/**
 *  Handles Navigation
**/

import $ from 'jquery';

$(document).ready(function crawfordNotch() {
  // same var name as sass
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
      this.$modal = $('.modal');
      this.$nav = $('nav');
      this.$selection = $('#selection');
      this.$window = $(window);
    },
    bindEvents () {
      this.$dropBtn.on('click', this.toggleDropBtn.bind(this));
      this.$nav.on('click', this.toggleDropBtn.bind(this));
      this.$window.scroll(this.listenForScroll.bind(this));
      this.$window.resize(this.onResizeBrowser.bind(this));
    },
    toggleDropBtn () {
      if (this.$nav.is('.modal')) {
        this.$dropBtn
        .toggleClass('drop-btn-x')
        .toggleClass('drop-btn-hamburger');
        this.$modal.toggleClass('visible');
      }
    },
    listenForScroll () {
      if (this.$document.scrollTop() > 10 && this.$window.width() > $medium) {
        this.$nav
        .addClass('nav-desktop')
        .removeClass('modal');
      } else if (this.$document.scrollTop() <= 5 && this.$window.width() > $medium) {
        this.$nav
        .addClass('modal')
        .removeClass('nav-desktop');
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
    },
    onResizeBrowser () {
      if (this.$window.width() < 724) {
        this.$nav
        .addClass('modal')
        .removeClass('nav-desktop');
      }
    }
  };
  app.init();
});
