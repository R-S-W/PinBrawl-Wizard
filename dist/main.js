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
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ "./src/scripts/ball.js");
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ "./src/scripts/enemy.js");
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
    this.addEnemy();
    this.addEnemy();
    this.addEnemy();
    this.addEnemy();
    this.addBall();
  }

  _createClass(Game, [{
    key: "addEnemy",
    value: function addEnemy() {
      var angle = -Math.PI * Math.random();
      var vMag = 5;
      var vx = vMag * Math.cos(angle);
      var vy = -vMag * Math.sin(angle);
      var enemy = new _enemy__WEBPACK_IMPORTED_MODULE_1__["default"](Math.round(20 + (this.DIM_X - 25) * Math.random()), 20 / 2, vx, vy, 20, 20);
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
      var ball = new _ball__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, vx, vy, 10, '#0095DD');
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
    key: "reflectEntities",
    value: function reflectEntities() {
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

            if (this.entities[i] instanceof _ball__WEBPACK_IMPORTED_MODULE_0__["default"]) {
              deleteIndex = j;
            } else if (this.entities[j] instanceof _ball__WEBPACK_IMPORTED_MODULE_0__["default"]) {
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
      this.game.reflectEntities();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZW5lbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZW50aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnYW1lIiwiR2FtZSIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJESU1fWCIsImhlaWdodCIsIkRJTV9ZIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVWaWV3IiwiR2FtZVZpZXciLCJzdGFydCIsImJlZ2luUGF0aCIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwiQmFsbCIsIngiLCJ5IiwidngiLCJ2eSIsInJhZGl1cyIsImNvbG9yIiwiZGltWCIsImRpbVkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJncmF2aXR5IiwiYXJjIiwiTWF0aCIsIlBJIiwicm91bmQiLCJFbnRpdHkiLCJFbmVteSIsIm90aGVyRW50aXR5IiwiaXNJbnNpZGUiLCJwb2ludCIsIk5VTV9NQVhfRU5FTUlFUyIsImVudGl0aWVzIiwidGltZVZhbCIsImFkZEVuZW15IiwiYWRkQmFsbCIsImFuZ2xlIiwicmFuZG9tIiwidk1hZyIsImNvcyIsInNpbiIsImVuZW15IiwicHVzaCIsImJhbGwiLCJjbGVhclJlY3QiLCJpIiwibGVuZ3RoIiwiZHJhdyIsImZvckVhY2giLCJlbnRpdHkiLCJtb3ZlIiwiZSIsImRlbGV0ZUluZGV4IiwiaiIsImlzQ29sbGlkZWRXaXRoIiwiY29uc29sZSIsImxvZyIsInRlbXAiLCJzcGxpY2UiLCJzdGVwIiwiYmluZCIsInRpbWVzdGFtcCIsIm1vdmVFbnRpdGllcyIsInJlZmxlY3RFbnRpdGllcyIsImNoZWNrQ29sbGlzaW9ucyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBSTtBQUVoRCxNQUFNQyxJQUFJLEdBQUcsSUFBSUMscURBQUosRUFBYjtBQUVBLE1BQUlDLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxjQUFULENBQXdCLGFBQXhCLENBQWI7QUFDQUQsUUFBTSxDQUFDRSxLQUFQLEdBQWVKLElBQUksQ0FBQ0ssS0FBcEI7QUFDQUgsUUFBTSxDQUFDSSxNQUFQLEdBQWdCTixJQUFJ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QUsvQixPQUFWLEVBQW1CLEtBQUtBLE9BQUwsR0FBZTRCLFNBQWY7O0FBQ25CLFVBQUlBLFNBQVMsR0FBRyxLQUFLNUIsT0FBakIsR0FBMkIsS0FBL0IsRUFBcUM7QUFDbkMsYUFBS0EsT0FBTCxHQUFjLENBQWQ7QUFDQSxhQUFLeEMsSUFBTCxDQUFVeUMsUUFBVjtBQUNEOztBQUVEK0IsWUFBTSxDQUFDQyxxQkFBUCxDQUE2QixLQUFLUCxJQUFsQztBQUNEOzs7V0FFRCxpQkFBTztBQUVMTSxZQUFNLENBQUNDLHFCQUFQLENBQTZCLEtBQUtQLElBQWxDO0FBQ0Q7Ozs7OztBQUVZdkQsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldydcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9zY3JpcHRzL2VudGl0eSc7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcblxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgY2FudmFzLndpZHRoID0gZ2FtZS5ESU1fWDtcbiAgY2FudmFzLmhlaWdodCA9IGdhbWUuRElNX1k7XG4gIFxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgLy8gbGV0IGUgPSBuZXcgRW50aXR5KGNhbnZhcy53aWR0aC8yLCBjYW52YXMuaGVpZ2h0LzIsIDIsMiwgMTAsMTApO1xuICAvLyBlLmRyYXcoY3R4KTtcblxuICBcbiAgbGV0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCk7XG4gIGdhbWVWaWV3LnN0YXJ0KCk7XG4gIFxuICBcbiAgXG4gIFxuICBcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgucmVjdCgyMCwgNDAsIDMwLCA1MCk7XG4gIGN0eC5maWxsU3R5bGUgPSBcIiNGRjAwMDBcIjtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBcbiAgXG4gIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gY3R4LmFyYygyNDAsIDE2MCwgMjAsIDAsIE1hdGguUEkqLjQ1LCBmYWxzZSk7XG4gIC8vIGN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gIC8vIC8vIGN0eC5zdHJva2VTdHlsZSA9ICdncmVlbic7XG4gIC8vIGN0eC5maWxsKCk7XG4gIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgXG4gIFxuICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gIC8vIGN0eC5yZWN0KDE2MCwgMTAsIDEwMCwgNDApO1xuICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMCwgMCwgMjU1LCAwLjUpXCI7XG4gIC8vIGN0eC5zdHJva2UoKTtcbiAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICBcbiAgXG4gIFxuICBcbiAgLy8gbGV0IHggPSBjYW52YXMud2lkdGgvMjtcbiAgLy8gbGV0IHkgPSBjYW52YXMuaGVpZ2h0IC0gMzA7XG4gIC8vIGxldCBkeCA9IDEwO1xuICAvLyBsZXQgZHkgPSAtMTU7XG4gIC8vIGxldCAgc3RlcFN0YXJ0O1xuICBcbiAgXG4gIC8vIGxldCBiYWxsUmFkaXVzID0gMTA7XG5cblxuXG5cblxuXG5cbiAgXG4gIC8vU1RPUCBTYXZlIHRoaXMgaW50byBhIGJyYW5jaCB0aGlzIGlzIHNpY2shXG4gIFxuICAvLyBjb25zdCBzdGVwID0gKHRpbWVzdGFtcCk9PntcbiAgLy8gICBpZiAoIXN0ZXBTdGFydCl7XG4gIC8vICAgICBzdGVwU3RhcnQgPSB0aW1lc3RhbXA7XG4gIC8vICAgfVxuICAvLyAgIGNvbnN0IHQgPSB0aW1lc3RhbXAgLSBzdGVwU3RhcnQ7XG4gICAgXG4gIC8vICAgaWYgKHQgPCA1MDAwMDApeyBcbiAgLy8gICAgIC8vIGN0eC5jbGVhclJlY3QoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KTtcbiAgLy8gICAgIGRyYXdCYWxsKHQseCx5KTtcbiAgLy8gICAgIHJlZmxlY3RFbnRpdGllcyh4LHksW2JhbGxSYWRpdXMsYmFsbFJhZGl1c10pO1xuICAvLyAgICAgeCs9ZHg7XG4gIC8vICAgICB5Kz1keTtcbiAgLy8gICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIC8vICAgfVxuICBcbiAgLy8gfVxuICBcbiAgXG4gIFxuICBcbiAgXG4gIC8vIGNvbnN0IGRyYXdCYWxsID0gKHQseCx5KT0+e1xuICAvLyAgIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gICBjdHguYXJjKHgseSxiYWxsUmFkaXVzLDAsIE1hdGguUEkqMik7XG4gIC8vICAgY3R4LmZpbGxTdHlsZSAgPSAnIzAwOTVERCc7XG4gIC8vICAgY3R4LmZpbGwoKTtcbiAgLy8gICBjdHguY2xvc2VQYXRoKCk7XG4gIC8vIH1cbiAgXG4gIFxuICAvLyBjb25zdCByZWZsZWN0RW50aXRpZXMgPSAoeCx5LGVudGl0eURpbSk9PntcbiAgLy8gICBsZXQgZXggPSBlbnRpdHlEaW1bMF0vMjtcbiAgLy8gICBsZXQgZXk9IGVudGl0eURpbVsxXS8yO1xuICAvLyAgIGlmICggKHkgPCAwICsgZXkpIHx8ICh5ID4gY2FudmFzLmhlaWdodCAtIGV5KSApICAgIGR5ID0gLWR5O1xuICAvLyAgIGlmICggKHg8MCArIGV4KSAgfHwgKHg+Y2FudmFzLndpZHRoIC0gZXgpICkgZHggPSAtZHg7XG4gIC8vIH1cbiAgXG4gIFxuICAvLyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApXG5cblxuICBcbn0pXG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vZW50aXR5JztcblxuY2xhc3MgQmFsbCBleHRlbmRzIEVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKHgseSx2eCx2eSxyYWRpdXMsY29sb3Ipe1xuICAgIHN1cGVyKHgseSx2eCx2eSk7XG4gICAgLy8gdGhpcy54ID0geDtcbiAgICAvLyB0aGlzLnkgPSB5O1xuICAgIC8vIHRoaXMudnggPSB2eDtcbiAgICAvLyB0aGlzLnZ5ID0gdnk7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5kaW1YID0gMipyYWRpdXM7XG4gICAgdGhpcy5kaW1ZID0gMipyYWRpdXM7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmdyYXZpdHkgPSAxO1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMueCx0aGlzLnksdGhpcy5yYWRpdXMsMCwgTWF0aC5QSSoyKTtcbiAgICBjdHguZmlsbFN0eWxlICA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgbW92ZSgpe1xuICAgIHRoaXMudnkgKz10aGlzLmdyYXZpdHk7XG4gICAgdGhpcy54ICs9IHRoaXMudng7XG4gICAgdGhpcy55ID1NYXRoLnJvdW5kKHRoaXMueSt0aGlzLnZ5KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQmFsbDtcblxuIiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL2VudGl0eSdcblxuY2xhc3MgRW5lbXkgZXh0ZW5kcyBFbnRpdHl7XG4gIC8vIGNvbnN0cnVjdG9yKHgseSx2eCx2eSxkaW1YLGRpbVksY29sb3Ipe1xuICAvLyAgIHN1cGVyKCk7XG5cbiAgLy8gfVxuXG4gIC8vIGRyYXcoY3R4KXtcbiAgLy8gICBzdXBlcigpO1xuICAvLyB9XG59XG5leHBvcnQgZGVmYXVsdCBFbmVteTsiLCJcbmNsYXNzIEVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKHg9MCx5PTAsdng9MCx2eT0wLCBkaW1YPTAsIGRpbVk9MCwgY29sb3I9JyMxMUQ2Q0QnKXtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy52eCA9IHZ4O1xuICAgIHRoaXMudnkgPSB2eTtcbiAgICB0aGlzLmRpbVggPSBkaW1YO1xuICAgIHRoaXMuZGltWSA9IGRpbVk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcblxuICB9XG5cblxuICBkcmF3KGN0eCl7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5yZWN0KHRoaXMucG9zLngsIHRoaXMucG9zLnksIDEwLDEwKTtcbiAgICBjdHgucmVjdCh0aGlzLnggLSB0aGlzLmRpbVgvMiwgdGhpcy55IC0gdGhpcy5kaW1ZLzIsdGhpcy5kaW1YLCB0aGlzLmRpbVkgKTtcbiAgICBjdHguZmlsbFN0eWxlID10aGlzLmJhY2tncm91bmRDb2xvcjtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICB9XG5cbiAgbW92ZSgpe1xuICAgIHRoaXMueCArPSB0aGlzLnZ4O1xuICAgIHRoaXMueSArPSB0aGlzLnZ5O1xuICB9XG5cbiAgaXNDb2xsaWRlZFdpdGgob3RoZXJFbnRpdHkpe1xuICAgIGlmICggdGhpcy5pc0luc2lkZShbb3RoZXJFbnRpdHkueCAtIG90aGVyRW50aXR5LmRpbVgvMiwgb3RoZXJFbnRpdHkueSAtIG90aGVyRW50aXR5LmRpbVkvMl0pXG4gICAgICB8fCB0aGlzLmlzSW5zaWRlKFtvdGhlckVudGl0eS54ICsgb3RoZXJFbnRpdHkuZGltWC8yLCBvdGhlckVudGl0eS55IC0gb3RoZXJFbnRpdHkuZGltWS8yXSlcbiAgICAgIHx8IHRoaXMuaXNJbnNpZGUoW290aGVyRW50aXR5LnggLSBvdGhlckVudGl0eS5kaW1YLzIsIG90aGVyRW50aXR5LnkgKyBvdGhlckVudGl0eS5kaW1ZLzJdKVxuICAgICAgfHwgdGhpcy5pc0luc2lkZShbb3RoZXJFbnRpdHkueCArIG90aGVyRW50aXR5LmRpbVgvMiwgb3RoZXJFbnRpdHkueSArIG90aGVyRW50aXR5LmRpbVkvMl0pXG4gICAgKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0luc2lkZShwb2ludCl7XG4gICAgaWYgKHRoaXMueC10aGlzLmRpbVgvMiA8PSBwb2ludFswXSBcbiAgICAgICYmIHBvaW50WzBdIDw9IHRoaXMueCt0aGlzLmRpbVgvMlxuICAgICAgJiYgdGhpcy55LXRoaXMuZGltWS8yIDw9IHBvaW50WzFdXG4gICAgICAmJiBwb2ludFsxXSA8PSB0aGlzLnkrdGhpcy5kaW1ZLzIgKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5OyIsImltcG9ydCBCYWxsIGZyb20gJy4vYmFsbCc7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi9lbmVteSc7XG5cblxuY2xhc3MgR2FtZSB7XG4gIFxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuRElNX1ggPSA3MDA7XG4gICAgdGhpcy5ESU1fWSA9IDY4MDtcbiAgICB0aGlzLk5VTV9NQVhfRU5FTUlFUyA9IDIwO1xuICAgIHRoaXMuZW50aXRpZXMgPSBbXTtcbiAgICBcbiAgICB0aGlzLnRpbWVWYWw7XG5cbiAgICB0aGlzLmFkZEVuZW15KCk7XG4gICAgdGhpcy5hZGRFbmVteSgpO1xuICAgIHRoaXMuYWRkRW5lbXkoKTtcbiAgICB0aGlzLmFkZEVuZW15KCk7XG4gICAgdGhpcy5hZGRCYWxsKCk7XG5cbiAgICBcbiAgfVxuICBhZGRFbmVteSgpe1xuICAgIGxldCBhbmdsZSA9IC1NYXRoLlBJKk1hdGgucmFuZG9tKCk7XG4gICAgbGV0IHZNYWcgPSA1O1xuICAgIGxldCB2eCA9IHZNYWcqTWF0aC5jb3MoYW5nbGUpO1xuICAgIGxldCB2eSA9IC12TWFnKk1hdGguc2luKGFuZ2xlKTtcbiAgICBsZXQgZW5lbXkgPSBuZXcgRW5lbXkoTWF0aC5yb3VuZCgyMCsgKHRoaXMuRElNX1gtMjUpKk1hdGgucmFuZG9tKCkpLDIwLzIsdngsdnksMjAsMjApO1xuICAgIHRoaXMuZW50aXRpZXMucHVzaChlbmVteSk7XG4gIH1cblxuICBhZGRCYWxsKCl7XG4gICAgbGV0IGFuZ2xlID0gTWF0aC5QSSoyKk1hdGgucmFuZG9tKCk7XG4gICAgbGV0IHZNYWcgPSA2O1xuICAgIGxldCB2eCA9IHZNYWcqTWF0aC5jb3MoYW5nbGUpO1xuICAgIGxldCB2eSA9IHZNYWcqTWF0aC5zaW4oYW5nbGUpO1xuICAgIGxldCB4ID0gdGhpcy5ESU1fWC8yO1xuICAgIGxldCB5ID0gdGhpcy5ESU1fWS8yO1xuICAgIGxldCBiYWxsID0gbmV3IEJhbGwoeCx5LHZ4LHZ5LDEwLCcjMDA5NUREJyk7XG4gICAgdGhpcy5lbnRpdGllcy5wdXNoKGJhbGwpO1xuICB9XG5cblxuICBkcmF3KGN0eCl7XG4gICAgY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy5ESU1fWCwgdGhpcy5ESU1fWSk7XG4gICAgZm9yIChsZXQgaT0gMCA7IGk8IHRoaXMuZW50aXRpZXMubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy5lbnRpdGllc1tpXS5kcmF3KGN0eCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZUVudGl0aWVzKCl7XG4gICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpPT57ZW50aXR5Lm1vdmUoKX0pXG4gIH1cblxuICByZWZsZWN0RW50aXRpZXMoKXtcbiAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goKGUpPT57XG4gICAgICBpZiAoIGUueSAtIGUuZGltWS8yIDwgMCApe1xuICAgICAgICBlLnkgPSBlLmRpbVkvMjtcbiAgICAgICAgZS52eSA9IC1lLnZ5O1xuICAgICAgfWVsc2UgaWYgKGUueSArIGUuZGltWS8yID4gdGhpcy5ESU1fWSl7XG4gICAgICAgIGUueSA9IHRoaXMuRElNX1kgLSBlLmRpbVkvMjtcbiAgICAgICAgZS52eSo9LTE7XG4gICAgICB9XG4gICAgICBpZiAoZS54IC0gZS5kaW1YLzIgPCAwICl7XG4gICAgICAgIGUueCA9IGUuZGltWC8yO1xuICAgICAgICBlLnZ4ID0gLWUudng7XG4gICAgICB9ZWxzZSBpZiAoZS54ICsgZS5kaW1YLzIgPiB0aGlzLkRJTV9YKXtcbiAgICAgICAgZS52eCA9IC1lLnZ4O1xuICAgICAgICBlLnggPSB0aGlzLkRJTV9YIC0gZS5kaW1YLzI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIGNoZWNrQ29sbGlzaW9ucygpe1xuICAgIGxldCBkZWxldGVJbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAxOyBpPCB0aGlzLmVudGl0aWVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGZvciAobGV0IGogPSAwIDsgajwgaTsgaisrKXtcbiAgICAgICAgaWYgKHRoaXMuZW50aXRpZXNbaV0uaXNDb2xsaWRlZFdpdGgodGhpcy5lbnRpdGllc1tqXSkpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdDb2xsaXNpb24nKTtcblxuICAgICAgICAgIGlmICh0aGlzLmVudGl0aWVzW2ldIGluc3RhbmNlb2YgQmFsbCl7XG4gICAgICAgICAgICBkZWxldGVJbmRleCA9IGo7XG4gICAgICAgICAgfWVsc2UgaWYgKHRoaXMuZW50aXRpZXNbal0gaW5zdGFuY2VvZiBCYWxsKXtcbiAgICAgICAgICAgIGRlbGV0ZUluZGV4ID0gaTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCB0ZW1wID0gdGhpcy5lbnRpdGllc1tpXS52eDtcbiAgICAgICAgICAgIHRoaXMuZW50aXRpZXNbaV0udnggID0gLXRoaXMuZW50aXRpZXNbal0udng7XG4gICAgICAgICAgICB0aGlzLmVudGl0aWVzW2pdLnZ4ID0tdGVtcDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRlbGV0ZUluZGV4ICE9PSAtMSkgIHRoaXMuZW50aXRpZXMuc3BsaWNlKGRlbGV0ZUluZGV4LDEpO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiXG5jbGFzcyBHYW1lVmlldyB7XG5cbiAgY29uc3RydWN0b3IoZ2FtZSwgY3R4KXtcbiAgICB0aGlzLmdhbWU9ICBnYW1lO1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgdGhpcy5zdGVwID0gdGhpcy5zdGVwLmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIHN0ZXAodGltZXN0YW1wKXtcbiAgICBcbiAgICB0aGlzLmdhbWUubW92ZUVudGl0aWVzKCk7XG4gICAgdGhpcy5nYW1lLmRyYXcodGhpcy5jdHgpO1xuICAgIHRoaXMuZ2FtZS5yZWZsZWN0RW50aXRpZXMoKTtcbiAgICB0aGlzLmdhbWUuY2hlY2tDb2xsaXNpb25zKCk7XG5cbiAgICBpZiAoIXRoaXMudGltZVZhbCkgdGhpcy50aW1lVmFsID0gdGltZXN0YW1wO1xuICAgIGlmICh0aW1lc3RhbXAgLSB0aGlzLnRpbWVWYWwgPiAxMDAwMCl7XG4gICAgICB0aGlzLnRpbWVWYWwgPTA7XG4gICAgICB0aGlzLmdhbWUuYWRkRW5lbXkoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RlcCk7XG4gIH1cblxuICBzdGFydCgpe1xuICAgIFxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGVwKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9