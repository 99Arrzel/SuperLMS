"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Logeado_Admin_Asignar_Cursos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_picklist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/picklist */ "./node_modules/primevue/picklist/picklist.esm.js");
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Primevue */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PickList: primevue_picklist__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    curso: {
      type: Object,
      "default": {}
    },
    usuarios: {
      type: Array,
      "default": []
    },
    cursos: {
      type: Array,
      "default": []
    }
  },
  emits: ["go_back", "sincronizar"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var go_back = function go_back() {
      emit("go_back");
    };

    var usuarios_t = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.computed)({
      get: function get() {
        if (valores.usuarios_x) {
          return valores.usuarios_x;
        }

        var data = props.usuarios.map(function (usuario) {
          return _objectSpread({
            label: usuario.persona.nombre + " " + usuario.persona.apellido_p,
            value: usuario.id_usuario
          }, usuario);
        })
        /* Filtrar si el usuario está en el curso */
        .filter(function (usuario) {
          return !props.curso.usuarios.some(function (usuario_curso) {
            return usuario_curso.id_usuario == usuario.id_usuario;
          });
        });
        var usuarios_en_curso = props.curso.usuarios.map(function (usuario) {
          var data_de_usuario = props.usuarios.find(function (usuario_in) {
            return usuario_in.id_usuario == usuario.id_usuario;
          });
          return _objectSpread({
            label: data_de_usuario.persona.nombre + " " + data_de_usuario.persona.apellido_p,
            value: data_de_usuario.id_usuario
          }, data_de_usuario);
        });
        return [data, usuarios_en_curso];
      },
      set: function set(val) {
        valores.usuarios_x = val;
      }
    });
    var valores = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      usuario_seleccionado: {},
      usuarios_x: null
    });

    var log = function log(t) {
      console.log(t);
    };

    var sincronizar = function sincronizar() {
      /* If the list is different from the original */
      if (valores.usuarios_x == undefined) {
        return;
      }

      var curso_c = props.cursos.find(function (actual) {
        return actual.id_curso == props.curso.id_curso;
      });
      var original_values = curso_c.usuarios.map(function (usuario) {
        return usuario.id_usuario;
      });
      var modified_values = valores.usuarios_x[1].map(function (usuario) {
        return usuario.value;
      });

      if (!comparador(original_values, modified_values)) {
        /* If the list is different from the original */
        emit("sincronizar", {
          id_curso: props.curso.id_curso,
          usuarios: modified_values
        });
      }
    };

    var comparador = function comparador(a, b) {
      return a.length === b.length && a.every(function (val, index) {
        return val === b[index];
      });
    };

    return {
      sincronizar: sincronizar,
      log: log,
      valores: valores,
      usuarios_t: usuarios_t,
      go_back: go_back
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=template&id=a6a95d98":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=template&id=a6a95d98 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col"
};
var _hoisted_2 = {
  "class": "mr-auto"
};
var _hoisted_3 = {
  "class": "mx-auto mb-2"
};
var _hoisted_4 = {
  "class": "text-2xl text-variable text-center"
};
var _hoisted_5 = {
  "class": "w-11/12 mx-auto"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Para asignar ");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Asignados ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$curso$plantil;

  var _component_PickList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PickList");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "m-2 p-2 bg-blue-600 rounded-lg text-variable",
    onClick: _cache[0] || (_cache[0] = function () {
      return $setup.go_back && $setup.go_back.apply($setup, arguments);
    })
  }, " Regresar ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, " Estás asignando usuarios al aula " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$curso$plantil = $props.curso.plantilla) === null || _$props$curso$plantil === void 0 ? void 0 : _$props$curso$plantil.nombre), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PickList, {
    modelValue: $setup.usuarios_t,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.usuarios_t = $event;
    }),
    dataKey: "value",
    onSelectionChange: $setup.sincronizar,
    stripedRows: true
  }, {
    sourceheader: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    targetheader: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7];
    }),
    item: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (slotProps) {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(slotProps.item.label + " - " + slotProps.item.rol.nombre), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue", "onSelectionChange"])])]);
}

/***/ }),

/***/ "./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Asignar_Cursos_vue_vue_type_template_id_a6a95d98__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asignar_Cursos.vue?vue&type=template&id=a6a95d98 */ "./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=template&id=a6a95d98");
/* harmony import */ var _Asignar_Cursos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Asignar_Cursos.vue?vue&type=script&lang=js */ "./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=script&lang=js");
/* harmony import */ var _home_link_lms_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_link_lms_public_html_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Asignar_Cursos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Asignar_Cursos_vue_vue_type_template_id_a6a95d98__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Asignar_Cursos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Asignar_Cursos_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Asignar_Cursos.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=template&id=a6a95d98":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=template&id=a6a95d98 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Asignar_Cursos_vue_vue_type_template_id_a6a95d98__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Asignar_Cursos_vue_vue_type_template_id_a6a95d98__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Asignar_Cursos.vue?vue&type=template&id=a6a95d98 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Logeado/Admin/Asignar_Cursos.vue?vue&type=template&id=a6a95d98");


/***/ })

}]);