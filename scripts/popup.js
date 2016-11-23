'use strict';

window.onload = function() {

  var btn = document.getElementById('button');
  var info = document.getElementById('info');

  btn.addEventListener('click', function() {
    chrome.runtime.sendMessage({
      type: 'add'
    }, function(response) {
      if (response != null) {
        if (response.success) {
          info.innerHTML = 'Success'
          window.close();
        } else {
          info.innerHTML = 'Failed';
        }
      } else {
        info.innerHTML = 'Lost Connection';
      }
    });
  });
}
