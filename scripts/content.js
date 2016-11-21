'use strict';

var iconShow = function() {
  
  var base = 'http://127.0.0.1:3000/feedit/api?type=query&';
  var title = tab.title;
  var url = tab.url;
  var requestUrl = base + 'url=' + url;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", requestUrl, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var isSuccess = xhr.response.success;
    if (isSuccess) {
      chrome.extension.sendRequest({
        type: "exists"
      });
    } else {
      chrome.extension.sendRequest({
        type: "notExists"
      });
    }
  }
  xhr.send(null);
}
