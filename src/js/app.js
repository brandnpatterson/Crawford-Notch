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
    this.$body = $('body');
    this.$dropBtn = $('.drop-btn');
  },
  bindEvents () {
    this.$dropBtn.on('click', this.toggleDropBtn.bind(this));
  },
  toggleDropBtn () {
    this.$dropBtn.toggleClass('drop-btn-x');
  }
};
app.init();
