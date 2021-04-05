/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.rect(20, 40, 30, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * .45, false);
ctx.fillStyle = "green"; // ctx.strokeStyle = 'green';

ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 4;
var dy = -10;
var stepStart;
var runGame = true;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var dxPaddle = 7;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];

for (var i = 0; i < brickRowCount; i++) {
  bricks[i] = [];

  for (var j = 0; j < brickColumnCount; j++) {
    bricks[i][j] = {
      x: 0,
      y: 0
    };
  }
}

var step = function step(timestamp) {
  if (!stepStart) {
    stepStart = timestamp;
  }

  var t = timestamp - stepStart;

  if (t < 500000) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(t, x, y);
    reflectEntities(x, y, [ballRadius, ballRadius]);
    x += dx;
    y += dy;
    if (runGame) window.requestAnimationFrame(step);
    if (rightPressed && paddleX + dxPaddle < canvas.width - paddleWidth) paddleX += dxPaddle;else if (leftPressed && paddleX - dxPaddle > 0) paddleX -= dxPaddle;
    drawPaddle();
    drawBricks();
  }
};

var drawBall = function drawBall(t, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
};

var drawPaddle = function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
};

var drawBricks = function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
      bricks[c][r].x = brickX;
      bricks[c][r].y = brickY;
      ctx.beginPath();
      ctx.rect(brickX, brickY, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
};

var reflectEntities = function reflectEntities(x, y, entityDim) {
  var ex = entityDim[0] / 2;
  var ey = entityDim[1] / 2;
  if (y < 0 + ey) dy = -dy;else if (y > canvas.height - ey) {
    y = 20;
    alert("GAME OVER");
    document.location.reload(); // window.cancelAnimationFrame(frame);

    runGame = false;
  }
  if (x < 0 + ex || x > canvas.width - ex) dx = -dx;
};

var handleKeyDown = function handleKeyDown(e) {
  if (e.key == 'Right' || e.key == 'ArrowRight') {
    rightPressed = true;
  }

  if (e.key === 'Left' || e.key === 'ArrowLeft') leftPressed = true;
};

var handleKeyUp = function handleKeyUp(e) {
  if (e.key == 'Right' || e.key == 'ArrowRight') {
    rightPressed = false;
  }

  if (e.key === 'Left' || e.key === 'ArrowLeft') leftPressed = false;
};

document.addEventListener('keydown', handleKeyDown, false);
document.addEventListener('keyup', handleKeyUp, false);
var frame = window.requestAnimationFrame(step);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJlZ2luUGF0aCIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiZHgiLCJkeSIsInN0ZXBTdGFydCIsInJ1bkdhbWUiLCJiYWxsUmFkaXVzIiwicGFkZGxlSGVpZ2h0IiwicGFkZGxlV2lkdGgiLCJwYWRkbGVYIiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJkeFBhZGRsZSIsImJyaWNrUm93Q291bnQiLCJicmlja0NvbHVtbkNvdW50IiwiYnJpY2tXaWR0aCIsImJyaWNrSGVpZ2h0IiwiYnJpY2tQYWRkaW5nIiwiYnJpY2tPZmZzZXRUb3AiLCJicmlja09mZnNldExlZnQiLCJicmlja3MiLCJpIiwiaiIsInN0ZXAiLCJ0aW1lc3RhbXAiLCJ0IiwiY2xlYXJSZWN0IiwiZHJhd0JhbGwiLCJyZWZsZWN0RW50aXRpZXMiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3UGFkZGxlIiwiZHJhd0JyaWNrcyIsImMiLCJyIiwiYnJpY2tYIiwiYnJpY2tZIiwiZW50aXR5RGltIiwiZXgiLCJleSIsImFsZXJ0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsImhhbmRsZUtleVVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZyYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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RUFBRSxHQUFHLENBQUNBLEVBQU47QUFDN0MsQ0FiRDs7QUFnQkEsSUFBTXlDLGFBQWEsR0FBSSxTQUFqQkEsYUFBaUIsQ0FBQ0MsQ0FBRCxFQUFLO0FBQzFCLE1BQUlBLENBQUMsQ0FBQ0MsR0FBRixJQUFTLE9BQVQsSUFBb0JELENBQUMsQ0FBQ0MsR0FBRixJQUFTLFlBQWpDLEVBQThDO0FBQzVDbkMsZ0JBQVksR0FBRSxJQUFkO0FBQ0Q7O0FBQ0QsTUFBSWtDLENBQUMsQ0FBQ0MsR0FBRixLQUFTLE1BQVQsSUFBbUJELENBQUMsQ0FBQ0MsR0FBRixLQUFVLFdBQWpDLEVBQThDbEMsV0FBVyxHQUFHLElBQWQ7QUFDL0MsQ0FMRDs7QUFPQSxJQUFNbUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0YsQ0FBRCxFQUFLO0FBQ3ZCLE1BQUlBLENBQUMsQ0FBQ0MsR0FBRixJQUFTLE9BQVQsSUFBb0JELENBQUMsQ0FBQ0MsR0FBRixJQUFTLFlBQWpDLEVBQThDO0FBQzVDbkMsZ0JBQVksR0FBRSxLQUFkO0FBQ0Q7O0FBQ0QsTUFBSWtDLENBQUMsQ0FBQ0MsR0FBRixLQUFTLE1BQVQsSUFBbUJELENBQUMsQ0FBQ0MsR0FBRixLQUFVLFdBQWpDLEVBQThDbEMsV0FBVyxHQUFHLEtBQWQ7QUFDL0MsQ0FMRDs7QUFXQTNCLFFBQVEsQ0FBQytELGdCQUFULENBQTBCLFNBQTFCLEVBQXFDSixhQUFyQyxFQUFvRCxLQUFwRDtBQUNBM0QsUUFBUSxDQUFDK0QsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNELFdBQW5DLEVBQWdELEtBQWhEO0FBRUEsSUFBSUUsS0FBSyxHQUFHbkIsTUFBTSxDQUFDQyxxQkFBUCxDQUE2QlAsSUFBN0IsQ0FBWixDOzs7Ozs7Ozs7Ozs7QUM1S0E7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDYW52YXMnKTtcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXG5jdHguYmVnaW5QYXRoKCk7XG5jdHgucmVjdCgyMCwgNDAsIDMwLCA1MCk7XG5jdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCI7XG5jdHguZmlsbCgpO1xuY3R4LmNsb3NlUGF0aCgpO1xuXG5cbmN0eC5iZWdpblBhdGgoKTtcbmN0eC5hcmMoMjQwLCAxNjAsIDIwLCAwLCBNYXRoLlBJKi40NSwgZmFsc2UpO1xuY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbi8vIGN0eC5zdHJva2VTdHlsZSA9ICdncmVlbic7XG5jdHguZmlsbCgpO1xuY3R4LmNsb3NlUGF0aCgpO1xuXG5cbmN0eC5iZWdpblBhdGgoKTtcbmN0eC5yZWN0KDE2MCwgMTAsIDEwMCwgNDApO1xuY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsIDAsIDI1NSwgMC41KVwiO1xuY3R4LnN0cm9rZSgpO1xuY3R4LmNsb3NlUGF0aCgpO1xuXG5cblxuXG5sZXQgeCA9IGNhbnZhcy53aWR0aC8yO1xubGV0IHkgPSBjYW52YXMuaGVpZ2h0IC0gMzA7XG5sZXQgZHggPSA0O1xubGV0IGR5ID0gLTEwO1xubGV0ICBzdGVwU3RhcnQ7XG5cbmxldCBydW5HYW1lID0gdHJ1ZTtcblxuXG5sZXQgYmFsbFJhZGl1cyA9IDEwO1xuXG5cbmxldCBwYWRkbGVIZWlnaHQgPSAxMDtcbmxldCBwYWRkbGVXaWR0aCA9IDc1O1xubGV0IHBhZGRsZVg9IChjYW52YXMud2lkdGggLSBwYWRkbGVXaWR0aCkvMjtcbmxldCByaWdodFByZXNzZWQgPSBmYWxzZTtcbmxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xubGV0ICBkeFBhZGRsZSA9IDc7XG5cblxuXG5cbmxldCBicmlja1Jvd0NvdW50ID0zO1xubGV0IGJyaWNrQ29sdW1uQ291bnQgPSA1O1xubGV0IGJyaWNrV2lkdGggPSA3NTtcbmxldCBicmlja0hlaWdodCA9IDIwO1xubGV0IGJyaWNrUGFkZGluZyA9IDEwO1xubGV0IGJyaWNrT2Zmc2V0VG9wID0gMzA7XG5sZXQgYnJpY2tPZmZzZXRMZWZ0ID0gMzA7XG5cbmxldCBicmlja3MgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpPCBicmlja1Jvd0NvdW50OyBpKyspe1xuICBicmlja3NbaV0gPSBbXTtcbiAgZm9yIChsZXQgaiA9IDA7IGo8IGJyaWNrQ29sdW1uQ291bnQ7IGorKyl7XG4gICAgYnJpY2tzW2ldW2pdID0ge3g6MCx5OjB9O1xuICB9XG59XG5cblxuXG5cbmNvbnN0IHN0ZXAgPSAodGltZXN0YW1wKT0+e1xuICBpZiAoIXN0ZXBTdGFydCl7XG4gICAgc3RlcFN0YXJ0ID0gdGltZXN0YW1wO1xuICB9XG4gIGNvbnN0IHQgPSB0aW1lc3RhbXAgLSBzdGVwU3RhcnQ7XG4gIFxuICBpZiAodCA8IDUwMDAwMCl7IFxuICAgIGN0eC5jbGVhclJlY3QoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KTtcbiAgICBkcmF3QmFsbCh0LHgseSk7XG4gICAgcmVmbGVjdEVudGl0aWVzKHgseSxbYmFsbFJhZGl1cyxiYWxsUmFkaXVzXSk7XG4gICAgeCs9ZHg7XG4gICAgeSs9ZHk7XG4gICAgaWYgKHJ1bkdhbWUpIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cblxuICAgIGlmKHJpZ2h0UHJlc3NlZCAmJiBwYWRkbGVYICsgZHhQYWRkbGU8IGNhbnZhcy53aWR0aC1wYWRkbGVXaWR0aCkgcGFkZGxlWCArPSBkeFBhZGRsZTtcbiAgICBlbHNlIGlmIChsZWZ0UHJlc3NlZCAmJiBwYWRkbGVYLSBkeFBhZGRsZSA+IDApIHBhZGRsZVgtPWR4UGFkZGxlO1xuICAgIGRyYXdQYWRkbGUoKTtcbiAgICBkcmF3QnJpY2tzKCk7XG5cbiAgfVxuXG59XG5cblxuXG5cblxuXG5cblxuY29uc3QgZHJhd0JhbGwgPSAodCx4LHkpPT57XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyh4LHksYmFsbFJhZGl1cywwLCBNYXRoLlBJKjIpO1xuICBjdHguZmlsbFN0eWxlICA9ICcjMDA5NUREJztcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xufVxuXG5cbmNvbnN0IGRyYXdQYWRkbGUgPSAoKT0+e1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5yZWN0KHBhZGRsZVgsIGNhbnZhcy5oZWlnaHQgLSBwYWRkbGVIZWlnaHQsIHBhZGRsZVdpZHRoLCBwYWRkbGVIZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCJcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xufVxuXG5jb25zdCBkcmF3QnJpY2tzID0gKCk9PntcbiAgZm9yIChsZXQgYyA9IDA7IGM8IGJyaWNrQ29sdW1uQ291bnQ7IGMrKyl7XG4gICAgZm9yIChsZXQgciA9MDsgcjwgYnJpY2tSb3dDb3VudDsgcisrKXtcbiAgICAgIHZhciBicmlja1ggPSAoYyooYnJpY2tXaWR0aCticmlja1BhZGRpbmcpKSticmlja09mZnNldExlZnQ7XG4gICAgICB2YXIgYnJpY2tZID0gKHIqKGJyaWNrSGVpZ2h0K2JyaWNrUGFkZGluZykpK2JyaWNrT2Zmc2V0VG9wO1xuICAgICAgYnJpY2tzW2NdW3JdLnggPSBicmlja1g7XG4gICAgICBicmlja3NbY11bcl0ueSA9IGJyaWNrWTtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5yZWN0KGJyaWNrWCwgYnJpY2tZLCBicmlja1dpZHRoLCBicmlja0hlaWdodCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgICBjdHguZmlsbCgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZWZsZWN0RW50aXRpZXMgPSAoeCx5LGVudGl0eURpbSk9PntcbiAgbGV0IGV4ID0gZW50aXR5RGltWzBdLzI7XG4gIGxldCBleT0gZW50aXR5RGltWzFdLzI7XG4gIGlmICggKHkgPCAwICsgZXkpICkgICAgZHkgPSAtZHk7XG4gIGVsc2UgaWYgKHkgPiBjYW52YXMuaGVpZ2h0IC0gZXkpIHtcbiAgICB5ID0gMjA7XG4gICAgYWxlcnQoXCJHQU1FIE9WRVJcIik7XG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgLy8gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lKTtcbiAgICBydW5HYW1lID0gZmFsc2U7XG5cbiAgfVxuICBpZiAoICh4PDAgKyBleCkgIHx8ICh4PmNhbnZhcy53aWR0aCAtIGV4KSApIGR4ID0gLWR4O1xufVxuXG5cbmNvbnN0IGhhbmRsZUtleURvd24gID0gKGUpPT57XG4gIGlmIChlLmtleSA9PSAnUmlnaHQnIHx8IGUua2V5ID09ICdBcnJvd1JpZ2h0Jyl7XG4gICAgcmlnaHRQcmVzc2VkID10cnVlO1xuICB9XG4gIGlmIChlLmtleSA9PT0nTGVmdCcgfHwgZS5rZXkgPT09ICdBcnJvd0xlZnQnKSBsZWZ0UHJlc3NlZCA9IHRydWU7XG59XG5cbmNvbnN0IGhhbmRsZUtleVVwID0gKGUpPT57XG4gIGlmIChlLmtleSA9PSAnUmlnaHQnIHx8IGUua2V5ID09ICdBcnJvd1JpZ2h0Jyl7XG4gICAgcmlnaHRQcmVzc2VkID1mYWxzZTtcbiAgfVxuICBpZiAoZS5rZXkgPT09J0xlZnQnIHx8IGUua2V5ID09PSAnQXJyb3dMZWZ0JykgbGVmdFByZXNzZWQgPSBmYWxzZTtcbn1cblxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93biwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVLZXlVcCwgZmFsc2UpO1xuXG5sZXQgZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==