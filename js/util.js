'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var URL_S = 'https://js.dump.academy/code-and-magick';
  var URL_L = 'https://js.dump.academy/code-and-magick/data';
  var TIMEOUT = 10000;
  var statusCode = 200;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    URL_S: URL_S,
    URL_L: URL_L,
    timeOut: TIMEOUT,
    statusCode: statusCode
  };
})();
