var template = require('../../hbs/nav-template.hbs');

var request = new XMLHttpRequest();
request.open('GET', './public/json/nav.json');
request.onload = function () {
  var data = JSON.parse(request.responseText);
  renderData(data);
};

request.onerror = function () {
  console.log('Connection error.');
};

request.send();

function renderData (navData) {
  var navDataHeader = document.querySelector('.nav-data-header');
  var navDataDropDown = document.querySelector('.nav-data-drop-down');
  var navDataFooter = document.querySelector('.nav-data-footer');

  navDataHeader.innerHTML = template(navData);
  navDataDropDown.innerHTML = template(navData);
  navDataFooter.innerHTML = template(navData);
}
