/**
 *  Preload spinner
**/

function onReady (callback) {
  const intervalID = window.setInterval(checkReady, 1250);
  function checkReady() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}
function show (id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}
onReady(function () {
  show('app', true);
  show('spinner', false);
});
