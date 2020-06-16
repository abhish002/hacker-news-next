webpackHotUpdate("static\\development\\pages\\story.js",{

/***/ "./pages/story.js":
/*!************************!*\
  !*** ./pages/story.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/layout.component */ "./components/layout/layout.component.js");


var _jsxFileName = "E:\\React projects\\hacker-news-next\\pages\\story.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Story(_ref) {
  var story = _ref.story;

  if (!story) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_4___default.a, {
      statusCode: "503",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 12
      }
    });
  }

  return __jsx(_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: story.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, JSON.stringify(story));
}

_c = Story;

Story.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, res, query, storyId, story, _res;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req, res = _ref2.res, query = _ref2.query;
            storyId = query.id;
            story = null;
            _context.prev = 3;
            _context.next = 6;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://node-hnapi.herokuapp.com/item/".concat(storyId));

          case 6:
            _res = _context.sent;
            story = _res.json();
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);

          case 13:
            return _context.abrupt("return", {
              story: story
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Story);

var _c;

$RefreshReg$(_c, "Story");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yeS5qcyJdLCJuYW1lcyI6WyJTdG9yeSIsInN0b3J5IiwidGl0bGUiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwicmVzIiwicXVlcnkiLCJzdG9yeUlkIiwiaWQiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQTBCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUN4QixNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLFdBQU8sTUFBQyxpREFBRDtBQUFPLGdCQUFVLEVBQUMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7O0FBQ0QsU0FDRSxNQUFDLDJFQUFEO0FBQVEsU0FBSyxFQUFFQSxLQUFLLENBQUNDLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVILEtBQWYsQ0FESCxDQURGO0FBS0Q7O0tBVFFELEs7O0FBV1RBLEtBQUssQ0FBQ0ssZUFBTjtBQUFBLCtMQUF3QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLGVBQVQsU0FBU0EsR0FBVCxFQUFjQyxHQUFkLFNBQWNBLEdBQWQsRUFBbUJDLEtBQW5CLFNBQW1CQSxLQUFuQjtBQUNoQkMsbUJBRGdCLEdBQ05ELEtBQUssQ0FBQ0UsRUFEQTtBQUVsQlQsaUJBRmtCLEdBRVYsSUFGVTtBQUFBO0FBQUE7QUFBQSxtQkFJRlUseURBQUssaURBQTBDRixPQUExQyxFQUpIOztBQUFBO0FBSWRGLGdCQUpjO0FBS3BCTixpQkFBSyxHQUFHTSxJQUFHLENBQUNLLElBQUosRUFBUjtBQUxvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9wQkMsbUJBQU8sQ0FBQ0MsR0FBUjs7QUFQb0I7QUFBQSw2Q0FVZjtBQUFFYixtQkFBSyxFQUFMQTtBQUFGLGFBVmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY2VELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzdG9yeS5qcy4xZDQxOTE5NDQ4NWJjNjkzNjVmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50JztcclxuXHJcbmZ1bmN0aW9uIFN0b3J5KHsgc3RvcnkgfSkge1xyXG4gIGlmICghc3RvcnkpIHtcclxuICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT0nNTAzJyAvPlxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17c3RvcnkudGl0bGV9PlxyXG4gICAgICB7SlNPTi5zdHJpbmdpZnkoc3RvcnkpfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5TdG9yeS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEsIHJlcywgcXVlcnkgfSkgPT4ge1xyXG4gIGNvbnN0IHN0b3J5SWQgPSBxdWVyeS5pZDtcclxuICBsZXQgc3RvcnkgPSBudWxsO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vaXRlbS8ke3N0b3J5SWR9YCk7XHJcbiAgICBzdG9yeSA9IHJlcy5qc29uKCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBzdG9yeSB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeTsiXSwic291cmNlUm9vdCI6IiJ9