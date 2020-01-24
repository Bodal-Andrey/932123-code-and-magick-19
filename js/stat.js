'use strict';
// Окно гистограммы результатов победителей.
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  var renderBar = function (name) {
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 50%, 100%)';
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (TEXT_WIDTH + BAR_GAP) * i, (CLOUD_Y + CLOUD_HEIGHT) - GAP * 4, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  };

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (TEXT_WIDTH + BAR_GAP) * i, (CLOUD_Y + CLOUD_HEIGHT) - GAP * 3);
    renderBar(names[i]);
  }

  for (var j = 0; j < times.length; j++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[j]), CLOUD_X + BAR_GAP + (TEXT_WIDTH + BAR_GAP) * j, (CLOUD_Y + CLOUD_HEIGHT) - (BAR_HEIGHT * times[j]) / maxTime - GAP * 6);
  }
};
