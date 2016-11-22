'use strict';

window.onload = function() {

  var btn = document.getElementById('button');

  btn.addEventListener('click', function() {
    chrome.extension.sendRequest({
      type: add}, function(response) {
      if (response.success) {
        window.close();
      } else {
        console.log('failed');
      }
    });
  })
}
