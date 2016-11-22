'use strict';

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.type === 'add') {
      var base = 'http://127.0.0.1:3000/feedit/api?type=add&';
      var title = tab.title;
      var url = tab.url;

      var requestUrl = base + 'title=' + title + '&url=' + url;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", requestUrl, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        var isSuccess = xhr.response.success;
        if (isSuccess) {
          sendResponse('success');
        } else {
          sendResponse('failed');
        }
      }
      xhr.send(null);
    } else {
      sendResponse('failed');
    }
  }
);

