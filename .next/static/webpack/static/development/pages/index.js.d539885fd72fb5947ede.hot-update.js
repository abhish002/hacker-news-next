webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/story-list/story-list.component */ "./components/story-list/story-list.component.jsx");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout/layout.component */ "./components/layout/layout.component.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "E:\\React projects\\hacker-news-next\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stories = _this$props.stories,
          page = _this$props.page;
      return stories.length === 0 ? __jsx(next_error__WEBPACK_IMPORTED_MODULE_10___default.a, {
        statusCode: 503,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }) : __jsx("div", {
        className: "jsx-800200842",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }, __jsx(_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "Hacker Next",
        description: "A news app built with next.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }
      }, __jsx(_components_story_list_story_list_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
        stories: stories,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      })), __jsx("footer", {
        className: "jsx-800200842",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }, page > 0 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/?page=".concat(page > 0 && page - 1),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 16
        }
      }, __jsx("a", {
        className: "jsx-800200842",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }
      }, "< ".concat(page - 1, " prev"))), __jsx("span", {
        className: "jsx-800200842" + " " + 'page-number',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, page), __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/?page=".concat(page + 1),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "jsx-800200842",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }, "next ".concat(page + 1, " >")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "800200842",
        __self: this
      }, "footer.jsx-800200842{padding:1em 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}footer.jsx-800200842 a.jsx-800200842{font-weight:bold;color:black;-webkit-text-decoration:none;text-decoration:none;}footer.jsx-800200842 a.jsx-800200842:hover{-webkit-text-decoration:underline;text-decoration:underline;}.page-number.jsx-800200842{margin:0 1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxSZWFjdCBwcm9qZWN0c1xcaGFja2VyLW5ld3MtbmV4dFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDc0IsQUFHNkIsQUFNRyxBQUtTLEFBR2IsYUFDZixDQWRlLEdBTUQsWUFDUywrQkFJdkIsbUJBSEEsU0FQcUIscUVBQ0ksbUdBQ3pCIiwiZmlsZSI6IkU6XFxSZWFjdCBwcm9qZWN0c1xcaGFja2VyLW5ld3MtbmV4dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XHJcbmltcG9ydCBTdG9yeUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9zdG9yeS1saXN0L3N0b3J5LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMsIHF1ZXJ5IH0pIHtcclxuICAgIGxldCBzdG9yaWVzID0gW107XHJcbiAgICBsZXQgcGFnZSA9IDE7XHJcbiAgICB0cnkge1xyXG4gICAgICBwYWdlID0gTnVtYmVyKHF1ZXJ5LnBhZ2UpIHx8IDE7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL25vZGUtaG5hcGkuaGVyb2t1YXBwLmNvbS9uZXdzP3BhZ2U9JHtwYWdlfWApO1xyXG4gICAgICBzdG9yaWVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBzdG9yaWVzLCBwYWdlIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc3RvcmllcywgcGFnZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiBzdG9yaWVzLmxlbmd0aCA9PT0gMCA/XHJcbiAgICAgIDxFcnJvciBzdGF0dXNDb2RlPXs1MDN9IC8+XHJcbiAgICAgIDpcclxuICAgICAgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TGF5b3V0IHRpdGxlPSdIYWNrZXIgTmV4dCcgZGVzY3JpcHRpb249J0EgbmV3cyBhcHAgYnVpbHQgd2l0aCBuZXh0LmpzJz5cclxuICAgICAgICAgICAgPFN0b3J5TGlzdCBzdG9yaWVzPXtzdG9yaWVzfSAvPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcGFnZSA+IDAgJiZcclxuICAgICAgICAgICAgICAoPExpbmsgaHJlZj17YC8/cGFnZT0ke3BhZ2UgPiAwICYmIChwYWdlIC0gMSl9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57YDwgJHtwYWdlIC0gMX0gcHJldmB9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwYWdlLW51bWJlcic+e3BhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgLz9wYWdlPSR7cGFnZSArIDF9YH0+XHJcbiAgICAgICAgICAgICAgPGE+e2BuZXh0ICR7cGFnZSArIDF9ID5gfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb290ZXIgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBhZ2UtbnVtYmVyIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=E:\\\\React projects\\\\hacker-news-next\\\\pages\\\\index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, query, stories, page, _res;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res, query = _ref.query;
                stories = [];
                page = 1;
                _context.prev = 3;
                page = Number(query.page) || 1;
                _context.next = 7;
                return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default()("https://node-hnapi.herokuapp.com/news?page=".concat(page));

              case 7:
                _res = _context.sent;
                _context.next = 10;
                return _res.json();

              case 10:
                stories = _context.sent;
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);

              case 16:
                return _context.abrupt("return", {
                  stories: stories,
                  page: page
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 13]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwic3RvcmllcyIsInBhZ2UiLCJsZW5ndGgiLCJyZXEiLCJyZXMiLCJxdWVyeSIsIk51bWJlciIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxLOzs7Ozs7Ozs7Ozs7OzZCQWVLO0FBQUEsd0JBQ21CLEtBQUtDLEtBRHhCO0FBQUEsVUFDQ0MsT0FERCxlQUNDQSxPQUREO0FBQUEsVUFDVUMsSUFEVixlQUNVQSxJQURWO0FBRVAsYUFBT0QsT0FBTyxDQUFDRSxNQUFSLEtBQW1CLENBQW5CLEdBQ0wsTUFBQyxrREFBRDtBQUFPLGtCQUFVLEVBQUUsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURLLEdBSUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw0RUFBRDtBQUFRLGFBQUssRUFBQyxhQUFkO0FBQTRCLG1CQUFXLEVBQUMsK0JBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLG9GQUFEO0FBQVcsZUFBTyxFQUFFRixPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVJQyxJQUFJLEdBQUcsQ0FBUCxJQUNDLE1BQUMsaURBQUQ7QUFBTSxZQUFJLG1CQUFZQSxJQUFJLEdBQUcsQ0FBUCxJQUFhQSxJQUFJLEdBQUcsQ0FBaEMsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFTQSxJQUFJLEdBQUcsQ0FBaEIsV0FERCxDQUhMLEVBT0U7QUFBQSwyQ0FBZ0IsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQkEsSUFBL0IsQ0FQRixFQVFFLE1BQUMsaURBQUQ7QUFBTSxZQUFJLG1CQUFZQSxJQUFJLEdBQUcsQ0FBbkIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFZQSxJQUFJLEdBQUcsQ0FBbkIsUUFERixDQVJGLENBSkY7QUFBQTtBQUFBO0FBQUEsMHdIQUpKO0FBeUNEOzs7Ozs7Ozs7OztBQXpEOEJFLG1CLFFBQUFBLEcsRUFBS0MsRyxRQUFBQSxHLEVBQUtDLEssUUFBQUEsSztBQUNuQ0wsdUIsR0FBVSxFO0FBQ1ZDLG9CLEdBQU8sQzs7QUFFVEEsb0JBQUksR0FBR0ssTUFBTSxDQUFDRCxLQUFLLENBQUNKLElBQVAsQ0FBTixJQUFzQixDQUE3Qjs7dUJBQ2tCTSx1REFBSyxzREFBK0NOLElBQS9DLEU7OztBQUFqQkcsb0I7O3VCQUNVQSxJQUFHLENBQUNJLElBQUosRTs7O0FBQWhCUix1Qjs7Ozs7OztBQUVBUyx1QkFBTyxDQUFDQyxHQUFSOzs7aURBR0s7QUFBRVYseUJBQU8sRUFBUEEsT0FBRjtBQUFXQyxzQkFBSSxFQUFKQTtBQUFYLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWlNVLDRDQUFLLENBQUNDLFM7O0FBNkRYZCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZDUzOTg4NWZkNzJmYjU5NDdlZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xyXG5pbXBvcnQgU3RvcnlMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvc3RvcnktbGlzdC9zdG9yeS1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcmVzLCBxdWVyeSB9KSB7XHJcbiAgICBsZXQgc3RvcmllcyA9IFtdO1xyXG4gICAgbGV0IHBhZ2UgPSAxO1xyXG4gICAgdHJ5IHtcclxuICAgICAgcGFnZSA9IE51bWJlcihxdWVyeS5wYWdlKSB8fCAxO1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub2RlLWhuYXBpLmhlcm9rdWFwcC5jb20vbmV3cz9wYWdlPSR7cGFnZX1gKTtcclxuICAgICAgc3RvcmllcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgc3RvcmllcywgcGFnZSB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHN0b3JpZXMsIHBhZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gc3Rvcmllcy5sZW5ndGggPT09IDAgP1xyXG4gICAgICA8RXJyb3Igc3RhdHVzQ29kZT17NTAzfSAvPlxyXG4gICAgICA6XHJcbiAgICAgIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExheW91dCB0aXRsZT0nSGFja2VyIE5leHQnIGRlc2NyaXB0aW9uPSdBIG5ld3MgYXBwIGJ1aWx0IHdpdGggbmV4dC5qcyc+XHJcbiAgICAgICAgICAgIDxTdG9yeUxpc3Qgc3Rvcmllcz17c3Rvcmllc30gLz5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHBhZ2UgPiAwICYmXHJcbiAgICAgICAgICAgICAgKDxMaW5rIGhyZWY9e2AvP3BhZ2U9JHtwYWdlID4gMCAmJiAocGFnZSAtIDEpfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e2A8ICR7cGFnZSAtIDF9IHByZXZgfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGFnZS1udW1iZXInPntwYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC8/cGFnZT0ke3BhZ2UgKyAxfWB9PlxyXG4gICAgICAgICAgICAgIDxhPntgbmV4dCAke3BhZ2UgKyAxfSA+YH08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9vdGVyIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYWdlLW51bWJlciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDFlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==