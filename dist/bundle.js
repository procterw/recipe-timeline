/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./css/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3fb8c9a2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica, sans-serif;\n  font-size: 14px;\n}\n\nnav {\n  text-align: center;\n  margin: 30px 0 50px;\n}\n\nnav a {\n  padding: 6px;\n  text-decoration: none;\n  color: black;\n}\n\nnav a.router-link-exact-active {\n  border-bottom: 7px solid #82ccdd;\n}\n\n.layout {\n\n}\n\n.layout-wrapper {\n  display: flex;\n  max-width: 1100px;\n  margin: 20px auto;\n  padding: 0 50px;\n}\n\n.layout-side-panel {\n  width: 300px;\n}\n\n.layout-content-with-side-panel {\n  flex-grow: 1;\n  padding: 0 40px;\n}\n\n.layout-content-full-width {\n  width: 100%;\n}\n\np {\n  max-width: 400px;\n}\n\nh1 {\n  font-weight: 100;\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 15px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ddd;\n}\n\nh3 {\n  font-weight: 100;\n  font-size: 19px;\n  margin: 0 0 10px;\n  padding: 0 0 10px;\n  border-bottom: 1px solid #DDD;\n}\n\nh4 {\n  font-style: italic;\n  font-size: 16px;\n  font-weight: normal;\n}\n\n/* For mobile phones: */\n@media only screen and (max-width: 768px) {\n  .layout-wrapper {\n    display: block;\n    padding: 0 20px;\n  }\n  \n  .layout-content-with-side-panel {\n    width: 100%;\n    padding: 0;\n  }\n\n  .layout-side-panel {\n    width: 100%;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/index.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/views/TimelineDemo/index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nform ul {\n  list-style: none;\n  padding: 0;\n}\np {\n  margin-top: 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/vis/RecipeTimeline/FullStep.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vis/RecipeTimeline/FullStep.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.full-step-view {\n  font-family: 'Libre Baskerville', serif;\n  background: #fff8ea;\n  border: 1px solid wheat;\n  margin-top: 1px;\n  padding: 1px 6px;\n}\n.full-step-view section {\n  display: inline-block;\n  vertical-align: top;\n  padding: 5px;\n}\n.full-step-view h3 {\n  margin: 0 0 5px;\n  font-size: 15px;\n  text-transform: capitalize;\n  font-weight: normal;\n  font-style: italic;\n  padding: 0;\n  border-bottom: none;\n}\n.full-step-view ul {\n  list-style: none;\n  padding: 0;\n  font-size: 13px;\n}\n.full-step-view p {\n  font-size: 13px;\n  margin: 0;\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/vis/RecipeTimeline/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/vis/RecipeTimeline/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".step-group text {\n  font-family: 'Libre Baskerville', serif;\n  font-size: 13px;\n}\n\n.step-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\n/* ------------ */\n/* ------------ */\n/* step */\n\n.step {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* ------------ */\n/* ------------ */\n/* step bar, a shaded rectangle visualizing the length */\n\n.step-bar {\n  border: 2px solid black;\n  border-radius: 2px;\n  box-sizing: border-box;\n  position: relative;\n  cursor: pointer;\n  transition: margin-left 0.3s ease-out, width 0.3s ease-out;\n}\n\n.step-bar.passive {\n  background: white;\n}\n\n.step:hover .step-bar.passive {\n  background: wheat;\n}\n\n/* light shading */\n.step-bar.semi-active {\n  background: repeating-linear-gradient(\n    -45deg,\n    white,\n    white 3px,\n    black 3px,\n    black 4px\n  );\n}\n\n.step:hover .step-bar.semi-active {\n  background: repeating-linear-gradient(\n    -45deg,\n    wheat,\n    wheat 3px,\n    black 3px,\n    black 4px\n  )\n}\n\n/* dark shading */\n.step-bar.active {\n  background: repeating-linear-gradient(\n    -45deg,\n    black,\n    black 3px,\n    white 3px,\n    white 4px\n  );\n}\n\n.step:hover .step-bar.active {\n  background: repeating-linear-gradient(\n    -45deg,\n    black,\n    black 3px,\n    wheat 3px,\n    wheat 4px\n  );\n}\n\n/* ------------ */\n/* ------------ */\n/* full step content, the ingredients and direction */\n\n.step .full-step-view {\n  visibility: hidden;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.3s ease-in;\n}\n\n.step.open .full-step-view {\n  opacity: 1;\n  visibility: visible;\n}\n\n/* ------------ */\n/* ------------ */\n/* step header, labeling the title and duration */\n\n.step-header {\n  position: absolute;\n  white-space: nowrap;\n  font-family: 'Libre Baskerville', serif;\n  line-height: 15px;\n  border-bottom: 1px solid #BBB;\n  top: -1px;\n}\n\n.step-title {\n  font-size: 13px;\n  display: block;\n}\n\n.step-duration {\n  font-size: 11px;\n  font-style: italic;\n  color: #888;\n}\n\n/* ------------ */\n/* ------------ */\n/* step header, labeling the title and duration */\n\nul.timeline-legend {\n  list-style: none;\n  margin: 0 0 15px;\n  padding: 0 0 5px;\n  border-bottom: 1px solid #ddd;\n}\n\nul.timeline-legend li {\n  display: inline-block;\n  margin-right: 8px;\n}\n\nul.timeline-legend .step-bar {\n  vertical-align: middle;\n  display: inline-block;\n}\n\nul.timeline-legend .label {\n  vertical-align: middle;\n  font-family: 'Libre Baskerville', serif;\n  font-style: italic;\n  margin-left: 5px;\n}\n\n/* ------------ */\n/* ------------ */\n/* time axis, 5 minute interval blocks */\n\n.time-axis {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.time-block {\n  display: inline-block;\n  box-sizing: border-box;\n  border-bottom: 2px solid black;\n  background: rgb(248, 248, 248);\n  margin-bottom: 15px;\n  margin-right: 4px;\n  padding: 2px 5px;\n  font-style: italic;\n  font-size: 13px;\n  color: #666;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/views/RecipeTrees/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/views/RecipeTrees/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {}
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/RecipeSelection.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/views/TimelineDemo/RecipeSelection.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_mockApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/mockApi.js */ "./src/api/mockApi.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    selectedRecipes: Array,
    handleRecipeToggle: Function,
  },
  data () {
    return {
      availableRecipes: [],
    };
  },
  mounted: async function () {
    this.availableRecipes = await Object(_api_mockApi_js__WEBPACK_IMPORTED_MODULE_0__["getAvailableRecipes"])();
    this.handleRecipeToggle(this.availableRecipes[0]);
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/SortOptions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/views/TimelineDemo/SortOptions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_mockApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/mockApi.js */ "./src/api/mockApi.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    sort: String,
    handleSortChange: Function,
  },
  data () {
    return {
      sortOptions: [
        'branchDepth',
        'startTime'
      ],
    };
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/views/TimelineDemo/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vis_RecipeTimeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vis/RecipeTimeline */ "./src/vis/RecipeTimeline/index.js");
/* harmony import */ var _api_mockApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/mockApi.js */ "./src/api/mockApi.js");
/* harmony import */ var _RecipeSelection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecipeSelection.vue */ "./src/views/TimelineDemo/RecipeSelection.vue");
/* harmony import */ var _SortOptions_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SortOptions.vue */ "./src/views/TimelineDemo/SortOptions.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'recipe-selection': _RecipeSelection_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'sort-options': _SortOptions_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data () {
    return {
      recipeTimeline: null,
      selectedRecipes: [],
      sort: 'branchDepth',
    }
  },
  mounted: function () {
    this.recipeTimeline = new _vis_RecipeTimeline__WEBPACK_IMPORTED_MODULE_0__["RecipeTimeline"](
      this.$el.querySelector('.timeline-wrapper'),
      [] // no initial data
    );
  },
  methods: {
    handleRecipeToggle: async function(recipe) {
      const index = this.selectedRecipes.indexOf(recipe);
      if (index < 0) {
        this.selectedRecipes.push(recipe);
      } else {
        this.selectedRecipes.splice(index, 1);
      }

      const data = await Object(_api_mockApi_js__WEBPACK_IMPORTED_MODULE_1__["getRecipesTimeline"])(this.selectedRecipes, this.sort);
      this.recipeTimeline.setSteps(data);
    },
    handleSortChange: async function(sort) {
      this.sort = sort;

      const data = await Object(_api_mockApi_js__WEBPACK_IMPORTED_MODULE_1__["getRecipesTimeline"])(this.selectedRecipes, this.sort);
      this.recipeTimeline.setSteps(data);
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/vis/RecipeTimeline/FullStep.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/vis/RecipeTimeline/FullStep.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    ingredients: Array,
    instructions: String,
  },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/RecipeTrees/index.vue?vue&type=template&id=5f7e5ca0&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/RecipeTrees/index.vue?vue&type=template&id=5f7e5ca0& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "layout-wrapper" }, [
      _c("section", { staticClass: "layout-content-full-width" }, [
        _c("h1", [_vm._v("Recipe Trees / Graphs")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n      Written recipes haven’t changed much in the last few centuries, and why would they?\n      A complete list of ingredients and instructions is all you really need to prepare\n      a dish. However, as someone who cooks a lot and often cooks multiple dishes for \n      multiple people, there are a few places I struggle where written recipes offer no help.\n    "
          )
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Context")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n      For complex recipes, it can be difficult to get a real sense of how long things will take\n      and why. Most people find the overall time estimates wildly inaccurate.\n    "
          )
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Cooking more than one recipe at a time")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n      Most meals involve preparing several recipes at the same time. You might be cooking rice\n      while stir-frying vegetables and tofu. In that situation, when do you start the rice?\n      Should you do the prep ahead of time or can you do it while the rice cooks? Knowing how\n      to juggle the steps of multiple recipes can be a huge time saver.\n    "
          )
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Multitasking")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n      Recipes aren’t great at taking multi-tasking into account. You can be cooking several\n      dishes at the same, or do prep while a pan heats up, but you can’t chop onions and stem\n      kale at the same times, and recipes aren’t always clear on how much multitasking there\n      will be or how much prior skill is required to do so successfully.\n    "
          )
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("Which ingredients when?")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n      It’s fairly common for me to frantically refer back to a written recipe while cooking,\n      skim the instructions for which spices I need to add now, then find the measurements\n      in the ingredient list. It would be useful to have both the full list of ingredients\n      and measurements before you start, then see the ingredients and measurements required\n      at each step.\n    "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n      I propose that presenting a list of recipes as an interactive timeline helps alleviate these issues.\n    "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/RecipeSelection.vue?vue&type=template&id=9ff23e26&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/TimelineDemo/RecipeSelection.vue?vue&type=template&id=9ff23e26& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", [
    _c(
      "ul",
      _vm._l(_vm.availableRecipes, function(recipe) {
        return _c("li", { key: recipe }, [
          _c("input", {
            attrs: { type: "checkbox", name: recipe, id: recipe },
            domProps: { checked: _vm.selectedRecipes.includes(recipe) },
            on: {
              click: function() {
                return _vm.handleRecipeToggle(recipe)
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: recipe } }, [
            _vm._v("\n        " + _vm._s(recipe) + "\n      ")
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/SortOptions.vue?vue&type=template&id=87a13a22&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/TimelineDemo/SortOptions.vue?vue&type=template&id=87a13a22& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", [
    _c(
      "ul",
      _vm._l(_vm.sortOptions, function(option) {
        return _c("li", { key: option }, [
          _c("input", {
            attrs: { type: "radio", name: option, id: option },
            domProps: { checked: option === _vm.sort },
            on: {
              click: function() {
                return _vm.handleSortChange(option)
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: option } }, [
            _vm._v("\n        " + _vm._s(option) + "\n      ")
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/index.vue?vue&type=template&id=c96205fe&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/TimelineDemo/index.vue?vue&type=template&id=c96205fe& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "layout-wrapper" }, [
    _c(
      "section",
      { staticClass: "layout-side-panel" },
      [
        _c("h3", [_vm._v("Recipe timeline")]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("h3", [_vm._v("Recipes")]),
        _vm._v(" "),
        _c("recipe-selection", {
          attrs: {
            selectedRecipes: _vm.selectedRecipes,
            handleRecipeToggle: _vm.handleRecipeToggle
          }
        }),
        _vm._v(" "),
        _c("h3", [_vm._v("Step sorting")]),
        _vm._v(" "),
        _c("sort-options", {
          attrs: { sort: _vm.sort, handleSortChange: _vm.handleSortChange }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("section", {
      staticClass: "timeline-wrapper layout-content-with-side-panel"
    })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "\n      The recipe timeline combines the steps from multiple recipes and lays them out as \n      a timeline. Each step is labeled as "
      ),
      _c("em", [_vm._v("passive")]),
      _vm._v(" (baking, simmering), "),
      _c("em", [_vm._v("active")]),
      _vm._v("\n      (prep, kneading), or "),
      _c("em", [_vm._v("semi-active")]),
      _vm._v(
        " (sautéing, frying). Click on a step to see the \n      ingredients and full instructions.\n    "
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vis/RecipeTimeline/FullStep.vue?vue&type=template&id=49833fe3&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vis/RecipeTimeline/FullStep.vue?vue&type=template&id=49833fe3& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "full-step-view" }, [
    _vm.ingredients.length > 0
      ? _c("section", { staticClass: "ingredients" }, [
          _c("h3", [_vm._v("ingredients")]),
          _vm._v(" "),
          _c(
            "ul",
            _vm._l(_vm.ingredients, function(ingredient) {
              return _c("li", { key: ingredient.name }, [
                _vm._v(
                  "\n        " +
                    _vm._s(ingredient.measurement) +
                    " " +
                    _vm._s(ingredient.name) +
                    "\n      "
                )
              ])
            }),
            0
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("section", { staticClass: "instructions" }, [
      _c("h3", [_vm._v("Instructions")]),
      _vm._v(" "),
      _c("p", [_vm._v(_vm._s(_vm.instructions))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/index.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/views/TimelineDemo/index.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/index.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("20aaa303", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/vis/RecipeTimeline/FullStep.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/vis/RecipeTimeline/FullStep.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./FullStep.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/vis/RecipeTimeline/FullStep.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6c20c500", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./src/api/data/StepsEnum.js":
/*!***********************************!*\
  !*** ./src/api/data/StepsEnum.js ***!
  \***********************************/
/*! exports provided: StepsEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsEnum", function() { return StepsEnum; });
const StepsEnum = {
  HEAT: { id: 'heat', involvement: 0 }, // passive
  REST: { id: 'rest', involvement: 0 },
  PREP: { id: 'prep', involvement: 1 }, // active
  SAUTEE: { id: 'sautee', involvement: 0.5 }, // semi-active?
  COOK_STIRRING: { id: 'cookStirring', involvement: 0.5 },
  SIMMER: { id: 'simmer', involvement: 0 },
  BOIL: { id: 'boil', involvement: 0 },
  BAKE: { id: 'bake', involvement: 0 },
  ROAST: { id: 'roast', involvement: 0 },
  SEAR: { id: 'sear', involvement: 0.5 },
  COMBINE: { id: 'combine', involvement: 1 },
};


/***/ }),

/***/ "./src/api/data/ingredientDb.js":
/*!**************************************!*\
  !*** ./src/api/data/ingredientDb.js ***!
  \**************************************/
/*! exports provided: ingredientDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ingredientDb", function() { return ingredientDb; });
function ingredient(measurement, id, name) {
  return { measurement, id, name };
}

const ingredientDb = {
  water: (m) => ingredient(m, 'water', 'water'),
  oats: (m) => ingredient(m, 'oats', 'oats'),
  apples: (m) => ingredient(m, 'apples', 'apples'),
  dates: (m) => ingredient(m, 'dates', 'dates'),
  pumpkinSeeds: (m) => ingredient(m, 'pumpkinSeeds', 'pumpkin seeds'),
  walnuts: (m) => ingredient(m, 'walnuts', 'walnuts'),
  cinnamon: (m) => ingredient(m, 'cinnamon', 'cinnamon'),
  rice: (m) => ingredient(m, 'rice', 'rice'),
  garlic: (m) => ingredient(m, 'garlic', 'garlic'),
  kale: (m) => ingredient(m, 'kale', 'kale'),
  broccoli: (m) => ingredient(m, 'broccoli', 'broccoli'),
  oliveOil: (m) => ingredient(m, 'oliveOil', 'olive oil'),
  greens: (m) => ingredient(m, 'greens', 'greens'),
  tofu: (m) => ingredient(m, 'tofu', 'tofu'),
  cornStarch: (m) => ingredient(m, 'cornStarch', 'corn starch'),
  garlicPowder: (m) => ingredient(m, 'garlicPowder', 'garlic powder'),
  gingerPowder: (m) => ingredient(m, 'gingerPowder', 'ginger powder'),
  sesameOil: (m) => ingredient(m, 'sesameOil', 'sesame oil'),
  soySauce: (m) => ingredient(m, 'soySauce', 'soy sauce'),
  mushrooms: (m) => ingredient(m, 'mushrooms', 'mushrooms'),
  tempeh: (m) => ingredient(m, 'tempeh', 'tempeh'),
  broccolini: (m) => ingredient(m, 'broccolini', 'broccolini'),
  spinach: (m) => ingredient(m, 'spinach', 'spinach'),
  ginger: (m) => ingredient(m, 'ginger', 'ginger'),
  onions: (m) => ingredient(m, 'onions', 'onions'),
  greenOnions: (m) => ingredient(m, 'green onions', 'greenOnions'),
  buckwheatSobaNoodles: (m) => ingredient(m, 'buckwheatSobaNoodles', 'buckwheat soba noodldes'),
};


/***/ }),

/***/ "./src/api/data/recipes.js":
/*!*********************************!*\
  !*** ./src/api/data/recipes.js ***!
  \*********************************/
/*! exports provided: oatmeal, rice, greens, tofu, tempeh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oatmeal", function() { return oatmeal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rice", function() { return rice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greens", function() { return greens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tofu", function() { return tofu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tempeh", function() { return tempeh; });
/* harmony import */ var _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepsEnum.js */ "./src/api/data/StepsEnum.js");

// import { ingredients as igd } from './ingredients';
// import { equipment as eqp } from './equipment';

const oatmeal = {
  recipeName: 'Oatmeal with nuts seeds and fruit',
  steps: [
    {
      stepName: 'Boil water for oats',
      ingredients: [
        { id: 'water', measurement: '5 cups' },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].HEAT,
      duration: 5,
      instructions: 'Bring water to a boil.'
    },
    {
      stepName: 'Add oats to water',
      ingredients: [
        { id: 'oats', measurement: '1 cup' },
      ],
      dependencies: ['Boil water for oats'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].COMBINE,
      duration: 1,
      instructions: 'Add oats.'
    },
    {
      stepName: 'Cook oats',
      ingredients: [],
      dependencies: ['Add oats to water'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SIMMER,
      duration: 15,
      instructions: 'Simmer for $duration'
    },
    {
      stepName: 'Prep toppings',
      ingredients: [
        { id: 'apples', measurement: '1', },
        { id: 'dates', measurement: '3', },
        { id: 'pumpkinSeeds', measurement: '1 handful', },
        { id: 'walnuts', measurement: '1 handful' },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 5,
      instructions: 'Chop apples and dates into small pieces.'
    },
    {
      stepName: 'Finish oatmeal',
      ingredients: [
        { id: 'cinnamon', measurement: { measurement: '1 tsp' } },
      ],
      dependencies: ['Prep toppings', 'Cook oats'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].COMBINE,
      duration: 2,
      instructions: 'Add toppings and cinnamon to oats. Serve.'
    }
  ]
};

const rice = {
  recipeName: 'Rice',
  steps: [
    {
      stepName: 'Prepare rice',
      ingredients: [
        { id: 'rice', measurement: '1 cup' },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 3,
      instructions: 'Rinse rice.'
    },
    {
      stepName: 'Cook rice',
      ingredients: [
        { id: 'water', measurement: '1 cups' },
      ],
      dependencies: ['Prepare rice'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].BOIL,
      duration: 20,
      instructions: 'Cook rice in water.'
    },
    {
      stepName: 'Let rice rest',
      ingredients: [],
      dependencies: ['Cook rice'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].REST,
      duration: 5,
      instructions: 'Let rice rest.'
    }
  ]
};

const greens = {
  recipeName: 'Greens with broccoli and garlic',
  steps: [
    {
      stepName: 'Prepare garlic',
      ingredients: [
        { id: 'garlic', measurement: '6 cloves' },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 5,
      instructions: 'Peel and slice $garlic.'
    },
    {
      stepName: 'Prepare kale',
      ingredients: [
        { id: 'kale', measurement: '1 bunch' },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 5,
      instructions: 'Remove stems, chop, and rinse $kale.'
    },
    {
      stepName: 'Prepare broccoli',
      ingredients: [
        { id: 'water', measurement: '1 large head' },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 5,
      instructions: 'Cut florets off of head. Rinse.'
    },
    {
      stepName: 'Cook garlic',
      ingredients: [
        { id: 'oliveOil', measurement: '1 tbsp' },
      ],
      dependencies: ['Prepare garlic'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 8,
      instructions: 'Add garlic to cold pan with oil. Heat on medium until garlic is golden.'
    },
    {
      stepName: 'Cook greens',
      ingredients: [],
      dependencies: ['Cook garlic', 'Prepare kale', 'Prepare broccoli'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 5,
      instructions: 'Add greens to pan and stir occasionally.'
    }
  ]
};

const tofu = {
  recipeName: 'Simple crispy tofu',
  steps: [
    {
      stepName: 'Prepare tofu',
      ingredients: [
        { id: 'tofu', measurement: '1 block', },
        { id: 'cornStarch', measurement: '1 tbsp', },
        { id: 'garlicPowder', measurement: '1 tsp', },
        { id: 'gingerPowder', measurement: '1 tsp' },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 10,
      instructions: 'Cube and pat tofu dry. Toss with corn starch and seasoning.'
    },
    {
      stepName: 'Heat oil',
      ingredients: [
        { id: 'sesameOil', measurement: '2 tbsp' },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].HEAT,
      duration: 5,
      instructions: 'Heat pan and oil over medium-high heat.'
    },
    {
      stepName: 'Fry tofu',
      ingredients: [],
      dependencies: ['Prepare tofu', 'Heat oil'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 10,
      instructions: 'Fry tofu, partially covered, flipping halfway through.'
    },
    {
      stepName: 'Cook in soy sauce',
      ingredients: [
        { id: 'soySauce', measurement: '1 tbsp' },
      ],
      dependencies: ['Fry tofu'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 3,
      instructions: 'Add soy sauce to tofu, toss, and continue to cook.'
    },
    {
      stepName: 'Rest tofu',
      ingredients: [],
      dependencies: ['Cook in soy sauce'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].REST,
      duration: 5,
      instructions: 'Take off of the heat and allow tofu to rest.'
    },
  ]
};

const tempeh = {
  recipeName: 'Tempeh stirfry with buckwheat noodles',
  steps: [
    {
      stepName: 'Prep mushrooms',
      ingredients: [
        { id: 'mushrooms', measurement: '12 oz', },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 4,
      instructions: 'Wipe off mushroom caps and cut into 1/4 inch slices.'
    },
    {
      stepName: 'Prep tempeh',
      ingredients: [
        { id: 'tempeh', measurement: '1 block' },
        { id: 'cornStarch', measurement: '1 tbsp', },
        { id: 'garlicPowder', measurement: '1 tsp', },
        { id: 'gingerPowder', measurement: '1 tsp' },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 3,
      instructions: 'Cut tempeh into small cubes. Toss with cornstarch and seasoning.'
    },
    {
      stepName: 'Prep broccolini',
      ingredients: [
        { id: 'broccolini', measurement: '1 bunch' }
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 2,
      instructions: 'Chop broccolini at an angle into 1 inch pieces. Rinse.'
    },
    {
      stepName: 'Prep spinach',
      ingredients: [
        { id: 'spinach', measurement: '1 bunch' }
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 2,
      instructions: 'Roughly chop spinach into bite size pieces. Rinse.'
    },
    {
      stepName: 'Slice ginger',
      ingredients: [
        { id: 'ginger', measurement: '1 thumb sized piece' }
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 2,
      instructions: 'Slice ginger into thin strips.'
    },
    {
      stepName: 'Prep onions and garlic',
      ingredients: [
        { id: 'onions', measurement: '1 large' },
        { id: 'garlic', measurement: '4 cloves' },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 5,
      instructions: 'Add soy sauce to tofu, toss, and continue to cook.'
    },
    {
      stepName: 'Prep green onions',
      ingredients: [
        { id: 'greenOnions', measurement: '3' },
      ],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 4,
      instructions: 'Chop the white and light green parts of green onions into thin slices.'
    },

    {
      stepName: 'Boil water for noodles',
      ingredients: [],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].BOIL,
      duration: 5,
      instructions: 'Fill a large pot with 3 inches of water and heat on high until boiling.'
    },
    {
      stepName: 'Heat pan for vegetables',
      ingredients: [],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].HEAT,
      duration: 4,
      instructions: 'Fill a large pot with 3 inches of water and heat on high until boiling.'
    },
    {
      stepName: 'Heat pan for tempeh',
      ingredients: [],
      dependencies: [],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].HEAT,
      duration: 4,
      instructions: 'Fill a large pot with 3 inches of water and heat on high until boiling.'
    },

    {
      stepName: 'Cook noodles',
      ingredients: [
        { id: 'buckwheatSobaNoodles', measurement: '1 package' }
      ],
      dependencies: ['Boil water for noodles'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].COOK_STIRRING,
      duration: 7,
      instructions: 'Add noodles to boiling water and cook for $duration minutes.'
    },
    {
      stepName: 'Drain noodles',
      ingredients: [],
      dependencies: ['Cook noodles'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].PREP,
      duration: 2,
      instructions: 'Pour noodles into a sieve and rinse with cold water.'
    },

    {
      stepName: 'Cook onions and garlic',
      ingredients: [
        { id: 'oliveOil', measurement: '1 tbsp' }
      ],
      dependencies: ['Heat pan for vegetables', 'Prep onions and garlic'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 8,
      instructions: 'Add oil to pain. Add onions and garlic. Cook, stirring occasionally, until slightly browned.'
    },
    {
      stepName: 'Cook mushrooms',
      ingredients: [],
      dependencies: ['Prep mushrooms', 'Cook onions and garlic'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 10,
      instructions: 'Add mushrooms and a splash of water to pan. Cook until they have shrunken significantly.'
    },
    {
      stepName: 'Add soy sauce to mushrooms',
      ingredients: [
        { id: 'soySauce', measurement: '1 tbsp' }
      ],
      dependencies: ['Cook mushrooms'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 2,
      instructions: 'Add soy sauce to mushrooms, stir, and continue to cook.'
    },
    {
      stepName: 'Cook broccolini',
      ingredients: [],
      dependencies: ['Prep broccolini', 'Add soy sauce to mushrooms'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 4,
      instructions: 'Add broccolini and a splash of water to the pan to deglaze it. Cover and cook.'
    },
    {
      stepName: 'Add spinach',
      ingredients: [],
      dependencies: ['Cook broccolini', 'Prep spinach'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 2,
      instructions: 'Add spinach, stir, and cover. After 2 minutes, remove from the heat.'
    },

    {
      stepName: 'Cook tempeh',
      ingredients: [
        { id: 'sesameOil', measurement: '1 tbsp'}
      ],
      dependencies: ['Prep tempeh', 'Heat pan for tempeh'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 10,
      instructions: 'Add oil to pan, then add tempeh. Halfway through cooking, stir and loosely flip.'
    },
    {
      stepName: 'Add soy sauce to tempeh',
      ingredients: [],
      dependencies: ['Cook tempeh'],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 2,
      instructions: 'Add soy sauce and toss. Continue to cook, then remove from heat.'
    },

    {
      stepName: 'Combine and serve',
      ingredients: [],
      dependencies: [
        'Add soy sauce to tempeh',
        'Add spinach',
        'Drain noodles',
        'Slice ginger',
        'Prep green onions'
      ],
      type: _StepsEnum_js__WEBPACK_IMPORTED_MODULE_0__["StepsEnum"].SAUTEE,
      duration: 4,
      instructions: 'Add broccolini and a splash of water to the pan to deglaze it. Cover and cook.'
    },
  ]
};


/***/ }),

/***/ "./src/api/getStepTimeRange.js":
/*!*************************************!*\
  !*** ./src/api/getStepTimeRange.js ***!
  \*************************************/
/*! exports provided: getStepTimeRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStepTimeRange", function() { return getStepTimeRange; });
const getStepEndTime = (step, steps) => {
  let endTime = 0;

  const parentSteps = steps.filter(_step => {
    return _step.dependencies.includes(step.stepName);
  });
 
  if (!parentSteps.length) return endTime;
  
  const parentStartTimes = parentSteps.map(_step => {
    return getStepEndTime(_step, steps) + _step.duration;
  });
  return Math.max(...parentStartTimes);
};

const getStepTimeRange = (step, steps) => {
  const endTime = getStepEndTime(step, steps);
  return {
    endTime,
    startTime: endTime + step.duration
  };
};


/***/ }),

/***/ "./src/api/mockApi.js":
/*!****************************!*\
  !*** ./src/api/mockApi.js ***!
  \****************************/
/*! exports provided: getAvailableRecipes, getRecipesTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableRecipes", function() { return getAvailableRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipesTimeline", function() { return getRecipesTimeline; });
/* harmony import */ var _data_recipes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/recipes.js */ "./src/api/data/recipes.js");
/* harmony import */ var _data_ingredientDb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/ingredientDb.js */ "./src/api/data/ingredientDb.js");
/* harmony import */ var _getStepTimeRange_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getStepTimeRange.js */ "./src/api/getStepTimeRange.js");
/* harmony import */ var _sortByBranchDepth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortByBranchDepth.js */ "./src/api/sortByBranchDepth.js");





/**
 * Mocks an API call which fills out the ingredient list in recipe
 * step. The step only stores the id and the measurement, and metadata
 * like descriptions or pictures would be stored in a separate DB
 * @constructor
 * @param {Array<Object>} ingredients - A list of ingredients
 * @param {string} ingredients[].id - The ingredient id
 * @param {string} ingredients[].measurement - The amount and unit
 * @returns {Array<Object>} - An array of recipe steps in optimal order
 */
const fillOutIngredients = ingredients => {
  return ingredients.map(({ id, measurement }) => {
    return _data_ingredientDb_js__WEBPACK_IMPORTED_MODULE_1__["ingredientDb"][id](measurement);
  });
};

/**
 * Mocks an API which returns a list of recipes
 * @constructor
 * @param {Array[String]} recipeNames - A list of recipes to retrieve
 * @param {Array<Object>} data - An array of recipes
 * @param {String} sort - A string indicating how to sort the steps
 * @returns {Array<Object>} - An array of recipe steps in some order
 */
const getAvailableRecipes = async () => {
  // Delay response to mock request latency
  await setTimeout(() => {}, 300);

  return Object.keys(_data_recipes_js__WEBPACK_IMPORTED_MODULE_0__);
};

/**
 * Mocks an API which would, given a list of recipes, return the
 * list of steps, in order, required to complete the recipe.
 * @constructor
 * @param {Array[String]} recipeNames - A list of recipes to retrieve
 * @param {Array<Object>} data - An array of recipes
 * @param {String} sort - A string indicating how to sort the steps
 * @returns {Array<Object>} - An array of recipe steps in some order
 */
const getRecipesTimeline = async (recipeNames, sort='time') => {
  let recipeTimeline = [];
  let maxStartTime = 0;

  // Add each recipe to the timeline
  recipeNames.forEach(rn => {
    const { steps, recipeName } = _data_recipes_js__WEBPACK_IMPORTED_MODULE_0__[rn];
    // Add recipe name to each step so steps can later be regrouped
    const stepsWithRecipeName = steps.map(s => ({ ...s, recipeName }));
    recipeTimeline = [...recipeTimeline, ...stepsWithRecipeName ];
  });

  // Add time ranges to each step
  const steps = recipeTimeline.map(step => {
    const { startTime, endTime } = (
      Object(_getStepTimeRange_js__WEBPACK_IMPORTED_MODULE_2__["getStepTimeRange"])(step, recipeTimeline)
    );

    maxStartTime = Math.max(maxStartTime, startTime);

    return {
      ...step,
      startTime,
      endTime,
      elapsedTime: startTime - endTime,
    };
  }).map(step => {
    // Inverts times so recipes start in order
    return {
      ...step,
      startTime: maxStartTime - step.startTime,
      endTime: maxStartTime - step.endTime,
    };
  }).map(step => {
    // Fills out ingredients metadata
    return {
      ...step,
      ingredients: fillOutIngredients(step.ingredients),
    };
  });

  // Delay response to mock request latency
  await setTimeout(() => {}, 300);

  if (sort === 'startTime') {
    return steps.sort((a,b) => {
      return a.startTime - b.startTime;
    });
  }

  if (sort === 'branchDepth') {
    return Object(_sortByBranchDepth_js__WEBPACK_IMPORTED_MODULE_3__["sortByBranchDepth"])(steps);
  }
};


/***/ }),

/***/ "./src/api/sortByBranchDepth.js":
/*!**************************************!*\
  !*** ./src/api/sortByBranchDepth.js ***!
  \**************************************/
/*! exports provided: sortByBranchDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByBranchDepth", function() { return sortByBranchDepth; });
/* harmony import */ var _trees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trees */ "./src/api/trees.js");


/**
 * Sorts a list of recipe steps according to "branch depth" by searching
 * the leftmost branch of each node and adding lead nodes to an array.
 * 
 * @param {Array<Object>} steps - An unsorted list of recipe steps
 * @returns {Array<Object>} - A sorted list of recipe steps
 */
const sortByBranchDepth = (steps) => {
  const stepTrees = Object(_trees__WEBPACK_IMPORTED_MODULE_0__["recipeStepsToTree"])(steps);
  
  return stepTrees.reduce((sortedSteps, tree) => {
    const nestedSteps = getNestedSteps(tree).map(step => {
      delete step.children;
      return step;
    });
    return [...sortedSteps, ...nestedSteps];
  }, []);
};

const getMaxChildDepth = (tree, parentLevel = 0) => {
  if (!tree.children.length) {
    return parentLevel;
  }

  return Math.max(...tree.children.map(child => {
    return getMaxChildDepth(child, parentLevel + 1);
  }));
};

const getNestedSteps = (step) => {
  const sortedChildSteps = step.children.sort((a,b) => {
    const depthDiff = getMaxChildDepth(b) - getMaxChildDepth(a);
    if (depthDiff !== 0) return depthDiff;
    return a.startTime - b.startTime;
  });

  const nestedChildSteps = sortedChildSteps.reduce((acc, s) => {
    return [...acc, ...getNestedSteps(s),];
  }, []);

  // parent nodes come after children
  return [...nestedChildSteps, step];
};


/***/ }),

/***/ "./src/api/trees.js":
/*!**************************!*\
  !*** ./src/api/trees.js ***!
  \**************************/
/*! exports provided: recipeStepsToTree, flattenTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipeStepsToTree", function() { return recipeStepsToTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenTree", function() { return flattenTree; });
// Trees are a better data structure for ______

// Converts a flat array of recipes to a tree structure based on
// "dependencies". Adds
const recipeStepsToTree = (steps) => {
  // Flattens all dependencies
  const allDependencies = steps.reduce((acc, s) => {
    return [...acc, ...s.dependencies];
  }, []);

  const rootSteps = steps.filter((s) => {
    return !allDependencies.includes(s.stepName);
  });

  return rootSteps.map(s => buildTree(s, steps));
  
};

const buildTree = (step, allSteps) => {
  const childSteps = allSteps.filter((s) => {
    return step.dependencies.includes(s.stepName);
  });

  return {
    ...step,
    children: childSteps.map(s => buildTree(s, allSteps))
  };
};

const flattenTree = () => {

};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_TimelineDemo_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/TimelineDemo/index.vue */ "./src/views/TimelineDemo/index.vue");
/* harmony import */ var _views_RecipeTrees_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/RecipeTrees/index.vue */ "./src/views/RecipeTrees/index.vue");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ "./css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_2__);




const routes = [
  { path: '/', component: _views_TimelineDemo_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"] },
  { path: '/about', component: _views_RecipeTrees_index_vue__WEBPACK_IMPORTED_MODULE_1__["default"] },
];

const router = new VueRouter({ routes });

new Vue({
  router,
}).$mount('#app');


/***/ }),

/***/ "./src/views/RecipeTrees/index.vue":
/*!*****************************************!*\
  !*** ./src/views/RecipeTrees/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5f7e5ca0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5f7e5ca0& */ "./src/views/RecipeTrees/index.vue?vue&type=template&id=5f7e5ca0&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/RecipeTrees/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5f7e5ca0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5f7e5ca0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/RecipeTrees/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/RecipeTrees/index.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/views/RecipeTrees/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/views/RecipeTrees/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/RecipeTrees/index.vue?vue&type=template&id=5f7e5ca0&":
/*!************************************************************************!*\
  !*** ./src/views/RecipeTrees/index.vue?vue&type=template&id=5f7e5ca0& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5f7e5ca0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5f7e5ca0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/RecipeTrees/index.vue?vue&type=template&id=5f7e5ca0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5f7e5ca0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5f7e5ca0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/TimelineDemo/RecipeSelection.vue":
/*!****************************************************!*\
  !*** ./src/views/TimelineDemo/RecipeSelection.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecipeSelection_vue_vue_type_template_id_9ff23e26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecipeSelection.vue?vue&type=template&id=9ff23e26& */ "./src/views/TimelineDemo/RecipeSelection.vue?vue&type=template&id=9ff23e26&");
/* harmony import */ var _RecipeSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeSelection.vue?vue&type=script&lang=js& */ "./src/views/TimelineDemo/RecipeSelection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecipeSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecipeSelection_vue_vue_type_template_id_9ff23e26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecipeSelection_vue_vue_type_template_id_9ff23e26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/TimelineDemo/RecipeSelection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/TimelineDemo/RecipeSelection.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/views/TimelineDemo/RecipeSelection.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_RecipeSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./RecipeSelection.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/RecipeSelection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipeSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/TimelineDemo/RecipeSelection.vue?vue&type=template&id=9ff23e26&":
/*!***********************************************************************************!*\
  !*** ./src/views/TimelineDemo/RecipeSelection.vue?vue&type=template&id=9ff23e26& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipeSelection_vue_vue_type_template_id_9ff23e26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RecipeSelection.vue?vue&type=template&id=9ff23e26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/RecipeSelection.vue?vue&type=template&id=9ff23e26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipeSelection_vue_vue_type_template_id_9ff23e26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecipeSelection_vue_vue_type_template_id_9ff23e26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/TimelineDemo/SortOptions.vue":
/*!************************************************!*\
  !*** ./src/views/TimelineDemo/SortOptions.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SortOptions_vue_vue_type_template_id_87a13a22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortOptions.vue?vue&type=template&id=87a13a22& */ "./src/views/TimelineDemo/SortOptions.vue?vue&type=template&id=87a13a22&");
/* harmony import */ var _SortOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortOptions.vue?vue&type=script&lang=js& */ "./src/views/TimelineDemo/SortOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SortOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SortOptions_vue_vue_type_template_id_87a13a22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SortOptions_vue_vue_type_template_id_87a13a22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/TimelineDemo/SortOptions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/TimelineDemo/SortOptions.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/views/TimelineDemo/SortOptions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_SortOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./SortOptions.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/SortOptions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_SortOptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/TimelineDemo/SortOptions.vue?vue&type=template&id=87a13a22&":
/*!*******************************************************************************!*\
  !*** ./src/views/TimelineDemo/SortOptions.vue?vue&type=template&id=87a13a22& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SortOptions_vue_vue_type_template_id_87a13a22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SortOptions.vue?vue&type=template&id=87a13a22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/SortOptions.vue?vue&type=template&id=87a13a22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SortOptions_vue_vue_type_template_id_87a13a22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SortOptions_vue_vue_type_template_id_87a13a22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/TimelineDemo/index.vue":
/*!******************************************!*\
  !*** ./src/views/TimelineDemo/index.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_c96205fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=c96205fe& */ "./src/views/TimelineDemo/index.vue?vue&type=template&id=c96205fe&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/TimelineDemo/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./src/views/TimelineDemo/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_c96205fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_c96205fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/TimelineDemo/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/TimelineDemo/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/views/TimelineDemo/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/TimelineDemo/index.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./src/views/TimelineDemo/index.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/TimelineDemo/index.vue?vue&type=template&id=c96205fe&":
/*!*************************************************************************!*\
  !*** ./src/views/TimelineDemo/index.vue?vue&type=template&id=c96205fe& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c96205fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=c96205fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/TimelineDemo/index.vue?vue&type=template&id=c96205fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c96205fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_c96205fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vis/RecipeTimeline/FullStep.vue":
/*!*********************************************!*\
  !*** ./src/vis/RecipeTimeline/FullStep.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FullStep_vue_vue_type_template_id_49833fe3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullStep.vue?vue&type=template&id=49833fe3& */ "./src/vis/RecipeTimeline/FullStep.vue?vue&type=template&id=49833fe3&");
/* harmony import */ var _FullStep_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullStep.vue?vue&type=script&lang=js& */ "./src/vis/RecipeTimeline/FullStep.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FullStep_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FullStep.vue?vue&type=style&index=0&lang=css& */ "./src/vis/RecipeTimeline/FullStep.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FullStep_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FullStep_vue_vue_type_template_id_49833fe3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FullStep_vue_vue_type_template_id_49833fe3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vis/RecipeTimeline/FullStep.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/vis/RecipeTimeline/FullStep.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/vis/RecipeTimeline/FullStep.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_FullStep_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./FullStep.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/vis/RecipeTimeline/FullStep.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_FullStep_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/vis/RecipeTimeline/FullStep.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./src/vis/RecipeTimeline/FullStep.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FullStep_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./FullStep.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/vis/RecipeTimeline/FullStep.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FullStep_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FullStep_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FullStep_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FullStep_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_FullStep_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/vis/RecipeTimeline/FullStep.vue?vue&type=template&id=49833fe3&":
/*!****************************************************************************!*\
  !*** ./src/vis/RecipeTimeline/FullStep.vue?vue&type=template&id=49833fe3& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullStep_vue_vue_type_template_id_49833fe3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FullStep.vue?vue&type=template&id=49833fe3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/vis/RecipeTimeline/FullStep.vue?vue&type=template&id=49833fe3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullStep_vue_vue_type_template_id_49833fe3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FullStep_vue_vue_type_template_id_49833fe3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vis/RecipeTimeline/index.js":
/*!*****************************************!*\
  !*** ./src/vis/RecipeTimeline/index.js ***!
  \*****************************************/
/*! exports provided: BAR_HEIGHT, STEP_HEIGHT, RecipeTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAR_HEIGHT", function() { return BAR_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_HEIGHT", function() { return STEP_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeTimeline", function() { return RecipeTimeline; });
/* harmony import */ var _FullStep_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullStep.vue */ "./src/vis/RecipeTimeline/FullStep.vue");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/vis/RecipeTimeline/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-undef */

// import { loadPatterns } from './loadPatterns';


const BAR_MARGIN_BOTTOM = 2;
const BAR_HEIGHT = 35;
const STEP_HEIGHT = BAR_HEIGHT + BAR_MARGIN_BOTTOM;

class RecipeTimeline {
  /**
   * Initializes a timeline visualization, showing what steps
   * of 1 or more recipes need to be completed at what time and order
   * @constructor
   * @param {Object} selection - A D3 selection to add an SVG to
   * @param {Array<Object>} data - An array of recipe steps
   * @param {Array<Object>} events - A dict of callback events
   */
  constructor(node, data) {
    this.selection = d3.select(node);
    this.data = data;
    this.selections = {};
    this.state = {
      visibleSteps: {}
    };

    this.fillScale = d3.scaleOrdinal()
      .domain([0, 0.5, 1])
      .range(['passive', 'semi-active', 'active']);

    this.renderLegend();
    this.selections.timeAxis = this.selection.append('ul')
      .attr('class', 'time-axis');
    this.selections.stepList = this.selection.append('ul')
      .attr('class', 'step-list');
  }

  setTimeScale() {
    this.timeScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.endTime)])
      .range([0, 100]);
  }

  setStepScale() {
    this.stepScale = d3.scaleBand()
      .domain(this.data.map(d => d.stepName))
      .range([0, this.data.length * STEP_HEIGHT]); // TODO use id or key
  }

  // Gets the "top" property for each step. Because we have to use absolute
  // layout to use transitions, we have to manually add the height of lal
  // open parent steps and add it to the stepScale
  getStepTopOffset(d, i) {
    const parentSteps = this.data.map(d => d.stepName).slice(0, i);
    const cumOffset = parentSteps.map(step => {
      return this.state.visibleSteps[step] || 0;
    }).reduce((cumOffset, offset) => cumOffset + offset, 0);
    return `${this.stepScale(d.stepName) + cumOffset}px`;
  }

  renderSteps() {
    const self = this;

    this.selections.stepList
      .selectAll('li.step')
      .data(this.data, d => d.stepName)
      .join(
        enter => enter.append('li')
          .attr('class', 'step')
          .style('top', (d, i) => this.getStepTopOffset(d,i))
          .call(this.renderStepBars.bind(this))
          .call(this.renderFullStep.bind(this)),
        update => update.transition()
          .style('top', (d, i) => this.getStepTopOffset(d,i))
      )
      .call(this.renderStepBars.bind(this))
      .on('click', function(d) {
        const isOpen = d3.select(this).classed('open');
        d3.select(this).classed('open', !isOpen);
        // We need to recompute the layout each time a step is opened or
        // closed. We track the height of open steps in the state, the rerender
        // the steps.
        const { height } = this.childNodes[1].getBoundingClientRect();
        self.state.visibleSteps[d.stepName] = isOpen ? 0 : height;
        self.renderSteps();
      });
  }

  renderStepBars(selection) {
    selection
      .selectAll('div.step-bar')
      .data(d => [d]) // WHY
      .join(
        enter => enter.append('div')
          .attr('class', d => `step-bar ${this.fillScale(d.type.involvement)}`)
          .style('height', `${BAR_HEIGHT}px`)
      )
      .style('width', d => `${this.timeScale(d.duration)}%`)
      .style('margin-left', d => `${this.timeScale(d.startTime)}%`)
      .call(this.renderStepHeaders.bind(this));
  }

  // returns 0 for "place left", 1 for "place right"
  getBarPlacement(d) {
    const startOffset = this.timeScale(d.startTime);
    const endOffset = 100 - this.timeScale(d.endTime);
    return startOffset < endOffset ? 0 : 1;
  }

  renderStepHeaders(selection) {
    selection
      .selectAll('span.step-header')
      .data(d => [d])
      .join(
        enter => enter.append('span')
          .attr('class', 'step-header')
          .call(this.addTitleLabel)
          .call(this.addDurationLabel)
      )
      .style('right', d => this.getBarPlacement(d) ? 'auto' : '-8px')
      .style('left', d => this.getBarPlacement(d) ? '-8px' : 'auto')
      .style('transform', d => {
        const x = this.getBarPlacement(d) ? '-100%' : '100%';
        return `translate(${x},0)`;
      });
  }

  // Given a step selection, adds a span with the step title
  addTitleLabel(selection) {
    selection.append('span')
      .attr('class', 'step-title')
      .text(d => d.stepName);
  }

  // Given a step selection, adds a duration span in minutes
  // TODO make time options more flexible
  addDurationLabel(selection) {
    selection.append('span')
      .attr('class', 'step-duration')
      .text(d => `${d.duration} minutes`);
  }

  renderFullStep(selection) {
    selection.each(function(d) {
      new Vue({
        el: d3.select(this).append('div').node(),
        render: h => h(_FullStep_vue__WEBPACK_IMPORTED_MODULE_0__["default"], { props: { ...d } }),
      });
    }); 
  }

  // Renders an axis with 5 minute intervals
  // TODO make more flexible, or use D3 axes
  renderTimeAxis() {
    // this.selections.timeAxis
    const endTime = this.timeScale.domain()[1];
    const nBlocks = Math.floor(endTime / 5);
    const timeBlocks = [...Array(nBlocks)].map(() => 5);
    const remainder = endTime % 5;
    if (remainder > 0) timeBlocks.push(remainder);

    const getCumuTime = (d, i) => {
      let time = 0;
      for (let j = 0; j < i; j++) {
        time += timeBlocks[j];
      }

      // TODO less hacky, move somewhere else
      if (time < 10) return `00:0${time}`;
      return `00:${time}`;
    };

    this.selections.timeAxis
      .selectAll('li')
      .data(timeBlocks)
      .join('li')
      .attr('class', 'time-block')
      .style('width', d => {
        const percentage = `${100 * d / endTime}%`;
        // leave space for margins between blocks
        return `calc(${percentage} - 4px)`;
      })
      .text(getCumuTime);
  }

  renderLegend() {
    const labels = {
      '0': 'Passive',
      '0.5': 'Semi-active',
      '1': 'Active'
    };

    const legend = this.selection.append('ul')
      .attr('class', 'timeline-legend')
      .selectAll('li')
      .data(this.fillScale.domain())
      .join('li');

    legend.append('div')
      .attr('class', d => `step-bar ${this.fillScale(d)}`)
      .style('height', '27px') // TODO why
      .style('width', '40px');

    legend.append('span')
      .attr('class', 'label')
      .text(d => labels[d]);
  }

  setSteps(data) {
    this.data = data;
    this.setTimeScale();
    this.renderTimeAxis();
    this.setStepScale();
    this.renderSteps();
  }
}


/***/ }),

/***/ "./src/vis/RecipeTimeline/style.css":
/*!******************************************!*\
  !*** ./src/vis/RecipeTimeline/style.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/vis/RecipeTimeline/style.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0f2938cc", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map