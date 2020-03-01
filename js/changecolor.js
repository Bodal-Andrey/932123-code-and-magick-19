'use strict';

// Изменение цвета мантии, глаз и файербола
(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var changeColor = document.querySelector('.setup-wizard');
  var changeCoatColor = changeColor.querySelector('.wizard-coat');
  var changeEyesColor = changeColor.querySelector('.wizard-eyes');
  var changeFireballColor = document.querySelector('.setup-fireball-wrap');
  var wizards = [];
  var coatColor;
  var eyesColor;

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  // var updateWizards = function () {
  //   var sameCoatAndEyesWizards = wizards.filter(function (it) {
  //     return it.colorCoat === coatColor && it.colorEyes === eyesColor;
  //   });

  //   var sameCoatWizards = wizards.filter(function (it) {
  //     return it.colorCoat === coatColor;
  //   });
  //   var sameEyesWizards = wizards.filter(function (it) {
  //     return it.colorEyes === eyesColor;
  //   });

  //   var filteredWizards = sameCoatAndEyesWizards;
  //   filteredWizards = filteredWizards.concat(sameCoatWizards);
  //   filteredWizards = filteredWizards.concat(sameEyesWizards);
  //   filteredWizards = filteredWizards.concat(wizards);


  //   var uniqueWizards = filteredWizards.filter(function (it, i) {
  //     return filteredWizards.indexOf(it) === i;
  //   });

  //   window.render(uniqueWizards);
  // };

  // var getRandomCoat = function () {
  //   changeCoatColor.style.fill = window.random.getRandomElement(WIZARD_COATS);
  //   document.querySelector('input[name="coat-color"]').value = changeCoatColor.style.fill;
  // };

  var getRandomCoat = function () {
    var newColor = window.random.getRandomElement(WIZARD_COATS);
    this.style.fill = newColor;
    coatColor = newColor;
    updateWizards();
  };

  // var getRandomEyes = function () {
  //   changeEyesColor.style.fill = window.random.getRandomElement(WIZARD_EYES);
  //   document.querySelector('input[name="eyes-color"]').value = changeEyesColor.style.fill;
  // };

  var getRandomEyes = function () {
    var newColor = window.random.getRandomElement(WIZARD_EYES);
    this.style.fill = newColor;
    eyesColor = newColor;
    updateWizards();
  };

  var getRandomFireballs = function () {
    var randomFireballColor = window.random.getRandomElement(FIREBALL_COLORS);

    changeFireballColor.style.background = randomFireballColor;
    changeFireballColor.querySelector('input').value = randomFireballColor;
  };

  changeCoatColor.addEventListener('click', function () {
    getRandomCoat();
  });

  changeEyesColor.addEventListener('click', function () {
    getRandomEyes();
  });

  changeFireballColor.addEventListener('click', function () {
    getRandomFireballs();
  });

  window.changecolor = {
    wizards: wizards,
    updateWizards: updateWizards
  };
})();
