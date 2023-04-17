(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [{
  path: 'tabs',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: 'meus-dados',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_models_Mentor_ts"), __webpack_require__.e("src_app_pages_meus-dados_meus-dados_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/meus-dados/meus-dados.module */ 7946)).then(m => m.MeusDadosPageModule)
  }, {
    path: '',
    redirectTo: '/pages/meus-dados/meus-dados',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: '/tabs/meus-dados',
  pathMatch: 'full'
}];
let TabsPageRoutingModule = class TabsPageRoutingModule {};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
})], TabsPageRoutingModule);


/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule],
  declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
})], TabsPageModule);


/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 2146);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let TabsPage = class TabsPage {
  constructor(storage, router) {
    this.storage = storage;
    this.router = router;
    this.logo = "/assets/images/examples/ipojuca.png";
    this.storage.create().then(a => {
      this.storage.get('licenca').then(licenca => {
        this.logo = licenca.logo;
      });
    });
  }
  abrirMenu() {
    this.router.navigate(["lmenu"]);
  }
};
TabsPage.ctorParameters = () => [{
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-tabs',
  template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsPage);


/***/ }),

/***/ 2146:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-icon {\n  font-size: 24px;\n}\n\nion-tab-button {\n  font-size: 10px;\n  --background-focused: #000;\n  --color-selected: #000;\n  --padding-end: 0px;\n  --padding-start: 10px;\n  --padding-bottom: 0px;\n  --margin-left:0px;\n  --margin-right:0px;\n  max-width: 100px;\n}\n\n.tab-selected ion-icon {\n  --background-focused: #35ADC6;\n  --color-selected: #35ADC6;\n}", "",{"version":3,"sources":["webpack://./src/app/tabs/tabs.page.scss"],"names":[],"mappings":"AAAA;EACI,eAAA;AACJ;;AAEA;EACI,eAAA;EACA,0BAAA;EACA,sBAAA;EACA,kBAAA;EACA,qBAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AACJ;;AAII;EACI,6BAAA;EACA,yBAAA;AADR","sourcesContent":["ion-icon {\n    font-size: 24px;\n}\n\nion-tab-button{\n    font-size: 10px;\n    --background-focused: #000;\n    --color-selected: #000;\n    --padding-end: 0px;\n    --padding-start: 10px;\n    --padding-bottom: 0px;\n    --margin-left:0px;\n    --margin-right:0px;\n    max-width:100px;\n}\n\n.tab-selected {\n        \n    ion-icon {\n        --background-focused: #35ADC6;\n        --color-selected: #35ADC6;\n    }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-tabs>\n\n\n  <ion-tab-bar slot=\"bottom\">\n  \n    <ion-tab-button tab=\"meus-dados\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Meus Dados</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"documentos\">\n      <ion-icon name=\"document\"></ion-icon>\n      <ion-label>Documentos</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"agenda\">\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Agenda</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"historico\">\n      <ion-icon name=\"timer\"></ion-icon>\n      <ion-label>Histórico</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"servicos\">\n      <ion-icon name=\"pin\"></ion-icon>\n      <ion-label>Serviços</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button style=\"max-height:80px; margin-right: 10px;\">\n        <ion-menu-button menu=\"main-content\" style=\"max-height:30px;\" >\n      <ion-icon name=\"custom-conecta-cidadao\"></ion-icon>\n    </ion-menu-button>  \n    <ion-label>Conecta Suas</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n<!--   <ion-tab-button tab=\"meus-dados\">\n      <ion-icon name=\"custom-conecta-cidadao\"></ion-icon>\n      <ion-label>Conecta Suas</ion-label>\n    </ion-tab-button>\n  -->";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map