webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/story/story.component.jsx":
/*!**********************************************!*\
  !*** ./components/story/story.component.jsx ***!
  \**********************************************/
/*! exports provided: Story, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return Story; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "E:\\React projects\\hacker-news-next\\components\\story\\story.component.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Story = function Story(props) {
  var _props$story = props.story,
      id = _props$story.id,
      title = _props$story.title,
      url = _props$story.url,
      points = _props$story.points,
      comments_count = _props$story.comments_count;
  return __jsx("div", {
    className: "jsx-4144301613" + " " + 'story',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "jsx-4144301613" + " " + 'story-title',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: url,
    target: "_blank",
    className: "jsx-4144301613",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 35
    }
  }, title)), __jsx("div", {
    className: "jsx-4144301613" + " " + 'story-details',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-4144301613",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, points || 0, " points"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/story?id=".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-4144301613",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, comments_count || 0, " comments"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4144301613",
    __self: _this
  }, ".story.jsx-4144301613{padding:1em 0;}.story-title.jsx-4144301613{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxSZWFjdCBwcm9qZWN0c1xcaGFja2VyLW5ld3MtbmV4dFxcY29tcG9uZW50c1xcc3RvcnlcXHN0b3J5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR3lCLEFBR0MsY0FGakIsQ0FHa0IsZ0JBQ1AsU0FDVyxvQkFDdEIiLCJmaWxlIjoiRTpcXFJlYWN0IHByb2plY3RzXFxoYWNrZXItbmV3cy1uZXh0XFxjb21wb25lbnRzXFxzdG9yeVxcc3RvcnkuY29tcG9uZW50LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB1cmwsIHBvaW50cywgY29tbWVudHNfY291bnQgfSA9IHByb3BzLnN0b3J5O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3N0b3J5Jz5cclxuICAgICAgPGgyIGNsYXNzTmFtZT0nc3RvcnktdGl0bGUnPjxhIGhyZWY9e3VybH0gdGFyZ2V0PSdfYmxhbmsnPnt0aXRsZX08L2E+PC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3N0b3J5LWRldGFpbHMnPlxyXG4gICAgICAgIDxzcGFuPntwb2ludHMgfHwgMH0gcG9pbnRzPC9zcGFuPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2Avc3Rvcnk/aWQ9JHtpZH1gfT5cclxuICAgICAgICAgIDxhPntjb21tZW50c19jb3VudCB8fCAwfSBjb21tZW50czwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnN0b3J5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RvcnktdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeTtcclxuIl19 */\n/*@ sourceURL=E:\\\\React projects\\\\hacker-news-next\\\\components\\\\story\\\\story.component.jsx */"));
};
_c = Story;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3J5L3N0b3J5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiU3RvcnkiLCJwcm9wcyIsInN0b3J5IiwiaWQiLCJ0aXRsZSIsInVybCIsInBvaW50cyIsImNvbW1lbnRzX2NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQSxxQkFDcUJBLEtBQUssQ0FBQ0MsS0FEM0I7QUFBQSxNQUN0QkMsRUFEc0IsZ0JBQ3RCQSxFQURzQjtBQUFBLE1BQ2xCQyxLQURrQixnQkFDbEJBLEtBRGtCO0FBQUEsTUFDWEMsR0FEVyxnQkFDWEEsR0FEVztBQUFBLE1BQ05DLE1BRE0sZ0JBQ05BLE1BRE07QUFBQSxNQUNFQyxjQURGLGdCQUNFQSxjQURGO0FBRzlCLFNBQ0U7QUFBQSx3Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFjLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QjtBQUFHLFFBQUksRUFBRUYsR0FBVDtBQUFjLFVBQU0sRUFBQyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JELEtBQS9CLENBQTVCLENBREYsRUFFRTtBQUFBLHdDQUFlLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRSxNQUFNLElBQUksQ0FBakIsWUFERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLHNCQUFlSCxFQUFmLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJSSxjQUFjLElBQUksQ0FBdEIsY0FERixDQUZGLENBRkY7QUFBQTtBQUFBO0FBQUEsNndEQURGO0FBc0JELENBekJNO0tBQU1QLEs7QUEyQkVBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kZmEzMjY4MWE1YTQ0MzQ4MmJiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3J5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgdGl0bGUsIHVybCwgcG9pbnRzLCBjb21tZW50c19jb3VudCB9ID0gcHJvcHMuc3Rvcnk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc3RvcnknPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPSdzdG9yeS10aXRsZSc+PGEgaHJlZj17dXJsfSB0YXJnZXQ9J19ibGFuayc+e3RpdGxlfTwvYT48L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RvcnktZGV0YWlscyc+XHJcbiAgICAgICAgPHNwYW4+e3BvaW50cyB8fCAwfSBwb2ludHM8L3NwYW4+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9zdG9yeT9pZD0ke2lkfWB9PlxyXG4gICAgICAgICAgPGE+e2NvbW1lbnRzX2NvdW50IHx8IDB9IGNvbW1lbnRzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc3Rvcnkge1xyXG4gICAgICAgICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdG9yeS10aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9