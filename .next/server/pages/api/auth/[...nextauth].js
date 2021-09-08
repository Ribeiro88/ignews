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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_2___default().GitHub({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET,\n    scope: 'read:user'\n  })],\n  callbacks: {\n    async session(session) {\n      try {\n        const userActiveSubscription = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Intersection([faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_user_ref'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('subscription_by_status'), \"active\")])));\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: userActiveSubscription\n        });\n      } catch {\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: null\n        });\n      }\n    },\n\n    async signIn(user, account, profile) {\n      const {\n        email\n      } = user;\n\n      try {\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection('users'), {\n          data: {\n            email\n          }\n        }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))));\n        return true;\n      } catch {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz83MmNmIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlckFjdGl2ZVN1YnNjcmlwdGlvbiIsImZhdW5hIiwicXVlcnkiLCJ1c2VyIiwiZW1haWwiLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJzaWduSW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFHQSwrREFBZUEsZ0RBQVEsQ0FBQztBQUNwQkMsV0FBUyxFQUFFLENBQ1BDLGlFQUFBLENBQWlCO0FBQ2JDLFlBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQURUO0FBRWJDLGdCQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxvQkFGYjtBQUdiQyxTQUFLLEVBQUU7QUFITSxHQUFqQixDQURPLENBRFM7QUFRcEJDLFdBQVMsRUFBRTtBQUNQLFVBQU1DLE9BQU4sQ0FBY0EsT0FBZCxFQUF1QjtBQUNuQixVQUFJO0FBQ0EsY0FBTUMsc0JBQXNCLEdBQUcsTUFBTUMsd0RBQUEsQ0FDakNDLDhDQUFBLENBQ0lBLHVEQUFBLENBQW1CLENBQ2ZBLGdEQUFBLENBQ0lBLGdEQUFBLENBQVksMEJBQVosQ0FESixFQUVJQSxpREFBQSxDQUNJLEtBREosRUFFSUEsOENBQUEsQ0FDSUEsZ0RBQUEsQ0FDSUEsZ0RBQUEsQ0FBWSxlQUFaLENBREosRUFFSUEsbURBQUEsQ0FBZUgsT0FBTyxDQUFDSSxJQUFSLENBQWFDLEtBQTVCLENBRkosQ0FESixDQUZKLENBRkosQ0FEZSxFQWFmRixnREFBQSxDQUNJQSxnREFBQSxDQUFZLHdCQUFaLENBREosRUFFSSxRQUZKLENBYmUsQ0FBbkIsQ0FESixDQURpQyxDQUFyQztBQXVCQSwrQ0FDT0gsT0FEUDtBQUVJTSw0QkFBa0IsRUFBRUw7QUFGeEI7QUFJSCxPQTVCRCxDQTRCRSxNQUFNO0FBQ0osK0NBQ09ELE9BRFA7QUFFSU0sNEJBQWtCLEVBQUU7QUFGeEI7QUFJSDtBQUNKLEtBcENNOztBQXFDUCxVQUFNQyxNQUFOLENBQWFILElBQWIsRUFBbUJJLE9BQW5CLEVBQTRCQyxPQUE1QixFQUFxQztBQUNqQyxZQUFNO0FBQUVKO0FBQUYsVUFBWUQsSUFBbEI7O0FBRUEsVUFBSTtBQUVBLGNBQU1GLHdEQUFBLENBRUZDLDZDQUFBLENBQ0lBLDhDQUFBLENBQ0lBLGlEQUFBLENBQ0lBLGdEQUFBLENBQ0lBLGdEQUFBLENBQVksZUFBWixDQURKLEVBRUlBLG1EQUFBLENBQWVDLElBQUksQ0FBQ0MsS0FBcEIsQ0FGSixDQURKLENBREosQ0FESixFQVNJRixpREFBQSxDQUNJQSxxREFBQSxDQUFpQixPQUFqQixDQURKLEVBRUk7QUFBRU8sY0FBSSxFQUFFO0FBQUVMO0FBQUY7QUFBUixTQUZKLENBVEosRUFhSUYsOENBQUEsQ0FDSUEsZ0RBQUEsQ0FDSUEsZ0RBQUEsQ0FBWSxlQUFaLENBREosRUFFSUEsbURBQUEsQ0FBZUMsSUFBSSxDQUFDQyxLQUFwQixDQUZKLENBREosQ0FiSixDQUZFLENBQU47QUF3QkEsZUFBTyxJQUFQO0FBQ0gsT0EzQkQsQ0EyQkUsTUFBTTtBQUNKLGVBQU8sS0FBUDtBQUNIO0FBR0o7O0FBeEVNO0FBUlMsQ0FBRCxDQUF2QiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlcnkgfSBmcm9tICdmYXVuYWRiJztcblxuaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnO1xuXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gICcuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQcm92aWRlcnMuR2l0SHViKHtcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgICAgIHNjb3BlOiAncmVhZDp1c2VyJ1xuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICBhc3luYyBzZXNzaW9uKHNlc3Npb24pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckFjdGl2ZVN1YnNjcmlwdGlvbiA9IGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICAgICAgICAgICAgICBxdWVyeS5HZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5JbnRlcnNlY3Rpb24oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5JbmRleCgnc3Vic2NyaXB0aW9uX2J5X3VzZXJfcmVmJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LlNlbGVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5HZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuTWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LkNhc2Vmb2xkKHNlc3Npb24udXNlci5lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5JbmRleCgnc3Vic2NyaXB0aW9uX2J5X3N0YXR1cycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb246IHVzZXJBY3RpdmVTdWJzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb246IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHNpZ25Jbih1c2VyLCBhY2NvdW50LCBwcm9maWxlKSB7XG4gICAgICAgICAgICBjb25zdCB7IGVtYWlsIH0gPSB1c2VyXG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LklmKFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuTm90KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LkV4aXN0cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuTWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuQ2FzZWZvbGQodXNlci5lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5DcmVhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuQ29sbGVjdGlvbigndXNlcnMnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE6IHsgZW1haWwgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkuR2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lk1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5DYXNlZm9sZCh1c2VyLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgfVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": function() { return /* binding */ fauna; }\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJuYW1lcyI6WyJmYXVuYSIsIkNsaWVudCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsMkNBQUosQ0FBVztBQUM1QkMsUUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEUSxDQUFYLENBQWQiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJztcblxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX0tFWVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("faunadb");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();