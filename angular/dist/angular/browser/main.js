"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [{
  path: "product",
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/product-page/product-page.module */ 3882)).then(m => m.ProductPageModule)
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'angular';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_product_page_product_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/product-page/product-page.module */ 3882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/product.service */ 5366);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_service_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule.withServerTransition({
      appId: 'serverApp'
    }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _pages_product_page_product_page_module__WEBPACK_IMPORTED_MODULE_2__.ProductPageModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.EffectsModule.forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__.StoreDevtoolsModule.instrument({
      maxAge: 25
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _pages_product_page_product_page_module__WEBPACK_IMPORTED_MODULE_2__.ProductPageModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__.StoreDevtoolsModule]
  });
})();

/***/ }),

/***/ 932:
/*!****************************************!*\
  !*** ./src/app/facade/store.facade.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreFacade": () => (/* binding */ StoreFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_product_product_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/product/product.selectors */ 5113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class StoreFacade {
  constructor(store) {
    this.store = store;
    this.getProducts$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.select)(_store_product_product_selectors__WEBPACK_IMPORTED_MODULE_0__.selectAllProducts));
  }
  static #_ = this.ɵfac = function StoreFacade_Factory(t) {
    return new (t || StoreFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: StoreFacade,
    factory: StoreFacade.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 4206:
/*!***********************************!*\
  !*** ./src/app/models/Product.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapToProduct": () => (/* binding */ mapToProduct),
/* harmony export */   "mapToProducts": () => (/* binding */ mapToProducts)
/* harmony export */ });
function mapToProduct(res) {
  return {
    id: res.id,
    name: res.name,
    price: {
      amount: res.price,
      currency: res.currency
    }
  };
}
function mapToProducts(res) {
  return res.map(p => mapToProduct(p));
}

/***/ }),

/***/ 864:
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-page/product-list/product-list.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ProductListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);
  }
}
class ProductListComponent {
  constructor() {
    this.products = null;
  }
  static #_ = this.ɵfac = function ProductListComponent_Factory(t) {
    return new (t || ProductListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductListComponent,
    selectors: [["app-product-list"]],
    inputs: {
      products: "products"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"]],
    template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductListComponent_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6768:
/*!**************************************************************!*\
  !*** ./src/app/pages/product-page/product-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageComponent": () => (/* binding */ ProductPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_store_product_product_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/product/product.actions */ 1243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_facade_store_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/facade/store.facade */ 932);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ 864);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






class ProductPageComponent {
  constructor(storeFacade, store) {
    this.storeFacade = storeFacade;
    this.store = store;
    this.productList$ = this.storeFacade.getProducts$;
  }
  ngOnInit() {
    this.store.dispatch((0,src_app_store_product_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProducts)());
  }
  static #_ = this.ɵfac = function ProductPageComponent_Factory(t) {
    return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_facade_store_facade__WEBPACK_IMPORTED_MODULE_1__.StoreFacade), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProductPageComponent,
    selectors: [["app-product-page"]],
    decls: 2,
    vars: 3,
    consts: [[3, "products"]],
    template: function ProductPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-product-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx.productList$));
      }
    },
    dependencies: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3882:
/*!***********************************************************!*\
  !*** ./src/app/pages/product-page/product-page.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageModule": () => (/* binding */ ProductPageModule)
/* harmony export */ });
/* harmony import */ var _product_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-page.component */ 6768);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ 864);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var src_app_store_product_product_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/product/product.reducer */ 2095);
/* harmony import */ var src_app_store_product_product_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/product/product.effects */ 1795);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);












const productPageRoutes = [{
  path: "**",
  component: _product_page_component__WEBPACK_IMPORTED_MODULE_0__.ProductPageComponent
}];
class ProductPageModule {
  static #_ = this.ɵfac = function ProductPageModule_Factory(t) {
    return new (t || ProductPageModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ProductPageModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(productPageRoutes), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreModule.forFeature("product", src_app_store_product_product_reducer__WEBPACK_IMPORTED_MODULE_2__.productReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsModule.forFeature([src_app_store_product_product_effects__WEBPACK_IMPORTED_MODULE_3__.ProductEffects]), _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProductPageModule, {
    declarations: [_product_page_component__WEBPACK_IMPORTED_MODULE_0__.ProductPageComponent, _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsFeatureModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
  });
})();

/***/ }),

/***/ 5366:
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Product */ 4206);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ProductService {
  constructor(http) {
    this.http = http;
  }
  getProducts() {
    return this.http.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => (0,_models_Product__WEBPACK_IMPORTED_MODULE_0__.mapToProducts)(res)));
  }
  static #_ = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac
  });
}

/***/ }),

/***/ 1243:
/*!**************************************************!*\
  !*** ./src/app/store/product/product.actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadProducts": () => (/* binding */ loadProducts),
/* harmony export */   "loadProductsFail": () => (/* binding */ loadProductsFail),
/* harmony export */   "loadProductsSuccess": () => (/* binding */ loadProductsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const loadProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Products Internal] Load Products");
const loadProductsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Products API] Load Products Fail", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadProductsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Products API] Load Products Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 1795:
/*!**************************************************!*\
  !*** ./src/app/store/product/product.effects.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductEffects": () => (/* binding */ ProductEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/of */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _product_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.actions */ 1243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/product.service */ 5366);







class ProductEffects {
  constructor(actions$, productService) {
    this.actions$ = actions$;
    this.productService = productService;
    this.loadProducts$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProducts), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.productService.getProducts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(products => (0,_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductsSuccess)({
      products
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__.of)((0,_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductsFail)({
      error
    })))))));
  }
  static #_ = this.ɵfac = function ProductEffects_Factory(t) {
    return new (t || ProductEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_service_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: ProductEffects,
    factory: ProductEffects.ɵfac
  });
}

/***/ }),

/***/ 2095:
/*!**************************************************!*\
  !*** ./src/app/store/product/product.reducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productAdapter": () => (/* binding */ productAdapter),
/* harmony export */   "productReducer": () => (/* binding */ productReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 1904);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _product_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.actions */ 1243);



const productAdapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
  selectId: product => product.id
});
const initialState = productAdapter.getInitialState({
  loading: false,
  error: undefined
});
const productReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProducts, (state, _) => {
  return {
    ...state,
    loading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductsSuccess, (state, action) => {
  return {
    ...productAdapter.setAll(action.products, state),
    loading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductsFail, (state, action) => {
  return {
    ...state,
    error: action.error
  };
}));

/***/ }),

/***/ 5113:
/*!****************************************************!*\
  !*** ./src/app/store/product/product.selectors.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAllProducts": () => (/* binding */ selectAllProducts),
/* harmony export */   "selectProductState": () => (/* binding */ selectProductState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.reducer */ 2095);


const selectProductState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)("product");
const selectAllProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectProductState, _product_reducer__WEBPACK_IMPORTED_MODULE_0__.productAdapter.getSelectors().selectAll);

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map