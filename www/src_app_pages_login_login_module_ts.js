(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 446);








let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskDirective, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskPipe],
  providers: [(0,ngx_mask__WEBPACK_IMPORTED_MODULE_7__.provideEnvironmentNgxMask)()],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
})], LoginPageModule);


/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Users_erisveltonlima_Desktop_criancaFeliz_criancaFeliz_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 6535);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_global_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../global/global.component */ 4674);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _models_Mentor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Mentor */ 4967);
/* harmony import */ var _models_Servico__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Servico */ 4912);












let LoginPage = class LoginPage {
  constructor(router, globalComponent, storage, loadingCtrl, alertController) {
    this.router = router;
    this.globalComponent = globalComponent;
    this.storage = storage;
    this.loadingCtrl = loadingCtrl;
    this.alertController = alertController;
    this.cpf = "000.000.000-00";
    this.nascimento = "00/00/0000";
    this.load = null;
    this.municipio = null;
    this.logo = "/assets/images/examples/carregamento.png";
    this.global = this.globalComponent;
    loadingCtrl.create({
      message: "Conectando Servidor."
    }).then(l => {
      this.load = l;
    });
  }
  presentAlert() {
    var _this = this;
    return (0,_Users_erisveltonlima_Desktop_criancaFeliz_criancaFeliz_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Importante',
        message: "Para acessar o aplicativo, é preciso estar inscrito no Cadastro Único Federal Procure uma Unidade de Assistência Social (CRAS) ou a Central do Cadastro Único mais próxima.",
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  //alerta para informar o CPF
  alertaCpf() {
    var _this2 = this;
    return (0,_Users_erisveltonlima_Desktop_criancaFeliz_criancaFeliz_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: 'Importante',
        message: "Por favor, preencha seu CPF corretamente .",
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  //alerta para informar a senha
  alertaSenha() {
    var _this3 = this;
    return (0,_Users_erisveltonlima_Desktop_criancaFeliz_criancaFeliz_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Importante',
        message: "Por favor, preencha sua data de nascimento.",
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  // form login
  loginForm() {
    //  console.log('Data Requerida: ', e.value);
    if (this.cpf == '' || this.cpf == undefined) {
      //this.globalComponent.loadToast('Por favor, preencha seu e-mail corretamente');
      return this.alertaCpf();
    } else if (this.nascimento == '' || this.nascimento == undefined) {
      //this.globalComponent.loadToast('Por favor, preencha sua data de nascimento');
      return this.alertaSenha();
    } else {
      this.load.present();
      setTimeout(() => {
        this.loginForm2();
      }, 100);
      return;
      // tentar fazer login
      var usuario = _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.executaVisao(3063, "varcpf=" + this.cpf + "&vardataNascimento=" + this.nascimento);
      this.load.dismiss();
      if (usuario == null) {
        alert("nenhum usuario encontrado");
        return;
      }
      _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.imagem;
      if (usuario.associadoCras != null && usuario.associadoCras.domicilioCras != null && usuario.associadoCras.domicilioCras.historicoUnidades != null) {
        for (var x = 0; x < usuario.associadoCras.domicilioCras.historicoUnidades.length; x++) if (usuario.associadoCras.domicilioCras.historicoUnidades[x].dataFimFormatado == "" && usuario.associadoCras.domicilioCras.historicoUnidades[x].unidade != null) _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.cras = usuario.associadoCras.domicilioCras.historicoUnidades[x].unidade;
      }
      this.storage.set("ultimoUsuario", usuario);
      _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.usuarioLogado = usuario;
      if (usuario.dataUltimoAcessoAppFormatado == null) {
        usuario.dataUltimoAcessoApp = new Date();
        usuario.dataUltimoAcessoAppFormatado = _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.dateToString(new Date());
      }
      //var mensagens = Mentor.executaVisao(3071, "");
      var parametro = "individuo=" + _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.usuarioLogado.codigo;
      if (_models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.cras != null) parametro = parametro + "&unidade=" + _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.cras.codigo;
      var palavra = _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.bind(parametro, "/jsp/appCidadao/listaMensagens.jsp", "POST");
      var mensagens = eval(palavra + "");
      if (mensagens != null) {
        for (var x = 0; x < mensagens.length; x++) {
          if (_models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.stringToDate(mensagens[x].publicacaoFormatado).getTime() > _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.stringToDate(usuario.dataUltimoAcessoAppFormatado).getTime()) _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.temMensagemNova = true;
        }
      }
      _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.dataUltimoAcessoApp = _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.stringToDate(usuario.dataUltimoAcessoAppFormatado);
      usuario.dataUltimoAcessoApp = new Date();
      _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.rodaTransacaoFromObjeto(1788, "obj", usuario, false);
      let url = '/tabs/meus-dados';
      //let url_withparameter = '/tabs/meus-dados?cpf=' + e.value.login_cpf + '&nascimento=' + e.value.login_nascimento;
      this.storage.set('cpf', this.cpf);
      this.router.navigateByUrl(url);
    }
  }
  loginForm2() {
    //  console.log('Data Requerida: ', e.value);
    {
      this.load.present();
      // tentar fazer login
      var usuario = _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.executaVisao(3063, "varcpf=" + this.cpf + "&vardataNascimento=" + this.nascimento);
      if (usuario == null) {
        this.load.dismiss();
        alert("nenhum usuario encontrado");
        return;
      }
      _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.imagem;
      if (usuario.associadoCras != null && usuario.associadoCras.domicilioCras != null && usuario.associadoCras.domicilioCras.historicoUnidades != null) {
        for (var x = 0; x < usuario.associadoCras.domicilioCras.historicoUnidades.length; x++) if (usuario.associadoCras.domicilioCras.historicoUnidades[x].dataFimFormatado == "" && usuario.associadoCras.domicilioCras.historicoUnidades[x].unidade != null) _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.cras = usuario.associadoCras.domicilioCras.historicoUnidades[x].unidade;
      }
      this.storage.set("ultimoUsuario", usuario);
      _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.usuarioLogado = usuario;
      if (usuario.dataUltimoAcessoAppFormatado == null) {
        usuario.dataUltimoAcessoApp = new Date();
        usuario.dataUltimoAcessoAppFormatado = _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.dateToString(new Date());
      }
      //var mensagens = Mentor.executaVisao(3071, "");
      var parametro = "individuo=" + _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.usuarioLogado.codigo;
      if (_models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.cras != null) parametro = parametro + "&unidade=" + _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.cras.codigo;
      var palavra = _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.bind(parametro, "/jsp/appCidadao/listaMensagens.jsp", "POST");
      var mensagens = eval(palavra + "");
      if (mensagens != null) {
        for (var x = 0; x < mensagens.length; x++) {
          if (_models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.stringToDate(mensagens[x].publicacaoFormatado).getTime() > _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.stringToDate(usuario.dataUltimoAcessoAppFormatado).getTime()) _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.temMensagemNova = true;
        }
      }
      _models_Servico__WEBPACK_IMPORTED_MODULE_5__.servico.dataUltimoAcessoApp = _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.stringToDate(usuario.dataUltimoAcessoAppFormatado);
      usuario.dataUltimoAcessoApp = new Date();
      _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.rodaTransacaoFromObjeto(1788, "obj", usuario, false);
      let url = '/tabs/meus-dados';
      //let url_withparameter = '/tabs/meus-dados?cpf=' + e.value.login_cpf + '&nascimento=' + e.value.login_nascimento;
      this.storage.set('cpf', this.cpf);
      this.load.dismiss();
      this.router.navigateByUrl(url);
    }
  }
  ionViewDidEnter() {
    var _this4 = this;
    return (0,_Users_erisveltonlima_Desktop_criancaFeliz_criancaFeliz_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.storage.create();
      var licenca = yield _this4.storage.get('licenca');
      //alert(licenca);
      if (licenca == null) {
        _this4.router.navigateByUrl('selecao-municipio');
      } else {
        _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.UrlRequest = "https://app.conectasuas.com.br/assistenciaSocial/";
        //"http://app.vvision.com.br:8080/assistenciaSocial/";
        var licencas = _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.executaVisao(2632, "varcodigo=" + licenca.estado.codigo + "&varsistema=" + licenca.sistema + "&varnomeMunicipio=" + licenca.nomeMunicipio);
        if (licencas == null || licencas.length != 1) _this4.router.navigateByUrl('selecao-municipio');else {
          licenca = licencas[0];
          _this4.storage.set("licenca", licenca);
        }
      }
      _models_Mentor__WEBPACK_IMPORTED_MODULE_4__.Mentor.UrlRequest = licenca.urlServidor;
      _this4.logo = licenca.logo;
      _this4.storage.get("ultimoUsuario").then(usu => {
        if (usu == null) return _this4.presentAlert();
      });
    })();
  }
  navegacao() {
    var _this5 = this;
    return (0,_Users_erisveltonlima_Desktop_criancaFeliz_criancaFeliz_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.storage.create();
      yield _this5.storage.remove("licenca");
      _this5.router.navigate(["selecao-municipio"]);
    })();
  }
};
LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _global_global_component__WEBPACK_IMPORTED_MODULE_3__.GlobalComponent
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LoginPage);


/***/ }),

/***/ 6535:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "ion-button {\n  margin-top: 60px;\n}", "",{"version":3,"sources":["webpack://./src/app/pages/login/login.page.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ","sourcesContent":["ion-button {\n    margin-top: 60px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title title=\"Seleção Município\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <style>\n    ion-label {\n      color: var(--ion-color-primary) !important;\n      ;\n    }\n\n    .entrada {\n      border-radius: var(--border-radius);\n      padding-left: var(--padding-start);\n      padding-right: var(--padding-end);\n      padding-top: var(--padding-top);\n      padding-bottom: var(--padding-bottom);\n      font-family: inherit;\n      font-size: inherit;\n      font-style: inherit;\n      font-weight: inherit;\n      letter-spacing: inherit;\n      text-decoration: inherit;\n\n      text-indent: inherit;\n      text-overflow: inherit;\n      text-transform: inherit;\n      text-align: inherit;\n      white-space: inherit;\n      color: inherit;\n      display: inline-block;\n      -ms-flex: 1;\n      flex: 1;\n      width: 100%;\n      max-width: 100%;\n      max-height: 100%;\n      border: 0;\n      outline: none;\n      background: transparent;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n\n\n      padding-left: unset;\n      padding-right: unset;\n      -webkit-padding-start: var(--padding-start);\n      padding-inline-start: var(--padding-start);\n      -webkit-padding-end: var(--padding-end);\n      padding-inline-end: var(--padding-end);\n\n      margin-top: 35px;\n      margin-left: -15px;\n      margin-bottom: 10px;\n\n    }\n  </style>\n\n\n  <div>\n    <ion-grid>\n      <ion-row class=\"logos-menu\">\n        <ion-col class=\"vertical-align-content logo\">\n          <ion-img src=\"/assets/images/logo-conecta-cidadao.png\"></ion-img>\n        </ion-col>\n        <ion-col class=\"vertical-align-content municipio\">\n          <ion-img src=\"{{logo}}\"></ion-img>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"full\">\n            <!-- Ion input pra manter o formato-->\n            <ion-input style=\"display: none;\" type=\"tel\" mask=\"000.000.000-99\"></ion-input>\n            <!-- cpf com mask -->\n            <ion-label position=\"floating\" style=\"    color: var(--ion-color-primary) !important;;\">CPF</ion-label>\n\n            <input type=\"text\" class=\"entrada\" mask=\"000.000.000-00\" [(ngModel)]=\"cpf\"\n              [dropSpecialCharacters]=\"false\" />\n\n          </ion-item>\n          <!-- data de nascimento com mask-->\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Data de Nascimento</ion-label>\n\n            <input type=\"text\" class=\"entrada\" mask=\"00/00/0000\" [(ngModel)]=\"nascimento\"\n              [dropSpecialCharacters]=\"false\" />\n\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"secondary\" expand=\"block\" (click)=\"loginForm()\"\n            mask=\"**/**/****\">Entrar</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\" (click)=\"navegacao()\">Alterar o\n            Município</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n</ion-content>";

/***/ }),

/***/ 446:
/*!*****************************************************!*\
  !*** ./node_modules/ngx-mask/fesm2020/ngx-mask.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_CONFIG": () => (/* binding */ INITIAL_CONFIG),
/* harmony export */   "NEW_CONFIG": () => (/* binding */ NEW_CONFIG),
/* harmony export */   "NGX_MASK_CONFIG": () => (/* binding */ NGX_MASK_CONFIG),
/* harmony export */   "NgxMaskApplierService": () => (/* binding */ NgxMaskApplierService),
/* harmony export */   "NgxMaskDirective": () => (/* binding */ NgxMaskDirective),
/* harmony export */   "NgxMaskPipe": () => (/* binding */ NgxMaskPipe),
/* harmony export */   "NgxMaskService": () => (/* binding */ NgxMaskService),
/* harmony export */   "initialConfig": () => (/* binding */ initialConfig),
/* harmony export */   "provideEnvironmentNgxMask": () => (/* binding */ provideEnvironmentNgxMask),
/* harmony export */   "provideNgxMask": () => (/* binding */ provideNgxMask),
/* harmony export */   "timeMasks": () => (/* binding */ timeMasks),
/* harmony export */   "withoutValidation": () => (/* binding */ withoutValidation)
/* harmony export */ });
/* harmony import */ var _Users_erisveltonlima_Desktop_criancaFeliz_criancaFeliz_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);





const NGX_MASK_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('ngx-mask config');
const NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('new ngx-mask config');
const INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('initial ngx-mask config');
const initialConfig = {
  suffix: '',
  prefix: '',
  thousandSeparator: ' ',
  decimalMarker: ['.', ','],
  clearIfNotMatch: false,
  showTemplate: false,
  showMaskTyped: false,
  placeHolderCharacter: '_',
  dropSpecialCharacters: true,
  hiddenInput: undefined,
  shownMaskExpression: '',
  separatorLimit: '',
  allowNegativeNumbers: false,
  validation: true,
  // eslint-disable-next-line @typescript-eslint/quotes
  specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
  leadZeroDateTime: false,
  triggerOnMaskChange: false,
  maskFilled: new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(),
  patterns: {
    '0': {
      pattern: new RegExp('\\d')
    },
    '9': {
      pattern: new RegExp('\\d'),
      optional: true
    },
    X: {
      pattern: new RegExp('\\d'),
      symbol: '*'
    },
    A: {
      pattern: new RegExp('[a-zA-Z0-9]')
    },
    S: {
      pattern: new RegExp('[a-zA-Z]')
    },
    U: {
      pattern: new RegExp('[A-Z]')
    },
    L: {
      pattern: new RegExp('[a-z]')
    },
    d: {
      pattern: new RegExp('\\d')
    },
    m: {
      pattern: new RegExp('\\d')
    },
    M: {
      pattern: new RegExp('\\d')
    },
    H: {
      pattern: new RegExp('\\d')
    },
    h: {
      pattern: new RegExp('\\d')
    },
    s: {
      pattern: new RegExp('\\d')
    }
  }
};
const timeMasks = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];
const withoutValidation = ['percent', 'Hh', 's0', 'm0', 'separator', 'd0/M0/0000', 'd0/M0', 'd0', 'M0'];
class NgxMaskApplierService {
  constructor() {
    this._config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(NGX_MASK_CONFIG);
    this.dropSpecialCharacters = this._config.dropSpecialCharacters;
    this.hiddenInput = this._config.hiddenInput;
    this.clearIfNotMatch = this._config.clearIfNotMatch;
    this.maskSpecialCharacters = this._config.specialCharacters;
    this.maskAvailablePatterns = this._config.patterns;
    this.prefix = this._config.prefix;
    this.suffix = this._config.suffix;
    this.thousandSeparator = this._config.thousandSeparator;
    this.decimalMarker = this._config.decimalMarker;
    this.showMaskTyped = this._config.showMaskTyped;
    this.placeHolderCharacter = this._config.placeHolderCharacter;
    this.validation = this._config.validation;
    this.separatorLimit = this._config.separatorLimit;
    this.allowNegativeNumbers = this._config.allowNegativeNumbers;
    this.leadZeroDateTime = this._config.leadZeroDateTime;
    this._shift = new Set();
    this.maskExpression = '';
    this.actualValue = '';
    this.shownMaskExpression = '';
    this._formatWithSeparators = (str, thousandSeparatorChar, decimalChars, precision) => {
      var _x$;
      let x = [];
      let decimalChar = '';
      if (Array.isArray(decimalChars)) {
        var _str$match$, _str$match;
        const regExp = new RegExp(decimalChars.map(v => '[\\^$.|?*+()'.indexOf(v) >= 0 ? `\\${v}` : v).join('|'));
        x = str.split(regExp);
        decimalChar = (_str$match$ = (_str$match = str.match(regExp)) === null || _str$match === void 0 ? void 0 : _str$match[0]) !== null && _str$match$ !== void 0 ? _str$match$ : '';
      } else {
        x = str.split(decimalChars);
        decimalChar = decimalChars;
      }
      const decimals = x.length > 1 ? `${decimalChar}${x[1]}` : '';
      let res = (_x$ = x[0]) !== null && _x$ !== void 0 ? _x$ : '';
      const separatorLimit = this.separatorLimit.replace(/\s/g, '');
      if (separatorLimit && +separatorLimit) {
        if (res[0] === '-') {
          res = `-${res.slice(1, res.length).slice(0, separatorLimit.length)}`;
        } else {
          res = res.slice(0, separatorLimit.length);
        }
      }
      const rgx = /(\d+)(\d{3})/;
      while (thousandSeparatorChar && rgx.test(res)) {
        res = res.replace(rgx, '$1' + thousandSeparatorChar + '$2');
      }
      if (precision === undefined) {
        return res + decimals;
      } else if (precision === 0) {
        return res;
      }
      return res + decimals.substring(0, precision + 1);
    };
    this.percentage = str => {
      return Number(str) >= 0 && Number(str) <= 100;
    };
    this.getPrecision = maskExpression => {
      const x = maskExpression.split('.');
      if (x.length > 1) {
        return Number(x[x.length - 1]);
      }
      return Infinity;
    };
    this.checkAndRemoveSuffix = inputValue => {
      for (let i = ((_this$suffix = this.suffix) === null || _this$suffix === void 0 ? void 0 : _this$suffix.length) - 1; i >= 0; i--) {
        var _this$suffix, _this$suffix2, _this$suffix3, _this$suffix4;
        const substr = this.suffix.substring(i, (_this$suffix2 = this.suffix) === null || _this$suffix2 === void 0 ? void 0 : _this$suffix2.length);
        if (inputValue.includes(substr) && i !== ((_this$suffix3 = this.suffix) === null || _this$suffix3 === void 0 ? void 0 : _this$suffix3.length) - 1 && (i - 1 < 0 || !inputValue.includes(this.suffix.substring(i - 1, (_this$suffix4 = this.suffix) === null || _this$suffix4 === void 0 ? void 0 : _this$suffix4.length)))) {
          return inputValue.replace(substr, '');
        }
      }
      return inputValue;
    };
    this.checkInputPrecision = (inputValue, precision, decimalMarker) => {
      if (precision < Infinity) {
        var _inputValue$match, _precisionMatch$0$len, _precisionMatch$;
        // TODO need think about decimalMarker
        if (Array.isArray(decimalMarker)) {
          const marker = decimalMarker.find(dm => dm !== this.thousandSeparator);
          // eslint-disable-next-line no-param-reassign
          decimalMarker = marker ? marker : decimalMarker[0];
        }
        const precisionRegEx = new RegExp(this._charToRegExpExpression(decimalMarker) + `\\d{${precision}}.*$`);
        const precisionMatch = (_inputValue$match = inputValue.match(precisionRegEx)) !== null && _inputValue$match !== void 0 ? _inputValue$match : [];
        const precisionMatchLength = (_precisionMatch$0$len = (_precisionMatch$ = precisionMatch[0]) === null || _precisionMatch$ === void 0 ? void 0 : _precisionMatch$.length) !== null && _precisionMatch$0$len !== void 0 ? _precisionMatch$0$len : 0;
        if (precisionMatchLength - 1 > precision) {
          const diff = precisionMatchLength - 1 - precision;
          // eslint-disable-next-line no-param-reassign
          inputValue = inputValue.substring(0, inputValue.length - diff);
        }
        if (precision === 0 && this._compareOrIncludes(inputValue[inputValue.length - 1], decimalMarker, this.thousandSeparator)) {
          // eslint-disable-next-line no-param-reassign
          inputValue = inputValue.substring(0, inputValue.length - 1);
        }
      }
      return inputValue;
    };
  }
  applyMaskWithPattern(inputValue, maskAndPattern) {
    const [mask, customPattern] = maskAndPattern;
    this.customPattern = customPattern;
    return this.applyMask(inputValue, mask);
  }
  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  cb = () => {}) {
    var _inputValue, _maskExpression3;
    if (!maskExpression || typeof inputValue !== 'string') {
      return '';
    }
    let cursor = 0;
    let result = '';
    let multi = false;
    let backspaceShift = false;
    let shift = 1;
    let stepBack = false;
    if (inputValue.slice(0, this.prefix.length) === this.prefix) {
      // eslint-disable-next-line no-param-reassign
      inputValue = inputValue.slice(this.prefix.length, inputValue.length);
    }
    if (!!this.suffix && ((_inputValue = inputValue) === null || _inputValue === void 0 ? void 0 : _inputValue.length) > 0) {
      // eslint-disable-next-line no-param-reassign
      inputValue = this.checkAndRemoveSuffix(inputValue);
    }
    const inputArray = inputValue.toString().split('');
    if (maskExpression === 'IP') {
      const valuesIP = inputValue.split('.');
      this.ipError = this._validIP(valuesIP);
      // eslint-disable-next-line no-param-reassign
      maskExpression = '099.099.099.099';
    }
    const arr = [];
    for (let i = 0; i < inputValue.length; i++) {
      var _inputValue$i;
      if ((_inputValue$i = inputValue[i]) !== null && _inputValue$i !== void 0 && _inputValue$i.match('\\d')) {
        var _inputValue$i2;
        arr.push((_inputValue$i2 = inputValue[i]) !== null && _inputValue$i2 !== void 0 ? _inputValue$i2 : '');
      }
    }
    if (maskExpression === 'CPF_CNPJ') {
      this.cpfCnpjError = arr.length !== 11 && arr.length !== 14;
      if (arr.length > 11) {
        // eslint-disable-next-line no-param-reassign
        maskExpression = '00.000.000/0000-00';
      } else {
        // eslint-disable-next-line no-param-reassign
        maskExpression = '000.000.000-00';
      }
    }
    if (maskExpression.startsWith('percent')) {
      if (inputValue.match('[a-z]|[A-Z]') ||
      // eslint-disable-next-line no-useless-escape
      inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._stripToDecimal(inputValue);
        const precision = this.getPrecision(maskExpression);
        // eslint-disable-next-line no-param-reassign
        inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
      }
      if (inputValue.indexOf('.') > 0 && !this.percentage(inputValue.substring(0, inputValue.indexOf('.')))) {
        const base = inputValue.substring(0, inputValue.indexOf('.') - 1);
        // eslint-disable-next-line no-param-reassign
        inputValue = `${base}${inputValue.substring(inputValue.indexOf('.'), inputValue.length)}`;
      }
      if (this.percentage(inputValue)) {
        result = inputValue;
      } else {
        result = inputValue.substring(0, inputValue.length - 1);
      }
    } else if (maskExpression.startsWith('separator')) {
      if (inputValue.match('[wа-яА-Я]') || inputValue.match('[ЁёА-я]') || inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\]:";<>.?/]/) || inputValue.match('[^A-Za-z0-9,]')) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._stripToDecimal(inputValue);
      }
      // eslint-disable-next-line no-param-reassign
      inputValue = inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== this.thousandSeparator && !this._compareOrIncludes(inputValue[1], this.decimalMarker, this.thousandSeparator) && !backspaced ? inputValue.slice(0, inputValue.length - 1) : inputValue;
      if (backspaced) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this._compareOrIncludes(inputValue[inputValue.length - 1], this.decimalMarker, this.thousandSeparator) ? inputValue.slice(0, inputValue.length - 1) : inputValue;
      }
      // TODO: we had different rexexps here for the different cases... but tests dont seam to bother - check this
      //  separator: no COMMA, dot-sep: no SPACE, COMMA OK, comma-sep: no SPACE, COMMA OK
      const thousandSeparatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);
      let invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(thousandSeparatorCharEscaped, '');
      //.replace(decimalMarkerEscaped, '');
      if (Array.isArray(this.decimalMarker)) {
        for (const marker of this.decimalMarker) {
          invalidChars = invalidChars.replace(this._charToRegExpExpression(marker), '');
        }
      } else {
        invalidChars = invalidChars.replace(this._charToRegExpExpression(this.decimalMarker), '');
      }
      const invalidCharRegexp = new RegExp('[' + invalidChars + ']');
      if (inputValue.match(invalidCharRegexp) || inputValue.length === 1 && this._compareOrIncludes(inputValue, this.decimalMarker, this.thousandSeparator)) {
        // eslint-disable-next-line no-param-reassign
        inputValue = inputValue.substring(0, inputValue.length - 1);
      }
      const precision = this.getPrecision(maskExpression);
      // eslint-disable-next-line no-param-reassign
      inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
      const strForSep = inputValue.replace(new RegExp(thousandSeparatorCharEscaped, 'g'), '');
      result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, precision);
      const commaShift = result.indexOf(',') - inputValue.indexOf(',');
      const shiftStep = result.length - inputValue.length;
      if (shiftStep > 0 && result[position] !== ',') {
        backspaceShift = true;
        let _shift = 0;
        do {
          this._shift.add(position + _shift);
          _shift++;
        } while (_shift < shiftStep);
      } else if (commaShift !== 0 && position > 0 && !(result.indexOf(',') >= position && position > 3) || !(result.indexOf('.') >= position && position > 3) && shiftStep <= 0) {
        this._shift.clear();
        backspaceShift = true;
        shift = shiftStep;
        // eslint-disable-next-line no-param-reassign
        position += shiftStep;
        this._shift.add(position);
      } else {
        this._shift.clear();
      }
    } else {
      for (
      // eslint-disable-next-line
      let i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = (_inputArray$i = inputArray[i]) !== null && _inputArray$i !== void 0 ? _inputArray$i : '') {
        var _inputArray$i, _maskExpression$curso, _maskExpression, _maskExpression$curso2, _maskExpression2, _maskExpression$curso3, _maskExpression$curso4, _maskExpression$curso5, _this$maskAvailablePa, _maskExpression$curso6, _this$maskExpression, _this$maskExpression2;
        if (cursor === maskExpression.length) {
          break;
        }
        if (this._checkSymbolMask(inputSymbol, (_maskExpression$curso = maskExpression[cursor]) !== null && _maskExpression$curso !== void 0 ? _maskExpression$curso : '') && maskExpression[cursor + 1] === '?') {
          result += inputSymbol;
          cursor += 2;
        } else if (maskExpression[cursor + 1] === '*' && multi && this._checkSymbolMask(inputSymbol, (_maskExpression = maskExpression[cursor + 2]) !== null && _maskExpression !== void 0 ? _maskExpression : '')) {
          result += inputSymbol;
          cursor += 3;
          multi = false;
        } else if (this._checkSymbolMask(inputSymbol, (_maskExpression$curso2 = maskExpression[cursor]) !== null && _maskExpression$curso2 !== void 0 ? _maskExpression$curso2 : '') && maskExpression[cursor + 1] === '*') {
          result += inputSymbol;
          multi = true;
        } else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, (_maskExpression2 = maskExpression[cursor + 2]) !== null && _maskExpression2 !== void 0 ? _maskExpression2 : '')) {
          result += inputSymbol;
          cursor += 3;
        } else if (this._checkSymbolMask(inputSymbol, (_maskExpression$curso3 = maskExpression[cursor]) !== null && _maskExpression$curso3 !== void 0 ? _maskExpression$curso3 : '')) {
          if (maskExpression[cursor] === 'H') {
            if (Number(inputSymbol) > 2) {
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += '0';
              }
              continue;
            }
          }
          if (maskExpression[cursor] === 'h') {
            if (result === '2' && Number(inputSymbol) > 3) {
              cursor += 1;
              i--;
              continue;
            }
          }
          if (maskExpression[cursor] === 'm') {
            if (Number(inputSymbol) > 5) {
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += '0';
              }
              continue;
            }
          }
          if (maskExpression[cursor] === 's') {
            if (Number(inputSymbol) > 5) {
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += '0';
              }
              continue;
            }
          }
          const daysCount = 31;
          if (maskExpression[cursor] === 'd') {
            if (Number(inputSymbol) > 3 && this.leadZeroDateTime || Number(inputValue.slice(cursor, cursor + 2)) > daysCount || inputValue[cursor + 1] === '/') {
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += '0';
              }
              continue;
            }
          }
          if (maskExpression[cursor] === 'M') {
            const monthsCount = 12;
            // mask without day
            const withoutDays = cursor === 0 && (Number(inputSymbol) > 2 || Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/');
            // day<10 && month<12 for input
            const day1monthInput = inputValue.slice(cursor - 3, cursor - 1).includes('/') && (inputValue[cursor - 2] === '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount && inputValue[cursor] !== '/' || inputValue[cursor] === '/' || inputValue[cursor - 3] === '/' && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount && inputValue[cursor - 1] !== '/' || inputValue[cursor - 1] === '/');
            // 10<day<31 && month<12 for input
            const day2monthInput = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] === '/' && (Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/');
            // day<10 && month<12 for paste whole data
            const day1monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) > daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && !inputValue.slice(cursor - 2, cursor).includes('/') && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount;
            // 10<day<31 && month<12 for paste whole data
            const day2monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] !== '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount;
            if (Number(inputSymbol) > 1 && this.leadZeroDateTime || withoutDays || day1monthInput || day2monthInput || day1monthPaste || day2monthPaste) {
              cursor += 1;
              this._shiftStep(maskExpression, cursor, inputArray.length);
              i--;
              if (this.leadZeroDateTime) {
                result += '0';
              }
              continue;
            }
          }
          result += inputSymbol;
          cursor++;
        } else if (inputSymbol === ' ' && maskExpression[cursor] === ' ') {
          result += inputSymbol;
          cursor++;
        } else if (this.maskSpecialCharacters.indexOf((_maskExpression$curso4 = maskExpression[cursor]) !== null && _maskExpression$curso4 !== void 0 ? _maskExpression$curso4 : '') !== -1) {
          result += maskExpression[cursor];
          cursor++;
          this._shiftStep(maskExpression, cursor, inputArray.length);
          i--;
        } else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 && this.maskAvailablePatterns[(_maskExpression$curso5 = maskExpression[cursor]) !== null && _maskExpression$curso5 !== void 0 ? _maskExpression$curso5 : ''] && (_this$maskAvailablePa = this.maskAvailablePatterns[(_maskExpression$curso6 = maskExpression[cursor]) !== null && _maskExpression$curso6 !== void 0 ? _maskExpression$curso6 : '']) !== null && _this$maskAvailablePa !== void 0 && _this$maskAvailablePa.optional) {
          if (!!inputArray[cursor] && maskExpression !== '099.099.099.099' && maskExpression !== '000.000.000-00' && maskExpression !== '00.000.000/0000-00' && !maskExpression.match(/^9+\.0+$/)) {
            result += inputArray[cursor];
          }
          cursor++;
          i--;
        } else if (this.maskExpression[cursor + 1] === '*' && this._findSpecialChar((_this$maskExpression = this.maskExpression[cursor + 2]) !== null && _this$maskExpression !== void 0 ? _this$maskExpression : '') && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.maskExpression[cursor + 1] === '?' && this._findSpecialChar((_this$maskExpression2 = this.maskExpression[cursor + 2]) !== null && _this$maskExpression2 !== void 0 ? _this$maskExpression2 : '') && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
          cursor += 3;
          result += inputSymbol;
        } else if (this.showMaskTyped && this.maskSpecialCharacters.indexOf(inputSymbol) < 0 && inputSymbol !== this.placeHolderCharacter) {
          stepBack = true;
        }
      }
    }
    if (result.length + 1 === maskExpression.length && this.maskSpecialCharacters.indexOf((_maskExpression3 = maskExpression[maskExpression.length - 1]) !== null && _maskExpression3 !== void 0 ? _maskExpression3 : '') !== -1) {
      result += maskExpression[maskExpression.length - 1];
    }
    let newPosition = position + 1;
    while (this._shift.has(newPosition)) {
      shift++;
      newPosition++;
    }
    let actualShift = justPasted && !maskExpression.startsWith('separator') ? cursor : this._shift.has(position) ? shift : 0;
    if (stepBack) {
      actualShift--;
    }
    cb(actualShift, backspaceShift);
    if (shift < 0) {
      this._shift.clear();
    }
    let onlySpecial = false;
    if (backspaced) {
      onlySpecial = inputArray.every(char => this.maskSpecialCharacters.includes(char));
    }
    let res = `${this.prefix}${onlySpecial ? '' : result}${this.suffix}`;
    if (result.length === 0) {
      res = `${this.prefix}${result}`;
    }
    return res;
  }
  _findSpecialChar(inputSymbol) {
    return this.maskSpecialCharacters.find(val => val === inputSymbol);
  }
  _checkSymbolMask(inputSymbol, maskSymbol) {
    var _ref, _this$maskAvailablePa2, _this$maskAvailablePa3;
    this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
    return (_ref = ((_this$maskAvailablePa2 = this.maskAvailablePatterns[maskSymbol]) === null || _this$maskAvailablePa2 === void 0 ? void 0 : _this$maskAvailablePa2.pattern) && ((_this$maskAvailablePa3 = this.maskAvailablePatterns[maskSymbol]) === null || _this$maskAvailablePa3 === void 0 ? void 0 : _this$maskAvailablePa3.pattern.test(inputSymbol))) !== null && _ref !== void 0 ? _ref : false;
  }
  _stripToDecimal(str) {
    return str.split('').filter((i, idx) => {
      const isDecimalMarker = typeof this.decimalMarker === 'string' ? i === this.decimalMarker :
      // TODO (inepipenko) use utility type
      this.decimalMarker.includes(i);
      return i.match('^-?\\d') || i === this.thousandSeparator || isDecimalMarker || i === '-' && idx === 0 && this.allowNegativeNumbers;
    }).join('');
  }
  _charToRegExpExpression(char) {
    // if (Array.isArray(char)) {
    // 	return char.map((v) => ('[\\^$.|?*+()'.indexOf(v) >= 0 ? `\\${v}` : v)).join('|');
    // }
    if (char) {
      const charsToEscape = '[\\^$.|?*+()';
      return char === ' ' ? '\\s' : charsToEscape.indexOf(char) >= 0 ? `\\${char}` : char;
    }
    return char;
  }
  _shiftStep(maskExpression, cursor, inputLength) {
    const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputLength : cursor;
    this._shift.add(shiftStep + this.prefix.length || 0);
  }
  _compareOrIncludes(value, comparedValue, excludedValue) {
    return Array.isArray(comparedValue) ? comparedValue.filter(v => v !== excludedValue).includes(value) : value === comparedValue;
  }
  _validIP(valuesIP) {
    return !(valuesIP.length === 4 && !valuesIP.some((value, index) => {
      if (valuesIP.length !== index + 1) {
        return value === '' || Number(value) > 255;
      }
      return value === '' || Number(value.substring(0, 3)) > 255;
    }));
  }
}
NgxMaskApplierService.ɵfac = function NgxMaskApplierService_Factory(t) {
  return new (t || NgxMaskApplierService)();
};
NgxMaskApplierService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NgxMaskApplierService,
  factory: NgxMaskApplierService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaskApplierService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();

/**
 * @internal
 */
function _configFactory() {
  const initConfig = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(INITIAL_CONFIG);
  const configValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(NEW_CONFIG);
  return configValue instanceof Function ? {
    ...initConfig,
    ...configValue()
  } : {
    ...initConfig,
    ...configValue
  };
}
function provideNgxMask(configValue) {
  return [{
    provide: NEW_CONFIG,
    useValue: configValue
  }, {
    provide: INITIAL_CONFIG,
    useValue: initialConfig
  }, {
    provide: NGX_MASK_CONFIG,
    useFactory: _configFactory
  }, NgxMaskApplierService];
}
function provideEnvironmentNgxMask(configValue) {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.makeEnvironmentProviders)(provideNgxMask(configValue));
}
class NgxMaskService extends NgxMaskApplierService {
  constructor() {
    super(...arguments);
    this.maskExpression = '';
    this.isNumberValue = false;
    this.placeHolderCharacter = '_';
    this.maskIsShown = '';
    this.selStart = null;
    this.selEnd = null;
    /**
     * Whether we are currently in writeValue function, in this case when applying the mask we don't want to trigger onChange function,
     * since writeValue should be a one way only process of writing the DOM value based on the Angular model value.
     */
    this.writingValue = false;
    this.maskChanged = false;
    this.triggerOnMaskChange = false;
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
    this.onChange = _ => {};
    this.document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT);
    this._config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(NGX_MASK_CONFIG);
    this._elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef);
    this._renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2);
  }
  // eslint-disable-next-line complexity
  applyMask(inputValue, maskExpression, position = 0, justPasted = false, backspaced = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  cb = () => {}) {
    var _inputValue$this$selS;
    if (!maskExpression) {
      return inputValue !== this.actualValue ? this.actualValue : inputValue;
    }
    this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';
    if (this.maskExpression === 'IP' && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(inputValue || '#');
    }
    if (this.maskExpression === 'CPF_CNPJ' && this.showMaskTyped) {
      this.maskIsShown = this.showMaskInInput(inputValue || '#');
    }
    if (!inputValue && this.showMaskTyped) {
      this.formControlResult(this.prefix);
      return this.prefix + this.maskIsShown;
    }
    const getSymbol = !!inputValue && typeof this.selStart === 'number' ? (_inputValue$this$selS = inputValue[this.selStart]) !== null && _inputValue$this$selS !== void 0 ? _inputValue$this$selS : '' : '';
    let newInputValue = '';
    if (this.hiddenInput !== undefined && !this.writingValue) {
      let actualResult = this.actualValue.split('');
      // eslint-disable  @typescript-eslint/no-unused-expressions
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      inputValue !== '' && actualResult.length ? typeof this.selStart === 'number' && typeof this.selEnd === 'number' ? inputValue.length > actualResult.length ? actualResult.splice(this.selStart, 0, getSymbol) : inputValue.length < actualResult.length ? actualResult.length - inputValue.length === 1 ? actualResult.splice(this.selStart - 1, 1) : actualResult.splice(this.selStart, this.selEnd - this.selStart) : null : null : actualResult = [];
      if (this.showMaskTyped) {
        // eslint-disable-next-line no-param-reassign
        inputValue = this.removeMask(inputValue);
      }
      // eslint-enable  @typescript-eslint/no-unused-expressions
      newInputValue = this.actualValue.length && actualResult.length <= inputValue.length ? this.shiftTypedSymbols(actualResult.join('')) : inputValue;
    }
    if (this.showMaskTyped) {
      // eslint-disable-next-line no-param-reassign
      inputValue = this.removeMask(inputValue);
    }
    newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;
    const result = super.applyMask(newInputValue, maskExpression, position, justPasted, backspaced, cb);
    this.actualValue = this.getActualValue(result);
    // handle some separator implications:
    // a.) adjust decimalMarker default (. -> ,) if thousandSeparator is a dot
    if (this.thousandSeparator === '.' && this.decimalMarker === '.') {
      this.decimalMarker = ',';
    }
    // b) remove decimal marker from list of special characters to mask
    if (this.maskExpression.startsWith('separator') && this.dropSpecialCharacters === true) {
      this.maskSpecialCharacters = this.maskSpecialCharacters.filter(item => !this._compareOrIncludes(item, this.decimalMarker, this.thousandSeparator) //item !== this.decimalMarker, // !
      );
    }

    this.formControlResult(result);
    if (!this.showMaskTyped) {
      if (this.hiddenInput) {
        return result && result.length ? this.hideInput(result, this.maskExpression) : result;
      }
      return result;
    }
    const resLen = result.length;
    const prefNmask = this.prefix + this.maskIsShown;
    if (this.maskExpression.includes('H')) {
      const countSkipedSymbol = this._numberSkipedSymbols(result);
      return result + prefNmask.slice(resLen + countSkipedSymbol);
    } else if (this.maskExpression === 'IP' || this.maskExpression === 'CPF_CNPJ') {
      return result + prefNmask;
    }
    return result + prefNmask.slice(resLen);
  }
  // get the number of characters that were shifted
  _numberSkipedSymbols(value) {
    const regex = /(^|\D)(\d\D)/g;
    let match = regex.exec(value);
    let countSkipedSymbol = 0;
    while (match != null) {
      countSkipedSymbol += 1;
      match = regex.exec(value);
    }
    return countSkipedSymbol;
  }
  applyValueChanges(position, justPasted, backspaced,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  cb = () => {}) {
    const formElement = this._elementRef.nativeElement;
    formElement.value = this.applyMask(formElement.value, this.maskExpression, position, justPasted, backspaced, cb);
    if (formElement === this._getActiveElement()) {
      return;
    }
    this.clearIfNotMatchFn();
  }
  hideInput(inputValue, maskExpression) {
    return inputValue.split('').map((curr, index) => {
      var _maskExpression$index, _this$maskAvailablePa4, _maskExpression$index2;
      if (this.maskAvailablePatterns && this.maskAvailablePatterns[(_maskExpression$index = maskExpression[index]) !== null && _maskExpression$index !== void 0 ? _maskExpression$index : ''] && (_this$maskAvailablePa4 = this.maskAvailablePatterns[(_maskExpression$index2 = maskExpression[index]) !== null && _maskExpression$index2 !== void 0 ? _maskExpression$index2 : '']) !== null && _this$maskAvailablePa4 !== void 0 && _this$maskAvailablePa4.symbol) {
        var _this$maskAvailablePa5, _maskExpression$index3;
        return (_this$maskAvailablePa5 = this.maskAvailablePatterns[(_maskExpression$index3 = maskExpression[index]) !== null && _maskExpression$index3 !== void 0 ? _maskExpression$index3 : '']) === null || _this$maskAvailablePa5 === void 0 ? void 0 : _this$maskAvailablePa5.symbol;
      }
      return curr;
    }).join('');
  }
  // this function is not necessary, it checks result against maskExpression
  getActualValue(res) {
    const compare = res.split('').filter((symbol, i) => {
      var _this$maskExpression$;
      const maskChar = (_this$maskExpression$ = this.maskExpression[i]) !== null && _this$maskExpression$ !== void 0 ? _this$maskExpression$ : '';
      return this._checkSymbolMask(symbol, maskChar) || this.maskSpecialCharacters.includes(maskChar) && symbol === maskChar;
    });
    if (compare.join('') === res) {
      return compare.join('');
    }
    return res;
  }
  shiftTypedSymbols(inputValue) {
    let symbolToReplace = '';
    const newInputValue = inputValue && inputValue.split('').map((currSymbol, index) => {
      var _inputValue2;
      if (this.maskSpecialCharacters.includes((_inputValue2 = inputValue[index + 1]) !== null && _inputValue2 !== void 0 ? _inputValue2 : '') && inputValue[index + 1] !== this.maskExpression[index + 1]) {
        symbolToReplace = currSymbol;
        return inputValue[index + 1];
      }
      if (symbolToReplace.length) {
        const replaceSymbol = symbolToReplace;
        symbolToReplace = '';
        return replaceSymbol;
      }
      return currSymbol;
    }) || [];
    return newInputValue.join('');
  }
  /**
   * Convert number value to string
   * 3.1415 -> '3.1415'
   * 1e-7 -> '0.0000001'
   */
  numberToString(value) {
    if (!value && value !== 0) {
      return String(value);
    }
    return Number(value).toLocaleString('fullwide', {
      useGrouping: false,
      maximumFractionDigits: 20
    });
  }
  showMaskInInput(inputVal) {
    if (this.showMaskTyped && !!this.shownMaskExpression) {
      if (this.maskExpression.length !== this.shownMaskExpression.length) {
        throw new Error('Mask expression must match mask placeholder length');
      } else {
        return this.shownMaskExpression;
      }
    } else if (this.showMaskTyped) {
      if (inputVal) {
        if (this.maskExpression === 'IP') {
          return this._checkForIp(inputVal);
        }
        if (this.maskExpression === 'CPF_CNPJ') {
          return this._checkForCpfCnpj(inputVal);
        }
      }
      return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
    }
    return '';
  }
  clearIfNotMatchFn() {
    const formElement = this._elementRef.nativeElement;
    if (this.clearIfNotMatch && this.prefix.length + this.maskExpression.length + this.suffix.length !== formElement.value.replace(/_/g, '').length) {
      this.formElementProperty = ['value', ''];
      this.applyMask(formElement.value, this.maskExpression);
    }
  }
  set formElementProperty([name, value]) {
    Promise.resolve().then(() => this._renderer.setProperty(this._elementRef.nativeElement, name, value));
  }
  checkSpecialCharAmount(mask) {
    const chars = mask.split('').filter(item => this._findSpecialChar(item));
    return chars.length;
  }
  removeMask(inputValue) {
    return this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.maskSpecialCharacters.concat('_').concat(this.placeHolderCharacter));
  }
  _checkForIp(inputVal) {
    if (inputVal === '#') {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    const arr = [];
    for (let i = 0; i < inputVal.length; i++) {
      var _inputVal$i;
      const value = (_inputVal$i = inputVal[i]) !== null && _inputVal$i !== void 0 ? _inputVal$i : '';
      if (!value) {
        continue;
      }
      if (value.match('\\d')) {
        arr.push(value);
      }
    }
    if (arr.length <= 3) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    if (arr.length > 3 && arr.length <= 6) {
      return `${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
    }
    if (arr.length > 6 && arr.length <= 9) {
      return this.placeHolderCharacter;
    }
    if (arr.length > 9 && arr.length <= 12) {
      return '';
    }
    return '';
  }
  _checkForCpfCnpj(inputVal) {
    const cpf = `${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
    const cnpj = `${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}` + `-${this.placeHolderCharacter}${this.placeHolderCharacter}`;
    if (inputVal === '#') {
      return cpf;
    }
    const arr = [];
    for (let i = 0; i < inputVal.length; i++) {
      var _inputVal$i2;
      const value = (_inputVal$i2 = inputVal[i]) !== null && _inputVal$i2 !== void 0 ? _inputVal$i2 : '';
      if (!value) {
        continue;
      }
      if (value.match('\\d')) {
        arr.push(value);
      }
    }
    if (arr.length <= 3) {
      return cpf.slice(arr.length, cpf.length);
    }
    if (arr.length > 3 && arr.length <= 6) {
      return cpf.slice(arr.length + 1, cpf.length);
    }
    if (arr.length > 6 && arr.length <= 9) {
      return cpf.slice(arr.length + 2, cpf.length);
    }
    if (arr.length > 9 && arr.length < 11) {
      return cpf.slice(arr.length + 3, cpf.length);
    }
    if (arr.length === 11) {
      return '';
    }
    if (arr.length === 12) {
      if (inputVal.length === 17) {
        return cnpj.slice(16, cnpj.length);
      }
      return cnpj.slice(15, cnpj.length);
    }
    if (arr.length > 12 && arr.length <= 14) {
      return cnpj.slice(arr.length + 4, cnpj.length);
    }
    return '';
  }
  /**
   * Recursively determine the current active element by navigating the Shadow DOM until the Active Element is found.
   */
  _getActiveElement(document = this.document) {
    var _document$activeEleme;
    const shadowRootEl = document === null || document === void 0 ? void 0 : (_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 ? void 0 : _document$activeEleme.shadowRoot;
    if (!(shadowRootEl !== null && shadowRootEl !== void 0 && shadowRootEl.activeElement)) {
      return document.activeElement;
    } else {
      return this._getActiveElement(shadowRootEl);
    }
  }
  /**
   * Propogates the input value back to the Angular model by triggering the onChange function. It won't do this if writingValue
   * is true. If that is true it means we are currently in the writeValue function, which is supposed to only update the actual
   * DOM element based on the Angular model value. It should be a one way process, i.e. writeValue should not be modifying the Angular
   * model value too. Therefore, we don't trigger onChange in this scenario.
   * @param inputValue the current form input value
   */
  formControlResult(inputValue) {
    if (this.writingValue || !this.triggerOnMaskChange && this.maskChanged) {
      this.maskChanged = false;
      return;
    }
    if (Array.isArray(this.dropSpecialCharacters)) {
      this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters)));
    } else if (this.dropSpecialCharacters) {
      this.onChange(this._toNumber(this._checkSymbols(inputValue)));
    } else {
      this.onChange(this._removeSuffix(inputValue));
    }
  }
  _toNumber(value) {
    if (!this.isNumberValue || value === '') {
      return value;
    }
    const num = Number(value);
    return Number.isNaN(num) ? value : num;
  }
  _removeMask(value, specialCharactersForRemove) {
    return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
  }
  _removePrefix(value) {
    if (!this.prefix) {
      return value;
    }
    return value ? value.replace(this.prefix, '') : value;
  }
  _removeSuffix(value) {
    if (!this.suffix) {
      return value;
    }
    return value ? value.replace(this.suffix, '') : value;
  }
  _retrieveSeparatorValue(result) {
    return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters);
  }
  _regExpForRemove(specialCharactersForRemove) {
    return new RegExp(specialCharactersForRemove.map(item => `\\${item}`).join('|'), 'gi');
  }
  _replaceDecimalMarkerToDot(value) {
    const markers = Array.isArray(this.decimalMarker) ? this.decimalMarker : [this.decimalMarker];
    return value.replace(this._regExpForRemove(markers), '.');
  }
  _checkSymbols(result) {
    if (result === '') {
      return result;
    }
    const separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);
    const separatorValue = this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(result));
    if (!this.isNumberValue) {
      return separatorValue;
    }
    if (separatorPrecision) {
      if (result === this.decimalMarker) {
        return null;
      }
      return this._checkPrecision(this.maskExpression, separatorValue);
    } else {
      return Number(separatorValue);
    }
  }
  // TODO should think about helpers or separting decimal precision to own property
  _retrieveSeparatorPrecision(maskExpretion) {
    const matcher = maskExpretion.match(new RegExp(`^separator\\.([^d]*)`));
    return matcher ? Number(matcher[1]) : null;
  }
  _checkPrecision(separatorExpression, separatorValue) {
    if (separatorExpression.indexOf('2') > 0) {
      return Number(separatorValue).toFixed(2);
    }
    return Number(separatorValue);
  }
}
NgxMaskService.ɵfac = /* @__PURE__ */function () {
  let ɵNgxMaskService_BaseFactory;
  return function NgxMaskService_Factory(t) {
    return (ɵNgxMaskService_BaseFactory || (ɵNgxMaskService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](NgxMaskService)))(t || NgxMaskService);
  };
}();
NgxMaskService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NgxMaskService,
  factory: NgxMaskService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaskService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
class NgxMaskDirective {
  constructor() {
    // eslint-disable-next-line @angular-eslint/no-input-rename
    this.maskExpression = '';
    this.specialCharacters = [];
    this.patterns = {};
    this.prefix = '';
    this.suffix = '';
    this.thousandSeparator = ' ';
    this.decimalMarker = '.';
    this.dropSpecialCharacters = null;
    this.hiddenInput = null;
    this.showMaskTyped = null;
    this.placeHolderCharacter = null;
    this.shownMaskExpression = null;
    this.showTemplate = null;
    this.clearIfNotMatch = null;
    this.validation = null;
    this.separatorLimit = null;
    this.allowNegativeNumbers = null;
    this.leadZeroDateTime = null;
    this.triggerOnMaskChange = null;
    this.maskFilled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._maskValue = '';
    this._position = null;
    this._maskExpressionArray = [];
    this._justPasted = false;
    this.document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT);
    this._maskService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(NgxMaskService);
    this._config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(NGX_MASK_CONFIG);
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
    this.onChange = _ => {};
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    this.onTouch = () => {};
  }
  ngOnChanges(changes) {
    const {
      maskExpression,
      specialCharacters,
      patterns,
      prefix,
      suffix,
      thousandSeparator,
      decimalMarker,
      dropSpecialCharacters,
      hiddenInput,
      showMaskTyped,
      placeHolderCharacter,
      shownMaskExpression,
      showTemplate,
      clearIfNotMatch,
      validation,
      separatorLimit,
      allowNegativeNumbers,
      leadZeroDateTime,
      triggerOnMaskChange
    } = changes;
    if (maskExpression) {
      if (maskExpression.currentValue !== maskExpression.previousValue && !maskExpression.firstChange) {
        this._maskService.maskChanged = true;
      }
      if (maskExpression.currentValue && maskExpression.currentValue.split('||').length > 1) {
        this._maskExpressionArray = maskExpression.currentValue.split('||').sort((a, b) => {
          return a.length - b.length;
        });
        this._setMask();
      } else {
        this._maskExpressionArray = [];
        this._maskValue = maskExpression.currentValue || '';
        this._maskService.maskExpression = this._maskValue;
      }
    }
    if (specialCharacters) {
      if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
        return;
      } else {
        this._maskService.maskSpecialCharacters = specialCharacters.currentValue || [];
      }
    }
    // Only overwrite the mask available patterns if a pattern has actually been passed in
    if (patterns && patterns.currentValue) {
      this._maskService.maskAvailablePatterns = patterns.currentValue;
    }
    if (prefix) {
      this._maskService.prefix = prefix.currentValue;
    }
    if (suffix) {
      this._maskService.suffix = suffix.currentValue;
    }
    if (thousandSeparator) {
      this._maskService.thousandSeparator = thousandSeparator.currentValue;
    }
    if (decimalMarker) {
      this._maskService.decimalMarker = decimalMarker.currentValue;
    }
    if (dropSpecialCharacters) {
      this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
    }
    if (hiddenInput) {
      this._maskService.hiddenInput = hiddenInput.currentValue;
    }
    if (showMaskTyped) {
      this._maskService.showMaskTyped = showMaskTyped.currentValue;
    }
    if (placeHolderCharacter) {
      this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
    }
    if (shownMaskExpression) {
      this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
    }
    if (showTemplate) {
      this._maskService.showTemplate = showTemplate.currentValue;
    }
    if (clearIfNotMatch) {
      this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
    }
    if (validation) {
      this._maskService.validation = validation.currentValue;
    }
    if (separatorLimit) {
      this._maskService.separatorLimit = separatorLimit.currentValue;
    }
    if (allowNegativeNumbers) {
      this._maskService.allowNegativeNumbers = allowNegativeNumbers.currentValue;
      if (this._maskService.allowNegativeNumbers) {
        this._maskService.maskSpecialCharacters = this._maskService.maskSpecialCharacters.filter(c => c !== '-');
      }
    }
    if (leadZeroDateTime) {
      this._maskService.leadZeroDateTime = leadZeroDateTime.currentValue;
    }
    if (triggerOnMaskChange) {
      this._maskService.triggerOnMaskChange = triggerOnMaskChange.currentValue;
    }
    this._applyMask();
  }
  // eslint-disable-next-line complexity
  validate({
    value
  }) {
    if (!this._maskService.validation || !this._maskValue) {
      return null;
    }
    if (this._maskService.ipError) {
      return this._createValidationError(value);
    }
    if (this._maskService.cpfCnpjError) {
      return this._createValidationError(value);
    }
    if (this._maskValue.startsWith('separator')) {
      return null;
    }
    if (withoutValidation.includes(this._maskValue)) {
      return null;
    }
    if (this._maskService.clearIfNotMatch) {
      return null;
    }
    if (timeMasks.includes(this._maskValue)) {
      return this._validateTime(value);
    }
    if (value && value.toString().length >= 1) {
      var _this$_maskValue$spli;
      let counterOfOpt = 0;
      for (const key in this._maskService.maskAvailablePatterns) {
        var _this$_maskService$ma;
        if ((_this$_maskService$ma = this._maskService.maskAvailablePatterns[key]) !== null && _this$_maskService$ma !== void 0 && _this$_maskService$ma.optional) {
          if (this._maskValue.indexOf(key) !== this._maskValue.lastIndexOf(key)) {
            const opt = this._maskValue.split('').filter(i => i === key).join('');
            counterOfOpt += opt.length;
          } else if (this._maskValue.indexOf(key) !== -1) {
            counterOfOpt++;
          }
          if (this._maskValue.indexOf(key) !== -1 && value.toString().length >= this._maskValue.indexOf(key)) {
            return null;
          }
          if (counterOfOpt === this._maskValue.length) {
            return null;
          }
        }
      }
      if (this._maskValue.indexOf('{') === 1 && value.toString().length === this._maskValue.length + Number(((_this$_maskValue$spli = this._maskValue.split('{')[1]) !== null && _this$_maskValue$spli !== void 0 ? _this$_maskValue$spli : '').split('}')[0]) - 4) {
        return null;
      }
      if (this._maskValue.indexOf('*') === 1 || this._maskValue.indexOf('?') === 1) {
        return null;
      } else if (this._maskValue.indexOf('*') > 1 && value.toString().length < this._maskValue.indexOf('*') || this._maskValue.indexOf('?') > 1 && value.toString().length < this._maskValue.indexOf('?') || this._maskValue.indexOf('{') === 1) {
        return this._createValidationError(value);
      }
      if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
        const length = this._maskService.dropSpecialCharacters ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - counterOfOpt : this._maskValue.length - counterOfOpt;
        if (value.toString().length < length) {
          return this._createValidationError(value);
        }
      }
    }
    if (value) {
      this.maskFilled.emit();
      return null;
    }
    return null;
  }
  onPaste() {
    this._justPasted = true;
  }
  onModelChange(value) {
    // on form reset we need to update the actualValue
    if ((value === '' || value === null || value === undefined) && this._maskService.actualValue) {
      this._maskService.actualValue = this._maskService.getActualValue('');
    }
  }
  onInput(e) {
    const el = e.target;
    this._inputValue = el.value;
    this._setMask();
    if (!this._maskValue) {
      this.onChange(el.value);
      return;
    }
    let position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
    let caretShift = 0;
    let backspaceShift = false;
    this._maskService.applyValueChanges(position, this._justPasted, this._code === 'Backspace' || this._code === 'Delete', (shift, _backspaceShift) => {
      this._justPasted = false;
      caretShift = shift;
      backspaceShift = _backspaceShift;
    });
    // only set the selection if the element is active
    if (this._getActiveElement() !== el) {
      return;
    }
    // update position after applyValueChanges to prevent cursor on wrong position when it has an array of maskExpression
    if (this._maskExpressionArray.length) {
      position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
    }
    this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
    let positionToApply = this._position ? this._inputValue.length + position + caretShift : position + (this._code === 'Backspace' && !backspaceShift ? 0 : caretShift);
    if (positionToApply > this._getActualInputLength()) {
      positionToApply = this._getActualInputLength();
    }
    if (positionToApply < 0) {
      positionToApply = 0;
    }
    el.setSelectionRange(positionToApply, positionToApply);
    this._position = null;
  }
  onBlur() {
    if (this._maskValue) {
      this._maskService.clearIfNotMatchFn();
    }
    this.onTouch();
  }
  onClick(e) {
    if (!this._maskValue) {
      return;
    }
    const el = e.target;
    const posStart = 0;
    const posEnd = 0;
    if (el !== null && el.selectionStart !== null && el.selectionStart === el.selectionEnd && el.selectionStart > this._maskService.prefix.length &&
    // eslint-disable-next-line
    e.keyCode !== 38) {
      if (this._maskService.showMaskTyped) {
        // We are showing the mask in the input
        this._maskService.maskIsShown = this._maskService.showMaskInInput();
        if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
          // the input ONLY contains the mask, so position the cursor at the start
          el.focus();
          el.setSelectionRange(posStart, posEnd);
        } else {
          // the input contains some characters already
          if (el.selectionStart > this._maskService.actualValue.length) {
            // if the user clicked beyond our value's length, position the cursor at the end of our value
            el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
          }
        }
      }
    }
    const nextValue = el && (!el.value || el.value === this._maskService.prefix ? this._maskService.prefix + this._maskService.maskIsShown : el.value);
    /** Fix of cursor position jumping to end in most browsers no matter where cursor is inserted onFocus */
    if (el && el.value !== nextValue) {
      el.value = nextValue;
    }
    /** fix of cursor position with prefix when mouse click occur */
    if (el && (el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
      el.selectionStart = this._maskService.prefix.length;
      return;
    }
    /** select only inserted text */
    if (el && el.selectionEnd > this._getActualInputLength()) {
      el.selectionEnd = this._getActualInputLength();
    }
  }
  // eslint-disable-next-line complexity
  onKeyDown(e) {
    if (!this._maskValue) {
      return;
    }
    this._code = e.code ? e.code : e.key;
    const el = e.target;
    this._inputValue = el.value;
    this._setMask();
    if (e.keyCode === 38) {
      e.preventDefault();
    }
    if (e.keyCode === 37 || e.keyCode === 8 || e.keyCode === 46) {
      if (e.keyCode === 8 && el.value.length === 0) {
        el.selectionStart = el.selectionEnd;
      }
      if (e.keyCode === 8 && el.selectionStart !== 0) {
        var _this$specialCharacte;
        // If specialChars is false, (shouldn't ever happen) then set to the defaults
        this.specialCharacters = (_this$specialCharacte = this.specialCharacters) !== null && _this$specialCharacte !== void 0 && _this$specialCharacte.length ? this.specialCharacters : this._config.specialCharacters;
        if (this.prefix.length > 1 && el.selectionStart <= this.prefix.length) {
          el.setSelectionRange(this.prefix.length, el.selectionEnd);
        } else {
          if (this._inputValue.length !== el.selectionStart && el.selectionStart !== 1) {
            while (this.specialCharacters.includes(((_this$_inputValue = this._inputValue[el.selectionStart - 1]) !== null && _this$_inputValue !== void 0 ? _this$_inputValue : '').toString()) && (this.prefix.length >= 1 && el.selectionStart > this.prefix.length || this.prefix.length === 0)) {
              var _this$_inputValue;
              el.setSelectionRange(el.selectionStart - 1, el.selectionEnd);
            }
          }
        }
      }
      this.checkSelectionOnDeletion(el);
      if (this._maskService.prefix.length && el.selectionStart <= this._maskService.prefix.length && el.selectionEnd <= this._maskService.prefix.length) {
        e.preventDefault();
      }
      const cursorStart = el.selectionStart;
      if (e.keyCode === 8 && !el.readOnly && cursorStart === 0 && el.selectionEnd === el.value.length && el.value.length !== 0) {
        this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;
        this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
      }
    }
    if (!!this.suffix && this.suffix.length > 1 && this._inputValue.length - this.suffix.length < el.selectionStart) {
      el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
    } else if (e.keyCode === 65 && e.ctrlKey || e.keyCode === 65 && e.metaKey // Cmd + A (Mac)
    ) {
      el.setSelectionRange(0, this._getActualInputLength());
      e.preventDefault();
    }
    this._maskService.selStart = el.selectionStart;
    this._maskService.selEnd = el.selectionEnd;
  }
  /** It writes the value in the input */
  writeValue(inputValue) {
    var _this = this;
    return (0,_Users_erisveltonlima_Desktop_criancaFeliz_criancaFeliz_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof inputValue === 'object' && inputValue !== null && 'value' in inputValue) {
        if ('disable' in inputValue) {
          _this.setDisabledState(Boolean(inputValue.disable));
        }
        // eslint-disable-next-line no-param-reassign
        inputValue = inputValue.value;
      }
      if (typeof inputValue === 'number' || _this._maskValue.startsWith('separator')) {
        // eslint-disable-next-line no-param-reassign
        inputValue = _this._maskService.numberToString(inputValue);
        if (!Array.isArray(_this.decimalMarker)) {
          // eslint-disable-next-line no-param-reassign
          inputValue = _this.decimalMarker !== '.' ? inputValue.replace('.', _this.decimalMarker) : inputValue;
        }
        _this._maskService.isNumberValue = true;
      }
      if (typeof inputValue !== 'string') {
        // eslint-disable-next-line no-param-reassign
        inputValue = '';
      }
      _this._inputValue = inputValue;
      _this._setMask();
      if (inputValue && _this._maskService.maskExpression || _this._maskService.maskExpression && (_this._maskService.prefix || _this._maskService.showMaskTyped)) {
        // Let the service we know we are writing value so that triggering onChange function won't happen during applyMask
        _this._maskService.writingValue = true;
        _this._maskService.formElementProperty = ['value', _this._maskService.applyMask(inputValue, _this._maskService.maskExpression)];
        // Let the service know we've finished writing value
        _this._maskService.writingValue = false;
      } else {
        _this._maskService.formElementProperty = ['value', inputValue];
      }
      _this._inputValue = inputValue;
    })();
  }
  registerOnChange(fn) {
    this._maskService.onChange = this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  _getActiveElement(document = this.document) {
    var _document$activeEleme2;
    const shadowRootEl = document === null || document === void 0 ? void 0 : (_document$activeEleme2 = document.activeElement) === null || _document$activeEleme2 === void 0 ? void 0 : _document$activeEleme2.shadowRoot;
    if (!(shadowRootEl !== null && shadowRootEl !== void 0 && shadowRootEl.activeElement)) {
      return document.activeElement;
    } else {
      return this._getActiveElement(shadowRootEl);
    }
  }
  checkSelectionOnDeletion(el) {
    el.selectionStart = Math.min(Math.max(this.prefix.length, el.selectionStart), this._inputValue.length - this.suffix.length);
    el.selectionEnd = Math.min(Math.max(this.prefix.length, el.selectionEnd), this._inputValue.length - this.suffix.length);
  }
  /** It disables the input element */
  setDisabledState(isDisabled) {
    this._maskService.formElementProperty = ['disabled', isDisabled];
  }
  _repeatPatternSymbols(maskExp) {
    return maskExp.match(/{[0-9]+}/) && maskExp.split('').reduce((accum, currVal, index) => {
      this._start = currVal === '{' ? index : this._start;
      if (currVal !== '}') {
        return this._maskService._findSpecialChar(currVal) ? accum + currVal : accum;
      }
      this._end = index;
      const repeatNumber = Number(maskExp.slice(this._start + 1, this._end));
      const replaceWith = new Array(repeatNumber + 1).join(maskExp[this._start - 1]);
      return accum + replaceWith;
    }, '') || maskExp;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _applyMask() {
    this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '');
    this._maskService.formElementProperty = ['value', this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)];
  }
  _validateTime(value) {
    var _value;
    const rowMaskLen = this._maskValue.split('').filter(s => s !== ':').length;
    if (!value) {
      return null; // Don't validate empty values to allow for optional form control
    }

    if (+((_value = value[value.length - 1]) !== null && _value !== void 0 ? _value : -1) === 0 && value.length < rowMaskLen || value.length <= rowMaskLen - 2) {
      return this._createValidationError(value);
    }
    return null;
  }
  _getActualInputLength() {
    return this._maskService.actualValue.length || this._maskService.actualValue.length + this._maskService.prefix.length;
  }
  _createValidationError(actualValue) {
    return {
      mask: {
        requiredMask: this._maskValue,
        actualValue
      }
    };
  }
  _setMask() {
    if (this._maskExpressionArray.length > 0) {
      this._maskExpressionArray.some(mask => {
        var _this$_maskService$re, _this$_maskService$re2;
        const test = ((_this$_maskService$re = this._maskService.removeMask(this._inputValue)) === null || _this$_maskService$re === void 0 ? void 0 : _this$_maskService$re.length) <= ((_this$_maskService$re2 = this._maskService.removeMask(mask)) === null || _this$_maskService$re2 === void 0 ? void 0 : _this$_maskService$re2.length);
        if (this._inputValue && test) {
          this._maskValue = mask;
          this.maskExpression = mask;
          this._maskService.maskExpression = mask;
          return test;
        } else {
          var _this$_maskExpression;
          const expression = (_this$_maskExpression = this._maskExpressionArray[this._maskExpressionArray.length - 1]) !== null && _this$_maskExpression !== void 0 ? _this$_maskExpression : '';
          this._maskValue = this.maskExpression = this._maskService.maskExpression = expression;
        }
      });
    }
  }
}
NgxMaskDirective.ɵfac = function NgxMaskDirective_Factory(t) {
  return new (t || NgxMaskDirective)();
};
NgxMaskDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: NgxMaskDirective,
  selectors: [["input", "mask", ""], ["textarea", "mask", ""]],
  hostBindings: function NgxMaskDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("paste", function NgxMaskDirective_paste_HostBindingHandler() {
        return ctx.onPaste();
      })("ngModelChange", function NgxMaskDirective_ngModelChange_HostBindingHandler($event) {
        return ctx.onModelChange($event);
      })("input", function NgxMaskDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      })("blur", function NgxMaskDirective_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("click", function NgxMaskDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown", function NgxMaskDirective_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    maskExpression: ["mask", "maskExpression"],
    specialCharacters: "specialCharacters",
    patterns: "patterns",
    prefix: "prefix",
    suffix: "suffix",
    thousandSeparator: "thousandSeparator",
    decimalMarker: "decimalMarker",
    dropSpecialCharacters: "dropSpecialCharacters",
    hiddenInput: "hiddenInput",
    showMaskTyped: "showMaskTyped",
    placeHolderCharacter: "placeHolderCharacter",
    shownMaskExpression: "shownMaskExpression",
    showTemplate: "showTemplate",
    clearIfNotMatch: "clearIfNotMatch",
    validation: "validation",
    separatorLimit: "separatorLimit",
    allowNegativeNumbers: "allowNegativeNumbers",
    leadZeroDateTime: "leadZeroDateTime",
    triggerOnMaskChange: "triggerOnMaskChange"
  },
  outputs: {
    maskFilled: "maskFilled"
  },
  exportAs: ["mask", "ngxMask"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
    useExisting: NgxMaskDirective,
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
    useExisting: NgxMaskDirective,
    multi: true
  }, NgxMaskService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaskDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'input[mask], textarea[mask]',
      standalone: true,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: NgxMaskDirective,
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
        useExisting: NgxMaskDirective,
        multi: true
      }, NgxMaskService],
      exportAs: 'mask,ngxMask'
    }]
  }], null, {
    maskExpression: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['mask']
    }],
    specialCharacters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    patterns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    prefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    thousandSeparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    decimalMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    dropSpecialCharacters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    hiddenInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showMaskTyped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    placeHolderCharacter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    shownMaskExpression: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    clearIfNotMatch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    validation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    separatorLimit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    allowNegativeNumbers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    leadZeroDateTime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    triggerOnMaskChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maskFilled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    onPaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['paste']
    }],
    onModelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['ngModelChange', ['$event']]
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['input', ['$event']]
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['blur']
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['click', ['$event']]
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class NgxMaskPipe {
  //TODO(inepipepnko): need use inject fn but problem with error in test
  constructor(_maskService) {
    this._maskService = _maskService;
  }
  transform(value, mask, thousandSeparator = null) {
    if (!value && typeof value !== 'number') {
      return '';
    }
    if (thousandSeparator) {
      this._maskService.thousandSeparator = thousandSeparator;
    }
    if (typeof mask === 'string') {
      return this._maskService.applyMask(`${value}`, mask);
    }
    return this._maskService.applyMaskWithPattern(`${value}`, mask);
  }
}
NgxMaskPipe.ɵfac = function NgxMaskPipe_Factory(t) {
  return new (t || NgxMaskPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxMaskApplierService, 16));
};
NgxMaskPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "mask",
  type: NgxMaskPipe,
  pure: true,
  standalone: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaskPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
    args: [{
      name: 'mask',
      pure: true,
      standalone: true
    }]
  }], function () {
    return [{
      type: NgxMaskApplierService
    }];
  }, null);
})();
const commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
(function () {
  if (!commonjsGlobal.KeyboardEvent) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    commonjsGlobal.KeyboardEvent = function (_eventType, _init) {};
  }
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map