'use strict';

var action = null;

//显示已收藏，点击操作为remove
var addIcon() {
  chrome.browserAction.setIcon('../images/');
  action = 'remove';
}

//显示收藏按钮，点击操作为add
var removeIcon() {
  chrome.browserAction.setIcon('../images/');
  action = 'add';
}

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.type === 'exists') {
      removeIcon();
    } else if (requst.type === 'notExists') {
      addIcon();
    }
  })

chrome.browserAction.onClicked.addListener(function(tab) {

  var base = 'http://127.0.0.1:3000/feedit/api?';
  var title = tab.title;
  var url = tab.url;
  var type = null;

  switch(action) {
    case 'add':
      type = 'add';
      break;
    case 'remove':
      type = 'remove';
      break;
  }

  var requestUrl = base + 'type=' + type + '&title=' + title + '&url=' + url;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", requestUrl, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var isSuccess = xhr.response.success;
    if (isSuccess && type === 'add') {
      addIcon();
    } else if (isSuccess && type === 'remove') {
      removeIcon();
    } else {
      //do nothing
    }
  }
  xhr.send(null);
});
