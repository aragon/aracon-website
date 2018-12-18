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
/******/ 	__webpack_require__.p = "https://aracon.one/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
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

var _templateObject = _taggedTemplateLiteral(['\n  width: 100vw;\n  margin: -1px auto -1px auto;\n  \n  position: relative;\n  text-align: left;\n\n  .h1box {\n    display: flex;\n  }\n  .h1box.centered {\n    justify-content: center;\n  }\n  .h1box.xs-centered {\n    justify-content: center;\n    ', ';\n\n  }\n  h1 {\n    margin-bottom: 25px;\n    font-size: 48px;\n    line-height: 1.5;\n    background: -webkit-linear-gradient(left, #7af7d0, #64b0f1);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: 900;\n    text-align: left;\n  }\n  h2 {\n    margin-bottom: 25px;\n    font-size: 38px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  h3 {\n    margin-bottom: 25px;\n    font-size: 25px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  p {\n    font-size: 19px;\n    line-height: 27px;\n    color: ', ';\n    a {\n      color: #61B2F0;\n      text-decoration: none;\n    }\n    a:hover {\n      color: #0088f3;\n    }\n  }\n  button a, a {\n    text-decoration: none;\n  }\n  .strong {\n    font-size: 19px;\n    font-weight: 700;\n  }\n'], ['\n  width: 100vw;\n  margin: -1px auto -1px auto;\n  \n  position: relative;\n  text-align: left;\n\n  .h1box {\n    display: flex;\n  }\n  .h1box.centered {\n    justify-content: center;\n  }\n  .h1box.xs-centered {\n    justify-content: center;\n    ', ';\n\n  }\n  h1 {\n    margin-bottom: 25px;\n    font-size: 48px;\n    line-height: 1.5;\n    background: -webkit-linear-gradient(left, #7af7d0, #64b0f1);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: 900;\n    text-align: left;\n  }\n  h2 {\n    margin-bottom: 25px;\n    font-size: 38px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  h3 {\n    margin-bottom: 25px;\n    font-size: 25px;\n    line-height: 1.5;\n    color: black;\n    font-weight: bold;\n  }\n  p {\n    font-size: 19px;\n    line-height: 27px;\n    color: ', ';\n    a {\n      color: #61B2F0;\n      text-decoration: none;\n    }\n    a:hover {\n      color: #0088f3;\n    }\n  }\n  button a, a {\n    text-decoration: none;\n  }\n  .strong {\n    font-size: 19px;\n    font-weight: 700;\n  }\n']);

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

var _Page = __webpack_require__(47);

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

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n  width: 100%;\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  ', ';\n'], ['\n  text-align: center;\n  width: 100%;\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  ', ';\n']);

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

var Content = _styledComponents2.default.div(_templateObject, large('width: 50%; justify-content: flex-end;'));

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

var _Hero = __webpack_require__(55);

var _Hero2 = _interopRequireDefault(_Hero);

var _About = __webpack_require__(58);

var _About2 = _interopRequireDefault(_About);

var _Speakers = __webpack_require__(63);

var _Speakers2 = _interopRequireDefault(_Speakers);

var _Venue = __webpack_require__(95);

var _Venue2 = _interopRequireDefault(_Venue);

var _Map = __webpack_require__(97);

var _Map2 = _interopRequireDefault(_Map);

var _Contact = __webpack_require__(102);

var _Contact2 = _interopRequireDefault(_Contact);

var _Livestream = __webpack_require__(103);

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

module.exports = __webpack_require__.p + "static/87e6bdcd-GriffGreen.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AlisonBerreman.png": 65,
	"./AronFischer.png": 66,
	"./ChristophJentzsch.png": 67,
	"./EvanVanNess.png": 68,
	"./GriffGreen.png": 11,
	"./JacobArluck.png": 69,
	"./JoeUrgo.png": 70,
	"./JordiBaylina.png": 71,
	"./JorgeIzquierdo.png": 72,
	"./JouniHelminen.png": 73,
	"./JuttaSteiner.png": 74,
	"./KennyRowe.png": 75,
	"./LaneRettig.png": 76,
	"./LauraKalbag.png": 77,
	"./LuisCuende.png": 78,
	"./MariaGomez.png": 79,
	"./MarioLaul.png": 80,
	"./MartinKoppelmann.png": 81,
	"./MattLockyer.png": 82,
	"./MeltemDemirors.png": 83,
	"./MikeGoldin.png": 84,
	"./PrimaveraDeFilippi.png": 85,
	"./RaineRevere.png": 86,
	"./SamerHassan.png": 87,
	"./SantiagoSiri.png": 88,
	"./StefanoBernardi.png": 89,
	"./TaylorMonahan.png": 90,
	"./TrentMcConaghy.png": 91,
	"./WillWarren.png": 92,
	"./YaldaMousavinia.png": 93,
	"./YondonFu.png": 94
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
webpackContext.id = 12;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .h1box {\n    max-width: 1200px;\n    margin: auto;\n  }\n  p {\n    color: #63B1F1;\n    font-size: 19px;\n    line-height: 27px;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .h1box {\n    max-width: 1200px;\n    margin: auto;\n  }\n  p {\n    color: #63B1F1;\n    font-size: 19px;\n    line-height: 27px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 1195px;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-bottom: 40px;\n  a {\n    color: #63B1F1;\n    font-size: 19px;\n    line-height: 27px;\n  }\n'], ['\n  width: 100%;\n  max-width: 1195px;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-bottom: 40px;\n  a {\n    color: #63B1F1;\n    font-size: 19px;\n    line-height: 27px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 734px;\n  background: white;\n  margin: auto;\n  padding: 70px 10px 160px 10px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  h2 {\n    font-size: 42px;\n    font-weight: bold;\n    text-align: center;\n    color: #18181a;\n  }\n  p {\n    font-size: 19px;\n    line-height: 1.42;\n    text-align: center;\n    color: #45494d;\n  }\n\n  p a {\n    color: #61b2f0;\n    text-decoration: none;\n  }\n'], ['\n  width: 100%;\n  max-width: 734px;\n  background: white;\n  margin: auto;\n  padding: 70px 10px 160px 10px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  h2 {\n    font-size: 42px;\n    font-weight: bold;\n    text-align: center;\n    color: #18181a;\n  }\n  p {\n    font-size: 19px;\n    line-height: 1.42;\n    text-align: center;\n    color: #45494d;\n  }\n\n  p a {\n    color: #61b2f0;\n    text-decoration: none;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _Forms = __webpack_require__(7);

var _Forms2 = _interopRequireDefault(_Forms);

var _Speaker = __webpack_require__(105);

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
          _react2.default.createElement(_Speaker2.default, { photo: 'LuisCuende', linkTo: 'luis', name: 'Luis Cuende', position: 'CEO', company: 'Aragon One',
            bio: 'Luis is the CEO of Aragon One, one of the teams working on the Aragon project. Luis has been into crypto since 2011, and loves how decentralized organizations can solve the world\u2019s worst problems. Luis has been awarded as the best underage European programmer in 2011, is a Forbes 30 Under 30, a MIT TR35 and was an Advisor to the VP of the European Commission. He cofounded the blockchain startup Stampery. Prior to founding startups, he created the world\'s first Linux distribution with facelogin.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'GriffGreen', linkTo: 'griff', name: 'Griff Green', position: 'Co-founder', company: 'Giveth & Aragon DAC',
            bio: 'Community manager for TheDAO, led the cleanup effort for TheDAO Hack from every angle, co-founder of the White Hat Group and Giveth and leading the creation of the Aragon DAC, as well as advising DAppNode, 0KIMS (iden3), ETHSignals, Open Source Blockchain Explorers NOW! and many other groups within the Ethereum Community.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'JuttaSteiner', linkTo: 'jutta', name: 'Jutta Steiner', position: 'Co-Founder and CEO', company: 'Parity Technologies',
            bio: 'Dr Jutta Steiner is the co-founder and CEO of Parity Technologies, a blockchain technology company best known for Parity Ethereum, the most advanced Ethereum client. Previously, Jutta served as Chief of Security for the Ethereum Foundation and pioneered blockchain use in supply chains as Project Provenance co-founder.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'TrentMcConaghy', linkTo: 'trent', name: 'Trent-McConaghy', position: 'Co-founder', company: 'BigchainDB',
            bio: 'Trent McConaghy did AI research for two decades, including machine creativity and AI to help drive Moore\'s Law, via two startups (both acquired) and a PhD. Now he focuses on AI * blockchain, via Ocean to democratize AI data, and BigchainDB decentralized database. His hobbies include Token Engineering and advising governments on AI * blockchain' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'SantiagoSiri', linkTo: 'santiago', name: 'Santiago Siri', position: 'Founder', company: 'Democracy Earth Foundation',
            bio: 'Founder of Democracy Earth Foundation, a Y Combinator backed non-profit building incorruptible digital governance technology; and the Partido de la Red (Peers Party), the first digital political party that ran for elections with candidates committed to people\'s will online. Partner of Bitex.la, a leading bitcoin exchange in Latin America. Published \'Hacktivismo\' in 2015 with Random House. Member of the World Economic Forum since 2012. Awarded by MIT Technology Review and Singularity University. Co-founded Argentine Game Developers Association in 2002.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'JoeUrgo', linkTo: 'joe', name: 'Joe Urgo', position: 'Co-Founder', company: 'District0x',
            bio: 'Joe is a co-founder of district0x, a network of decentralized marketplaces and CEO at Sourcerers, a consultancy firm supporting leading Ethereum-based projects. Joe previously spent three years as an Operations Manager at Coinbase. Prior to Coinbase, he was a derivatives trader for Three Arrows Capital, an international hedge fund based in Singapore. Joe serves as an advisor at Status, Keep, SpankChain, Bloom, Witnet, Abacus, Access Network, LiquidX, Fabric Ventures, Republic, and Common Interest.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'LaneRettig', linkTo: 'lane', name: 'Lane Rettig', position: 'Independent Core Developer', company: 'Ewasm',
            bio: 'Lane Rettig is an independent Ethereum core developer and a member of the Ewasm team, where he is helping build the execution engine for Ethereum 2.0 (the Shasper roadmap). He is also the founder of Crypto NYC, a Manhattan-based, blockchain-focused community and coworking space dedicated to making Web3 technology accessible to all humans.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'PrimaveraDeFilippi', linkTo: 'primavera', name: 'Primavera De Filippi', position: 'Postdoctoral researcher', company: 'National Center of Scientific Research (CNRS)',
            bio: 'Primavera De Filippi is a permanent researcher at the National Center of Scientific Research (CNRS) in Paris, a faculty associate at the Berkman-Klein Center for Internet & Society at Harvard University, and a Visiting Fellow at the Robert Schuman Centre for Advanced Studies at the European University Institute.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'MattLockyer', linkTo: 'matt', name: 'Matt Lockyer', position: 'Founder', company: 'Soloblock Solutions',
            bio: 'Matt Lockyer wrote the Ethereum ERC-998 standard for Composable Tokens and his work on Token Curated Registries (TCRs) has been published on a16z\'s crypto reading list. Matt founded and operates the NFTy Magicians - a group of over 300 blockchain developers - as a pendant to the Ethereum Foundation. He currently advises projects on their smart contract architecture and token engineering processes with a background in full stack development, computer science, UX research, public speaking and university lecturing.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'MarioLaul', linkTo: 'mario', name: 'Mario Laul', position: 'Researcher', company: 'Placeholder Ventures',
            bio: 'Mario Laul works as a researcher for Placeholder, a New York venture capital firm investing in decentralized information networks, and for Beyond the Technological Revolution, a four-year research project led by Carlota Perez exploring the relationship between technology, finance, and public policy. Each fall, he teaches an introductory course on the sociology of culture at the Estonian Academy of Arts in Tallinn, and is looking to combine the study of technology governance with a sociologically informed perspective on emerging forms of decentralized economic and social coordination.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'MartinKoppelmann', linkTo: 'martin', name: 'Martin K\xF6ppelmann', position: 'CEO and Co-founder', company: 'Gnosis',
            bio: 'Martin K\xF6ppelmann has been an entrepreneur in the blockchain space for more than 5 years. He is the CEO and co-founder of Gnosis, the decentralized Gnosis prediction market - one of the first decentralized application that went live on Ethereum in 2015 in an early verison.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'RaineRevere', linkTo: 'raine', name: 'Raine Revere', position: 'Co-founder', company: 'Maiden',
            bio: 'Raine Revere is an engineer and educator in the Ethereum community who has spoken at blockchain events around the world. Raine is the Lead Architect of ShapeShift Prism and is the co-founder of Maiden, a company that delivers socially-aware blockchain education, cultural & leadership development, and diversity-powered blockchain consulting. As a therapist, teacher, and cryptocurrency engineer, Raine has the unique capacity to engage deeply with both the technical and social aspects of technology.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'AronFischer', linkTo: 'aron', name: 'Aron Fischer', position: 'Governance Researcher', company: 'Colony',
            bio: 'Aron Fischer received his PhD in mathematics from the City University of New York in 2015. He is working in the research arm of Colony: a platform for open organizations which seeks to enable new forms of decentralised organizations. The work involves a careful balancing of what is desirable in terms of governance and what is possible given the technical limitations of the Ethereum blockchain.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'MariaGomez', linkTo: 'maria', name: 'Mar\xEDa G\xF3mez', position: 'Ecosystem Development', company: 'Aragon One',
            bio: 'Mar\xEDa G\xF3mez is a former corporate lawyer. She worked several years in the M&A and corporate finance practice. Currently she works on ecosystem development for Aragon.one, one of the teams working for the Aragon project. ' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'EvanVanNess', linkTo: 'evan', name: 'Evan Van Ness', position: 'Founder & Editor', company: 'Week in Ethereum News',
            bio: 'Evan Van Ness is the founder and editor of WeekInEthereum.com and a member of ConsenSys. As a Texan, decentralization is in his blood.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'JordiBaylina', linkTo: 'jordi', name: 'Jordi Baylina', position: 'Tech Lead', company: 'Iden3',
            bio: 'Jordi is one of the strongest Solidity developers in the world and a high impact contributor in the Ethereum community. He is a co-founder of the White Hat Group, which played a major role in rescuing funds from TheDAO and Parity Multisig Hacks, author of the MiniMe token contract, the elliptic curves Solidity library as well as numerous other established contracts in the Ethereum space. Well respected auditor, most notably leading teams to audit the MakerDAO Stable Coin system and Aragon project. Founder of the donation platform Giveth, DAppNode and Iden3.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'WillWarren', linkTo: 'will', name: 'Will Warren', position: 'Co-founder and CEO', company: '0x',
            bio: 'Will Warren is Co-founder and CEO at 0x which is developing public infrastructure for peer-to-peer exchange on the Ethereum blockchain. After receiving a B.S. in Mechanical Engineering from UC San Diego, Will worked as a graduate research assistant at Los Alamos National Laboratory conducting applied physics research. Will spent two years in UC San Diego\'s Structural Engineering doctoral program before dropping out to pursue an interest in Ethereum full time.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'JouniHelminen', linkTo: 'jouni', name: 'Jouni Helminen', position: 'Head of Design', company: 'Aragon One',
            bio: 'Jouni has been designing for web and mobile for over 16 years in Finland, London and Asia.  In addition to consulting in tech and finance, he has lately focused on open source - Ubuntu, redesign of Riot.im and of course Aragon. With Aragon his focus is designing the platform from human centred point of view - easy to use and accessible for anyone. Jouni is also working on Lorikeet - a design system for the decentralised web, used by Aragon and other leading Dapp projects. ' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'KennyRowe', linkTo: 'kenny', name: 'Kenny Rowe', position: 'Vice President', company: 'RChain Cooperative',
            bio: 'Kenny is an entrepreneur who brings a focus on governance, community building and collaboration to projects across the blockchain industry. Currently, he serves as Vice President of RChain Cooperative. Formerly he worked as head of operations at MakerDAO as well as a senior consultant at CoinFund. Kenny founded the Seattle Ethereum Meetup group and previously spent eight years working in e-commerce for Newell Brands in various management roles.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'LauraKalbag', linkTo: 'laura', name: 'Laura Kalbag', position: 'Author', company: ' Accessibility for Everyone',
            bio: 'Laura Kalbag is a designer from the UK, and author of Accessibility For Everyone from A Book Apart. She\u2019s co-founder of Ind.ie, a tiny two-person not-for-profit working for social justice in the digital networked age. At Ind.ie, Laura works on Better Blocker, a privacy tool that protects you from being tracked on the Web, and on initiatives to create a federated personal web where everyone owns and controls their own piece of the internet.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'MeltemDemirors', linkTo: 'meltem', name: 'Meltem Demirors', position: 'Chief Strategy Officer', company: 'CoinShares',
            bio: 'Meltem Demirors is Chief Strategy Officer of CoinShares, the leading digital asset manager, and a cryptocurrency investor, advisor, and advocate, with a unique blend of experience in both legacy & blockchain-based finance and cryptocurrencies. On the legacy finance front, Ms. Demirors worked with some of the largest companies in the world, mainly on financial risk management and capital efficiency. On the blockchain-based finance side, she has had an intense focus on portfolio management and network development. She invests in cryptocurrency and blockchain focused companies and projects via her invest firm, Shiny Pony Ventures and lectures at the MIT Media Lab and Oxford.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'YaldaMousavinia', linkTo: 'yalda', name: 'Yalda Mousavinia', position: 'Co-founder', company: 'Space Cooperative',
            bio: 'Yalda Mousavinia is a co-founder of Space Cooperative, a worker-owned aerospace cooperative, which is the original organization spearheading the establishment of Space Decentral, a DAO for creating a global space agency. She and other members of the Space Decentral community were awarded an Aragon Nest grant to develop a Planning Suite for DAOs and she is the lead product manager and UX designer. Prior to Space Cooperative, Yalda designed solutions for Oracle\'s Enterprise Resource Planning cloud software suite. Her career as a product manager and designer for software companies spans over 10 years.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'YondonFu', linkTo: 'yondon', name: 'Yondon Fu', position: 'Software Engineer & Researcher', company: 'Livepeer',
            bio: 'Yondon Fu is a software engineer and researcher at Livepeer which is developing public decentralized video streaming infrastructure that helps developers scale video enabled applications. Previously, he worked on decentralized funding mechanisms for sustainable open source software as a part of his senior undergraduate thesis.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'AlisonBerreman', linkTo: 'Alison', name: 'Alison Berreman', position: 'Assistant Editor', company: 'ETHNews',
            bio: 'Alison Berreman is the assistant editor at ETHNews. She has a background in social work, and a master\u2019s in rhetoric and composition studies from the University of Wyoming. ' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'ChristophJentzsch', linkTo: 'Christoph', name: 'Christoph Jentzsch', position: 'Co-founder & CEO', company: 'Slock.it',
            bio: 'Christoph\u2019s background is in theoretical physics, where he developed optimized software solutions for high performance computing on specialized hardware. Christoph has been part of the Ethereum project since 2014 as Lead Tester, securing and shaping the core protocol while working on the backend of the C++ client. End of 2015 he co-founded Slock.it, working on the decentralized sharing economy through the connection of Blockchain and IoT as well as TheDAO.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'JacobArluck', linkTo: 'Jacob', name: 'Jacob Arluck', position: 'Researcher', company: 'Tezos',
            bio: 'Jacob works on governance research for Tezos. He is most interested in improving blockchain governance to facilitate coordination and acquire the scalability necessary for widespread adoption.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'SamerHassan', linkTo: 'Samer', name: 'Samer Hassan', position: 'Researcher and Faculty Associate', company: 'Berkman Klein Center for Internet & Society',
            bio: 'Samer Hassan is an activist and researcher, Faculty Associate at the Berkman Klein Center for Internet & Society (Harvard University) and Associate Professor at the Universidad Complutense de Madrid (Spain). Focused on decentralized collaboration, he was awarded with a 1.5M\u20AC ERC grant, the largest individual research grant in the EU, to build blockchain-based, democratic and economically sustainable organizations for the collaborative economy (the \'P2P Models\' project)' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'StefanoBernardi', linkTo: 'Stefano', name: 'Stefano Bernardi', position: 'Director', company: 'Aragon Association',
            bio: 'Stefano has been interested in the crypto and decentralized organizations space since 2011. He is also a co-founder and venture partner at Semantic Ventures, an early stage European venture fund focusing on decentralized computing.In his spare time, he writes Token Economy, a leading crypto newsletter and organizes Unplug.vc retreats, bringing people to the mountains where he lives with his wife and two children.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'TaylorMonahan', linkTo: 'Monahan', name: 'Taylor Monahan', position: 'Founder & CEO', company: 'MyCrypto',
            bio: 'Taylor Monahan is the founder & CEO of MyCrypto, an open-source, non-custodial wallet solution. Previously she founded MyEtherWallet. She is dedicated to making the blockchain safer and easier to access for everyone.' }),
          _react2.default.createElement(_Speaker2.default, { photo: 'JorgeIzquierdo', linkTo: 'Jorge', name: 'Jorge Izquierdo', position: 'CTO', company: 'Aragon One',
            bio: 'Jorge is a co-founder of the Aragon Project and currently is the CTO of Aragon One, mostly focused on technology research. Before Aragon, Jorge was a mobile app developer and a tinkerer with any interesting tech he would learn of.' })
        ),
        _react2.default.createElement(
          'p',
          null,
          'More speakers coming soon'
        )
      )
    ),
    _react2.default.createElement(
      _Section2.default,
      { className: 'white' },
      _react2.default.createElement(
        TextContainer,
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Speaker applications are now closed'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Thanks to everyone who applied to speak at AraCon 2019. We are now reviewing all submissions. If you are selected to speak you will be notified by November 19th 2018.'
        )
      )
    )
  );
};

exports.default = Speakers;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: calc(100vh - 116px)!important;\n  h1 {\n    text-align: center;\n    margin-top: 30px;\n    font-size: 35px;\n  }\n  img {\n    width: 118px;\n  }\n  u {\n    -webkit-text-fill-color: white;\n  }\n'], ['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: calc(100vh - 116px)!important;\n  h1 {\n    text-align: center;\n    margin-top: 30px;\n    font-size: 35px;\n  }\n  img {\n    width: 118px;\n  }\n  u {\n    -webkit-text-fill-color: white;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

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

var SpeakerApplication = function (_React$Component) {
  _inherits(SpeakerApplication, _React$Component);

  function SpeakerApplication() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SpeakerApplication);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SpeakerApplication.__proto__ || Object.getPrototypeOf(SpeakerApplication)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: 'dayOne' }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SpeakerApplication, [{
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
                  'Speaker applications are now closed.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SpeakerApplication;
}(_react2.default.Component);

exports.default = SpeakerApplication;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: calc(100vh - 116px)!important;\n  h1 {\n    text-align: center;\n    margin-top: 30px;\n    font-size: 35px;\n  }\n  img {\n    width: 118px;\n  }\n  u {\n    -webkit-text-fill-color: white;\n  }\n'], ['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: calc(100vh - 116px)!important;\n  h1 {\n    text-align: center;\n    margin-top: 30px;\n    font-size: 35px;\n  }\n  img {\n    width: 118px;\n  }\n  u {\n    -webkit-text-fill-color: white;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _agenda = __webpack_require__(106);

var _agenda2 = _interopRequireDefault(_agenda);

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
            _react2.default.createElement('img', { src: _agenda2.default, alt: 'live' }),
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'div',
                { className: 'h1box' },
                _react2.default.createElement(
                  'h1',
                  null,
                  'The agenda is currently being worked on.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'a',
                    { href: 'https://eepurl.com/dHogTD', target: '_blank', rel: 'noopener noreferrer' },
                    'Sign up ',
                    _react2.default.createElement(
                      'u',
                      null,
                      'here'
                    ),
                    ' for our newsletter to get the latest updates'
                  ),
                  '.'
                )
              )
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
/* 17 */
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

var _DayOne = __webpack_require__(107);

var _DayOne2 = _interopRequireDefault(_DayOne);

var _DayTwo = __webpack_require__(108);

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
      var _this2 = this;

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
              _ui.Button,
              { className: 'first-button',
                mode: active === 'dayOne' ? 'normal' : 'secondary',
                onClick: function onClick() {
                  return _this2.setState({ active: 'dayOne' });
                }
              },
              'Tuesday Jan 29'
            ),
            _react2.default.createElement(
              _ui.Button,
              { className: 'second-button',
                mode: active !== 'dayOne' ? 'normal' : 'secondary',
                onClick: function onClick() {
                  return _this2.setState({ active: 'dayTwo' });
                }
              },
              'Wednesday Jan 30'
            ),
            active === 'dayOne' ? _react2.default.createElement(_DayOne2.default, null) : _react2.default.createElement(_DayTwo2.default, null)
          )
        )
      );
    }
  }]);

  return Agenda;
}(_react2.default.Component);

exports.default = Agenda;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 50px;\n  .schedule {\n    width: 100%;\n    max-width: 870px;\n    background: #fff;\n    padding: 0;\n    ', ';\n    position: relative;\n    margin: auto;\n  }\n  .schedule:before {\n    content: \'\';\n    position: absolute;\n    top: 6px;\n    left: calc(33% - 1px);\n    ', ';\n    bottom: 0px;\n    width: 2px;\n    background: #ddd;\n  }\n  .schedule:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n'], ['\n  margin-top: 50px;\n  .schedule {\n    width: 100%;\n    max-width: 870px;\n    background: #fff;\n    padding: 0;\n    ', ';\n    position: relative;\n    margin: auto;\n  }\n  .schedule:before {\n    content: \'\';\n    position: absolute;\n    top: 6px;\n    left: calc(33% - 1px);\n    ', ';\n    bottom: 0px;\n    width: 2px;\n    background: #ddd;\n  }\n  .schedule:after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n']);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  clear: both;\n  text-align: left;\n  position: relative;\n  .time {\n    margin-bottom: .5em;\n    float: left;\n    width: 33%;\n    padding-right: 30px;\n    text-align: right;\n    position: relative;\n  }\n  .time:after {\n    content: \'\';\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border-radius: 12px;\n    top: 6px;\n    right: -6px;\n    background-image: linear-gradient(71deg,#6aacf4,#18ebd6);\n  }\n  .time:before {\n    content: \'\';\n    width: 26px;\n    height: 26px;\n    border-radius: 30px;\n    opacity: 0.22;\n    background-image: linear-gradient(to right,#6aacf4,#18ebd6);\n    position: absolute;\n    right: -13px;\n    top: -1px;\n  }\n  .description {\n    margin: 0 0 3em;\n    float: right;\n    width: 66%;\n    padding-left: 30px;\n    position: relative;\n  }\n  .description p {\n    line-height: 1;\n    font-size: 18px;\n    ', ';\n    margin-bottom: 5px;\n    font-weight: 700;\n    color: #000000;\n  }\n  .description h6 {\n    line-height: 1;\n    margin-top: 8px;\n    color: #808080;\n    font-weight: 600;\n    ', ';\n  }\n  .time h3 {\n    font-size: 15px;\n    ', ';\n    color: #000000;\n  }\n  .badge-time {\n    color: #5a5f68;\n  }\n  .badge-panel {\n    color: #ba7b06;\n  }\n  .emoji {\n    margin-right: 3px;\n  }\n'], ['\n  clear: both;\n  text-align: left;\n  position: relative;\n  .time {\n    margin-bottom: .5em;\n    float: left;\n    width: 33%;\n    padding-right: 30px;\n    text-align: right;\n    position: relative;\n  }\n  .time:after {\n    content: \'\';\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border-radius: 12px;\n    top: 6px;\n    right: -6px;\n    background-image: linear-gradient(71deg,#6aacf4,#18ebd6);\n  }\n  .time:before {\n    content: \'\';\n    width: 26px;\n    height: 26px;\n    border-radius: 30px;\n    opacity: 0.22;\n    background-image: linear-gradient(to right,#6aacf4,#18ebd6);\n    position: absolute;\n    right: -13px;\n    top: -1px;\n  }\n  .description {\n    margin: 0 0 3em;\n    float: right;\n    width: 66%;\n    padding-left: 30px;\n    position: relative;\n  }\n  .description p {\n    line-height: 1;\n    font-size: 18px;\n    ', ';\n    margin-bottom: 5px;\n    font-weight: 700;\n    color: #000000;\n  }\n  .description h6 {\n    line-height: 1;\n    margin-top: 8px;\n    color: #808080;\n    font-weight: 600;\n    ', ';\n  }\n  .time h3 {\n    font-size: 15px;\n    ', ';\n    color: #000000;\n  }\n  .badge-time {\n    color: #5a5f68;\n  }\n  .badge-panel {\n    color: #ba7b06;\n  }\n  .emoji {\n    margin-right: 3px;\n  }\n']);

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

var EntryBox = _styledComponents2.default.div(_templateObject, medium('line-height: 1; font-size: 22px;'), medium('line-height: 1.5; margin-top: 10px;'), medium('font-size: 17px; font-weight: 700;'));

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
        props.time
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
      props.badge && _react2.default.createElement(
        'p',
        null,
        props.badge
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  font-size: 19px;\n  font-weight: 400;\n  line-height: 1.5;\n  list-style-image: url(', ');\n  list-style-position: inside;\n  color: #707070\n  a {\n    color: #61B2F0;\n  }\n  a:hover {\n    color: #0088f3;\n  }\n'], ['\n  text-align: left;\n  font-size: 19px;\n  font-weight: 400;\n  line-height: 1.5;\n  list-style-image: url(', ');\n  list-style-position: inside;\n  color: #707070\n  a {\n    color: #61B2F0;\n  }\n  a:hover {\n    color: #0088f3;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: 50px 8.5%;\n  h3 {\n    margin-bottom: 5px;\n    margin-top: 10px;\n  }\n\n  a.button-strong2 {\n    text-decoration: none;\n    width: auto;\n    padding: 10px 15px;\n    margin-left: 15px;\n    white-space: nowrap;\n    line-height: 1;\n    font-size: 15px;\n    border: 0;\n    border-radius: 3px;\n    outline: 0;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgba(0,0,0,0);\n    color: #FFFFFF;\n    background-image: linear-gradient( 130deg,#562fbb,#be64d6 );\n    display: flex;\n    align-items: center;\n    span {\n      font-weight: 800;\n    }\n'], ['\n  width: 100%;\n  padding: 50px 8.5%;\n  h3 {\n    margin-bottom: 5px;\n    margin-top: 10px;\n  }\n\n  a.button-strong2 {\n    text-decoration: none;\n    width: auto;\n    padding: 10px 15px;\n    margin-left: 15px;\n    white-space: nowrap;\n    line-height: 1;\n    font-size: 15px;\n    border: 0;\n    border-radius: 3px;\n    outline: 0;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgba(0,0,0,0);\n    color: #FFFFFF;\n    background-image: linear-gradient( 130deg,#562fbb,#be64d6 );\n    display: flex;\n    align-items: center;\n    span {\n      font-weight: 800;\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _oval = __webpack_require__(21);

var _oval2 = _interopRequireDefault(_oval);

var _reactStatic = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Criteria = _styledComponents2.default.ul(_templateObject, _oval2.default);
var Container = _styledComponents2.default.div(_templateObject2);

var Registration = function Registration() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/registration' },
    _react2.default.createElement(
      _Section2.default,
      { className: 'white all-page' },
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
            'Community ticket'
          ),
          _react2.default.createElement(
            'p',
            null,
            'We have a portion of tickets initially reserved for Aragon community members, those who have supported and helped us get to this point in time that we can make AraCon a reality.',
            _react2.default.createElement('br', null),
            ' ',
            _react2.default.createElement('br', null)
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
            'You have contributed to the development of the Aragon Project'
          ),
          _react2.default.createElement(
            'li',
            null,
            'You\u2019re actively participating in discussions on our official community chats (',
            _react2.default.createElement(
              _ui.SafeLink,
              { href: 'https://aragon.chat', target: '_blank' },
              'https://aragon.chat'
            ),
            ' & ',
            _react2.default.createElement(
              _ui.SafeLink,
              { href: 'https://research.aragon.org', target: '_blank' },
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
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _ui.Text,
          null,
          _react2.default.createElement(
            'p',
            null,
            'If you meet one of the criteria above, please email us with the proof at ',
            _react2.default.createElement(
              _ui.SafeLink,
              { href: 'mailto:info@aracon.one' },
              'info@aracon.one'
            ),
            ' and we will send you a registration link for a Community ticket.'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'h3',
            null,
            'General Admission - \u20AC150'
          ),
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
          'div',
          { className: 'button-strong-div' },
          _react2.default.createElement(
            _ui.SafeLink,
            { className: 'button-strong', href: 'https://ti.to/aragon/aracon-one/', target: '_blank' },
            _react2.default.createElement(
              'span',
              null,
              'Pay with card'
            )
          ),
          _react2.default.createElement(
            _ui.SafeLink,
            { className: 'button-strong2',
              href: 'https://commerce.coinbase.com/checkout/56fa004e-1d89-4b22-9a14-0bc1296c2656', target: '_blank' },
            _react2.default.createElement(
              'span',
              null,
              'Pay with crypto'
            )
          ),
          _react2.default.createElement('script', { src: 'https://commerce.coinbase.com/v1/checkout.js?version=201807' })
        )
      )
    )
  );
};

exports.default = Registration;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMTAwJSIgeDI9IjUwJSIgeTE9Ii00OS41NzQlIiB5Mj0iMTAwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2QUFDRjQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMThFQkQ2Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxjaXJjbGUgY3g9IjEyNS41IiBjeT0iNDQ4LjUiIHI9IjQuNSIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIxIC00NDQpIi8+Cjwvc3ZnPgo="

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ', ';\n  padding-top: 40px;\n  width: 83%;\n'], ['\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ', ';\n  padding-top: 40px;\n  width: 83%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  max-width: 695px;\n  padding: 50px 0 50px 0;\n  text-align: left;\n  ', ';\n'], ['\n  width: 100%;\n  margin: 0;\n  max-width: 695px;\n  padding: 50px 0 50px 0;\n  text-align: left;\n  ', ';\n']);

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

var OuterContainer = _styledComponents2.default.div(_templateObject, large('justify-content: space-between; max-width: 1440px !important; margin: auto; flex-direction: row;'));

var Container = _styledComponents2.default.div(_templateObject2, large('width: 41%; margin: inherit'));

var Volunteer = function Volunteer() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/volunteer' },
    _react2.default.createElement(
      _Section2.default,
      { className: 'light light-form all-page' },
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
              'AraCon is looking for volunteers who are interested in getting some behind the scenes experience putting on one of the most iconic blockchain events of the year. You could be assigned to do a number of various tasks that will ensure our guests and presenters have an exceptional experience.'
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
        ),
        _react2.default.createElement(_Forms2.default, { type: 'speakers', src: 'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2Bnex51b1b2jCZWBQtfTcaMTwCxvLp_2BTsBh0bYRiVb2M.js' })
      )
    )
  );
};

exports.default = Volunteer;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ', ';\n  padding-top: 40px;\n  width: 83%;\n'], ['\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ', ';\n  padding-top: 40px;\n  width: 83%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 695px;\n  padding: 50px 0 50px 0;\n  text-align: left;\n  ', ';\n  p {\n    color: #dad7d7;\n  }\n'], ['\n  width: 100%;\n  max-width: 695px;\n  padding: 50px 0 50px 0;\n  text-align: left;\n  ', ';\n  p {\n    color: #dad7d7;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: block;\n  input, textarea {\n    display: block;\n    background: #FFF;\n    border: 1px solid #999;\n    box-sizing: border-box;\n    padding: 6px;\n    -webkit-transition: all 0.1s linear;\n    transition: all 0.1s linear;\n    border-radius: 0;\n    background-clip: padding-box;\n    width: 400px;\n    max-width: 100%;\n    margin: 0 0 50px 0;\n  }\n  p {\n    font-size: 20px !important;\n    color: white;\n    padding-bottom: 15px;\n  }\n'], ['\n  display: block;\n  input, textarea {\n    display: block;\n    background: #FFF;\n    border: 1px solid #999;\n    box-sizing: border-box;\n    padding: 6px;\n    -webkit-transition: all 0.1s linear;\n    transition: all 0.1s linear;\n    border-radius: 0;\n    background-clip: padding-box;\n    width: 400px;\n    max-width: 100%;\n    margin: 0 0 50px 0;\n  }\n  p {\n    font-size: 20px !important;\n    color: white;\n    padding-bottom: 15px;\n  }\n']);

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

var OuterContainer = _styledComponents2.default.div(_templateObject, large('justify-content: space-between; max-width: 1440px !important; margin: auto; flex-direction: row;'));

var Container = _styledComponents2.default.div(_templateObject2, large('width: 41%;'));

var Form = _styledComponents2.default.form(_templateObject3);

var Contact = function Contact() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/contact' },
    _react2.default.createElement(
      _Section2.default,
      { className: 'dark dark-form all-page' },
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
              'If you have any questions, ideas or suggestions, please contact us through this form or at ',
              _react2.default.createElement(
                'a',
                { href: 'mailto:info@aracon.one' },
                'info@aracon.one'
              )
            )
          ),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            Form,
            { action: 'https://formspree.io/info@aracon.one', method: 'POST' },
            _react2.default.createElement(
              'p',
              null,
              'Full Name'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'name', placeholder: 'Full Name' }),
            _react2.default.createElement(
              'p',
              null,
              'Email'
            ),
            _react2.default.createElement('input', { type: 'email', name: '_replyto', placeholder: 'Email' }),
            _react2.default.createElement(
              'p',
              null,
              'Message'
            ),
            _react2.default.createElement('textarea', { type: 'text', rows: '4', name: 'message', placeholder: 'Message' }),
            _react2.default.createElement('input', { type: 'hidden', name: '_next', value: 'https://aracon.one/contact-thanks' }),
            _react2.default.createElement(
              _ui.Button,
              { mode: 'strong', type: 'submit' },
              'SEND'
            )
          )
        )
      )
    )
  );
};

exports.default = Contact;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ', ';\n  padding-top: 40px;\n  width: 83%;\n'], ['\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ', ';\n  padding-top: 40px;\n  width: 83%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 695px;\n  padding: 50px 0 50px 0;\n  text-align: left;\n  ', ';\n  p {\n    color: #dad7d7;\n  }\n'], ['\n  width: 100%;\n  max-width: 695px;\n  padding: 50px 0 50px 0;\n  text-align: left;\n  ', ';\n  p {\n    color: #dad7d7;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  ', ';\n  justify-content: flex-start;\n\n  h3 {\n    margin-bottom: 25px;\n    line-height: 1.5;\n    background: -webkit-linear-gradient(left,#7af7d0,#64b0f1);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: 900;\n    text-align: left;\n    ', ';\n    max-width: 400px;\n    margin-top: 70px;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  ', ';\n  justify-content: flex-start;\n\n  h3 {\n    margin-bottom: 25px;\n    line-height: 1.5;\n    background: -webkit-linear-gradient(left,#7af7d0,#64b0f1);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-weight: 900;\n    text-align: left;\n    ', ';\n    max-width: 400px;\n    margin-top: 70px;\n  }\n']);

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

var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var OuterContainer = _styledComponents2.default.div(_templateObject, large('justify-content: space-between; max-width: 1440px !important; margin: auto; flex-direction: row;'));

var Container = _styledComponents2.default.div(_templateObject2, large('width: 41%;'));

var ThanksContainer = _styledComponents2.default.div(_templateObject3, large('justify-content: center;'), large('text-align: center;'));

var ContactThanks = function ContactThanks() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/contact' },
    _react2.default.createElement(
      _Section2.default,
      { className: 'dark dark-form all-page' },
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
        ),
        _react2.default.createElement(
          ThanksContainer,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Thank you! Your message has been sent successfully.'
          )
        )
      )
    )
  );
};

exports.default = ContactThanks;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: white;\n  text-align: left;\n  h2 {\n    text-transform: uppercase;\n    font-size: 22px;\n    margin-bottom: 5px;\n    color: #000000;\n  }\n  p {\n    margin-bottom: 30px;\n  }\n  ul {\n    list-style-image: url(', ');\n    list-style-position: inside;\n    font-size: 19px;\n    line-height: 27px;\n    color: #707070;\n  }\n  .wrapper {\n    margin-bottom: 30px;\n    p {\n      margin-bottom: 0px;\n    }\n  }\n\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background: white;\n  text-align: left;\n  h2 {\n    text-transform: uppercase;\n    font-size: 22px;\n    margin-bottom: 5px;\n    color: #000000;\n  }\n  p {\n    margin-bottom: 30px;\n  }\n  ul {\n    list-style-image: url(', ');\n    list-style-position: inside;\n    font-size: 19px;\n    line-height: 27px;\n    color: #707070;\n  }\n  .wrapper {\n    margin-bottom: 30px;\n    p {\n      margin-bottom: 0px;\n    }\n  }\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n'], ['\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _Question = __webpack_require__(109);

var _Question2 = _interopRequireDefault(_Question);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _oval = __webpack_require__(21);

var _oval2 = _interopRequireDefault(_oval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FaqBox = _styledComponents2.default.div(_templateObject, _oval2.default);
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
              'AraCon is the flagship event of the Aragon Project. It is organised by the Aragon Association for the Aragon community and anyone interested in the decentralized web, governance, DAOs, and digital jurisdictions.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'When and where is AraCon happening?', answer: _react2.default.createElement(
              'p',
              null,
              'AraCon is taking place on 29th-30th of January 2019, at ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://www.google.com/maps/place/BOLLE+Fests%C3%A4le/@52.52478,13.34647,15z/data=!4m2!3m1!1s0x0:0xecf15562de88eae5?sa=X&ved=2ahUKEwiJ_q-m99rcAhVBY1AKHW_0C2UQ_BIwDnoECAsQCw', target: '_blank' },
                'Bolle Fests\xE4le'
              ),
              ' in Berlin, Germany.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'Why should I attend AraCon?', answer: _react2.default.createElement(
              'div',
              { className: 'wrapper' },
              _react2.default.createElement(
                'p',
                null,
                'AraCon will be the best place for you to get a great understanding of Web 3.0 and Aragon. You will discover the latest developments and glimpses of what\'s to come from our carefully planned program. Every speaker is passionate and deeply involved in creating this decentralized future.',
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                'The event has four distinctive themes which we\'ll cover:',
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null)
              ),
              _react2.default.createElement(
                'ul',
                null,
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
              )
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How many people can attend AraCon?', answer: _react2.default.createElement(
              'div',
              { className: 'wrapper' },
              _react2.default.createElement(
                'p',
                null,
                'There will be room for 500 attendees at the venue.'
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
              'There will be over 30 speakers, you can view all the confirmed speakers ',
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/speakers' },
                'here'
              ),
              '. We\u2019ll be adding more speakers to the list soon. Speakers come from a variety of backgrounds and projects/companies like ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://0xproject.com/', target: '_blank' },
                '0x'
              ),
              ', ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://consensys.net', target: '_blank' },
                'ConsenSys'
              ),
              ', ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://www.democracy.earth/', target: '_blank' },
                'Democracy Earth'
              ),
              ', ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://district0x.io/', target: '_blank' },
                'district0x'
              ),
              ', ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://giveth.io/', target: '_blank' },
                'Giveth'
              ),
              ', ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://gnosis.pm/', target: '_blank' },
                'Gnosis'
              ),
              ' & ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://www.parity.io/', target: '_blank' },
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
              'We have negotiated a special deal for AraCon guests with AMERON Berlin ABION Hotel. You can find more info about it ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://reservations.travelclick.com/12121?groupID=2378658', target: '_blank' },
                'here'
              ),
              '. If this hotel get booked out or you prefer to stay somewhere else, here\u2019s the ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://docs.google.com/document/d/1jDL6gBgGCi0g_i4y9Fb91EBV3dbsCB0FMWlFrXcsBsc/edit?usp=sharing', target: '_blank' },
                'list of hotels in the area'
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
                { to: '/speakerapplication' },
                'here'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How can my company become an official partner of AraCon?', answer: _react2.default.createElement(
              'p',
              null,
              'If you wish your company partner with the conference, contribute in any way, or organise a satellite event, please send us your proposal at ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'mailto:info@aracon.one' },
                'info@aracon.one'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How can I contact the AraCon team?', answer: _react2.default.createElement(
              'p',
              null,
              'You can contact the team via email ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'mailto:info@aracon.one' },
                'info@aracon.one'
              ),
              '.'
            ) }),
          _react2.default.createElement(_Question2.default, { question: 'How can I follow AraCon on social media?', answer: _react2.default.createElement(
              'p',
              null,
              'You can follow news and updates on AraCon on Twitter via ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://twitter.com/AragonProject', target: '_blank' },
                '@AragonProject'
              ),
              ' and the official hashtag ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://twitter.com/hashtag/AraCon2019', target: '_blank' },
                '#AraCon2019'
              ),
              '.',
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              'You can also ',
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://eepurl.com/dHogTD', target: '_blank' },
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
                _ui.SafeLink,
                { href: 'https://wiki.aragon.org/documentation/Code_of_Conduct/', target: '_blank' },
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .text {\n    width: 100%;\n    padding-right: 0;\n    ', ';\n  }\n  .image {\n    width: 100%;\n    ', ';\n    img {\n      width: 100%;\n    }\n  }\n  p, h2 {\n    text-align: center;\n    ', ';\n    margin-bottom: 30px;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .text {\n    width: 100%;\n    padding-right: 0;\n    ', ';\n  }\n  .image {\n    width: 100%;\n    ', ';\n    img {\n      width: 100%;\n    }\n  }\n  p, h2 {\n    text-align: center;\n    ', ';\n    margin-bottom: 30px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  ', ';\n'], ['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border-right: solid 100vw transparent;\n  border-top: 15vh solid #1d1d2a;\n  margin-top: -1px;\n  background-color: transparent;\n  z-index: 5;\n  position:relative;\n'], ['\n  border-right: solid 100vw transparent;\n  border-top: 15vh solid #1d1d2a;\n  margin-top: -1px;\n  background-color: transparent;\n  z-index: 5;\n  position:relative;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _Map = __webpack_require__(110);

var _Map2 = _interopRequireDefault(_Map);

var _Venue = __webpack_require__(113);

var _Venue2 = _interopRequireDefault(_Venue);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _accomodation = __webpack_require__(115);

var _accomodation2 = _interopRequireDefault(_accomodation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var AccomodationBox = _styledComponents2.default.div(_templateObject, medium('width: 50%; padding-right: 40px;'), medium('width: 50%;'), medium('text-align: left;'));

var Content = _styledComponents2.default.div(_templateObject2, medium('flex-direction: row;'));

var AccomodationTriangle = _styledComponents2.default.div(_templateObject3);

var Travel = function Travel() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/travel-information' },
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
              'div',
              { className: 'button-strong-div' },
              _react2.default.createElement(
                _ui.SafeLink,
                { className: 'button-strong', href: 'https://reservations.travelclick.com/12121?groupID=2378658', target: '_blank' },
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
          ),
          _react2.default.createElement(
            'div',
            { className: 'image' },
            _react2.default.createElement('img', { src: _accomodation2.default, alt: '' })
          )
        )
      )
    )
  );
};

exports.default = Travel;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(13);

var _locate = __webpack_require__(111);

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
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzYgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIzNC40NTU5ODcxJSIgeDI9IjEwMCUiIHkyPSI2OS45NzU3NjQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2QUFDRjQiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE4RUJENiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBUkFDT04iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MC4wMDAwMDAsIC0zMzQwLjAwMDAwMCkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAuMDAwMDAwLCAzMDU1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjg1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJkZXBhcnR1cmVzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM0LjcyODA3NDEsMi4wOTkzMjQxOCBDMzIuMjUzNDA3NCwwLjY1NTA0NjcwMyAyOS40NDE1NTU2LDEuNDIyMjQ3MjUgMjcuNTE4ODE0OCwyLjMyMDA3MTQzIEwyMS43ODcxMTExLDQuOTk2NDgzNTIgTDExLjkyOTMzMzMsMC4wMzE1OTg5MDExIEw2LjA1ODc0MDc0LDAuMjg0MTY3NTgyIEwxNC4xOTg5NjMsOC41NDc5NDc4IEw5LjAxMTE4NTE5LDExLjAxNTcwMzMgTDMuNjEzNzc3NzgsOC45NTg3MzM1MiBMMCwxMC42NDYwODUyIEwzLjI2NTg1MTg1LDE0LjcwNzEzNzQgQzIuOTIwODE0ODEsMTUuMTE5MzMyNCAyLjYwODE0ODE1LDE1LjY5OTY4NDEgMi44OTIsMTYuMzA5MjYxIEMzLjI2Mjc0MDc0LDE3LjEwNTMxNTkgNC4zNTg1MTg1MiwxNy41MDY1MzMgNi4xNTU5MjU5MywxNy41MDY0NTg4IEM2LjUyNDUxODUyLDE3LjUwNjQ1ODggNi45MjI2NjY2NywxNy40ODk2MjA5IDcuMzUsMTcuNDU1Nzk2NyBDOS4zMjMwMzcwNCwxNy4yOTk3MzA4IDExLjQ2MjE0ODEsMTYuNzk1NDA5MyAxMi43OTk3MDM3LDE2LjE3MDg0ODkgTDMzLjI4ODI5NjMsNi42MDM3MjUyNyBDMzUuMDU3OTI1OSw1Ljc3NzMzMjQyIDM1LjkzOTQwNzQsNC45MDk2MjM2MyAzNS45ODMxMTExLDMuOTUwODI2OTIgQzM2LjAwNTc3NzgsMy40NTM1NTIyIDM1LjgwNjQ0NDQsMi43Mjg0ODM1MiAzNC43MjgwNzQxLDIuMDk5MzI0MTggWiBNMzIuNjYyMDc0MSw1LjI1OTE0MDExIEwxMi4xNzM1NTU2LDE0LjgyNjMzNzkgQzExLjAzNCwxNS4zNTg0NzUzIDkuMTYzMTExMTEsMTUuODA0MzQ2MiA3LjQwNzI1OTI2LDE1Ljk2MjE5MjMgQzUuNjEyNTkyNTksMTYuMTIzNTI0NyA0LjY1MzAzNzA0LDE1LjkyMDk1MDUgNC4zMzMxODUxOSwxNS43NDg5MzY4IEM0LjM5OTAzNzA0LDE1LjY1ODY2NDggNC41MjIsMTUuNTE2ODQwNyA0Ljc0ODg4ODg5LDE1LjMxNjg2MjYgTDUuMjgxMDM3MDQsMTQuODQ3ODQ4OSBMMi4zMzk3MDM3LDExLjE5MDM4NzQgTDMuNjcyLDEwLjU2ODIwMDUgTDkuMDc1MTg1MTksMTIuNjI3NTQ0IEwxNi43MTczMzMzLDguOTkyMjYwOTkgTDkuNDU4MDc0MDcsMS42MjI3NDQ1MSBMMTEuNjA3Nzc3OCwxLjUzMDI0NzI1IEwyMS43NjI1MTg1LDYuNjQ0NTk2MTUgTDI4LjE0NDc0MDcsMy42NjQ1MDgyNCBDMzAuNDc1NjI5NiwyLjU3NjEyNjM3IDMyLjQzOTQ4MTUsMi40ODA4ODQ2MiAzMy45ODIsMy4zODA5MzQwNyBMMzMuOTgyMDc0MSwzLjM4MTAwODI0IEMzNC4zNzA3NDA3LDMuNjA3NzYzNzQgMzQuNTA2NTkyNiwzLjgwNTU5MDY2IDM0LjUwMzAzNywzLjg4MzE3ODU3IEMzNC41MDI4ODg5LDMuODg4NTE5MjMgMzQuNDU4MzcwNCw0LjQyMDUwODI0IDMyLjY2MjA3NDEsNS4yNTkxNDAxMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzQgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5idXM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTEzLjU3OTk2MyUiIHkyPSI1MCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZBQUNGNCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMThFQkQ2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFSQUNPTiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkxLjAwMDAwMCwgLTM0NzUuMDAwMDAwKSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MC4wMDAwMDAsIDMwNTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iYnVzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgNDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNCw4LjQxNjA1OTc2IEMzNCwzLjc3NTQ1ODkyIDMwLjI4MTAzNzUsMCAyNS43MDk4NzkyLDAgTDQuOTY3MjU4MzMsMCBDMi4yMjgyNzUsMS4wMjE4OTM5NWUtMTUgMCwyLjI2MjE5NzYzIDAsNS4wNDI3OTAwOCBMMCwxNS40MTk1MzE0IEwzLjgxMTU0MTY3LDE1LjQxOTUzMTQgQzQuMTM1ODE2NjcsMTYuODk0MTA1NCA1LjQzNDE5MTY3LDE4IDYuOTgzMDMzMzMsMTggQzguNTMxODc1LDE4IDkuODMwMzIwODMsMTYuODk0MTA1NCAxMC4xNTQ1OTU4LDE1LjQxOTUzMTQgTDI0LjAzNjAxNjcsMTUuNDE5NTMxNCBDMjQuMzYwMjkxNywxNi44OTQxMDU0IDI1LjY1ODY2NjcsMTggMjcuMjA3NTA4MywxOCBDMjguNzU2MzUsMTggMzAuMDU0NzI1LDE2Ljg5NDEwNTQgMzAuMzc5LDE1LjQxOTUzMTQgTDM0LDE1LjQxOTUzMTQgTDM0LDguNDE2MDU5NzYgWiBNMzIuMjg5OCw2LjM5Nzc3ODggTDI4LjU2OTQyMDgsNi4zOTc3Nzg4IEwyOC41Njk0MjA4LDIuMDcxNDIyMDEgQzMwLjM0NTU2NjcsMi44OTk2NzQ0MSAzMS43MTYyNjI1LDQuNDc0NDkwMTQgMzIuMjg5OCw2LjM5Nzc3ODggWiBNMjcuMTUyNzU0MiwxLjU5MzI5NjQ1IEwyNy4xNTI3NTQyLDYuMzk3NzA2ODkgTDIzLjEzODkxMjUsNi4zOTc3MDY4OSBMMjMuMTM4OTEyNSwxLjQzODExNTk3IEwyNS43MDk4NzkyLDEuNDM4MTE1OTcgQzI2LjIwNDcyMDgsMS40MzgxODc4OCAyNi42ODczMDgzLDEuNDkxOTc2MTEgMjcuMTUyNzU0MiwxLjU5MzI5NjQ1IFogTTYuODQ3MjQ1ODMsNi4zOTc3Nzg4IEw2Ljg0NzI0NTgzLDEuNDM4MTg3ODggTDEwLjg2MTE1ODMsMS40MzgxODc4OCBMMTAuODYxMTU4Myw2LjM5Nzc3ODggTDYuODQ3MjQ1ODMsNi4zOTc3Nzg4IFogTTEyLjI3Nzc1NDIsMS40MzgxODc4OCBMMTYuMjkxNjY2NywxLjQzODE4Nzg4IEwxNi4yOTE2NjY3LDYuMzk3Nzc4OCBMMTIuMjc3NzU0Miw2LjM5Nzc3ODggTDEyLjI3Nzc1NDIsMS40MzgxODc4OCBaIE0xNy43MDgzMzMzLDEuNDM4MTg3ODggTDIxLjcyMjI0NTgsMS40MzgxODc4OCBMMjEuNzIyMjQ1OCw2LjM5Nzc3ODggTDE3LjcwODMzMzMsNi4zOTc3Nzg4IEwxNy43MDgzMzMzLDEuNDM4MTg3ODggWiBNNC45NjcyNTgzMywxLjQzODE4Nzg4IEw1LjQzMDUwODMzLDEuNDM4MTg3ODggTDUuNDMwNTA4MzMsNi4zOTc3Nzg4IEwxLjQxNjY2NjY3LDYuMzk3Nzc4OCBMMS40MTY2NjY2Nyw1LjA0Mjc5MDA4IEMxLjQxNjY2NjY3LDMuMDU1MjE0NDMgMy4wMDk0OTU4MywxLjQzODE4Nzg4IDQuOTY3MjU4MzMsMS40MzgxODc4OCBaIE02Ljk4MzAzMzMzLDE2LjU2MTc0MDIgQzUuOTcyMDI5MTcsMTYuNTYxNzQwMiA1LjE0OTUxMjUsMTUuNzI2NzI4MyA1LjE0OTUxMjUsMTQuNzAwMzY1NSBDNS4xNDk1MTI1LDEzLjY3NDAwMjggNS45NzIwMjkxNywxMi44Mzg5MTkgNi45ODMwMzMzMywxMi44Mzg5MTkgQzcuOTk0MDM3NSwxMi44Mzg5MTkgOC44MTY1NTQxNywxMy42NzM5MzA4IDguODE2NTU0MTcsMTQuNzAwMzY1NSBDOC44MTY2MjUsMTUuNzI2NzI4MyA3Ljk5NDAzNzUsMTYuNTYxNzQwMiA2Ljk4MzAzMzMzLDE2LjU2MTc0MDIgWiBNNi45ODMwMzMzMywxMS40MDA4MDMgQzUuNDM0MTkxNjcsMTEuNDAwODAzIDQuMTM1NzQ1ODMsMTIuNTA2Njk3NiAzLjgxMTU0MTY3LDEzLjk4MTM0MzUgTDEuNDE2NjY2NjcsMTMuOTgxMzQzNSBMMS40MTY2NjY2Nyw3LjgzNTk2NjY4IEwyMS43MjIyNDU4LDcuODM1OTY2NjggTDIxLjcyMjI0NTgsMTMuOTgxMzQzNSBMMTAuMTU0NTk1OCwxMy45ODEzNDM1IEM5LjgzMDMyMDgzLDEyLjUwNjY5NzYgOC41MzE5NDU4MywxMS40MDA4MDMgNi45ODMwMzMzMywxMS40MDA4MDMgWiBNMjcuMjA3NTA4MywxNi41NjE3NDAyIEMyNi4xOTY1NzUsMTYuNTYxNzQwMiAyNS4zNzM5ODc1LDE1LjcyNjcyODMgMjUuMzczOTg3NSwxNC43MDAzNjU1IEMyNS4zNzM5ODc1LDEzLjY3NDAwMjggMjYuMTk2NTA0MiwxMi44Mzg5MTkgMjcuMjA3NTA4MywxMi44Mzg5MTkgQzI4LjIxODUxMjUsMTIuODM4OTE5IDI5LjA0MTAyOTIsMTMuNjczOTMwOCAyOS4wNDEwMjkyLDE0LjcwMDM2NTUgQzI5LjA0MTAyOTIsMTUuNzI2NzI4MyAyOC4yMTg1MTI1LDE2LjU2MTc0MDIgMjcuMjA3NTA4MywxNi41NjE3NDAyIFogTTMwLjM3OTA3MDgsMTMuOTgxMjcxNiBDMzAuMDU0Nzk1OCwxMi41MDY2MjU3IDI4Ljc1NjQyMDgsMTEuNDAwNzMxMSAyNy4yMDc1NzkyLDExLjQwMDczMTEgQzI1LjY1ODczNzUsMTEuNDAwNzMxMSAyNC4zNjAyOTE3LDEyLjUwNjYyNTcgMjQuMDM2MDg3NSwxMy45ODEyNzE2IEwyMy4xMzg5ODMzLDEzLjk4MTI3MTYgTDIzLjEzODk4MzMsNy44MzU4OTQ3NyBMMzIuNTU5NDYyNSw3LjgzNTg5NDc3IEMzMi41NzUwNDU4LDguMDI3MjQ1NjcgMzIuNTgzNDA0Miw4LjIyMDY4MTk0IDMyLjU4MzQwNDIsOC40MTU5ODc4NiBMMzIuNTgzNDA0Miw5LjgzMzYwOTY1IEwzMC41NjMzMDgzLDkuODMzNjA5NjUgTDMwLjU2MzMwODMsMTEuMjcxNzk3NSBMMzIuNTgzMzMzMywxMS4yNzE3OTc1IEwzMi41ODM0MDQyLDEzLjk4MTI3MTYgTDMwLjM3OTA3MDgsMTMuOTgxMjcxNiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .h1box {\n    max-width: 1200px;\n    margin: auto;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .h1box {\n    max-width: 1200px;\n    margin: auto;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  max-width: 1200px;\n  margin: auto;\n  p {\n    text-align: left;\n    max-width: 800px;\n  }\n'], ['\n  max-width: 1200px;\n  margin: auto;\n  p {\n    text-align: left;\n    max-width: 800px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 1195px;\n  margin: auto;\n  margin-top: 30px;\n  border-radius: 6.4px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);\n  background-color: #ffffff;\n'], ['\n  width: 100%;\n  max-width: 1195px;\n  margin: auto;\n  margin-top: 30px;\n  border-radius: 6.4px;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);\n  background-color: #ffffff;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  min-height: 91px;\n  background-image: linear-gradient(261deg, #6aacf4, #18ebd6);\n  display: flex;\n  align-items: center;\n  padding: 0 30px;\n  h2{\n    font-size: 26px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n    margin-bottom: 0px;\n    margin-top: 0px;\n  }\n\n'], ['\n  min-height: 91px;\n  background-image: linear-gradient(261deg, #6aacf4, #18ebd6);\n  display: flex;\n  align-items: center;\n  padding: 0 30px;\n  h2{\n    font-size: 26px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n    margin-bottom: 0px;\n    margin-top: 0px;\n  }\n\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  text-align: left;\n  padding: 30px;\n  h2 {\n    font-size: 20px;\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #000000;\n    margin-bottom: 0px;\n    margin-top: 20px;\n  }\n  p {\n    font-size: 20px;\n    font-weight: 300;\n  }\n'], ['\n  text-align: left;\n  padding: 30px;\n  h2 {\n    font-size: 20px;\n    font-weight: 600;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #000000;\n    margin-bottom: 0px;\n    margin-top: 20px;\n  }\n  p {\n    font-size: 20px;\n    font-weight: 300;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  height: 50px;\n  margin-top: 15px;\n'], ['\n  height: 50px;\n  margin-top: 15px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  height: 35px;\n  margin-top: 15px;\n'], ['\n  height: 35px;\n  margin-top: 15px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  height: 67px;\n  margin-left: -15px;\n'], ['\n  height: 67px;\n  margin-left: -15px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(4);

var _Cambrial = __webpack_require__(116);

var _Cambrial2 = _interopRequireDefault(_Cambrial);

var _Witnet = __webpack_require__(117);

var _Witnet2 = _interopRequireDefault(_Witnet);

var _dgov = __webpack_require__(118);

var _dgov2 = _interopRequireDefault(_dgov);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var SatelliteBox = _styledComponents2.default.div(_templateObject);
var SubtitleBox = _styledComponents2.default.div(_templateObject2);

var Event = _styledComponents2.default.div(_templateObject3);

var EventHeader = _styledComponents2.default.div(_templateObject4);

var EventBody = _styledComponents2.default.div(_templateObject5);
var CambrialImg = _styledComponents2.default.img(_templateObject6);

var WitnetImg = _styledComponents2.default.img(_templateObject7);

var DgovImg = _styledComponents2.default.img(_templateObject8);

var Satellite = function Satellite() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/satellite-events' },
    _react2.default.createElement(
      _Section2.default,
      null,
      _react2.default.createElement(
        SatelliteBox,
        null,
        _react2.default.createElement(
          'div',
          { className: 'h1box' },
          _react2.default.createElement(
            'h1',
            null,
            'Satellite Events'
          )
        ),
        _react2.default.createElement(
          Event,
          null,
          _react2.default.createElement(
            EventHeader,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'DGOV Community Council'
            )
          ),
          _react2.default.createElement(
            EventBody,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Organizer:'
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://dgov.foundation/', target: '_blank' },
              _react2.default.createElement(DgovImg, { src: _dgov2.default })
            ),
            _react2.default.createElement(
              'h2',
              null,
              'When:'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Jan 27-28, 2019'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Where:'
            ),
            _react2.default.createElement(
              'p',
              null,
              'FULL NODE: Skalitzer Strasse 85-86, 10997 Berlin, Germany'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Event Description:'
            ),
            _react2.default.createElement(
              'p',
              null,
              'The event will stretch over two full days in a co-creative, open space environment concluding with a dinner gathering for the participants on the first evening. After the opening sessions we will have an open space and facilitators helping us design the working circles. We will continue with the working circles in the morning of the second day. In the afternoon, we will openly share our learnings and insights in a public meetup format with fishbowl-debates.'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              'You will be among a maximum of forty participants to gather with the intention to create governance models which take a human centric, horizontal approach to the management of shared-resources. We foster a community of participants which have an inherent interest in collaboration to exchange research and learnings to support their own projects while accelerating the innovation on distributed governance models.'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              'More information and registration details ',
              _react2.default.createElement(
                'a',
                { href: 'https://wiki.dgov.foundation/dgov-community-council', target: '_blank' },
                'here'
              ),
              '.'
            )
          )
        ),
        _react2.default.createElement(
          Event,
          null,
          _react2.default.createElement(
            EventHeader,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Cambrial: Investing in Governance'
            )
          ),
          _react2.default.createElement(
            EventBody,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Organizer:'
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://cambrial.com/', target: '_blank' },
              _react2.default.createElement(CambrialImg, { src: _Cambrial2.default })
            ),
            _react2.default.createElement(
              'h2',
              null,
              'When:'
            ),
            _react2.default.createElement(
              'p',
              null,
              'January 28th 2019 - 18:00-21:30'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Where:'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Secret location - the address will be revealed to selected applicants'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Event Description:'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://cambrial.com/', target: '_blank' },
                'Cambrial Capital'
              ),
              ' is running an event on participating in and valuing governance of crypto networks as an investor. They will be hosting several speakers actively investing in this space who will share their thoughts and own practices on the topic above. Find more info about the event  ',
              _react2.default.createElement(
                'a',
                { href: 'https://www.eventbrite.com/e/cambrial-investing-in-governance-tickets-53733665841', target: '_blank' },
                'here'
              ),
              '.'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'i',
                null,
                'The event has a limited capacity. Please request your invitation using ',
                _react2.default.createElement(
                  'a',
                  { href: 'https://airtable.com/shrhkXHZE2eVjoWwN', target: '_blank' },
                  'this form'
                ),
                '. The address of the venue will be sent to you if your request is successful. The event will be live-streamed and recorded.'
              )
            )
          )
        ),
        _react2.default.createElement(
          Event,
          null,
          _react2.default.createElement(
            EventHeader,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Witnet x AraCon Afterparty'
            )
          ),
          _react2.default.createElement(
            EventBody,
            null,
            _react2.default.createElement(
              'h2',
              null,
              'Organizer:'
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://witnet.io/#/', target: '_blank' },
              _react2.default.createElement(WitnetImg, { src: _Witnet2.default })
            ),
            _react2.default.createElement(
              'h2',
              null,
              'When:'
            ),
            _react2.default.createElement(
              'p',
              null,
              'January 30th 2019 - 20:00'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Where:'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Location TBC'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Event Description:'
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://witnet.io/#/', target: '_blank' },
                'Witnet'
              ),
              ' is a decentralized oracle network that connects smart contracts to the outer world. Join Witnet team for drinks, snacks and music to celebrate the anticipated launch of their Decentralized Oracle Network.'
            )
          )
        )
      )
    )
  );
};

exports.default = Satellite;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  padding: 50px 0 50px 0;\n  text-align: left;\n  ', ';\n  p {\n    color: #dad7d7;\n  }\n  h3 {\n    color: #dad7d7;\n  }\n'], ['\n  width: 100%;\n  padding: 50px 0 50px 0;\n  text-align: left;\n  ', ';\n  p {\n    color: #dad7d7;\n  }\n  h3 {\n    color: #dad7d7;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ', ';\n  padding-top: 40px;\n  width: 83%;\n'], ['\n  position: relative;\n  max-width: 1540px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  ', ';\n  padding-top: 40px;\n  width: 83%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: space-between;\n  flex-direction: column;\n  ', ';\n  margin: 30px -15px;\n  p {\n    padding-top: 10px;\n  }\n  div {\n    width: 100%;\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: space-between;\n  flex-direction: column;\n  ', ';\n  margin: 30px -15px;\n  p {\n    padding-top: 10px;\n  }\n  div {\n    width: 100%;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: space-between;\n  flex-direction: column;\n  ', ';\n  margin: 0 auto 90px auto;\n  padding-top: 40px;\n  width: 83%;\n  a {\n    padding: 20px 0px;\n    ', ';\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: space-between;\n  flex-direction: column;\n  ', ';\n  margin: 0 auto 90px auto;\n  padding-top: 40px;\n  width: 83%;\n  a {\n    padding: 20px 0px;\n    ', ';\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  text-align: right;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  ', ';\n  img {\n    max-width: 90%;\n    margin-bottom: -62px;\n  }\n'], ['\n  text-align: right;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  ', ';\n  img {\n    max-width: 90%;\n    margin-bottom: -62px;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  padding: 50px 0 50px 0!important;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: space-between;\n  flex-direction: row;\n\n  p {\n    padding-left: 15px;\n    color: #dad7d7;\n  }\n\n'], ['\n  padding: 50px 0 50px 0!important;\n  text-align: left;\n  display: flex;\n  justify-content: center;\n  align-items: space-between;\n  flex-direction: row;\n\n  p {\n    padding-left: 15px;\n    color: #dad7d7;\n  }\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _partners = __webpack_require__(119);

var _partners2 = _interopRequireDefault(_partners);

var _district = __webpack_require__(120);

var _district2 = _interopRequireDefault(_district);

var _ethNews = __webpack_require__(121);

var _ethNews2 = _interopRequireDefault(_ethNews);

var _bnc = __webpack_require__(122);

var _bnc2 = _interopRequireDefault(_bnc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};
var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var TextContainer = _styledComponents2.default.div(_templateObject, large('width: 100%;'));

var OuterContainer = _styledComponents2.default.div(_templateObject2, large('justify-content: space-between; max-width: 1440px !important; margin: auto; flex-direction: row;'));

var FlexContainer = _styledComponents2.default.div(_templateObject3, large('flex-direction: row;'));
var PartnersContainer = _styledComponents2.default.div(_templateObject4, medium('flex-direction: row;'), medium('padding: 0px 52px;'));

var PartnersBox = _styledComponents2.default.div(_templateObject5, medium('align-items: flex-end; justify-content: flex-end;'));

var DistrictBox = _styledComponents2.default.div(_templateObject6);

var Partners = function Partners() {
  return _react2.default.createElement(
    _components.Page,
    { path: '/partners' },
    _react2.default.createElement(
      _Section2.default,
      { className: 'dark dark-form ' },
      _react2.default.createElement(
        OuterContainer,
        null,
        _react2.default.createElement(
          FlexContainer,
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
                'Scholarship partners'
              )
            ),
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'p',
                null,
                'Our vision for AraCon is to gather Aragon\u2019s global community, therefore we want everyone interested in joining the event to be able to attend. We joined forces with District0x to enable community members in need of financial help, to travel to Berlin. The scholarship recipients will get a conference ticket, round-trip flight and accommodation during the conference fully covered.'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'p',
                null,
                'The applications were closed on November 23rd. Everyone was welcome to apply, but the advantage was given to applicants who have contributed the most to the Aragon community and are in financial hardship, applicants from emerging countries/regions where the average wage is lower and the applicants who\'ll be using Aragon\'s platform in the future. '
              ),
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://district0x.io/', target: '_blank' },
              _react2.default.createElement(
                DistrictBox,
                null,
                _react2.default.createElement('img', { src: _district2.default }),
                _react2.default.createElement(
                  'p',
                  null,
                  'The district0x network is a collective of decentralized marketplaces and communities known as \u2018Districts\u2019. Powered by Ethereum, Aragon, and IPFS.'
                )
              )
            )
          ),
          _react2.default.createElement(
            PartnersBox,
            null,
            _react2.default.createElement('img', { src: _partners2.default })
          )
        )
      )
    ),
    _react2.default.createElement(
      _Section2.default,
      null,
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
              'Media partners'
            )
          )
        )
      ),
      _react2.default.createElement(
        PartnersContainer,
        null,
        _react2.default.createElement(
          'a',
          { href: 'https://www.ethnews.com/', target: '_blank' },
          _react2.default.createElement('img', { src: _ethNews2.default })
        ),
        _react2.default.createElement(
          'a',
          { href: 'https://bravenewcoin.com/', target: '_blank' },
          _react2.default.createElement('img', { src: _bnc2.default })
        )
      )
    )
  );
};

exports.default = Partners;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: calc(100vh - 116px)!important;\n  h1 {\n    text-align: center;\n    margin-top: 30px;\n  }\n  iframe {\n    width: 642px;\n    height: 320px;\n    max-width: 100%;\n    max-height: 70vh;\n    margin-bottom: 70px;\n  }\n  p {\n    text-align: center;\n    color: #dad7d7;\n  }\n\n'], ['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: calc(100vh - 116px)!important;\n  h1 {\n    text-align: center;\n    margin-top: 30px;\n  }\n  iframe {\n    width: 642px;\n    height: 320px;\n    max-width: 100%;\n    max-height: 70vh;\n    margin-bottom: 70px;\n  }\n  p {\n    text-align: center;\n    color: #dad7d7;\n  }\n\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(5);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _live = __webpack_require__(123);

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
            _react2.default.createElement(
              _ui.Text,
              null,
              _react2.default.createElement(
                'div',
                { className: 'h1box' },
                _react2.default.createElement(
                  'h1',
                  null,
                  'Oops! We are not live yet!'
                ),
                _react2.default.createElement('br', null)
              ),
              _react2.default.createElement(
                'p',
                null,
                'In the mean while, check out our announcement trailer!'
              ),
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement('iframe', { className: 'livestream-video', src: 'https://www.youtube-nocookie.com/embed/49hXxj31e7c?rel=0&ecver=2', frameBorder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true })
          )
        )
      );
    }
  }]);

  return Livestream;
}(_react2.default.Component);

exports.default = Livestream;

/***/ }),
/* 33 */
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
      { className: 'white all-page' },
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(36);

var _App = __webpack_require__(37);

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
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _reactStaticRoutes = __webpack_require__(38);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(_reactStaticRoutes2.default, null)
  );
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(39);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(40);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(41);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(42);

var _reactUniversalComponent = __webpack_require__(43);

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
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/pages/Speakers', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Speakers');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/pages/Speakers';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/SpeakerApplication',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 15)), (0, _importCss3.default)('src/pages/SpeakerApplication', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/SpeakerApplication');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return 'src/pages/SpeakerApplication';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/EmptyAgenda',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/pages/EmptyAgenda', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/EmptyAgenda');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return 'src/pages/EmptyAgenda';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Agenda',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/pages/Agenda', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Agenda');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/pages/Agenda';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Registration',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('src/pages/Registration', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Registration');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return 'src/pages/Registration';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Volunteer',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 22)), (0, _importCss3.default)('src/pages/Volunteer', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Volunteer');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return 'src/pages/Volunteer';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Contact',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23)), (0, _importCss3.default)('src/pages/Contact', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Contact');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return 'src/pages/Contact';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/ContactThanks',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 24)), (0, _importCss3.default)('src/pages/ContactThanks', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/ContactThanks');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return 'src/pages/ContactThanks';
  }
}), universalOptions);
var t_9 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Faq',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 25)), (0, _importCss3.default)('src/pages/Faq', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Faq');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return 'src/pages/Faq';
  }
}), universalOptions);
var t_10 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Travel',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 26)), (0, _importCss3.default)('src/pages/Travel', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Travel');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return 'src/pages/Travel';
  }
}), universalOptions);
var t_11 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/SatelliteEvents',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 30)), (0, _importCss3.default)('src/pages/SatelliteEvents', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/SatelliteEvents');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return 'src/pages/SatelliteEvents';
  }
}), universalOptions);
var t_12 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Partners',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 31)), (0, _importCss3.default)('src/pages/Partners', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Partners');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return 'src/pages/Partners';
  }
}), universalOptions);
var t_13 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Livestream',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 32)), (0, _importCss3.default)('src/pages/Livestream', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Livestream');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return 'src/pages/Livestream';
  }
}), universalOptions);
var t_14 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/NotFound',
  file: '/Library/WebServer/Documents/aracon-website/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 33)), (0, _importCss3.default)('src/pages/NotFound', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/NotFound');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return 'src/pages/NotFound';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9, t_10, t_11, t_12, t_13, t_14];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 14

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
/* 39 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(44);

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

var _reportChunks = __webpack_require__(45);

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

var _hoistNonReactStatics = __webpack_require__(46);

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
/* 44 */
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
/* 45 */
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
/* 46 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 64px;\n  min-height: calc(100vh - 116px)!important;\n\n  section.all-page {\n    min-height: calc(100vh - 116px)!important;\n  }\n  .dark.dark-form {\n    background: #18181A;\n  }\n  .dark.dark-form {\n    background: #1f1f21;\n    ', ';\n  }\n  .light {\n    background: #fafdfd;\n  }\n  .light.light-form {\n    background: #eff5f8;\n    ', ';\n  }\n  .white {\n    background: white;\n  }\n  .button-strong-div {\n    display: flex;\n  }\n  .button-strong-div.centered {\n    justify-content: center;\n  }\n  a.button-strong {\n    text-decoration: none;\n    width: auto;\n    padding: 10px 15px;\n    white-space: nowrap;\n    line-height: 1;\n    font-size: 15px;\n    border: 0;\n    border-radius: 3px;\n    outline: 0;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgba(0,0,0,0);\n    color: #FFFFFF;\n    background-image: linear-gradient( 130deg,#00B4E6,#00F0E0 );\n    display: flex;\n    align-items: center;\n    span {\n      font-weight: 800;\n    }\n  }\n  a.button-strong:hover {\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.39);\n  }\n'], ['\n  padding-top: 64px;\n  min-height: calc(100vh - 116px)!important;\n\n  section.all-page {\n    min-height: calc(100vh - 116px)!important;\n  }\n  .dark.dark-form {\n    background: #18181A;\n  }\n  .dark.dark-form {\n    background: #1f1f21;\n    ', ';\n  }\n  .light {\n    background: #fafdfd;\n  }\n  .light.light-form {\n    background: #eff5f8;\n    ', ';\n  }\n  .white {\n    background: white;\n  }\n  .button-strong-div {\n    display: flex;\n  }\n  .button-strong-div.centered {\n    justify-content: center;\n  }\n  a.button-strong {\n    text-decoration: none;\n    width: auto;\n    padding: 10px 15px;\n    white-space: nowrap;\n    line-height: 1;\n    font-size: 15px;\n    border: 0;\n    border-radius: 3px;\n    outline: 0;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgba(0,0,0,0);\n    color: #FFFFFF;\n    background-image: linear-gradient( 130deg,#00B4E6,#00F0E0 );\n    display: flex;\n    align-items: center;\n    span {\n      font-weight: 800;\n    }\n  }\n  a.button-strong:hover {\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.39);\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _Navbar = __webpack_require__(48);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = __webpack_require__(53);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Content = _styledComponents2.default.div(_templateObject, medium('background: #18181A;'), medium('background: #fafdfd;'));

var menuItems = [['/speakers', 'Speakers'], ['/agenda', 'Agenda'], ['/satellite-events', 'Satellite Events'], ['/volunteer', 'Volunteer'], ['/contact', 'Contact'], ['/travel-information', 'Travel Information'], ['/partners', 'Partners']];

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 64px;\n  background: #18181A;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  position: fixed;\n  z-index: 5;\n\n  &.scrolled{\n    background:red;\n  }\n  &.navbar-home.navbar-animation {\n    animation-name: navbar-animation;\n    animation-duration: 1s;\n    background-color: #18181A;\n  }\n\n  &.navbar-home.navbar-inverse-animation {\n    animation-name: navbar-inverse-animation;\n    animation-duration: 1s;\n    background-color: transparent;\n  }\n\n  @keyframes navbar-animation {\n    to {background-color: #18181A;}\n    from {background-color: transparent;}\n  }\n\n  @keyframes navbar-inverse-animation {\n    to {background-color: transparent;}\n    from {background-color: #18181A;}\n  }\n  .brand {\n    display: flex;\n  }\n  .brand img {\n    height: 25px;\n  }\n  a.button {\n    text-decoration: none;\n    width: auto;\n    padding: 10px 15px;\n    white-space: nowrap;\n    line-height: 1;\n    font-size: 14px;\n    border: 0;\n    border-radius: 3px;\n    outline: 0;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgba(0,0,0,0);\n    color: #FFFFFF;\n    background-image: linear-gradient( 130deg,#00B4E6,#00F0E0 );\n    display: flex;\n    align-items: center;\n    margin: 0 0 0 25px;\n    span {\n      height: 13px;\n      font-weight: 800;\n    }\n  }\n'], ['\n  width: 100%;\n  height: 64px;\n  background: #18181A;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  position: fixed;\n  z-index: 5;\n\n  &.scrolled{\n    background:red;\n  }\n  &.navbar-home.navbar-animation {\n    animation-name: navbar-animation;\n    animation-duration: 1s;\n    background-color: #18181A;\n  }\n\n  &.navbar-home.navbar-inverse-animation {\n    animation-name: navbar-inverse-animation;\n    animation-duration: 1s;\n    background-color: transparent;\n  }\n\n  @keyframes navbar-animation {\n    to {background-color: #18181A;}\n    from {background-color: transparent;}\n  }\n\n  @keyframes navbar-inverse-animation {\n    to {background-color: transparent;}\n    from {background-color: #18181A;}\n  }\n  .brand {\n    display: flex;\n  }\n  .brand img {\n    height: 25px;\n  }\n  a.button {\n    text-decoration: none;\n    width: auto;\n    padding: 10px 15px;\n    white-space: nowrap;\n    line-height: 1;\n    font-size: 14px;\n    border: 0;\n    border-radius: 3px;\n    outline: 0;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgba(0,0,0,0);\n    color: #FFFFFF;\n    background-image: linear-gradient( 130deg,#00B4E6,#00F0E0 );\n    display: flex;\n    align-items: center;\n    margin: 0 0 0 25px;\n    span {\n      height: 13px;\n      font-weight: 800;\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: auto;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  ul {\n    display: flex;\n  }\n  button {\n    margin: 0 0 0 10px;\n  }\n'], ['\n  width: auto;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  ul {\n    display: flex;\n  }\n  button {\n    margin: 0 0 0 10px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(4);

var _ui = __webpack_require__(2);

var _MenuItem = __webpack_require__(49);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuPanel = __webpack_require__(50);

var _MenuPanel2 = _interopRequireDefault(_MenuPanel);

var _logo = __webpack_require__(52);

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
    _ui.SafeLink,
    { href: url, target: '_blank' },
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
            _reactStatic.Link,
            { className: 'button', to: '/registration' },
            _react2.default.createElement(
              'span',
              null,
              'REGISTER'
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: stretch;\n  white-space: nowrap;\n  > span {\n    display: flex;\n    align-items: center;\n    padding: 0 15px;\n    font-size: 15px;\n    color: ', ';\n  }\n  a {\n    text-decoration: none;\n    padding: 0 10px;\n    span {\n      color: ', ';\n      font-size: 17px;\n    }\n    span:hover {\n      color: ', ';\n    }\n  }\n  .active a {\n    span {\n      color: ', ';\n      border-bottom: 2px solid #63B1F1;}\n    }\n  }\n'], ['\n  display: flex;\n  align-items: stretch;\n  white-space: nowrap;\n  > span {\n    display: flex;\n    align-items: center;\n    padding: 0 15px;\n    font-size: 15px;\n    color: ', ';\n  }\n  a {\n    text-decoration: none;\n    padding: 0 10px;\n    span {\n      color: ', ';\n      font-size: 17px;\n    }\n    span:hover {\n      color: ', ';\n    }\n  }\n  .active a {\n    span {\n      color: ', ';\n      border-bottom: 2px solid #63B1F1;}\n    }\n  }\n']);

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
      _ui.SafeLink,
      { href: url },
      children
    );
  }
};

exports.default = MenuItem;

/***/ }),
/* 50 */
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

var _menu = __webpack_require__(51);

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
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/' },
              'Home'
            ),
            items.map(function (item, i) {
              return item[0].startsWith('/') ? _react2.default.createElement(
                _reactStatic.Link,
                { to: item[0], key: i },
                item[1]
              ) : _react2.default.createElement(
                _ui.SafeLink,
                { href: item[0], key: i, target: '_blank' },
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
/* 51 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Ik0yIDE5di0yLjM1MmgyMFYxOUgyem0wLTUuODUydi0yLjI5NmgyMHYyLjI5Nkgyek0yIDVoMjB2Mi4zNTJIMlY1eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg=="

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8e2003a4-logo.svg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n  padding: 50px 8.5%;\n  background: #1D1D2A;\n  text-align: center;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  ', ';\n'], ['\n  width: 100%;\n  height: auto;\n  padding: 50px 8.5%;\n  background: #1D1D2A;\n  text-align: center;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  margin-top: 20px;\n  ', ';\n  ', ';\n  a {\n    margin: 0 10px;\n    opacity: 0.38;\n    font-size: 17px;\n    color: #ffffff;\n    font-weight: 600;\n    text-decoration: none;\n  }\n  a:hover {\n    opacity: 1;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  margin-top: 20px;\n  ', ';\n  ', ';\n  a {\n    margin: 0 10px;\n    opacity: 0.38;\n    font-size: 17px;\n    color: #ffffff;\n    font-weight: 600;\n    text-decoration: none;\n  }\n  a:hover {\n    opacity: 1;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  max-width: 100%;\n  width: 360px;\n  margin: auto;\n  ', ';\n'], ['\n  max-width: 100%;\n  width: 360px;\n  margin: auto;\n  ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _footer = __webpack_require__(54);

var _footer2 = _interopRequireDefault(_footer);

var _reactStatic = __webpack_require__(4);

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
          _ui.SafeLink,
          { href: 'https://wiki.aragon.org/documentation/legal/Privacy_policy/', target: '_blank' },
          'Privacy Policy'
        ),
        _react2.default.createElement(
          _ui.SafeLink,
          { href: 'https://wiki.aragon.org/documentation/legal/Terms_of_use_websites/', target: '_blank' },
          'Terms of Use'
        ),
        _react2.default.createElement(
          _ui.SafeLink,
          { href: ' https://wiki.aragon.org/documentation/Code_of_Conduct/', target: '_blank' },
          'Code of Conduct'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/faq' },
          'FAQ'
        )
      )
    )
  );
};

exports.default = Footer;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/58ec719b-footer.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 98vh;\n  ', ';\n  margin: 0;\n  padding: 50px 8.5%;\n  background-color: #18181A;\n  text-align: center;\n  background-image: url(', ');\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  margin-top: -64px;\n  h2 {\n    font-size: 18px;\n    ', ';\n    font-weight: 300;\n    line-height: 1.63;\n    letter-spacing: 5.6px;\n    color: #ffffff;\n  }\n  h2.sides {\n    ', ';\n    position: inherit;\n    top: 64vh;\n    letter-spacing: 1.6px;\n    opacity: 0.4;\n    margin-bottom: 0;\n  }\n  h2.right {\n    right: -66px;\n    ', ';\n    transform: rotate(0deg);\n  }\n  h2.left {\n    left: -66px;\n    ', ';\n    transform: rotate(0deg);\n  }\n  p {\n    display: none;\n    ', ';\n  }\n'], ['\n  width: 100%;\n  height: 98vh;\n  ', ';\n  margin: 0;\n  padding: 50px 8.5%;\n  background-color: #18181A;\n  text-align: center;\n  background-image: url(', ');\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  margin-top: -64px;\n  h2 {\n    font-size: 18px;\n    ', ';\n    font-weight: 300;\n    line-height: 1.63;\n    letter-spacing: 5.6px;\n    color: #ffffff;\n  }\n  h2.sides {\n    ', ';\n    position: inherit;\n    top: 64vh;\n    letter-spacing: 1.6px;\n    opacity: 0.4;\n    margin-bottom: 0;\n  }\n  h2.right {\n    right: -66px;\n    ', ';\n    transform: rotate(0deg);\n  }\n  h2.left {\n    left: -66px;\n    ', ';\n    transform: rotate(0deg);\n  }\n  p {\n    display: none;\n    ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border-right: solid 100vw transparent;\n  border-bottom: 15vh solid white;\n  margin-bottom: -1px;\n  background-color: transparent;\n  z-index: 1;\n  position: absolute;\n  width: 100vw;\n  left: 0;\n  bottom: 0;\n'], ['\n  border-right: solid 100vw transparent;\n  border-bottom: 15vh solid white;\n  margin-bottom: -1px;\n  background-color: transparent;\n  z-index: 1;\n  position: absolute;\n  width: 100vw;\n  left: 0;\n  bottom: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-top: 175px;\n  ', ';\n  max-width: 100%;\n'], ['\n  margin-top: 175px;\n  ', ';\n  max-width: 100%;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _heroBackground = __webpack_require__(56);

var _heroBackground2 = _interopRequireDefault(_heroBackground);

var _logo = __webpack_require__(57);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var HeroBox = _styledComponents2.default.div(_templateObject, medium('min-height: 815px; height: calc(100vh + 64px + 60px);'), _heroBackground2.default, medium('font-size: 24px;'), medium('position: absolute; margin: inherit;'), medium('transform: rotate(90deg); margin-top: inherit;'), medium('transform: rotate(-90deg);'), medium('display: block;'));

var HeroTriangle = _styledComponents2.default.div(_templateObject2);

var Logo = _styledComponents2.default.img(_templateObject3, medium('margin-top: 34vh;'));

var Hero = function Hero() {
  return _react2.default.createElement(
    _Section2.default,
    null,
    _react2.default.createElement(
      HeroBox,
      null,
      _react2.default.createElement(Logo, { src: _logo2.default, alt: 'AraCon' }),
      _react2.default.createElement(
        'h2',
        null,
        'BUILDING ORGANIZATIONS & GOVERNANCE OF THE FUTURE'
      ),
      _react2.default.createElement(
        'p',
        null,
        '29th-30th of January 2019 in Berlin'
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
      _react2.default.createElement('br', null),
      _react2.default.createElement(HeroTriangle, null)
    )
  );
};

exports.default = Hero;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/6ba2c386-hero-background.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8e2003a4-logo.svg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5% 92px 8.5%;\n  background: white;\n  text-align: center;\n\n  .intro {\n    max-width: 600px;\n    margin: auto;\n    font-size: 23px;\n    font-weight: 300;\n    line-height: 1.42;\n    color: #45494d;\n    a {\n      font-weight: bold;\n      color: #44c9e6;\n    }\n  }\n  iframe {\n    max-width: 100%;\n    border: transparent;\n    height: auto;\n    width: 740px;\n    height: 269px;\n  }\n  .hr {\n    width:100%;\n    height: 2px;\n    margin-bottom: 92px;\n    background-color: #eef3f7;\n  }\n  }\n  .intro2 {\n    max-width: 100%;\n    margin: auto;\n    font-size: 23px;\n    font-weight: 300;\n    line-height: 1.42;\n    color: #45494d;\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5% 92px 8.5%;\n  background: white;\n  text-align: center;\n\n  .intro {\n    max-width: 600px;\n    margin: auto;\n    font-size: 23px;\n    font-weight: 300;\n    line-height: 1.42;\n    color: #45494d;\n    a {\n      font-weight: bold;\n      color: #44c9e6;\n    }\n  }\n  iframe {\n    max-width: 100%;\n    border: transparent;\n    height: auto;\n    width: 740px;\n    height: 269px;\n  }\n  .hr {\n    width:100%;\n    height: 2px;\n    margin-bottom: 92px;\n    background-color: #eef3f7;\n  }\n  }\n  .intro2 {\n    max-width: 100%;\n    margin: auto;\n    font-size: 23px;\n    font-weight: 300;\n    line-height: 1.42;\n    color: #45494d;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  ', ';\n  margin: 50px 0;\n  div.container {\n    padding: 30px;\n    width: 100%;\n    ', ';\n    .image-box {\n      height: 92px;\n      text-align: center;\n      ', ';\n    }\n    p {\n      font-size: 18px;\n      font-weight: 300;\n      line-height: 1.63;\n      color: #000000;\n      text-align: center;\n      ', ';\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  ', ';\n  margin: 50px 0;\n  div.container {\n    padding: 30px;\n    width: 100%;\n    ', ';\n    .image-box {\n      height: 92px;\n      text-align: center;\n      ', ';\n    }\n    p {\n      font-size: 18px;\n      font-weight: 300;\n      line-height: 1.63;\n      color: #000000;\n      text-align: center;\n      ', ';\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  ', ';\n  align-items: center;\n\n  .text-container {\n    padding: 30px 0;\n    ', ';\n    text-align: left;\n    p {\n      max-width: inherit;\n    }\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  ', ';\n  align-items: center;\n\n  .text-container {\n    padding: 30px 0;\n    ', ';\n    text-align: left;\n    p {\n      max-width: inherit;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _ui = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon_ = __webpack_require__(59);

var _icon_2 = _interopRequireDefault(_icon_);

var _icon_3 = __webpack_require__(60);

var _icon_4 = _interopRequireDefault(_icon_3);

var _icon_5 = __webpack_require__(61);

var _icon_6 = _interopRequireDefault(_icon_5);

var _icon_7 = __webpack_require__(62);

var _icon_8 = _interopRequireDefault(_icon_7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};
var large = function large(css) {
  return (0, _ui.breakpoint)('large', css);
};

var Container = _styledComponents2.default.div(_templateObject);

var AboutBox = _styledComponents2.default.div(_templateObject2, medium('flex-direction: row;'), medium('width: 25%;'), medium('text-align: center;'), medium('text-align: center;'));

var VideoBox = _styledComponents2.default.div(_templateObject3, medium('flex-direction: row;'), medium('padding: 0 30px'));

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
          'p',
          { className: 'intro' },
          'The Aragon Conference will bring together people who embody and wish to shape the Aragon community. Those who are building and supporting the pseudonymous, secure, trustless future \u2014 the decentralized web.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          { className: 'intro' },
          'Decentralized governance and DAOs are at the heart of the new Web 3.0. They are key components in moving towards a more fair and open world for everyone.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'p',
          { className: 'intro2' },
          'By concentrating on a few themes, we can provide much deeper and thorough presentations on these topics.'
        )
      ),
      _react2.default.createElement(
        AboutBox,
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'image-box' },
            _react2.default.createElement('img', { src: _icon_2.default })
          ),
          _react2.default.createElement(
            'p',
            null,
            'Discover the emergence of new types of organizations with DAOs.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'image-box' },
            _react2.default.createElement('img', { src: _icon_4.default })
          ),
          _react2.default.createElement(
            'p',
            null,
            'Grasp what makes decentralized governance so relevant to Web3.0.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'image-box' },
            _react2.default.createElement('img', { src: _icon_6.default })
          ),
          _react2.default.createElement(
            'p',
            null,
            'Understand how Ethereum is making the decentralized web a reality.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'image-box' },
            _react2.default.createElement('img', { src: _icon_8.default })
          ),
          _react2.default.createElement(
            'p',
            null,
            'See how Aragon is bringing freedom for all with these revolutionary advancements.'
          )
        )
      ),
      _react2.default.createElement('div', { className: 'hr' }),
      _react2.default.createElement(
        VideoBox,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('iframe', { title: 'Fight for freedom', src: 'https://www.youtube-nocookie.com/embed/AqjIWmiAidw?rel=0', allow: 'encrypted-media', frameBorder: '0' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'text-container' },
          _react2.default.createElement(
            _ui.Text,
            null,
            _react2.default.createElement(
              'p',
              { className: 'intro' },
              'AraCon will be hosting 500 attendees that wish to join us for insights into this paradigm shift.'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              { className: 'intro' },
              _react2.default.createElement(
                'b',
                null,
                'We invite everyone to come be a part of this growing movement and learn more about how we can build this future together!'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              { className: 'intro' },
              _react2.default.createElement(
                _ui.SafeLink,
                { href: 'https://twitter.com/hashtag/AraCon2019', target: '_blank' },
                '#AraCon2019'
              )
            )
          )
        )
      )
    )
  );
};

exports.default = About;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjhweCIgaGVpZ2h0PSI2OHB4IiB2aWV3Qm94PSIwIDAgNjggNjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA0NzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM1OUVGRjAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQ0QzlFNiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDRDOUU2IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0NEM5RTYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQVJBQ09OLUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwOC4wMDAwMDAsIC0xMjI5LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOC4wMDAwMDAsIDEyMjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNDYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJjdWJlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNSIgZmlsbD0iIzQ0QzlFNiIgcG9pbnRzPSIwLjA4MzQ5NjA5MzggNTMuMjY1NjI1IDAuMDgzNDk2MDkzOCAzMS40OTcwNzAzIDAuNzUzNDE3OTY5IDMwLjcyMzYzMjggMzUuMjkyNDgwNSAzMC43MjM2MzI4IDM1Ljk4NTgzOTggMzEuNDk3MDcwMyAyOC41Njc4NzExIDQ3LjU3NjE3MTkgMTguMDM0NjY4IDYxLjc1OTc2NTYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNS1Db3B5IiBmaWxsPSIjNDRDOUU2IiBwb2ludHM9IjQxIDQyLjg4NDc4OTEgNDEgMjcuMTIwMjkxMiA0MS40ODUxNDg1IDI2LjU2MDE3ODEgNjYuNDk3ODc4NCAyNi41NjAxNzgxIDY3IDI3LjEyMDI5MTIgNjEuNjI4MDA1NyAzOC43NjQ1NjI4IDU0IDQ5LjAzNjEzMjgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNS1Db3B5LTIiIGZpbGw9IiM0NEM5RTYiIHBvaW50cz0iMjIgMTYuODg0Nzg5MSAyMiAxLjEyMDI5MTIzIDIyLjQ4NTE0ODUgMC41NjAxNzgwNzQgNDcuNDk3ODc4NCAwLjU2MDE3ODA3NCA0OCAxLjEyMDI5MTIzIDQyLjYyODAwNTcgMTIuNzY0NTYyOCAzNSAyMy4wMzYxMzI4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iIzM4QzJFMCIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjE4IDYyLjAzNDQ4MjggMCA1My4wNjg5NjU1IDAgMzEgMTggMzkuOTY1NTE3MiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIxOCA2Mi4wMzQ0ODI4IDM2IDUzLjA2ODk2NTUgMzYgMzEgMTggMzkuOTY1NTE3MiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIwIDMwLjk2NTUxNzIgMTcuMzA3NjkyMyAyMiAzNiAzMC45NjU1MTcyIDE4IDM5LjkzMTAzNDUiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNDYtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIuMDAwMDAwLCAwLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImN1YmUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9IiMzOEMyRTAiIHBvaW50cz0iMTMuNSAzMCAwIDIzLjI3NTg2MjEgMCA2LjcyNDEzNzkzIDEzLjUgMTMuNDQ4Mjc1OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHBvaW50cz0iMTMuNSAzMCAyNyAyMy4yNzU4NjIxIDI3IDYuNzI0MTM3OTMgMTMuNSAxMy40NDgyNzU5Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgcG9pbnRzPSIwIDYuNzI0MTM3OTMgMTIuOTgwNzY5MiAwIDI3IDYuNzI0MTM3OTMgMTMuNSAxMy40NDgyNzU5Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQ2LUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDEuMDAwMDAwLCAyNi4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJjdWJlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSIjMzhDMkUwIiBwb2ludHM9IjEzLjUgMzAgMCAyMy4yNzU4NjIxIDAgNi43MjQxMzc5MyAxMy41IDEzLjQ0ODI3NTkiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBwb2ludHM9IjEzLjUgMzAgMjcgMjMuMjc1ODYyMSAyNyA2LjcyNDEzNzkzIDEzLjUgMTMuNDQ4Mjc1OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIHBvaW50cz0iMCA2LjcyNDEzNzkzIDEyLjk4MDc2OTIgMCAyNyA2LjcyNDEzNzkzIDEzLjUgMTMuNDQ4Mjc1OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjNweCIgaGVpZ2h0PSI2M3B4IiB2aWV3Qm94PSIwIDAgNjMgNjMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA0ODwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTUuNDkwNTIyNSUiIHkxPSIxMDYuMDI5MDczJSIgeDI9IjEyMi41MTUwMjQlIiB5Mj0iLTIxLjE4Mzg5NDIlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0NEM5RTYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQ0QzlFNiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjI2LjE0Mzk3MzIlIiB5MT0iOTQuNzUxMzY0MSUiIHgyPSI4Ny41MDE1NTAxJSIgeTI9IjIuNTIzNTYxNTElIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE4RUJENiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBUkFDT04tQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDI3LjAwMDAwMCwgLTEyMzQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDI3LjAwMDAwMCwgMTIzNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtNCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgY3g9IjMxLjUiIGN5PSIzMS41IiByPSIzMC41Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00OSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0yKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTMuNzY4MDk3Myw5LjIyMDMyNCBDNDcuODY2MDY2OSwzLjMwNjA2NzEzIDM5Ljg1MDQxMjQsLTAuMDEyMjExNDEwMyAzMS40OTUwMzU3LDMuMzc3MDUyNzhlLTA1IEMxNC4wOTgwNTM3LDAuMDAyODQ2ODUyNjIgLTAuMDAyODEzMDkwOTksMTQuMTA4MTM2OSAwLDMxLjUwNTA2MzkgQzAuMDAyODEzMDkwOTksNDguOTAxOTkwOSAxNC4xMDc5ODIyLDYzLjAwMjY0NzYgMzEuNTA0OTY0Myw2MyBDNDguOTAxOTQ2Myw2Mi45OTcxODY5IDYzLjAwMjY0NzYsNDguODkyMDYyNCA2MywzMS40OTUxMzU0IEM2Mi45OTg2NzYyLDIzLjEzOTYxOTcgNTkuNjc3NzM5NSwxNS4xMjY5NjkgNTMuNzY4MDk3Myw5LjIyMDMyNCBaIE01MS44Mjg3MTkzLDIxLjAzNTI2ODggTDUyLjY3NTk1NjEsMjEuNDQ1NjQ3OCBDNTcuODc4NTE5NiwyNC4wOTMyNTQ1IDYxLjA5NTM3MTksMjcuNjI3ODA5NCA2MS4wOTUzNzE5LDMxLjQ5MzMxNTEgQzYxLjA5NTM3MTksMzUuMzU4ODIwOSA1Ny44NTg2NjI1LDM4LjkxMzIzMjggNTIuNjc1OTU2MSw0MS41NDA5ODI1IEw1MS44Mjg3MTkzLDQxLjk1MTM2MTUgQzUzLjQ0NDU5MTgsMzUuMDczMDQ0OCA1My40NDQ1OTE4LDI3LjkxMzc1MDkgNTEuODI4NzE5MywyMS4wMzUyNjg4IFogTTYwLjMyMDk0NDUsMjQuODE0NzI3MyBDNTguNDExMDIxMiwyMi42ODkwMzAxIDU2LjA5ODE2NCwyMC45NjM0NTI0IDUzLjUxNjU3MzksMTkuNzM3OTQxNSBMNTMuNTM2NDMxLDE5LjczNzk0MTUgQzUyLjc5MDYzMDksMTkuMzYyODA4NyA1Mi4wMDc0MzMzLDE5LjAwNTM4MTggNTEuMTg2NjcyNiwxOC42NjU2NjA4IEM1MC4yMDkyMDYyLDE1LjM2ODM5NzYgNDguNzQ4MjE5MiwxMi4yMzQ0NTg3IDQ2Ljg1MTIwMyw5LjM2NTk0MjM3IEM0NS40MzE1ODQ5LDcuMjE1MjU4MzggNDMuNjgyNjY5Nyw1LjMwMTAzODc1IDQxLjY2ODQ5NjUsMy42OTM0NDUwOCBDNTEuMDQ4OTk2Niw3LjEzOTMwNTE2IDU4LjA2MTcwMTUsMTUuMDgwMTM5NSA2MC4zMjA5NDQ1LDI0LjgxNDcyNzMgWiBNNDEuNTU1OTcyOSwxNy45MDQ0NzM5IEM0NC4yOTcwODE4LDE4LjM4MjIwMTQgNDYuOTg3MjI0MiwxOS4xMTU3NTM5IDQ5LjU5MTQ4NDYsMjAuMDk1MzY4NCBDNTEuNjEwMjkxLDI3LjU1NzY0NzggNTEuNjEwMjkxLDM1LjQyMjM2MzQgNDkuNTkxNDg0Niw0Mi44ODQ2NDI4IEM0Ni45ODc1NTUyLDQzLjg2NjU3NCA0NC4yOTcyNDczLDQ0LjYwMjI3NzcgNDEuNTU1OTcyOSw0NS4wODIxNTY0IEM0Mi4yNjczNTQsNDAuNTg3ODQ0IDQyLjYxNzAwNDYsMzYuMDQzNTU4MSA0Mi42MDE3ODA4LDMxLjQ5MzMxNTEgQzQyLjYxNzAwNDYsMjYuOTQzMDcyMSA0Mi4yNjczNTQsMjIuMzk4OTUxNyA0MS41NTU5NzI5LDE3LjkwNDQ3MzkgWiBNNDUuMjQyNzc2OCwxMC40MzE2MDQxIEM0Ni43NjMwMDQzLDEyLjcyMzc2OTUgNDcuOTgyMDY1NiwxNS4yMDE5Mjk0IDQ4Ljg3MDAwOTUsMTcuODA1MTg4NiBDNDYuMzY4Njc1MSwxNi45NjQ0MDggNDMuODAzMTM2MiwxNi4zMjkxNDc5IDQxLjE5ODU0NDksMTUuOTA1NTMwOSBMNDEuMTk4NTQ0OSwxNS45MTg3Njg5IEM0MC43OTI0NjY5LDEzLjc4NTk1NjIgNDAuMjUwNjk4NywxMS42ODEyNzQ0IDM5LjU3Njg4MDYsOS42MTc0NjUwMSBDMzguODM3Njk5Niw3LjE1ODE2OTM2IDM3LjY4NzMxMDksNC44NDE4NDQ0NyAzNi4xNzQ2OTUzLDIuNzY2NzgyNzQgQzM5LjY0OTY5MDEsNC4wOTA1ODYwOCA0Mi43OTM3MzI5LDYuNzM4MTkyNzUgNDUuMjQyNzc2OCwxMC40MzE2MDQxIFogTTQwLjY4ODg3OSwzMS40OTMzMTUxIEM0MC43MDgwNzQyLDM2LjE0OTc5MzQgNDAuMzMzOTMzMSw0MC43OTk2NTI2IDM5LjU3MDI2MTYsNDUuMzkzMjUwMiBDMzYuODk0NjgxMSw0NS43NjU1Njk4IDM0LjE5NjQzMDQsNDUuOTUxMzk4NyAzMS40OTUwMzU3LDQ1Ljk0OTI0NzYgQzI4Ljc5NTc5MjIsNDUuOTUxMDY3OCAyNi4wOTk4NTgyLDQ1Ljc2NTIzODkgMjMuNDI2NDI4OSw0NS4zOTMyNTAyIEMyMi42NjMwODg0LDQwLjc5OTY1MjYgMjIuMjg4OTQ3MywzNi4xNDk3OTM0IDIyLjMwNzgxMTUsMzEuNDkzMzE1MSBDMjIuMjg4NzgxOCwyNi44MzY4MzY5IDIyLjY2MzA4ODQsMjIuMTg2OTc3NyAyMy40MjY0Mjg5LDE3LjU5MzM4MDEgQzI4Ljc4MjU1NDEsMTYuODU2NjgzNSAzNC4yMTQxMzY0LDE2Ljg1NjY4MzUgMzkuNTcwMjYxNiwxNy41OTMzODAxIEM0MC4zMzM3Njc2LDIyLjE4Njk3NzcgNDAuNzA4MDc0MiwyNi44MzY4MzY5IDQwLjY4ODg3OSwzMS40OTMzMTUxIFogTTMxLjQ5NTAzNTcsMS45MTI5Mjk1OSBDMzMuODM4MTc1LDEuOTEyOTI5NTkgMzYuMDY4NzkwNyw1LjA3NjgxOTU2IDM3Ljc2OTg4MzQsMTAuMTk5OTM4NSBDMzguMzQ5MjE0NiwxMS45NzMzMzg1IDM4LjgyNDI5NjEsMTMuNzc4ODQwOCAzOS4xOTI5NzY1LDE1LjYwNzY3NTEgQzM0LjA4MTU5MDEsMTQuOTU4MTg0MSAyOC45MDg0ODEzLDE0Ljk1ODE4NDEgMjMuNzk3MDk1LDE1LjYwNzY3NTEgQzI0LjE2NTYwOTksMTMuNzc4ODQwOCAyNC42NDA4NTY4LDExLjk3MzE3MyAyNS4yMjAxODgxLDEwLjE5OTkzODUgQzI2LjkyMTI4MDcsNS4wNzY4MTk1NiAyOS4xNTE4OTY0LDEuOTEyOTI5NTkgMzEuNDk1MDM1NywxLjkxMjkyOTU5IFogTTIzLjQxMzE5MDgsOS41OTc2MDc5NiBDMjIuNzM5MjA3MywxMS42NjE0MTc0IDIyLjE5NzYwNDUsMTMuNzY2MDk5MiAyMS43OTE1MjY2LDE1Ljg5ODkxMTggQzE5LjE4NDYxODYsMTYuMzI0MzQ5MSAxNi42MTY1OTc1LDE2Ljk2MTkyNTkgMTQuMTEzNDQzLDE3LjgwNTE4ODYgQzE1LjAwMTM4NjgsMTUuMjAxOTI5NCAxNi4yMjA0NDgxLDEyLjcyMzc2OTUgMTcuNzQwNjc1NiwxMC40MzE2MDQxIEMyMC4yMTYxOTU2LDYuNzU4MDQ5OCAyMy4zMzM3NjIzLDQuMDU3NDkwOTkgMjYuODA4NzU3MSwyLjc2Njc4Mjc0IEMyNS4zMDAyNzg0LDQuODM2MzgzNzggMjQuMTUyMzcxOCw3LjE0NTc1ODcgMjMuNDEzMTkwOCw5LjU5NzYwNzk2IFogTTIxLjQzNDA5ODYsNDUuMDgyMTU2NCBMMjEuNDI3NDc5NSw0NS4wNzU1Mzc0IEMxOC42ODYzNzA2LDQ0LjU5NzgwOTggMTUuOTk2MDYyNyw0My44NjQ0MjI4IDEzLjM5MTk2NzksNDIuODg0NjQyOCBDMTEuMzczNDkyMywzNS40MjIzNjM0IDExLjM3MzQ5MjMsMjcuNTU3NjQ3OCAxMy4zOTE5Njc5LDIwLjA5NTM2ODQgQzE1Ljk5ODIxMzksMTkuMTE1MjU3NSAxOC42OTA4Mzg0LDE4LjM4MTcwNSAyMS40MzQwOTg2LDE3LjkwNDQ3MzkgQzIwLjcyMjg4MywyMi4zOTg3ODYyIDIwLjM3MzA2NjgsMjYuOTQzMDcyMSAyMC4zODgyOTA2LDMxLjQ5MzMxNTEgQzIwLjM3MzA2NjgsMzYuMDQzNTU4MSAyMC43MjI3MTc1LDQwLjU4Nzg0NCAyMS40MzQwOTg2LDQ1LjA4MjE1NjQgWiBNMTAuNTc4ODc2OSwxMC41NzcyMjI0IEMxMy42MTY4NDk3LDcuNTI4OTk5NzcgMTcuMjgyODAzNiw1LjE3OTkxMDc1IDIxLjMyMTU3NDksMy42OTM0NDUwOCBDMTkuMzEzMTkzNCw1LjI5ODA2MDIgMTcuNTY4OTExNSw3LjIwNzY0NjUxIDE2LjE1MjEwNjUsOS4zNTI3MDQzNCBDMTQuMjU1MjU1OCwxMi4yMjEyMjA3IDEyLjc5NDI2ODgsMTUuMzU1MzI1MSAxMS44MTY2MzY5LDE4LjY1MjQyMjggQzExLjAwMDM0NDEsMTguOTg3ODQxNCAxMC4yMTY5ODEsMTkuMzQ1MjY4MyA5LjQ2Njg3ODU1LDE5LjcyNDcwMzUgQzYuODg0MTMwMDcsMjAuOTU0MDIwMyA0LjU3MTEwNzM4LDIyLjY4NDIzMTMgMi42NjI1MDc4OCwyNC44MTQ3MjczIEMzLjkxNDMzMzM3LDE5LjQyMDU1OTcgNi42NTc0MjgwMywxNC40ODcwNzU2IDEwLjU3ODg3NjksMTAuNTc3MjIyNCBaIE0xMC4zMTQxMTU0LDIxLjQ0NTY0NzggTDExLjE2MTM1MjIsMjEuMDM1MjY4OCBDOS41NDU0Nzk2MiwyNy45MTM3NTA5IDkuNTQ1NDc5NjIsMzUuMDcyODc5NCAxMS4xNjEzNTIyLDQxLjk1MTM2MTUgTDEwLjMxNDExNTQsNDEuNTQwOTgyNSBDNS4xMTE1NTE4LDM4Ljg5MzM3NTggMS44OTQ2OTk1MiwzNS4zNTg4MjA5IDEuODk0Njk5NTIsMzEuNDkzMzE1MSBDMS44OTQ2OTk1MiwyNy42Mjc4MDk0IDUuMTMxNDA4OTEsMjQuMDczMzk3NCAxMC4zMTQxMTU0LDIxLjQ0NTY0NzggWiBNMTAuNTc4ODc2OSw1Mi40MDk0MDc4IEM2LjY1Nzc1ODk4LDQ4LjQ5NTA4NjggMy45MTY4MTU1MSw0My41NTY4MDQgMi42NjkxMjY5MiwzOC4xNTg2NjQ5IEM0LjU3NzcyNjQxLDQwLjI4OTE2MDkgNi44OTA3NDkxMSw0Mi4wMTkzNzE5IDkuNDczNDk3NTgsNDMuMjQ4Njg4OCBDMTAuMjE5Mjk3Niw0My42MjM4MjE1IDExLjAwMjQ5NTMsNDMuOTgxMjQ4NCAxMS44MjMyNTU5LDQ0LjMyMDk2OTUgQzEyLjgwMDg4NzgsNDcuNjE4MDY3MSAxNC4yNjE4NzQ5LDUwLjc1MjE3MTUgMTYuMTU4NzI1Niw1My42MjA2ODc5IEMxNy41NzIzODY1LDU1Ljc2OTg4MjYgMTkuMzE0NTE3Miw1Ny42ODQxMDIyIDIxLjMyMTU3NDksNTkuMjkzMTg1MiBDMTcuMjgyODAzNiw1Ny44MDY4ODUgMTMuNjE2Njg0Miw1NS40NTc2MzA1IDEwLjU3ODg3NjksNTIuNDA5NDA3OCBaIE0xNy43NDA2NzU2LDUyLjU1NTAyNjIgTDE3Ljc0MDY3NTYsNTIuNTQ4NDA3MiBDMTYuMjIwNDQ4MSw1MC4yNTYyNDE3IDE1LjAwMTM4NjgsNDcuNzc4MDgxOSAxNC4xMTM0NDMsNDUuMTc0ODIyNiBDMTYuNjE2NTk3NSw0Ni4wMTgwODUzIDE5LjE4NDYxODYsNDYuNjU1NjYyMSAyMS43OTE1MjY2LDQ3LjA4MTA5OTQgQzIyLjE5NzYwNDUsNDkuMjEzOTEyMSAyMi43MzkyMDczLDUxLjMxODU5MzkgMjMuNDEzMTkwOCw1My4zODI0MDMzIEMyNC4xNTQzNTc1LDU1LjgzNDc0OSAyNS4zMDQ3NDYzLDU4LjE0NDEyMzkgMjYuODE1Mzc2MSw2MC4yMTMyMjg1IEMyMy4zNDAzODE0LDU4LjkyMjUyMDMgMjAuMjQyNjcxOCw1Ni4yMjg1ODA1IDE3Ljc0MDY3NTYsNTIuNTU1MDI2MiBaIE0zMS40OTUwMzU3LDYxLjA3MzcwMDcgQzI5LjE1MTg5NjQsNjEuMDczNzAwNyAyNi45MjEyODA3LDU3LjkwOTgxMDcgMjUuMjIwMTg4MSw1Mi43ODY2OTE4IEMyNC42NDA4NTY4LDUxLjAxMzQ1NzIgMjQuMTY1NjA5OSw0OS4yMDc3ODk1IDIzLjc5NzA5NSw0Ny4zNzg5NTUyIEMyNi4zNTAwNTc4LDQ3LjcwNjU5NjUgMjguOTIxMjIyOSw0Ny44NzAwODYyIDMxLjQ5NTAzNTcsNDcuODY4NzYyNCBDMzQuMDY4ODQ4NSw0Ny44NzAwODYyIDM2LjY0MDE3OTEsNDcuNzA2NTk2NSAzOS4xOTI5NzY1LDQ3LjM3ODk1NTIgQzM4LjgyNDI5NjEsNDkuMjA3Nzg5NSAzOC4zNDkyMTQ2LDUxLjAxMzI5MTcgMzcuNzY5ODgzNCw1Mi43ODY2OTE4IEMzNi4wNjg3OTA3LDU3LjkwOTgxMDcgMzMuODM4MTc1LDYxLjA3MzcwMDcgMzEuNDk1MDM1Nyw2MS4wNzM3MDA3IFogTTM5LjU3Njg4MDYsNTMuMzg5MDIyMyBDNDAuMjUwNjk4Nyw1MS4zMjUyMTI5IDQwLjc5MjQ2NjksNDkuMjIwNTMxMSA0MS4xOTg1NDQ5LDQ3LjA4NzcxODQgQzQzLjgwNTQ1MjgsNDYuNjYyMjgxMSA0Ni4zNzM0NzM5LDQ2LjAyNDcwNDMgNDguODc2NjI4NSw0NS4xODE0NDE2IEM0Ny45ODg2ODQ2LDQ3Ljc4NDcwMDkgNDYuNzY5NjIzMyw1MC4yNjI4NjA3IDQ1LjI0OTM5NTksNTIuNTU1MDI2MiBDNDIuNzczODc1OCw1Ni4yMjg1ODA1IDM5LjY1NjMwOTEsNTguOTI5MTM5MyAzNi4xODEzMTQ0LDYwLjIxOTg0NzUgQzM3LjY4OTYyNzUsNTguMTUwNDEyIDM4LjgzNzY5OTYsNTUuODQwODcxNiAzOS41NzY4ODA2LDUzLjM4OTAyMjMgWiBNNTIuNDExMTk0Niw1Mi40MDk0MDc4IEM0OS4zNzMyMjE4LDU1LjQ1NzYzMDUgNDUuNzA3MjY3OCw1Ny44MDY4ODUgNDEuNjY4NDk2NSw1OS4yOTMxODUyIEM0My42NzY4NzgsNTcuNjg4NTcwMSA0NS40MjExNTk5LDU1Ljc3ODgxODMgNDYuODM3OTY0OSw1My42MzM5MjU5IEM0OC43MzQ5ODExLDUwLjc2NTQwOTYgNTAuMTk1OTY4Miw0Ny42MzE0NzA2IDUxLjE3MzQzNDUsNDQuMzM0MjA3NSBDNTEuOTg5NzI3NCw0My45OTg3ODg4IDUyLjc3MzA5MDUsNDMuNjQxMzYxOSA1My41MjMxOTI5LDQzLjI2MTkyNjggQzU2LjEwNTk0MTQsNDIuMDMyNjA5OSA1OC40MTg5NjQxLDQwLjMwMjM5OSA2MC4zMjc1NjM2LDM4LjE3MTkwMyBDNTkuMDc1NzM4MSw0My41NjYwNzA2IDU2LjMzMjQ3NzksNDguNDk5NTU0NyA1Mi40MTExOTQ2LDUyLjQwOTQwNzggWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI3OHB4IiB2aWV3Qm94PSIwIDAgNDggNzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA0NTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjQuODM4MzUzOSUiIHkxPSIxMy44MjQxMTY5JSIgeDI9IjUwLjA2NTMzMzMlIiB5Mj0iOTkuNjIwNTY3NyUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzk4REVFRSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDRDOUU2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9Ijg0Ljg0OTAyMDUlIiB4Mj0iLTMwLjY1ODI5MTMlIiB5Mj0iLTUxLjU0NTc4JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNzlFNkY0IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxOEVCRDYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iQVJBQ09OLUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc0NS4wMDAwMDAsIC0xMjI0LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc0NS4wMDAwMDAsIDEyMjQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNDIiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00MyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTIiIGZpbGw9IiM0NEM5RTYiIG9wYWNpdHk9IjAuMzg3MjIwOTgyIiBwb2ludHM9IjI0LjEwMjMyMDkgMCAwLjA3MzgzNjk1NTYgMzkuNjg5MzA1NCAyNC4xMDIzMjA5IDI4LjYxNjU3MDciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtNCIgZmlsbD0iIzQ0QzlFNiIgcG9pbnRzPSIyNC4xNDg2NDUzIDU4LjI1MzQ0MzcgMjQuMTQ4NjQ1MyA3Ny40NTU1MjE0IDAuMDEwMDc3MjkzOSA0NC4yNDU4MzY4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTMiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIwLjA1OTIwMTUwNDMgMzkuNjY1ODc3NSAyNC4wNTEyODc3IDUzLjUzMTY2NDQgMjQuMDUxMjg3NyAyOC41OTI3NjciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQzLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1LjUwMDAwMCwgMzkuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zNS41MDAwMDAsIC0zOS4wMDAwMDApIHRyYW5zbGF0ZSgyMy4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTIiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIHBvaW50cz0iMjQuMTAyMzIwOSAwIDAuMDczODM2OTU1NiAzOS42ODkzMDU0IDI0LjEwMjMyMDkgMjguNjE2NTcwNyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC00IiBmaWxsPSIjNDRDOUU2IiBvcGFjaXR5PSIwLjY5NDI1MjIzMiIgcG9pbnRzPSIyNC4xNDg2NDUzIDU4LjI1MzQ0MzcgMjQuMTQ4NjQ1MyA3Ny40NTU1MjE0IDAuMDEwMDc3MjkzOSA0NC4yNDU4MzY4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTMiIGZpbGw9IiM0NEM5RTYiIG9wYWNpdHk9IjAuNDgxNjQwNjI1IiBwb2ludHM9IjAuMDU5MjAxNTA0MyAzOS42NjU4Nzc1IDI0LjA1MTI4NzcgNTMuNTMxNjY0NCAyNC4wNTEyODc3IDI4LjU5Mjc2NyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI3NXB4IiB2aWV3Qm94PSIwIDAgODAgNzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCA0NDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNjQuODM4MzUzOSUiIHkxPSIxMy44MjQxMTY5JSIgeDI9IjUwLjA2NTMzMzMlIiB5Mj0iOTkuNjIwNTY3NyUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0IwRTRFRiIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDRDOUU2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTguMjE2NTg4MiUiIHkxPSI4LjYwMzk2NDkxJSIgeDI9IjUwJSIgeTI9Ii0xMDEuOTc1ODM5JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOUNFMkYxIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0NEM5RTYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI2NC44MzgzNTM5JSIgeTE9IjEzLjgyNDExNjklIiB4Mj0iNTAlIiB5Mj0iMTEzLjI0OTg2MSUiIGlkPSJsaW5lYXJHcmFkaWVudC0zIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzk4REVFRSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNDRDOUU2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iNjAuMzY4MjY1MyUiIHgyPSI3NC40NjQyNDElIiB5Mj0iLTQ3LjY3MDg2OTklIiBpZD0ibGluZWFyR3JhZGllbnQtNCI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM0NEM5RTYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE4RUJENiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBUkFDT04tQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA1My4wMDAwMDAsIC0xMjI1LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA1My4wMDAwMDAsIDEyMjUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InZlY3RvcmlhbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgY3g9IjQyLjc2Nzc3MjUiIGN5PSIyOS4xMjUwODY4IiByeD0iMjMuMDg5NTA1OCIgcnk9IjIzLjIyNzc3MzUiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01OC45ODM4ODYzLDIyLjE1OTMxNTcgQzYwLjYzODU5MTcsMjQuNDEyOTQ3NSA2MS41MDQxMywyNy4wNzYzMzA2IDYxLjUwNDEzLDI5Ljg0MjE1MTUgQzYxLjUwNDEzLDMzLjE5Njk4OTcgNjAuMTI5NDUxNiwzNi4yOTU3MzM1IDU3Ljc4NzQwNjksMzguODA1NDU5OSBMNTkuMjEyOTk5Myw0NC4xNTc4MzU0IEw2My41NDA2OTA2LDQ0LjE1NzgzNTQgTDY4LjA5NzQ5NDksMzguOTU5MTE2NiBMNjkuMzE5NDMxMywzMS4zNTMxMDkyIEw2OS41NzQwMDE0LDI2LjgyMDIzNjEgTDY1LjA2ODExMSwyMS42OTgzNDU1IEw1OC45ODM4ODYzLDIyLjE1OTMxNTcgWiIgaWQ9IlNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC44MzM1ODE1OCw0NC43NzI0NjIzIEw5LjYyMjc0ODgyLDQ3LjkyMjQyNSBDOS42MjI3NDg4Miw0Ny45MjI0MjUgMTguOTQwMDEzNSw2Ny4xNTUxMjM5IDM5LjkxNjU4NzcsNzQuMzAwMTYxMSBDMzkuOTE2NTg3Nyw3NC4zMDAxNjExIDU5LjAwMDY3Nyw2Ni4xMDUxMzYzIDY3LjQ3Nzg2MDUsNTIuMTk5MjAzNiBMNTUuNzc2MzAzMyw0MS45Mjk4MTMxIEM1NS43NzYzMDMzLDQxLjkyOTgxMzEgNTAuMTc1NzYxNyw0Ni40MTE0NjczIDQxLjg1MTMyMDIsNDYuNDExNDY3MyBDMzMuNTI2ODc4OCw0Ni40MTE0NjczIDIyLjIyMzk2NzUsNDEuNDE3NjI0IDIyLjIyMzk2NzUsMzEuMTIyNjI0MSBDMjIuMjIzOTY3NSwyMC44Mjc2MjQyIDMzLjkzNDE5MDksMTcuMDYzMDM0NiAzMy45MzQxOTA5LDE3LjA2MzAzNDYgTDI4Ljk0NDYxNzUsMTUuODMzNzgwOSBMMTYuMTkwNjU2NywxNS44MzM3ODA5IEw4LjA5NTMyODM3LDM1LjQ1MDYyMTYgTDguODMzNTgxNTgsNDQuNzcyNDYyMyBaIiBpZD0iU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03OS4zMjQwMzUyLDIzLjE1MjY0ODEgQzc4Ljk2NzYzNzEsMjIuNzk0MTE1NyA2OS44ODQ2NzEyLDExLjcwNTIyMjggNDEuNTUxMDIxOSwxLjg5NjgwMjQyIEM0MC42NTU0ODQ4LDEuMjgwNDk2NTEgNDAuMTcwMDczMSwxLjA5MDIyNTk0IDQwLjA5NDc4NjcsMS4zMjU5OTA3MSBDMTMuNzc3MTIsOC4wNzcxNjQxOSAwLjg2NTUzODI1MywyMi4yNjU2MjUgMC44NjU1MzgyNTMsMjMuMTUyNjQ4MSBDMC44NjU1MzgyNTMsMjQuMDM5NjcxMSA0LjYzMzE3NTM2LDM3LjM3MTMzMDUgNy4wNzcwNDgwNyw0Mi44MDA1MzQ1IEM3LjI4MDcwNDEzLDQzLjI2MTUwNDYgMTAuNTM5MjAxMSw0OS4wNDkyNDA5IDEyLjk1NzYxNjgsNTIuMTk5MjAzNiBDMTEuNTMyMDI0NCw0OS4wNDkyNDA5IDkuOTc5MTQ2OTIsNDYuMzA5MDI5NSA5Ljk3OTE0NjkyLDQxLjU5Njg5MDIgQzkuOTc5MTQ2OTIsMjguMzA1NTg0MyAyMC4yMTI4NjM5LDE3LjQ5ODM5NTMgMzMuMDE3NzM4NywxNy4wMzc0MjUyIEMzMy4zMjMyMjI3LDE3LjAzNzQyNTIgMzMuNjU0MTYzOCwxNy4wMzc0MjUyIDMzLjk1OTY0NzksMTcuMDYzMDM0NiBMMzAuOTA0ODA3LDEzLjk4OTkwMDMgQzMwLjkwNDgwNywxMy45ODk5MDAzIDQzLjIwMDU0MTYsMTEuOTE1NTM0NyA1OC45ODM4ODYzLDIxLjUxOTA3OTQgQzU4Ljk4Mzg4NjMsMjEuNTE5MDc5NCA1OS4yMTI5OTkzLDIyLjAwNTY1OSA1OC45ODM4ODYzLDIzLjQzOTc4ODMgQzU4Ljk4Mzg4NjMsMjMuNDM5Nzg4MyA2Ni40MTczMzI0LDI2LjY2NjU3OTMgNjcuMDUzNzU3NiwzMi45NDA4OTUyIEM2Ny42OTAxODI4LDM5LjIxNTIxMTEgNjMuNzQ0MzQ2Niw0Mi44MDA1MzQ1IDYwLjU2MjIyMDcsNDMuMzEyNzIzNSBDNjAuNTYyMjIwNyw0My4zMTI3MjM1IDYyLjIxNjkyNjIsNDAuNzI2MTY4OCA1OS42NzEyMjU1LDM5LjM0MzI1ODQgQzU5LjEzNjYyODMsMzkuMDM1OTQ0OSA1OC41MDAyMDMxLDM4LjkwNzg5NzcgNTcuODYzNzc3OSwzOC45MzM1MDcxIEM1My4wMDE0ODk1LDM4LjkzMzUwNzEgNTIuNDQxNDM1Myw0NC41MTYzNjc4IDUyLjQ0MTQzNTMsNDQuNTE2MzY3OCBDNTIuMzkwNTIxMyw0NC43OTgwNzE4IDUyLjM5MDUyMTMsNDUuMDc5Nzc1NyA1Mi4zOTA1MjEzLDQ1LjM2MTQ3OTcgQzUyLjM5MDUyMTMsNDUuMzYxNDc5NyA1MS41NzU4OTcxLDUzLjUzMDg5NTEgNjYuMDM1NDc3Myw1My4zNzcyMzg0IEM2Ni4wMzU0NzczLDUzLjM3NzIzODQgNzMuMzY3MDk1NSw0NS4wMjg1NTY4IDc1LjMwMTgyOCwzNy41MjQ5ODcyIEM3Ni4wMTQ2MjQyLDM0Ljc1OTE2NjQgNzYuNTIzNzY0NCwzMi42ODQ4MDA3IDc2Ljg1NDcwNTUsMzEuMTQ4MjMzNSBDNzcuNjY5MzI5NywyOC45NzE0MzAxIDc4LjQ1ODQ5NywyNS43NjQ4MTIyIDc5LjIyMjIwNzIsMjMuNDM0MzUyIEw3OS4zMjQwMzUyLDIzLjE1MjY0ODEgWiIgaWQ9IlNoYXBlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTQpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTIuNjk2MDA1NCwyNC4wMDMxOTYzIEM1Mi44OTk2NjE1LDIzLjkwMDc1ODUgNTMuNTYxNTQzNywyMy41Njc4MzU2IDU0LjMyNTI1MzksMjIuNzczOTQyNSBDNTUuODUyNjc0MywyMi45Nzg4MTgyIDU3LjM1NDYzNzgsMjMuNDY1Mzk3OCA1Ny4zNTQ2Mzc4LDIzLjQ2NTM5NzggQzU0LjU3OTgyNCwyMS43NzUxNzM5IDUwLjc4NjcyOTksMjAuNzc2NDA1MiA0Ni41ODYzMjM2LDIwLjgwMjAxNDcgQzQ2LjU4NjMyMzYsMjAuODAyMDE0NyA0OC4xOTAxMTUxLDIzLjEwNjg2NTQgNTIuNjQ1MDkxNCwyNC4wNTQ0MTUyIEM1Mi42NDUwOTE0LDI0LjA1NDQxNTIgNTIuNjcwNTQ4NCwyNC4wMjg4MDU3IDUyLjY5NjAwNTQsMjQuMDAzMTk2MyBaIiBpZD0iU2hhcGUiIGZpbGw9IiNFQUY5RkMiIG9wYWNpdHk9IjAuODk1NDI0MTA3Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNzkuNjA0MDYyMywyMS44OTEwNzYgQzY0LjI3ODk0MzgsOC41NzIzODE5MiA0NC45MDYxNjExLDEuNjUxODg0MDIgNDAuODgzOTU0LDAuMzIwMDE0NjExIEw0MC41MDIwOTg4LDAuMTg5NDM5MTc5IEwzOS45OTI5NTg3LDAuMDMyNzQ4NjYwNiBMMzkuMTAxOTYzNCwwLjMyMDAxNDYxMSBDMzUuMDc5NzU2MywxLjY1MTg4NDAyIDE1LjcwNjk3MzYsOC41NzIzODE5MiAwLjM4MTg1NTExMiwyMS44OTEwNzYgTDAuMDUwOTE0MDE0OSwyMi4xNzgzNDE5IEwwLjEyNzI4NTAzNywyMi42MjIyOTg0IEMwLjE1Mjc0MjA0NSwyMi43MjY3NTg4IDEuODA3NDQ3NTMsMzIuODMzMjk3MiA3LjQ1ODkwMzE4LDQ0LjI0NTU5IEMxMC43OTM3NzEyLDUwLjk1NzE2NzIgMTQuODQxNDM1Myw1Ni43ODA4MzE0IDE5LjQ3NDYxMDcsNjEuNjEyMTIyNCBDMjUuMTUxNTIzNCw2Ny41MTQxMzE5IDMxLjc3MDM0NTMsNzEuODc1MzUxNCAzOS4xMjc0MjA0LDc0LjU5MTMyMDQgTDM5LjU2MDE4OTYsNzQuNzQ4MDEwOSBMMzkuOTkyOTU4Nyw3NC45MDQ3MDE0IEw0MC40NTExODQ4LDc0LjcyMTg5NTggTDQwLjg4Mzk1NCw3NC41NjUyMDUzIEM0OC4yNDEwMjkxLDcxLjg0OTIzNjMgNTQuODM0Mzk0LDY3LjQ4ODAxNjkgNjAuNTM2NzYzNyw2MS41ODYwMDczIEM2NS4xNjk5MzkxLDU2Ljc4MDgzMTQgNjkuMjE3NjAzMiw1MC45MzEwNTIxIDcyLjU1MjQ3MTIsNDQuMjE5NDc0OSBDNzguMjAzOTI2OSwzMi44MzMyOTcyIDc5Ljg4NDA4OTQsMjIuNzAwNjQzNyA3OS44ODQwODk0LDIyLjU5NjE4MzMgTDc5Ljk2MDQ2MDQsMjIuMTUyMjI2OCBMNzkuNjA0MDYyMywyMS44OTEwNzYgWiBNNzEuMTUyMzM1OCw0My41MTQzNjc1IEM2Ny44OTM4Mzg5LDUwLjA2OTI1NDIgNjMuOTQ4MDAyNyw1NS43ODg0NTgxIDU5LjQxNjY1NTQsNjAuNDg5MTczNyBDNTMuNzkwNjU2Nyw2Ni4zMTI4MzggNDcuMjczNjYyOCw3MC41OTU3MTIxIDM5Ljk5Mjk1ODcsNzMuMjMzMzM1OSBDMzIuNzEyMjU0Niw3MC41OTU3MTIxIDI2LjE5NTI2MDcsNjYuMzM4OTUzMSAyMC41NjkyNjIsNjAuNTE1Mjg4OCBDMTYuMDM3OTE0Nyw1NS44MTQ1NzMyIDEyLjA5MjA3ODUsNTAuMTIxNDg0NCA4LjgzMzU4MTU4LDQzLjU2NjU5NzcgQzMuOTIwMzc5MTUsMzMuNjk1MDk1IDIuMDg3NDc0NjEsMjQuODQyMDgwNyAxLjcwNTYxOTUsMjIuODA1MTA0IEMxNy40MTI1OTMxLDkuMzAzNjA0MzQgMzcuMjY5MDU4OSwyLjU2NTkxMjA0IDM5Ljk5Mjk1ODcsMS42Nzc5OTkxIEM0Mi42OTE0MDE1LDIuNTY1OTEyMDQgNjIuNTczMzI0Myw5LjMwMzYwNDM0IDc4LjI4MDI5NzksMjIuODA1MTA0IEM3Ny44OTg0NDI4LDI0LjgxNTk2NTcgNzYuMDQwMDgxMiwzMy42Njg5OCA3MS4xNTIzMzU4LDQzLjUxNDM2NzUgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjNDRDOUU2Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .h1box {\n    max-width: 1195px;\n    margin: auto;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: white;\n  text-align: center;\n  .h1box {\n    max-width: 1195px;\n    margin: auto;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  max-width: 1195px;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  a, p {\n    color: #63B1F1;\n    font-size: 19px;\n    line-height: 27px;\n  }\n'], ['\n  width: 100%;\n  max-width: 1195px;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  a, p {\n    color: #63B1F1;\n    font-size: 19px;\n    line-height: 27px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _reactStatic = __webpack_require__(4);

var _Speaker = __webpack_require__(64);

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
        { className: 'h1box xs-centered' },
        _react2.default.createElement(
          'h1',
          null,
          'Speakers'
        )
      ),
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(_Speaker2.default, { photo: 'LuisCuende', linkTo: 'luis', name: 'Luis Cuende', position: 'CEO', company: 'Aragon One' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'GriffGreen', linkTo: 'griff', name: 'Griff Green', position: 'Co-founder', company: 'Giveth & Aragon DAC' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'JuttaSteiner', linkTo: 'jutta', name: 'Jutta Steiner', position: 'Co-Founder', company: 'Parity Technologies' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'SantiagoSiri', linkTo: 'santiago', name: 'Santiago Siri', position: 'Founder', company: 'Democracy Earth' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'PrimaveraDeFilippi', linkTo: 'primavera', name: 'Primavera De Filippi', position: 'Postdoctoral researcher', company: 'CNRS' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'JoeUrgo', linkTo: 'joe', name: 'Joe Urgo', position: 'Co-Founder', company: 'District0x' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'MariaGomez', linkTo: 'maria', name: 'Mar\xEDa G\xF3mez', position: 'Ecosystem Development', company: 'Aragon One' }),
        _react2.default.createElement(_Speaker2.default, { photo: 'JordiBaylina', linkTo: 'jordi', name: 'Jordi Baylina', position: 'Tech Lead', company: 'Iden3' })
      ),
      _react2.default.createElement(
        Container,
        null,
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/speakers' },
            'See all already confirmed speakers...'
          )
        )
      )
    )
  );
};

exports.default = Speakers;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 12px;\n  p {\n    text-transform: uppercase;\n    color: #4BC5E8;\n    font-size: 15px;\n    ', ';\n    font-weight: 400;\n    line-height: 25px;\n  }\n  h6 {\n    text-transform: uppercase;\n    color: #45494D;\n    font-size: 12px;\n    font-weight: 300;\n    ', ';\n    line-height: 22px;\n  }\n'], ['\n  margin-top: 12px;\n  p {\n    text-transform: uppercase;\n    color: #4BC5E8;\n    font-size: 15px;\n    ', ';\n    font-weight: 400;\n    line-height: 25px;\n  }\n  h6 {\n    text-transform: uppercase;\n    color: #45494D;\n    font-size: 12px;\n    font-weight: 300;\n    ', ';\n    line-height: 22px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  overflow: hidden;\n  height: 238px;\n  background-image: linear-gradient(0deg, #233145, #233145),  url(', ');\n  background-blend-mode: color;\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n\n  &:before {\n    width: 100%;\n    overflow: hidden;\n    height: 238px;\n    content: \'\';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: url(', ');\n    background-position: center;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    border-radius: inherit; \n    opacity: 0;\n    -webkit-transition: all 0.4s ease-in-out;\n    -moz-transition: all 0.4s ease-in-out;\n    -o-transition: all 0.4s ease-in-out;\n    transition: all 0.4s ease-in-out;\n  }\n\n  &:hover:before {\n   opacity: 1\n  }\n'], ['\n  width: 100%;\n  overflow: hidden;\n  height: 238px;\n  background-image: linear-gradient(0deg, #233145, #233145),  url(', ');\n  background-blend-mode: color;\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n\n  &:before {\n    width: 100%;\n    overflow: hidden;\n    height: 238px;\n    content: \'\';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: url(', ');\n    background-position: center;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    border-radius: inherit; \n    opacity: 0;\n    -webkit-transition: all 0.4s ease-in-out;\n    -moz-transition: all 0.4s ease-in-out;\n    -o-transition: all 0.4s ease-in-out;\n    transition: all 0.4s ease-in-out;\n  }\n\n  &:hover:before {\n   opacity: 1\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-bottom: 40px;\n  border-radius: 6px;\n  background: linear-gradient(184.81deg, #F5F6FB 0%, #FFFFFF 100%);\n  box-shadow: 8px 16px 16px 0 rgba(0,0,0,0.13);\n  position: relative;\n'], ['\n  margin-bottom: 40px;\n  border-radius: 6px;\n  background: linear-gradient(184.81deg, #F5F6FB 0%, #FFFFFF 100%);\n  box-shadow: 8px 16px 16px 0 rgba(0,0,0,0.13);\n  position: relative;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _ui = __webpack_require__(2);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _GriffGreen = __webpack_require__(11);

var _GriffGreen2 = _interopRequireDefault(_GriffGreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};


var TextBox = _styledComponents2.default.div(_templateObject, medium('font-size: 16px; font-weight: bold;'), medium('font-size: 13px; font-weight: 600;'));

var Photo = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.src;
}, function (props) {
  return props.src;
});

var SpeakerBox = _styledComponents2.default.div(_templateObject3);

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
            _react2.default.createElement(Photo, { src: __webpack_require__(12)("./" + photo + '.png') })
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/6e03547d-AlisonBerreman.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/7011e605-AronFischer.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/b7991cca-ChristophJentzsch.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/42ef0088-EvanVanNess.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/caebfceb-JacobArluck.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/86359a6c-JoeUrgo.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1f68bd6c-JordiBaylina.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/11642a7e-JorgeIzquierdo.png";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/4c8afc92-JouniHelminen.png";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/98645fc1-JuttaSteiner.png";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/f7128d51-KennyRowe.png";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/c82b44c6-LaneRettig.png";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/96bf598b-LauraKalbag.png";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/169cc15b-LuisCuende.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9d294d82-MariaGomez.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bea4f04b-MarioLaul.png";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/7fa631ee-MartinKoppelmann.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/69ea1ded-MattLockyer.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/4392a223-MeltemDemirors.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1ec16054-MikeGoldin.png";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9d8539fb-PrimaveraDeFilippi.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/b7953460-RaineRevere.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/55932620-SamerHassan.png";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/f8f16dc7-SantiagoSiri.png";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/457910ee-StefanoBernardi.png";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3486de26-TaylorMonahan.png";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/82bd7309-TrentMcConaghy.png";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/9f7f5838-WillWarren.png";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/b8560155-YaldaMousavinia.png";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/e53c5f29-YondonFu.png";

/***/ }),
/* 95 */
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

var _venue = __webpack_require__(96);

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
        { className: 'h1box xs-centered' },
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/81d9dc43-venue.jpg";

/***/ }),
/* 97 */
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

var _MapContainer = __webpack_require__(98);

var _MapContainer2 = _interopRequireDefault(_MapContainer);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(4);

var _ui = __webpack_require__(2);

var _plane = __webpack_require__(100);

var _plane2 = _interopRequireDefault(_plane);

var _bus = __webpack_require__(101);

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
          'div',
          { className: 'button-strong-div' },
          _react2.default.createElement(
            _reactStatic.Link,
            { className: 'button-strong', to: '/travelinformation' },
            _react2.default.createElement(
              'span',
              null,
              'How to get there?'
            )
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(13);

var _locate = __webpack_require__(99);

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
/* 99 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgMzYgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iLTE3Ljg3MTA5MzglIiB5MT0iMTAwJSIgeDI9IjEyMi4wMTYwNTklIiB5Mj0iMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZBQUNGNCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMThFQkQ2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFSQUNPTiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk5MS4wMDAwMDAsIC0zMjU5LjAwMDAwMCkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkxLjAwMDAwMCwgMzI1OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJwbGFjZWhvbGRlciI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDAgQzguMDc0OCwwIDAsOC4yMDA5Njg3NSAwLDE4LjI4MTI1IEMwLDIxLjY4NzA0NjkgMC45Mjg5LDI1LjAxMDc4MTIgMi42ODY5LDI3Ljg5NDM0MzcgTDE2Ljk3NTQsNTEuMjc5ODIwMyBDMTcuMjQ5MSw1MS43Mjc4MTI1IDE3LjczMTMsNTIgMTguMjQ5OSw1MiBDMTguMjUzOSw1MiAxOC4yNTc4LDUyIDE4LjI2MTgsNTIgQzE4Ljc4NDksNTEuOTk1ODM1OSAxOS4yNjgxLDUxLjcxNTIxODcgMTkuNTM2OCw1MS4yNTk0MDYyIEwzMy40NjExLDI3LjY0NzM0MzcgQzM1LjEyMjEsMjQuODI0NzE4NyAzNiwyMS41ODU5OTIyIDM2LDE4LjI4MTI1IEMzNiw4LjIwMDk2ODc1IDI3LjkyNTIsMCAxOCwwIFogTTMwLjg4NjYsMjYuMDgzMDc4MSBMMTguMjI3Miw0Ny41NTAxNDA2IEw1LjIzNjcsMjYuMjg5MDQ2OSBDMy43NzM0LDIzLjg4ODkyMTkgMi45OCwyMS4xMTk5MjE5IDIuOTgsMTguMjgxMjUgQzIuOTgsOS44ODEwMTU2MiA5LjcyOSwzLjAyNjU2MjUgMTgsMy4wMjY1NjI1IEMyNi4yNzEsMy4wMjY1NjI1IDMzLjAxLDkuODgxMDE1NjIgMzMuMDEsMTguMjgxMjUgQzMzLjAxLDIxLjAzNTcyNjYgMzIuMjY4OSwyMy43MzM5Mzc1IDMwLjg4NjYsMjYuMDgzMDc4MSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDkuMTQwNjI1IEMxMy4wMzc0LDkuMTQwNjI1IDksMTMuMjQxMTA5NCA5LDE4LjI4MTI1IEM5LDIzLjI4OTE5NTMgMTIuOTcxNywyNy40MjE4NzUgMTgsMjcuNDIxODc1IEMyMy4wOTAzLDI3LjQyMTg3NSAyNywyMy4yMzQxNDg0IDI3LDE4LjI4MTI1IEMyNywxMy4yNDExMDk0IDIyLjk2MjYsOS4xNDA2MjUgMTgsOS4xNDA2MjUgWiBNMTgsMjQuMzk1MzEyNSBDMTQuNjc0MywyNC4zOTUzMTI1IDExLjk4LDIxLjY0OTc3MzQgMTEuOTgsMTguMjgxMjUgQzExLjk4LDE0LjkyMTE1NjIgMTQuNjkxNiwxMi4xNjcxODc1IDE4LDEyLjE2NzE4NzUgQzIxLjMwODQsMTIuMTY3MTg3NSAyNC4wMSwxNC45MjExNTYyIDI0LjAxLDE4LjI4MTI1IEMyNC4wMSwyMS42MDA2MTcyIDIxLjM3ODQsMjQuMzk1MzEyNSAxOCwyNC4zOTUzMTI1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzYgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIzNC40NTU5ODcxJSIgeDI9IjEwMCUiIHkyPSI2OS45NzU3NjQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2QUFDRjQiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE4RUJENiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBUkFDT04iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MC4wMDAwMDAsIC0zMzQwLjAwMDAwMCkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTAuMDAwMDAwLCAzMDU1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjg1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJkZXBhcnR1cmVzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM0LjcyODA3NDEsMi4wOTkzMjQxOCBDMzIuMjUzNDA3NCwwLjY1NTA0NjcwMyAyOS40NDE1NTU2LDEuNDIyMjQ3MjUgMjcuNTE4ODE0OCwyLjMyMDA3MTQzIEwyMS43ODcxMTExLDQuOTk2NDgzNTIgTDExLjkyOTMzMzMsMC4wMzE1OTg5MDExIEw2LjA1ODc0MDc0LDAuMjg0MTY3NTgyIEwxNC4xOTg5NjMsOC41NDc5NDc4IEw5LjAxMTE4NTE5LDExLjAxNTcwMzMgTDMuNjEzNzc3NzgsOC45NTg3MzM1MiBMMCwxMC42NDYwODUyIEwzLjI2NTg1MTg1LDE0LjcwNzEzNzQgQzIuOTIwODE0ODEsMTUuMTE5MzMyNCAyLjYwODE0ODE1LDE1LjY5OTY4NDEgMi44OTIsMTYuMzA5MjYxIEMzLjI2Mjc0MDc0LDE3LjEwNTMxNTkgNC4zNTg1MTg1MiwxNy41MDY1MzMgNi4xNTU5MjU5MywxNy41MDY0NTg4IEM2LjUyNDUxODUyLDE3LjUwNjQ1ODggNi45MjI2NjY2NywxNy40ODk2MjA5IDcuMzUsMTcuNDU1Nzk2NyBDOS4zMjMwMzcwNCwxNy4yOTk3MzA4IDExLjQ2MjE0ODEsMTYuNzk1NDA5MyAxMi43OTk3MDM3LDE2LjE3MDg0ODkgTDMzLjI4ODI5NjMsNi42MDM3MjUyNyBDMzUuMDU3OTI1OSw1Ljc3NzMzMjQyIDM1LjkzOTQwNzQsNC45MDk2MjM2MyAzNS45ODMxMTExLDMuOTUwODI2OTIgQzM2LjAwNTc3NzgsMy40NTM1NTIyIDM1LjgwNjQ0NDQsMi43Mjg0ODM1MiAzNC43MjgwNzQxLDIuMDk5MzI0MTggWiBNMzIuNjYyMDc0MSw1LjI1OTE0MDExIEwxMi4xNzM1NTU2LDE0LjgyNjMzNzkgQzExLjAzNCwxNS4zNTg0NzUzIDkuMTYzMTExMTEsMTUuODA0MzQ2MiA3LjQwNzI1OTI2LDE1Ljk2MjE5MjMgQzUuNjEyNTkyNTksMTYuMTIzNTI0NyA0LjY1MzAzNzA0LDE1LjkyMDk1MDUgNC4zMzMxODUxOSwxNS43NDg5MzY4IEM0LjM5OTAzNzA0LDE1LjY1ODY2NDggNC41MjIsMTUuNTE2ODQwNyA0Ljc0ODg4ODg5LDE1LjMxNjg2MjYgTDUuMjgxMDM3MDQsMTQuODQ3ODQ4OSBMMi4zMzk3MDM3LDExLjE5MDM4NzQgTDMuNjcyLDEwLjU2ODIwMDUgTDkuMDc1MTg1MTksMTIuNjI3NTQ0IEwxNi43MTczMzMzLDguOTkyMjYwOTkgTDkuNDU4MDc0MDcsMS42MjI3NDQ1MSBMMTEuNjA3Nzc3OCwxLjUzMDI0NzI1IEwyMS43NjI1MTg1LDYuNjQ0NTk2MTUgTDI4LjE0NDc0MDcsMy42NjQ1MDgyNCBDMzAuNDc1NjI5NiwyLjU3NjEyNjM3IDMyLjQzOTQ4MTUsMi40ODA4ODQ2MiAzMy45ODIsMy4zODA5MzQwNyBMMzMuOTgyMDc0MSwzLjM4MTAwODI0IEMzNC4zNzA3NDA3LDMuNjA3NzYzNzQgMzQuNTA2NTkyNiwzLjgwNTU5MDY2IDM0LjUwMzAzNywzLjg4MzE3ODU3IEMzNC41MDI4ODg5LDMuODg4NTE5MjMgMzQuNDU4MzcwNCw0LjQyMDUwODI0IDMyLjY2MjA3NDEsNS4yNTkxNDAxMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMzQgMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5idXM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTEzLjU3OTk2MyUiIHkyPSI1MCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZBQUNGNCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMThFQkQ2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFSQUNPTiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkxLjAwMDAwMCwgLTM0NzUuMDAwMDAwKSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MC4wMDAwMDAsIDMwNTUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iYnVzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgNDIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNCw4LjQxNjA1OTc2IEMzNCwzLjc3NTQ1ODkyIDMwLjI4MTAzNzUsMCAyNS43MDk4NzkyLDAgTDQuOTY3MjU4MzMsMCBDMi4yMjgyNzUsMS4wMjE4OTM5NWUtMTUgMCwyLjI2MjE5NzYzIDAsNS4wNDI3OTAwOCBMMCwxNS40MTk1MzE0IEwzLjgxMTU0MTY3LDE1LjQxOTUzMTQgQzQuMTM1ODE2NjcsMTYuODk0MTA1NCA1LjQzNDE5MTY3LDE4IDYuOTgzMDMzMzMsMTggQzguNTMxODc1LDE4IDkuODMwMzIwODMsMTYuODk0MTA1NCAxMC4xNTQ1OTU4LDE1LjQxOTUzMTQgTDI0LjAzNjAxNjcsMTUuNDE5NTMxNCBDMjQuMzYwMjkxNywxNi44OTQxMDU0IDI1LjY1ODY2NjcsMTggMjcuMjA3NTA4MywxOCBDMjguNzU2MzUsMTggMzAuMDU0NzI1LDE2Ljg5NDEwNTQgMzAuMzc5LDE1LjQxOTUzMTQgTDM0LDE1LjQxOTUzMTQgTDM0LDguNDE2MDU5NzYgWiBNMzIuMjg5OCw2LjM5Nzc3ODggTDI4LjU2OTQyMDgsNi4zOTc3Nzg4IEwyOC41Njk0MjA4LDIuMDcxNDIyMDEgQzMwLjM0NTU2NjcsMi44OTk2NzQ0MSAzMS43MTYyNjI1LDQuNDc0NDkwMTQgMzIuMjg5OCw2LjM5Nzc3ODggWiBNMjcuMTUyNzU0MiwxLjU5MzI5NjQ1IEwyNy4xNTI3NTQyLDYuMzk3NzA2ODkgTDIzLjEzODkxMjUsNi4zOTc3MDY4OSBMMjMuMTM4OTEyNSwxLjQzODExNTk3IEwyNS43MDk4NzkyLDEuNDM4MTE1OTcgQzI2LjIwNDcyMDgsMS40MzgxODc4OCAyNi42ODczMDgzLDEuNDkxOTc2MTEgMjcuMTUyNzU0MiwxLjU5MzI5NjQ1IFogTTYuODQ3MjQ1ODMsNi4zOTc3Nzg4IEw2Ljg0NzI0NTgzLDEuNDM4MTg3ODggTDEwLjg2MTE1ODMsMS40MzgxODc4OCBMMTAuODYxMTU4Myw2LjM5Nzc3ODggTDYuODQ3MjQ1ODMsNi4zOTc3Nzg4IFogTTEyLjI3Nzc1NDIsMS40MzgxODc4OCBMMTYuMjkxNjY2NywxLjQzODE4Nzg4IEwxNi4yOTE2NjY3LDYuMzk3Nzc4OCBMMTIuMjc3NzU0Miw2LjM5Nzc3ODggTDEyLjI3Nzc1NDIsMS40MzgxODc4OCBaIE0xNy43MDgzMzMzLDEuNDM4MTg3ODggTDIxLjcyMjI0NTgsMS40MzgxODc4OCBMMjEuNzIyMjQ1OCw2LjM5Nzc3ODggTDE3LjcwODMzMzMsNi4zOTc3Nzg4IEwxNy43MDgzMzMzLDEuNDM4MTg3ODggWiBNNC45NjcyNTgzMywxLjQzODE4Nzg4IEw1LjQzMDUwODMzLDEuNDM4MTg3ODggTDUuNDMwNTA4MzMsNi4zOTc3Nzg4IEwxLjQxNjY2NjY3LDYuMzk3Nzc4OCBMMS40MTY2NjY2Nyw1LjA0Mjc5MDA4IEMxLjQxNjY2NjY3LDMuMDU1MjE0NDMgMy4wMDk0OTU4MywxLjQzODE4Nzg4IDQuOTY3MjU4MzMsMS40MzgxODc4OCBaIE02Ljk4MzAzMzMzLDE2LjU2MTc0MDIgQzUuOTcyMDI5MTcsMTYuNTYxNzQwMiA1LjE0OTUxMjUsMTUuNzI2NzI4MyA1LjE0OTUxMjUsMTQuNzAwMzY1NSBDNS4xNDk1MTI1LDEzLjY3NDAwMjggNS45NzIwMjkxNywxMi44Mzg5MTkgNi45ODMwMzMzMywxMi44Mzg5MTkgQzcuOTk0MDM3NSwxMi44Mzg5MTkgOC44MTY1NTQxNywxMy42NzM5MzA4IDguODE2NTU0MTcsMTQuNzAwMzY1NSBDOC44MTY2MjUsMTUuNzI2NzI4MyA3Ljk5NDAzNzUsMTYuNTYxNzQwMiA2Ljk4MzAzMzMzLDE2LjU2MTc0MDIgWiBNNi45ODMwMzMzMywxMS40MDA4MDMgQzUuNDM0MTkxNjcsMTEuNDAwODAzIDQuMTM1NzQ1ODMsMTIuNTA2Njk3NiAzLjgxMTU0MTY3LDEzLjk4MTM0MzUgTDEuNDE2NjY2NjcsMTMuOTgxMzQzNSBMMS40MTY2NjY2Nyw3LjgzNTk2NjY4IEwyMS43MjIyNDU4LDcuODM1OTY2NjggTDIxLjcyMjI0NTgsMTMuOTgxMzQzNSBMMTAuMTU0NTk1OCwxMy45ODEzNDM1IEM5LjgzMDMyMDgzLDEyLjUwNjY5NzYgOC41MzE5NDU4MywxMS40MDA4MDMgNi45ODMwMzMzMywxMS40MDA4MDMgWiBNMjcuMjA3NTA4MywxNi41NjE3NDAyIEMyNi4xOTY1NzUsMTYuNTYxNzQwMiAyNS4zNzM5ODc1LDE1LjcyNjcyODMgMjUuMzczOTg3NSwxNC43MDAzNjU1IEMyNS4zNzM5ODc1LDEzLjY3NDAwMjggMjYuMTk2NTA0MiwxMi44Mzg5MTkgMjcuMjA3NTA4MywxMi44Mzg5MTkgQzI4LjIxODUxMjUsMTIuODM4OTE5IDI5LjA0MTAyOTIsMTMuNjczOTMwOCAyOS4wNDEwMjkyLDE0LjcwMDM2NTUgQzI5LjA0MTAyOTIsMTUuNzI2NzI4MyAyOC4yMTg1MTI1LDE2LjU2MTc0MDIgMjcuMjA3NTA4MywxNi41NjE3NDAyIFogTTMwLjM3OTA3MDgsMTMuOTgxMjcxNiBDMzAuMDU0Nzk1OCwxMi41MDY2MjU3IDI4Ljc1NjQyMDgsMTEuNDAwNzMxMSAyNy4yMDc1NzkyLDExLjQwMDczMTEgQzI1LjY1ODczNzUsMTEuNDAwNzMxMSAyNC4zNjAyOTE3LDEyLjUwNjYyNTcgMjQuMDM2MDg3NSwxMy45ODEyNzE2IEwyMy4xMzg5ODMzLDEzLjk4MTI3MTYgTDIzLjEzODk4MzMsNy44MzU4OTQ3NyBMMzIuNTU5NDYyNSw3LjgzNTg5NDc3IEMzMi41NzUwNDU4LDguMDI3MjQ1NjcgMzIuNTgzNDA0Miw4LjIyMDY4MTk0IDMyLjU4MzQwNDIsOC40MTU5ODc4NiBMMzIuNTgzNDA0Miw5LjgzMzYwOTY1IEwzMC41NjMzMDgzLDkuODMzNjA5NjUgTDMwLjU2MzMwODMsMTEuMjcxNzk3NSBMMzIuNTgzMzMzMywxMS4yNzE3OTc1IEwzMi41ODM0MDQyLDEzLjk4MTI3MTYgTDMwLjM3OTA3MDgsMTMuOTgxMjcxNiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5% 85px 8.5%;\n  background: white;\n  text-align: center;\n  p {\n    max-width: 600px;\n    margin: auto;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5% 85px 8.5%;\n  background: white;\n  text-align: center;\n  p {\n    max-width: 600px;\n    margin: auto;\n  }\n']);

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
        'div',
        { className: 'button-strong-div centered' },
        _react2.default.createElement(
          _reactStatic.Link,
          { className: 'button-strong', to: '/contact' },
          _react2.default.createElement(
            'span',
            null,
            'Contact us'
          )
        )
      )
    )
  );
};

exports.default = Contact;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  div {\n    width: 100%;\n    text-align: center;\n    ', ';\n  }\n  .text {\n    display: flex; \n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    ', ';\n    p {\n      color: white;\n    }\n  }\n  .button-strong-div {\n    justify-content: center;\n    ', ';\n  }\n  iframe {\n    ', ';\n    margin-top: 60px;\n    ', ';\n    min-height: 300px;\n  }\n  \n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  background: #18181A;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  div {\n    width: 100%;\n    text-align: center;\n    ', ';\n  }\n  .text {\n    display: flex; \n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    ', ';\n    p {\n      color: white;\n    }\n  }\n  .button-strong-div {\n    justify-content: center;\n    ', ';\n  }\n  iframe {\n    ', ';\n    margin-top: 60px;\n    ', ';\n    min-height: 300px;\n  }\n  \n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(4);

var _livestream = __webpack_require__(104);

var _livestream2 = _interopRequireDefault(_livestream);

var _ui = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var medium = function medium(css) {
  return (0, _ui.breakpoint)('medium', css);
};

var Container = _styledComponents2.default.div(_templateObject, medium('flex-direction: row;'), medium('text-align: left;'), medium('padding-right: 60px; align-items: flex-start;'), medium('justify-content: flex-start;'), medium('padding-left: 60px; width: 100%'), medium('margin-top: 0;'));

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
            'If you can not make it to Berlin this time, you can still participate in the event. The conference program will be fully livestreamed.'
          ),
          _react2.default.createElement('br', null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'button-strong-div' },
          _react2.default.createElement(
            _reactStatic.Link,
            { className: 'button-strong', to: '/livestream' },
            _react2.default.createElement(
              'span',
              null,
              'Watch the livestream'
            )
          )
        )
      ),
      _react2.default.createElement('iframe', { className: 'livestream-video', src: 'https://www.youtube-nocookie.com/embed/49hXxj31e7c?rel=0&ecver=2', frameBorder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true })
    )
  );
};

exports.default = Livestream;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/0128cda0-livestream.svg";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 244px;\n  height: auto;\n  width: 100%\n  padding: 10px 6%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 20px;\n  ', ';\n\n  p {\n    font-size: 20px;\n    color: #4bc5e8;\n    font-size: 23px;\n    color: #4bc5e8;\n    font-weight: bold;\n  }\n  h6 {\n    text-transform: uppercase;\n    font-size: 13px;\n    font-weight: 600;\n    color: #45494d;\n    margin-bottom: 15px;\n  }\n  h5 {\n    opacity: 0.5;\n    font-size: 17px;\n    font-weight: 300;\n    color: #000000;\n    max-height: auto;\n    height: auto;\n    ', ';\n  }\n'], ['\n  min-height: 244px;\n  height: auto;\n  width: 100%\n  padding: 10px 6%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin-top: 20px;\n  ', ';\n\n  p {\n    font-size: 20px;\n    color: #4bc5e8;\n    font-size: 23px;\n    color: #4bc5e8;\n    font-weight: bold;\n  }\n  h6 {\n    text-transform: uppercase;\n    font-size: 13px;\n    font-weight: 600;\n    color: #45494d;\n    margin-bottom: 15px;\n  }\n  h5 {\n    opacity: 0.5;\n    font-size: 17px;\n    font-weight: 300;\n    color: #000000;\n    max-height: auto;\n    height: auto;\n    ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  ', ';\n'], ['\n  width: 100%;\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  object-fit: cover;\n'], ['\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  object-fit: cover;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  border-radius: 6.4px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 350px;\n  margin: auto;\n  ', ';\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  ', ';\n  align-items: stretch;\n  justify-content: stretch;\n'], ['\n  border-radius: 6.4px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 350px;\n  margin: auto;\n  ', ';\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  ', ';\n  align-items: stretch;\n  justify-content: stretch;\n']),
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

var TextBox = _styledComponents2.default.div(_templateObject, medium('text-align: left; margin-top: 0; width: calc(100% - 245px);'), large('max-height: auto;'));

var PhotoBox = _styledComponents2.default.div(_templateObject2, medium('width: 244px;'));

var Photo = _styledComponents2.default.img(_templateObject3);

var SpeakerBox = _styledComponents2.default.div(_templateObject4, medium('max-width: 100%; margin: inherit'), medium('flex-direction: row;'), large('flex-direction: row;'));
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
            PhotoBox,
            null,
            _react2.default.createElement(Photo, { src: __webpack_require__(12)("./" + photo + '.png') })
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
/* 106 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQ4cHgiIGhlaWdodD0iMTQ5cHgiIHZpZXdCb3g9IjAgMCAxNDggMTQ5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MS4zICg1NzU0NCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aWNvbl9hZ2VuZGE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjNkFBQ0Y0IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxOEVCRDYiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbl9hZ2VuZGEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTMiIHN0cm9rZT0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgc3Ryb2tlLXdpZHRoPSI2IiBjeD0iMTExIiBjeT0iMTE1IiByPSIzMSI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC0yIiBzdHJva2U9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBwb2ludHM9IjExMC41NDY4NzUgMTAyLjI0ODI5MSAxMTAuNTQ2ODc1IDExNS40NDAxODYgMTIwLjQ2Njc5NyAxMTUuNDQwMTg2Ij48L3BvbHlsaW5lPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQwLDc2LjMyMzk4NzYgTDE0MCwzMiBDMTQwLDIzLjE2MzQ0NCAxMzIuODM2NTU2LDE2IDEyNCwxNiBMMTYsMTYgQzcuMTYzNDQ0LDE2IDAsMjMuMTYzNDQ0IDAsMzIgTDAsMTI5IEMwLDEzNy44MzY1NTYgNy4xNjM0NDQsMTQ1IDE2LDE0NSBMNzcuNTI2MDE4OSwxNDUiIGlkPSJSZWN0YW5nbGUtOCIgc3Ryb2tlPSIjMzM0MTRBIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMzM0MTRBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHg9IjI3IiB5PSIwIiB3aWR0aD0iNyIgaGVpZ2h0PSIzMCIgcng9IjMuNSI+PC9yZWN0PgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTIiIGZpbGw9IiMzMzQxNEEiIGZpbGwtcnVsZT0ibm9uemVybyIgY3g9IjMyIiBjeT0iNjAiIHI9IjQiPjwvY2lyY2xlPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTItQ29weS00IiBmaWxsPSIjMzM0MTRBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGN4PSIzMiIgY3k9Ijg3IiByPSI0Ij48L2NpcmNsZT4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yLUNvcHktNiIgZmlsbD0iIzMzNDE0QSIgZmlsbC1ydWxlPSJub256ZXJvIiBjeD0iMzIiIGN5PSIxMTQiIHI9IjQiPjwvY2lyY2xlPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTItQ29weSIgZmlsbD0iIzMzNDE0QSIgZmlsbC1ydWxlPSJub256ZXJvIiBjeD0iNTciIGN5PSI2MCIgcj0iNCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMi1Db3B5LTUiIGZpbGw9IiMzMzQxNEEiIGZpbGwtcnVsZT0ibm9uemVybyIgY3g9IjU3IiBjeT0iODciIHI9IjQiPjwvY2lyY2xlPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTItQ29weS03IiBmaWxsPSIjMzM0MTRBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGN4PSI1NyIgY3k9IjExNCIgcj0iNCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMi1Db3B5LTIiIGZpbGw9IiMzMzQxNEEiIGZpbGwtcnVsZT0ibm9uemVybyIgY3g9IjgyIiBjeT0iNjAiIHI9IjQiPjwvY2lyY2xlPgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTItQ29weS0zIiBmaWxsPSIjMzM0MTRBIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGN4PSIxMDciIGN5PSI2MCIgcj0iNCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtQ29weSIgZmlsbD0iIzMzNDE0QSIgZmlsbC1ydWxlPSJub256ZXJvIiB4PSI2NyIgeT0iMCIgd2lkdGg9IjciIGhlaWdodD0iMzAiIHJ4PSIzLjUiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1Db3B5LTIiIGZpbGw9IiMzMzQxNEEiIGZpbGwtcnVsZT0ibm9uemVybyIgeD0iMTA3IiB5PSIwIiB3aWR0aD0iNyIgaGVpZ2h0PSIzMCIgcng9IjMuNSI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Schedule = __webpack_require__(18);

var _Schedule2 = _interopRequireDefault(_Schedule);

var _Entry = __webpack_require__(19);

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
      _Schedule2.default,
      null,
      _react2.default.createElement(_Entry2.default, { time: '08:00 HS', title: 'Registration', subtitle: '' }),
      _react2.default.createElement(_Entry2.default, { time: '09:00 HS', title: 'Opening Keynote', subtitle: 'Luis Cuende & Stefano Bernardi' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Aragon Network', subtitle: 'Luke Duncan & Bingen Eguzkitza' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Lorikeet', subtitle: 'Jouni Helminen' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Using aragonPM to build DAppNode', badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge' },
          'Nest team'
        ), subtitle: 'Eduardo Antu\xF1a D\xEDez' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Frame', badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge' },
          'Nest team'
        ), subtitle: 'Jordan Muir' }),
      _react2.default.createElement(_Entry2.default, { time: '11:00', title: _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'span',
            { role: 'img', className: 'emoji', 'aria-label': 'coffee' },
            '\u2615'
          ),
          'Coffee Break'
        ), badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-time', color: '#5a5f68', background: '#c8d6ef' },
          '15 min'
        ), subtitle: '' }),
      _react2.default.createElement(_Entry2.default, { time: '11:15', title: 'Keynote', subtitle: 'Jorge Izquierdo' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'New Types of Organizations', badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-panel', color: '#ba7b06', background: '#ffe0a7' },
          'Panel'
        ), subtitle: _react2.default.createElement(
          'span',
          null,
          'Moderator: Griff Green ',
          _react2.default.createElement('br', null),
          'Panelists: Aron Fischer, Yalda Mousavinia, Jacob Arluck, Jeremy Macaluso'
        ) }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'That Planning Suite: Aragon apps that will power a decentralized space agency', badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge' },
          'Nest team'
        ), subtitle: 'Arthur Lunn & Yalda Mousavinia' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'aragonSDK', subtitle: 'Arthur Lunn' }),
      _react2.default.createElement(_Entry2.default, { time: '13:00', title: _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'span',
            { role: 'img', className: 'emoji', 'aria-label': 'coffee' },
            '\uD83C\uDF7D'
          ),
          'Lunch'
        ), badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-time', color: '#5a5f68', background: '#c8d6ef' },
          '1 hour'
        ), subtitle: '' }),
      _react2.default.createElement(_Entry2.default, { time: '14:00', title: 'Nest Program Demos', subtitle: 'Prysmatic Labs, Espresso, Wetonomy, Level K' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Althea and the use of Subnet DAOs', subtitle: 'Sebastian Bolanos' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Continuous DAOs', subtitle: 'Thibauld Favre' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Melon Governance Model And Its Tools', subtitle: 'Jenna Zenk' }),
      _react2.default.createElement(_Entry2.default, { time: '15:45', title: _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'span',
            { role: 'img', className: 'emoji', 'aria-label': 'coffee' },
            '\u2615'
          ),
          'Coffee Break'
        ), badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-time', color: '#5a5f68', background: '#c8d6ef' },
          '15 min'
        ), subtitle: '' }),
      _react2.default.createElement(_Entry2.default, { time: '16:00', title: 'Evolving Web3 Infrastructure ', badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-panel', color: '#ba7b06', background: '#ffe0a7' },
          'Panel'
        ), subtitle: _react2.default.createElement(
          'span',
          null,
          'Moderator: Evan van Ness ',
          _react2.default.createElement('br', null),
          'Panelists: Jutta Steiner, Lane Rettig, Martin K\xF6ppelmann, Adan Sanchez de Pedro'
        ) }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'People Might Actually Use This', subtitle: 'Laura Kalbag' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Aragon Community Governance', subtitle: 'John Light' }),
      _react2.default.createElement(_Entry2.default, { time: '17:30', title: 'AraCon Afterhours', subtitle: '' })
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'i',
        null,
        '*All panels and talks will be happening on the main stage (\u201CKapelle\u201D hall)'
      )
    )
  );
};

exports.default = DayOne;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 0;\n  ', ';\n  background: white;\n  text-align: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Schedule = __webpack_require__(18);

var _Schedule2 = _interopRequireDefault(_Schedule);

var _Entry = __webpack_require__(19);

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
      _Schedule2.default,
      null,
      _react2.default.createElement(_Entry2.default, { time: '08:00 HS', title: 'Registration', subtitle: '' }),
      _react2.default.createElement(_Entry2.default, { time: '09:00 HS', title: 'Using Metamodels for Cross-blockchain Governance', subtitle: 'Will Warren' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Governing Decentralized Organizations', badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-panel', color: '#ba7b06', background: '#ffe0a7' },
          'Panel'
        ), subtitle: _react2.default.createElement(
          'span',
          null,
          'Moderator: Alison Berreman ',
          _react2.default.createElement('br', null),
          'Panelists: Constance Choi, Kenny Rowe, Mario Laul'
        ) }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'A history of decentralized thought', subtitle: 'Daniel Shavit' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Open source sustainability', badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-panel', color: '#ba7b06', background: '#ffe0a7' },
          'Panel'
        ), subtitle: _react2.default.createElement(
          'span',
          null,
          'Moderator: Luis Cuende ',
          _react2.default.createElement('br', null),
          'Panelists: Taylor Monahan, Yondon Fu, Olivier Sarrouy'
        ) }),
      _react2.default.createElement(_Entry2.default, { time: '11:00 HS', title: _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'span',
            { role: 'img', className: 'emoji', 'aria-label': 'coffee' },
            '\u2615'
          ),
          'Coffee Break'
        ), badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-time', color: '#5a5f68', background: '#c8d6ef' },
          '15 min'
        ), subtitle: '' }),
      _react2.default.createElement(_Entry2.default, { time: '11:15 HS', title: 'Aragon One in 2019', subtitle: 'Brett Sun' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'DAOs And Their Interaction With The Physical World', subtitle: 'Primavera De Filippi & Maria Gomez' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Pando', badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge' },
          'Nest team'
        ), subtitle: 'Olivier Sarrouy' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Identity in DAOs', badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-panel', color: '#ba7b06', background: '#ffe0a7' },
          'Panel'
        ), subtitle: _react2.default.createElement(
          'span',
          null,
          'Moderator: John Light ',
          _react2.default.createElement('br', null),
          'Panelists: Jordi Baylina, Adam Stallard, Oliver Terbu'
        ) }),
      _react2.default.createElement(_Entry2.default, { time: '13:00 HS', title: _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'span',
            { role: 'img', className: 'emoji', 'aria-label': 'coffee' },
            '\uD83C\uDF7D'
          ),
          'Lunch'
        ), badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-time', color: '#5a5f68', background: '#c8d6ef' },
          '1 hour'
        ), subtitle: '' }),
      _react2.default.createElement(_Entry2.default, { time: '14:00 HS', title: 'Nest Program Demos', subtitle: 'BrightID, First State Fintech Lab, TennaGraph, Decentralized Design Lab' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Recruiting For A Diverse Web3', badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-panel', color: '#ba7b06', background: '#ffe0a7' },
          'Panel'
        ), subtitle: _react2.default.createElement(
          'span',
          null,
          'Moderator: Monica Zeng ',
          _react2.default.createElement('br', null),
          'Panelists: Raine Revere, Sara Reynolds, Samer Hassan, Taylor Monahan'
        ) }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Humanist Technology in Oppressed Societies', subtitle: 'Moises Rendon' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Power by Proxy: The Case for Crypto Cartels', subtitle: 'Meltem Demirors' }),
      _react2.default.createElement(_Entry2.default, { time: '16:00 HS', title: _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'span',
            { role: 'img', className: 'emoji', 'aria-label': 'coffee' },
            '\u2615'
          ),
          'Coffee Break'
        ), badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-time', color: '#5a5f68', background: '#c8d6ef' },
          '30 min'
        ), subtitle: '' }),
      _react2.default.createElement(_Entry2.default, { time: '16:30 HS', title: 'TheDAO - From the Author\'s Perspective', subtitle: 'Christoph Jentzsch' }),
      _react2.default.createElement(_Entry2.default, { time: '', title: 'Current State of Token Curated Registries', badge: _react2.default.createElement(
          _ui.Badge,
          { className: 'badge badge-panel', color: '#ba7b06', background: '#ffe0a7' },
          'Panel'
        ), subtitle: _react2.default.createElement(
          'span',
          null,
          'Moderator: Luke Duncan ',
          _react2.default.createElement('br', null),
          'Panelists: Matt Lockyer, Trent McConaughy, Joe Urgo, Jeff Emmett'
        ) }),
      _react2.default.createElement(_Entry2.default, { time: '17:30 HS', title: 'Closing Keynote', subtitle: 'Luis Cuende' })
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'i',
        null,
        '*All panels and talks will be happening on the main stage (\u201CKapelle\u201D hall)'
      )
    )
  );
};

exports.default = DayTwo;

/***/ }),
/* 109 */
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
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  text-align: center;\n  background: white;\n  padding-bottom: 0;\n\n  .text {\n    width: 100%;\n    padding-left: 0;\n    ', ';\n    ', ';\n  }\n  .map {\n    width: 100%;\n    ', ';\n    ', ';\n  }\n  p, h2 {\n    text-align: center;\n    ', ';\n    margin-bottom: 20px;\n    &.strong {\n      font-weight: 700;\n    }\n    img {\n      padding-right: 15px;\n    }\n  }\n  p.strong {\n    display: flex;\n    flex-direction: column;\n    ', ';\n    img {\n      padding-bottom: 6px;\n      ', ';\n    }\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 50px 8.5%;\n  text-align: center;\n  background: white;\n  padding-bottom: 0;\n\n  .text {\n    width: 100%;\n    padding-left: 0;\n    ', ';\n    ', ';\n  }\n  .map {\n    width: 100%;\n    ', ';\n    ', ';\n  }\n  p, h2 {\n    text-align: center;\n    ', ';\n    margin-bottom: 20px;\n    &.strong {\n      font-weight: 700;\n    }\n    img {\n      padding-right: 15px;\n    }\n  }\n  p.strong {\n    display: flex;\n    flex-direction: column;\n    ', ';\n    img {\n      padding-bottom: 6px;\n      ', ';\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  justify-content: center;\n  align-items: center;\n'], ['\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  ', ';\n  justify-content: center;\n  align-items: center;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _MapContainer = __webpack_require__(27);

var _MapContainer2 = _interopRequireDefault(_MapContainer);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _plane = __webpack_require__(28);

var _plane2 = _interopRequireDefault(_plane);

var _bus = __webpack_require__(29);

var _bus2 = _interopRequireDefault(_bus);

var _travelBackground = __webpack_require__(112);

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
            containerElement: _react2.default.createElement('div', { style: { height: '400px', width: '100%' } }),
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
/* 111 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSI1MnB4IiB2aWV3Qm94PSIwIDAgMzYgNTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAyMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iLTE3Ljg3MTA5MzglIiB5MT0iMTAwJSIgeDI9IjEyMi4wMTYwNTklIiB5Mj0iMCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZBQUNGNCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMThFQkQ2IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFSQUNPTiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk5MS4wMDAwMDAsIC0zMjU5LjAwMDAwMCkiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkxLjAwMDAwMCwgMzI1OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJwbGFjZWhvbGRlciI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIzIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDAgQzguMDc0OCwwIDAsOC4yMDA5Njg3NSAwLDE4LjI4MTI1IEMwLDIxLjY4NzA0NjkgMC45Mjg5LDI1LjAxMDc4MTIgMi42ODY5LDI3Ljg5NDM0MzcgTDE2Ljk3NTQsNTEuMjc5ODIwMyBDMTcuMjQ5MSw1MS43Mjc4MTI1IDE3LjczMTMsNTIgMTguMjQ5OSw1MiBDMTguMjUzOSw1MiAxOC4yNTc4LDUyIDE4LjI2MTgsNTIgQzE4Ljc4NDksNTEuOTk1ODM1OSAxOS4yNjgxLDUxLjcxNTIxODcgMTkuNTM2OCw1MS4yNTk0MDYyIEwzMy40NjExLDI3LjY0NzM0MzcgQzM1LjEyMjEsMjQuODI0NzE4NyAzNiwyMS41ODU5OTIyIDM2LDE4LjI4MTI1IEMzNiw4LjIwMDk2ODc1IDI3LjkyNTIsMCAxOCwwIFogTTMwLjg4NjYsMjYuMDgzMDc4MSBMMTguMjI3Miw0Ny41NTAxNDA2IEw1LjIzNjcsMjYuMjg5MDQ2OSBDMy43NzM0LDIzLjg4ODkyMTkgMi45OCwyMS4xMTk5MjE5IDIuOTgsMTguMjgxMjUgQzIuOTgsOS44ODEwMTU2MiA5LjcyOSwzLjAyNjU2MjUgMTgsMy4wMjY1NjI1IEMyNi4yNzEsMy4wMjY1NjI1IDMzLjAxLDkuODgxMDE1NjIgMzMuMDEsMTguMjgxMjUgQzMzLjAxLDIxLjAzNTcyNjYgMzIuMjY4OSwyMy43MzM5Mzc1IDMwLjg4NjYsMjYuMDgzMDc4MSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LDkuMTQwNjI1IEMxMy4wMzc0LDkuMTQwNjI1IDksMTMuMjQxMTA5NCA5LDE4LjI4MTI1IEM5LDIzLjI4OTE5NTMgMTIuOTcxNywyNy40MjE4NzUgMTgsMjcuNDIxODc1IEMyMy4wOTAzLDI3LjQyMTg3NSAyNywyMy4yMzQxNDg0IDI3LDE4LjI4MTI1IEMyNywxMy4yNDExMDk0IDIyLjk2MjYsOS4xNDA2MjUgMTgsOS4xNDA2MjUgWiBNMTgsMjQuMzk1MzEyNSBDMTQuNjc0MywyNC4zOTUzMTI1IDExLjk4LDIxLjY0OTc3MzQgMTEuOTgsMTguMjgxMjUgQzExLjk4LDE0LjkyMTE1NjIgMTQuNjkxNiwxMi4xNjcxODc1IDE4LDEyLjE2NzE4NzUgQzIxLjMwODQsMTIuMTY3MTg3NSAyNC4wMSwxNC45MjExNTYyIDI0LjAxLDE4LjI4MTI1IEMyNC4wMSwyMS42MDA2MTcyIDIxLjM3ODQsMjQuMzk1MzEyNSAxOCwyNC4zOTUzMTI1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/8dad1e8f-travel-background.png";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  margin: 0;\n  padding: 85px 8.5% 50px 8.5%;\n  background: #1d1d2a;\n  text-align: center;\n  background-image: url(', ');\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  padding-bottom: calc(50px + 6vw);\n  clip-path: polygon(\n    0 0, /* left top */\n    100% 0, /* right top */ \n    100% calc(100% - 6vw), /* right bottom */\n    0 100% /* left bottom */\n  );\n\n  p {\n    color: white;\n    text-align: center;\n    margin: auto;\n    margin-bottom: 20px;\n    max-width: 600px;\n  }\n  h1 {\n    text-align: center;\n  }\n'], ['\n  width: 100%;\n  margin: 0;\n  padding: 85px 8.5% 50px 8.5%;\n  background: #1d1d2a;\n  text-align: center;\n  background-image: url(', ');\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  padding-bottom: calc(50px + 6vw);\n  clip-path: polygon(\n    0 0, /* left top */\n    100% 0, /* right top */ \n    100% calc(100% - 6vw), /* right bottom */\n    0 100% /* left bottom */\n  );\n\n  p {\n    color: white;\n    text-align: center;\n    margin: auto;\n    margin-bottom: 20px;\n    max-width: 600px;\n  }\n  h1 {\n    text-align: center;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Section = __webpack_require__(3);

var _Section2 = _interopRequireDefault(_Section);

var _MapContainer = __webpack_require__(27);

var _MapContainer2 = _interopRequireDefault(_MapContainer);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ui = __webpack_require__(2);

var _plane = __webpack_require__(28);

var _plane2 = _interopRequireDefault(_plane);

var _bus = __webpack_require__(29);

var _bus2 = _interopRequireDefault(_bus);

var _venue = __webpack_require__(114);

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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/1a54dd20-venue.png";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/c0c7ecca-accomodation.png";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bbfc3f56-Cambrial.png";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/cd057246-Witnet.png";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/44092b91-dgov.svg";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/543813f3-partners.png";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/7af89221-district.png";

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/e6d03aa7-eth-news.png";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/6a5c752d-bnc.png";

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTE5IiBoZWlnaHQ9IjIxMSIgdmlld0JveD0iMCAwIDExOSAyMTEiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0xMTUuODA3IDIwNC44MThoLTQuMzM1bC0yOC44NjEtOTMuNjI2YTMuMSAzLjEgMCAwIDAtMy44NzMtMi4wNDYgMy4wOSAzLjA5IDAgMCAwLTIuMDUyIDMuODYzbC44MDcgMi42MTRINDEuNTA3bDE3LjQ0OC01Ni41OTljLjE4LjAwNy4zNjIuMDE0LjU0NS4wMTQuMTgzIDAgLjM2NC0uMDA3LjU0NS0uMDE0bDEyLjU3MyA0MC43ODRhMy4xIDMuMSAwIDAgMCAzLjg3MyAyLjA0NiAzLjA5IDMuMDkgMCAwIDAgMi4wNTEtMy44NjNMNjYgNTcuM2MzLjkwMy0yLjI1IDYuNTM3LTYuNDU0IDYuNTM3LTExLjI2NCAwLTcuMTY5LTUuODQ3LTEzLjAwMS0xMy4wMzUtMTMuMDAxcy0xMy4wMzYgNS44MzItMTMuMDM2IDEzLjAwMWMwIDQuODEgMi42MzQgOS4wMTUgNi41MzggMTEuMjY0TDE5LjA3NiAxNjcuMzU3YTMuMDkgMy4wOSAwIDAgMCAyLjA1MiAzLjg2MkEzLjEgMy4xIDAgMCAwIDI1IDE2OS4xNzNsMS4zNjQtNC40MjQuMDE1LjAwMUg4Ni4xM2wtNzEuMTcyIDM3IDUuOTY5LTE5LjM2MmEzLjA5IDMuMDkgMCAwIDAtMi4wNTItMy44NjMgMy4xIDMuMSAwIDAgMC0zLjg3MiAyLjA0NmwtNy40NzcgMjQuMjQ3SDMuMTkyYTMuMDk1IDMuMDk1IDAgMCAwLTMuMDk5IDMuMDkxQTMuMDk1IDMuMDk1IDAgMCAwIDMuMTkyIDIxMWgxMTIuNjE2YTMuMDk1IDMuMDk1IDAgMCAwIDMuMDk5LTMuMDkgMy4wOTUgMy4wOTUgMCAwIDAtMy4xLTMuMDkyek01Mi42NjIgNDYuMDM3YzAtMy43NiAzLjA2OC02LjgyIDYuODM4LTYuODJzNi44MzggMy4wNiA2LjgzOCA2LjgyYzAgMy43Ni0zLjA2OCA2LjgyLTYuODM4IDYuODJzLTYuODM4LTMuMDYtNi44MzgtNi44MnptLTEzLjA2IDc1Ljc2OGgzNC40MDVMMjkuNjk4IDE1My45M2w5LjkwMy0zMi4xMjV6bS01Ljc2MSAzNi43NjRsNDYuNDk4LTMzLjcxM0w5MC43MyAxNTguNTdIMzMuODR6bS0xMS4zNzUgNDYuMjVsNzEuMTI0LTM2Ljk3NiAxMS4zOTggMzYuOTc1SDIyLjQ2NnoiLz4KICAgICAgICA8ZmlsdGVyIGlkPSJiIiB3aWR0aD0iMTAzLjQlIiBoZWlnaHQ9IjEwMi4yJSIgeD0iLTEuNyUiIHk9Ii0xLjElIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd0JsdXJJbm5lcjEiIHN0ZERldmlhdGlvbj0iMS41Ii8+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeT0iMSIgaW49InNoYWRvd0JsdXJJbm5lcjEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0SW5uZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbXBvc2l0ZSBpbj0ic2hhZG93T2Zmc2V0SW5uZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBrMj0iLTEiIGszPSIxIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgcmVzdWx0PSJzaGFkb3dJbm5lcklubmVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93SW5uZXJJbm5lcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNjYwNDk1OTIgMCIvPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjAlIiB5Mj0iMTAwJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2QUFDRjQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMThFQkQ2Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzMzNDE0QSIgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYikiIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYykiIGQ9Ik01OS41IDE2LjUxOGMtMTYuMzIgMC0yOS41OTcgMTMuMjQyLTI5LjU5NyAyOS41MTlhMjkuNDQxIDI5LjQ0MSAwIDAgMCA3LjM5MyAxOS41MTggMy4xMDUgMy4xMDUgMCAwIDAgNC4zNzQuMjc0IDMuMDg1IDMuMDg1IDAgMCAwIC4yNzUtNC4zNjIgMjMuMjc0IDIzLjI3NCAwIDAgMS01Ljg0NC0xNS40M0MzNi4xIDMzLjE3IDQ2LjU5OCAyMi43IDU5LjUgMjIuN2MxMi45MDIgMCAyMy4zOTggMTAuNDY5IDIzLjM5OCAyMy4zMzdhMjMuMjc0IDIzLjI3NCAwIDAgMS01Ljg0NyAxNS40MzQgMy4wODUgMy4wODUgMCAwIDAgLjI3MyA0LjM2M2MuNTkuNTE4IDEuMzIxLjc3MyAyLjA1Ljc3My44NTggMCAxLjcxMi0uMzUzIDIuMzI0LTEuMDQ2YTI5LjQ0MiAyOS40NDIgMCAwIDAgNy4zOTgtMTkuNTI0YzAtMTYuMjc3LTEzLjI3Ny0yOS41Mi0yOS41OTYtMjkuNTJ6IiBvcGFjaXR5PSIuODMiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI2MpIiBkPSJNNTkuNSAwQzM0LjA0OCAwIDEzLjM0MiAyMC42NTIgMTMuMzQyIDQ2LjAzN2MwIDE0LjI3NCA2LjQ3NiAyNy41MDUgMTcuNzY4IDM2LjMwMWEzLjA5IDMuMDkgMCAwIDAgMS45MDUuNjU1Yy45MjEgMCAxLjgzNC0uNDA4IDIuNDQ1LTEuMTg4YTMuMDg1IDMuMDg1IDAgMCAwLS41MzUtNC4zMzlDMjUuMTQ3IDY5Ljg1IDE5LjU0IDU4LjM5NCAxOS41NCA0Ni4wMzZjMC0yMS45NzUgMTcuOTI2LTM5Ljg1NCAzOS45Ni0zOS44NTQgMjIuMDM0IDAgMzkuOTYgMTcuODc5IDM5Ljk2IDM5Ljg1NSAwIDEyLjM1LTUuNjAzIDIzLjgwMS0xNS4zNzEgMzEuNDE4YTMuMDg2IDMuMDg2IDAgMCAwLS41MzMgNC4zMzggMy4xMDUgMy4xMDUgMCAwIDAgNC4zNS41MzJjMTEuMjgtOC43OTYgMTcuNzUtMjIuMDIzIDE3Ljc1LTM2LjI4OEMxMDUuNjU5IDIwLjY1MiA4NC45NTIgMCA1OS41IDB6IiBvcGFjaXR5PSIuNDAzIi8+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.53fd6f4a.js.map