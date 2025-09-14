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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\n// Create two students\nvar student1 = {\n    firstName: 'John',\n    lastName: 'Doe',\n    age: 20,\n    location: 'Nairobi',\n};\nvar student2 = {\n    firstName: 'Jane',\n    lastName: 'Smith',\n    age: 22,\n    location: 'Mombasa',\n};\n// Add students to a list\nvar studentsList = [student1, student2];\n// Create a table\nvar table = document.createElement('table');\nvar tableHead = document.createElement('thead');\nvar tableBody = document.createElement('tbody');\n// Add table headers\nvar headerRow = document.createElement('tr');\nvar nameHeader = document.createElement('th');\nnameHeader.textContent = 'First Name';\nvar locationHeader = document.createElement('th');\nlocationHeader.textContent = 'Location';\nheaderRow.appendChild(nameHeader);\nheaderRow.appendChild(locationHeader);\ntableHead.appendChild(headerRow);\ntable.appendChild(tableHead);\n// Add student rows\nstudentsList.forEach(function (student) {\n    var row = document.createElement('tr');\n    var nameCell = document.createElement('td');\n    nameCell.textContent = student.firstName;\n    var locationCell = document.createElement('td');\n    locationCell.textContent = student.location;\n    row.appendChild(nameCell);\n    row.appendChild(locationCell);\n    tableBody.appendChild(row);\n});\ntable.appendChild(tableBody);\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;