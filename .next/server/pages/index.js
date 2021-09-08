/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": function() { return /* binding */ SubscribeButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/daniloribeiro/Desktop/Danilo/Rocketseat/Ignite/ReactJs/NIVEL3/ignews/src/components/SubscribeButton/index.tsx\";\n\n\n\n\n\nfunction SubscribeButton() {\n  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  async function handleSubscribe() {\n    if (!session) {\n      (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signIn)('github');\n      return;\n    }\n\n    if (session.activeSubscription) {\n      router.push('/posts');\n      return;\n    }\n\n    try {\n      const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.post('/subscribe');\n      const {\n        sessionId\n      } = response.data;\n      const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_4__.getStripeJs)();\n      await stripe.redirectToCheckout({\n        sessionId\n      });\n    } catch (err) {\n      alert(err.message);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    type: \"button\",\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subscribeButton),\n    onClick: handleSubscribe,\n    children: \"Subscribe now\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4P2VmMWQiXSwibmFtZXMiOlsiU3Vic2NyaWJlQnV0dG9uIiwic2Vzc2lvbiIsInVzZVNlc3Npb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVTdWJzY3JpYmUiLCJzaWduSW4iLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJwdXNoIiwicmVzcG9uc2UiLCJhcGkiLCJzZXNzaW9uSWQiLCJkYXRhIiwic3RyaXBlIiwiZ2V0U3RyaXBlSnMiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sU0FBU0EsZUFBVCxHQUEyQjtBQUM5QixRQUFNLENBQUNDLE9BQUQsSUFBWUMsNERBQVUsRUFBNUI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUVBLGlCQUFlQyxlQUFmLEdBQWlDO0FBQzdCLFFBQUcsQ0FBQ0osT0FBSixFQUFhO0FBQ1RLLDhEQUFNLENBQUMsUUFBRCxDQUFOO0FBQ0E7QUFDSDs7QUFFRCxRQUFHTCxPQUFPLENBQUNNLGtCQUFYLEVBQStCO0FBQzNCSixZQUFNLENBQUNLLElBQVAsQ0FBWSxRQUFaO0FBQ0E7QUFDSDs7QUFFRCxRQUFJO0FBQ0EsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLG1EQUFBLENBQVMsWUFBVCxDQUF2QjtBQUVBLFlBQU07QUFBRUM7QUFBRixVQUFnQkYsUUFBUSxDQUFDRyxJQUEvQjtBQUVBLFlBQU1DLE1BQU0sR0FBRyxNQUFNQyxnRUFBVyxFQUFoQztBQUVBLFlBQU1ELE1BQU0sQ0FBQ0Usa0JBQVAsQ0FBMEI7QUFBRUo7QUFBRixPQUExQixDQUFOO0FBRUgsS0FURCxDQVNFLE9BQU1LLEdBQU4sRUFBVztBQUNUQyxXQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTCxDQUFMO0FBQ0g7QUFDSjs7QUFFRCxzQkFDSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBRUMsNEVBQWpDO0FBQXlELFdBQU8sRUFBRWQsZUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCB7IGdldFN0cmlwZUpzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RyaXBlLWpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBTdWJzY3JpYmVCdXR0b24oKSB7XG4gICAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlKCkge1xuICAgICAgICBpZighc2Vzc2lvbikge1xuICAgICAgICAgICAgc2lnbkluKCdnaXRodWInKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoc2Vzc2lvbi5hY3RpdmVTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcG9zdHMnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc3Vic2NyaWJlJylcblxuICAgICAgICAgICAgY29uc3QgeyBzZXNzaW9uSWQgfSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IGdldFN0cmlwZUpzKCk7XG5cbiAgICAgICAgICAgIGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoeyBzZXNzaW9uSWQgfSk7XG4gICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuc3Vic2NyaWJlQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVTdWJzY3JpYmV9PlxuICAgICAgICAgICAgU3Vic2NyaWJlIG5vd1xuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/daniloribeiro/Desktop/Danilo/Rocketseat/Ignite/ReactJs/NIVEL3/ignews/src/pages/index.tsx\";\n\n\n\n\nfunction Home({\n  product\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Home | ig.news\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \"\\uD83D\\uDC4F Hey, welcome\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: [\"News about the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 30\n          }, this), \" World.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"Get access to all the publications \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 48\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [\"for \", product.amount, \" month\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/images/avatar.svg\",\n        alt: \"Girl coding\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve('price_1IzSNYDA8928EUQqJRSClzS8');\n  const product = {\n    priceId: price.id,\n    amount: new Intl.NumberFormat('en-US', {\n      style: 'currency',\n      currency: 'USD'\n    }).format(price.unit_amount / 100)\n  };\n  return {\n    props: {\n      product\n    },\n    revalidate: 60 * 60 * 24 //24 hours\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1Y3QiLCJzdHlsZXMiLCJhbW91bnQiLCJnZXRTdGF0aWNQcm9wcyIsInByaWNlIiwic3RyaXBlIiwicHJpY2VJZCIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBU2UsU0FBU0EsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUFzQztBQUNuRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFNLGVBQVMsRUFBRUMsMkVBQWpCO0FBQUEsOEJBQ0U7QUFBUyxpQkFBUyxFQUFFQSwrREFBcEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEscURBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLHlFQUNxQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURyQyxlQUVFO0FBQUEsK0JBQVdELE9BQU8sQ0FBQ0UsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQU9FLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFXRTtBQUFLLFdBQUcsRUFBQyxvQkFBVDtBQUE4QixXQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUEsa0JBREY7QUF3QkQ7QUFFTSxNQUFNQyxjQUE4QixHQUFHLFlBQVk7QUFDeEQsUUFBTUMsS0FBSyxHQUFHLE1BQU1DLG9FQUFBLENBQXVCLGdDQUF2QixDQUFwQjtBQUVBLFFBQU1MLE9BQU8sR0FBRztBQUNkTSxXQUFPLEVBQUVGLEtBQUssQ0FBQ0csRUFERDtBQUVkTCxVQUFNLEVBQUUsSUFBSU0sSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQ3JDQyxXQUFLLEVBQUUsVUFEOEI7QUFFckNDLGNBQVEsRUFBRTtBQUYyQixLQUEvQixFQUdMQyxNQUhLLENBR0VSLEtBQUssQ0FBQ1MsV0FBTixHQUFvQixHQUh0QjtBQUZNLEdBQWhCO0FBUUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTGQ7QUFESyxLQURGO0FBSUxlLGNBQVUsRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUpqQixDQUlxQjs7QUFKckIsR0FBUDtBQU1ELENBakJNIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgU3Vic2NyaWJlQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24nO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSAnLi4vc2VydmljZXMvc3RyaXBlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgcHJvZHVjdDoge1xuICAgIHByaWNlSWQ6IHN0cmluZztcbiAgICBhbW91bnQ6IHN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdCB9OiBIb21lUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIHwgaWcubmV3czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICBcblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lcn0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgIDxzcGFuPvCfkY8gSGV5LCB3ZWxjb21lPC9zcGFuPlxuICAgICAgICAgIDxoMT5OZXdzIGFib3V0IHRoZSA8c3Bhbj5SZWFjdDwvc3Bhbj4gV29ybGQuPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEdldCBhY2Nlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyIC8+XG4gICAgICAgICAgICA8c3Bhbj5mb3Ige3Byb2R1Y3QuYW1vdW50fSBtb250aDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbiAvPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2F2YXRhci5zdmdcIiBhbHQ9XCJHaXJsIGNvZGluZ1wiIC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICBcbiAgIFxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZSgncHJpY2VfMUl6U05ZREE4OTI4RVVRcUpSU0NselM4Jyk7XG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZUlkOiBwcmljZS5pZCxcbiAgICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQgLyAxMDApLFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdCxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAyNCwgLy8yNCBob3Vyc1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: '/api'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvYXBpLnRzPzBlOWQiXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLE1BQU1BLEdBQUcsR0FBR0MsbURBQUEsQ0FBYTtBQUM1QkMsU0FBTyxFQUFFO0FBRG1CLENBQWIsQ0FBWiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9hcGkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6ICcvYXBpJ1xufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": function() { return /* binding */ getStripeJs; }\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n  const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51IzSLfDA8928EUQqtdFKWguVEGpmi2G5PRvuQLgB8cyIbhOqxpaJvOBq2jOzYeyOczUnWrK5naxXrCOJ0aAS0Qjb006QvcfL9x\");\n  return stripeJs;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzP2Q4YWMiXSwibmFtZXMiOlsiZ2V0U3RyaXBlSnMiLCJzdHJpcGVKcyIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLGVBQWVBLFdBQWYsR0FBNkI7QUFDaEMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLDZEQUFVLENBQUNDLDZHQUFELENBQWpDO0FBRUEsU0FBT0YsUUFBUDtBQUNIIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL3N0cmlwZS1qcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHJpcGVKcygpIHtcbiAgICBjb25zdCBzdHJpcGVKcyA9IGF3YWl0IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkpO1xuXG4gICAgcmV0dXJuIHN0cmlwZUpzO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": function() { return /* binding */ stripe; }\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'Ribeiro',\n    version: '0.1.0'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2Q5NjgiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsK0NBQUosQ0FDbEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQURNLEVBRWxCO0FBQ0lDLFlBQVUsRUFBRSxZQURoQjtBQUVJQyxTQUFPLEVBQUU7QUFDTEMsUUFBSSxFQUFFLFNBREQ7QUFFTEMsV0FBTyxFQUFFO0FBRko7QUFGYixDQUZrQixDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJztcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gICAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gICAge1xuICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG4gICAgICAgIGFwcEluZm86IHtcbiAgICAgICAgICAgIG5hbWU6ICdSaWJlaXJvJyxcbiAgICAgICAgICAgIHZlcnNpb246ICcwLjEuMCdcbiAgICAgICAgfSxcbiAgICB9XG4pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__1uQAs\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzPzQ0YTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3Vic2NyaWJlQnV0dG9uXCI6IFwic3R5bGVzX3N1YnNjcmliZUJ1dHRvbl9fMXVRQXNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__21EWl\",\n\t\"hero\": \"home_hero__3Za5I\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcz81YWQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRDb250YWluZXJcIjogXCJob21lX2NvbnRlbnRDb250YWluZXJfXzIxRVdsXCIsXG5cdFwiaGVyb1wiOiBcImhvbWVfaGVyb19fM1phNUlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();