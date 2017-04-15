/**
 *  Preload spinner
**/

function onReady(callback) {
  const intervalID = window.setInterval(checkReady, 1000);
  function checkReady() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}
// If you change the id of either 'app' or 'spinner',
// you must change the string value in the function call
onReady(function () {
  show('app', true);
});
