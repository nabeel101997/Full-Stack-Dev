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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/records/SignUPForm.js":
/*!******************************************!*\
  !*** ./components/records/SignUPForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ \"yup\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextField */ \"./components/records/TextField.js\");\n/* harmony import */ var _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SignUpForm.module.css */ \"./components/records/SignUpForm.module.css\");\n/* harmony import */ var _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _jsxFileName = \"/home/hp/Projects/upspring/frontend/components/records/SignUPForm.js\";\n\n\n\n\n\n\n\n\n\n\nfunction SignUpForm() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const initialValues = {\n    firstName: '',\n    lastName: '',\n    email: '',\n    password: ''\n  };\n  const queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__[\"useQueryClient\"])();\n\n  const addRecord = async enteredMeetupData => {\n    const response = await fetch('http://localhost:8080/users', {\n      method: 'POST',\n      body: JSON.stringify(enteredMeetupData),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n    const data = await response.json();\n    queryClient.invalidateQueries(\"records\");\n    return data;\n  };\n\n  const mutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__[\"useMutation\"])(newRecord => addRecord(newRecord), {\n    mutationKey: \"signUp\"\n  });\n  const {\n    data,\n    isLoading,\n    isError,\n    error,\n    isSuccess\n  } = mutation;\n  Object(react_toastify__WEBPACK_IMPORTED_MODULE_2__[\"toast\"])(data === null || data === void 0 ? void 0 : data.message);\n\n  if ((data === null || data === void 0 ? void 0 : data.status) === 201) {\n    router.push('/login');\n  }\n\n  function submitHandler(values) {\n    const meetupData = {\n      firstName: values.firstName,\n      lastName: values.lastName,\n      email: values.email,\n      password: values.password\n    };\n    mutation.mutate(meetupData);\n    var form = document.getElementById(\"myForm\");\n    form.reset();\n  }\n\n  const validate = yup__WEBPACK_IMPORTED_MODULE_6__[\"object\"]().shape({\n    firstName: yup__WEBPACK_IMPORTED_MODULE_6__[\"string\"]().min(2, \"Must be more then one character\").max(255).required('First Name is required'),\n    lastName: yup__WEBPACK_IMPORTED_MODULE_6__[\"string\"]().min(2, \"Must be more than 10 characters\").max(255),\n    email: yup__WEBPACK_IMPORTED_MODULE_6__[\"string\"]().email('Must be a valid email').max(255).required('Email is required'),\n    password: yup__WEBPACK_IMPORTED_MODULE_6__[\"string\"]().max(255).required('Password is required')\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_5__[\"Formik\"], {\n      initialValues: initialValues,\n      validationSchema: validate,\n      onSubmit: values => submitHandler(values),\n      enableReinitialize: true,\n      validateOnMount: true,\n      children: formik => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_5__[\"Form\"], {\n        className: _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.form,\n        id: \"myForm\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"name\",\n            children: \"First Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TextField__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], {\n            type: \"text\",\n            name: \"firstName\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"name\",\n            children: \"Last Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TextField__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], {\n            type: \"text\",\n            name: \"lastName\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"email\",\n            children: \"Email\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TextField__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], {\n            type: \"email\",\n            name: \"email\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.control,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            htmlFor: \"password\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TextField__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], {\n            type: \"password\",\n            name: \"password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.actions,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"Submit\",\n            disabled: !formik.isValid,\n            children: \"Sign up\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.display,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            className: _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.h4,\n            children: \"Already have an Account?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 15\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: _SignUpForm_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.a,\n            href: \"/login\",\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlY29yZHMvU2lnblVQRm9ybS5qcz82MTgyIl0sIm5hbWVzIjpbIlNpZ25VcEZvcm0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbml0aWFsVmFsdWVzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicXVlcnlDbGllbnQiLCJ1c2VRdWVyeUNsaWVudCIsImFkZFJlY29yZCIsImVudGVyZWRNZWV0dXBEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJtdXRhdGlvbiIsInVzZU11dGF0aW9uIiwibmV3UmVjb3JkIiwibXV0YXRpb25LZXkiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJpc1N1Y2Nlc3MiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJwdXNoIiwic3VibWl0SGFuZGxlciIsInZhbHVlcyIsIm1lZXR1cERhdGEiLCJtdXRhdGUiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc2V0IiwidmFsaWRhdGUiLCJZdXAiLCJzaGFwZSIsIm1pbiIsIm1heCIsInJlcXVpcmVkIiwiZm9ybWlrIiwiY2xhc3NlcyIsImNvbnRyb2wiLCJhY3Rpb25zIiwiaXNWYWxpZCIsImRpc3BsYXkiLCJoNCIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxVQUFULEdBQXNCO0FBRXBCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNQyxhQUFhLEdBQUc7QUFDcEJDLGFBQVMsRUFBRSxFQURTO0FBRXBCQyxZQUFRLEVBQUUsRUFGVTtBQUdwQkMsU0FBSyxFQUFFLEVBSGE7QUFJ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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsZUFpQkU7QUFBSyxtQkFBUyxFQUFFRCw2REFBTyxDQUFDRSxPQUF4QjtBQUFBLGlDQUNFO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLG9CQUFRLEVBQUUsQ0FBQ0gsTUFBTSxDQUFDSSxPQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJGLGVBb0JFO0FBQUssbUJBQVMsRUFBRUgsNkRBQU8sQ0FBQ0ksT0FBeEI7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUVKLDZEQUFPLENBQUNLLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBRyxxQkFBUyxFQUFFTCw2REFBTyxDQUFDTSxDQUF0QjtBQUF5QixnQkFBSSxFQUFDLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVDRDs7QUFFY3ZELHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9yZWNvcmRzL1NpZ25VUEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL3VpL0NhcmQnO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnO1xuXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICcuL1RleHRGaWVsZCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL1NpZ25VcEZvcm0ubW9kdWxlLmNzcyc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuXG5cbmZ1bmN0aW9uIFNpZ25VcEZvcm0oKSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IHtcbiAgICBmaXJzdE5hbWU6ICcnLFxuICAgIGxhc3ROYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICBjb25zdCBhZGRSZWNvcmQgPSBhc3luYyAoZW50ZXJlZE1lZXR1cERhdGEpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvdXNlcnMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoXCJyZWNvcmRzXCIpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgY29uc3QgbXV0YXRpb24gPSB1c2VNdXRhdGlvbigobmV3UmVjb3JkKSA9PiBhZGRSZWNvcmQobmV3UmVjb3JkKSwgeyBtdXRhdGlvbktleTogXCJzaWduVXBcIiB9KTtcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yLCBpc1N1Y2Nlc3MgfSA9IG11dGF0aW9uO1xuICB0b2FzdChkYXRhPy5tZXNzYWdlKTtcbiAgaWYgKGRhdGE/LnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gIH1cblxuXG4gIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIodmFsdWVzKSB7XG4gICAgY29uc3QgbWVldHVwRGF0YSA9IHtcbiAgICAgIGZpcnN0TmFtZTogdmFsdWVzLmZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lOiB2YWx1ZXMubGFzdE5hbWUsXG4gICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcblxuICAgIH07XG4gICAgbXV0YXRpb24ubXV0YXRlKG1lZXR1cERhdGEpO1xuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG4gICAgZm9ybS5yZXNldCgpO1xuICB9XG5cbiAgY29uc3QgdmFsaWRhdGUgPSBZdXAub2JqZWN0KCkuc2hhcGUoe1xuICAgIGZpcnN0TmFtZTogWXVwLnN0cmluZygpLm1pbigyLCBcIk11c3QgYmUgbW9yZSB0aGVuIG9uZSBjaGFyYWN0ZXJcIikubWF4KDI1NSkucmVxdWlyZWQoJ0ZpcnN0IE5hbWUgaXMgcmVxdWlyZWQnKSxcbiAgICBsYXN0TmFtZTogWXVwLnN0cmluZygpLm1pbigyLCBcIk11c3QgYmUgbW9yZSB0aGFuIDEwIGNoYXJhY3RlcnNcIikubWF4KDI1NSksXG4gICAgZW1haWw6IFl1cC5zdHJpbmcoKS5lbWFpbCgnTXVzdCBiZSBhIHZhbGlkIGVtYWlsJykubWF4KDI1NSkucmVxdWlyZWQoJ0VtYWlsIGlzIHJlcXVpcmVkJyksXG4gICAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKS5tYXgoMjU1KS5yZXF1aXJlZCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnXG4gICAgKVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0ZX1cbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHN1Ym1pdEhhbmRsZXIodmFsdWVzKX1cbiAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplXG4gICAgICAgIHZhbGlkYXRlT25Nb3VudFxuICAgICAgPlxuICAgICAgICB7Zm9ybWlrID0+IChcbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gaWQ9J215Rm9ybSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0TmFtZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtZSc+TGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0TmFtZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cIlN1Ym1pdFwiIGRpc2FibGVkPXshZm9ybWlrLmlzVmFsaWR9PlNpZ24gdXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGlzcGxheX0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2NsYXNzZXMuaDR9PkFscmVhZHkgaGF2ZSBhbiBBY2NvdW50PzwvaDQ+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5hfSBocmVmPScvbG9naW4nPkxvZ2luPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtaWs+XG4gICAgPC9DYXJkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduVXBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/records/SignUPForm.js\n");

/***/ }),

/***/ "./components/records/SignUpForm.module.css":
/*!**************************************************!*\
  !*** ./components/records/SignUpForm.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"SignUpForm_form__knV4_\",\n\t\"control\": \"SignUpForm_control__2HXaK\",\n\t\"actions\": \"SignUpForm_actions__2Hbtq\",\n\t\"a\": \"SignUpForm_a__2Qfnf\",\n\t\"h4\": \"SignUpForm_h4__35sUF\",\n\t\"display\": \"SignUpForm_display__2E5D9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlY29yZHMvU2lnblVwRm9ybS5tb2R1bGUuY3NzPzIyODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9yZWNvcmRzL1NpZ25VcEZvcm0ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1cIjogXCJTaWduVXBGb3JtX2Zvcm1fX2tuVjRfXCIsXG5cdFwiY29udHJvbFwiOiBcIlNpZ25VcEZvcm1fY29udHJvbF9fMkhYYUtcIixcblx0XCJhY3Rpb25zXCI6IFwiU2lnblVwRm9ybV9hY3Rpb25zX18ySGJ0cVwiLFxuXHRcImFcIjogXCJTaWduVXBGb3JtX2FfXzJRZm5mXCIsXG5cdFwiaDRcIjogXCJTaWduVXBGb3JtX2g0X18zNXNVRlwiLFxuXHRcImRpc3BsYXlcIjogXCJTaWduVXBGb3JtX2Rpc3BsYXlfXzJFNUQ5XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/records/SignUpForm.module.css\n");

/***/ }),

/***/ "./components/records/TextField.js":
/*!*****************************************!*\
  !*** ./components/records/TextField.js ***!
  \*****************************************/
/*! exports provided: TextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextField\", function() { return TextField; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"formik\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/hp/Projects/upspring/frontend/components/records/TextField.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\nconst TextField = (_ref) => {\n  let {\n    formik\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"formik\"]);\n\n  const [field, meta] = Object(formik__WEBPACK_IMPORTED_MODULE_2__[\"useField\"])(props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", _objectSpread(_objectSpread(_objectSpread({}, field), props), {}, {\n      className: ` form-control shadow-none ${meta.touched && meta.error && 'is-invalid mr-20'}`\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(formik__WEBPACK_IMPORTED_MODULE_2__[\"ErrorMessage\"], {\n      name: field.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlY29yZHMvVGV4dEZpZWxkLmpzP2I5ZDUiXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwiZm9ybWlrIiwicHJvcHMiLCJmaWVsZCIsIm1ldGEiLCJ1c2VGaWVsZCIsInRvdWNoZWQiLCJlcnJvciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxNQUFNQSxTQUFTLEdBQUcsVUFBMEI7QUFBQSxNQUF6QjtBQUFFQztBQUFGLEdBQXlCO0FBQUEsTUFBWkMsS0FBWTs7QUFDakQsUUFBTSxDQUFDQyxLQUFELEVBQVFDLElBQVIsSUFBZ0JDLHVEQUFRLENBQUNILEtBQUQsQ0FBOUI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLDRIQUNNQyxLQUROLEdBQ2lCRCxLQURqQjtBQUN3QixlQUFTLEVBQUcsNkJBQTRCRSxJQUFJLENBQUNFLE9BQUwsSUFBZ0JGLElBQUksQ0FBQ0csS0FBckIsSUFBOEIsa0JBQW1CO0FBRGpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyxtREFBRDtBQUFjLFVBQUksRUFBRUosS0FBSyxDQUFDSztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FWTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmVjb3Jkcy9UZXh0RmllbGQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlLCB1c2VGaWVsZCB9IGZyb20gJ2Zvcm1payc7XG5cblxuZXhwb3J0IGNvbnN0IFRleHRGaWVsZCA9ICh7IGZvcm1paywgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBbZmllbGQsIG1ldGFdID0gdXNlRmllbGQocHJvcHMpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLmZpZWxkfSB7Li4ucHJvcHN9IGNsYXNzTmFtZT17YCBmb3JtLWNvbnRyb2wgc2hhZG93LW5vbmUgJHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciAmJiAnaXMtaW52YWxpZCBtci0yMCd9YH1cbiAgICAgIC8+XG4gICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9e2ZpZWxkLm5hbWV9IC8+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/records/TextField.js\n");

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ \"./components/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/hp/Projects/upspring/frontend/components/ui/Card.js\";\n\n\nfunction Card(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQuanM/OTVlYSJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJjbGFzc2VzIiwiY2FyZCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLHNCQUFPO0FBQUssYUFBUyxFQUFFQyx1REFBTyxDQUFDQyxJQUF4QjtBQUFBLGNBQStCRixLQUFLLENBQUNHO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVjSixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdWkvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Card.js\n");

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Card_card__3KSLO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcz8yNGQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18zS1NMT1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/Card.module.css\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/react-toastify/dist/ReactToastify.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_records_SignUPForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/records/SignUPForm */ \"./components/records/SignUPForm.js\");\n\n\nvar _jsxFileName = \"/home/hp/Projects/upspring/frontend/pages/index.js\";\n\n\n\nfunction HomePage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_records_SignUPForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFLRDs7QUFFY0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL3JlY29yZHMvU2lnblVQRm9ybSc7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2lnblVwRm9ybSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtaWtcIj83MGQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZvcm1pay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///formik\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-toastify\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiP2FlOWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtdG9hc3RpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-toastify\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"yup\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ5dXBcIj8wZGEwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Inl1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///yup\n");

/***/ })

/******/ });