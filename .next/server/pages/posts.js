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
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./src/pages/posts/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/posts/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Posts; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/posts/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/daniloribeiro/Desktop/Danilo/Rocketseat/Ignite/ReactJs/NIVEL3/ignews/src/pages/posts/index.tsx\";\n\n\n\n\n\n\nfunction Posts({\n  posts\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Posts | Ignews\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().posts),\n        children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          href: `/posts/${post.slug}`,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n              children: post.updatedAt\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 33\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n              children: post.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 33\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: post.excerpt\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 33\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 29\n          }, this)\n        }, post.slug, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 25\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_3__.getPrismicClient)();\n  const response = await prismic.query([_prismicio_client__WEBPACK_IMPORTED_MODULE_4___default().Predicates.at('document.type', 'post')], {\n    fetch: ['post.title', 'post.content'],\n    pageSize: 100\n  });\n  const posts = response.results.map(post => {\n    var _post$data$content$fi, _post$data$content$fi2;\n\n    return {\n      slug: post.uid,\n      title: prismic_dom__WEBPACK_IMPORTED_MODULE_5__.RichText.asText(post.data.title),\n      excerpt: (_post$data$content$fi = (_post$data$content$fi2 = post.data.content.find(content => content.type === 'paragraph')) === null || _post$data$content$fi2 === void 0 ? void 0 : _post$data$content$fi2.text) !== null && _post$data$content$fi !== void 0 ? _post$data$content$fi : '',\n      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {\n        day: '2-digit',\n        month: 'long',\n        year: 'numeric'\n      })\n    };\n  });\n  return {\n    props: {\n      posts\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4Pzc2OTUiXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0cyIsInN0eWxlcyIsIm1hcCIsInBvc3QiLCJzbHVnIiwidXBkYXRlZEF0IiwidGl0bGUiLCJleGNlcnB0IiwiZ2V0U3RhdGljUHJvcHMiLCJwcmlzbWljIiwiZ2V0UHJpc21pY0NsaWVudCIsInJlc3BvbnNlIiwicXVlcnkiLCJQcmlzbWljIiwiZmV0Y2giLCJwYWdlU2l6ZSIsInJlc3VsdHMiLCJ1aWQiLCJSaWNoVGV4dCIsImRhdGEiLCJjb250ZW50IiwiZmluZCIsInR5cGUiLCJ0ZXh0IiwiRGF0ZSIsImxhc3RfcHVibGljYXRpb25fZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFhZSxTQUFTQSxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQXNDO0FBQ2pELHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQU0sZUFBUyxFQUFFQyxzRUFBakI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVBLGtFQUFoQjtBQUFBLGtCQUNNRCxLQUFLLENBQUNFLEdBQU4sQ0FBVUMsSUFBSSxpQkFDWiw4REFBQyxrREFBRDtBQUFzQixjQUFJLEVBQUcsVUFBU0EsSUFBSSxDQUFDQyxJQUFLLEVBQWhEO0FBQUEsaUNBQ0k7QUFBQSxvQ0FDSTtBQUFBLHdCQUFPRCxJQUFJLENBQUNFO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUEsd0JBQVNGLElBQUksQ0FBQ0c7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBQSx3QkFBSUgsSUFBSSxDQUFDSTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBV0osSUFBSSxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBLGtCQURKO0FBc0JIO0FBRU0sTUFBTUksY0FBOEIsR0FBRyxZQUFZO0FBQ3RELFFBQU1DLE9BQU8sR0FBR0MsbUVBQWdCLEVBQWhDO0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0csS0FBUixDQUFjLENBQ2pDQyxzRUFBQSxDQUFzQixlQUF0QixFQUF1QyxNQUF2QyxDQURpQyxDQUFkLEVBRXBCO0FBQ0NDLFNBQUssRUFBRSxDQUFDLFlBQUQsRUFBYyxjQUFkLENBRFI7QUFFQ0MsWUFBUSxFQUFFO0FBRlgsR0FGb0IsQ0FBdkI7QUFPQSxRQUFNZixLQUFLLEdBQUdXLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQmQsR0FBakIsQ0FBcUJDLElBQUksSUFBSTtBQUFBOztBQUN2QyxXQUFPO0FBQ0hDLFVBQUksRUFBRUQsSUFBSSxDQUFDYyxHQURSO0FBRUhYLFdBQUssRUFBRVksd0RBQUEsQ0FBZ0JmLElBQUksQ0FBQ2dCLElBQUwsQ0FBVWIsS0FBMUIsQ0FGSjtBQUdIQyxhQUFPLHFEQUFFSixJQUFJLENBQUNnQixJQUFMLENBQVVDLE9BQVYsQ0FBa0JDLElBQWxCLENBQXVCRCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsSUFBUixLQUFpQixXQUFuRCxDQUFGLDJEQUFFLHVCQUFpRUMsSUFBbkUseUVBQTJFLEVBSC9FO0FBSUhsQixlQUFTLEVBQUUsSUFBSW1CLElBQUosQ0FBU3JCLElBQUksQ0FBQ3NCLHFCQUFkLEVBQXFDQyxrQkFBckMsQ0FBd0QsT0FBeEQsRUFBaUU7QUFDeEVDLFdBQUcsRUFBRSxTQURtRTtBQUV4RUMsYUFBSyxFQUFFLE1BRmlFO0FBR3hFQyxZQUFJLEVBQUU7QUFIa0UsT0FBakU7QUFKUixLQUFQO0FBVUgsR0FYYSxDQUFkO0FBYUEsU0FBTztBQUNIQyxTQUFLLEVBQUU7QUFDSDlCO0FBREc7QUFESixHQUFQO0FBS0gsQ0E1Qk0iLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZ2V0UHJpc21pY0NsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ByaXNtaWMnO1xuaW1wb3J0IFByaXNtaWMgZnJvbSAnQHByaXNtaWNpby9jbGllbnQnO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdwcmlzbWljLWRvbSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG50eXBlIFBvc3QgPSB7XG4gICAgc2x1Zzogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZXhjZXJwdDogc3RyaW5nO1xuICAgIHVwZGF0ZWRBdDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUG9zdHNQcm9wcyB7XG4gICAgcG9zdHM6IFBvc3RbXTsgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKHsgcG9zdHMgfTogUG9zdHNQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+UG9zdHMgfCBJZ25ld3M8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdHN9PlxuICAgICAgICAgICAgICAgICAgICB7IHBvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17cG9zdC5zbHVnfSBocmVmPXtgL3Bvc3RzLyR7cG9zdC5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZT57cG9zdC51cGRhdGVkQXR9PC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntwb3N0LnRpdGxlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57cG9zdC5leGNlcnB0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQoKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJpc21pYy5xdWVyeShbXG4gICAgICAgIFByaXNtaWMuUHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsICdwb3N0JylcbiAgICBdLCB7XG4gICAgICAgIGZldGNoOiBbJ3Bvc3QudGl0bGUnLCdwb3N0LmNvbnRlbnQnXSxcbiAgICAgICAgcGFnZVNpemU6IDEwMCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHBvc3RzID0gcmVzcG9uc2UucmVzdWx0cy5tYXAocG9zdCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzbHVnOiBwb3N0LnVpZCxcbiAgICAgICAgICAgIHRpdGxlOiBSaWNoVGV4dC5hc1RleHQocG9zdC5kYXRhLnRpdGxlKSxcbiAgICAgICAgICAgIGV4Y2VycHQ6IHBvc3QuZGF0YS5jb250ZW50LmZpbmQoY29udGVudCA9PiBjb250ZW50LnR5cGUgPT09ICdwYXJhZ3JhcGgnKT8udGV4dCA/PyAnJyxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUocG9zdC5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygncHQtQlInLCB7XG4gICAgICAgICAgICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0c1xuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/index.tsx\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": function() { return /* binding */ getPrismicClient; }\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {\n    req: req,\n    accessToken: process.env.PRISMIC_ACCESS_TOKEN\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvcHJpc21pYy50cz84YzUwIl0sIm5hbWVzIjpbImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiUHJpc21pYyIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0VORFBPSU5UIiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxnQkFBVCxDQUEwQkMsR0FBMUIsRUFBeUM7QUFDNUMsUUFBTUMsT0FBTyxHQUFHQywrREFBQSxDQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBREEsRUFFWjtBQUNJTCxPQUFHLEVBQUVBLEdBRFQ7QUFFSU0sZUFBVyxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFGN0IsR0FGWSxDQUFoQjtBQVFBLFNBQU9OLE9BQVA7QUFDSCIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9wcmlzbWljLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByaXNtaWMgZnJvbSAnQHByaXNtaWNpby9jbGllbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpc21pY0NsaWVudChyZXE/OiB1bmtub3duKSB7XG4gICAgY29uc3QgcHJpc21pYyA9IFByaXNtaWMuY2xpZW50KFxuICAgICAgICBwcm9jZXNzLmVudi5QUklTTUlDX0VORFBPSU5ULFxuICAgICAgICB7ICAgXG4gICAgICAgICAgICByZXE6IHJlcSxcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5QUklTTUlDX0FDQ0VTU19UT0tFTlxuICAgICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuIHByaXNtaWM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "./src/pages/posts/styles.module.scss":
/*!********************************************!*\
  !*** ./src/pages/posts/styles.module.scss ***!
  \********************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__ly6-1\",\n\t\"posts\": \"styles_posts__165L0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvc3R5bGVzLm1vZHVsZS5zY3NzPzQyMTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0cy9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX19seTYtMVwiLFxuXHRcInBvc3RzXCI6IFwic3R5bGVzX3Bvc3RzX18xNjVMMFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/styles.module.scss\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prismicio/client");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("prismic-dom");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./src/pages/posts/index.tsx"); });
module.exports = __webpack_exports__;

})();