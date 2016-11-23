'use strict';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

  if (request.type === 'add') {

    var xhr = new XMLHttpRequest();
    var base = 'http://localhost:8888/feedit/api?type=add&';

    chrome.tabs.getSelected(null, function(tab){

      var url = tab.url;
      var title = tab.title;
      var requestUrl = base + 'title=' + title + '&url=' + url;

      xhr.open("GET", requestUrl, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        var isSuccess = xhr.response.success;
        if (isSuccess) {
          sendResponse({success : true});
        } else {
          sendResponse({success: false});
        }
      }
      xhr.send(null);

    });
  }
  return true;
});

