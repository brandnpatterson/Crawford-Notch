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
      this.$document = $(document);
      this.$dropBtn = $('.drop-btn');
      this.$modal = $('.modal');
      this.$nav = $('nav');
      this.$window = $(window);
    },
    bindEvents () {
      this.$dropBtn.on('click', this.toggleDropBtn.bind(this));
      this.$nav.on('click', this.toggleDropBtn.bind(this));
      this.$window.scroll(this.toggleNavbar.bind(this));
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
    toggleNavbar () {
      if (this.$document.scrollTop() > 10 && this.$window.width() > 724) {
        this.$nav
        .addClass('nav-desktop')
        .removeClass('modal');
      } else if (this.$document.scrollTop() <= 5 && this.$window.width() > 724) {
        this.$nav
        .addClass('modal')
        .removeClass('nav-desktop');
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
