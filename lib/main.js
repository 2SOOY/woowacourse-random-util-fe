(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WoowaUtil"] = factory();
	else
		root["WoowaUtil"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

var Random = /*#__PURE__*/function () {
  function Random() {
    _classCallCheck(this, Random);
  }

  _createClass(Random, null, [{
    key: "pickOneInRange",
    value: function pickOneInRange(startInclusive, endInclusive) {
      _classStaticPrivateMethodGet(Random, Random, _validateRange).call(Random, startInclusive, endInclusive);

      startInclusive = Math.ceil(startInclusive);
      return Math.floor(Math.random() * (endInclusive + 1 - startInclusive)) + startInclusive;
    }
  }, {
    key: "pickOneInArray",
    value: function pickOneInArray(array) {
      _classStaticPrivateMethodGet(Random, Random, _validateEmptyArray).call(Random, array);

      return array[Random.pickOneInRange(0, array.length - 1)];
    }
  }, {
    key: "pickSeveralInRange",
    value: function pickSeveralInRange(startInclusive, endInclusive, count) {
      _classStaticPrivateMethodGet(Random, Random, _validateIntsRange).call(Random, startInclusive, endInclusive, count);

      var result = [];

      for (var i = startInclusive; i <= endInclusive; i++) {
        result.push(i);
      }

      return Random.shuffle(result).slice(0, count);
    }
  }, {
    key: "shuffle",
    value: function shuffle(array) {
      _classStaticPrivateMethodGet(Random, Random, _validateEmptyArray).call(Random, array);

      return array.sort(function () {
        return Math.random() - 0.5;
      });
    }
  }]);

  return Random;
}();

function _isNumber(value) {
  return typeof value === "number";
}

function _validateRange(startInclusive, endInclusive) {
  if (!_classStaticPrivateMethodGet(Random, Random, _isNumber).call(Random, startInclusive) || !_classStaticPrivateMethodGet(Random, Random, _isNumber).call(Random, endInclusive)) {
    throw new Error("\uC778\uC790\uB294 \uC22B\uC790\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.");
  }

  if (startInclusive < Number.MIN_SAFE_INTEGER) {
    throw new Error("\uCD5C\uC18C\uAC12 \uC815\uC218 \uBC94\uC704\uB97C \uBBF8\uB2EC\uD558\uC600\uC2B5\uB2C8\uB2E4. \uB354 \uB192\uC740 \uCD5C\uC18C \uC815\uC218\uAC12\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694");
  }

  if (endInclusive > Number.MAX_SAFE_INTEGER) {
    throw new Error("\uCD5C\uB300\uAC12 \uC815\uC218 \uBC94\uC704\uB97C \uCD08\uACFC\uD558\uC600\uC2B5\uB2C8\uB2E4. \uB354 \uB0AE\uC740 \uCD5C\uB300 \uC815\uC218\uAC12 \uC785\uB825\uD574\uC8FC\uC138\uC694");
  }

  if (startInclusive > endInclusive) {
    throw new Error("\uCD5C\uC18C\uAC12 ".concat(startInclusive, "\uAC00 \uCD5C\uB300\uAC12 ").concat(endInclusive, "\uBCF4\uB2E4 \uD074 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."));
  }
}

function _validateEmptyArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("\uC778\uC790\uB294 \uBC30\uC5F4\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.");
  }

  if (!array.every(function (v) {
    return _classStaticPrivateMethodGet(Random, Random, _isNumber).call(Random, v);
  })) {
    throw new Error("\uBC30\uC5F4\uC758 \uC6D0\uC18C\uB294 \uC22B\uC790\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.");
  }

  if (array.length === 0) {
    throw new Error("\uC785\uB825\uD55C \uBC30\uC5F4\uC740 \uCD5C\uC18C 1\uAC1C \uC774\uC0C1\uC758 \uC6D0\uC18C\uB97C \uAC00\uC838\uC57C \uD569\uB2C8\uB2E4.");
  }
}

function _validateIntsRange(startInclusive, endInclusive, count) {
  if (!_classStaticPrivateMethodGet(Random, Random, _isNumber).call(Random, startInclusive) || !_classStaticPrivateMethodGet(Random, Random, _isNumber).call(Random, endInclusive) || !_classStaticPrivateMethodGet(Random, Random, _isNumber).call(Random, count)) {
    throw new Error("\uC778\uC790 \uAC12\uC740 \uC22B\uC790\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.");
  }

  if (count < 0) {
    throw new Error("count: ".concat(count, "\uB294 0\uBCF4\uB2E4 \uC791\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."));
  }

  if (endInclusive - startInclusive + 1 < count) {
    throw new Error("count: ".concat(count, "\uAC00 (endInclusive - startInclusive): ").concat(endInclusive - startInclusive, " \uBCF4\uB2E4 \uAC19\uAC70\uB098 \uC791\uC544\uC57C\uD569\uB2C8\uB2E4."));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Random);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Random": () => (/* reexport safe */ _random__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./src/random.js");

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});