module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/pages/Dashboard.js":
/*!***************************************!*\
  !*** ./components/pages/Dashboard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.module.css */ \"./components/pages/Dashboard.module.css\");\n/* harmony import */ var _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ \"sweetalert\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/hp/Projects/upspring/frontend/components/pages/Dashboard.js\";\n\n\n\n\nfunction Dashboard(props) {\n  var _props$records;\n\n  const queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__[\"useQueryClient\"])();\n\n  function editHandler(record) {\n    props.editRecod({\n      id: record._id,\n      name: record.name\n    });\n  }\n\n  async function deleteHandler(record) {\n    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({\n      title: \"Are you sure?\",\n      text: \"Once deleted, you will not be able to recover this Record!\",\n      icon: \"warning\",\n      buttons: true,\n      dangerMode: true\n    }).then(async willDelete => {\n      if (willDelete) {\n        const response = await fetch('/api/delete-record', {\n          method: 'DELETE',\n          body: JSON.stringify(record),\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()(\"Poof! Your Record has been deleted!\", {\n          icon: \"success\"\n        });\n        const data = await response.json();\n        queryClient.invalidateQueries(\"records\");\n        return data;\n      } else {\n        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()(\"Your Record is safe!\");\n      }\n    });\n  }\n\n  const mutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"])(record => deleteHandler(record), {\n    mutationKey: \"delete\"\n  });\n  const {\n    isLoading,\n    isError,\n    error,\n    isSuccess\n  } = mutation;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"An error occurred: \", error.message]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 19\n    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }, this), isSuccess && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"success\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.table,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.th,\n            children: \"User Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.th,\n            children: \"Role\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.th,\n            children: \"Permissions\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.th,\n            children: \"Actions\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: (_props$records = props.records) === null || _props$records === void 0 ? void 0 : _props$records.map(record => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.td,\n            children: record.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.td,\n            children: record.role\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.td,\n            children: record.permissions\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n            className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.td,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,\n              onClick: () => editHandler(record),\n              children: \"Edit\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: (_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button, _Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.mr20),\n              onClick: () => mutation.mutate(record),\n              children: \"Delete\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, this)]\n        }, record._id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL0Rhc2hib2FyZC5qcz9mZjMyIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInByb3BzIiwicXVlcnlDbGllbnQiLCJ1c2VRdWVyeUNsaWVudCIsImVkaXRIYW5kbGVyIiwicmVjb3JkIiwiZWRpdFJlY29kIiwiaWQiLCJfaWQiLCJuYW1lIiwiZGVsZXRlSGFuZGxlciIsInN3YWwiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwiYnV0dG9ucyIsImRhbmdlck1vZGUiLCJ0aGVuIiwid2lsbERlbGV0ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsImludmFsaWRhdGVRdWVyaWVzIiwibXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsIm11dGF0aW9uS2V5IiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsImVycm9yIiwiaXNTdWNjZXNzIiwibWVzc2FnZSIsImNsYXNzZXMiLCJ0YWJsZSIsInRoIiwicmVjb3JkcyIsIm1hcCIsInRkIiwicm9sZSIsInBlcm1pc3Npb25zIiwiYnV0dG9uIiwibXIyMCIsIm11dGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQ3hCLFFBQU1DLFdBQVcsR0FBR0Msa0VBQWMsRUFBbEM7O0FBQ0EsV0FBU0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDM0JKLFNBQUssQ0FBQ0ssU0FBTixDQUFnQjtBQUNkQyxRQUFFLEVBQUVGLE1BQU0sQ0FBQ0csR0FERztBQUVkQyxVQUFJLEVBQUVKLE1BQU0sQ0FBQ0k7QUFGQyxLQUFoQjtBQUlEOztBQUVELGlCQUFlQyxhQUFmLENBQTZCTCxNQUE3QixFQUFxQztBQUNuQ00scURBQUksQ0FBQztBQUNIQyxXQUFLLEVBQUUsZUFESjtBQUVIQyxVQUFJ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REFBTyxDQUFDUSxNQUEzQjtBQUFtQyxxQkFBTyxFQUFFLE1BQU16QyxXQUFXLENBQUNDLE1BQUQsQ0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFRLHVCQUFTLEdBQUVnQyw0REFBTyxDQUFDUSxNQUFSLEVBQWdCUiw0REFBTyxDQUFDUyxJQUExQixDQUFqQjtBQUFpRCxxQkFBTyxFQUFFLE1BQU1qQixRQUFRLENBQUNrQixNQUFULENBQWdCMUMsTUFBaEIsQ0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUEsV0FBU0EsTUFBTSxDQUFDRyxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUEsa0JBREY7QUFnQ0Q7O0FBRWNSLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wYWdlcy9EYXNoYm9hcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeUNsaWVudCwgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0Rhc2hib2FyZC5tb2R1bGUuY3NzJztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnO1xuXG5cbmZ1bmN0aW9uIERhc2hib2FyZChwcm9wcykge1xuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIGZ1bmN0aW9uIGVkaXRIYW5kbGVyKHJlY29yZCkge1xuICAgIHByb3BzLmVkaXRSZWNvZCh7XG4gICAgICBpZDogcmVjb3JkLl9pZCxcbiAgICAgIG5hbWU6IHJlY29yZC5uYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSGFuZGxlcihyZWNvcmQpIHtcbiAgICBzd2FsKHtcbiAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcbiAgICAgIHRleHQ6IFwiT25jZSBkZWxldGVkLCB5b3Ugd2lsbCBub3QgYmUgYWJsZSB0byByZWNvdmVyIHRoaXMgUmVjb3JkIVwiLFxuICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICBidXR0b25zOiB0cnVlLFxuICAgICAgZGFuZ2VyTW9kZTogdHJ1ZSxcbiAgICB9KVxuICAgICAgLnRoZW4oYXN5bmMgKHdpbGxEZWxldGUpID0+IHtcbiAgICAgICAgaWYgKHdpbGxEZWxldGUpIHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2RlbGV0ZS1yZWNvcmQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVjb3JkKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN3YWwoXCJQb29mISBZb3VyIFJlY29yZCBoYXMgYmVlbiBkZWxldGVkIVwiLCB7XG4gICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFwicmVjb3Jkc1wiKVxuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3YWwoXCJZb3VyIFJlY29yZCBpcyBzYWZlIVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBjb25zdCBtdXRhdGlvbiA9IHVzZU11dGF0aW9uKChyZWNvcmQpID0+IGRlbGV0ZUhhbmRsZXIocmVjb3JkKSwgeyBtdXRhdGlvbktleTogXCJkZWxldGVcIiB9KTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBpc1N1Y2Nlc3MgfSA9IG11dGF0aW9uO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0Vycm9yICYmIDxkaXY+QW4gZXJyb3Igb2NjdXJyZWQ6IHtlcnJvci5tZXNzYWdlfTwvZGl2Pn1cblxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XG5cbiAgICAgIHtpc1N1Y2Nlc3MgJiYgPGRpdj5zdWNjZXNzPC9kaXY+fVxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtjbGFzc2VzLnRofT5Vc2VyIE5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy50aH0gPlJvbGU8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy50aH0+UGVybWlzc2lvbnM8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT17Y2xhc3Nlcy50aH0+QWN0aW9uczwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtwcm9wcy5yZWNvcmRzPy5tYXAoKHJlY29yZCkgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17cmVjb3JkLl9pZH0+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2NsYXNzZXMudGR9PntyZWNvcmQubmFtZX08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjbGFzc2VzLnRkfT57cmVjb3JkLnJvbGV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZH0+e3JlY29yZC5wZXJtaXNzaW9uc308L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXtjbGFzc2VzLnRkfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IGVkaXRIYW5kbGVyKHJlY29yZCl9PkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b24sIGNsYXNzZXMubXIyMH0gb25DbGljaz17KCkgPT4gbXV0YXRpb24ubXV0YXRlKHJlY29yZCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/pages/Dashboard.js\n");

/***/ }),

/***/ "./components/pages/Dashboard.module.css":
/*!***********************************************!*\
  !*** ./components/pages/Dashboard.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"Dashboard_form__2zdrZ\",\n\t\"control\": \"Dashboard_control__JqjQC\",\n\t\"actions\": \"Dashboard_actions__2Yhkn\",\n\t\"table\": \"Dashboard_table__24e2u\",\n\t\"th\": \"Dashboard_th__19FPf\",\n\t\"td\": \"Dashboard_td__3tpru\",\n\t\"mr20\": \"Dashboard_mr20__5hCjW\",\n\t\"button\": \"Dashboard_button__1h9G6\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL0Rhc2hib2FyZC5tb2R1bGUuY3NzPzVmYTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcGFnZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwiRGFzaGJvYXJkX2Zvcm1fXzJ6ZHJaXCIsXG5cdFwiY29udHJvbFwiOiBcIkRhc2hib2FyZF9jb250cm9sX19KcWpRQ1wiLFxuXHRcImFjdGlvbnNcIjogXCJEYXNoYm9hcmRfYWN0aW9uc19fMlloa25cIixcblx0XCJ0YWJsZVwiOiBcIkRhc2hib2FyZF90YWJsZV9fMjRlMnVcIixcblx0XCJ0aFwiOiBcIkRhc2hib2FyZF90aF9fMTlGUGZcIixcblx0XCJ0ZFwiOiBcIkRhc2hib2FyZF90ZF9fM3RwcnVcIixcblx0XCJtcjIwXCI6IFwiRGFzaGJvYXJkX21yMjBfXzVoQ2pXXCIsXG5cdFwiYnV0dG9uXCI6IFwiRGFzaGJvYXJkX2J1dHRvbl9fMWg5RzZcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/pages/Dashboard.module.css\n");

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_pages_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pages/Dashboard */ \"./components/pages/Dashboard.js\");\n\n\nvar _jsxFileName = \"/home/hp/Projects/upspring/frontend/pages/profile.js\";\n\n\n\n\nfunction Dashboarda() {\n  const getRecords = async () => {\n    const token = localStorage.getItem('accessToken');\n    var headers = {\n      'Content-type': 'application/json',\n      'token': 'Bearer ' + token\n    };\n    const response = await fetch('http://localhost:8080/users', {\n      method: 'GET',\n      headers: headers\n    });\n    const data = await response.json();\n    console.log(\"Got Data\", data);\n    return data;\n  };\n\n  const {\n    data,\n    status\n  } = Object(react_query__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])('records', getRecords);\n  console.log(\"data\", data);\n  console.log(\"status\", status);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_pages_Dashboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      records: data === null || data === void 0 ? void 0 : data.data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboarda);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLmpzPzViZTIiXSwibmFtZXMiOlsiRGFzaGJvYXJkYSIsImdldFJlY29yZHMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInVzZVF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBRXBCLFFBQU1DLFVBQVUsR0FBRyxZQUFZO0FBQzdCLFVBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGFBQXJCLENBQWQ7QUFDQSxRQUFJQyxPQUFPLEdBQUc7QUFDWixzQkFBZ0Isa0JBREo7QUFFWixlQUFTLFlBQVlIO0FBRlQsS0FBZDtBQUlBLFVBQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsNkJBQUQsRUFBZ0M7QUFDMURDLFlBQU0sRUFBRSxLQURrRDtBQUUxREgsYUFBTyxFQUFFQTtBQUZpRCxLQUFoQyxDQUE1QjtBQUlBLFVBQU1JLElBQUksR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQVQsRUFBbkI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkgsSUFBeEI7QUFDQSxXQUFPQSxJQUFQO0FBQ0QsR0FiRDs7QUFlQSxRQUFNO0FBQUVBLFFBQUY7QUFBUUk7QUFBUixNQUFtQkMsNERBQVEsQ0FBQyxTQUFELEVBQVliLFVBQVosQ0FBakM7QUFDQVUsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkgsSUFBcEI7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkMsTUFBdEI7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLG1FQUFEO0FBQVcsYUFBTyxFQUFFSixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBS0Q7O0FBRWNULHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlcy9EYXNoYm9hcmQnO1xuXG5mdW5jdGlvbiBEYXNoYm9hcmRhKCkge1xuXG4gIGNvbnN0IGdldFJlY29yZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKTtcbiAgICB2YXIgaGVhZGVycyA9IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAndG9rZW4nOiAnQmVhcmVyICcgKyB0b2tlblxuICAgIH1cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvdXNlcnMnLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coXCJHb3QgRGF0YVwiLCBkYXRhKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSwgc3RhdHVzIH0gPSB1c2VRdWVyeSgncmVjb3JkcycsIGdldFJlY29yZHMpXG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcbiAgY29uc29sZS5sb2coXCJzdGF0dXNcIiwgc3RhdHVzKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEYXNoYm9hcmQgcmVjb3Jkcz17ZGF0YT8uZGF0YX0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRhOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-query\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiPzMwNmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-query\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sweetalert\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd2VldGFsZXJ0XCI/MzRkNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzd2VldGFsZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dlZXRhbGVydFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///sweetalert\n");

/***/ })

/******/ });