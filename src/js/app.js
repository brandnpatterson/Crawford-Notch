/**
 *  Dropdown-menu
 */

import $ from 'jquery';

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
    this.$modal.on('click', this.toggleDropBtn.bind(this));
    this.$window.scroll(this.toggleNavbar.bind(this));
  },
  toggleDropBtn () {
    this.$dropBtn
    .toggleClass('drop-btn-x')
    .toggleClass('drop-btn-hamburger');
    this.$modal.toggleClass('visible');
  },
  toggleNavbar () {
    if(this.$document.scrollTop() > 10 && this.$window.width() > 724) {
      this.$nav.addClass('nav-desktop');
      this.$nav.removeClass('modal');

    } else if(this.$document.scrollTop() <= 5 && this.$window.width() > 724) {
      this.$nav.addClass('modal');
      this.$nav.removeClass('nav-desktop');
    }
  }
};
app.init();
