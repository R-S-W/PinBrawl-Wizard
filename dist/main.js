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
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game_view */ "./src/scripts/game_view.js");
/* harmony import */ var _scripts_entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/entity */ "./src/scripts/entity.js");




document.addEventListener("DOMContentLoaded", function () {
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var canvas = document.getElementById('game-canvas');
  canvas.width = game.DIM_X;
  canvas.height = game.DIM_Y;
  var ctx = canvas.getContext('2d'); // let e = new Entity(canvas.width/2, canvas.height/2, 2,2, 10,10);
  // e.draw(ctx);

  var gameView = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_2__["default"](game, ctx);
  gameView.start();
  ctx.beginPath();
  ctx.rect(20, 40, 30, 50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath(); // ctx.beginPath();
  // ctx.arc(240, 160, 20, 0, Math.PI*.45, false);
  // ctx.fillStyle = "green";
  // // ctx.strokeStyle = 'green';
  // ctx.fill();
  // ctx.closePath();
  // ctx.beginPath();
  // ctx.rect(160, 10, 100, 40);
  // ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
  // ctx.stroke();
  // ctx.closePath();
  // let x = canvas.width/2;
  // let y = canvas.height - 30;
  // let dx = 10;
  // let dy = -15;
  // let  stepStart;
  // let ballRadius = 10;
  //STOP Save this into a branch this is sick!
  // const step = (timestamp)=>{
  //   if (!stepStart){
  //     stepStart = timestamp;
  //   }
  //   const t = timestamp - stepStart;
  //   if (t < 500000){ 
  //     // ctx.clearRect(0,0,canvas.width,canvas.height);
  //     drawBall(t,x,y);
  //     reflectEntities(x,y,[ballRadius,ballRadius]);
  //     x+=dx;
  //     y+=dy;
  //     window.requestAnimationFrame(step);
  //   }
  // }
  // const drawBall = (t,x,y)=>{
  //   ctx.beginPath();
  //   ctx.arc(x,y,ballRadius,0, Math.PI*2);
  //   ctx.fillStyle  = '#0095DD';
  //   ctx.fill();
  //   ctx.closePath();
  // }
  // const reflectEntities = (x,y,entityDim)=>{
  //   let ex = entityDim[0]/2;
  //   let ey= entityDim[1]/2;
  //   if ( (y < 0 + ey) || (y > canvas.height - ey) )    dy = -dy;
  //   if ( (x<0 + ex)  || (x>canvas.width - ex) ) dx = -dx;
  // }
  // window.requestAnimationFrame(step)
});

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/scripts/entity.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Ball = /*#__PURE__*/function (_Entity) {
  _inherits(Ball, _Entity);

  var _super = _createSuper(Ball);

  function Ball(x, y, vx, vy, radius, color) {
    var _this;

    _classCallCheck(this, Ball);

    _this = _super.call(this, x, y, vx, vy); // this.x = x;
    // this.y = y;
    // this.vx = vx;
    // this.vy = vy;

    _this.radius = radius;
    _this.dimX = 2 * radius;
    _this.dimY = 2 * radius;
    _this.backgroundColor = color;
    _this.gravity = 1;
    return _this;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.backgroundColor;
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: "move",
    value: function move() {
      this.vy += this.gravity;
      this.x += this.vx;
      this.y = Math.round(this.y + this.vy);
    }
  }]);

  return Ball;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Ball);

/***/ }),

/***/ "./src/scripts/circle.js":
/*!*******************************!*\
  !*** ./src/scripts/circle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ "./src/scripts/ball.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ "./src/scripts/enemy.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Circle = /*#__PURE__*/function (_shape) {
  _inherits(Circle, _shape);

  var _super = _createSuper(Circle);

  function Circle(x, y, radius) {
    var _this;

    _classCallCheck(this, Circle);

    _this.x = x;
    _this.y = y;
    _this.radius = radius;
    return _possibleConstructorReturn(_this);
  }

  _createClass(Circle, [{
    key: "isCollided",
    value: function isCollided(other) {
      if (other instanceof _ball__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        return this.distance(this.x, this.y, other.x, other.y) < this.radius + other.radius;
      } else if (other instanceof _enemy__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        // This is a simple calculation and good for small enemies and big circles.
        var verts = _enemy__WEBPACK_IMPORTED_MODULE_1__["default"].getVertices();

        for (var i = 0; i < verts.length; i++) {
          if (isInside(verts)) return true;
        }

        return false;
      }
    }
  }, {
    key: "isInside",
    value: function isInside(point) {
      return this.distance(point[0], point[1], this.x, this.y) < this.radius ? true : false;
    }
  }, {
    key: "distance",
    value: function distance(ax, ay, bx, by) {
      return Math.pow(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2), .5);
    }
  }]);

  return Circle;
}(shape);

/* harmony default export */ __webpack_exports__["default"] = (Circle);

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/scripts/entity.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Enemy = /*#__PURE__*/function (_Entity) {
  _inherits(Enemy, _Entity);

  var _super = _createSuper(Enemy);

  function Enemy() {
    _classCallCheck(this, Enemy);

    return _super.apply(this, arguments);
  }

  return Enemy;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./src/scripts/entity.js":
/*!*******************************!*\
  !*** ./src/scripts/entity.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Entity = /*#__PURE__*/function () {
  function Entity() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var vx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var vy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var dimX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var dimY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var color = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '#11D6CD';

    _classCallCheck(this, Entity);

    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.dimX = dimX;
    this.dimY = dimY;
    this.backgroundColor = color;
  }

  _createClass(Entity, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.beginPath(); // ctx.rect(this.pos.x, this.pos.y, 10,10);

      ctx.rect(this.x - this.dimX / 2, this.y - this.dimY / 2, this.dimX, this.dimY);
      ctx.fillStyle = this.backgroundColor;
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: "move",
    value: function move() {
      this.x += this.vx;
      this.y += this.vy;
    }
  }, {
    key: "isCollidedWith",
    value: function isCollidedWith(otherEntity) {
      if (this.isInside([otherEntity.x - otherEntity.dimX / 2, otherEntity.y - otherEntity.dimY / 2]) || this.isInside([otherEntity.x + otherEntity.dimX / 2, otherEntity.y - otherEntity.dimY / 2]) || this.isInside([otherEntity.x - otherEntity.dimX / 2, otherEntity.y + otherEntity.dimY / 2]) || this.isInside([otherEntity.x + otherEntity.dimX / 2, otherEntity.y + otherEntity.dimY / 2])) {
        return true;
      }

      return false;
    }
  }, {
    key: "isInside",
    value: function isInside(point) {
      if (this.x - this.dimX / 2 <= point[0] && point[0] <= this.x + this.dimX / 2 && this.y - this.dimY / 2 <= point[1] && point[1] <= this.y + this.dimY / 2) {
        return true;
      }

      return false;
    }
  }, {
    key: "getVertices",
    value: function getVertices() {
      return [[this.x - this.dimX / 2, this.y - this.dimY / 2], [this.x + this.dimX / 2, this.y + this.dimY / 2], [this.x - this.dimX / 2, this.y + this.dimY / 2], [this.x + this.dimX / 2, this.y - this.dimY / 2]];
    }
  }]);

  return Entity;
}();

/* harmony default export */ __webpack_exports__["default"] = (Entity);

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rectangle */ "./src/scripts/rectangle.js");
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle */ "./src/scripts/circle.js");
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ball */ "./src/scripts/ball.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemy */ "./src/scripts/enemy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.DIM_X = 700;
    this.DIM_Y = 680;
    this.NUM_MAX_ENEMIES = 20;
    this.entities = [];
    this.timeVal;
    this.setupField();
  }

  _createClass(Game, [{
    key: "setupField",
    value: function setupField() {
      this.addEnemy();
      this.addEnemy();
      this.addEnemy();
      this.addEnemy();
      this.addBall();
    }
  }, {
    key: "addEnemy",
    value: function addEnemy() {
      var angle = -Math.PI * Math.random();
      var vMag = 5;
      var vx = vMag * Math.cos(angle);
      var vy = -vMag * Math.sin(angle);
      var enemy = new _enemy__WEBPACK_IMPORTED_MODULE_3__["default"](Math.round(20 + (this.DIM_X - 25) * Math.random()), 20 / 2, vx, vy, 20, 20);
      this.entities.push(enemy);
    }
  }, {
    key: "addBall",
    value: function addBall() {
      var angle = Math.PI * 2 * Math.random();
      var vMag = 6;
      var vx = vMag * Math.cos(angle);
      var vy = vMag * Math.sin(angle);
      var x = this.DIM_X / 2;
      var y = this.DIM_Y / 2;
      var ball = new _ball__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, vx, vy, 10, '#0095DD');
      this.entities.push(ball);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

      for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw(ctx);
      }
    }
  }, {
    key: "moveEntities",
    value: function moveEntities() {
      this.entities.forEach(function (entity) {
        entity.move();
      });
    }
  }, {
    key: "reflectEntitiesOffWalls",
    value: function reflectEntitiesOffWalls() {
      var _this = this;

      this.entities.forEach(function (e) {
        if (e.y - e.dimY / 2 < 0) {
          e.y = e.dimY / 2;
          e.vy = -e.vy;
        } else if (e.y + e.dimY / 2 > _this.DIM_Y) {
          e.y = _this.DIM_Y - e.dimY / 2;
          e.vy *= -1;
        }

        if (e.x - e.dimX / 2 < 0) {
          e.x = e.dimX / 2;
          e.vx = -e.vx;
        } else if (e.x + e.dimX / 2 > _this.DIM_X) {
          e.vx = -e.vx;
          e.x = _this.DIM_X - e.dimX / 2;
        }
      });
    }
  }, {
    key: "checkCollisions",
    value: function checkCollisions() {
      var deleteIndex = -1;

      for (var i = 1; i < this.entities.length; i++) {
        for (var j = 0; j < i; j++) {
          if (this.entities[i].isCollidedWith(this.entities[j])) {
            console.log('Collision');

            if (this.entities[i] instanceof _ball__WEBPACK_IMPORTED_MODULE_2__["default"]) {
              deleteIndex = j;
            } else if (this.entities[j] instanceof _ball__WEBPACK_IMPORTED_MODULE_2__["default"]) {
              deleteIndex = i;
            } else {
              var temp = this.entities[i].vx;
              this.entities[i].vx = -this.entities[j].vx;
              this.entities[j].vx = -temp;
            }
          }
        }
      }

      if (deleteIndex !== -1) this.entities.splice(deleteIndex, 1);
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameView = /*#__PURE__*/function () {
  function GameView(game, ctx) {
    _classCallCheck(this, GameView);

    this.game = game;
    this.ctx = ctx;
    this.step = this.step.bind(this);
  }

  _createClass(GameView, [{
    key: "step",
    value: function step(timestamp) {
      this.game.moveEntities();
      this.game.draw(this.ctx);
      this.game.reflectEntitiesOffWalls();
      this.game.checkCollisions();
      if (!this.timeVal) this.timeVal = timestamp;

      if (timestamp - this.timeVal > 10000) {
        this.timeVal = 0;
        this.game.addEnemy();
      }

      window.requestAnimationFrame(this.step);
    }
  }, {
    key: "start",
    value: function start() {
      window.requestAnimationFrame(this.step);
    }
  }]);

  return GameView;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./src/scripts/rectangle.js":
/*!**********************************!*\
  !*** ./src/scripts/rectangle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle */ "./src/scripts/circle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Rectangle = /*#__PURE__*/function () {
  function Rectangle(x, y, width, length) {
    var angle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, Rectangle);

    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;
    this.angle = angle;
    var bl = Math.multiply(Math.rotationMatrix(angle), [this.x - this.dimX / 2, this.y - this.dimY / 2]);
    var br = Math.multiply(Math.rotationMatrix(angle), [this.x + this.dimX / 2, this.y - this.dimY / 2]);
    var tl = Math.multiply(Math.rotationMatrix(angle), [this.x - this.dimX / 2, this.y + this.dimY / 2]);
    var tr = Math.multiply(Math.rotationMatrix(angle), [this.x + this.dimX / 2, this.y + this.dimY / 2]);
    bl = [bl[0] + this.x, bl[1] + this.y];
    br = [br[0] + this.x, br[1] + this.y];
    tl = [tl[0] + this.x, tl[1] + this.y];
    tr = [tr[0] + this.x, tr[1] + this.y];
    this.verts = [tr, tl, bl, br];
  }

  _createClass(Rectangle, [{
    key: "isCollidedWith",
    value: function isCollidedWith(other) {
      if (other instanceof Ball) {
        if (this.isInside([other.x, other.y]) || this.isInside([other.x - other.radius, other.y]) || this.isInside([other.x + other.radius, other.y]) || this.isInside([other.x, other.y + other.radius]) || this.isInside([other.x, other.y - other.radius])) {
          return true;
        }

        for (var h = 0; h < 4; h++) {
          var otherCircle = new _circle__WEBPACK_IMPORTED_MODULE_0__["default"](other.x, other.y, other.radius);
          if (otherCircle.isInside(this.verts[h])) return true;
        }

        return false;
      } else if (other instanceof Enemy) {
        var otherRectangle = new Rectangle(other.x, other.y, other.dimX, other.dimY);

        for (var i = 0; i < 4; i++) {
          if (this.isInside(otherRectangle.verts[i])) return true;
          if (otherRectangle.isInside(this.verts[i])) return true;
        }

        return false;
      }
    }
  }, {
    key: "isInside",
    value: function isInside(point) {
      point[0] -= this.x;
      point[1] -= this.y;
      point = Math.multiply(Math.rotationMatrix(-angle), point);

      if (-this.dimX / 2 <= point[0] && point[0] <= this.dimX / 2 && -this.dimY / 2 <= point[1] && point[1] <= this.dimY / 2) {
        return true;
      }

      return false;
    }
  }]);

  return Rectangle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Rectangle);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdhbWUiLCJHYW1lIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZVZpZXciLCJHYW1lVmlldyIsInN0YXJ0IiwiYmVnaW5QYXRoIiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJjbG9zZVBhdGgiLCJCYWxsIiwieCIsInkiLCJ2eCIsInZ5IiwicmFkaXVzIiwiY29sb3IiLCJkaW1YIiwiZGltWSIsImJhY2tncm91bmRDb2xvciIsImdyYXZpdHkiLCJhcmMiLCJNYXRoIiwiUEkiLCJyb3VuZCIsIkVudGl0eSIsIkNpcmNsZSIsIm90aGVyIiwiZGlzdGFuY2UiLCJFbmVteSIsInZlcnRzIiwiZ2V0VmVydGljZXMiLCJpIiwibGVuZ3RoIiwiaXNJbnNpZGUiLCJwb2ludCIsImF4IiwiYXkiLCJieCIsImJ5Iiwic2hhcGUiLCJvdGhlckVudGl0eSIsIk5VTV9NQVhfRU5FTUlFUyIsImVudGl0aWVzIiwidGltZVZhbCIsInNldHVwRmllbGQiLCJhZGRFbmVteSIsImFkZEJhbGwiLCJhbmdsZSIsInJhbmRvbSIsInZNYWciLCJjb3MiLCJzaW4iLCJlbmVteSIsInB1c2giLCJiYWxsIiwiY2xlYXJSZWN0IiwiZHJhdyIsImZvckVhY2giLCJlbnRpdHkiLCJtb3ZlIiwiZSIsImRlbGV0ZUluZGV4IiwiaiIsImlzQ29sbGlkZWRXaXRoIiwiY29uc29sZSIsImxvZyIsInRlbXAiLCJzcGxpY2UiLCJzdGVwIiwiYmluZCIsInRpbWVzdGFtcCIsIm1vdmVFbnRpdGllcyIsInJlZmxlY3RFbnRpdGllc09mZldhbGxzIiwiY2hlY2tDb2xsaXNpb25zIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiUmVjdGFuZ2xlIiwiYmwiLCJtdWx0aXBseSIsInJvdGF0aW9uTWF0cml4IiwiYnIiLCJ0bCIsInRyIiwiaCIsIm90aGVyQ2lyY2xlIiwib3RoZXJSZWN0YW5nbGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7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QUFELENBRnRCLElBR0NBLEtBQUssQ0FBQyxDQUFELENBQUwsSUFBWSxLQUFLakIsSUFBTCxHQUFVLENBSDNCLEVBRzhCO0FBQzFCLGVBQU8sSUFBUDtBQUNIOztBQUNELGFBQU8sS0FBUDtBQUNEOzs7Ozs7QUFFWTJELHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vc2NyaXB0cy9lbnRpdHknO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG5cbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIFxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XG4gIGNhbnZhcy53aWR0aCA9IGdhbWUuRElNX1g7XG4gIGNhbnZhcy5oZWlnaHQgPSBnYW1lLkRJTV9ZO1xuICBcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIC8vIGxldCBlID0gbmV3IEVudGl0eShjYW52YXMud2lkdGgvMiwgY2FudmFzLmhlaWdodC8yLCAyLDIsIDEwLDEwKTtcbiAgLy8gZS5kcmF3KGN0eCk7XG5cbiAgXG4gIGxldCBnYW1lVmlldyA9IG5ldyBHYW1lVmlldyhnYW1lLCBjdHgpO1xuICBnYW1lVmlldy5zdGFydCgpO1xuICBcbiAgXG4gIFxuICBcbiAgXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LnJlY3QoMjAsIDQwLCAzMCwgNTApO1xuICBjdHguZmlsbFN0eWxlID0gXCIjRkYwMDAwXCI7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgXG4gIFxuICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gIC8vIGN0eC5hcmMoMjQwLCAxNjAsIDIwLCAwLCBNYXRoLlBJKi40NSwgZmFsc2UpO1xuICAvLyBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiO1xuICAvLyAvLyBjdHguc3Ryb2tlU3R5bGUgPSAnZ3JlZW4nO1xuICAvLyBjdHguZmlsbCgpO1xuICAvLyBjdHguY2xvc2VQYXRoKCk7XG4gIFxuICBcbiAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAvLyBjdHgucmVjdCgxNjAsIDEwLCAxMDAsIDQwKTtcbiAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDAsIDAsIDI1NSwgMC41KVwiO1xuICAvLyBjdHguc3Ryb2tlKCk7XG4gIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgXG4gIFxuICBcbiAgXG4gIC8vIGxldCB4ID0gY2FudmFzLndpZHRoLzI7XG4gIC8vIGxldCB5ID0gY2FudmFzLmhlaWdodCAtIDMwO1xuICAvLyBsZXQgZHggPSAxMDtcbiAgLy8gbGV0IGR5ID0gLTE1O1xuICAvLyBsZXQgIHN0ZXBTdGFydDtcbiAgXG4gIFxuICAvLyBsZXQgYmFsbFJhZGl1cyA9IDEwO1xuXG5cblxuXG5cblxuXG4gIFxuICAvL1NUT1AgU2F2ZSB0aGlzIGludG8gYSBicmFuY2ggdGhpcyBpcyBzaWNrIVxuICBcbiAgLy8gY29uc3Qgc3RlcCA9ICh0aW1lc3RhbXApPT57XG4gIC8vICAgaWYgKCFzdGVwU3RhcnQpe1xuICAvLyAgICAgc3RlcFN0YXJ0ID0gdGltZXN0YW1wO1xuICAvLyAgIH1cbiAgLy8gICBjb25zdCB0ID0gdGltZXN0YW1wIC0gc3RlcFN0YXJ0O1xuICAgIFxuICAvLyAgIGlmICh0IDwgNTAwMDAwKXsgXG4gIC8vICAgICAvLyBjdHguY2xlYXJSZWN0KDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodCk7XG4gIC8vICAgICBkcmF3QmFsbCh0LHgseSk7XG4gIC8vICAgICByZWZsZWN0RW50aXRpZXMoeCx5LFtiYWxsUmFkaXVzLGJhbGxSYWRpdXNdKTtcbiAgLy8gICAgIHgrPWR4O1xuICAvLyAgICAgeSs9ZHk7XG4gIC8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAvLyAgIH1cbiAgXG4gIC8vIH1cbiAgXG4gIFxuICBcbiAgXG4gIFxuICAvLyBjb25zdCBkcmF3QmFsbCA9ICh0LHgseSk9PntcbiAgLy8gICBjdHguYmVnaW5QYXRoKCk7XG4gIC8vICAgY3R4LmFyYyh4LHksYmFsbFJhZGl1cywwLCBNYXRoLlBJKjIpO1xuICAvLyAgIGN0eC5maWxsU3R5bGUgID0gJyMwMDk1REQnO1xuICAvLyAgIGN0eC5maWxsKCk7XG4gIC8vICAgY3R4LmNsb3NlUGF0aCgpO1xuICAvLyB9XG4gIFxuICBcbiAgLy8gY29uc3QgcmVmbGVjdEVudGl0aWVzID0gKHgseSxlbnRpdHlEaW0pPT57XG4gIC8vICAgbGV0IGV4ID0gZW50aXR5RGltWzBdLzI7XG4gIC8vICAgbGV0IGV5PSBlbnRpdHlEaW1bMV0vMjtcbiAgLy8gICBpZiAoICh5IDwgMCArIGV5KSB8fCAoeSA+IGNhbnZhcy5oZWlnaHQgLSBleSkgKSAgICBkeSA9IC1keTtcbiAgLy8gICBpZiAoICh4PDAgKyBleCkgIHx8ICh4PmNhbnZhcy53aWR0aCAtIGV4KSApIGR4ID0gLWR4O1xuICAvLyB9XG4gIFxuICBcbiAgLy8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKVxuXG5cbiAgXG59KVxuIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSc7XG5cbmNsYXNzIEJhbGwgZXh0ZW5kcyBFbnRpdHkge1xuICBjb25zdHJ1Y3Rvcih4LHksdngsdnkscmFkaXVzLGNvbG9yKXtcbiAgICBzdXBlcih4LHksdngsdnkpO1xuICAgIC8vIHRoaXMueCA9IHg7XG4gICAgLy8gdGhpcy55ID0geTtcbiAgICAvLyB0aGlzLnZ4ID0gdng7XG4gICAgLy8gdGhpcy52eSA9IHZ5O1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMuZGltWCA9IDIqcmFkaXVzO1xuICAgIHRoaXMuZGltWSA9IDIqcmFkaXVzO1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgdGhpcy5ncmF2aXR5ID0gMTtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh0aGlzLngsdGhpcy55LHRoaXMucmFkaXVzLDAsIE1hdGguUEkqMik7XG4gICAgY3R4LmZpbGxTdHlsZSAgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICB0aGlzLnZ5ICs9dGhpcy5ncmF2aXR5O1xuICAgIHRoaXMueCArPSB0aGlzLnZ4O1xuICAgIHRoaXMueSA9TWF0aC5yb3VuZCh0aGlzLnkrdGhpcy52eSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJhbGw7XG5cbiIsImltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCc7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSc7XG5cblxuY2xhc3MgQ2lyY2xlIGV4dGVuZHMgc2hhcGUge1xuICBjb25zdHJ1Y3Rvcih4LHkscmFkaXVzKXtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gIH1cblxuICBpc0NvbGxpZGVkKG90aGVyKXtcbiAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBCYWxsKXtcbiAgICAgIHJldHVybiB0aGlzLmRpc3RhbmNlKHRoaXMueCx0aGlzLnksb3RoZXIueCxvdGhlci55KSA8IHRoaXMucmFkaXVzK290aGVyLnJhZGl1cyAgICBcbiAgICB9ZWxzZSBpZiAob3RoZXIgaW5zdGFuY2VvZiBFbmVteSl7XG4gICAgICAvLyBUaGlzIGlzIGEgc2ltcGxlIGNhbGN1bGF0aW9uIGFuZCBnb29kIGZvciBzbWFsbCBlbmVtaWVzIGFuZCBiaWcgY2lyY2xlcy5cbiAgICAgIGxldCB2ZXJ0cyA9IEVuZW15LmdldFZlcnRpY2VzKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaTwgdmVydHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoaXNJbnNpZGUodmVydHMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gIH1cbiAgaXNJbnNpZGUocG9pbnQpe1xuICAgIHJldHVybiAodGhpcy5kaXN0YW5jZShwb2ludFswXSwgcG9pbnRbMV0sIHRoaXMueCx0aGlzLnkpIDwgdGhpcy5yYWRpdXMpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgZGlzdGFuY2UoYXgsIGF5LGJ4LGJ5KXtcbiAgICByZXR1cm4gKChheC1ieCkqKjIrKGF5LWJ5KSoqMikqKi41XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlOyIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9lbnRpdHknXG5cbmNsYXNzIEVuZW15IGV4dGVuZHMgRW50aXR5e1xuICAvLyBjb25zdHJ1Y3Rvcih4LHksdngsdnksZGltWCxkaW1ZLGNvbG9yKXtcbiAgLy8gICBzdXBlcigpO1xuXG4gIC8vIH1cblxuICAvLyBkcmF3KGN0eCl7XG4gIC8vICAgc3VwZXIoKTtcbiAgLy8gfVxufVxuZXhwb3J0IGRlZmF1bHQgRW5lbXk7IiwiXG5jbGFzcyBFbnRpdHkge1xuICBjb25zdHJ1Y3Rvcih4PTAseT0wLHZ4PTAsdnk9MCwgZGltWD0wLCBkaW1ZPTAsIGNvbG9yPScjMTFENkNEJyl7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudnggPSB2eDtcbiAgICB0aGlzLnZ5ID0gdnk7XG4gICAgdGhpcy5kaW1YID0gZGltWDtcbiAgICB0aGlzLmRpbVkgPSBkaW1ZO1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG5cbiAgfVxuXG5cbiAgZHJhdyhjdHgpe1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgucmVjdCh0aGlzLnBvcy54LCB0aGlzLnBvcy55LCAxMCwxMCk7XG4gICAgY3R4LnJlY3QodGhpcy54IC0gdGhpcy5kaW1YLzIsIHRoaXMueSAtIHRoaXMuZGltWS8yLHRoaXMuZGltWCwgdGhpcy5kaW1ZICk7XG4gICAgY3R4LmZpbGxTdHlsZSA9dGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgfVxuXG4gIG1vdmUoKXtcbiAgICB0aGlzLnggKz0gdGhpcy52eDtcbiAgICB0aGlzLnkgKz0gdGhpcy52eTtcbiAgfVxuXG4gIGlzQ29sbGlkZWRXaXRoKG90aGVyRW50aXR5KXtcbiAgICBpZiAoIHRoaXMuaXNJbnNpZGUoW290aGVyRW50aXR5LnggLSBvdGhlckVudGl0eS5kaW1YLzIsIG90aGVyRW50aXR5LnkgLSBvdGhlckVudGl0eS5kaW1ZLzJdKVxuICAgICAgfHwgdGhpcy5pc0luc2lkZShbb3RoZXJFbnRpdHkueCArIG90aGVyRW50aXR5LmRpbVgvMiwgb3RoZXJFbnRpdHkueSAtIG90aGVyRW50aXR5LmRpbVkvMl0pXG4gICAgICB8fCB0aGlzLmlzSW5zaWRlKFtvdGhlckVudGl0eS54IC0gb3RoZXJFbnRpdHkuZGltWC8yLCBvdGhlckVudGl0eS55ICsgb3RoZXJFbnRpdHkuZGltWS8yXSlcbiAgICAgIHx8IHRoaXMuaXNJbnNpZGUoW290aGVyRW50aXR5LnggKyBvdGhlckVudGl0eS5kaW1YLzIsIG90aGVyRW50aXR5LnkgKyBvdGhlckVudGl0eS5kaW1ZLzJdKVxuICAgICl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNJbnNpZGUocG9pbnQpe1xuICAgIGlmICh0aGlzLngtdGhpcy5kaW1YLzIgPD0gcG9pbnRbMF0gXG4gICAgICAmJiBwb2ludFswXSA8PSB0aGlzLngrdGhpcy5kaW1YLzJcbiAgICAgICYmIHRoaXMueS10aGlzLmRpbVkvMiA8PSBwb2ludFsxXVxuICAgICAgJiYgcG9pbnRbMV0gPD0gdGhpcy55K3RoaXMuZGltWS8yICl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpe1xuICAgIHJldHVybiBbXG4gICAgICBbdGhpcy54LXRoaXMuZGltWC8yLHRoaXMueS10aGlzLmRpbVkvMl0sXG4gICAgICBbdGhpcy54K3RoaXMuZGltWC8yLHRoaXMueSt0aGlzLmRpbVkvMl0sXG4gICAgICBbdGhpcy54LXRoaXMuZGltWC8yLHRoaXMueSt0aGlzLmRpbVkvMl0sXG4gICAgICBbdGhpcy54K3RoaXMuZGltWC8yLHRoaXMueS10aGlzLmRpbVkvMl1cbiAgICBdXG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eTsiLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vcmVjdGFuZ2xlJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xuaW1wb3J0IEJhbGwgZnJvbSAnLi9iYWxsJztcbmltcG9ydCBFbmVteSBmcm9tICcuL2VuZW15JztcblxuXG5jbGFzcyBHYW1lIHtcbiAgXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5ESU1fWCA9IDcwMDtcbiAgICB0aGlzLkRJTV9ZID0gNjgwO1xuICAgIHRoaXMuTlVNX01BWF9FTkVNSUVTID0gMjA7XG4gICAgdGhpcy5lbnRpdGllcyA9IFtdO1xuICAgIFxuICAgIHRoaXMudGltZVZhbDtcbiAgICB0aGlzLnNldHVwRmllbGQoKTtcblxuICAgIFxuICB9XG5cbiAgc2V0dXBGaWVsZCgpe1xuXG5cbiAgICB0aGlzLmFkZEVuZW15KCk7XG4gICAgdGhpcy5hZGRFbmVteSgpO1xuICAgIHRoaXMuYWRkRW5lbXkoKTtcbiAgICB0aGlzLmFkZEVuZW15KCk7XG4gICAgdGhpcy5hZGRCYWxsKCk7XG5cbiAgfVxuXG4gIGFkZEVuZW15KCl7XG4gICAgbGV0IGFuZ2xlID0gLU1hdGguUEkqTWF0aC5yYW5kb20oKTtcbiAgICBsZXQgdk1hZyA9IDU7XG4gICAgbGV0IHZ4ID0gdk1hZypNYXRoLmNvcyhhbmdsZSk7XG4gICAgbGV0IHZ5ID0gLXZNYWcqTWF0aC5zaW4oYW5nbGUpO1xuICAgIGxldCBlbmVteSA9IG5ldyBFbmVteShNYXRoLnJvdW5kKDIwKyAodGhpcy5ESU1fWC0yNSkqTWF0aC5yYW5kb20oKSksMjAvMix2eCx2eSwyMCwyMCk7XG4gICAgdGhpcy5lbnRpdGllcy5wdXNoKGVuZW15KTtcbiAgfVxuXG4gIGFkZEJhbGwoKXtcbiAgICBsZXQgYW5nbGUgPSBNYXRoLlBJKjIqTWF0aC5yYW5kb20oKTtcbiAgICBsZXQgdk1hZyA9IDY7XG4gICAgbGV0IHZ4ID0gdk1hZypNYXRoLmNvcyhhbmdsZSk7XG4gICAgbGV0IHZ5ID0gdk1hZypNYXRoLnNpbihhbmdsZSk7XG4gICAgbGV0IHggPSB0aGlzLkRJTV9YLzI7XG4gICAgbGV0IHkgPSB0aGlzLkRJTV9ZLzI7XG4gICAgbGV0IGJhbGwgPSBuZXcgQmFsbCh4LHksdngsdnksMTAsJyMwMDk1REQnKTtcbiAgICB0aGlzLmVudGl0aWVzLnB1c2goYmFsbCk7XG4gIH1cblxuXG4gIGRyYXcoY3R4KXtcbiAgICBjdHguY2xlYXJSZWN0KDAsMCx0aGlzLkRJTV9YLCB0aGlzLkRJTV9ZKTtcbiAgICBmb3IgKGxldCBpPSAwIDsgaTwgdGhpcy5lbnRpdGllcy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmVudGl0aWVzW2ldLmRyYXcoY3R4KTtcbiAgICB9XG4gIH1cblxuICBtb3ZlRW50aXRpZXMoKXtcbiAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSk9PntlbnRpdHkubW92ZSgpfSlcbiAgfVxuXG4gIHJlZmxlY3RFbnRpdGllc09mZldhbGxzKCl7XG4gICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKChlKT0+e1xuICAgICAgaWYgKCBlLnkgLSBlLmRpbVkvMiA8IDAgKXtcbiAgICAgICAgZS55ID0gZS5kaW1ZLzI7XG4gICAgICAgIGUudnkgPSAtZS52eTtcbiAgICAgIH1lbHNlIGlmIChlLnkgKyBlLmRpbVkvMiA+IHRoaXMuRElNX1kpe1xuICAgICAgICBlLnkgPSB0aGlzLkRJTV9ZIC0gZS5kaW1ZLzI7XG4gICAgICAgIGUudnkqPS0xO1xuICAgICAgfVxuICAgICAgaWYgKGUueCAtIGUuZGltWC8yIDwgMCApe1xuICAgICAgICBlLnggPSBlLmRpbVgvMjtcbiAgICAgICAgZS52eCA9IC1lLnZ4O1xuICAgICAgfWVsc2UgaWYgKGUueCArIGUuZGltWC8yID4gdGhpcy5ESU1fWCl7XG4gICAgICAgIGUudnggPSAtZS52eDtcbiAgICAgICAgZS54ID0gdGhpcy5ESU1fWCAtIGUuZGltWC8yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBjaGVja0NvbGxpc2lvbnMoKXtcbiAgICBsZXQgZGVsZXRlSW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBpID0gMTsgaTwgdGhpcy5lbnRpdGllcy5sZW5ndGg7IGkrKyl7XG4gICAgICBmb3IgKGxldCBqID0gMCA7IGo8IGk7IGorKyl7XG4gICAgICAgIGlmICh0aGlzLmVudGl0aWVzW2ldLmlzQ29sbGlkZWRXaXRoKHRoaXMuZW50aXRpZXNbal0pKXtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQ29sbGlzaW9uJyk7XG5cbiAgICAgICAgICBpZiAodGhpcy5lbnRpdGllc1tpXSBpbnN0YW5jZW9mIEJhbGwpe1xuICAgICAgICAgICAgZGVsZXRlSW5kZXggPSBqO1xuICAgICAgICAgIH1lbHNlIGlmICh0aGlzLmVudGl0aWVzW2pdIGluc3RhbmNlb2YgQmFsbCl7XG4gICAgICAgICAgICBkZWxldGVJbmRleCA9IGk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IHRoaXMuZW50aXRpZXNbaV0udng7XG4gICAgICAgICAgICB0aGlzLmVudGl0aWVzW2ldLnZ4ICA9IC10aGlzLmVudGl0aWVzW2pdLnZ4O1xuICAgICAgICAgICAgdGhpcy5lbnRpdGllc1tqXS52eCA9LXRlbXA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkZWxldGVJbmRleCAhPT0gLTEpICB0aGlzLmVudGl0aWVzLnNwbGljZShkZWxldGVJbmRleCwxKTtcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsIlxuY2xhc3MgR2FtZVZpZXcge1xuXG4gIGNvbnN0cnVjdG9yKGdhbWUsIGN0eCl7XG4gICAgdGhpcy5nYW1lPSAgZ2FtZTtcbiAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgIHRoaXMuc3RlcCA9IHRoaXMuc3RlcC5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBzdGVwKHRpbWVzdGFtcCl7XG4gICAgXG4gICAgdGhpcy5nYW1lLm1vdmVFbnRpdGllcygpO1xuICAgIHRoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KTtcbiAgICB0aGlzLmdhbWUucmVmbGVjdEVudGl0aWVzT2ZmV2FsbHMoKTtcbiAgICB0aGlzLmdhbWUuY2hlY2tDb2xsaXNpb25zKCk7XG5cbiAgICBpZiAoIXRoaXMudGltZVZhbCkgdGhpcy50aW1lVmFsID0gdGltZXN0YW1wO1xuICAgIGlmICh0aW1lc3RhbXAgLSB0aGlzLnRpbWVWYWwgPiAxMDAwMCl7XG4gICAgICB0aGlzLnRpbWVWYWwgPTA7XG4gICAgICB0aGlzLmdhbWUuYWRkRW5lbXkoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RlcCk7XG4gIH1cblxuICBzdGFydCgpe1xuICAgIFxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGVwKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiLCJcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnO1xuXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4LHksd2lkdGgsbGVuZ3RoLCBhbmdsZSA9IDApe1xuICAgIHRoaXMueD0gIHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5hbmdsZT0gYW5nbGU7XG4gICAgXG4gICAgbGV0IGJsID0gTWF0aC5tdWx0aXBseShNYXRoLnJvdGF0aW9uTWF0cml4KGFuZ2xlKSAsIFt0aGlzLngtdGhpcy5kaW1YLzIsIHRoaXMueS10aGlzLmRpbVkvMl0pO1xuICAgIGxldCBiciA9IE1hdGgubXVsdGlwbHkoTWF0aC5yb3RhdGlvbk1hdHJpeChhbmdsZSkgLCBbdGhpcy54K3RoaXMuZGltWC8yLCB0aGlzLnktdGhpcy5kaW1ZLzJdKTtcbiAgICBsZXQgdGwgPSBNYXRoLm11bHRpcGx5KE1hdGgucm90YXRpb25NYXRyaXgoYW5nbGUpICwgW3RoaXMueC10aGlzLmRpbVgvMiwgdGhpcy55K3RoaXMuZGltWS8yXSk7XG4gICAgbGV0IHRyID0gTWF0aC5tdWx0aXBseShNYXRoLnJvdGF0aW9uTWF0cml4KGFuZ2xlKSAsIFt0aGlzLngrdGhpcy5kaW1YLzIsIHRoaXMueSt0aGlzLmRpbVkvMl0pO1xuICAgIGJsID0gW2JsWzBdK3RoaXMueCwgYmxbMV0rdGhpcy55XTtcbiAgICBiciA9IFticlswXSt0aGlzLngsIGJyWzFdK3RoaXMueV07XG4gICAgdGwgPSBbdGxbMF0rdGhpcy54LCB0bFsxXSt0aGlzLnldO1xuICAgIHRyID0gW3RyWzBdK3RoaXMueCwgdHJbMV0rdGhpcy55XTtcbiAgICB0aGlzLnZlcnRzID0gW3RyLHRsLGJsLGJyXTtcbiAgfVxuXG4gIGlzQ29sbGlkZWRXaXRoKG90aGVyKXtcblxuICAgIGlmKG90aGVyIGluc3RhbmNlb2YgQmFsbCl7XG4gICAgICBcbiAgICAgIGlmICggdGhpcy5pc0luc2lkZShbb3RoZXIueCxvdGhlci55XSkgXG4gICAgICAgIHx8IHRoaXMuaXNJbnNpZGUoW290aGVyLngtb3RoZXIucmFkaXVzLCBvdGhlci55XSlcbiAgICAgICAgfHwgdGhpcy5pc0luc2lkZShbb3RoZXIueCtvdGhlci5yYWRpdXMsIG90aGVyLnldKVxuICAgICAgICB8fCB0aGlzLmlzSW5zaWRlKFtvdGhlci54LCBvdGhlci55K290aGVyLnJhZGl1c10pXG4gICAgICAgIHx8IHRoaXMuaXNJbnNpZGUoW290aGVyLngsIG90aGVyLnktb3RoZXIucmFkaXVzXSkgKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBoID0gMDsgaDwgNDsgaCsrKXtcbiAgICAgICAgbGV0IG90aGVyQ2lyY2xlPSBuZXcgQ2lyY2xlKG90aGVyLngsIG90aGVyLnksIG90aGVyLnJhZGl1cyk7XG4gICAgICAgIGlmIChvdGhlckNpcmNsZS5pc0luc2lkZSh0aGlzLnZlcnRzW2hdKSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBcblxuICAgIH1lbHNlIGlmKG90aGVyIGluc3RhbmNlb2YgRW5lbXkpe1xuICAgICAgbGV0IG90aGVyUmVjdGFuZ2xlID0gbmV3IFJlY3RhbmdsZShvdGhlci54LCBvdGhlci55LCBvdGhlci5kaW1YLCBvdGhlci5kaW1ZKTsgICAgICBcbiAgICAgIGZvciAobGV0IGk9MDsgaTwgNDsgaSsrKXtcbiAgICAgICAgaWYgKHRoaXMuaXNJbnNpZGUob3RoZXJSZWN0YW5nbGUudmVydHNbaV0pKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKG90aGVyUmVjdGFuZ2xlLmlzSW5zaWRlKHRoaXMudmVydHNbaV0pKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIGlzSW5zaWRlKHBvaW50KXtcbiAgICBwb2ludFswXS09dGhpcy54O1xuICAgIHBvaW50WzFdLT10aGlzLnk7XG4gICAgcG9pbnQgPSBNYXRoLm11bHRpcGx5KE1hdGgucm90YXRpb25NYXRyaXgoLWFuZ2xlKSxwb2ludCk7XG4gICAgaWYgKC10aGlzLmRpbVgvMiA8PSBwb2ludFswXSBcbiAgICAgICYmIHBvaW50WzBdIDw9IHRoaXMuZGltWC8yXG4gICAgICAmJiAtdGhpcy5kaW1ZLzIgPD0gcG9pbnRbMV1cbiAgICAgICYmIHBvaW50WzFdIDw9IHRoaXMuZGltWS8yICl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=