/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\n/*\r\n * @Author: 张玉婷\r\n * @Date: 2022-09-21 14:17:41\r\n * @LastEditTime: 2022-09-21 14:54:56\r\n * @LastEditors: 张玉婷\r\n * @Description: 程序入口文件\r\n * @FilePath: \\webpack\\02_webpack初体验\\src\\index.js\r\n */\r\n\r\n/**\r\n * 程序入口文件\r\n * 1. 开发环境: webpack ./src/index.js -o ./build/built.js --mode=development\r\n * 表示： webpack 会以./src/index.js作为程序入口文件开始打包， 打包后输出到./build/build.js； 整体打包环境是开发环境\r\n * 2. 生产环境 webpack ./src/index.js -o ./build/built.js --mode=production\r\n * 表示： webpack 会以./src/index.js作为程序入口文件开始打包， 打包后输出到./build/build.js； 整体打包环境是生产环境\r\n * \r\n * 3. 结论\r\n * 1). webpack可以处理js/json文件， 不能处理css/img等\r\n * 2). 生产环境和开发环境将ES6模块化编译成浏览器能够识别的模块化\r\n * 3). 生产环境比开发环境多一个压缩js代码\r\n * \r\n */\r\n// import './index.css';\r\n\r\n\r\nfunction add (x, y) {\r\n  return x + y;\r\n}\r\nconsole.log(_data_json__WEBPACK_IMPORTED_MODULE_0__);\r\nconsole.log(add(1, 3));\n\n//# sourceURL=webpack://webpack_test/./src/index.js?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"name\":\"张三\",\"age\":18}');\n\n//# sourceURL=webpack://webpack_test/./src/data.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;