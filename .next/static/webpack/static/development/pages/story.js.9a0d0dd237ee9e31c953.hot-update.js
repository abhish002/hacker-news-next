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
  var title = story.title,
      url = story.url,
      points = story.points,
      comments_count = story.comments_count,
      time_ago = story.time_ago;

  if (!story) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_4___default.a, {
      statusCode: "503",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 12
      }
    });
  }

  return __jsx(_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, title)), __jsx("div", {
    className: "story-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, points, " points"), __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, comments_count, " comments"), __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, time_ago))));
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
            _context.next = 9;
            return _res.json();

          case 9:
            story = _context.sent;
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);

          case 15:
            return _context.abrupt("return", {
              story: story
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 12]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdG9yeS5qcyJdLCJuYW1lcyI6WyJTdG9yeSIsInN0b3J5IiwidGl0bGUiLCJ1cmwiLCJwb2ludHMiLCJjb21tZW50c19jb3VudCIsInRpbWVfYWdvIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwicmVzIiwicXVlcnkiLCJzdG9yeUlkIiwiaWQiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQTBCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQUEsTUFDaEJDLEtBRGdCLEdBQ2lDRCxLQURqQyxDQUNoQkMsS0FEZ0I7QUFBQSxNQUNUQyxHQURTLEdBQ2lDRixLQURqQyxDQUNURSxHQURTO0FBQUEsTUFDSkMsTUFESSxHQUNpQ0gsS0FEakMsQ0FDSkcsTUFESTtBQUFBLE1BQ0lDLGNBREosR0FDaUNKLEtBRGpDLENBQ0lJLGNBREo7QUFBQSxNQUNvQkMsUUFEcEIsR0FDaUNMLEtBRGpDLENBQ29CSyxRQURwQjs7QUFFeEIsTUFBSSxDQUFDTCxLQUFMLEVBQVk7QUFDVixXQUFPLE1BQUMsaURBQUQ7QUFBTyxnQkFBVSxFQUFDLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUNELFNBQ0UsTUFBQywyRUFBRDtBQUFRLFNBQUssRUFBRUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBRUMsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWVELEtBQWYsQ0FERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTRSxNQUFULFlBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNDLGNBQVQsY0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0MsUUFBVCxDQUhGLENBSkYsQ0FERixDQURGO0FBY0Q7O0tBbkJRTixLOztBQXFCVEEsS0FBSyxDQUFDTyxlQUFOO0FBQUEsK0xBQXdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsZUFBVCxTQUFTQSxHQUFULEVBQWNDLEdBQWQsU0FBY0EsR0FBZCxFQUFtQkMsS0FBbkIsU0FBbUJBLEtBQW5CO0FBQ2hCQyxtQkFEZ0IsR0FDTkQsS0FBSyxDQUFDRSxFQURBO0FBRWxCWCxpQkFGa0IsR0FFVixJQUZVO0FBQUE7QUFBQTtBQUFBLG1CQUlGWSx5REFBSyxpREFBMENGLE9BQTFDLEVBSkg7O0FBQUE7QUFJZEYsZ0JBSmM7QUFBQTtBQUFBLG1CQUtOQSxJQUFHLENBQUNLLElBQUosRUFMTTs7QUFBQTtBQUtwQmIsaUJBTG9CO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPcEJjLG1CQUFPLENBQUNDLEdBQVI7O0FBUG9CO0FBQUEsNkNBVWY7QUFBRWYsbUJBQUssRUFBTEE7QUFBRixhQVZlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNlRCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc3RvcnkuanMuOWEwZDBkZDIzN2VlOWUzMWM5NTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudCc7XHJcblxyXG5mdW5jdGlvbiBTdG9yeSh7IHN0b3J5IH0pIHtcclxuICBjb25zdCB7IHRpdGxlLCB1cmwsIHBvaW50cywgY29tbWVudHNfY291bnQsIHRpbWVfYWdvIH0gPSBzdG9yeTtcclxuICBpZiAoIXN0b3J5KSB7XHJcbiAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9JzUwMycgLz5cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e3RpdGxlfT5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgPGEgaHJlZj17dXJsfT57dGl0bGV9PC9hPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0b3J5LWRldGFpbHMnPlxyXG4gICAgICAgICAgPHN0cm9uZz57cG9pbnRzfSBwb2ludHM8L3N0cm9uZz5cclxuICAgICAgICAgIDxzdHJvbmc+e2NvbW1lbnRzX2NvdW50fSBjb21tZW50czwvc3Ryb25nPlxyXG4gICAgICAgICAgPHN0cm9uZz57dGltZV9hZ299PC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuU3RvcnkuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxLCByZXMsIHF1ZXJ5IH0pID0+IHtcclxuICBjb25zdCBzdG9yeUlkID0gcXVlcnkuaWQ7XHJcbiAgbGV0IHN0b3J5ID0gbnVsbDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbm9kZS1obmFwaS5oZXJva3VhcHAuY29tL2l0ZW0vJHtzdG9yeUlkfWApO1xyXG4gICAgc3RvcnkgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgc3RvcnkgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==