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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/vis/RecipeTimeline/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/vis/RecipeTimeline/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".step-group text {\n  font-family: 'Libre Baskerville', serif;\n  font-size: 13px;\n}\n\n.step-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\n.step {\n  display: block;\n  position: absolute;\n  top: 0;\n}\n\n.step-bar {\n  height: 18px;\n  background: black;\n}", ""]);



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

/***/ "./node_modules/vue-loader/lib/index.js?!./src/views/Timeline.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/views/Timeline.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vis_RecipeTimeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vis/RecipeTimeline */ "./src/vis/RecipeTimeline/index.js");
/* harmony import */ var _api_mockApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/mockApi.js */ "./src/api/mockApi.js");
//
//
//
//
//
//




const routerStore = {
  debug: true,
  state: {
    route: '#'
  },
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data () {
    return {
      recipes: [
        'rice',
        'tofu',
        'greens'
      ],
      recipeTimeline: null,
      data: [],
    }
  },
  mounted: async function () {
    this.data = await Object(_api_mockApi_js__WEBPACK_IMPORTED_MODULE_1__["getRecipesTimeline"])(['rice', 'tofu', 'greens']);
    this.recipeTimeline = new _vis_RecipeTimeline__WEBPACK_IMPORTED_MODULE_0__["RecipeTimeline"](this.$el, this.data);
  },
  methods: {
    resort: function (event) {
      // bad random sort
      const resortedData = this.data.sort(function() {
        return .5 - Math.random();
      });
      this.recipeTimeline.resortSteps(resortedData);
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Timeline.vue?vue&type=template&id=e945440a&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Timeline.vue?vue&type=template&id=e945440a& ***!
  \*********************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "timeline-view" }, [
    _c("button", { on: { click: _vm.resort } }, [_vm._v("Resort")])
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
      stepName: 'Boil water',
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
      dependencies: ['Boil water'],
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
      stepName: 'Boil water',
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
      dependencies: ['Boil water'],
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
        'Add soy sauce to mushrooms',
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
/*! exports provided: getRecipesTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipesTimeline", function() { return getRecipesTimeline; });
/* harmony import */ var _data_recipes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/recipes.js */ "./src/api/data/recipes.js");
/* harmony import */ var _data_ingredientDb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/ingredientDb.js */ "./src/api/data/ingredientDb.js");
/* harmony import */ var _getStepTimeRange_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getStepTimeRange.js */ "./src/api/getStepTimeRange.js");




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
 * Mocks an API which would, given a list of recipes, return the
 * list of steps, in order, required to complete the recipe.
 * @constructor
 * @param {Array[String]} recipeNames - A list of recipes to retrieve
 * @param {Array<Object>} data - An array of recipes
 * @returns {Array<Object>} - An array of recipe steps in optimal order
 */
const getRecipesTimeline = async (recipeNames) => {
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
  const sortedRecipeTimeline = recipeTimeline.map(step => {
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
  }).sort((a,b) => {
    return a.startTime - b.startTime;
  });

  // Delay response to mock request latency
  await setTimeout(() => {}, 300);
  return sortedRecipeTimeline;
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
/* harmony import */ var _views_Timeline_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Timeline.vue */ "./src/views/Timeline.vue");


const routes = [
  { path: '/', component: _views_Timeline_vue__WEBPACK_IMPORTED_MODULE_0__["default"] },
];

const router = new VueRouter({ routes });

new Vue({
  router,
}).$mount('#app');



/***/ }),

/***/ "./src/views/Timeline.vue":
/*!********************************!*\
  !*** ./src/views/Timeline.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timeline_vue_vue_type_template_id_e945440a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline.vue?vue&type=template&id=e945440a& */ "./src/views/Timeline.vue?vue&type=template&id=e945440a&");
/* harmony import */ var _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline.vue?vue&type=script&lang=js& */ "./src/views/Timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _Timeline_vue_vue_type_custom_index_0_blockType_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timeline.vue?vue&type=custom&index=0&blockType=section */ "./src/views/Timeline.vue?vue&type=custom&index=0&blockType=section");
/* harmony import */ var _Timeline_vue_vue_type_custom_index_0_blockType_section__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Timeline_vue_vue_type_custom_index_0_blockType_section__WEBPACK_IMPORTED_MODULE_3__);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Timeline_vue_vue_type_template_id_e945440a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Timeline_vue_vue_type_template_id_e945440a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _Timeline_vue_vue_type_custom_index_0_blockType_section__WEBPACK_IMPORTED_MODULE_3___default.a === 'function') _Timeline_vue_vue_type_custom_index_0_blockType_section__WEBPACK_IMPORTED_MODULE_3___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/Timeline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/Timeline.vue?vue&type=custom&index=0&blockType=section":
/*!**************************************************************************!*\
  !*** ./src/views/Timeline.vue?vue&type=custom&index=0&blockType=section ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/views/Timeline.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/views/Timeline.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/views/Timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/Timeline.vue?vue&type=template&id=e945440a&":
/*!***************************************************************!*\
  !*** ./src/views/Timeline.vue?vue&type=template&id=e945440a& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_e945440a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Timeline.vue?vue&type=template&id=e945440a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Timeline.vue?vue&type=template&id=e945440a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_e945440a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Timeline_vue_vue_type_template_id_e945440a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/vis/RecipeTimeline/index.js":
/*!*****************************************!*\
  !*** ./src/vis/RecipeTimeline/index.js ***!
  \*****************************************/
/*! exports provided: RecipeTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeTimeline", function() { return RecipeTimeline; });
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.js */ "./src/vis/RecipeTimeline/style.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/vis/RecipeTimeline/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-undef */

// import { loadPatterns } from './loadPatterns';


class RecipeTimeline {

  /**
   * Initializes a timeline visualization, showing what steps
   * of 1 or more recipes need to be completed at what time and order
   * @constructor
   * @param {Object} selection - A D3 selection to add an SVG to
   * @param {Array<Object>} data - An array of recipe steps
   * @param {Array<Object>} events - A dict of callback events
   */
  constructor(node, data, events={}) {
    this.selection = d3.select(node);
    this.data = data;
    this.components = {};

    this.stepList = this.selection.append('ul')
      .attr('class', 'step-list');
    // loadPatterns(this.svg);
    // Initialize main vis canvas, not html5 canvas
    // this.rescaleCanvas();
    
    this.setTimeScale();
    this.setStepScale();

    this.renderSteps();
    this.renderStepHeaders();
    this.renderStepBars();

    console.log(data);
  }

  setTimeScale() {
    this.timeScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.endTime)])
      .range([0, 100]);
  }

  setStepScale() {
    this.stepScale = d3.scaleBand()
      .domain(this.data.map(d => d.stepName))
      .range([0, this.data.length * _style_js__WEBPACK_IMPORTED_MODULE_0__["stepHeight"]]); // TODO use id or key
  }

  renderSteps() {
    this.components.steps = this.stepList.selectAll('li')
      .data(this.data)
      .join('li')
      .attr('class', 'step')
      .style('top', d => `${this.stepScale(d.stepName)}px`);
  }

  renderStepHeaders() {
    const stepHeader = this.components.steps.append('span')
      .attr('class', 'step-header');

    stepHeader.append('span')
      .attr('class', 'step-header')
      .text(d => d.stepName);

    stepHeader.append('span')
      .attr('class', 'step-duration')
      .text(d => `${d.duration} minutes`);
  }

  renderStepBars() {
    this.components.steps.append('div')
      .attr('class', 'step-bar')
      .style('width', d => `${this.timeScale(d.duration)}%`)
      .attr('height', _style_js__WEBPACK_IMPORTED_MODULE_0__["barHeight"]);
  }

  resortSteps(data) {
    this.data = data;
    this.setStepScale();

    this.components.steps
      .data(this.data, d => d.stepName)
      // .order()
      .transition()
      .style('top', d => `${this.stepScale(d.stepName)}px`);
  }

    

    // this.components.stepLabels = this.components.steps
    //   .append('text')
    //   .attr('class', 'step-name-label')
    //   .text(d => d.stepName);

    // this.components.timeLabels = this.components.steps
    //   .append('text')
    //   .attr('class', 'step-time-label')
    //   .attr('transform', (d, i) => {
    //     // HACK to place labels side by side
    //     const x = this.components.stepLabels
    //       .filter((d, i0) => i === i0)
    //       .node()
    //       .getBoundingClientRect().width;
    //     return `translate(${x + 5},0)`;
    //   })
    //   .text(d => `${d.duration} minutes`);

    // this.components.stepBars = this.components.steps
    //   .append('rect')
    //   .attr('height', barHeight)
    //   .attr('width', d => this.timeScale(d.duration))
    //   .attr('x', 0)
    //   .attr('y', 5);
  
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

/***/ }),

/***/ "./src/vis/RecipeTimeline/style.js":
/*!*****************************************!*\
  !*** ./src/vis/RecipeTimeline/style.js ***!
  \*****************************************/
/*! exports provided: margins, stepHeight, barHeight, timelineStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margins", function() { return margins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepHeight", function() { return stepHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barHeight", function() { return barHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timelineStyle", function() { return timelineStyle; });
const margins = { t: 10, r: 100, b: 10, l: 20 };

const stepHeight = 40;
const barHeight = 18;

const timelineStyle = `
  <style>
    .timeline-vis {
      font-family: 'Libre Baskerville', serif;
      font-size: 13px;
      box-sizing: border-box;
      width: 100%;
    }

    .timeline-vis .steps {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .timeline-vis .step {
      margin: 0 0 2px 0;
      padding: 0;
      cursor: pointer;
    }

    .timeline-vis .step-label {
      font-style: italic;
    }

    .timeline-vis .step.expanded {
      background: #e8f3fe;
      1px solid #c8d6e5;
    }

    .timeline-vis .step:hover {
      background: #dbe9f8;
    }

    .timeline-vis .step-duration {
      margin-top: 2px;
      height: 10px;
      border: 2px solid black;
    }

    .timeline-vis .step-duration.passive {
      background: white;
    }

    .timeline-vis .step-duration.semi-active {
      background: repeating-linear-gradient(
        -45deg,
        white,
        white 3px,
        black 3px,
        black 4px
      );
    }

    .timeline-vis .step-duration.active {
      background: repeating-linear-gradient(
        -45deg,
        black,
        black 3px,
        white 3px,
        white 4px
      );
    }

    .timeline-vis .step .full-step {
      max-height: 0;
      overflow: hidden;
      padding: 0;
      transition: max-height 3s padding 3s;
    }

    .timeline-vis .step.expanded .full-step {
      max-height: 500px;
      padding: 4px 0;
    }

    .timeline-vis .step-ingredients {
      padding-left: 24px;
    }

    .timeline-vis .step-ingredient {

    }

    .timeline-vis .step-instructions {
      margin: 2px 0 4px;
    }

  </style>
`;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map