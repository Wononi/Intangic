/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/style.scss?");

/***/ }),

/***/ "./js/animate-block.js":
/*!*****************************!*\
  !*** ./js/animate-block.js ***!
  \*****************************/
/***/ (() => {

eval("const observer = new IntersectionObserver(entries => {\r\n    entries.forEach(entry => {\r\n        if (entry.isIntersecting) {\r\n            if(entry.target.classList.item(1) == 'second_animate_block'){\r\n                setTimeout(() =>entry.target.classList.add('element__show'), 1000)\r\n            } else {\r\n                setTimeout(() =>entry.target.classList.add('element__show'), 0)\r\n            }\r\n        }\r\n    });\r\n});\r\n\r\nlet animateBlock = document.querySelectorAll('.animate__block')\r\n\r\nanimateBlock.forEach(e => observer.observe(e))\n\n//# sourceURL=webpack:///./js/animate-block.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animate_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate-block */ \"./js/animate-block.js\");\n/* harmony import */ var _animate_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_animate_block__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style.scss */ \"./style/style.scss\");\n\r\n\r\n\r\n// window.addEventListener('scroll', () => {\r\n//     document.querySelector('.sphere__background').style.transform = `scale(1.${pageYOffset / 100})`\r\n// })\r\n\r\nconst observer = new IntersectionObserver(entries => {\r\n    entries.forEach(entry => {\r\n        if (!entry.isIntersecting) {\r\n            document.querySelector('.scroll__nav').classList.add('scroll__nav-show')\r\n        } else {\r\n            document.querySelector('.scroll__nav').classList.remove('scroll__nav-show')\r\n        }\r\n    });\r\n});\r\n\r\nobserver.observe(document.querySelector('.navigation'))\r\n\r\nconst imac = document.querySelector('.first__content__block-img picture')\r\nconst imacWrapper = document.querySelector('.first__content__block-img')\r\nconst getHeightPicture = () => {\r\n    return imac.clientHeight\r\n\r\n}\r\n\r\nsetInterval(() => {\r\n    imacWrapper.setAttribute('style', `height: ${getHeightPicture()}px`)\r\n}, 100)\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map