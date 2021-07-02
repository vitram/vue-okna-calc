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
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2083":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f457");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesToShadowDOM; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
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

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
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

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("24fb");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"31633692-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=182337b5&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('link',{attrs:{"rel":"stylesheet","href":"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css","integrity":"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T","crossorigin":"anonymous"}}),_c('link',{attrs:{"rel":"preconnect","href":"https://fonts.googleapis.com"}}),_c('link',{attrs:{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""}}),_c('link',{attrs:{"href":"https://fonts.googleapis.com/css2?family=Montserrat&display=swap","rel":"stylesheet"}}),_c('div',{staticClass:"container"},[_c('h2',{staticClass:"text-center mb-4"},[_vm._v("Расчет стоимости онлайн")]),_c('div',{staticClass:"row first_config"},[_c('div',{staticClass:"col-md-3"},_vm._l((_vm.levels),function(lvl){return _c('button',{key:lvl.level,staticClass:"btn btn-lg w-100",class:{
            'btn-warning': lvl.level === _vm.level_type,
            'btn-outline-warning': lvl.level !== _vm.level_type,
          },attrs:{"type":"button"},on:{"click":function($event){return _vm.setLevel(lvl.level)}}},[_vm._v(" "+_vm._s(lvl.name)+" ")])}),0),_c('div',{staticClass:"col-md-4"},[_c('div',{staticClass:"image_container"},[(_vm.okna_number === 0)?[_c('img',{attrs:{"src":"https://i.ibb.co/chY6KY3/okno-1.png","alt":""}})]:_vm._e(),(_vm.okna_number === 1)?[_c('img',{attrs:{"src":"https://i.ibb.co/YjB5r8N/okno-2.png","alt":""}})]:_vm._e(),(_vm.okna_number === 2)?[_c('img',{attrs:{"src":"https://i.ibb.co/6HgQqnc/okno-3.png","alt":""}})]:_vm._e(),(_vm.okna_number === 3)?[_c('img',{attrs:{"src":"https://i.ibb.co/PGRR8Kw/balkon.png","alt":""}})]:_vm._e()],2)]),_c('div',{staticClass:"col-md-5 d-flex"},[_c('div',{staticClass:"okna_container mb-4"},_vm._l((_vm.okna),function(okno_configs,i){return _c('div',{key:i,staticClass:"okna_col"},[_c('div',{staticClass:"okno_f",on:{"click":function($event){return _vm.setOknaNumber(i)}}},[_c('img',{attrs:{"src":'https://raw.githubusercontent.com/vitram/vue-okna-calc/master/src/assets/svg/' +
                  (i + 1) +
                  '_f.svg',"alt":""}})]),_c('img',{staticClass:"triangle",attrs:{"src":"https://raw.githubusercontent.com/vitram/vue-okna-calc/master/src/assets/svg/triangle.svg","alt":""}}),_vm._l((okno_configs),function(okno_config){return _c('div',{key:okno_config.config,staticClass:"okno_config",class:{
                active_okno:
                  okno_config.config === _vm.okna_config && i === _vm.okna_number,
              },on:{"click":function($event){return _vm.setOknaConfig(i, okno_config.config)}}},[_c('img',{attrs:{"src":'https://raw.githubusercontent.com/vitram/vue-okna-calc/master/src/assets/svg/' +
                  (i + 1) +
                  '_' +
                  okno_config.config +
                  '.svg',"alt":""}})])})],2)}),0)])]),_c('div',{staticClass:"row second_config"},[_c('div',{staticClass:"col-md-3"},[_c('div',{staticClass:"progress_item"},[_c('p',[_vm._v("Шумоизоляция")]),_c('progress-bar',{attrs:{"bg-color":"none","bar-color":"#FAC755","size":"small","val":_vm.percent}})],1),_c('div',{staticClass:"progress_item"},[_c('p',[_vm._v("Безопасность")]),_c('progress-bar',{attrs:{"bg-color":"none","bar-color":"#FAC755","size":"small","val":_vm.percent}})],1),_c('div',{staticClass:"progress_item"},[_c('p',[_vm._v("Солнцезащита")]),_c('progress-bar',{attrs:{"bg-color":"none","bar-color":"#FAC755","size":"small","val":_vm.percent}})],1),_c('div',{staticClass:"progress_item"},[_c('p',[_vm._v("Энергосбережение")]),_c('progress-bar',{attrs:{"bg-color":"none","bar-color":"#FAC755","size":"small","val":_vm.percent}})],1)]),_vm._m(0),_c('div',{staticClass:"col-md-5"},[_c('h3',{staticClass:"text-center"},[_vm._v("Стоимость всего окна")]),_c('div',{staticClass:"price_block d-flex"},[_c('p',[_vm._v("Стоимость голого изделия")]),_c('div',{staticClass:"price"},[_vm._v(_vm._s(_vm.summ)+" р")])]),_c('div',{staticClass:"price_block d-flex"},[_c('p',[_vm._v("Стоимость изделия с комплектацией")]),_c('div',{staticClass:"price"},[_vm._v(_vm._s(_vm.summ)+" р")])]),_c('button',{staticClass:"btn btn-warning btn-lg w-100 mt-3",attrs:{"type":"button"},on:{"click":function($event){return _vm.pushtourl()}}},[_vm._v(" Вызвать инженера ")])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-md-4 checkbox_col"},[_c('div',{staticClass:"checkbox_container"},[_c('div',{staticClass:"checkbox_row"},[_c('div',{staticClass:"checkbox_item"},[_c('input',{attrs:{"type":"checkbox","id":"dostavka","value":"dostavka"}}),_c('label',{attrs:{"for":"dostavka"}},[_vm._v("Доставка")])]),_c('div',{staticClass:"checkbox_item"},[_c('input',{attrs:{"type":"checkbox","id":"montazh","value":"montazh"}}),_c('label',{attrs:{"for":"montazh"}},[_vm._v("Монтаж")])]),_c('div',{staticClass:"checkbox_item"},[_c('input',{attrs:{"type":"checkbox","id":"setka","value":"setka"}}),_c('label',{attrs:{"for":"setka"}},[_vm._v("Москитная сетка")])]),_c('div',{staticClass:"checkbox_item"},[_c('input',{attrs:{"type":"checkbox","id":"otlivi","value":"otlivi"}}),_c('label',{attrs:{"for":"otlivi"}},[_vm._v("Отливы")])]),_c('div',{staticClass:"checkbox_item"},[_c('input',{attrs:{"type":"checkbox","id":"podokonniki","value":"podokonniki"}}),_c('label',{attrs:{"for":"podokonniki"}},[_vm._v("Подоконники")])]),_c('div',{staticClass:"checkbox_item"},[_c('input',{attrs:{"type":"checkbox","id":"otkosi","value":"otkosi"}}),_c('label',{attrs:{"for":"otkosi"}},[_vm._v("Откосы")])])])])])}]


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=182337b5&shadow

// EXTERNAL MODULE: ./node_modules/vue-simple-progress/dist/vue-simple-progress.js
var vue_simple_progress = __webpack_require__("a7e3");
var vue_simple_progress_default = /*#__PURE__*/__webpack_require__.n(vue_simple_progress);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&shadow
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

/* harmony default export */ var Appvue_type_script_lang_js_shadow = ({
  name: "App",
  components: {
    ProgressBar: vue_simple_progress_default.a
  },

  data() {
    return {
      level_type: 1,
      levels: [{
        name: "Эконом",
        level: 0
      }, {
        name: "Стандарт",
        level: 1
      }, {
        name: "Элит",
        level: 2
      }],
      okna_number: 0,
      okna_config: 1,
      okna: [[{
        config: 1,
        price_low: 100,
        price_middle: 200,
        price_vip: 300
      }, {
        config: 2,
        price_low: 100,
        price_middle: 200,
        price_vip: 300
      }, {
        config: 3,
        price_low: 100,
        price_middle: 200,
        price_vip: 300
      }], [{
        config: 1,
        price_low: 6749,
        price_middle: 7642,
        price_vip: 8241
      }, {
        config: 2,
        price_low: 9028,
        price_middle: 9777,
        price_vip: 10284
      }], [{
        config: 1,
        price_low: 9100,
        price_middle: 10531,
        price_vip: 11586
      }, {
        config: 2,
        price_low: 11400,
        price_middle: 12697,
        price_vip: 13657
      }, {
        config: 3,
        price_low: 11900,
        price_middle: 13165,
        price_vip: 14125
      }], [{
        config: 1,
        price_low: 11400,
        price_middle: 13249,
        price_vip: 14546
      }, {
        config: 2,
        price_low: 14900,
        price_middle: 16432,
        price_vip: 17565
      }]]
    };
  },

  computed: {
    summ() {
      if (this.level_type === 0) {
        return this.okna[this.okna_number][this.okna_config - 1].price_low;
      }

      if (this.level_type === 1) {
        return this.okna[this.okna_number][this.okna_config - 1].price_middle;
      }

      if (this.level_type === 2) {
        return this.okna[this.okna_number][this.okna_config - 1].price_vip;
      }

      return 5000;
    },

    percent() {
      if (this.level_type === 0) {
        return 15;
      }

      if (this.level_type === 1) {
        return 60;
      }

      if (this.level_type === 2) {
        return 90;
      }

      return 100;
    }

  },
  methods: {
    setLevel(id) {
      this.level_type = id;
      console.log("lvl", this.level_type);
    },

    setOknaNumber(i) {
      this.okna_number = i;
      this.okna_config = 1;
    },

    setOknaConfig(i, config) {
      this.setOknaNumber(i);
      this.okna_config = config;
      console.log("config", this.okna_config);
    },

    pushtourl() {
      if (history.pushState) {
        var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        var params = {
          level: this.level_type,
          okna_number: this.okna_number,
          okna_config: this.okna_config
        };
        var esc = encodeURIComponent;
        var query = Object.keys(params).map(k => esc(k) + "=" + esc(params[k])).join("&");
        var newUrl = baseUrl + "?" + query;
        history.pushState(null, null, newUrl);
        var event = new CustomEvent("motomoto");
        window.dispatchEvent(event);
        console.log("Delaem motomoto event");
      } else {
        console.warn("History API не поддерживает ваш браузер");
      }
    }

  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var src_Appvue_type_script_lang_js_shadow = (Appvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/App.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("2083")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  src_Appvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Appshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('v-card', vue_wc_wrapper(external_Vue_default.a, Appshadow))

/***/ }),

/***/ "5dee":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#app{background:#191e29;font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;padding-top:100px;padding-bottom:100px;font-family:Montserrat,sans-serif}h2,h3,p{color:#fff}.btn{margin-bottom:20px}.active_button{background:#fac755!important}.active_okno{background:rgba(250,198,85,.2549019607843137);box-shadow:0 0 10px rgba(250,198,85,.2549019607843137)}.first_config{align-items:center}.image_container{display:flex;justify-content:center}.image_container>img{height:400px}.okna_container{display:flex;justify-content:space-between}.okna_col{margin-right:25px}.okno_f{cursor:pointer}.triangle{margin-top:18px;margin-bottom:18px}.okno_config{cursor:pointer;margin-bottom:12px}.second_config{align-items:center}.progress_item{margin-bottom:25px}.progress_item>p{text-align:left}.checkbox_col,.checkbox_container{display:flex;justify-content:center}.checkbox_container{width:100%}.checkbox_row{display:flex;flex-direction:column;justify-content:space-between}.checkbox_item{display:flex}.checkbox_item>input{margin-right:32px;margin-top:5px}.checkbox_item>label{color:#fff}.price_block{align-items:center;justify-content:space-between}.price_block>p{text-align:left;margin-top:15px}.price{color:#fff;font-family:Georgia;font-style:normal;font-weight:400;font-size:45px;line-height:51px;color:#fac755}@media (max-width:767.98px){.price{font-size:35px;line-height:45px}.price_block>p{text-align:left;margin-top:15px;max-width:200px}.okno_config>img,.okno_f>img{width:100%}.okna_col:last-child{margin-right:0}.checkbox_item{width:100%;justify-content:space-between}.checkbox_container{margin-top:40px;margin-bottom:40px;display:block}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "a7e3":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-simple-progress v1.1.1 (https://github.com/dzwillia/vue-simple-progress)
 * (c) 2019 David Z. Williams
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VueSimpleProgress = undefined;

var _Progress = __webpack_require__(1);

var _Progress2 = _interopRequireDefault(_Progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-simple-progress', _Progress2.default);
}

exports.VueSimpleProgress = _Progress2.default;
exports.default = _Progress2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(4),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var isNumber = function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

exports.default = {
  props: {
    'val': {
      default: 0
    },
    'max': {
      default: 100
    },
    'size': {
      default: 3
    },
    'bg-color': {
      type: String,
      default: '#eee'
    },
    'bar-color': {
      type: String,
      default: '#2196f3' },
    'bar-transition': {
      type: String,
      default: 'all 0.5s ease'
    },
    'bar-border-radius': {
      type: Number,
      default: 0
    },
    'spacing': {
      type: Number,
      default: 4
    },
    'text': {
      type: String,
      default: ''
    },
    'text-align': {
      type: String,
      default: 'center' },
    'text-position': {
      type: String,
      default: 'bottom' },
    'font-size': {
      type: Number,
      default: 13
    },
    'text-fg-color': {
      type: String,
      default: '#222'
    }
  },
  computed: {
    pct: function pct() {
      var pct = this.val / this.max * 100;
      pct = pct.toFixed(2);
      return Math.min(pct, this.max);
    },
    size_px: function size_px() {
      switch (this.size) {
        case 'tiny':
          return 2;
        case 'small':
          return 4;
        case 'medium':
          return 8;
        case 'large':
          return 12;
        case 'big':
          return 16;
        case 'huge':
          return 32;
        case 'massive':
          return 64;
      }

      return isNumber(this.size) ? this.size : 32;
    },
    text_padding: function text_padding() {
      switch (this.size) {
        case 'tiny':
        case 'small':
        case 'medium':
        case 'large':
        case 'big':
        case 'huge':
        case 'massive':
          return Math.min(Math.max(Math.ceil(this.size_px / 8), 3), 12);
      }

      return isNumber(this.spacing) ? this.spacing : 4;
    },
    text_font_size: function text_font_size() {
      switch (this.size) {
        case 'tiny':
        case 'small':
        case 'medium':
        case 'large':
        case 'big':
        case 'huge':
        case 'massive':
          return Math.min(Math.max(Math.ceil(this.size_px * 1.4), 11), 32);
      }

      return isNumber(this.fontSize) ? this.fontSize : 13;
    },
    progress_style: function progress_style() {
      var style = {
        'background': this.bgColor
      };

      if (this.textPosition == 'middle' || this.textPosition == 'inside') {
        style['position'] = 'relative';
        style['min-height'] = this.size_px + 'px';
        style['z-index'] = '-2';
      }

      if (this.barBorderRadius > 0) {
        style['border-radius'] = this.barBorderRadius + 'px';
      }

      return style;
    },
    bar_style: function bar_style() {
      var style = {
        'background': this.barColor,
        'width': this.pct + '%',
        'height': this.size_px + 'px',
        'transition': this.barTransition
      };

      if (this.barBorderRadius > 0) {
        style['border-radius'] = this.barBorderRadius + 'px';
      }

      if (this.textPosition == 'middle' || this.textPosition == 'inside') {
        style['position'] = 'absolute';
        style['top'] = '0';
        style['height'] = '100%';
        style['min-height'] = this.size_px + 'px', style['z-index'] = '-1';
      }

      return style;
    },
    text_style: function text_style() {
      var style = {
        'color': this.textFgColor,
        'font-size': this.text_font_size + 'px',
        'text-align': this.textAlign
      };

      if (this.textPosition == 'top' || this.textPosition == 'middle' || this.textPosition == 'inside') style['padding-bottom'] = this.text_padding + 'px';
      if (this.textPosition == 'bottom' || this.textPosition == 'middle' || this.textPosition == 'inside') style['padding-top'] = this.text_padding + 'px';

      return style;
    }
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.text.length > 0 && _vm.textPosition == 'top') ? _c('div', {
    staticClass: "vue-simple-progress-text",
    style: (_vm.text_style)
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vue-simple-progress",
    style: (_vm.progress_style)
  }, [(_vm.text.length > 0 && _vm.textPosition == 'middle') ? _c('div', {
    staticClass: "vue-simple-progress-text",
    style: (_vm.text_style)
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._v(" "), (_vm.text.length > 0 && _vm.textPosition == 'inside') ? _c('div', {
    staticStyle: {
      "position": "relative",
      "left": "-9999px"
    },
    style: (_vm.text_style)
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vue-simple-progress-bar",
    style: (_vm.bar_style)
  }, [(_vm.text.length > 0 && _vm.textPosition == 'inside') ? _c('div', {
    style: (_vm.text_style)
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])]), _vm._v(" "), (_vm.text.length > 0 && _vm.textPosition == 'bottom') ? _c('div', {
    staticClass: "vue-simple-progress-text",
    style: (_vm.text_style)
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])
},staticRenderFns: []}

/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "f457":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5dee");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("fc0952da", content, shadowRoot)
};

/***/ })

/******/ });
//# sourceMappingURL=v-card.js.map