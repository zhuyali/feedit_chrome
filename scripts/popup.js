'use strict';

window.onload = function() {

  var btn = document.getElementById('button');

  btn.addEventListener('click', function() {
    chrome.runtime.sendMessage({
      type: 'add'
    }, function(response) {
      if (response.success) {
        window.close();
      } else {
        alert('failed');
      }
    });
  });
}
