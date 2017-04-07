import Handlebars from 'handlebars'

var navTemplate = document.getElementById('nav-template').innerHTML;
var template = Handlebars.compile(navTemplate);
var navData = template({
  "navigation": [
    {
      "title": "HOME",
      "link": "#0"
     },
    {
      "title": "ABOUT",
      "link": "#0"
     },
    {
      "title": "CONTACT",
      "link": "#0"
     },
    {
      "title": "GALLERY",
      "link": "#0"
     }
  ]
});

document.querySelector('.nav-data-header').innerHTML += navData;
document.querySelector('.nav-data-drop-down').innerHTML += navData;
document.querySelector('.nav-data-footer').innerHTML += navData;
