(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "https://aragon.github.io/aracon-website/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@aragon/ui");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100vw;\n  margin: -1px auto -1px auto;\n  \n  position: relative;\n  text-align: left;\n\n  .h1box {\n    display: flex;\n  }\n  .h1box.centered {\n    justify-content: center;\n  }\n  .h1box.xs-centered {\n    justify-content: center;\n    ', ';\n\n  }\n  h1 {\n    margin-bottom: 25px;\n    font-size: 48px;\n    line-height: 1.5;\n    background: -webkit-linear-gradient(left, #7af7d0, #64b0f1);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: 900;\n    text-align: left;\n  }\n  h2 {\n    margin-bottom: 25px;\n    font-size: 38px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  h3 {\n    margin-bottom: 25px;\n    font-size: 25px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  p {\n    font-size: 17px;\n    font-size: 19px;\n    line-height: 27px;\n    color: ', ';\n    a {\n      color: #61B2F0;\n      text-decoration: none;\n    }\n  }\n  button a, a {\n    text-decoration: none;\n  }\n  .strong {\n    font-size: 17px;\n    font-weight: 700;\n  }\n'], ['\n  width: 100vw;\n  margin: -1px auto -1px auto;\n  \n  position: relative;\n  text-align: left;\n\n  .h1box {\n    display: flex;\n  }\n  .h1box.centered {\n    justify-content: center;\n  }\n  .h1box.xs-centered {\n    justify-content: center;\n    ', ';\n\n  }\n  h1 {\n    margin-bottom: 25px;\n    font-size: 48px;\n    line-height: 1.5;\n    background: -webkit-linear-gradient(left, #7af7d0, #64b0f1);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: 900;\n    text-align: left;\n  }\n  h2 {\n    margin-bottom: 25px;\n    font-size: 38px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  h3 {\n    margin-bottom: 25px;\n    font-size: 25px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  p {\n    font-size: 17px;\n    font-size: 19px;\n    line-height: 27px;\n    color: ', ';\n    a {\n      color: #61B2F0;\n      text-decoration: none;\n    }\n  }\n  button a, a {\n    text-decoration: none;\n  }\n  .strong {\n    font-size: 17px;\n    font-weight: 700;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var StyledContent = _styledComponents2.default.div(_templateObject, medium('justify-content: flex-start;'), _ui.theme.textSecondary);

var Section = function Section(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  var containerProps = { className: className };

  return _react2.default.createElement(
    'section',
    containerProps,
    _react2.default.createElement(
      StyledContent,
      null,
      _react2.default.createElement('div', props)
    )
  );
};

Section.propTypes = {
  className: _propTypes2.default.string
};

exports.default = Section;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Page = __webpack_require__(49);

Object.defineProperty(exports, 'Page', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Page).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex!important;\n  text-align: center;\n  justify-content: center;\n  ', ';\n  padding-top: 40px;\n'], ['\n  display: flex!important;\n  text-align: center;\n  justify-content: center;\n  ', ';\n  padding-top: 40px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Content = _styledComponents2.default.div(_templateObject, large('justify-content: flex-end; max-width: 1440px !important; margin: auto;'));

var Forms = function (_React$Component) {
  _inherits(Forms, _React$Component);

  function Forms() {
    _classCallCheck(this, Forms);

    return _possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).apply(this, arguments));
  }

  _createClass(Forms, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var Script = void 0;
      window.SMCX = window.SMCX || [];
      Script = document.createElement("script");
      Script.type = "text/javascript", Script.async = !0;
      Script.id = "smcx-sdk";
      Script.src = this.props.src;
      document.getElementById(this.props.type + "Script").appendChild(Script);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Content, { id: this.props.type + "Script" });
    }
  }]);

  return Forms;
}(_react2.default.Component);

exports.default = Forms;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(5);

var _Hero = __webpack_require__(57);

var _Hero2 = _interopRequireDefault(_Hero);

var _About = __webpack_require__(60);

var _About2 = _interopRequireDefault(_About);

var _Speakers = __webpack_require__(61);

var _Speakers2 = _interopRequireDefault(_Speakers);

var _Venue = __webpack_require__(81);

var _Venue2 = _interopRequireDefault(_Venue);

var _Map = __webpack_require__(83);

var _Map2 = _interopRequireDefault(_Map);

var _Contact = __webpack_require__(88);

var _Contact2 = _interopRequireDefault(_Contact);

var _Livestream = __webpack_require__(89);

var _Livestream2 = _interopRequireDefault(_Livestream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/' },
    _react2.default.createElement(_Hero2.default, null),
    _react2.default.createElement(_About2.default, null),
    _react2.default.createElement(_Livestream2.default, null),
    _react2.default.createElement(_Speakers2.default, null),
    _react2.default.createElement(_Venue2.default, null),
    _react2.default.createElement(_Map2.default, null),
    _react2.default.createElement(_Contact2.default, null)
  );
};

exports.default = Home;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Aron Fischer.png": 63,
	"./Griff Green.png": 64,
	"./Griff Green_.png": 12,
	"./Joe Urgo.png": 65,
	"./Joe Urgo_.png": 13,
	"./Jutta Steiner.png": 66,
	"./Jutta Steiner_.png": 14,
	"./Lane Rettig.png": 67,
	"./Luis Cuende.png": 68,
	"./Luis Cuende_.png": 15,
	"./Maria Gomez.png": 69,
	"./Maria Gomez_.png": 16,
	"./Maria Paula Fernandez.png": 70,
	"./Mario Laul.png": 71,
	"./Martin Koppelmann.png": 72,
	"./Martin Koppelmann_.png": 17,
	"./Matt Lockyer.png": 73,
	"./Mike Goldin.png": 74,
	"./Primavera De Filippi.png": 75,
	"./Primavera De Filippi_.png": 18,
	"./Raine Revere.png": 76,
	"./Raine Revere_.png": 19,
	"./Santiago Siri.png": 77,
	"./Shira Frank.png": 78,
	"./Trent McConaghy.png": 79
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 11;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2d55e95c-Griff Green_.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9c5670ae-Joe Urgo_.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/02d24290-Jutta Steiner_.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2b505718-Luis Cuende_.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2f0300ef-Maria Gomez_.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/a798f704-Martin Koppelmann_.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1d4e18bb-Primavera De Filippi_.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/f00905e5-Raine Revere_.png";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .h1box {\n    max-width: 1200px;\n    margin: auto;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .h1box {\n    max-width: 1200px;\n    margin: auto;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 1195px;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-bottom: 40px;\n  a {\n    color: #63B1F1;   \n    font-size: 19px;  \n    line-height: 27px;\n  }\n'], ['\n  width: 100%;\n  max-width: 1195px;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-bottom: 40px;\n  a {\n    color: #63B1F1;   \n    font-size: 19px;  \n    line-height: 27px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 695px;\n  margin: 70px auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  h2 {\n    font-size: 42px;\n    font-weight: bold;\n    text-align: center;\n    color: #18181a;\n  }\n  p {\n    font-size: 19px;\n    line-height: 1.42;\n    text-align: center;\n    color: #45494d;\n  }\n\n  p a {\n    color: #61b2f0;\n    text-decoration: none;\n  }\n'], ['\n  width: 100%;\n  max-width: 695px;\n  margin: 70px auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  h2 {\n    font-size: 42px;\n    font-weight: bold;\n    text-align: center;\n    color: #18181a;\n  }\n  p {\n    font-size: 19px;\n    line-height: 1.42;\n    text-align: center;\n    color: #45494d;\n  }\n\n  p a {\n    color: #61b2f0;\n    text-decoration: none;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _Forms = __webpack_require__(7);

var _Forms2 = _interopRequireDefault(_Forms);

var _Speaker = __webpack_require__(91);

var _Speaker2 = _interopRequireDefault(_Speaker);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var SpeakersBox = _styledComponents2.default.div(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2);

var TextContainer = _styledComponents2.default.div(_templateObject3);

var Speakers = function Speakers() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/speakers' },
    _react2.default.createElement(
      _Section2.default,
      null,
      _react2.default.createElement(
        SpeakersBox,
        null,
        _react2.default.createElement(
          'div',
          { className: 'h1box' },
          _react2.default.createElement(
            'h1',
            null,
            'Speakers'
          )
        ),
        _react2.default.createElement(
          Container,
          null,
          _react2.default.createElement(_Speaker2.default, { photo: 'Trent McConaghy', name: 'Trent-McConaghy', position: 'Co-founder', company: 'BigchainDB',
            bio: 'Trent McConaghy did AI research for two decades, including machine creativity and  AI to help drive Moore\'s Law, via two startups (both acquired) and a PhD. Now he  focuses on AI * blockchain, via Ocean to democratize AI data, and BigchainDB  decentralized database. His hobbies include Token Engineering and advising governments  on AI * blockchain' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Shira Frank', name: 'Shira-Frank', position: 'Co-founder', company: 'Maiden',
            bio: 'Shira brings over 15 years of work in politics, social change, women\u2019s philanthropy,  and fundraising with her to the Blockchain and Fin-Tech industries. Shira spent seven years  as a Deputy Director for J Street working to transform the way Congress and the Executive  branch engage in the Middle East and to promote the creation of a two-state solution to the  Israeli-Palestinian conflict. Shira holds a degree in Government and Political Theory from  Smith College. ' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Santiago Siri', name: 'Santiago Siri', position: 'Founder', company: 'Democracy Earth Foundation',
            bio: 'Founder of Democracy Earth Foundation, a Y Combinator backed non-profit building  incorruptible digital governance technology; and the Partido de la Red (Peers Party),  the first digital political party that ran for elections with candidates committed to  people\'s will online. Partner of Bitex.la, a leading bitcoin exchange in Latin America.  Published \'Hacktivismo\' in 2015 with Random House. Member of the World Economic Forum  since 2012. Awarded by MIT Technology Review and Singularity University. Co-founded  Argentine Game Developers Association in 2002.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Raine Revere', linkTo: 'raine', name: 'Raine Revere', position: 'Co-foundeer', company: 'Maiden',
            bio: 'Raine Revere is an engineer and educator in the Ethereum community who has spoken  at blockchain events around the world. Raine is the Lead Architect of ShapeShift Prism  and is the co-founder of Maiden, a company that delivers socially-aware blockchain  education, cultural & leadership development, and diversity-powered blockchain  consulting. As a therapist, teacher, and cryptocurrency engineer, Raine has the unique  capacity to engage deeply with both the technical and social aspects of technology.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Primavera De Filippi', linkTo: 'primavera', name: 'Primavera De Filippi', position: 'Postdoctoral researcher', company: 'National Center of Scientific Research (CNRS)',
            bio: 'Primavera De Filippi is a permanent researcher at the National Center of Scientific  Research (CNRS) in Paris, a faculty associate at the Berkman-Klein Center for Internet &  Society at Harvard University, and a Visiting Fellow at the Robert Schuman Centre for  Advanced Studies at the European University Institute.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Mike Goldin', name: 'Mike Goldin', position: 'Lead Engineer', company: 'Cryptosystems Productization Lab, ConsenSys',
            bio: 'Mike is the author of \u201Ctoken-curated registries 1.0\u201D, a widely-cited paper which  originally formalized the basic design and properties of such cryptosystems. He launched  adChain and implemented its token sale, which sold out in one block. He has overseen and  facilitated the development of a widely-used TCR implementation, as well as multiple  graphical user interfaces for TCRs. He graduated from Columbia University with a degree  in computer science.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Matt Lockyer', name: 'Matt Lockyer', position: 'Founder', company: 'Soloblock Solutions',
            bio: 'Matt Lockyer wrote the Ethereum ERC-998 standard for Composable Tokens and his work  on Token Curated Registries (TCRs) has been published on a16z\'s crypto reading list. Matt  founded and operates the NFTy Magicians - a group of over 300 blockchain developers - as a  pendant to the Ethereum Foundation. He currently advises projects on their smart contract  architecture and token engineering processes with a background in full stack development,  computer science, UX research, public speaking and university lecturing.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Mario Laul', name: 'Mario Laul', position: 'Researcher', company: 'Placeholder Ventures',
            bio: 'Mario Laul works as a researcher for Placeholder, a New York venture capital firm investing  in decentralized information networks, and for Beyond the Technological Revolution, a four-year  research project led by Carlota Perez exploring the relationship between technology, finance,  and public policy. Each fall, he teaches an introductory course on the sociology of culture at  the Estonian Academy of Arts in Tallinn, and is looking to combine the study of technology governance  with a sociologically informed perspective on emerging forms of decentralized economic  and social coordination.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Martin Koppelmann', name: 'Martin K\xF6ppelmann', position: 'CEO and Co-founder', company: 'Gnosis',
            bio: 'Martin K\xF6ppelmann has been an entrepreneur in the blockchain space for more than 5 years.  He is the CEO and co-founder of Gnosis, the decentralized Gnosis prediction market - one of the  first decentralized application that went live on Ethereum in 2015 in an early verison.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Luis Cuende', name: 'Luis Cuende', linkTo: 'luis', position: 'CEO', company: 'Aragon One',
            bio: 'Luis is the CEO of Aragon One, one of the teams working on the Aragon project. Luis has been  into crypto since 2011, and loves how decentralized organizations can solve the world\u2019s worst  problems. Luis has been awarded as the best underage European programmer in 2011, is a Forbes 30  Under 30, a MIT TR35 and was an Advisor to the VP of the European Commission. He cofounded the  blockchain startup Stampery. Prior to founding startups, he created the world\'s first Linux  distribution with facelogin.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Lane Rettig', name: 'Lane Rettig', position: 'Independent Core Developer', company: 'Ewasm',
            bio: 'Lane Rettig is an independent Ethereum core developer and a member of the Ewasm team, where he  is helping build the execution engine for Ethereum 2.0 (the Shasper roadmap). He is also the founder  of Crypto NYC, a Manhattan-based, blockchain-focused community and coworking space dedicated to making  Web3 technology accessible to all humans.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Jutta Steiner', name: 'Jutta Steiner', linkTo: 'jutta', position: 'Co-Founder and CEO', company: 'Parity Technologies',
            bio: 'Dr Jutta Steiner is the co-founder and CEO of Parity Technologies, a blockchain technology company best  known for Parity Ethereum, the most advanced Ethereum client. Previously, Jutta served as Chief of Security  for the Ethereum Foundation and pioneered blockchain use in supply chains as Project Provenance co-founder.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Joe Urgo', name: 'Joe Urgo', linkTo: 'joe', position: 'Co-Founder', company: 'District0x',
            bio: 'Joe is a co-founder of district0x, a network of decentralized marketplaces and CEO at Sourcerers,  a consultancy firm supporting leading Ethereum-based projects. Joe previously spent three years  as an Operations Manager at Coinbase. Prior to Coinbase, he was a derivatives trader for Three  Arrows Capital, an international hedge fund based in Singapore. Joe serves as an advisor at Status,  Keep, SpankChain, Bloom, Witnet, Abacus, Access Network, LiquidX, Fabric Ventures, Republic, and  Common Interest.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Griff Green', name: 'Griff Green', linkTo: 'griff', position: 'Co-founder', company: 'Giveth & Aragon DAC',
            bio: 'Community manager for TheDAO, led the cleanup effort for TheDAO Hack from every angle, co-founder of  the White Hat Group and Giveth and leading the creation of the Aragon DAC, as well as advising DAppNode,  0KIMS (iden3), ETHSignals, Open Source Blockchain Explorers NOW! and many other groups within the Ethereum  Community.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Aron Fischer', name: 'Aron Fischer', position: 'Governance Researcher', company: 'Colony',
            bio: 'Aron Fischer received his PhD in mathematics from the City University of New York in 2015. He is working  in the research arm of Colony: a platform for open organisations which seeks to enable new forms of  decentralised organisations. The work involves a careful balancing of what is desirable  in terms of governance and what is possible given the technical limitations of the Ethereum blockchain.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'Maria Gomez', name: 'Mar\xEDa G\xF3mez', linkTo: 'maria', position: 'Ecosystem Development', company: 'Aragon One',
            bio: 'Mar\xEDa G\xF3mez is a former corporate lawyer. She worked several years in the M&A and corporate finance  practice. Currently she works on ecosystem development for Aragon.one, one of the teams working for the  Aragon project. ' })
        )
      )
    ),
    _react2.default.createElement(
      TextContainer,
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Want to Speak at AraCon 2019?'
      ),
      _react2.default.createElement(
        'p',
        null,
        'If you would like to join a panel or do a talk at AraCon on anything related to governance, blockchain, future of work or borderless collaboration - please ',
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/speakersapplication' },
          'apply here'
        ),
        ' before November 10th.'
      )
    )
  );
};

exports.default = Speakers;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: auto;\n  max-width: 695px;\n  padding: 50px 0 50px 8.5%;\n  text-align: left;\n  ', ';\n'], ['\n  width: 100%;\n  margin: auto;\n  max-width: 695px;\n  padding: 50px 0 50px 8.5%;\n  text-align: left;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n'], ['\n  width: 100%;\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Forms = __webpack_require__(7);

var _Forms2 = _interopRequireDefault(_Forms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var TextContainer = _styledComponents2.default.div(_templateObject, large('position: absolute; width: 41%; margin: inherit'));

var OuterContainer = _styledComponents2.default.div(_templateObject2);

var SpeakersApplication = function SpeakersApplication() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/speakersapplication' },
    _react2.default.createElement(
      _Section2.default,
      { className: 'dark all-page' },
      _react2.default.createElement(
        OuterContainer,
        null,
        _react2.default.createElement(
          TextContainer,
          null,
          _react2.default.createElement(
            'div',
            { className: 'h1box', id: 'speakers-form' },
            _react2.default.createElement(
              'h1',
              null,
              'Speakers application'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'If you would like to do a workshop or a talk at AraCon on anything related to governance, blockchain, future of work or borderless collaboration - please register here'
          )
        )
      ),
      _react2.default.createElement(_Forms2.default, { type: 'speakers', src: 'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaOhfvbt_2Fq8nWc81qWg3efVA.js' }),
      _react2.default.createElement('div', { id: 'speakers' })
    )
  );
};

exports.default = SpeakersApplication;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  button {\n    width: 50%;\n    height: 58px;\n    font-size: 17px;\n    font-weight: 700;\n    color: #000000;\n    padding: 0;\n  }\n  .first-button {\n    border-radius: 3px 0 0 0;\n  }\n  .second-button {\n    border-radius: 0 3px 0 0;\n  }\n'], ['\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  button {\n    width: 50%;\n    height: 58px;\n    font-size: 17px;\n    font-weight: 700;\n    color: #000000;\n    padding: 0;\n  }\n  .first-button {\n    border-radius: 3px 0 0 0;\n  }\n  .second-button {\n    border-radius: 0 3px 0 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _DayOne = __webpack_require__(92);

var _DayOne2 = _interopRequireDefault(_DayOne);

var _DayTwo = __webpack_require__(93);

var _DayTwo2 = _interopRequireDefault(_DayTwo);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Container = _styledComponents2.default.div(_templateObject);

var Agenda = function (_React$Component) {
  _inherits(Agenda, _React$Component);

  function Agenda() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Agenda);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Agenda.__proto__ || Object.getPrototypeOf(Agenda)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: 'dayOne' }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Agenda, [{
    key: 'render',
    value: function render() {
      var active = this.state.active;

      return _react2.default.createElement(
        _components.Page,
        { path: '/agenda' },
        _react2.default.createElement(
          _Section2.default,
          { className: 'dark all-page' },
          _react2.default.createElement(
            Container,
            null,
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'div',
                { className: 'h1box' },
                _react2.default.createElement(
                  'h1',
                  null,
                  'Agenda'
                )
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              'The full agenda of AraCon is currently being finalised. Please check back for updates soon.'
            )
          )
        )
      );
    }
  }]);

  return Agenda;
}(_react2.default.Component);

exports.default = Agenda;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 50px;\n  .schedule {\n    width: 100%;\n    max-width: 800px;\n    background: #fff;\n    padding: 0;\n    ', ';\n    position: relative;\n    margin: auto;\n  }\n  .schedule:before {\n    content: \'\';\n    position: absolute;\n    top: 6px;\n    left: calc(33% - 1px);\n    ', ';\n    bottom: 0px;\n    width: 2px;\n    background: #ddd;\n  }\n  .schedule:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n'], ['\n  margin-top: 50px;\n  .schedule {\n    width: 100%;\n    max-width: 800px;\n    background: #fff;\n    padding: 0;\n    ', ';\n    position: relative;\n    margin: auto;\n  }\n  .schedule:before {\n    content: \'\';\n    position: absolute;\n    top: 6px;\n    left: calc(33% - 1px);\n    ', ';\n    bottom: 0px;\n    width: 2px;\n    background: #ddd;\n  }\n  .schedule:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var ScheduleContainer = _styledComponents2.default.div(_templateObject, medium('padding: 5px 50px;'), medium('left: calc(33% + 16px);'));

var Schedule = function Schedule(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  var containerProps = { className: className };

  return _react2.default.createElement(
    ScheduleContainer,
    containerProps,
    _react2.default.createElement(
      'div',
      { className: 'schedule' },
      _react2.default.createElement('div', props)
    )
  );
};

Schedule.propTypes = {
  className: _propTypes2.default.string
};

exports.default = Schedule;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  clear: both;\n  text-align: left;\n  position: relative;\n  .time {\n    margin-bottom: .5em;\n    float: left;\n    width: 33%;\n    padding-right: 30px;\n    text-align: right;\n    position: relative;\n  }\n  .time:after {\n    content: \'\';\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border-radius: 12px;\n    top: 6px;\n    right: -6px;\n    background-image: linear-gradient(71deg,#6aacf4,#18ebd6);\n  }\n  .time:before {\n    content: \'\';\n    width: 26px;\n    height: 26px;\n    border-radius: 30px;\n    opacity: 0.22;\n    background-image: linear-gradient(to right,#6aacf4,#18ebd6);\n    position: absolute;\n    right: -13px;\n    top: -1px;\n  }\n  .description {\n    margin: 0 0 3em;\n    float: right;\n    width: 66%;\n    padding-left: 30px;\n    position: relative;\n  }\n  .description p {\n    line-height: 1;\n    font-size: 18px;\n    ', ';\n    margin-bottom: 5px;\n    font-weight: 700;\n    color: #000000;\n  }\n  .description h6 {\n    color: ', ';\n    line-height: 1;\n    margin-top: 8px;\n    ', ';\n  }\n  .time h3 {\n    font-size: 15px;\n    ', ';\n    color: #000000;\n  }\n'], ['\n  clear: both;\n  text-align: left;\n  position: relative;\n  .time {\n    margin-bottom: .5em;\n    float: left;\n    width: 33%;\n    padding-right: 30px;\n    text-align: right;\n    position: relative;\n  }\n  .time:after {\n    content: \'\';\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border-radius: 12px;\n    top: 6px;\n    right: -6px;\n    background-image: linear-gradient(71deg,#6aacf4,#18ebd6);\n  }\n  .time:before {\n    content: \'\';\n    width: 26px;\n    height: 26px;\n    border-radius: 30px;\n    opacity: 0.22;\n    background-image: linear-gradient(to right,#6aacf4,#18ebd6);\n    position: absolute;\n    right: -13px;\n    top: -1px;\n  }\n  .description {\n    margin: 0 0 3em;\n    float: right;\n    width: 66%;\n    padding-left: 30px;\n    position: relative;\n  }\n  .description p {\n    line-height: 1;\n    font-size: 18px;\n    ', ';\n    margin-bottom: 5px;\n    font-weight: 700;\n    color: #000000;\n  }\n  .description h6 {\n    color: ', ';\n    line-height: 1;\n    margin-top: 8px;\n    ', ';\n  }\n  .time h3 {\n    font-size: 15px;\n    ', ';\n    color: #000000;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var EntryBox = _styledComponents2.default.div(_templateObject, medium('line-height: 1; font-size: 24px;'), _ui.theme.textTertiary, medium('line-height: 1.5; margin-top: 10px;'), medium('font-size: 17px; font-weight: 700;'));

var Entry = function Entry(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    EntryBox,
    null,
    _react2.default.createElement(
      'div',
      { className: 'time' },
      _react2.default.createElement(
        'h3',
        null,
        props.time,
        ' HS'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'description' },
      _react2.default.createElement(
        'p',
        null,
        props.title
      ),
      _react2.default.createElement(
        'h6',
        null,
        props.subtitle
      )
    )
  );
};

exports.default = Entry;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  margin: 22px;\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #707070;\n  a {\n    color: #61B2F0;\n  }\n'], ['\n  text-align: left;\n  margin: 22px;\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #707070;\n  a {\n    color: #61B2F0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: 50px 8.5%;\n'], ['\n  width: 100%;\n  padding: 50px 8.5%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Criteria = _styledComponents2.default.ul(_templateObject);
var Container = _styledComponents2.default.div(_templateObject2);

var Registration = function Registration() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/registration' },
    _react2.default.createElement(
      _Section2.default,
      { className: 'all-page' },
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'div',
            { className: 'h1box' },
            _react2.default.createElement(
              'h1',
              null,
              'Registration'
            )
          )
        ),
        _react2.default.createElement(
          _ui.Text,
          { size: 'xlarge' },
          _react2.default.createElement(
            'h3',
            null,
            'AraCon welcomes people from all backgrounds to join us at the flagship event of the Aragon Project. We have a portion of tickets initially reserved for Aragon community members, those who have supported and helped us get to this point in time that we can make AraCon a reality.'
          )
        ),
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'p',
            null,
            'Not sure whether you\u2019re qualified for a Community ticket? These are the criteria:'
          ),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          Criteria,
          null,
          _react2.default.createElement(
            'li',
            null,
            'You are an Aragon Network Token holder'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You have contributed to the development of the Aragon Project'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You\u2019re actively participating in discussions on our official community chats (',
            _react2.default.createElement(
              'a',
              { href: 'https://aragon.chat', target: '_blank', rel: 'noopener noreferrer' },
              'https://aragon.chat'
            ),
            ' & ',
            _react2.default.createElement(
              'a',
              { href: 'https://research.aragon.org', target: '_blank', rel: 'noopener noreferrer' },
              'https://research.aragon.org'
            ),
            ')'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You have contributed in the creation of at least one Aragon Monthly issue'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You  organized an Aragon meetup or a similar event for the Aragon community, or presented Aragon at an external event'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You\u2019re building an Aragon app'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You\u2019re using Aragon to build your own DAO'
          )
        ),
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'p',
            null,
            'If you meet one of the criteria above, please email us with the proof at ',
            _react2.default.createElement(
              _ui.SafeLink,
              { href: 'mailto:info@aracon.org' },
              'info@aracon.org'
            ),
            ' and we will send you a registration link for a Community ticket.'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'span',
              { className: 'strong' },
              'If you are not a member of the Aragon community yet, we are excited to meet you soon. To get your ticket, please register below!'
            )
          ),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _ui.Button,
          { mode: 'strong' },
          _react2.default.createElement(
            _ui.SafeLink,
            { href: 'https://ti.to/aragon/aracon-2019', target: '_blank' },
            'Register here'
          )
        ),
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('br', null),
            'Need financial help attending AraCon?',
            _react2.default.createElement('br', null),
            'We will be announcing a scholarship program in October to provide financial assistance for those in need.',
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'a',
              { href: 'https://eepurl.com/dHogTD', target: '_blank', rel: 'noopener noreferrer' },
              'Subscribe to the AraCon email newsletter'
            ),
            ' to stay tuned for details'
          )
        )
      )
    )
  );
};

exports.default = Registration;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n'], ['\n  width: 100%;\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: auto;\n  max-width: 695px;\n  padding: 50px 0 50px 8.5%;\n  text-align: left;\n  ', ';\n'], ['\n  width: 100%;\n  margin: auto;\n  max-width: 695px;\n  padding: 50px 0 50px 8.5%;\n  text-align: left;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Forms = __webpack_require__(7);

var _Forms2 = _interopRequireDefault(_Forms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var OuterContainer = _styledComponents2.default.div(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2, large('position: absolute; width: 41%; margin: inherit'));

var Volunteer = function Volunteer() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/volunteer' },
    _react2.default.createElement(
      _Section2.default,
      { className: 'light all-page' },
      _react2.default.createElement(
        OuterContainer,
        null,
        _react2.default.createElement(
          Container,
          null,
          _react2.default.createElement(
            _ui.Text,
            null,
            _react2.default.createElement(
              'div',
              { className: 'h1box' },
              _react2.default.createElement(
                'h1',
                null,
                'Volunteer'
              )
            )
          ),
          _react2.default.createElement(
            _ui.Text,
            { size: 'xlarge' },
            _react2.default.createElement(
              'h3',
              null,
              'Volunteering at AraCon is a surefire way of making new connections and learning new skills, as well as experiencing the magic of Aragon\u2019s flagship conference from an insider\u2019s perspective.'
            )
          ),
          _react2.default.createElement(
            _ui.Text,
            null,
            _react2.default.createElement(
              'p',
              null,
              'AraCon is looking for volunteers who are interested in getting some behind the scenes experience putting on one of the most iconic crypto events of the year. You could be assigned to do a number of various tasks that will ensure our guests and presenters have an exceptional experience.'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              'In exchange for your help, we\u2019ll provide you with a free ticket to attend the event. '
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              'If you\u2019re interested in volunteering at AraCon 2019, please fill out the form and someone from our team will be in touch with you shortly.'
            )
          ),
          _react2.default.createElement('br', null)
        )
      ),
      _react2.default.createElement(_Forms2.default, { type: 'speakers', src: 'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaMTwCxvLp_2BTsBh0bYRiVb2M.js' })
    )
  );
};

exports.default = Volunteer;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n'], ['\n  width: 100%;\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: auto;\n  max-width: 695px;\n  padding: 50px 0 50px 8.5%;\n  text-align: left;\n  ', ';\n'], ['\n  width: 100%;\n  margin: auto;\n  max-width: 695px;\n  padding: 50px 0 50px 8.5%;\n  text-align: left;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Forms = __webpack_require__(7);

var _Forms2 = _interopRequireDefault(_Forms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var OuterContainer = _styledComponents2.default.div(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2, large('position: absolute; width: 41%; margin: inherit'));

var Contact = function Contact() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/contact' },
    _react2.default.createElement(
      _Section2.default,
      { className: 'dark all-page' },
      _react2.default.createElement(
        OuterContainer,
        null,
        _react2.default.createElement(
          Container,
          null,
          _react2.default.createElement(
            _ui.Text,
            null,
            _react2.default.createElement(
              'div',
              { className: 'h1box' },
              _react2.default.createElement(
                'h1',
                null,
                'Contact'
              )
            )
          ),
          _react2.default.createElement(
            _ui.Text,
            null,
            _react2.default.createElement(
              'p',
              null,
              'If you have any questions, ideas or suggestions, please contact us through the form. Someone from our team will be in touch with you shortly'
            )
          ),
          _react2.default.createElement('br', null)
        )
      ),
      _react2.default.createElement(_Forms2.default, { type: 'speakers', src: 'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2BApu8f_2FfoD5Zo9JBww_2F0hZmrCyRG1IqSpVmZcBTG0GC.js' })
    )
  );
};

exports.default = Contact;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 80px 8.5%;\n  background: white;\n  text-align: left;\n  h2 {\n    text-transform: uppercase;\n    color: rgb(0, 203, 230);\n    font-weight: 600;\n    font-size: 24px;\n    margin-bottom: 5px;\n  }\n  p {\n    margin-bottom: 30px;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 80px 8.5%;\n  background: white;\n  text-align: left;\n  h2 {\n    text-transform: uppercase;\n    color: rgb(0, 203, 230);\n    font-weight: 600;\n    font-size: 24px;\n    margin-bottom: 5px;\n  }\n  p {\n    margin-bottom: 30px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n'], ['\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _Question = __webpack_require__(94);

var _Question2 = _interopRequireDefault(_Question);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FaqBox = _styledComponents2.default.div(_templateObject);
var Container = _styledComponents2.default.div(_templateObject2);

var Faq = function Faq() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/faq' },
    _react2.default.createElement(
      _Section2.default,
      null,
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'div',
            { className: 'h1box' },
            _react2.default.createElement(
              'h1',
              null,
              'FAQ'
            )
          )
        ),
        _react2.default.createElement(
          FaqBox,
          null,
          _react2.default.createElement(_Question2.default, { question: 'What is AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'AraCon is the flagship event of the Aragon Project. It is organised by the Aragon Foundation for the Aragon community and anyone interested in the decentralized web, governance, DAOs, and digital jurisdictions.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'When and where is AraCon happening?', answer: _react2.default.createElement(
              'p',
              null,
              'AraCon is taking place on 29th-30th January 2019, at ',
              _react2.default.createElement(
                'a',
                { href: 'https://www.google.com/maps/place/BOLLE+Fests%C3%A4le/@52.52478,13.34647,15z/data=!4m2!3m1!1s0x0:0xecf15562de88eae5?sa=X&ved=2ahUKEwiJ_q-m99rcAhVBY1AKHW_0C2UQ_BIwDnoECAsQCw', target: '_blank', rel: 'noopener noreferrer' },
                'Bolle Fests\xE4le'
              ),
              ' in Berlin, Germany.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Why should I attend AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'AraCon will be the best place for you to get a great understanding of Web 3.0 and Aragon. You will discover the latest developments and glimpses of what\'s to come from our carefully planned program. Every speaker is passionate and deeply involved in creating this decentralized future.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'The event has four distinctive themes which we\'ll cover:',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'li',
                null,
                'Aragon'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Web 3.0 / Ethereum'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Decentralized Governance'
              ),
              _react2.default.createElement(
                'li',
                null,
                'DAOs'
              )
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'What makes AraCon different from other Blockchain events?', answer: _react2.default.createElement(
              'p',
              null,
              'We aren\'t trying to cover all possible elements of blockchain technology or cryptocurrencies. We are focusing on what we know and see as fundamental pieces of this nascent technology and future.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'By concentrating on a few themes, we can provide much deeper and thorough presentations on these topics.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'This space is full of great minds who can eloquently express the shared vision we all have of a better future. Together with concrete lessons on how this technology is being built, the conference will provide you with a great overview of the decentralized web. Our goal for the event is that every attendee can feel and share the enthusiasm and excitement we have.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'Come for the content, stay for the community.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Who will be speaking at AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'There will be over 30 speakers, you can view all confirmed speakers ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/speakers' },
                'here'
              ),
              '. We\u2019ll be adding more speakers to the list soon. Speakers come from a variety of backgrounds and projects/companies like ',
              _react2.default.createElement(
                'a',
                { href: 'https://0xproject.com/', target: '_blank', rel: 'noopener noreferrer' },
                '0x'
              ),
              ', ',
              _react2.default.createElement(
                'a',
                { href: 'https://consensys.net', target: '_blank', rel: 'noopener noreferrer' },
                'ConsenSys'
              ),
              ', ',
              _react2.default.createElement(
                'a',
                { href: 'https://district0x.io/', target: '_blank', rel: 'noopener noreferrer' },
                'district0x'
              ),
              ', ',
              _react2.default.createElement(
                'a',
                { href: 'https://giveth.io/', target: '_blank', rel: 'noopener noreferrer' },
                'Giveth'
              ),
              ', ',
              _react2.default.createElement(
                'a',
                { href: 'https://gnosis.pm/', target: '_blank', rel: 'noopener noreferrer' },
                'Gnosis'
              ),
              ' & ',
              _react2.default.createElement(
                'a',
                { href: 'https://www.parity.io/', target: '_blank', rel: 'noopener noreferrer' },
                'Parity'
              ),
              ' among others.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Where can I find the conference agenda for AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'You can view the conference agenda ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/agenda' },
                'here'
              ),
              ' soon. Final agenda will be published some weeks before the event.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How do I get to AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'You can plan your route to AraCon by visiting the ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/travelinformation' },
                'Travel Information page'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Where can I stay during my visit to AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'Our official hotel partner is Hotel Abion. If the official hotel gets booked out or you prefer to stay somewhere else, ',
              _react2.default.createElement(
                'a',
                { href: 'https://docs.google.com/document/d/1jDL6gBgGCi0g_i4y9Fb91EBV3dbsCB0FMWlFrXcsBsc/edit?usp=sharing', target: '_blank', rel: 'noopener noreferrer' },
                'here\u2019s the list of hotels in the area'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How do I register for AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'To learn more about registration process and fees, check out the ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/registration' },
                'Registration page'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'What do I need to bring with me to AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'All you need to bring is your ticket confirmation and lots of positive vibes.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Can my company exhibit or speak at AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'There will be no exhibition areas available. If you\u2019d like to speak at AraCon, please submit your application ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/speakers/#speakers-form' },
                'here'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How can my company become an official partner of AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'If you wish your company partner with the conference, contribute in any way, or organise a satellite event, please send us your proposal at ',
              _react2.default.createElement(
                'a',
                { href: 'mailto:info@aracon.org' },
                'info@aracon.org'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How can I contact the AraCon team?', answer: _react2.default.createElement(
              'p',
              null,
              'You can contact the team via email ',
              _react2.default.createElement(
                'a',
                { href: 'mailto:info@aracon.org' },
                'info@aracon.org'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How can I follow AraCon on social media?', answer: _react2.default.createElement(
              'p',
              null,
              'You can follow news and updates on AraCon on Twitter via ',
              _react2.default.createElement(
                'a',
                { href: 'https://twitter.com/AragonProject', target: '_blank', rel: 'noopener noreferrer' },
                '@AragonProject'
              ),
              ' and the official hashtag ',
              _react2.default.createElement(
                'a',
                { href: 'https://twitter.com/hashtag/AraConOne', target: '_blank', rel: 'noopener noreferrer' },
                '#AraConOne'
              ),
              '.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'You can also ',
              _react2.default.createElement(
                'a',
                { href: 'https://eepurl.com/dHogTD', target: '_blank', rel: 'noopener noreferrer' },
                'subscribe to the AraCon email newsletter here'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Will there be catering provided at AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'There will be a catering area at the event for all your refreshment and lunch needs, and dinner on the first day of the event.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Is there a dress code at AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'There is no official dress code at AraCon. Our only requirement is that you are comfortable and your attire adheres to the ',
              _react2.default.createElement(
                'a',
                { href: 'https://wiki.aragon.org/documentation/Code_of_Conduct/', target: '_blank', rel: 'noopener noreferrer' },
                'Code of Conduct'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Can I volunteer at AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'Yes, we are looking for volunteers to help with different tasks during the conference. By volunteering at AraCon you can gain some event experience and grow your network in the crypto world. To apply to volunteer please ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/volunteer' },
                'fill out this form'
              ),
              '.'
            ) })
        )
      )
    )
  );
};

exports.default = Faq;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .text {\n    width: 100%;\n    padding-left: 0;\n    ', ';\n  }\n  .image {\n    width: 100%;\n    ', ';\n    img {\n      width: 100%;\n    }\n  }\n  p, h2 {\n    color: #18181A;\n    text-align: center;\n    ', ';\n    margin-bottom: 30px;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .text {\n    width: 100%;\n    padding-left: 0;\n    ', ';\n  }\n  .image {\n    width: 100%;\n    ', ';\n    img {\n      width: 100%;\n    }\n  }\n  p, h2 {\n    color: #18181A;\n    text-align: center;\n    ', ';\n    margin-bottom: 30px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  ', ';\n'], ['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border-right: solid 100vw transparent;\n  border-top: 15vh solid #1d1d2a;\n  margin-top: -1px;\n  background-color: transparent;\n  z-index: 5;\n  position:relative;\n'], ['\n  border-right: solid 100vw transparent;\n  border-top: 15vh solid #1d1d2a;\n  margin-top: -1px;\n  background-color: transparent;\n  z-index: 5;\n  position:relative;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _Map = __webpack_require__(95);

var _Map2 = _interopRequireDefault(_Map);

var _Venue = __webpack_require__(98);

var _Venue2 = _interopRequireDefault(_Venue);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _accomodation = __webpack_require__(100);

var _accomodation2 = _interopRequireDefault(_accomodation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var AccomodationBox = _styledComponents2.default.div(_templateObject, medium('width: 50%; padding-left: 40px;'), medium('width: 50%;'), medium('text-align: left;'));

var Content = _styledComponents2.default.div(_templateObject2, medium('flex-direction: row;'));

var AccomodationTriangle = _styledComponents2.default.div(_templateObject3);

var Travel = function Travel() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/travelinformation' },
    _react2.default.createElement(_Venue2.default, null),
    _react2.default.createElement(_Map2.default, null),
    _react2.default.createElement(
      _Section2.default,
      null,
      _react2.default.createElement(
        AccomodationBox,
        null,
        _react2.default.createElement(
          'div',
          { className: 'h1box xs-centered' },
          _react2.default.createElement(
            'h1',
            null,
            'Accomodation'
          )
        ),
        _react2.default.createElement(
          Content,
          null,
          _react2.default.createElement(
            'div',
            { className: 'image' },
            _react2.default.createElement('img', { src: _accomodation2.default, alt: '' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'text' },
            _react2.default.createElement(
              _ui.Text,
              { size: 'xlarge' },
              _react2.default.createElement(
                'h2',
                null,
                'AMERON Berlin ABION Hotel'
              )
            ),
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'p',
                null,
                'Alt-Moabit 98, 10559, Berlin, Germany'
              )
            ),
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'p',
                null,
                'We have a special deal for AraCon guests with AMERON Berlin ABION Hotel, which is located just 100m away from the venue. ABION Hotel has a unique, direct view of the River Spree and a superb location at the heart of the capital city between the West Centre (Ku\u2019damm) and the East Centre (Alexanderplatz). You can book your stay by clicking on the button below.'
              )
            ),
            _react2.default.createElement(
              _ui.Button,
              { mode: 'strong' },
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://reservations.travelclick.com/12121?groupID=2378658', target: '_blank' },
                'Book your stay'
              )
            ),
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement('br', null),
                'Prices are \u20AC109 for a single room and \u20AC119 for a double room per night, breakfast included. All rooms are subject to availability. Special price is valid for all bookings before January 13th 2019.'
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Travel;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(20);

var _locate = __webpack_require__(96);

var _locate2 = _interopRequireDefault(_locate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapStyles = [{
  "featureType": "all",
  "elementType": "geometry",
  "stylers": [{ "color": "#363745" }]
}, {
  "featureType": "all",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#746855" }]
}, {
  "featureType": "all",
  "elementType": "labels.text.stroke",
  "stylers": [{ "color": "#363745" }]
}, {
  "featureType": "administrative",
  "elementType": "geometry.fill",
  "stylers": [{ "color": "#363745" }]
}, {
  "featureType": "administrative.locality",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#d59563" }, { "visibility": "off" }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "landscape.man_made",
  "elementType": "geometry.stroke",
  "stylers": [{ "color": "#808000" }, { "saturation": 100 }]
}, {
  "featureType": "landscape.man_made",
  "elementType": "labels.text.fill",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "poi",
  "elementType": "all",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "poi",
  "elementType": "labels.text",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#d59563" }, { "visibility": "off" }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{ "color": "#263c3f" }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#6b9a76" }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{ "color": "#555460" }]
}, {
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": [{ "color": "#555460" }]
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#9ca5b3" }]
}, {
  "featureType": "road",
  "elementType": "labels.icon",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{ "color": "#746855" }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{ "color": "#1f2835" }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#f3d19c" }]
}, {
  "featureType": "transit",
  "elementType": "geometry",
  "stylers": [{ "color": "#2f3948" }, { "visibility": "off" }]
}, {
  "featureType": "transit.station",
  "elementType": "all",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "transit.station",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#d59563" }, { "visibility": "off" }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{ "color": "#26232e" }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#515c6d" }]
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": [{ "color": "#17263c" }]
}];

var MapContainer = (0, _reactGoogleMaps.withScriptjs)((0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(
    _reactGoogleMaps.GoogleMap,
    {
      defaultZoom: 15,
      defaultCenter: { lat: 52.5248058, lng: 13.3459398 },
      options: { styles: MapStyles }
    },
    _react2.default.createElement(_reactGoogleMaps.Marker, { position: { lat: 52.5248058, lng: 13.3459398 }, icon: _locate2.default })
  );
}));

exports.default = MapContainer;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzYgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIzNC40NTU5ODcxJSIgeDI9IjEwMCUiIHkyPSI2OS45NzU3NjQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2QUFDRjQiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE4RUJENiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBUkFDT04iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MC4wMDAwMDAsIC0zMzQwLjAwMDAwMCkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAuMDAwMDAwLCAzMDU1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjg1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJkZXBhcnR1cmVzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM0LjcyODA3NDEsMi4wOTkzMjQxOCBDMzIuMjUzNDA3NCwwLjY1NTA0NjcwMyAyOS40NDE1NTU2LDEuNDIyMjQ3MjUgMjcuNTE4ODE0OCwyLjMyMDA3MTQzIEwyMS43ODcxMTExLDQuOTk2NDgzNTIgTDExLjkyOTMzMzMsMC4wMzE1OTg5MDExIEw2LjA1ODc0MDc0LDAuMjg0MTY3NTgyIEwxNC4xOTg5NjMsOC41NDc5NDc4IEw5LjAxMTE4NTE5LDExLjAxNTcwMzMgTDMuNjEzNzc3NzgsOC45NTg3MzM1MiBMMCwxMC42NDYwODUyIEwzLjI2NTg1MTg1LDE0LjcwNzEzNzQgQzIuOTIwODE0ODEsMTUuMTE5MzMyNCAyLjYwODE0ODE1LDE1LjY5OTY4NDEgMi44OTIsMTYuMzA5MjYxIEMzLjI2Mjc0MDc0LDE3LjEwNTMxNTkgNC4zNTg1MTg1MiwxNy41MDY1MzMgNi4xNTU5MjU5MywxNy41MDY0NTg4IEM2LjUyNDUxODUyLDE3LjUwNjQ1ODggNi45MjI2NjY2NywxNy40ODk2MjA5IDcuMzUsMTcuNDU1Nzk2NyBDOS4zMjMwMzcwNCwxNy4yOTk3MzA4IDExLjQ2MjE0ODEsMTYuNzk1NDA5MyAxMi43OTk3MDM3LDE2LjE3MDg0ODkgTDMzLjI4ODI5NjMsNi42MDM3MjUyNyBDMzUuMDU3OTI1OSw1Ljc3NzMzMjQyIDM1LjkzOTQwNzQsNC45MDk2MjM2MyAzNS45ODMxMTExLDMuOTUwODI2OTIgQzM2LjAwNTc3NzgsMy40NTM1NTIyIDM1LjgwNjQ0NDQsMi43Mjg0ODM1MiAzNC43MjgwNzQxLDIuMDk5MzI0MTggWiBNMzIuNjYyMDc0MSw1LjI1OTE0MDExIEwxMi4xNzM1NTU2LDE0LjgyNjMzNzkgQzExLjAzNCwxNS4zNTg0NzUzIDkuMTYzMTExMTEsMTUuODA0MzQ2MiA3LjQwNzI1OTI2LDE1Ljk2MjE5MjMgQzUuNjEyNTkyNTksMTYuMTIzNTI0NyA0LjY1MzAzNzA0LDE1LjkyMDk1MDUgNC4zMzMxODUxOSwxNS43NDg5MzY4IEM0LjM5OTAzNzA0LDE1LjY1ODY2NDggNC41MjIsMTUuNTE2ODQwNyA0Ljc0ODg4ODg5LDE1LjMxNjg2MjYgTDUuMjgxMDM3MDQsMTQuODQ3ODQ4OSBMMi4zMzk3MDM3LDExLjE5MDM4NzQgTDMuNjcyLDEwLjU2ODIwMDUgTDkuMDc1MTg1MTksMTIuNjI3NTQ0IEwxNi43MTczMzMzLDguOTkyMjYwOTkgTDkuNDU4MDc0MDcsMS42MjI3NDQ1MSBMMTEuNjA3Nzc3OCwxLjUzMDI0NzI1IEwyMS43NjI1MTg1LDYuNjQ0NTk2MTUgTDI4LjE0NDc0MDcsMy42NjQ1MDgyNCBDMzAuNDc1NjI5NiwyLjU3NjEyNjM3IDMyLjQzOTQ4MTUsMi40ODA4ODQ2MiAzMy45ODIsMy4zODA5MzQwNyBMMzMuOTgyMDc0MSwzLjM4MTAwODI0IEMzNC4zNzA3NDA3LDMuNjA3NzYzNzQgMzQuNTA2NTkyNiwzLjgwNTU5MDY2IDM0LjUwMzAzNywzLjg4MzE3ODU3IEMzNC41MDI4ODg5LDMuODg4NTE5MjMgMzQuNDU4MzcwNCw0LjQyMDUwODI0IDMyLjY2MjA3NDEsNS4yNTkxNDAxMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzQgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5idXM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTEzLjU3OTk2MyUiIHkyPSI1MCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZBQUNGNCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMThFQkQ2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFSQUNPTiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkxLjAwMDAwMCwgLTM0NzUuMDAwMDAwKSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MC4wMDAwMDAsIDMwNTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iYnVzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgNDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNCw4LjQxNjA1OTc2IEMzNCwzLjc3NTQ1ODkyIDMwLjI4MTAzNzUsMCAyNS43MDk4NzkyLDAgTDQuOTY3MjU4MzMsMCBDMi4yMjgyNzUsMS4wMjE4OTM5NWUtMTUgMCwyLjI2MjE5NzYzIDAsNS4wNDI3OTAwOCBMMCwxNS40MTk1MzE0IEwzLjgxMTU0MTY3LDE1LjQxOTUzMTQgQzQuMTM1ODE2NjcsMTYuODk0MTA1NCA1LjQzNDE5MTY3LDE4IDYuOTgzMDMzMzMsMTggQzguNTMxODc1LDE4IDkuODMwMzIwODMsMTYuODk0MTA1NCAxMC4xNTQ1OTU4LDE1LjQxOTUzMTQgTDI0LjAzNjAxNjcsMTUuNDE5NTMxNCBDMjQuMzYwMjkxNywxNi44OTQxMDU0IDI1LjY1ODY2NjcsMTggMjcuMjA3NTA4MywxOCBDMjguNzU2MzUsMTggMzAuMDU0NzI1LDE2Ljg5NDEwNTQgMzAuMzc5LDE1LjQxOTUzMTQgTDM0LDE1LjQxOTUzMTQgTDM0LDguNDE2MDU5NzYgWiBNMzIuMjg5OCw2LjM5Nzc3ODggTDI4LjU2OTQyMDgsNi4zOTc3Nzg4IEwyOC41Njk0MjA4LDIuMDcxNDIyMDEgQzMwLjM0NTU2NjcsMi44OTk2NzQ0MSAzMS43MTYyNjI1LDQuNDc0NDkwMTQgMzIuMjg5OCw2LjM5Nzc3ODggWiBNMjcuMTUyNzU0MiwxLjU5MzI5NjQ1IEwyNy4xNTI3NTQyLDYuMzk3NzA2ODkgTDIzLjEzODkxMjUsNi4zOTc3MDY4OSBMMjMuMTM4OTEyNSwxLjQzODExNTk3IEwyNS43MDk4NzkyLDEuNDM4MTE1OTcgQzI2LjIwNDcyMDgsMS40MzgxODc4OCAyNi42ODczMDgzLDEuNDkxOTc2MTEgMjcuMTUyNzU0MiwxLjU5MzI5NjQ1IFogTTYuODQ3MjQ1ODMsNi4zOTc3Nzg4IEw2Ljg0NzI0NTgzLDEuNDM4MTg3ODggTDEwLjg2MTE1ODMsMS40MzgxODc4OCBMMTAuODYxMTU4Myw2LjM5Nzc3ODggTDYuODQ3MjQ1ODMsNi4zOTc3Nzg4IFogTTEyLjI3Nzc1NDIsMS40MzgxODc4OCBMMTYuMjkxNjY2NywxLjQzODE4Nzg4IEwxNi4yOTE2NjY3LDYuMzk3Nzc4OCBMMTIuMjc3NzU0Miw2LjM5Nzc3ODggTDEyLjI3Nzc1NDIsMS40MzgxODc4OCBaIE0xNy43MDgzMzMzLDEuNDM4MTg3ODggTDIxLjcyMjI0NTgsMS40MzgxODc4OCBMMjEuNzIyMjQ1OCw2LjM5Nzc3ODggTDE3LjcwODMzMzMsNi4zOTc3Nzg4IEwxNy43MDgzMzMzLDEuNDM4MTg3ODggWiBNNC45NjcyNTgzMywxLjQzODE4Nzg4IEw1LjQzMDUwODMzLDEuNDM4MTg3ODggTDUuNDMwNTA4MzMsNi4zOTc3Nzg4IEwxLjQxNjY2NjY3LDYuMzk3Nzc4OCBMMS40MTY2NjY2Nyw1LjA0Mjc5MDA4IEMxLjQxNjY2NjY3LDMuMDU1MjE0NDMgMy4wMDk0OTU4MywxLjQzODE4Nzg4IDQuOTY3MjU4MzMsMS40MzgxODc4OCBaIE02Ljk4MzAzMzMzLDE2LjU2MTc0MDIgQzUuOTcyMDI5MTcsMTYuNTYxNzQwMiA1LjE0OTUxMjUsMTUuNzI2NzI4MyA1LjE0OTUxMjUsMTQuNzAwMzY1NSBDNS4xNDk1MTI1LDEzLjY3NDAwMjggNS45NzIwMjkxNywxMi44Mzg5MTkgNi45ODMwMzMzMywxMi44Mzg5MTkgQzcuOTk0MDM3NSwxMi44Mzg5MTkgOC44MTY1NTQxNywxMy42NzM5MzA4IDguODE2NTU0MTcsMTQuNzAwMzY1NSBDOC44MTY2MjUsMTUuNzI2NzI4MyA3Ljk5NDAzNzUsMTYuNTYxNzQwMiA2Ljk4MzAzMzMzLDE2LjU2MTc0MDIgWiBNNi45ODMwMzMzMywxMS40MDA4MDMgQzUuNDM0MTkxNjcsMTEuNDAwODAzIDQuMTM1NzQ1ODMsMTIuNTA2Njk3NiAzLjgxMTU0MTY3LDEzLjk4MTM0MzUgTDEuNDE2NjY2NjcsMTMuOTgxMzQzNSBMMS40MTY2NjY2Nyw3LjgzNTk2NjY4IEwyMS43MjIyNDU4LDcuODM1OTY2NjggTDIxLjcyMjI0NTgsMTMuOTgxMzQzNSBMMTAuMTU0NTk1OCwxMy45ODEzNDM1IEM5LjgzMDMyMDgzLDEyLjUwNjY5NzYgOC41MzE5NDU4MywxMS40MDA4MDMgNi45ODMwMzMzMywxMS40MDA4MDMgWiBNMjcuMjA3NTA4MywxNi41NjE3NDAyIEMyNi4xOTY1NzUsMTYuNTYxNzQwMiAyNS4zNzM5ODc1LDE1LjcyNjcyODMgMjUuMzczOTg3NSwxNC43MDAzNjU1IEMyNS4zNzM5ODc1LDEzLjY3NDAwMjggMjYuMTk2NTA0MiwxMi44Mzg5MTkgMjcuMjA3NTA4MywxMi44Mzg5MTkgQzI4LjIxODUxMjUsMTIuODM4OTE5IDI5LjA0MTAyOTIsMTMuNjczOTMwOCAyOS4wNDEwMjkyLDE0LjcwMDM2NTUgQzI5LjA0MTAyOTIsMTUuNzI2NzI4MyAyOC4yMTg1MTI1LDE2LjU2MTc0MDIgMjcuMjA3NTA4MywxNi41NjE3NDAyIFogTTMwLjM3OTA3MDgsMTMuOTgxMjcxNiBDMzAuMDU0Nzk1OCwxMi41MDY2MjU3IDI4Ljc1NjQyMDgsMTEuNDAwNzMxMSAyNy4yMDc1NzkyLDExLjQwMDczMTEgQzI1LjY1ODczNzUsMTEuNDAwNzMxMSAyNC4zNjAyOTE3LDEyLjUwNjYyNTcgMjQuMDM2MDg3NSwxMy45ODEyNzE2IEwyMy4xMzg5ODMzLDEzLjk4MTI3MTYgTDIzLjEzODk4MzMsNy44MzU4OTQ3NyBMMzIuNTU5NDYyNSw3LjgzNTg5NDc3IEMzMi41NzUwNDU4LDguMDI3MjQ1NjcgMzIuNTgzNDA0Miw4LjIyMDY4MTk0IDMyLjU4MzQwNDIsOC40MTU5ODc4NiBMMzIuNTgzNDA0Miw5LjgzMzYwOTY1IEwzMC41NjMzMDgzLDkuODMzNjA5NjUgTDMwLjU2MzMwODMsMTEuMjcxNzk3NSBMMzIuNTgzMzMzMywxMS4yNzE3OTc1IEwzMi41ODM0MDQyLDEzLjk4MTI3MTYgTDMwLjM3OTA3MDgsMTMuOTgxMjcxNiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: calc(100vh - 116px)!important;\n  h1 {\n    text-align: center;\n    margin-top: 30px;\n  }\n'], ['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: calc(100vh - 116px)!important;\n  h1 {\n    text-align: center;\n    margin-top: 30px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _live = __webpack_require__(101);

var _live2 = _interopRequireDefault(_live);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Container = _styledComponents2.default.div(_templateObject);

var Livestream = function (_React$Component) {
  _inherits(Livestream, _React$Component);

  function Livestream() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Livestream);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Livestream.__proto__ || Object.getPrototypeOf(Livestream)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: 'dayOne' }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Livestream, [{
    key: 'render',
    value: function render() {
      var active = this.state.active;

      return _react2.default.createElement(
        _components.Page,
        { path: '/livestream' },
        _react2.default.createElement(
          _Section2.default,
          { className: 'dark all-page' },
          _react2.default.createElement(
            Container,
            null,
            _react2.default.createElement('img', { src: _live2.default, alt: 'live' }),
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'div',
                { className: 'h1box' },
                _react2.default.createElement(
                  'h1',
                  null,
                  'Ops! we are not in live yet!'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Livestream;
}(_react2.default.Component);

exports.default = Livestream;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: left;\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: left;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var NotFound = function NotFound() {
  return _react2.default.createElement(
    _components.Page,
    null,
    _react2.default.createElement(
      _Section2.default,
      { className: 'all-page' },
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'div',
            { className: 'h1box' },
            _react2.default.createElement(
              'h1',
              null,
              'Page not found'
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'The page you are trying to access could not be found.'
        )
      )
    )
  );
};

exports.default = NotFound;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(37);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(38);

var _App = __webpack_require__(39);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _App2.default;


if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.hydrate(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  render(_App2.default);

  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _reactStaticRoutes = __webpack_require__(40);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(102);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(_reactStaticRoutes2.default, null)
  );
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(41);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(42);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(43);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(44);

var _reactUniversalComponent = __webpack_require__(45);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Speakers',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/pages/Speakers', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Speakers');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/pages/Speakers';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/SpeakersApplication',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 22)), (0, _importCss3.default)('src/pages/SpeakersApplication', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/SpeakersApplication');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return 'src/pages/SpeakersApplication';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Agenda',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23)), (0, _importCss3.default)('src/pages/Agenda', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Agenda');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return 'src/pages/Agenda';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Registration',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 26)), (0, _importCss3.default)('src/pages/Registration', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Registration');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return 'src/pages/Registration';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Volunteer',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 27)), (0, _importCss3.default)('src/pages/Volunteer', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Volunteer');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return 'src/pages/Volunteer';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Contact',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 28)), (0, _importCss3.default)('src/pages/Contact', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Contact');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return 'src/pages/Contact';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Faq',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 29)), (0, _importCss3.default)('src/pages/Faq', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Faq');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return 'src/pages/Faq';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Travel',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 30)), (0, _importCss3.default)('src/pages/Travel', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Travel');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return 'src/pages/Travel';
  }
}), universalOptions);
var t_9 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Livestream',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 34)), (0, _importCss3.default)('src/pages/Livestream', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Livestream');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return 'src/pages/Livestream';
  }
}), universalOptions);
var t_10 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/NotFound',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 35)), (0, _importCss3.default)('src/pages/NotFound', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/NotFound');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return 'src/pages/NotFound';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9, t_10];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 10

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(46);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(47);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(48);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(9);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 64px;\n  min-height: calc(100vh - 116px)!important;\n  \n  section.all-page {\n    min-height: calc(100vh - 116px)!important;\n  }\n  .dark {\n    background: #18181A;\n  }\n  .light {\n    background: #fafdfd;\n  }\n  .white {\n    background: white;\n  }\n'], ['\n  padding-top: 64px;\n  min-height: calc(100vh - 116px)!important;\n  \n  section.all-page {\n    min-height: calc(100vh - 116px)!important;\n  }\n  .dark {\n    background: #18181A;\n  }\n  .light {\n    background: #fafdfd;\n  }\n  .white {\n    background: white;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _Navbar = __webpack_require__(50);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = __webpack_require__(55);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Content = _styledComponents2.default.div(_templateObject);

var menuItems = [['/speakers', 'Speakers'], ['/agenda', 'Agenda'], ['/registration', 'Register'], ['/volunteer', 'Volunteer'], ['/contact', 'Contact'], ['/travelinformation', 'Travel Information'], ['/faq', 'FAQ']];

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          path = _props.path;

      var items = menuItems.map(function (item) {
        return [].concat(_toConsumableArray(item), [item[0] === path]);
      });

      return _react2.default.createElement(_reactStatic.SiteData, {
        render: function render(_ref) {
          var siteTitle = _ref.title;
          return _react2.default.createElement(_reactStatic.RouteData, {
            render: function render(_ref2) {
              var title = _ref2.title;
              return _react2.default.createElement(
                _ui.AragonApp,
                { publicUrl: '/aragon-ui/', className: 'app' },
                _react2.default.createElement(
                  _reactStatic.Head,
                  null,
                  _react2.default.createElement(
                    'title',
                    null,
                    title || siteTitle
                  )
                ),
                _react2.default.createElement(_Navbar2.default, { menuItems: items, path: path }),
                _react2.default.createElement(
                  Content,
                  null,
                  children
                ),
                _react2.default.createElement(_Footer2.default, { path: path })
              );
            }
          });
        }
      });
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = Page;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 64px;\n  background: #18181A;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  position: fixed; \n  z-index: 5;\n\n  &.scrolled{\n    background:red;\n  }\n  &.navbar-home.navbar-animation { \n    animation-name: navbar-animation;\n    animation-duration: 1s;\n    background-color: #18181A;\n  }\n\n  &.navbar-home.navbar-inverse-animation { \n    animation-name: navbar-inverse-animation;\n    animation-duration: 1s;\n    background-color: transparent;\n  }\n\n  @keyframes navbar-animation {\n    to {background-color: #18181A;}\n    from {background-color: transparent;}  \n  }\n\n  @keyframes navbar-inverse-animation {\n    to {background-color: transparent;}\n    from {background-color: #18181A;}\n  }\n  .brand {\n    display: flex;\n  }\n  .brand img {\n    height: 25px;\n  }\n  button a {\n    text-decoration: none;\n  }\n'], ['\n  width: 100%;\n  height: 64px;\n  background: #18181A;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  position: fixed; \n  z-index: 5;\n\n  &.scrolled{\n    background:red;\n  }\n  &.navbar-home.navbar-animation { \n    animation-name: navbar-animation;\n    animation-duration: 1s;\n    background-color: #18181A;\n  }\n\n  &.navbar-home.navbar-inverse-animation { \n    animation-name: navbar-inverse-animation;\n    animation-duration: 1s;\n    background-color: transparent;\n  }\n\n  @keyframes navbar-animation {\n    to {background-color: #18181A;}\n    from {background-color: transparent;}  \n  }\n\n  @keyframes navbar-inverse-animation {\n    to {background-color: transparent;}\n    from {background-color: #18181A;}\n  }\n  .brand {\n    display: flex;\n  }\n  .brand img {\n    height: 25px;\n  }\n  button a {\n    text-decoration: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: auto;\n  height: auto;\n  display: flex;\n  justify-content: flex-end;\n  ul {\n    display: flex;\n  }\n  button {\n    margin-left: 10px;\n  }\n'], ['\n  width: auto;\n  height: auto;\n  display: flex;\n  justify-content: flex-end;\n  ul {\n    display: flex;\n  }\n  button {\n    margin-left: 10px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(4);

var _ui = __webpack_require__(2);

var _MenuItem = __webpack_require__(51);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuPanel = __webpack_require__(52);

var _MenuPanel2 = _interopRequireDefault(_MenuPanel);

var _logo = __webpack_require__(54);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AraconNav = _styledComponents2.default.div(_templateObject);

var End = _styledComponents2.default.div(_templateObject2);

var renderMenuItemLink = function renderMenuItemLink(_ref) {
  var url = _ref.url,
      children = _ref.children;
  return url.startsWith('/') ? _react2.default.createElement(
    _reactStatic.Link,
    { to: url },
    _react2.default.createElement(
      _ui.Text,
      { size: 'xlarge' },
      children
    )
  ) : _react2.default.createElement(
    'a',
    { href: url, target: '_blank', rel: 'noopener noreferrer' },
    _react2.default.createElement(
      _ui.Text,
      { size: 'xlarge' },
      children
    )
  );
};

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref2, [this].concat(args))), _this), _this.scrollingAnimation = function () {
      var navbarElement = document.getElementById('navbar');

      if (document.documentElement.scrollTop > 150 || document.body.scrollTop > 150) {
        navbarElement.classList.add('navbar-animation');
        navbarElement.classList.remove('navbar-inverse-animation');
      } else {
        navbarElement.classList.remove('navbar-animation');
        navbarElement.classList.add('navbar-inverse-animation');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollingAnimation();
      var self = this;
      window.addEventListener('scroll', function () {
        self.scrollingAnimation();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          menuItems = _props.menuItems,
          path = _props.path;

      return _react2.default.createElement(
        AraconNav,
        { className: path === '/' ? 'navbar-home' : '', id: 'navbar' },
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/', className: 'brand' },
          _react2.default.createElement('img', { src: _logo2.default })
        ),
        _react2.default.createElement(
          End,
          null,
          _react2.default.createElement(
            _ui.BreakPoint,
            { from: 'large' },
            _react2.default.createElement(
              'ul',
              null,
              menuItems.map(function (item, i) {
                return _react2.default.createElement(_MenuItem2.default, {
                  key: i,
                  url: item[0],
                  label: item[1],
                  active: item[2],
                  renderLink: renderMenuItemLink
                });
              })
            )
          ),
          _react2.default.createElement(
            _ui.Button,
            { mode: 'strong' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/livestream' },
              'LIVE'
            )
          ),
          _react2.default.createElement(
            _ui.BreakPoint,
            { to: 'large' },
            _react2.default.createElement(_MenuPanel2.default, { items: menuItems, renderLink: renderMenuItemLink })
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: stretch;\n  white-space: nowrap;\n  > span {\n    display: flex;\n    align-items: center;\n    padding: 0 15px;\n    font-size: 15px;\n    color: ', ';\n  }\n  a {\n    text-decoration: none;\n    padding: 0 10px;\n    span {\n      color: ', ';\n    }\n    span:hover {\n      color: ', ';\n    }\n  }\n  .active a {\n    span {\n      color: ', ';\n      border-bottom: 2px solid #63B1F1;}\n    }\n  }\n'], ['\n  display: flex;\n  align-items: stretch;\n  white-space: nowrap;\n  > span {\n    display: flex;\n    align-items: center;\n    padding: 0 15px;\n    font-size: 15px;\n    color: ', ';\n  }\n  a {\n    text-decoration: none;\n    padding: 0 10px;\n    span {\n      color: ', ';\n    }\n    span:hover {\n      color: ', ';\n    }\n  }\n  .active a {\n    span {\n      color: ', ';\n      border-bottom: 2px solid #63B1F1;}\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MenuItem = function MenuItem(_ref) {
  var url = _ref.url,
      label = _ref.label,
      active = _ref.active,
      renderLink = _ref.renderLink;
  return _react2.default.createElement(
    StyledMenuItem,
    null,
    _react2.default.createElement(
      'span',
      { className: active ? 'active' : undefined },
      renderLink({ url: url, children: label })
    )
  );
};

var StyledMenuItem = _styledComponents2.default.li(_templateObject, function (_ref2) {
  var active = _ref2.active;
  return active ? _ui.theme.positiveText : _ui.theme.textSecondary;
}, _ui.theme.textSecondary, _ui.theme.positiveText, _ui.theme.positiveText);

MenuItem.propTypes = {
  url: _propTypes2.default.string,
  label: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  renderLink: _propTypes2.default.func
};

MenuItem.defaultProps = {
  active: false,
  renderLink: function renderLink(_ref3) {
    var url = _ref3.url,
        children = _ref3.children;
    return _react2.default.createElement(
      'a',
      { href: url },
      children
    );
  }
};

exports.default = MenuItem;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  a {\n    padding: 10px 30px;\n    text-decoration: none;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  a {\n    padding: 10px 30px;\n    text-decoration: none;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(4);

var _ui = __webpack_require__(2);

var _menu = __webpack_require__(53);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Panel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Panel.__proto__ || Object.getPrototypeOf(Panel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      opened: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Panel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.items;
      var opened = this.state.opened;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _ui.Button,
          { mode: 'text', onClick: function onClick() {
              return _this2.setState({ opened: true });
            } },
          _react2.default.createElement('img', { src: _menu2.default })
        ),
        _react2.default.createElement(
          _ui.SidePanel,
          { title: '', opened: opened, onClose: function onClose() {
              return _this2.setState({ opened: false });
            } },
          _react2.default.createElement(
            Container,
            null,
            items.map(function (item, i) {
              return item[0].startsWith('/') ? _react2.default.createElement(
                _reactStatic.Link,
                { to: item[0], key: i },
                item[1]
              ) : _react2.default.createElement(
                'a',
                { href: item[0], key: i, target: '_blank', rel: 'noopener noreferrer' },
                item[1]
              );
            })
          )
        )
      );
    }
  }]);

  return Panel;
}(_react2.default.Component);

Panel.propTypes = {
  items: _propTypes2.default.array
};

exports.default = Panel;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Ik0yIDE5di0yLjM1MmgyMFYxOUgyem0wLTUuODUydi0yLjI5NmgyMHYyLjI5Nkgyek0yIDVoMjB2Mi4zNTJIMlY1eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg=="

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8e2003a4-logo.svg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n  padding: 50px 8.5%;\n  background-image: radial-gradient(circle at 51% 42%, #201f2f, #100e18);\n  text-align: center;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  ', ';\n'], ['\n  width: 100%;\n  height: auto;\n  padding: 50px 8.5%;\n  background-image: radial-gradient(circle at 51% 42%, #201f2f, #100e18);\n  text-align: center;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  margin-top: 20px;\n  ', ';\n  ', ';\n  a {\n    margin: 0 10px;\n    opacity: 0.38;\n    font-size: 17px;\n    color: #ffffff;\n    font-weight: 600;\n    text-decoration: none;\n  }\n  a:hover {\n    opacity: 1;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  margin-top: 20px;\n  ', ';\n  ', ';\n  a {\n    margin: 0 10px;\n    opacity: 0.38;\n    font-size: 17px;\n    color: #ffffff;\n    font-weight: 600;\n    text-decoration: none;\n  }\n  a:hover {\n    opacity: 1;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  max-width: 100%;\n  width: 360px;\n  margin: auto;\n  ', ';\n  \n'], ['\n  max-width: 100%;\n  width: 360px;\n  margin: auto;\n  ', ';\n  \n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _footer = __webpack_require__(56);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Box = _styledComponents2.default.div(_templateObject, large('flex-direction: row;'));
var FooterLinks = _styledComponents2.default.div(_templateObject2, medium('flex-direction: row;'), large('margin: 0;'));

var FooterImg = _styledComponents2.default.img(_templateObject3, large('margin-left: 0;'));

var Footer = function Footer(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      Box,
      null,
      _react2.default.createElement(FooterImg, { src: _footer2.default, alt: 'Powered by Aragon' }),
      _react2.default.createElement(
        FooterLinks,
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://wiki.aragon.org/documentation/legal/Privacy_policy/', target: '_blank' },
          'Privacy policy'
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://wiki.aragon.org/documentation/legal/Terms_of_use_websites/', target: '_blank' },
          'Terms of use'
        ),
        _react2.default.createElement(
          'a',
          { href: ' https://wiki.aragon.org/documentation/Code_of_Conduct/', target: '_blank' },
          'Code of conduct'
        )
      )
    )
  );
};

exports.default = Footer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/58ec719b-footer.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 98vh;\n  ', ';\n  margin: 0;\n  padding: 50px 8.5%;\n  background-color: #18181A;\n  text-align: center;\n  background-image: url(', ');\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  margin-top: -64px;\n  h2 {\n    font-size: 18px;\n    ', ';\n    font-weight: 300;\n    line-height: 1.63;\n    letter-spacing: 5.6px;\n    color: #ffffff;\n  }\n  h2.sides {\n    ', ';\n    position: inherit;\n    top: 64vh;\n    letter-spacing: 1.6px;\n    opacity: 0.4;\n    margin-bottom: 0;\n  }\n  h2.right {\n    right: -66px;\n    ', ';\n    transform: rotate(0deg);\n  }\n  h2.left {\n    left: -66px;\n    ', ';\n    transform: rotate(0deg);\n  }\n'], ['\n  width: 100%;\n  height: 98vh;\n  ', ';\n  margin: 0;\n  padding: 50px 8.5%;\n  background-color: #18181A;\n  text-align: center;\n  background-image: url(', ');\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  margin-top: -64px;\n  h2 {\n    font-size: 18px;\n    ', ';\n    font-weight: 300;\n    line-height: 1.63;\n    letter-spacing: 5.6px;\n    color: #ffffff;\n  }\n  h2.sides {\n    ', ';\n    position: inherit;\n    top: 64vh;\n    letter-spacing: 1.6px;\n    opacity: 0.4;\n    margin-bottom: 0;\n  }\n  h2.right {\n    right: -66px;\n    ', ';\n    transform: rotate(0deg);\n  }\n  h2.left {\n    left: -66px;\n    ', ';\n    transform: rotate(0deg);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-right: solid 100vw transparent;\n  border-bottom: 15vh solid white;\n  margin-bottom: -1px;\n  background-color: transparent;\n  z-index: 1;\n  position: absolute;\n  width: 100vw;\n  left: 0;\n  bottom: 0;\n'], ['\n  border-right: solid 100vw transparent;\n  border-bottom: 15vh solid white;\n  margin-bottom: -1px;\n  background-color: transparent;\n  z-index: 1;\n  position: absolute;\n  width: 100vw;\n  left: 0;\n  bottom: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-top: 175px;\n  ', ';\n  max-width: 100%;\n'], ['\n  margin-top: 175px;\n  ', ';\n  max-width: 100%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _heroBackground = __webpack_require__(58);

var _heroBackground2 = _interopRequireDefault(_heroBackground);

var _logo = __webpack_require__(59);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var HeroBox = _styledComponents2.default.div(_templateObject, medium('min-height: 815px; height: calc(100vh + 64px + 60px);'), _heroBackground2.default, medium('font-size: 24px;'), medium('position: absolute; margin: inherit;'), medium('transform: rotate(90deg); margin-top: inherit;'), medium('transform: rotate(-90deg);'));

var HeroTriangle = _styledComponents2.default.div(_templateObject2);

var Logo = _styledComponents2.default.img(_templateObject3, medium('margin-top: 34vh;'));

var Hero = function Hero() {
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      HeroBox,
      null,
      _react2.default.createElement(Logo, { src: _logo2.default, alt: 'Aracon' }),
      _react2.default.createElement(
        'h2',
        null,
        'BUILDING ORGANIZATIONS & GOVERNANCE OF THE FUTURE'
      ),
      _react2.default.createElement(
        'h2',
        { className: 'sides right' },
        'Berlin, Germany'
      ),
      _react2.default.createElement(
        'h2',
        { className: 'sides left' },
        'Jan 29-30.2019'
      ),
      _react2.default.createElement(HeroTriangle, null)
    )
  );
};

exports.default = Hero;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/6ba2c386-hero-background.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8e2003a4-logo.svg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  p {\n    max-width: 750px;\n    margin: auto;\n    text-align: justify;\n  }\n  .about_italic {\n    text-align: center;\n    font-style: italic;\n  }\n  .about_bold {\n    color: #000;\n    font-weight: bold;\n  }\n  iframe {\n    max-width: 100%;\n    border: transparent;\n    height: auto;\n    width: 740px;\n    height: 269px;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  p {\n    max-width: 750px;\n    margin: auto;\n    text-align: justify;\n  }\n  .about_italic {\n    text-align: center;\n    font-style: italic;\n  }\n  .about_bold {\n    color: #000;\n    font-weight: bold;\n  }\n  iframe {\n    max-width: 100%;\n    border: transparent;\n    height: auto;\n    width: 740px;\n    height: 269px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var About = function About() {
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        _ui.Text,
        null,
        _react2.default.createElement(
          'div',
          { className: 'h1box centered' },
          _react2.default.createElement(
            'h1',
            null,
            'About AraCon'
          )
        )
      ),
      _react2.default.createElement(
        _ui.Text,
        null,
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'a',
            { href: 'https://twitter.com/hashtag/AraConOne', target: '_blank', rel: 'noopener noreferrer' },
            '#AraConOne'
          ),
          ' will bring together people who embody and wish to shape the Aragon community. Those who are building and supporting the pseudonymous, secure, trustless future \u2014 the decentralized web. Decentralized governance and DAOs are at the heart of the new Web 3.0.  They are key components in moving towards a more fair and open world for everyone. We want to offer a place for the great minds in this field to share their thoughts and understanding for this paradigm shift.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          null,
          'By concentrating on a few themes, we can provide much deeper and thorough presentations on these topics.'
        ),
        '\u200B        ',
        _react2.default.createElement(
          'p',
          { className: 'about_italic' },
          'Discover the emergence of new types of organizations with DAOs.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          { className: 'about_italic' },
          'Grasp what makes decentralized governance so relevant to the Web3.0.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          { className: 'about_italic' },
          'Understand how Ethereum is making the decentralized web a reality.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          { className: 'about_italic' },
          'See how Aragon is bringing about freedom for all with these revolutionary advancements.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          { className: 'about_bold' },
          'We invite everyone to come be a part of this growing movement and learn more about how we can build this future together!'
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement('iframe', { src: 'https://www.youtube-nocookie.com/embed/AqjIWmiAidw?rel=0', allow: 'encrypted-media', frameBorder: '0' })
    )
  );
};

exports.default = About;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .h1box {\n    max-width: 1195px;\n    margin: auto;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .h1box {\n    max-width: 1195px;\n    margin: auto;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 1195px;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  a, button {\n    color: #63B1F1;   \n    font-size: 19px;  \n    line-height: 27px;\n  }\n'], ['\n  width: 100%;\n  max-width: 1195px;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  a, button {\n    color: #63B1F1;   \n    font-size: 19px;  \n    line-height: 27px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _reactStatic = __webpack_require__(4);

var _Speaker = __webpack_require__(62);

var _Speaker2 = _interopRequireDefault(_Speaker);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SpeakersBox = _styledComponents2.default.div(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2);

var Speakers = function Speakers() {
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      SpeakersBox,
      null,
      _react2.default.createElement(
        'div',
        { className: 'h1box' },
        _react2.default.createElement(
          'h1',
          null,
          'Speakers'
        )
      ),
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(_Speaker2.default, { photo: 'Luis Cuende', linkTo: 'luis', name: 'Luis Cuende', position: 'CEO', company: 'Aragon One' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'Primavera De Filippi', linkTo: 'primavera', name: 'Primavera De Filippi', position: 'Postdoctoral researcher', company: 'CNRS' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'Martin Koppelmann', linkTo: 'martin', name: 'Martin K\xF6ppelmann', position: 'Co-Founder', company: 'Gnosis' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'Jutta Steiner', linkTo: 'jutta', name: 'Jutta Steiner', position: 'Co-Founder', company: 'Parity Technologies' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'Maria Gomez', linkTo: 'maria', name: 'Mar\xEDa G\xF3mez', position: 'Ecosystem Development', company: 'Aragon One' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'Joe Urgo', linkTo: 'joe', name: 'Joe Urgo', position: 'Co-Founder', company: 'District0x' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'Raine Revere', linkTo: 'raine', name: 'Raine Revere', position: 'Co-founder', company: 'Maiden' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'Griff Green', linkTo: 'griff', name: 'Griff Green', position: 'Co-founder', company: 'Giveth & Aragon DAC' })
      ),
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          _ui.Button,
          null,
          'More speakers coming soon'
        )
      )
    )
  );
};

exports.default = Speakers;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 12px;\n  p {\n    text-transform: uppercase;\n    color: #4BC5E8;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 25px;\n  }\n  h6 {\n    text-transform: uppercase;\n    color: #45494D; \n    font-size: 13px;  \n    font-weight: 600; \n    line-height: 22px;\n  }\n'], ['\n  margin-top: 12px;\n  p {\n    text-transform: uppercase;\n    color: #4BC5E8;\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 25px;\n  }\n  h6 {\n    text-transform: uppercase;\n    color: #45494D; \n    font-size: 13px;  \n    font-weight: 600; \n    line-height: 22px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  overflow: hidden;\n'], ['\n  width: 100%;\n  overflow: hidden;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: opacity 1s ease-in-out;\n  -moz-transition: opacity 1s ease-in-out;\n  -o-transition: opacity 1s ease-in-out;\n  transition: opacity 1s ease-in-out;\n\n  &:hover {\n    opacity:0;\n  }\n'], ['\n  width: 100%;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: opacity 1s ease-in-out;\n  -moz-transition: opacity 1s ease-in-out;\n  -o-transition: opacity 1s ease-in-out;\n  transition: opacity 1s ease-in-out;\n\n  &:hover {\n    opacity:0;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  margin-bottom: 40px;\n  border-radius: 6px; \n  background: linear-gradient(184.81deg, #F5F6FB 0%, #FFFFFF 100%); \n  box-shadow: 8px 16px 16px 0 rgba(0,0,0,0.13);\n  position: relative;\n'], ['\n  margin-bottom: 40px;\n  border-radius: 6px; \n  background: linear-gradient(184.81deg, #F5F6FB 0%, #FFFFFF 100%); \n  box-shadow: 8px 16px 16px 0 rgba(0,0,0,0.13);\n  position: relative;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _ui = __webpack_require__(2);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextBox = _styledComponents2.default.div(_templateObject);

var Photo = _styledComponents2.default.img(_templateObject2);

var AbsolutePhoto = _styledComponents2.default.img(_templateObject3);

var SpeakerBox = _styledComponents2.default.div(_templateObject4);

var Speaker = function (_React$Component) {
  _inherits(Speaker, _React$Component);

  function Speaker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Speaker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Speaker.__proto__ || Object.getPrototypeOf(Speaker)).call.apply(_ref, [this].concat(args))), _this), _this.state = { picture: _this.props.photo + '_.png' }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Speaker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          position = _props.position,
          company = _props.company,
          photo = _props.photo,
          linkTo = _props.linkTo;
      var picture = this.state.picture;


      return _react2.default.createElement(
        SpeakerBox,
        null,
        _react2.default.createElement(
          _ui.Card,
          { onMouseEnter: function onMouseEnter() {
              return _this2.setState({ picture: photo + '.png' });
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.setState({ picture: photo + '_.png' });
            } },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/speakers#' + linkTo },
            _react2.default.createElement(Photo, { src: __webpack_require__(11)("./" + (this.props.photo + '.png')) }),
            _react2.default.createElement(AbsolutePhoto, { src: __webpack_require__(80)("./" + (this.props.photo + '_.png')) })
          ),
          _react2.default.createElement(
            TextBox,
            null,
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'p',
                null,
                name
              )
            ),
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'h6',
                null,
                position,
                ', ',
                company
              )
            )
          )
        )
      );
    }
  }]);

  return Speaker;
}(_react2.default.Component);

Speaker.propTypes = {
  name: _propTypes2.default.string,
  position: _propTypes2.default.string,
  company: _propTypes2.default.string
};

Speaker.defaultProps = {
  name: 'Name',
  position: 'Position',
  company: 'Company'
};

exports.default = Speaker;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/74dbe940-Aron Fischer.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/78b2ebb5-Griff Green.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/7158338e-Joe Urgo.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/40b09404-Jutta Steiner.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/c3d92e27-Lane Rettig.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/a19d0ce2-Luis Cuende.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9c33f481-Maria Gomez.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/affe7e46-Maria Paula Fernandez.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9f0d437d-Mario Laul.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/7b279094-Martin Koppelmann.png";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3ab30f4d-Matt Lockyer.png";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/341ef03d-Mike Goldin.png";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/945d6181-Primavera De Filippi.png";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ec13ea97-Raine Revere.png";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8f419ef3-Santiago Siri.png";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9157b66b-Shira Frank.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/aeb8031a-Trent McConaghy.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Griff Green_.png": 12,
	"./Joe Urgo_.png": 13,
	"./Jutta Steiner_.png": 14,
	"./Luis Cuende_.png": 15,
	"./Maria Gomez_.png": 16,
	"./Martin Koppelmann_.png": 17,
	"./Primavera De Filippi_.png": 18,
	"./Raine Revere_.png": 19
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 80;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0 0 -6px 0;;\n  background: white;\n  text-align: center;\n  .h1box {\n    margin: 0 8.5%;\n    padding: 50px 0 0 0;\n  }\n  img {\n    width: 100%;\n    margin-bottom: -1px;\n  }\n'], ['\n  width: 100%;\n  margin: 0 0 -6px 0;;\n  background: white;\n  text-align: center;\n  .h1box {\n    margin: 0 8.5%;\n    padding: 50px 0 0 0;\n  }\n  img {\n    width: 100%;\n    margin-bottom: -1px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _venue = __webpack_require__(82);

var _venue2 = _interopRequireDefault(_venue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VenueBox = _styledComponents2.default.div(_templateObject);

var Venue = function Venue() {
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      VenueBox,
      null,
      _react2.default.createElement(
        'div',
        { className: 'h1box' },
        _react2.default.createElement(
          'h1',
          null,
          'Venue'
        )
      ),
      _react2.default.createElement(
        _ui.SafeLink,
        { href: 'https://www.bolle-meierei.com/en/bollefestsaele/', target: '_blank' },
        _react2.default.createElement('img', { src: _venue2.default, alt: '' })
      )
    )
  );
};

exports.default = Venue;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/81d9dc43-venue.jpg";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: #1d1d2a;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  clip-path: polygon(\n    0 0, /* left top */\n    100% 0, /* right top */ \n    100% calc(100% - 6vw), /* right bottom */\n    0 100% /* left bottom */\n  );\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: #1d1d2a;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  clip-path: polygon(\n    0 0, /* left top */\n    100% 0, /* right top */ \n    100% calc(100% - 6vw), /* right bottom */\n    0 100% /* left bottom */\n  );\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: 50px;\n  text-align: left;\n  ', ';\n  ', '; \n  p, h2 {\n    color: white;\n    text-align: left;\n    margin-bottom: 20px;\n    &.strong {\n      font-weight: 700;\n    }\n  }\n'], ['\n  width: 100%;\n  padding: 50px;\n  text-align: left;\n  ', ';\n  ', '; \n  p, h2 {\n    color: white;\n    text-align: left;\n    margin-bottom: 20px;\n    &.strong {\n      font-weight: 700;\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  ', ';\n  ', ';\n'], ['\n  width: 100%;\n  ', ';\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _MapContainer = __webpack_require__(84);

var _MapContainer2 = _interopRequireDefault(_MapContainer);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(4);

var _ui = __webpack_require__(2);

var _plane = __webpack_require__(86);

var _plane2 = _interopRequireDefault(_plane);

var _bus = __webpack_require__(87);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Container = _styledComponents2.default.div(_templateObject, medium('flex-direction: row;'));

var TextBox = _styledComponents2.default.div(_templateObject2, medium('width: 50%; padding: 50px 50px 50px 8.5%;'), large('width: 40%; padding: 50px 50px 50px 8.5%;'));

var MapBox = _styledComponents2.default.div(_templateObject3, medium('width: 50%;'), large('width: 60%;'));

var Map = function Map() {
  return _react2.default.createElement(
    _Section2.default,
    { className: 'white' },
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        TextBox,
        null,
        _react2.default.createElement(
          _ui.SafeLink,
          { href: 'https://www.bolle-meierei.com/en/bollefestsaele/', target: '_blank' },
          _react2.default.createElement(
            'h2',
            null,
            'BOLLE Festsale'
          )
        ),
        _react2.default.createElement(
          _ui.SafeLink,
          { href: 'https://goo.gl/maps/m4ZDRLs9oDR2', target: '_blank' },
          _react2.default.createElement(
            'p',
            { className: 'strong' },
            'Alt-Moabit 98, 10559 Berlin, Germany'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'AraCon 2019 found its home in one of Berlin\'s most impressive event spaces. The landmarked brick building from the industrial era, formerly the Carl Bolle dairy factory, enjoys a central location in the heart of Berlin. The Hauptbahnhof railway station, the Tiergarten park and other city landmarks are within walking distance.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _ui.Button,
          { mode: 'strong' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/travelinformation' },
            'How to get there?'
          )
        )
      ),
      _react2.default.createElement(
        MapBox,
        null,
        _react2.default.createElement(_MapContainer2.default, {
          isMarkerShown: true,
          googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB_3Zo-VU8tXwUOgPJCQkGqgY7-eWQXzic&v=3.exp&libraries=geometry,drawing,places',
          loadingElement: _react2.default.createElement('div', { style: { height: '100%' } }),
          containerElement: _react2.default.createElement('div', { style: { height: '581px', width: '100%' } }),
          mapElement: _react2.default.createElement('div', { style: { height: '100%' } })
        })
      )
    )
  );
};

exports.default = Map;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(20);

var _locate = __webpack_require__(85);

var _locate2 = _interopRequireDefault(_locate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapStyles = [{
  "featureType": "all",
  "elementType": "geometry",
  "stylers": [{ "color": "#363745" }]
}, {
  "featureType": "all",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#746855" }]
}, {
  "featureType": "all",
  "elementType": "labels.text.stroke",
  "stylers": [{ "color": "#363745" }]
}, {
  "featureType": "administrative",
  "elementType": "geometry.fill",
  "stylers": [{ "color": "#363745" }]
}, {
  "featureType": "administrative.locality",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#d59563" }, { "visibility": "off" }]
}, {
  "featureType": "administrative.land_parcel",
  "elementType": "labels.text.fill",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "landscape.man_made",
  "elementType": "geometry.stroke",
  "stylers": [{ "color": "#808000" }, { "saturation": 100 }]
}, {
  "featureType": "landscape.man_made",
  "elementType": "labels.text.fill",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "poi",
  "elementType": "all",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "poi",
  "elementType": "labels.text",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#d59563" }, { "visibility": "off" }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{ "color": "#263c3f" }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#6b9a76" }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{ "color": "#555460" }]
}, {
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": [{ "color": "#555460" }]
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#9ca5b3" }]
}, {
  "featureType": "road",
  "elementType": "labels.icon",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{ "color": "#746855" }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{ "color": "#1f2835" }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#f3d19c" }]
}, {
  "featureType": "transit",
  "elementType": "geometry",
  "stylers": [{ "color": "#2f3948" }, { "visibility": "off" }]
}, {
  "featureType": "transit.station",
  "elementType": "all",
  "stylers": [{ "visibility": "off" }]
}, {
  "featureType": "transit.station",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#d59563" }, { "visibility": "off" }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{ "color": "#26232e" }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{ "color": "#515c6d" }]
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": [{ "color": "#17263c" }]
}];

var MapContainer = (0, _reactGoogleMaps.withScriptjs)((0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(
    _reactGoogleMaps.GoogleMap,
    {
      defaultZoom: 15,
      defaultCenter: { lat: 52.5248058, lng: 13.3459398 },
      options: {
        styles: MapStyles,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        }
      }
    },
    _react2.default.createElement(_reactGoogleMaps.Marker, { position: { lat: 52.5248058, lng: 13.3459398 }, icon: _locate2.default })
  );
}));

exports.default = MapContainer;

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgMzYgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iLTE3Ljg3MTA5MzglIiB5MT0iMTAwJSIgeDI9IjEyMi4wMTYwNTklIiB5Mj0iMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZBQUNGNCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMThFQkQ2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFSQUNPTiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk5MS4wMDAwMDAsIC0zMjU5LjAwMDAwMCkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkxLjAwMDAwMCwgMzI1OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJwbGFjZWhvbGRlciI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDAgQzguMDc0OCwwIDAsOC4yMDA5Njg3NSAwLDE4LjI4MTI1IEMwLDIxLjY4NzA0NjkgMC45Mjg5LDI1LjAxMDc4MTIgMi42ODY5LDI3Ljg5NDM0MzcgTDE2Ljk3NTQsNTEuMjc5ODIwMyBDMTcuMjQ5MSw1MS43Mjc4MTI1IDE3LjczMTMsNTIgMTguMjQ5OSw1MiBDMTguMjUzOSw1MiAxOC4yNTc4LDUyIDE4LjI2MTgsNTIgQzE4Ljc4NDksNTEuOTk1ODM1OSAxOS4yNjgxLDUxLjcxNTIxODcgMTkuNTM2OCw1MS4yNTk0MDYyIEwzMy40NjExLDI3LjY0NzM0MzcgQzM1LjEyMjEsMjQuODI0NzE4NyAzNiwyMS41ODU5OTIyIDM2LDE4LjI4MTI1IEMzNiw4LjIwMDk2ODc1IDI3LjkyNTIsMCAxOCwwIFogTTMwLjg4NjYsMjYuMDgzMDc4MSBMMTguMjI3Miw0Ny41NTAxNDA2IEw1LjIzNjcsMjYuMjg5MDQ2OSBDMy43NzM0LDIzLjg4ODkyMTkgMi45OCwyMS4xMTk5MjE5IDIuOTgsMTguMjgxMjUgQzIuOTgsOS44ODEwMTU2MiA5LjcyOSwzLjAyNjU2MjUgMTgsMy4wMjY1NjI1IEMyNi4yNzEsMy4wMjY1NjI1IDMzLjAxLDkuODgxMDE1NjIgMzMuMDEsMTguMjgxMjUgQzMzLjAxLDIxLjAzNTcyNjYgMzIuMjY4OSwyMy43MzM5Mzc1IDMwLjg4NjYsMjYuMDgzMDc4MSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDkuMTQwNjI1IEMxMy4wMzc0LDkuMTQwNjI1IDksMTMuMjQxMTA5NCA5LDE4LjI4MTI1IEM5LDIzLjI4OTE5NTMgMTIuOTcxNywyNy40MjE4NzUgMTgsMjcuNDIxODc1IEMyMy4wOTAzLDI3LjQyMTg3NSAyNywyMy4yMzQxNDg0IDI3LDE4LjI4MTI1IEMyNywxMy4yNDExMDk0IDIyLjk2MjYsOS4xNDA2MjUgMTgsOS4xNDA2MjUgWiBNMTgsMjQuMzk1MzEyNSBDMTQuNjc0MywyNC4zOTUzMTI1IDExLjk4LDIxLjY0OTc3MzQgMTEuOTgsMTguMjgxMjUgQzExLjk4LDE0LjkyMTE1NjIgMTQuNjkxNiwxMi4xNjcxODc1IDE4LDEyLjE2NzE4NzUgQzIxLjMwODQsMTIuMTY3MTg3NSAyNC4wMSwxNC45MjExNTYyIDI0LjAxLDE4LjI4MTI1IEMyNC4wMSwyMS42MDA2MTcyIDIxLjM3ODQsMjQuMzk1MzEyNSAxOCwyNC4zOTUzMTI1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzYgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIzNC40NTU5ODcxJSIgeDI9IjEwMCUiIHkyPSI2OS45NzU3NjQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2QUFDRjQiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE4RUJENiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBUkFDT04iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MC4wMDAwMDAsIC0zMzQwLjAwMDAwMCkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAuMDAwMDAwLCAzMDU1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjg1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJkZXBhcnR1cmVzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM0LjcyODA3NDEsMi4wOTkzMjQxOCBDMzIuMjUzNDA3NCwwLjY1NTA0NjcwMyAyOS40NDE1NTU2LDEuNDIyMjQ3MjUgMjcuNTE4ODE0OCwyLjMyMDA3MTQzIEwyMS43ODcxMTExLDQuOTk2NDgzNTIgTDExLjkyOTMzMzMsMC4wMzE1OTg5MDExIEw2LjA1ODc0MDc0LDAuMjg0MTY3NTgyIEwxNC4xOTg5NjMsOC41NDc5NDc4IEw5LjAxMTE4NTE5LDExLjAxNTcwMzMgTDMuNjEzNzc3NzgsOC45NTg3MzM1MiBMMCwxMC42NDYwODUyIEwzLjI2NTg1MTg1LDE0LjcwNzEzNzQgQzIuOTIwODE0ODEsMTUuMTE5MzMyNCAyLjYwODE0ODE1LDE1LjY5OTY4NDEgMi44OTIsMTYuMzA5MjYxIEMzLjI2Mjc0MDc0LDE3LjEwNTMxNTkgNC4zNTg1MTg1MiwxNy41MDY1MzMgNi4xNTU5MjU5MywxNy41MDY0NTg4IEM2LjUyNDUxODUyLDE3LjUwNjQ1ODggNi45MjI2NjY2NywxNy40ODk2MjA5IDcuMzUsMTcuNDU1Nzk2NyBDOS4zMjMwMzcwNCwxNy4yOTk3MzA4IDExLjQ2MjE0ODEsMTYuNzk1NDA5MyAxMi43OTk3MDM3LDE2LjE3MDg0ODkgTDMzLjI4ODI5NjMsNi42MDM3MjUyNyBDMzUuMDU3OTI1OSw1Ljc3NzMzMjQyIDM1LjkzOTQwNzQsNC45MDk2MjM2MyAzNS45ODMxMTExLDMuOTUwODI2OTIgQzM2LjAwNTc3NzgsMy40NTM1NTIyIDM1LjgwNjQ0NDQsMi43Mjg0ODM1MiAzNC43MjgwNzQxLDIuMDk5MzI0MTggWiBNMzIuNjYyMDc0MSw1LjI1OTE0MDExIEwxMi4xNzM1NTU2LDE0LjgyNjMzNzkgQzExLjAzNCwxNS4zNTg0NzUzIDkuMTYzMTExMTEsMTUuODA0MzQ2MiA3LjQwNzI1OTI2LDE1Ljk2MjE5MjMgQzUuNjEyNTkyNTksMTYuMTIzNTI0NyA0LjY1MzAzNzA0LDE1LjkyMDk1MDUgNC4zMzMxODUxOSwxNS43NDg5MzY4IEM0LjM5OTAzNzA0LDE1LjY1ODY2NDggNC41MjIsMTUuNTE2ODQwNyA0Ljc0ODg4ODg5LDE1LjMxNjg2MjYgTDUuMjgxMDM3MDQsMTQuODQ3ODQ4OSBMMi4zMzk3MDM3LDExLjE5MDM4NzQgTDMuNjcyLDEwLjU2ODIwMDUgTDkuMDc1MTg1MTksMTIuNjI3NTQ0IEwxNi43MTczMzMzLDguOTkyMjYwOTkgTDkuNDU4MDc0MDcsMS42MjI3NDQ1MSBMMTEuNjA3Nzc3OCwxLjUzMDI0NzI1IEwyMS43NjI1MTg1LDYuNjQ0NTk2MTUgTDI4LjE0NDc0MDcsMy42NjQ1MDgyNCBDMzAuNDc1NjI5NiwyLjU3NjEyNjM3IDMyLjQzOTQ4MTUsMi40ODA4ODQ2MiAzMy45ODIsMy4zODA5MzQwNyBMMzMuOTgyMDc0MSwzLjM4MTAwODI0IEMzNC4zNzA3NDA3LDMuNjA3NzYzNzQgMzQuNTA2NTkyNiwzLjgwNTU5MDY2IDM0LjUwMzAzNywzLjg4MzE3ODU3IEMzNC41MDI4ODg5LDMuODg4NTE5MjMgMzQuNDU4MzcwNCw0LjQyMDUwODI0IDMyLjY2MjA3NDEsNS4yNTkxNDAxMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzQgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5idXM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTEzLjU3OTk2MyUiIHkyPSI1MCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZBQUNGNCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMThFQkQ2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFSQUNPTiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkxLjAwMDAwMCwgLTM0NzUuMDAwMDAwKSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MC4wMDAwMDAsIDMwNTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iYnVzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgNDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNCw4LjQxNjA1OTc2IEMzNCwzLjc3NTQ1ODkyIDMwLjI4MTAzNzUsMCAyNS43MDk4NzkyLDAgTDQuOTY3MjU4MzMsMCBDMi4yMjgyNzUsMS4wMjE4OTM5NWUtMTUgMCwyLjI2MjE5NzYzIDAsNS4wNDI3OTAwOCBMMCwxNS40MTk1MzE0IEwzLjgxMTU0MTY3LDE1LjQxOTUzMTQgQzQuMTM1ODE2NjcsMTYuODk0MTA1NCA1LjQzNDE5MTY3LDE4IDYuOTgzMDMzMzMsMTggQzguNTMxODc1LDE4IDkuODMwMzIwODMsMTYuODk0MTA1NCAxMC4xNTQ1OTU4LDE1LjQxOTUzMTQgTDI0LjAzNjAxNjcsMTUuNDE5NTMxNCBDMjQuMzYwMjkxNywxNi44OTQxMDU0IDI1LjY1ODY2NjcsMTggMjcuMjA3NTA4MywxOCBDMjguNzU2MzUsMTggMzAuMDU0NzI1LDE2Ljg5NDEwNTQgMzAuMzc5LDE1LjQxOTUzMTQgTDM0LDE1LjQxOTUzMTQgTDM0LDguNDE2MDU5NzYgWiBNMzIuMjg5OCw2LjM5Nzc3ODggTDI4LjU2OTQyMDgsNi4zOTc3Nzg4IEwyOC41Njk0MjA4LDIuMDcxNDIyMDEgQzMwLjM0NTU2NjcsMi44OTk2NzQ0MSAzMS43MTYyNjI1LDQuNDc0NDkwMTQgMzIuMjg5OCw2LjM5Nzc3ODggWiBNMjcuMTUyNzU0MiwxLjU5MzI5NjQ1IEwyNy4xNTI3NTQyLDYuMzk3NzA2ODkgTDIzLjEzODkxMjUsNi4zOTc3MDY4OSBMMjMuMTM4OTEyNSwxLjQzODExNTk3IEwyNS43MDk4NzkyLDEuNDM4MTE1OTcgQzI2LjIwNDcyMDgsMS40MzgxODc4OCAyNi42ODczMDgzLDEuNDkxOTc2MTEgMjcuMTUyNzU0MiwxLjU5MzI5NjQ1IFogTTYuODQ3MjQ1ODMsNi4zOTc3Nzg4IEw2Ljg0NzI0NTgzLDEuNDM4MTg3ODggTDEwLjg2MTE1ODMsMS40MzgxODc4OCBMMTAuODYxMTU4Myw2LjM5Nzc3ODggTDYuODQ3MjQ1ODMsNi4zOTc3Nzg4IFogTTEyLjI3Nzc1NDIsMS40MzgxODc4OCBMMTYuMjkxNjY2NywxLjQzODE4Nzg4IEwxNi4yOTE2NjY3LDYuMzk3Nzc4OCBMMTIuMjc3NzU0Miw2LjM5Nzc3ODggTDEyLjI3Nzc1NDIsMS40MzgxODc4OCBaIE0xNy43MDgzMzMzLDEuNDM4MTg3ODggTDIxLjcyMjI0NTgsMS40MzgxODc4OCBMMjEuNzIyMjQ1OCw2LjM5Nzc3ODggTDE3LjcwODMzMzMsNi4zOTc3Nzg4IEwxNy43MDgzMzMzLDEuNDM4MTg3ODggWiBNNC45NjcyNTgzMywxLjQzODE4Nzg4IEw1LjQzMDUwODMzLDEuNDM4MTg3ODggTDUuNDMwNTA4MzMsNi4zOTc3Nzg4IEwxLjQxNjY2NjY3LDYuMzk3Nzc4OCBMMS40MTY2NjY2Nyw1LjA0Mjc5MDA4IEMxLjQxNjY2NjY3LDMuMDU1MjE0NDMgMy4wMDk0OTU4MywxLjQzODE4Nzg4IDQuOTY3MjU4MzMsMS40MzgxODc4OCBaIE02Ljk4MzAzMzMzLDE2LjU2MTc0MDIgQzUuOTcyMDI5MTcsMTYuNTYxNzQwMiA1LjE0OTUxMjUsMTUuNzI2NzI4MyA1LjE0OTUxMjUsMTQuNzAwMzY1NSBDNS4xNDk1MTI1LDEzLjY3NDAwMjggNS45NzIwMjkxNywxMi44Mzg5MTkgNi45ODMwMzMzMywxMi44Mzg5MTkgQzcuOTk0MDM3NSwxMi44Mzg5MTkgOC44MTY1NTQxNywxMy42NzM5MzA4IDguODE2NTU0MTcsMTQuNzAwMzY1NSBDOC44MTY2MjUsMTUuNzI2NzI4MyA3Ljk5NDAzNzUsMTYuNTYxNzQwMiA2Ljk4MzAzMzMzLDE2LjU2MTc0MDIgWiBNNi45ODMwMzMzMywxMS40MDA4MDMgQzUuNDM0MTkxNjcsMTEuNDAwODAzIDQuMTM1NzQ1ODMsMTIuNTA2Njk3NiAzLjgxMTU0MTY3LDEzLjk4MTM0MzUgTDEuNDE2NjY2NjcsMTMuOTgxMzQzNSBMMS40MTY2NjY2Nyw3LjgzNTk2NjY4IEwyMS43MjIyNDU4LDcuODM1OTY2NjggTDIxLjcyMjI0NTgsMTMuOTgxMzQzNSBMMTAuMTU0NTk1OCwxMy45ODEzNDM1IEM5LjgzMDMyMDgzLDEyLjUwNjY5NzYgOC41MzE5NDU4MywxMS40MDA4MDMgNi45ODMwMzMzMywxMS40MDA4MDMgWiBNMjcuMjA3NTA4MywxNi41NjE3NDAyIEMyNi4xOTY1NzUsMTYuNTYxNzQwMiAyNS4zNzM5ODc1LDE1LjcyNjcyODMgMjUuMzczOTg3NSwxNC43MDAzNjU1IEMyNS4zNzM5ODc1LDEzLjY3NDAwMjggMjYuMTk2NTA0MiwxMi44Mzg5MTkgMjcuMjA3NTA4MywxMi44Mzg5MTkgQzI4LjIxODUxMjUsMTIuODM4OTE5IDI5LjA0MTAyOTIsMTMuNjczOTMwOCAyOS4wNDEwMjkyLDE0LjcwMDM2NTUgQzI5LjA0MTAyOTIsMTUuNzI2NzI4MyAyOC4yMTg1MTI1LDE2LjU2MTc0MDIgMjcuMjA3NTA4MywxNi41NjE3NDAyIFogTTMwLjM3OTA3MDgsMTMuOTgxMjcxNiBDMzAuMDU0Nzk1OCwxMi41MDY2MjU3IDI4Ljc1NjQyMDgsMTEuNDAwNzMxMSAyNy4yMDc1NzkyLDExLjQwMDczMTEgQzI1LjY1ODczNzUsMTEuNDAwNzMxMSAyNC4zNjAyOTE3LDEyLjUwNjYyNTcgMjQuMDM2MDg3NSwxMy45ODEyNzE2IEwyMy4xMzg5ODMzLDEzLjk4MTI3MTYgTDIzLjEzODk4MzMsNy44MzU4OTQ3NyBMMzIuNTU5NDYyNSw3LjgzNTg5NDc3IEMzMi41NzUwNDU4LDguMDI3MjQ1NjcgMzIuNTgzNDA0Miw4LjIyMDY4MTk0IDMyLjU4MzQwNDIsOC40MTU5ODc4NiBMMzIuNTgzNDA0Miw5LjgzMzYwOTY1IEwzMC41NjMzMDgzLDkuODMzNjA5NjUgTDMwLjU2MzMwODMsMTEuMjcxNzk3NSBMMzIuNTgzMzMzMywxMS4yNzE3OTc1IEwzMi41ODM0MDQyLDEzLjk4MTI3MTYgTDMwLjM3OTA3MDgsMTMuOTgxMjcxNiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  p {\n    max-width: 600px;\n    margin: auto;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  p {\n    max-width: 600px;\n    margin: auto;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Contact = function Contact() {
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        _ui.Text,
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Contact us'
        )
      ),
      _react2.default.createElement(
        _ui.Text,
        null,
        _react2.default.createElement(
          'p',
          null,
          'If you have any questions, ideas or suggestions, please contact us.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Someone from our team will be in touch with you shortly.'
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _ui.Button,
        { mode: 'strong' },
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/contact' },
          'Contact us'
        )
      )
    )
  );
};

exports.default = Contact;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  div {\n    width: 100%;\n    text-align: center;\n    ', ';\n  }\n  .text {\n    ', ';\n    p {\n      color: white;\n    }\n  }\n  .image {\n    ', ';\n    margin-top: 60px;\n    ', ';\n    img {\n      width: 100%;\n    }\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  div {\n    width: 100%;\n    text-align: center;\n    ', ';\n  }\n  .text {\n    ', ';\n    p {\n      color: white;\n    }\n  }\n  .image {\n    ', ';\n    margin-top: 60px;\n    ', ';\n    img {\n      width: 100%;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(4);

var _livestream = __webpack_require__(90);

var _livestream2 = _interopRequireDefault(_livestream);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Container = _styledComponents2.default.div(_templateObject, medium('flex-direction: row;'), medium('text-align: left;'), medium('padding-right: 60px;'), medium('padding-left: 60px;'), medium('margin-top: 0;'));

var Livestream = function Livestream() {
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        'div',
        { className: 'text' },
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'div',
            { className: 'h1box' },
            _react2.default.createElement(
              'h1',
              null,
              'Livestream'
            )
          )
        ),
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'p',
            null,
            'If you can not make it to Berlin this time, you can still participate in the event. The conference program will be fully livestreamed. To access the livestream video, see the livestream page.'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _ui.Button,
          { mode: 'strong' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/livestream' },
            ' Go Livestream'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'image' },
        _react2.default.createElement('img', { src: _livestream2.default, alt: 'livestream' })
      )
    )
  );
};

exports.default = Livestream;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTk2IiBoZWlnaHQ9IjM1MiIgdmlld0JveD0iMCAwIDU5NiAzNTIiPgogICAgPGRlZnM+CiAgICAgICAgPHJhZGlhbEdyYWRpZW50IGlkPSJjIiBjeD0iNTkuOTgzJSIgY3k9Ii00LjY2OSUiIHI9IjE0MC4wNSUiIGZ4PSI1OS45ODMlIiBmeT0iLTQuNjY5JSIgZ3JhZGllbnRUcmFuc2Zvcm09InNjYWxlKC0uNTY4OCAtMSkgcm90YXRlKC04MS41ODUgLS4xNzMgLjk1OSkiPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjM0YzRDREIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzJGMkUzQSIvPgogICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICAgICAgPHJlY3QgaWQ9ImEiIHdpZHRoPSI1NjQiIGhlaWdodD0iMzIwLjgiIHJ4PSI2LjQiLz4KICAgICAgICA8ZmlsdGVyIGlkPSJiIiB3aWR0aD0iMTExJSIgaGVpZ2h0PSIxMTkuMyUiIHg9Ii01LjUlIiB5PSItNS4zJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIxNCIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjgiLz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49InNoYWRvd0JsdXJPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNzg1ODM1NiAwIi8+CiAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgPHBhdGggaWQ9ImUiIGQ9Ik03OC44ODcgMTM5LjgzMmgtMi45NTVMNTYuMjU2IDc2LjdjLS4zNDMtMS4xLTEuNTI1LTEuNzE5LTIuNjQtMS4zOGEyLjA4IDIuMDggMCAwIDAtMS40IDIuNjA1bC41NSAxLjc2MkgyOC4yMzRsMTEuODk0LTM4LjE2NGMuMTI0LjAwNS4yNDcuMDEuMzcyLjAxcy4yNDktLjAwNS4zNzItLjAxbDguNTcxIDI3LjVhMi4xMSAyLjExIDAgMCAwIDIuMDE5IDEuNDcyYy4yMDYgMCAuNDE1LS4wMy42MjItLjA5MmEyLjA4IDIuMDggMCAwIDAgMS4zOTgtMi42MDVsLTguNTUxLTI3LjQzN2MyLjY2LTEuNTE3IDQuNDU2LTQuMzUyIDQuNDU2LTcuNTk1IDAtNC44MzQtMy45ODYtOC43NjctOC44ODYtOC43NjctNC45IDAtOC44ODcgMy45MzMtOC44ODcgOC43NjcgMCAzLjI0MyAxLjc5NiA2LjA3OCA0LjQ1NyA3LjU5NWwtMjMuMTMgNzQuMjFhMi4wOCAyLjA4IDAgMCAwIDEuNCAyLjYwNCAyLjExIDIuMTEgMCAwIDAgMi42NC0xLjM4bC45My0yLjk4Mmg0MC43NDVsLTQ4LjUyMSAyNC45NSA0LjA2OS0xMy4wNTdhMi4wOCAyLjA4IDAgMCAwLTEuMzk5LTIuNjA0Yy0xLjExNS0uMzM5LTIuMjk3LjI3OS0yLjY0IDEuMzhsLTUuMDk3IDE2LjM0OUgyLjExM2MtMS4xNjcgMC0yLjExMy45MzMtMi4xMTMgMi4wODRDMCAxNDMuMDY2Ljk0NiAxNDQgMi4xMTMgMTQ0aDc2Ljc3NGMxLjE2NyAwIDIuMTEzLS45MzMgMi4xMTMtMi4wODRzLS45NDYtMi4wODQtMi4xMTMtMi4wODR6TTM1LjgzOSAzMi43NjdjMC0yLjUzNiAyLjA5LTQuNTk5IDQuNjYxLTQuNTk5IDIuNTcgMCA0LjY2MiAyLjA2MyA0LjY2MiA0LjYgMCAyLjUzNS0yLjA5MSA0LjU5OC00LjY2MiA0LjU5OC0yLjU3IDAtNC42NjEtMi4wNjMtNC42NjEtNC41OTl6bS04LjkwNSA1MS4wOUg1MC4zOWwtMzAuMjA3IDIxLjY2MSA2Ljc1MS0yMS42NjF6bS0zLjkyNyAyNC43OWwzMS43LTIyLjczMyA3LjA4NCAyMi43MzJIMjMuMDA3em0tNy43NTQgMzEuMTg1TDYzLjc0IDExNC45bDcuNzcgMjQuOTMySDE1LjI1M3oiLz4KICAgICAgICA8ZmlsdGVyIGlkPSJmIiB3aWR0aD0iMTA0LjklIiBoZWlnaHQ9IjEwMy4zJSIgeD0iLTIuNSUiIHk9Ii0xLjclIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd0JsdXJJbm5lcjEiIHN0ZERldmlhdGlvbj0iMS41Ii8+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeT0iMSIgaW49InNoYWRvd0JsdXJJbm5lcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0SW5uZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93T2Zmc2V0SW5uZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBrMj0iLTEiIGszPSIxIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgcmVzdWx0PSJzaGFkb3dJbm5lcklubmVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93SW5uZXJJbm5lcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yMjIzMTY1NzYgMCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjAlIiB5Mj0iMTAwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2QUFDRjQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMThFQkQ2Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8cGF0aCBpZD0iaCIgZD0iTTMyLjUgMTFDMjEuMTk2IDExIDEyIDIwLjI1MyAxMiAzMS42MjdjMCA1LjAyNyAxLjgxOCA5Ljg3MSA1LjEyIDEzLjYzOC43ODUuODk1IDIuMTQxLjk4IDMuMDMuMTkyLjg5LS43OS45NzUtMi4xNTQuMTktMy4wNDhhMTYuMzQ2IDE2LjM0NiAwIDAgMS00LjA0Ny0xMC43ODJjMC04Ljk5MiA3LjI3LTE2LjMwNyAxNi4yMDctMTYuMzA3IDguOTM2IDAgMTYuMjA3IDcuMzE1IDE2LjIwNyAxNi4zMDcgMCAzLjk3Ny0xLjQzOCA3LjgwNy00LjA1IDEwLjc4NWEyLjE3IDIuMTcgMCAwIDAgLjE4OSAzLjA0OCAyLjEzNSAyLjEzNSAwIDAgMCAzLjAzLS4xOUEyMC42NzcgMjAuNjc3IDAgMCAwIDUzIDMxLjYyNkM1MyAyMC4yNTMgNDMuODAzIDExIDMyLjUgMTF6Ii8+CiAgICAgICAgPGZpbHRlciBpZD0iaSIgd2lkdGg9IjEwOS44JSIgaGVpZ2h0PSIxMTEuNCUiIHg9Ii00LjklIiB5PSItNS43JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dCbHVySW5uZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHk9IjEiIGluPSJzaGFkb3dCbHVySW5uZXIxIiByZXN1bHQ9InNoYWRvd09mZnNldElubmVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd09mZnNldElubmVyMSIgaW4yPSJTb3VyY2VBbHBoYSIgazI9Ii0xIiBrMz0iMSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIHJlc3VsdD0ic2hhZG93SW5uZXJJbm5lcjEiLz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggaW49InNoYWRvd0lubmVySW5uZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMzM2MjQ4ODY4IDAiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICA8cGF0aCBpZD0iaiIgZD0iTTMyIDBDMTQuMzU1IDAgMCAxNC40MzMgMCAzMi4xNzNjMCA5Ljk3NSA0LjQ5IDE5LjIyMiAxMi4zMTggMjUuMzdhMi4xNCAyLjE0IDAgMCAwIDMuMDE2LS4zNzNjLjczLS45NC41NjQtMi4yOTgtLjM3MS0zLjAzMi02Ljc3OS01LjMyMy0xMC42NjYtMTMuMzMtMTAuNjY2LTIxLjk2NUM0LjI5NyAxNi44MTUgMTYuNzI0IDQuMzIgMzIgNC4zMnMyNy43MDMgMTIuNDk1IDI3LjcwMyAyNy44NTNjMCA4LjYzLTMuODg0IDE2LjYzNC0xMC42NTYgMjEuOTU3YTIuMTY4IDIuMTY4IDAgMCAwLS4zNyAzLjAzMiAyLjE0IDIuMTQgMCAwIDAgMy4wMTcuMzcxQzU5LjUxNCA1MS4zODYgNjQgNDIuMTQzIDY0IDMyLjE3MyA2NCAxNC40MzMgNDkuNjQ1IDAgMzIgMHoiLz4KICAgICAgICA8ZmlsdGVyIGlkPSJrIiB3aWR0aD0iMTA2LjIlIiBoZWlnaHQ9IjEwNi45JSIgeD0iLTMuMSUiIHk9Ii0zLjQlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd0JsdXJJbm5lcjEiIHN0ZERldmlhdGlvbj0iMS41Ii8+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeT0iMSIgaW49InNoYWRvd0JsdXJJbm5lcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0SW5uZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93T2Zmc2V0SW5uZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBrMj0iLTEiIGszPSIxIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgcmVzdWx0PSJzaGFkb3dJbm5lcklubmVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93SW5uZXJJbm5lcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4zMzYyNDg4NjggMCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxmaWx0ZXIgaWQ9ImwiIHdpZHRoPSIyMzQuMSUiIGhlaWdodD0iMjM0LjElIiB4PSItNjcuMSUiIHk9Ii02Ny4xJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VHcmFwaGljIiBzdGREZXZpYXRpb249IjEuNzg5Ii8+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDIpIj4KICAgICAgICA8bWFzayBpZD0iZCIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYikiIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPHVzZSBmaWxsPSJ1cmwoI2MpIiB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDxnIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNkKSI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0MiA5NCkiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjNDk0ODVCIiB4bGluazpocmVmPSIjZSIvPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjZikiIHhsaW5rOmhyZWY9IiNlIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgb3BhY2l0eT0iLjgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAgOTQpIj4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0idXJsKCNnKSIgeGxpbms6aHJlZj0iI2giLz4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2kpIiB4bGluazpocmVmPSIjaCIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnIG9wYWNpdHk9Ii40MDMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCA5NCkiPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJ1cmwoI2cpIiB4bGluazpocmVmPSIjaiIvPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjaykiIHhsaW5rOmhyZWY9IiNqIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgbWFzaz0idXJsKCNkKSI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwMiAyMCkiPgogICAgICAgICAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9Ik1haXNvbk5ldWUtTWVkaXVtLCBNYWlzb24gTmV1ZSIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjQwMCI+CiAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9IjE2LjEwMiIgeT0iMTUiIGZpbGw9IiNGRkYiPkxpdmVzdHJlYW0gb2ZmbGluZTwvdHNwYW4+CiAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI0IiBjeT0iMTAiIHI9IjMiIGZpbGw9IiNGMDAiLz4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjQiIGN5PSIxMCIgcj0iNCIgZmlsbD0iI0YwMCIgZmlsdGVyPSJ1cmwoI2wpIiBvcGFjaXR5PSIuNTg3Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 244px;\n  height: auto;\n  width: 100%\n  padding: 0 6%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 20px;\n  ', ';\n\n  p {\n    font-size: 20px;\n    color: #4bc5e8;\n    font-size: 23px;\n    color: #4bc5e8;\n    font-weight: bold;\n  }\n  h6 {\n    text-transform: uppercase;\n    font-size: 13px;\n    font-weight: 600;\n    color: #45494d;\n    margin-bottom: 15px;\n  }\n  h5 {\n    opacity: 0.5;\n    font-size: 17px;\n    font-weight: 300;\n    color: #000000;\n    max-height: auto; \n    overflow: inherit;\n    ', ';\n    ', ';\n  }\n'], ['\n  min-height: 244px;\n  height: auto;\n  width: 100%\n  padding: 0 6%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  margin-top: 20px;\n  ', ';\n\n  p {\n    font-size: 20px;\n    color: #4bc5e8;\n    font-size: 23px;\n    color: #4bc5e8;\n    font-weight: bold;\n  }\n  h6 {\n    text-transform: uppercase;\n    font-size: 13px;\n    font-weight: 600;\n    color: #45494d;\n    margin-bottom: 15px;\n  }\n  h5 {\n    opacity: 0.5;\n    font-size: 17px;\n    font-weight: 300;\n    color: #000000;\n    max-height: auto; \n    overflow: inherit;\n    ', ';\n    ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 244px;\n  width: 100%;\n  ', ';\n'], ['\n  height: 244px;\n  width: 100%;\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  object-fit: cover;\n'], ['\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  object-fit: cover;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  border-radius: 6px; \n  border-radius: 6.4px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n  width: 100%;\n  min-height: 244px;\n  max-width: 350px;\n  margin: auto;\n  ', ';\n  height: auto;\n  .speaker-card {\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n    ', ';\n    align-items: center;\n    justify-content: space-between;\n  }\n'], ['\n  border-radius: 6px; \n  border-radius: 6.4px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n  width: 100%;\n  min-height: 244px;\n  max-width: 350px;\n  margin: auto;\n  ', ';\n  height: auto;\n  .speaker-card {\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n    ', ';\n    align-items: center;\n    justify-content: space-between;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding-top: 65px;\n  width: 100%;\n  height: auto;\n'], ['\n  padding-top: 65px;\n  width: 100%;\n  height: auto;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(2);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var TextBox = _styledComponents2.default.div(_templateObject, medium('text-align: left; margin-top: 0; width: calc(100% - 245px);'), medium('max-height: 150px; overflow: scroll;'), large('max-height: auto; overflow: inherit;'));

var PhotoBox = _styledComponents2.default.div(_templateObject2, medium('width: 244px;'));

var Photo = _styledComponents2.default.img(_templateObject3);

var SpeakerBox = _styledComponents2.default.div(_templateObject4, medium('max-width: 100%; margin: inherit'), medium('flex-direction: row;'));
var Container = _styledComponents2.default.div(_templateObject5);

var Speaker = function (_React$Component) {
  _inherits(Speaker, _React$Component);

  function Speaker() {
    _classCallCheck(this, Speaker);

    return _possibleConstructorReturn(this, (Speaker.__proto__ || Object.getPrototypeOf(Speaker)).apply(this, arguments));
  }

  _createClass(Speaker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          position = _props.position,
          company = _props.company,
          photo = _props.photo,
          bio = _props.bio,
          linkTo = _props.linkTo;


      return _react2.default.createElement(
        Container,
        { id: linkTo ? linkTo : '' },
        _react2.default.createElement(
          SpeakerBox,
          null,
          _react2.default.createElement(
            _ui.Card,
            { width: '100%', height: '100%', className: 'speaker-card' },
            _react2.default.createElement(
              PhotoBox,
              null,
              _react2.default.createElement(Photo, { src: __webpack_require__(11)("./" + photo + '.png') })
            ),
            _react2.default.createElement(
              TextBox,
              null,
              _react2.default.createElement(
                _ui.Text,
                null,
                _react2.default.createElement(
                  'p',
                  null,
                  name
                )
              ),
              _react2.default.createElement(
                _ui.Text,
                null,
                _react2.default.createElement(
                  'h6',
                  null,
                  position,
                  ', ',
                  company
                )
              ),
              _react2.default.createElement(
                _ui.Text,
                null,
                _react2.default.createElement(
                  'h5',
                  null,
                  bio
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Speaker;
}(_react2.default.Component);

Speaker.propTypes = {
  name: _propTypes2.default.string,
  position: _propTypes2.default.string,
  company: _propTypes2.default.string
};

Speaker.defaultProps = {
  name: 'Name',
  position: 'Position',
  company: 'Company'
};

exports.default = Speaker;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Schedule = __webpack_require__(24);

var _Schedule2 = _interopRequireDefault(_Schedule);

var _Entry = __webpack_require__(25);

var _Entry2 = _interopRequireDefault(_Entry);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var ScheduleBox = _styledComponents2.default.div(_templateObject, medium('padding: 50px 8.5%;'));

var DayOne = function DayOne() {
  return _react2.default.createElement(
    ScheduleBox,
    null,
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'i',
        null,
        '*All panels and talks will be happening on the main stage (\u201CKapelle\u201D hall)'
      )
    ),
    _react2.default.createElement(
      _Schedule2.default,
      null,
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Lorem ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Lorem ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Lorem ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Lorem ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' })
    )
  );
};

exports.default = DayOne;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Schedule = __webpack_require__(24);

var _Schedule2 = _interopRequireDefault(_Schedule);

var _Entry = __webpack_require__(25);

var _Entry2 = _interopRequireDefault(_Entry);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var ScheduleBox = _styledComponents2.default.div(_templateObject, medium('padding: 50px 8.5%;'));

var DayTwo = function DayTwo() {
  return _react2.default.createElement(
    ScheduleBox,
    null,
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'i',
        null,
        '*All panels and talks will be happening on the main stage (\u201CKapelle\u201D hall)'
      )
    ),
    _react2.default.createElement(
      _Schedule2.default,
      null,
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Two ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Two ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Two ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' }),
      _react2.default.createElement(_Entry2.default, { time: 'XX:XX', title: 'Two ipsum dolor sit amet', subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum' })
    )
  );
};

exports.default = DayTwo;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Question = function Question(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _ui.Text,
      { size: 'xlarge' },
      _react2.default.createElement(
        'h2',
        null,
        props.question
      )
    ),
    _react2.default.createElement(
      _ui.Text,
      null,
      props.answer
    )
  );
};

exports.default = Question;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  text-align: center;\n  background: white;\n  padding-bottom: 0;\n\n  .text {\n    width: 100%;\n    padding-left: 0;\n    ', ';\n    ', ';\n  }\n  .map {\n    width: 100%;\n    ', ';\n    ', ';\n  }\n  p, h2 {\n    text-align: center;\n    ', ';\n    margin-bottom: 20px;\n    &.strong {\n      font-weight: 700;\n    }\n    img {\n      padding-right: 15px;\n    }\n  }\n  p.strong {\n    display: flex;\n    flex-direction: column;\n    ', ';\n    img {\n      padding-bottom: 6px;\n      ', ';\n    }\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  text-align: center;\n  background: white;\n  padding-bottom: 0;\n\n  .text {\n    width: 100%;\n    padding-left: 0;\n    ', ';\n    ', ';\n  }\n  .map {\n    width: 100%;\n    ', ';\n    ', ';\n  }\n  p, h2 {\n    text-align: center;\n    ', ';\n    margin-bottom: 20px;\n    &.strong {\n      font-weight: 700;\n    }\n    img {\n      padding-right: 15px;\n    }\n  }\n  p.strong {\n    display: flex;\n    flex-direction: column;\n    ', ';\n    img {\n      padding-bottom: 6px;\n      ', ';\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  ', ';\n'], ['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _MapContainer = __webpack_require__(31);

var _MapContainer2 = _interopRequireDefault(_MapContainer);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _plane = __webpack_require__(32);

var _plane2 = _interopRequireDefault(_plane);

var _bus = __webpack_require__(33);

var _bus2 = _interopRequireDefault(_bus);

var _travelBackground = __webpack_require__(97);

var _travelBackground2 = _interopRequireDefault(_travelBackground);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var MapBox = _styledComponents2.default.div(_templateObject, medium('width: 50%; padding-left: 40px;'), large('width: 40%; padding-left: 40px;'), medium('width: 50%;'), large('width: 60%;'), medium('text-align: left;'), medium('display: inherit;'), medium('padding-bottom: 0;'));

var Container = _styledComponents2.default.div(_templateObject2, medium('flex-direction: row;'));

var Map = function Map() {
  return _react2.default.createElement(
    _Section2.default,
    { className: 'white' },
    _react2.default.createElement(
      MapBox,
      null,
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          'div',
          { className: 'map' },
          _react2.default.createElement(_MapContainer2.default, {
            isMarkerShown: true,
            googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB_3Zo-VU8tXwUOgPJCQkGqgY7-eWQXzic&v=3.exp&libraries=geometry,drawing,places',
            loadingElement: _react2.default.createElement('div', { style: { height: '100%' } }),
            containerElement: _react2.default.createElement('div', { style: { height: '581px', width: '100%' } }),
            mapElement: _react2.default.createElement('div', { style: { height: '100%' } })
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'text' },
          _react2.default.createElement(
            _ui.Text,
            null,
            _react2.default.createElement(
              'div',
              { className: 'h1box xs-centered' },
              _react2.default.createElement(
                'h1',
                null,
                'Getting there'
              )
            )
          ),
          _react2.default.createElement(
            'p',
            { className: 'strong' },
            _react2.default.createElement('img', { src: _bus2.default }),
            'Public transport'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The closest metro stations are only few minutes walk away from the venue:',
            _react2.default.createElement('br', null),
            'U-Bahn (U9) - Turmstrasse (300m)',
            _react2.default.createElement('br', null),
            'S-Bahn (S3 / S7 / S9) - Bellevue (600m)'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Berlin Central Train Station (Hauptbanhof) is only one stop away via S-Bahn (10min) or six stops with bus 245 (5min).'
          ),
          _react2.default.createElement(
            'p',
            { className: 'strong' },
            _react2.default.createElement('img', { src: _plane2.default }),
            'From the airport'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Tegel Airport is 20min away by TXL direct bus.'
          )
        )
      )
    )
  );
};

exports.default = Map;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgMzYgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iLTE3Ljg3MTA5MzglIiB5MT0iMTAwJSIgeDI9IjEyMi4wMTYwNTklIiB5Mj0iMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZBQUNGNCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMThFQkQ2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFSQUNPTiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk5MS4wMDAwMDAsIC0zMjU5LjAwMDAwMCkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkxLjAwMDAwMCwgMzI1OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJwbGFjZWhvbGRlciI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDAgQzguMDc0OCwwIDAsOC4yMDA5Njg3NSAwLDE4LjI4MTI1IEMwLDIxLjY4NzA0NjkgMC45Mjg5LDI1LjAxMDc4MTIgMi42ODY5LDI3Ljg5NDM0MzcgTDE2Ljk3NTQsNTEuMjc5ODIwMyBDMTcuMjQ5MSw1MS43Mjc4MTI1IDE3LjczMTMsNTIgMTguMjQ5OSw1MiBDMTguMjUzOSw1MiAxOC4yNTc4LDUyIDE4LjI2MTgsNTIgQzE4Ljc4NDksNTEuOTk1ODM1OSAxOS4yNjgxLDUxLjcxNTIxODcgMTkuNTM2OCw1MS4yNTk0MDYyIEwzMy40NjExLDI3LjY0NzM0MzcgQzM1LjEyMjEsMjQuODI0NzE4NyAzNiwyMS41ODU5OTIyIDM2LDE4LjI4MTI1IEMzNiw4LjIwMDk2ODc1IDI3LjkyNTIsMCAxOCwwIFogTTMwLjg4NjYsMjYuMDgzMDc4MSBMMTguMjI3Miw0Ny41NTAxNDA2IEw1LjIzNjcsMjYuMjg5MDQ2OSBDMy43NzM0LDIzLjg4ODkyMTkgMi45OCwyMS4xMTk5MjE5IDIuOTgsMTguMjgxMjUgQzIuOTgsOS44ODEwMTU2MiA5LjcyOSwzLjAyNjU2MjUgMTgsMy4wMjY1NjI1IEMyNi4yNzEsMy4wMjY1NjI1IDMzLjAxLDkuODgxMDE1NjIgMzMuMDEsMTguMjgxMjUgQzMzLjAxLDIxLjAzNTcyNjYgMzIuMjY4OSwyMy43MzM5Mzc1IDMwLjg4NjYsMjYuMDgzMDc4MSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDkuMTQwNjI1IEMxMy4wMzc0LDkuMTQwNjI1IDksMTMuMjQxMTA5NCA5LDE4LjI4MTI1IEM5LDIzLjI4OTE5NTMgMTIuOTcxNywyNy40MjE4NzUgMTgsMjcuNDIxODc1IEMyMy4wOTAzLDI3LjQyMTg3NSAyNywyMy4yMzQxNDg0IDI3LDE4LjI4MTI1IEMyNywxMy4yNDExMDk0IDIyLjk2MjYsOS4xNDA2MjUgMTgsOS4xNDA2MjUgWiBNMTgsMjQuMzk1MzEyNSBDMTQuNjc0MywyNC4zOTUzMTI1IDExLjk4LDIxLjY0OTc3MzQgMTEuOTgsMTguMjgxMjUgQzExLjk4LDE0LjkyMTE1NjIgMTQuNjkxNiwxMi4xNjcxODc1IDE4LDEyLjE2NzE4NzUgQzIxLjMwODQsMTIuMTY3MTg3NSAyNC4wMSwxNC45MjExNTYyIDI0LjAxLDE4LjI4MTI1IEMyNC4wMSwyMS42MDA2MTcyIDIxLjM3ODQsMjQuMzk1MzEyNSAxOCwyNC4zOTUzMTI1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8dad1e8f-travel-background.png";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #1d1d2a;\n  text-align: center;\n  background-image: url(', ');\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  padding-bottom: calc(50px + 6vw);\n  clip-path: polygon(\n    0 0, /* left top */\n    100% 0, /* right top */ \n    100% calc(100% - 6vw), /* right bottom */\n    0 100% /* left bottom */\n  );\n\n  p {\n    color: white;\n    text-align: center;\n    margin: auto;\n    margin-bottom: 20px;\n    max-width: 600px;\n  }\n  h1 {\n    text-align: center;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #1d1d2a;\n  text-align: center;\n  background-image: url(', ');\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  padding-bottom: calc(50px + 6vw);\n  clip-path: polygon(\n    0 0, /* left top */\n    100% 0, /* right top */ \n    100% calc(100% - 6vw), /* right bottom */\n    0 100% /* left bottom */\n  );\n\n  p {\n    color: white;\n    text-align: center;\n    margin: auto;\n    margin-bottom: 20px;\n    max-width: 600px;\n  }\n  h1 {\n    text-align: center;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _MapContainer = __webpack_require__(31);

var _MapContainer2 = _interopRequireDefault(_MapContainer);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _plane = __webpack_require__(32);

var _plane2 = _interopRequireDefault(_plane);

var _bus = __webpack_require__(33);

var _bus2 = _interopRequireDefault(_bus);

var _venue = __webpack_require__(99);

var _venue2 = _interopRequireDefault(_venue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Container = _styledComponents2.default.div(_templateObject, _venue2.default);

var Venue = function Venue() {
  return _react2.default.createElement(
    _Section2.default,
    { className: 'white' },
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        _ui.Text,
        null,
        _react2.default.createElement(
          'div',
          { className: 'h1box centered' },
          _react2.default.createElement(
            'h1',
            null,
            'BOLLE Fests\xE4le'
          )
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _ui.SafeLink,
        { href: 'https://goo.gl/maps/m4ZDRLs9oDR2', target: '_blank' },
        _react2.default.createElement(
          'p',
          { className: 'strong' },
          'Alt-Moabit 98, 10559 Berlin, Germany'
        )
      ),
      _react2.default.createElement(
        _ui.Text,
        null,
        _react2.default.createElement(
          'p',
          null,
          'The conference venue is located in the Spree-Bogen area in the heart of Berlin. It is easily accessible (by public transport or car) from central Berlin or Tegel airport.'
        )
      )
    )
  );
};

exports.default = Venue;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1a54dd20-venue.png";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/c0c7ecca-accomodation.png";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTE5IiBoZWlnaHQ9IjIxMSIgdmlld0JveD0iMCAwIDExOSAyMTEiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0xMTUuODA3IDIwNC44MThoLTQuMzM1bC0yOC44NjEtOTMuNjI2YTMuMSAzLjEgMCAwIDAtMy44NzMtMi4wNDYgMy4wOSAzLjA5IDAgMCAwLTIuMDUyIDMuODYzbC44MDcgMi42MTRINDEuNTA3bDE3LjQ0OC01Ni41OTljLjE4LjAwNy4zNjIuMDE0LjU0NS4wMTQuMTgzIDAgLjM2NC0uMDA3LjU0NS0uMDE0bDEyLjU3MyA0MC43ODRhMy4xIDMuMSAwIDAgMCAzLjg3MyAyLjA0NiAzLjA5IDMuMDkgMCAwIDAgMi4wNTEtMy44NjNMNjYgNTcuM2MzLjkwMy0yLjI1IDYuNTM3LTYuNDU0IDYuNTM3LTExLjI2NCAwLTcuMTY5LTUuODQ3LTEzLjAwMS0xMy4wMzUtMTMuMDAxcy0xMy4wMzYgNS44MzItMTMuMDM2IDEzLjAwMWMwIDQuODEgMi42MzQgOS4wMTUgNi41MzggMTEuMjY0TDE5LjA3NiAxNjcuMzU3YTMuMDkgMy4wOSAwIDAgMCAyLjA1MiAzLjg2MkEzLjEgMy4xIDAgMCAwIDI1IDE2OS4xNzNsMS4zNjQtNC40MjQuMDE1LjAwMUg4Ni4xM2wtNzEuMTcyIDM3IDUuOTY5LTE5LjM2MmEzLjA5IDMuMDkgMCAwIDAtMi4wNTItMy44NjMgMy4xIDMuMSAwIDAgMC0zLjg3MiAyLjA0NmwtNy40NzcgMjQuMjQ3SDMuMTkyYTMuMDk1IDMuMDk1IDAgMCAwLTMuMDk5IDMuMDkxQTMuMDk1IDMuMDk1IDAgMCAwIDMuMTkyIDIxMWgxMTIuNjE2YTMuMDk1IDMuMDk1IDAgMCAwIDMuMDk5LTMuMDkgMy4wOTUgMy4wOTUgMCAwIDAtMy4xLTMuMDkyek01Mi42NjIgNDYuMDM3YzAtMy43NiAzLjA2OC02LjgyIDYuODM4LTYuODJzNi44MzggMy4wNiA2LjgzOCA2LjgyYzAgMy43Ni0zLjA2OCA2LjgyLTYuODM4IDYuODJzLTYuODM4LTMuMDYtNi44MzgtNi44MnptLTEzLjA2IDc1Ljc2OGgzNC40MDVMMjkuNjk4IDE1My45M2w5LjkwMy0zMi4xMjV6bS01Ljc2MSAzNi43NjRsNDYuNDk4LTMzLjcxM0w5MC43MyAxNTguNTdIMzMuODR6bS0xMS4zNzUgNDYuMjVsNzEuMTI0LTM2Ljk3NiAxMS4zOTggMzYuOTc1SDIyLjQ2NnoiLz4KICAgICAgICA8ZmlsdGVyIGlkPSJiIiB3aWR0aD0iMTAzLjQlIiBoZWlnaHQ9IjEwMi4yJSIgeD0iLTEuNyUiIHk9Ii0xLjElIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd0JsdXJJbm5lcjEiIHN0ZERldmlhdGlvbj0iMS41Ii8+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeT0iMSIgaW49InNoYWRvd0JsdXJJbm5lcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0SW5uZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93T2Zmc2V0SW5uZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBrMj0iLTEiIGszPSIxIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgcmVzdWx0PSJzaGFkb3dJbm5lcklubmVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93SW5uZXJJbm5lcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNjYwNDk1OTIgMCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjAlIiB5Mj0iMTAwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2QUFDRjQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMThFQkQ2Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzMzNDE0QSIgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYikiIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik01OS41IDE2LjUxOGMtMTYuMzIgMC0yOS41OTcgMTMuMjQyLTI5LjU5NyAyOS41MTlhMjkuNDQxIDI5LjQ0MSAwIDAgMCA3LjM5MyAxOS41MTggMy4xMDUgMy4xMDUgMCAwIDAgNC4zNzQuMjc0IDMuMDg1IDMuMDg1IDAgMCAwIC4yNzUtNC4zNjIgMjMuMjc0IDIzLjI3NCAwIDAgMS01Ljg0NC0xNS40M0MzNi4xIDMzLjE3IDQ2LjU5OCAyMi43IDU5LjUgMjIuN2MxMi45MDIgMCAyMy4zOTggMTAuNDY5IDIzLjM5OCAyMy4zMzdhMjMuMjc0IDIzLjI3NCAwIDAgMS01Ljg0NyAxNS40MzQgMy4wODUgMy4wODUgMCAwIDAgLjI3MyA0LjM2M2MuNTkuNTE4IDEuMzIxLjc3MyAyLjA1Ljc3My44NTggMCAxLjcxMi0uMzUzIDIuMzI0LTEuMDQ2YTI5LjQ0MiAyOS40NDIgMCAwIDAgNy4zOTgtMTkuNTI0YzAtMTYuMjc3LTEzLjI3Ny0yOS41Mi0yOS41OTYtMjkuNTJ6IiBvcGFjaXR5PSIuODMiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI2MpIiBkPSJNNTkuNSAwQzM0LjA0OCAwIDEzLjM0MiAyMC42NTIgMTMuMzQyIDQ2LjAzN2MwIDE0LjI3NCA2LjQ3NiAyNy41MDUgMTcuNzY4IDM2LjMwMWEzLjA5IDMuMDkgMCAwIDAgMS45MDUuNjU1Yy45MjEgMCAxLjgzNC0uNDA4IDIuNDQ1LTEuMTg4YTMuMDg1IDMuMDg1IDAgMCAwLS41MzUtNC4zMzlDMjUuMTQ3IDY5Ljg1IDE5LjU0IDU4LjM5NCAxOS41NCA0Ni4wMzZjMC0yMS45NzUgMTcuOTI2LTM5Ljg1NCAzOS45Ni0zOS44NTQgMjIuMDM0IDAgMzkuOTYgMTcuODc5IDM5Ljk2IDM5Ljg1NSAwIDEyLjM1LTUuNjAzIDIzLjgwMS0xNS4zNzEgMzEuNDE4YTMuMDg2IDMuMDg2IDAgMCAwLS41MzMgNC4zMzggMy4xMDUgMy4xMDUgMCAwIDAgNC4zNS41MzJjMTEuMjgtOC43OTYgMTcuNzUtMjIuMDIzIDE3Ljc1LTM2LjI4OEMxMDUuNjU5IDIwLjY1MiA4NC45NTIgMCA1OS41IDB6IiBvcGFjaXR5PSIuNDAzIi8+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.9c8f69d7.js.map