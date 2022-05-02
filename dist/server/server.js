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

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\Разработка\\\\Pomodoro\\\\src\\\\App.tsx: Support for the experimental syntax 'jsx' isn't currently enabled (26:5):\\n\\n\\u001b[0m \\u001b[90m 24 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 25 |\\u001b[39m   \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 26 |\\u001b[39m     \\u001b[33m<\\u001b[39m\\u001b[33mProvider\\u001b[39m store\\u001b[33m=\\u001b[39m{store}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m     \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 27 |\\u001b[39m       {mounted \\u001b[33m&&\\u001b[39m (\\u001b[0m\\n\\u001b[0m \\u001b[90m 28 |\\u001b[39m         \\u001b[33m<\\u001b[39m\\u001b[33mBrowserRouter\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 29 |\\u001b[39m           \\u001b[33m<\\u001b[39m\\u001b[33mLayout\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\\n    at Parser._raise (D:\\\\Разработка\\\\Pomodoro\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:569:17)\\n    at Parser.raiseWithData (D:\\\\Разработка\\\\Pomodoro\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:562:17)\\n    at Parser.expectOnePlugin (D:\\\\Разработка\\\\Pomodoro\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3626:18)\\n    at Parser.parseExprAtom (D:\\\\Разработка\\\\Pomodoro\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12055:18)\\n    at Parser.parseExprSubscripts (D:\\\\Разработка\\\\Pomodoro\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11654:23)\\n    at Parser.parseUpdate (D:\\\\Разработка\\\\Pomodoro\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11634:21)\\n    at Parser.parseMaybeUnary (D:\\\\Разработка\\\\Pomodoro\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11609:23)\\n    at Parser.parseMaybeUnaryOrPrivate (D:\\\\Разработка\\\\Pomodoro\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11421:61)\\n    at Parser.parseExprOps (D:\\\\Разработка\\\\Pomodoro\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11428:23)\\n    at Parser.parseMaybeConditional (D:\\\\Разработка\\\\Pomodoro\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11398:23)\");\n\n//# sourceURL=webpack://react.js/./src/App.tsx?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"indexTemplate\": () => (/* binding */ indexTemplate)\n/* harmony export */ });\nconst indexTemplate = content => `\n  <!doctype html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <title>Pomodoro</title>\n      <meta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1.0\">\n      <link rel=\"shortcut icon\" href=\"/static/favicon.ico\"> \n      <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    </head>\n    <body>\n      <div id=\"react-root\">${content}</div>\n      <div id=\"dropdown-root\">${content}</div>\n      <div id=\"question-root\">${content}</div>\n    </body>\n  </html>\n`;\n\n//# sourceURL=webpack://react.js/./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n/* harmony import */ var _indexTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"]('./dist/client'));\napp.get('/*', (req, res) => {\n  res.send((0,_indexTemplate__WEBPACK_IMPORTED_MODULE_3__.indexTemplate)(react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString(_App__WEBPACK_IMPORTED_MODULE_2__.App)));\n});\napp.listen(3000, () => {\n  console.log('Server started on http://localhost:3000');\n});\n\n//# sourceURL=webpack://react.js/./src/server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;