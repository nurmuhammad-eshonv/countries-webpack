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

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://countries/./src/css/main.css?");

/***/ }),

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mode */ \"./src/js/mode.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mode__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateUI */ \"./src/js/updateUI.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst queryString = window.location.search\r\nconst urlParams = new URLSearchParams(queryString)\r\nconst country = urlParams.get(\"country\")\r\nconst countryAPI = `https://restcountries.com/v3.1/name/${country}`\r\n\r\n;(0,_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(countryAPI).then((data) => {\r\n    ;(0,_updateUI__WEBPACK_IMPORTED_MODULE_3__.createCountryInfo)(data[0])\r\n}).catch((err) => {\r\n   alert(err.message)\r\n})\n\n//# sourceURL=webpack://countries/./src/js/about.js?");

/***/ }),

/***/ "./src/js/loader.js":
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loaderEl = document.querySelector(\".loader\")\r\n\r\nconst loaderToggle = (info) => {\r\n   if (info){\r\n      loaderEl.classList.remove(\"hidden\")\r\n   }else{\r\n    loaderEl.classList.add(\"hidden\")\r\n   }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderToggle);\n\n//# sourceURL=webpack://countries/./src/js/loader.js?");

/***/ }),

/***/ "./src/js/mode.js":
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
/***/ (() => {

eval("const modeBtn = document.querySelector(\".header__dark-mode\")\r\nconst body = document.querySelector(\"body\")\r\nconst modeFromLocal = localStorage.getItem(\"mode\") ? localStorage.getItem(\"mode\") : null\r\n\r\nif(modeFromLocal){\r\n    body.classList.add(\"dark-mode\")\r\n}\r\n\r\nmodeBtn.addEventListener(\"click\", () => {\r\n    body.classList.toggle(\"dark-mode\")\r\n    modeFromLocal ? localStorage.setItem(\"mode\",\"\") : localStorage.setItem(\"mode\", \"dark\")\r\n})\n\n//# sourceURL=webpack://countries/./src/js/mode.js?");

/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n\r\n\r\nconst request = async (resourse) => {\r\n  (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true);\r\n  const req = await fetch(resourse);\r\n\r\n  if (!req.ok) {\r\n    throw new Error(\"something went wrong\");\r\n  }\r\n    (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false)\r\n\r\n  const data = await req.json();\r\n\r\n  return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\n\n//# sourceURL=webpack://countries/./src/js/request.js?");

/***/ }),

/***/ "./src/js/updateUI.js":
/*!****************************!*\
  !*** ./src/js/updateUI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createConutries: () => (/* binding */ createConutries),\n/* harmony export */   createCountryInfo: () => (/* binding */ createCountryInfo)\n/* harmony export */ });\nconst cardEl = document.querySelector(\".cards\");\r\n\r\nconst createConutries = (countries) => {\r\n  cardEl.innerHTML = \"\";\r\n  countries.forEach((country) => {\r\n    const commonName = country.name.common;\r\n    const population = country.population;\r\n    const region = country.region;\r\n    const capital = country.capital ? country.capital[0] : \"No capital\";\r\n    const flag = country.flags.svg;\r\n\r\n    // li\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"cards__item\");\r\n    li.innerHTML = `\r\n        <a href=\"./about.html?country=${commonName}\">\r\n        <img\r\n          src=\"${flag}\"\r\n          alt=\"iceland-flag\"\r\n          width=\"267\"\r\n          height=\"160\"\r\n        />\r\n        <div class=\"cards__item-inner\">\r\n          <h3 class=\"cards__title\">${commonName}</h3>\r\n          <p class=\"population\">Population: <span>${population}</span></p>\r\n          <p class=\"region\">Region: <span>${region}</span></p>\r\n          <p class=\"capital\">Capital: <span>${capital}</span></p>\r\n        </div>\r\n      </a>\r\n        `;\r\n    cardEl.appendChild(li);\r\n  });\r\n};\r\n\r\nconst countrInfoEl = document.querySelector(\".country-info\");\r\n\r\nconst createCountryInfo = (country) => {\r\n  const {\r\n    population,\r\n    borders,\r\n    capital,\r\n    flags,\r\n    name,\r\n    region,\r\n    tld,\r\n    currencies,\r\n    languages,\r\n    subregion\r\n  } = country;\r\n\r\n  const nativeName = Object.values(name.nativeName)[0].official;\r\n  const currency = Object.values(currencies)[0].name;\r\n  const language = Object.values(languages);\r\n\r\n  countrInfoEl.innerHTML = `\r\n  \r\n  <img\r\n  class=\"country-info__img\"\r\n  src=${flags.svg}\r\n  alt=\"germany-flag\"\r\n  width=\"560\"\r\n  height=\"400\"\r\n/>\r\n<div class=\"country-info__content\">\r\n  <h2>${name.common}</h2>\r\n  <ul class=\"country-info__list\">\r\n    <li class=\"country-info__item\">\r\n      <p class=\"name\">\r\n        Native Name: \r\n        <span>${nativeName}</span>\r\n      </p>\r\n      <p class=\"population\">\r\n        Population:\r\n        <span>${population}</span>\r\n      </p>\r\n      <p class=\"region\">\r\n        Region:\r\n        <span>${region}</span>\r\n      </p>\r\n      <p class=\"sub-region\">\r\n        Sub Region:\r\n        <span>${subregion}</span>\r\n      </p>\r\n      <p class=\"capital\">\r\n        Capital:\r\n        <span>${capital}</span>\r\n      </p>\r\n    </li>\r\n    <li class=\"country-info__item\">\r\n      <p class=\"name\">\r\n        Top Level Domain:\r\n        <span>${tld}</span>\r\n      </p>\r\n      <p class=\"population\">\r\n        Currencies:\r\n        <span>${currency}</span>\r\n      </p>\r\n      <p class=\"region\">\r\n        Languages:\r\n        <span>${language}</span>\r\n      </p>\r\n    </li>\r\n  </ul>\r\n\r\n  <div class=\"country-info__borders\">\r\n    <h3>Border Countries:</h3>\r\n      ${borders ? borders.map((border) => {\r\n        return `\r\n        <a href=\"./about.html?country=${border}\">${border}</a>\r\n        `\r\n      } ) : \"No border\"}\r\n  </div>\r\n</div>\r\n\r\n  `;\r\n};\r\n\n\n//# sourceURL=webpack://countries/./src/js/updateUI.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/about.js");
/******/ 	
/******/ })()
;