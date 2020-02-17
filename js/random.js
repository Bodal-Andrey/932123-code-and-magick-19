'use strict';

// Выбор случайного элемента
(function () {
  var getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
  };
  window.random = {
    getRandomElement: function (array) {
      return array[getRandomInt(array.length)];
    }
  };
})();
