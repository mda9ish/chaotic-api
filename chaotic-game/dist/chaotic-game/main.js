(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n\n<!-- TODO: GitHub Repo Link -->\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/documentation/documentation.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'api', component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__["DocumentationComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  height: 100vh;\n}\n\n.menu{\n  width: 15em;\n}\n\n#toolbar-heading{\n  margin: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5tZW51e1xuICB3aWR0aDogMTVlbTtcbn1cblxuI3Rvb2xiYXItaGVhZGluZ3tcbiAgbWFyZ2luOiAxZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"container\">\n  <mat-sidenav class=\"menu\" mode=\"over\" #sidenav>\n      <app-menu></app-menu>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar>\n      <button mat-icon-button (click)=\"sidenav.toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <span id=\"toolbar-heading\">Chaotic TCG API</span>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chaotic-game';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./documentation/documentation.component */ "./src/app/documentation/documentation.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cards.service */ "./src/app/cards.service.ts");
/* harmony import */ var _creature_table_creature_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./creature-table/creature-table.component */ "./src/app/creature-table/creature-table.component.ts");
/* harmony import */ var _battlegear_table_battlegear_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./battlegear-table/battlegear-table.component */ "./src/app/battlegear-table/battlegear-table.component.ts");
/* harmony import */ var _attack_table_attack_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./attack-table/attack-table.component */ "./src/app/attack-table/attack-table.component.ts");
/* harmony import */ var _mugic_table_mugic_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mugic-table/mugic-table.component */ "./src/app/mugic-table/mugic-table.component.ts");
/* harmony import */ var _location_table_location_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./location-table/location-table.component */ "./src/app/location-table/location-table.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__["DocumentationComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                _creature_table_creature_table_component__WEBPACK_IMPORTED_MODULE_14__["CreatureTableComponent"],
                _battlegear_table_battlegear_table_component__WEBPACK_IMPORTED_MODULE_15__["BattlegearTableComponent"],
                _attack_table_attack_table_component__WEBPACK_IMPORTED_MODULE_16__["AttackTableComponent"],
                _mugic_table_mugic_table_component__WEBPACK_IMPORTED_MODULE_17__["MugicTableComponent"],
                _location_table_location_table_component__WEBPACK_IMPORTED_MODULE_18__["LocationTableComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_cards_service__WEBPACK_IMPORTED_MODULE_13__["CardsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attack-table/attack-table.component.css":
/*!*********************************************************!*\
  !*** ./src/app/attack-table/attack-table.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0dGFjay10YWJsZS9hdHRhY2stdGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/attack-table/attack-table.component.html":
/*!**********************************************************!*\
  !*** ./src/app/attack-table/attack-table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item>\n    <p matLine><strong>Name</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Set</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Rarity</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>ID</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>BP (Build Points)</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Base</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Fire</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Air</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Earth</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Water</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Ability</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Flavor</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Unique</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Artist</strong></p>\n    <p>String</p>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/attack-table/attack-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/attack-table/attack-table.component.ts ***!
  \********************************************************/
/*! exports provided: AttackTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackTableComponent", function() { return AttackTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AttackTableComponent = /** @class */ (function () {
    function AttackTableComponent() {
    }
    AttackTableComponent.prototype.ngOnInit = function () {
    };
    AttackTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'attack-table',
            template: __webpack_require__(/*! ./attack-table.component.html */ "./src/app/attack-table/attack-table.component.html"),
            styles: [__webpack_require__(/*! ./attack-table.component.css */ "./src/app/attack-table/attack-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AttackTableComponent);
    return AttackTableComponent;
}());



/***/ }),

/***/ "./src/app/battlegear-table/battlegear-table.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/battlegear-table/battlegear-table.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhdHRsZWdlYXItdGFibGUvYmF0dGxlZ2Vhci10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/battlegear-table/battlegear-table.component.html":
/*!******************************************************************!*\
  !*** ./src/app/battlegear-table/battlegear-table.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item>\n    <p matLine><strong>Name</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Set</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Rarity</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>ID</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Ability</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Flavor</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Unique</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Loyal</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Legendary</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Past</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Shard</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Artist</strong></p>\n    <p>String</p>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/battlegear-table/battlegear-table.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/battlegear-table/battlegear-table.component.ts ***!
  \****************************************************************/
/*! exports provided: BattlegearTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattlegearTableComponent", function() { return BattlegearTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BattlegearTableComponent = /** @class */ (function () {
    function BattlegearTableComponent() {
    }
    BattlegearTableComponent.prototype.ngOnInit = function () {
    };
    BattlegearTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'battlegear-table',
            template: __webpack_require__(/*! ./battlegear-table.component.html */ "./src/app/battlegear-table/battlegear-table.component.html"),
            styles: [__webpack_require__(/*! ./battlegear-table.component.css */ "./src/app/battlegear-table/battlegear-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BattlegearTableComponent);
    return BattlegearTableComponent;
}());



/***/ }),

/***/ "./src/app/cards.service.ts":
/*!**********************************!*\
  !*** ./src/app/cards.service.ts ***!
  \**********************************/
/*! exports provided: CardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsService", function() { return CardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
headers.append('content-type', 'application/json');
var serverRoute = 'http://localhost:8080/';
var CardsService = /** @class */ (function () {
    function CardsService(http) {
        this.http = http;
    }
    CardsService.prototype.get = function (route) {
        var _this = this;
        this.http.get(serverRoute + route, { headers: headers })
            .subscribe(function (res) {
            _this.result = res;
        });
    };
    CardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CardsService);
    return CardsService;
}());



/***/ }),

/***/ "./src/app/creature-table/creature-table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/creature-table/creature-table.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0dXJlLXRhYmxlL2NyZWF0dXJlLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/creature-table/creature-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/creature-table/creature-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item>\n    <p matLine><strong>Name</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Set</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Rarity</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>ID</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Tribe</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Courage</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Power</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Wisdom</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Speed</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Energy</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Mugic</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Elements</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Types</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Ability</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Flavor </strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Brainwashed</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Unique</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Loyal</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Legendary</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Artist</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Gender</strong></p>\n    <p>String</p>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/creature-table/creature-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/creature-table/creature-table.component.ts ***!
  \************************************************************/
/*! exports provided: CreatureTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureTableComponent", function() { return CreatureTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreatureTableComponent = /** @class */ (function () {
    function CreatureTableComponent() {
    }
    CreatureTableComponent.prototype.ngOnInit = function () {
    };
    CreatureTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'creature-table',
            template: __webpack_require__(/*! ./creature-table.component.html */ "./src/app/creature-table/creature-table.component.html"),
            styles: [__webpack_require__(/*! ./creature-table.component.css */ "./src/app/creature-table/creature-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreatureTableComponent);
    return CreatureTableComponent;
}());



/***/ }),

/***/ "./src/app/documentation/documentation.component.css":
/*!***********************************************************!*\
  !*** ./src/app/documentation/documentation.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\n  padding: 1em;\n}\n\n.main{\n  text-align: center;\n  background-color: #4C4C4C;\n  color: #fafafa;\n  padding: 3em 3em .5em 3em;\n}\n\n.main-header{\n  margin-bottom: .5em;\n}\n\n.code{\n  white-space: pre-wrap;\n  overflow-y: scroll;\n}\n\n#card-image{\n  margin: 0 auto;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5tYWlue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QzRDNEM7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAzZW0gM2VtIC41ZW0gM2VtO1xufVxuXG4ubWFpbi1oZWFkZXJ7XG4gIG1hcmdpbi1ib3R0b206IC41ZW07XG59XG5cbi5jb2Rle1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuI2NhcmQtaW1hZ2V7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/documentation/documentation.component.html":
/*!************************************************************!*\
  !*** ./src/app/documentation/documentation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1 class=\"main-header mat-display-2\">Chaotic TCG API</h1>\n  <h1 class=\"mat-display-1\">Documentation</h1>\n\n</div>\n\n<div class=\"content\">\n  <h1 class=\"display-1\">Introduction</h1>\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title><strong>Getting Started</strong></mat-panel-title>\n\n        <mat-panel-description>\n\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <p style=\"margin: 1em;\">\n      The Chaotic TCG API is free to use and utilizes simple HTTP requests\n      to retrieve data from the server. To try it out, open a terminal and\n      make a <code>curl</code> request.\n      </p>\n\n      <mat-card class=\"code\">\n        <code>\n          curl http://chaoticga.me/creatures/DOP/15\n        </code>\n      </mat-card>\n\n      <p style=\"margin: 1em;\">\n        This should return the data JSON data for the creature card Maxxor in\n        the DOP (Dawn of Perim) set.\n      </p>\n\n      <mat-card class=\"code\">\n        <code>{{maxxor | json}}</code>\n      </mat-card>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title><strong>Base URL</strong></mat-panel-title>\n\n        <mat-panel-description>\n\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <p style=\"margin: 1em;\">\n        Make all API requests to this URL.\n      </p>\n\n      <mat-card class=\"code\">\n        <code>http://chaoticga.me/</code>\n      </mat-card>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title><strong>Authentication</strong></mat-panel-title>\n\n        <mat-panel-description>\n\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <p style=\"margin: 1em\">\n        Choatic TCG API is a free API, so there is no authentication required to\n        make use of it. However, since it is free every IP is limited to how many\n        requests can be made over a ceratin amount of time.\n      </p>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title><strong>Chaotic Sets</strong></mat-panel-title>\n        <mat-panel-description>\n\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <p style=\"margin: 1em;\">\n        Here is a list of all the sets that can be referenced in a given API request.\n      </p>\n\n      <mat-list>\n        <mat-list-item *ngFor=\"let set of sets\">\n          <p>{{set.id}}</p>\n          <p matLine>{{set.name}}</p>\n        </mat-list-item>\n      </mat-list>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title><strong>Image Reference</strong></mat-panel-title>\n\n        <mat-panel-description>\n\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <p style=\"margin: 1em;\">\n        You can reference any card's image by using this URL.\n      </p>\n\n      <mat-card class=\"code\" style=\"margin: 1em;\">\n        <code>http://chaoticga.me/DOP/15</code>\n      </mat-card>\n\n      <img src=\"assets/DOP/15.png\" id=\"card-image\">\n\n    </mat-expansion-panel>\n  </mat-accordion>\n\n  <h1 class=\"display-1\">Object References</h1>\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title><strong>Creature</strong></mat-panel-title>\n\n        <mat-panel-description>\n          /creatures/&#123;set&#125;/&#123;id&#125;\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <creature-table></creature-table>\n\n    </mat-expansion-panel>\n\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title><strong>Battlegear</strong></mat-panel-title>\n\n        <mat-panel-description>\n          /battlegear/&#123;set&#125;/&#123;id&#125;\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <battlegear-table></battlegear-table>\n\n    </mat-expansion-panel>\n\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title><strong>Attack</strong></mat-panel-title>\n\n        <mat-panel-description>\n          /attacks/&#123;set&#125;/&#123;id&#125;\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <attack-table></attack-table>\n\n    </mat-expansion-panel>\n\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title><strong>Mugic</strong></mat-panel-title>\n\n        <mat-panel-description>\n          /mugic/&#123;set&#125;/&#123;id&#125;\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <mugic-table></mugic-table>\n\n    </mat-expansion-panel>\n\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title><strong>Location</strong></mat-panel-title>\n\n        <mat-panel-description>\n          /location/&#123;set&#125;/&#123;id&#125;\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <location-table></location-table>\n\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/documentation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/documentation/documentation.component.ts ***!
  \**********************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MAXXOR_DATA = JSON.parse("{\n\"_id\": \"5bee506020cc7932ef33bd0f\",\n\"name\": \"Maxxor\",\n\"set\": \"DOP\",\n\"rarity\": \"Ultra Rare\",\n\"id\": 15,\n\"tribe\": \"OverWorld\",\n\"courage\": 100,\n\"power\": 65,\n\"wisdom\": 80,\n\"speed\": 50,\n\"energy\": 60,\n\"mugic\": 2,\n\"elements\": \"Fire, Earth\",\n\"types\": \"Hero\",\n\"ability\": \"{{MC}}: Heal 10 damage to target Creature.\",\n\"flavor\": \"No OverWorlder has ever seen Maxxor\u2019s face in battle because he is always in the frontline, leading the charge!\",\n\"brainwashed\": \"\",\n\"unique\": \"1\",\n\"loyal\": \"1\",\n\"legendary\": \"\",\n\"image\": \"0B6oyUfwoM3u1V3pQQk55TGtZdlE\",\n\"thumb\": \"1MtcP0H--UeHjQHc7N5xmDWpF34myb2T5\",\n\"splash\": \"0B6oyUfwoM3u1eDVDVjRiV082dk0\",\n\"artist\": \"\",\n\"tages\": \"\",\n\"gender\": \"Male\",\n\"exclusive\": \"\"\n}");
var SETS_DATA = [
    { id: 'DOP', name: 'Dawn of Perim' },
    { id: 'ZOTH', name: 'Zenith of the Hive' },
    { id: 'OP1', name: 'Organized Play 1' },
    { id: 'SS', name: 'Silent Sands' },
    { id: 'MI', name: 'M\'arrillian Invasion' },
    { id: 'ROTO', name: 'Rise of the Oligarch' },
    { id: 'TOTT', name: 'Turn of the Tide' },
    { id: 'FUN', name: 'Forged Unity' },
    { id: 'AU', name: 'Aliances Unraveled' }
];
var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent() {
        this.maxxor = MAXXOR_DATA;
        this.sets = SETS_DATA;
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__(/*! ./documentation.component.html */ "./src/app/documentation/documentation.component.html"),
            styles: [__webpack_require__(/*! ./documentation.component.css */ "./src/app/documentation/documentation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-text{\n  text-align: center;\n}\n\n#footer-link{\n  text-decoration: none;\n  color: inherit;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXRleHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Zvb3Rlci1saW5re1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <p class=\"mat-caption\">\n    Made by <a id=\"footer-link\" href=\"https://unitehenry.com/\">Henry Unite</a>.\n    Find this on <a id=\"footer-link\" href=\"https://github.com/unitehenry/chaotic-api\">GitHub.</a>\n  </p>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\n  text-align: center;\n  background-color: #4C4C4C;\n  color: #fafafa;\n  padding: 7em;\n}\n\n.main-header{\n  margin: 0;\n}\n\n#main-btn{\n  margin: 1em;\n}\n\n.try{\n  text-align: center;\n  padding: 3.5em;\n}\n\n.try-form{\n  margin: 0;\n}\n\n.try-field{\n  width: 85%;\n  padding-bottom: 0;\n}\n\n#submit-btn{\n  text-transform: uppercase;\n}\n\n#caption{\n  margin-top: 0;\n}\n\n#results{\n  text-align: left;\n  margin: 1em 0 .5em 0;\n}\n\n#card{\n  margin: 1em;\n}\n\n#results-card{\n  margin: 1em;\n}\n\n#results-display{\n  white-space: pre-wrap;\n  overflow-y: scroll;\n  height: 30em\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QzRDNEM7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiA3ZW07XG59XG5cbi5tYWluLWhlYWRlcntcbiAgbWFyZ2luOiAwO1xufVxuXG4jbWFpbi1idG57XG4gIG1hcmdpbjogMWVtO1xufVxuXG4udHJ5e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMuNWVtO1xufVxuXG4udHJ5LWZvcm17XG4gIG1hcmdpbjogMDtcbn1cblxuLnRyeS1maWVsZHtcbiAgd2lkdGg6IDg1JTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbiNzdWJtaXQtYnRue1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jY2FwdGlvbntcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuI3Jlc3VsdHN7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMWVtIDAgLjVlbSAwO1xufVxuXG4jY2FyZHtcbiAgbWFyZ2luOiAxZW07XG59XG5cbiNyZXN1bHRzLWNhcmR7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4jcmVzdWx0cy1kaXNwbGF5e1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAzMGVtXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1 class=\"main-header mat-display-2\">Chaotic TCG API</h1>\n  <p class=\"mat-title\">A simple REST API for the Chaotic Trading Card Game.</p>\n  <!--\n  <button id=\"main-btn\" routerLink=\"/api\" mat-raised-button>Documentation</button>\n  <button id=\"main-btn\" routerLink=\"/about\" mat-raised-button>Learn More</button>\n  -->\n</div>\n<div class=\"try\">\n  <h1 class=\"main-header mat-display-1\">Try it now!</h1>\n\n  <form class=\"try-form\">\n\n    <mat-form-field class=\"try-field\">\n      <span matPrefix>http://chaoticga.me/</span>\n      <input type=\"text\" matInput id=\"try-input\" [(ngModel)]=\"request\" name=\"request\">\n    </mat-form-field>\n\n  </form>\n\n  <p class=\"mat-caption\" id=\"caption\">\n    <i>Try these,\n      <a href=\"# \" (click)=\"request = 'creatures/DOP'\">creatures/DOP</a>,\n      <a href=\"#\" (click)=\"request = 'battlegear/ZOTH/56'\">battlegear/ZOTH/56</a>,\n      <a href=\"#\" (click)=\"request = 'attacks/MI'\">attacks/MI</a>\n    </i>\n  </p>\n\n  <button id=\"submit-btn\" mat-raised-button color=\"warn\" (click)=\"submit()\">submit</button>\n\n  <mat-card id=\"results-card\">\n      <pre id=\"results-display\">{{ cards.result | json }}</pre>\n  </mat-card>\n\n  <div class=\"cards\" *ngIf=\"cards.result != undefined && cards.result.length != undefined\">\n    <img *ngFor=\"let card of cards.result\" src=\"assets/{{card.set}}/{{card.id}}.png\" id=\"card\">\n  </div>\n  <div class=\"cards\" *ngIf=\"cards.result != undefined && cards.result.length == undefined\">\n    <img src=\"assets/{{cards.result.set}}/{{cards.result.id}}.png\" id=\"card\">\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards.service */ "./src/app/cards.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(cards) {
        this.cards = cards;
        this.request = 'creatures/DOP/15';
        this.cards.get('creatures/DOP/15');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.submit = function () {
        this.cards.get(this.request);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cards_service__WEBPACK_IMPORTED_MODULE_2__["CardsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/location-table/location-table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/location-table/location-table.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uLXRhYmxlL2xvY2F0aW9uLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/location-table/location-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/location-table/location-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item>\n    <p matLine><strong>Name</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Set</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Rarity</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>ID</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Initiative</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Ability</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Flavor</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Unique</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Mirage</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Past</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Artist</strong></p>\n    <p>String</p>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/location-table/location-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/location-table/location-table.component.ts ***!
  \************************************************************/
/*! exports provided: LocationTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationTableComponent", function() { return LocationTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationTableComponent = /** @class */ (function () {
    function LocationTableComponent() {
    }
    LocationTableComponent.prototype.ngOnInit = function () {
    };
    LocationTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'location-table',
            template: __webpack_require__(/*! ./location-table.component.html */ "./src/app/location-table/location-table.component.html"),
            styles: [__webpack_require__(/*! ./location-table.component.css */ "./src/app/location-table/location-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationTableComponent);
    return LocationTableComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"]
            ],
            entryComponents: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <h1>Menu</h1>\n</mat-toolbar>\n<mat-nav-list>\n  <mat-list-item>\n     <a matLine routerLink=\"/\">Home</a>\n  </mat-list-item>\n  <mat-list-item>\n     <a matLine routerLink=\"/api\">Documentation</a>\n  </mat-list-item>\n  <!--\n  <mat-list-item>\n     <a matLine routerLink=\"/about\">About</a>\n  </mat-list-item>\n  -->\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/mugic-table/mugic-table.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mugic-table/mugic-table.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211Z2ljLXRhYmxlL211Z2ljLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mugic-table/mugic-table.component.html":
/*!********************************************************!*\
  !*** ./src/app/mugic-table/mugic-table.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item>\n    <p matLine><strong>Name</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Set</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Rarity</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>ID</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Tribe</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Cost</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Ability</strong></p>\n    <p>String</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Unique</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Past</strong></p>\n    <p>Number</p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>\n    <p matLine><strong>Artist</strong></p>\n    <p>String</p>\n  </mat-list-item>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/mugic-table/mugic-table.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mugic-table/mugic-table.component.ts ***!
  \******************************************************/
/*! exports provided: MugicTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MugicTableComponent", function() { return MugicTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MugicTableComponent = /** @class */ (function () {
    function MugicTableComponent() {
    }
    MugicTableComponent.prototype.ngOnInit = function () {
    };
    MugicTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mugic-table',
            template: __webpack_require__(/*! ./mugic-table.component.html */ "./src/app/mugic-table/mugic-table.component.html"),
            styles: [__webpack_require__(/*! ./mugic-table.component.css */ "./src/app/mugic-table/mugic-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MugicTableComponent);
    return MugicTableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/henryunite/Projects/chaotic-api/chaotic-game/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map