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
    this.$dropBtn = $('.drop-btn');
    this.$modal = $('.modal');
  },
  bindEvents () {
    this.$dropBtn.on('click', this.toggleDropBtn.bind(this));
  },
  toggleDropBtn () {
    this.$dropBtn
    .toggleClass('drop-btn-x')
    .toggleClass('drop-btn-hamburger');
    this.$modal.toggleClass('visible');
  }
};
app.init();
