import template from './../hbs/brews-list-template.hbs';

var request = new XMLHttpRequest();
request.open('GET', './public/brews-list.json')
request.onload = function () {
  var data = JSON.parse(request.responseText);
  renderData(data);
};

request.onerror = function () {
  console.log('Connection error');
}

request.send();

function renderData (brewsData) {
  var brewsListRender = document.querySelector('.handlebars-render');
  brewsListRender.innerHTML = template(brewsData);
}
