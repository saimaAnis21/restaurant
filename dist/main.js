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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactUs() {\n  const contactdiv = document.createElement('div');\n  contactdiv.setAttribute('class', 'flex-display');\n\n  contactdiv.innerHTML = `<span>To discuss your recent order:</span>\n<span class=\"pb-10\">deliveryenquiries@paul-uk.com</span>\n<span>For general enquiries:</span>\n<span class=\"pb-10\">customerservices@paul-uk.com</span>`;\n\n  return contactdiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUs);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro */ \"./src/intro.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst contentdiv = document.getElementById('content');\n\n// Creating the Tabs\nconst tabsdiv = document.createElement('div');\ntabsdiv.setAttribute('id', 'tab');\n\n// Creating the Container\nconst containerdiv = document.createElement('div');\ncontainerdiv.setAttribute('id', 'container');\n\n// Adding buttons to tab\nconst btns = (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nfor (let i = 0; i < 3; i += 1) {\n  tabsdiv.appendChild(btns[i]);\n}\n\n// Adding tabs and container div to content div\ncontentdiv.appendChild(tabsdiv);\ncontentdiv.appendChild(containerdiv);\n\nfunction setstyle(btn) {\n  btn.style.backgroundColor = 'black';\n  btn.style.color = 'white';\n}\n\n// Adding intro to content div\nconst introdiv = (0,_intro__WEBPACK_IMPORTED_MODULE_1__.default)();\ncontainerdiv.appendChild(introdiv);\nsetstyle(btns[0]);\n\nfunction resetstyle(btnindex) {\n  for (let i = 0; i < btns.length; i += 1) {\n    if (i !== btnindex) {\n      btns[i].style.backgroundColor = 'white';\n      btns[i].style.color = 'black';\n    }\n  }\n}\n\n// intro button\nbtns[0].addEventListener('click', () => {\n  containerdiv.innerHTML = '';\n  containerdiv.appendChild(introdiv);\n  setstyle(btns[0]);\n  resetstyle(0);\n});\n\n// menu button\nbtns[1].addEventListener('click', () => {\n  containerdiv.innerHTML = '';\n  const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n  containerdiv.appendChild(menu);\n  setstyle(btns[1]);\n  resetstyle(1);\n});\n\n// contact button\nbtns[2].addEventListener('click', () => {\n  containerdiv.innerHTML = '';\n  const cntct = (0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)();\n  containerdiv.appendChild(cntct);\n  setstyle(btns[2]);\n  resetstyle(2);\n});\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/intro.js":
/*!**********************!*\
  !*** ./src/intro.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction introduction() {\n  const txt = `cake cake, glorious cake! It's what we do best at PAUL and we'd even say our cakes are a \nslice above the rest! With 130 years of experience in baking the finest patisseries, pastries \nand cake, we've gone through the years to practice and perfect the art of baking the most \nspecial celebration cakes for you to enjoy with loved ones. From the extra chocolatey Chocolate\n Macaron Cakes, fresh and light Classic Carrot Cake to our recent launch of Cheesecakes. \n Every celebration however big or small deserves to be special and what better \n than a PAUL cake!`;\n\n  const div = document.createElement('div');\n\n\n  const heading = document.createElement('h1');\n  heading.innerText = 'Paul Cafe and Restaurant';\n\n  div.appendChild(heading);\n\n  const para = document.createElement('p');\n  para.innerText = txt;\n\n  div.appendChild(para);\n\n  return div;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (introduction);\n\n\n//# sourceURL=webpack://restaurant/./src/intro.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuitems() {\n  const menudiv = document.createElement('div');\n  menudiv.setAttribute('class', 'flex-display');\n\n  const cakediv = document.createElement('div');\n  cakediv.setAttribute('class', 'flex-display pb-10');\n\n  const browniediv = document.createElement('div');\n  browniediv.setAttribute('class', 'flex-display pb-10');\n\n  const breaddiv = document.createElement('div');\n  breaddiv.setAttribute('class', 'flex-display pb-10');\n\n  cakediv.innerHTML = `<span>----------Cakes----------</span>\n<span>Cheese Cake</span>\n<span>Chocolate Cake</span>\n<span>Red Velvet Cake</span>\n<span>Nutella Cake</span>\n<span>Coffee Cake</span>`;\n  browniediv.innerHTML = `<span>----------Brownies----------</span>\n<span>Nutella Brownies</span>\n<span>Candy Brownies</span>\n<span>Caramel Square</span>`;\n  breaddiv.innerHTML = `<span>----------Bread----------</span>\n<span>Classic Baguette Duo</span>\n<span>Pain Two Olives</span>\n<span>Pain Ancien</span>`;\n\n  menudiv.appendChild(cakediv);\n  menudiv.appendChild(browniediv);\n  menudiv.appendChild(breaddiv);\n  return menudiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuitems);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction tabsButton() {\n  const btns = [];\n\n  btns[0] = document.createElement('button');\n  btns[0].innerText = 'Intro';\n\n  btns[1] = document.createElement('button');\n  btns[1].innerText = 'Menu';\n\n  btns[2] = document.createElement('button');\n  btns[2].innerText = 'Contact Us';\n\n  return btns;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsButton);\n\n//# sourceURL=webpack://restaurant/./src/tabs.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;