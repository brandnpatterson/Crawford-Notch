/**
 *  Handles Navigation
**/

import $ from 'jquery';

$(document).ready(function crawfordNotch() {
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
      this.$selectionH2 = $('.selection-h2');
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
      if (this.$document.scrollTop() > 10 && this.$window.width() > 724) {
        this.$nav
        .addClass('nav-desktop')
        .removeClass('modal');
      } else if (this.$document.scrollTop() <= 5 && this.$window.width() > 724) {
        this.$nav
        .addClass('modal')
        .removeClass('nav-desktop');
      }
      if (this.$document.scrollTop() > 250) {
        this.$aboutImg.addClass('fade-in');
      }
      if (this.$document.scrollTop() > 700) {
        this.$selectionH2.addClass('fade-in');
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
