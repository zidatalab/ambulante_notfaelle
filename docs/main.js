"use strict";
(self["webpackChunkDashboard"] = self["webpackChunkDashboard"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/profile/profile.component */ 8220);
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/start/start.component */ 4924);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ 8968);
/* harmony import */ var _pages_private_private_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/private/private.component */ 3836);
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/admin/admin.component */ 6601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [
    { path: '', component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__.StartComponent },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    {
        path: 'profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService]
    },
    {
        path: 'private', component: _pages_private_private_component__WEBPACK_IMPORTED_MODULE_4__.PrivateComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService]
    },
    {
        path: 'admin', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__.AdminComponent,
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_dbservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/dbservice.service */ 8351);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);













function AppComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_31_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Anmelden");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
function AppComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_32_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "account_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Benutzerprofil");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
function AppComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_33_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Erweiterte Analysen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
function AppComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_34_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "admin_panel_settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Administration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
function AppComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_35_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19); _r0.toggle(); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Ausloggen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
function AppComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Keine Internetverbindung");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Dieses Portal ben\u00F6tigt eine aktive Internetverbindung.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AppComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Keine Verbindung zur API");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Dieses Portal ben\u00F6tigt eine aktive Internetverbindung.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(_auth, _api, router, db) {
        this._auth = _auth;
        this._api = _api;
        this.router = router;
        this.db = db;
        this.title = 'Test Dashboard';
        this.loginoption = true;
        this.apiconnection = 0;
        this.isExtern = false;
        router.events.subscribe((event) => {
            if (event.url !== this.currentroute && event.url) {
                this.currentroute = event.url;
                this._api.countView(event.url);
            }
            ;
        });
    }
    ngOnInit() {
        this.db.clean();
        this.checkapiconnection();
        this.currentdate = new Date();
        this._auth.currentUser.subscribe(data => {
            if (data) {
                this.currentuser = data;
                this.loginstatus = true;
                this.adminstatus = this.currentuser["is_admin"] || this.currentuser["is_superadmin"];
                this.isExtern = this._auth.isExtern();
                setTimeout(() => { this.autorefreshdata(); }, 1000);
                setInterval(() => { this._auth.refreshToken(); this.checkapiconnection(); }, 1000 * 60 * 10);
            }
            else {
                this.loginstatus = false;
                this.adminstatus = false;
                setTimeout(() => { this.autorefreshdata(); }, 0);
            }
            ;
        });
    }
    checkapiconnection() {
        this._api.getTypeRequest('openapi.json').subscribe(data => { this.apiconnection = 1; }, error => { this.apiconnection = 2; });
    }
    checkforopentabs() {
        // Broadcast that you're opening a page.
        localStorage.openpages = Date.now();
        window.addEventListener('storage', function (e) {
            if (e.key == "openpages") {
                // Listen if anybody else is opening the same page!
                localStorage.page_available = Date.now();
            }
            if (e.key == "page_available") {
                alert("Eine andere Seite ist bereits offen. Bitte nutzen Sie diese Anwendung nur auf einem Tab, um Probleme zu vermeiden.");
            }
        }, false);
    }
    autorefreshdata() {
        this.updatemetadata().subscribe(data => {
            this.setmetadata("metadata", data["data"]);
        });
        // this.getsortdata().subscribe(data => {
        //     this.setmetadata("sortdata",data["datalevels"]);  
        //     if (data["geodata"]){
        //       this.setmetadata("geodata",this._api.getValues(data["geodata"],'_id'));        
        //     }
        //     else {
        //       this.setmetadata("geodata",[]); 
        //     }
        //   });
    }
    logout() {
        this._auth.logout();
        this.db.clean();
        localStorage.clear();
        this.autorefreshdata();
        this.loginstatus = false;
        this.adminstatus = false;
        setTimeout(() => { this.router.navigate(['/']); }, 1500);
    }
    ;
    getsortdata() {
        return this._api.getTypeRequest("get_sortlevels/" + this._api.REST_API_SERVER_CLIENTID);
    }
    updatemetadata() {
        let client = this._api.REST_API_SERVER_CLIENTID;
        return this._api.getTypeRequest("get_metadata/" + client);
    }
    setmetadata(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_dbservice_service__WEBPACK_IMPORTED_MODULE_2__.DBService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 64, vars: 11, consts: [["autosize", "true", "scrollable", "false"], ["color", "transparent"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"], [1, "example-spacer"], ["fxShow", "true", "fxHide.lt-sm", "true"], ["href", "https://www.zi.de/smed"], ["src", "./assets/branding/smed_logo.png", 1, "brandinglogo"], ["href", "https://www.zi.de"], ["src", "./assets/branding/zi_Logo.png", 1, "brandinglogo"], ["fxShow", "false", "fxShow.lt-sm", "true"], [1, "mat-typography"], ["autosize", ""], ["mode", "push", "position", "start", "autoFocus", "false"], ["drawer", ""], [1, "menucontainer"], [1, "primarycolor"], ["mat-icon-button", "", "routerLink", "/", 3, "click"], [1, "icon"], [4, "ngIf"], ["class", "offlinemsg", 4, "ngIf"], [1, "footerstyle"], ["fxLayout", "column", "fxLayoutGap", "0.5rem"], ["fxLayout", "column wrap", "fxLayoutAlign", "space-around start"], ["fxflex", "28", "fxHide.xs", ""], [2, "color", "white"], ["href", "https://www.zi.de/meta/impressum", 2, "color", "white"], ["href", "https://www.zi.de/footer/datenschutzhinweis", 2, "color", "white"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "space-between end"], ["fxFlex", ""], [2, "padding", "0.5rem", "text-align", "center"], ["mat-icon-button", "", "routerLink", "/login", 3, "click"], ["mat-icon-button", "", "routerLink", "/profile", 3, "click"], ["mat-icon-button", "", "routerLink", "/private", 3, "click"], ["mat-icon-button", "", "routerLink", "/admin", 3, "click"], ["mat-icon-button", "", "href", "./", 3, "click"], [1, "offlinemsg"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav-content")(2, "mat-toolbar", 1)(3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "main")(16, "section", 10)(17, "mat-drawer-container", 11)(18, "mat-drawer", 12, 13)(20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p", 15)(23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div")(26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Startseite");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AppComponent_div_31_Template, 6, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AppComponent_div_32_Template, 6, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AppComponent_div_33_Template, 6, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AppComponent_div_34_Template, 6, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AppComponent_div_35_Template, 6, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, AppComponent_div_37_Template, 5, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, AppComponent_div_38_Template, 5, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "footer")(41, "div", 20)(42, "div", 21)(43, "div", 22)(44, "div", 23)(45, "p")(46, "mat-list", 24)(47, "mat-list-item")(48, "p", 24)(49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-list-item")(52, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-list-item")(55, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Datenschutzhinweise");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 27)(58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 29)(61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginoption && !ctx.loginstatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginstatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentuser && !ctx.isExtern);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.adminstatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginstatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.apiconnection == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](63, 8, ctx.currentdate, "Y"), " Zentralinstitut f\u00FCr die kassen\u00E4rztliche Versorgung in der Bundesrepublik Deutschland");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatDrawerContent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListItem, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.offlinemsg[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: rgba(255, 255, 255, 0.8);\n  color: black;\n  position: absolute;\n  border-radius: 15px;\n  margin: 1rem;\n  right: 1rem;\n  padding: 0.6rem;\n  font-size: 0.8rem;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: #f5f5f5;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style: none;\n  cursor: pointer;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 auto;\n  padding-right: 0.6em;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0;\n  width: 85%;\n  vertical-align: middle;\n}\n\n.menucontainer[_ngcontent-%COMP%] {\n  width: 15rem;\n  margin: 0px;\n  height: 100%;\n  padding: 1rem;\n  padding-top: 1.5rem;\n  background-color: white;\n}\n\n.menucontainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.menucontainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  font-weight: bolder;\n}\n\n.menucontainer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: black;\n  margin-right: 0.9rem;\n}\n\n.menucontainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n  .mat-drawer-inner-container {\n  overflow: hidden !important;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #000000 !important;\n  color: white;\n}\n\n.userinfo[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  color: rgba(255, 255, 255, 0.447);\n}\n\n.zilogostyle[_ngcontent-%COMP%] {\n  height: 2rem;\n  margin-top: 20px;\n  filter: grayscale(100%);\n}\n\n.brandinglogo[_ngcontent-%COMP%] {\n  height: 3rem;\n  margin-top: 20px;\n  margin-left: 50px;\n}\n\n.brandinglogotiny[_ngcontent-%COMP%] {\n  height: 1rem;\n  margin-top: 10px;\n  margin-left: 25px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n.footerstyle[_ngcontent-%COMP%] {\n  background-color: #303030;\n  color: rgb(146, 146, 146);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBOztFQUVFLGNBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURGOztBQUdFO0VBQ0UsWUFBQTtBQURKOztBQUlFO0VBQ0UsbUJBQUE7QUFGSjs7QUFLRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtBQUpKOztBQVFBO0VBQ0UsMkJBQUE7QUFMRjs7QUFRQTtFQUNFLDJCQUFBO0FBTEY7O0FBUUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTEY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFMRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5cclxuLm9mZmxpbmVtc2cge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgcGFkZGluZzogLjZyZW07XHJcbiAgZm9udC1zaXplOiAuOHJlbTtcclxuXHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmE6aG92ZXIsXHJcbmE6YWN0aXZlIHtcclxuICBjb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24taXRlbXMge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IC42ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLm1lbnVjb250YWluZXIge1xyXG4gIHdpZHRoOiAxNXJlbTtcclxuICBtYXJnaW46IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIHNwYW46aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcblxyXG4gIC5pY29uIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1yaWdodDogMC45cmVtO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udXNlcmluZm8ge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDQ3KTtcclxufVxyXG5cclxuLnppbG9nb3N0eWxlIHtcclxuICBoZWlnaHQ6IDIuMHJlbTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG59XHJcblxyXG4uYnJhbmRpbmdsb2dvIHtcclxuICBoZWlnaHQ6IDMuMHJlbTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYnJhbmRpbmdsb2dvdGlueSB7XHJcbiAgaGVpZ2h0OiAxLjByZW07XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyc3R5bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgY29sb3I6IHJnYigxNDYsIDE0NiwgMTQ2KTtcclxufSJdfQ== */"] });


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
/* harmony import */ var C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../material/material.module */ 649);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/start/start.component */ 4924);
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! plotly.js/dist/plotly.js */ 2355);
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-plotly.js */ 249);
/* harmony import */ var _node_modules_plotly_js_lib_locales_de_ch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/plotly.js/lib/locales/de-ch.js */ 6854);
/* harmony import */ var _node_modules_plotly_js_lib_locales_de_ch_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_plotly_js_lib_locales_de_ch_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var _components_leafletmap_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/leafletmap/map/map.component */ 1888);
/* harmony import */ var _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/plotly/plot/plot.component */ 6571);
/* harmony import */ var _components_table_table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/table/table/table.component */ 3101);
/* harmony import */ var _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/infobox/box/box.component */ 5752);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/locales/de */ 8855);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/profile/profile.component */ 8220);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_interceptor_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/interceptor-service.service */ 3741);
/* harmony import */ var _pages_private_private_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/private/private.component */ 3836);
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/admin/admin.component */ 6601);
/* harmony import */ var _services_replace_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/replace_pipe */ 275);
/* harmony import */ var _pages_admin_components_addUserDialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/admin/components/addUserDialog */ 6465);
/* harmony import */ var _pages_admin_components_updateUserDialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/admin/components/updateUserDialog */ 6827);
/* harmony import */ var _pages_admin_components_deleteUserDialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/admin/components/deleteUserDialog */ 8138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 2560);






























angular_plotly_js__WEBPACK_IMPORTED_MODULE_20__.PlotlyModule.plotlyjs = plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_5__;
(0,_angular_common__WEBPACK_IMPORTED_MODULE_21__.registerLocaleData)(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_22__["default"], 'de');
class AppModule {
  constructor(plotlyService) {
    this.plotlyService = plotlyService;
    this.setupPlotly();
  }

  setupPlotly() {
    var _this = this;

    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const plotly = yield _this.plotlyService.getPlotly();
      plotly.register(_node_modules_plotly_js_lib_locales_de_ch_js__WEBPACK_IMPORTED_MODULE_6__);
      plotly.setPlotConfig({
        locale: 'de'
      });
    })();
  }

}

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinject"](angular_plotly_js__WEBPACK_IMPORTED_MODULE_20__.PlotlyService));
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({
  providers: [// {provide: LOCALE_ID, useValue: 'de-DE' },PlotlyService,
  // This needs to be uncommented to provide  auth
  {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HTTP_INTERCEPTORS,
    useClass: _services_interceptor_service_service__WEBPACK_IMPORTED_MODULE_13__.InterceptorService,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, angular_plotly_js__WEBPACK_IMPORTED_MODULE_20__.PlotlyModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _pages_start_start_component__WEBPACK_IMPORTED_MODULE_4__.StartComponent, _components_leafletmap_map_map_component__WEBPACK_IMPORTED_MODULE_7__.MapComponent, _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_8__.PlotComponent, _components_table_table_table_component__WEBPACK_IMPORTED_MODULE_9__.TableComponent, _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_10__.BoxComponent, _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent, _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__.ProfileComponent, _pages_private_private_component__WEBPACK_IMPORTED_MODULE_14__.PrivateComponent, _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__.AdminComponent, _services_replace_pipe__WEBPACK_IMPORTED_MODULE_16__.ReplacePipe, _pages_admin_components_addUserDialog__WEBPACK_IMPORTED_MODULE_17__.AddUserDialog, _pages_admin_components_updateUserDialog__WEBPACK_IMPORTED_MODULE_18__.UpdateUserDialog, _pages_admin_components_deleteUserDialog__WEBPACK_IMPORTED_MODULE_19__.DeleteUserDialog],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, angular_plotly_js__WEBPACK_IMPORTED_MODULE_20__.PlotlyModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__.FlexLayoutModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule]
  });
})();

/***/ }),

/***/ 5752:
/*!*********************************************************!*\
  !*** ./src/app/components/infobox/box/box.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxComponent": () => (/* binding */ BoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);





function BoxComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.title, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 2, ctx_r0.value, ctx_r0.numberformat, "de"), "");
} }
function BoxComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 2, ctx_r1.value, ctx_r1.numberformat, "de"), " ", ctx_r1.title, "");
} }
function BoxComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span", 2)(2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.maticon);
} }
class BoxComponent {
    constructor(api) {
        this.api = api;
    }
    ngOnInit() {
        this.value = Number(this.value);
        if (!this.numberformat) {
            this.numberformat = '1.1-1';
        }
        if (!this.maincolor) {
            this.maincolor = this.api.primarycolor;
        }
        if (!this.cutoffs) {
            this.cutoffs = [];
        }
        this.setcolor();
    }
    ;
    setcolor() {
        let color = this.maincolor;
        this.itemcolor = this.maincolor;
        if (this.cutoffs.length > 0 && this.cutoffs.length == this.colors.length) {
            let i = 0;
            for (let cutvalue of this.cutoffs) {
                if (Number(cutvalue) <= this.value) {
                    color = this.colors[i];
                }
                i = i + 1;
            }
        }
        this.itemcolor = color;
    }
}
BoxComponent.ɵfac = function BoxComponent_Factory(t) { return new (t || BoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
BoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BoxComponent, selectors: [["app-box"]], inputs: { value: "value", title: "title", description: "description", colors: "colors", cutoffs: "cutoffs", maincolor: "maincolor", numberformat: "numberformat", maticon: "maticon", textbehind: "textbehind" }, decls: 7, vars: 6, consts: [[1, "box-card"], [4, "ngIf"], [1, "mat-headline"], ["inline", "true"]], template: function BoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BoxComponent_h1_1_Template, 3, 6, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BoxComponent_h1_2_Template, 3, 6, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p")(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BoxComponent_div_6_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.itemcolor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.textbehind);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.textbehind);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.maticon);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe], styles: [".box-card[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLE9BQUE7QUFDSCIsImZpbGUiOiJib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LWNhcmQge1xyXG4gICBmbGV4OiAxO1xyXG59Il19 */"] });


/***/ }),

/***/ 1888:
/*!************************************************************!*\
  !*** ./src/app/components/leafletmap/map/map.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ 5836);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chroma-js */ 8754);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);











function MapComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}

function MapComponent_ng_container_1_mat_spinner_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner", 1);
  }
}

function MapComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MapComponent_ng_container_1_mat_spinner_3_Template, 1, 0, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.mapok);
  }
}

class MapComponent {
  constructor(http, renderer, api) {
    this.http = http;
    this.renderer = renderer;
    this.api = api;
    this.data = [];
    this.nacolor = "white";
    this.debug = false;
    this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.useprovider = 0;
    this.firstload = true;
    this.providers = ['https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'];
    this.attributions = ['Kartenmaterial &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>', '©OpenStreetMap, ©CartoDB'];
  }

  ngOnInit() {
    // Debug
    if (this.debug) {
      console.log("ID:", this.id);
      console.log("Map:", this.api.getValues(this.basemap['features'], 'properties'));
    } // Sort data


    this.data = this.api.sortArray(this.data, this.Outcome); // Init vars

    this.resetprops();
    this.clickedvalue = "";

    if (!this.binmethod) {
      this.binmethod = 'equalint';
    }

    ;
  }

  ngAfterViewInit() {
    // Import Map data
    this.initMap(this.containername);
  }

  ngOnChanges(changes) {
    // On any change replace the map-container
    if (!this.selectmap) {
      if ((changes.data || changes.basemap) && this.checkallok()) {
        this.resetprops();
        this.initMap(this.containername);
      }

      ;
    } else {
      if (changes.basemap && this.checkallok()) {
        this.resetprops();
        this.initMap(this.containername);
      }

      ;
    }
  }

  ngOnDestroy() {
    this.map = null;
    this.data = null;
  }

  resetprops() {
    if (!this.containername) {
      this.containername = "mapdiv" + Math.round(Math.random() * 1000).toString() + "_" + Math.round(Math.random() * 1000).toString();
    }

    ;

    if (!this.Zoom) {
      this.Zoom = 4;
    }

    ;

    if (!this.center) {
      this.center = this.getcenter();
    }

    ; //  DOES NOT WORK FOR TYPE MULTIPOLYGON!

    if (!this.opacity) {
      this.opacity = .1;
    }

    ;

    if (!this.customlabels) {
      this.customlabels = [];
    }

    ;

    if (!this.binmethod) {
      this.binmethod = "equalint";
    }

    ;
  }

  checkallok() {
    let res;

    if (!this.selectmap) {
      res = this.data && this.basemap;

      if (res) {
        res = this.data.length > 0 && this.basemap.features;
      }
    } else {
      res = this.basemap;

      if (res) {
        res = this.basemap.features;
      }
    }

    return res;
  }

  preparedom(divid) {
    if (document.getElementById(divid)) {
      document.getElementById(divid).remove();
    }

    ;
    let mapcontainer = this.renderer.createElement("div");
    this.renderer.setProperty(mapcontainer, 'id', divid);
    this.renderer.addClass(mapcontainer, "mapdiv");

    if (document.getElementById("map-frame") !== null) {
      this.renderer.appendChild(document.getElementById("map-frame"), mapcontainer);
    }

    return true;
  }

  initMap(divid) {
    var _this = this;

    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Init
      let mymap;
      _this.mapok = false;
      let colors = _this.colorscale;
      let cutoffs = _this.cutofflist;
      let thedata;

      if (_this.data) {
        thedata = Object.assign(_this.data);
      }

      let propname = _this.feature;
      let theid = _this.id;
      let theopacity = _this.opacity;
      let basestyle = {
        weight: 1,
        dashArray: '',
        "color": "grey",
        "fillOpacity": theopacity,
        "Opacity": theopacity
      }; // If to many regions set weight to 0

      if (thedata.length > 30) {
        basestyle.weight = 0;
      }

      ; // Prepare dom

      _this.firstload = false;
      let removed = false;
      yield _this.preparedom(divid); // Load Map

      if (_this.debug) {
        console.log('center: ', _this.center);
      }

      try {
        mymap = yield leaflet__WEBPACK_IMPORTED_MODULE_1__.map(divid, {
          center: _this.center,
          zoom: _this.Zoom
        });
      } catch (e) {
        document.getElementById(divid).remove();
        yield _this.preparedom(divid);
        mymap = yield leaflet__WEBPACK_IMPORTED_MODULE_1__.map(divid, {
          center: _this.center,
          zoom: _this.Zoom
        });
      }

      ;

      if (_this.debug) {
        console.log('Map created');
      } // Fix Icons see https://stackoverflow.com/questions/41144319/leaflet-marker-not-found-production-env


      const iconRetinaUrl = 'assets/marker-icon-2x.png';
      const iconUrl = 'assets/marker-icon.png';
      const shadowUrl = 'assets/marker-shadow.png';
      const iconDefault = (0,leaflet__WEBPACK_IMPORTED_MODULE_1__.icon)({
        iconRetinaUrl,
        iconUrl,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      });
      leaflet__WEBPACK_IMPORTED_MODULE_1__.Marker.prototype.options.icon = iconDefault; // Load Tiles

      let theprovider = _this.useprovider;
      const tiles = leaflet__WEBPACK_IMPORTED_MODULE_1__.tileLayer(_this.providers[theprovider], {
        maxZoom: 19,
        opacity: 1,
        attribution: _this.attributions[theprovider]
      });
      tiles.addTo(mymap);
      mymap.attributionControl.setPrefix('<a href="https://www.ziapp.de"><strong>Zi</strong> Data Science Lab</a>');
      tiles.getContainer().className += ' custombgmap'; // Chloropleth Map

      if (!_this.selectmap) {
        // Layer
        const geojsonFeature = Object.assign(_this.basemap);

        if (_this.percent) {
          for (let item of thedata) {
            if (item[_this.feature]) {
              item['___thevalue'] = Math.round(item[_this.feature] * 10000) / 100;
            } else {
              item['___thevalue'] = null;
            }
          }
        } else {
          for (let item of thedata) {
            if (item[_this.feature]) {
              item['___thevalue'] = item[_this.feature];
            } else {
              item['___thevalue'] = null;
            }
          }
        }

        for (let item of geojsonFeature.features) {
          let value = _this.api.filterArray(thedata, _this.id, item.properties[_this.id]);

          if (value.length > 0) {
            item['properties'][propname] = value[0]['___thevalue'];
          } else {
            item['properties'][propname] = null;
          }
        }

        if (_this.debug) {
          console.log('Map Features', geojsonFeature.features);
          console.log("Data:", _this.data);
        }

        if (!cutoffs) {
          cutoffs = _this.makecutoffs(_this.api.getValues(thedata, '___thevalue'), _this.binmethod, _this.bins);
        }

        ;

        if (colors.length < cutoffs.length) {
          colors = _this.makescale(cutoffs.length);
        }

        let myStyle = function (feature) {
          let thevalue = feature.properties[propname];
          let i = 0;
          let result = basestyle;
          let thecolor = colors[0];

          for (let colorcode of colors) {
            if (thevalue > cutoffs[i]) {
              thecolor = colorcode;
            }

            ;
            i = i + 1;
          }

          if (thevalue != null) {
            result['color'] = thecolor;
          } else {
            result['color'] = 'grey';
          }

          ;
          return result;
        }; // Infobox


        let info;
        info = leaflet__WEBPACK_IMPORTED_MODULE_1__.control.layers();

        info.onAdd = function (map) {
          this._div = leaflet__WEBPACK_IMPORTED_MODULE_1__.DomUtil.create('div');
          this.update();
          return this._div;
        };

        info.update = function (props) {
          this._div.innerHTML = (props ? '<strong>Gebiet: </strong>' + props[theid] : "") + (props && props[propname] ? '<br><strong>Wert: </strong>' + props[propname].toLocaleString() : "");

          if (props) {
            leaflet__WEBPACK_IMPORTED_MODULE_1__.DomUtil.addClass(this._div, 'maphoverinfo');
          } else {
            leaflet__WEBPACK_IMPORTED_MODULE_1__.DomUtil.removeClass(this._div, 'maphoverinfo');
          }
        };

        info.addTo(mymap); // Add Features/Polygons to Map

        const featLayer = leaflet__WEBPACK_IMPORTED_MODULE_1__.geoJSON(geojsonFeature, {
          style: myStyle,
          onEachFeature: (feature, layer) => layer.on({
            mouseover: e => _this.highlightFeature(info, e),
            mouseout: e => _this.resetFeature(info, e),
            click: e => _this.zoomToFeature(mymap, e)
          })
        });
        featLayer.resetStyle();
        featLayer.addTo(mymap); // Add Legend to Map

        let labels;

        if (_this.customlabels) {
          labels = _this.customlabels;
        }

        ;
        let legend;
        legend = leaflet__WEBPACK_IMPORTED_MODULE_1__.control.layers({}, {}, {
          position: 'topright'
        });

        let legendtitle = _this.api.stringwrap(propname);

        legend.onAdd = function (map) {
          this._ldiv = leaflet__WEBPACK_IMPORTED_MODULE_1__.DomUtil.create('div', 'customlegend');
          this._ldiv.innerHTML = '<p><strong>' + legendtitle + '</strong></p>';

          if (this.percent == true) {
            this._ldiv.innerHTML += '<p><em>Anteil in %</em></p>';
          }

          if (cutoffs) {
            for (var i = 0; i < cutoffs.length; i++) {
              if (labels.length == cutoffs.length) {
                this._ldiv.innerHTML += '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;</i> ' + labels[i];
              } else {
                if (cutoffs.length > 4) {
                  this._ldiv.innerHTML += '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i> ' + cutoffs[i].toLocaleString() + (cutoffs[i + 1] ? ' bis unter ' + cutoffs[i + 1].toLocaleString() + '<br>' : '+');
                } else {
                  this._ldiv.innerHTML += '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;</i> ' + (cutoffs[i + 1] ? 'bis ' + cutoffs[i + 1].toLocaleString() + "&nbsp;" : cutoffs[i].toLocaleString() + '+');
                }
              }
            }
          }

          return this._ldiv;
        };

        legend.addTo(mymap);
      } else {
        // Layer
        const geojsonFeature = Object.assign(_this.basemap);
        colors = _this.makescale(2);

        let myStyle = function (feature) {
          let res = basestyle;
          let thecolor = "grey";

          if (feature.properties['___clicked']) {
            thecolor = colors[1];
          }

          res['color'] = thecolor;
          return res;
        };

        const featLayer = leaflet__WEBPACK_IMPORTED_MODULE_1__.geoJSON(geojsonFeature, {
          style: myStyle,
          onEachFeature: (feature, layer) => layer.on({
            mouseover: e => _this.highlightFeature(info, e),
            mouseout: e => _this.resetFeature(info, e),
            click: e => _this.selectarea(mymap, e)
          })
        });
        featLayer.addTo(mymap); // Infobox

        let info;
        info = leaflet__WEBPACK_IMPORTED_MODULE_1__.control.layers();

        info.onAdd = function (map) {
          this._div = leaflet__WEBPACK_IMPORTED_MODULE_1__.DomUtil.create('div');
          this.update();
          return this._div;
        };

        info.update = function (props) {
          this._div.innerHTML = props ? '<strong>Gebiet: </strong>' + props[theid] : "";

          if (props) {
            leaflet__WEBPACK_IMPORTED_MODULE_1__.DomUtil.addClass(this._div, 'maphoverinfo');
          } else {
            leaflet__WEBPACK_IMPORTED_MODULE_1__.DomUtil.removeClass(this._div, 'maphoverinfo');
          }
        };

        info.addTo(mymap);
      }

      _this.mapok = true;
    })();
  }

  highlightFeature(info, e) {
    const layer = e.target;
    layer.setStyle({
      opacity: 1,
      fillOpacity: this.opacity * 1.1
    });
    info.update(layer.feature.properties);
  }

  resetFeature(info, e) {
    const layer = e.target;
    layer.setStyle({
      opacity: 1,
      fillOpacity: this.opacity
    });
    info.update();
  }

  makecutoffs(array, method = "equalint", bins) {
    let result = [];
    let minv = Math.min(...array);
    let maxv = Math.max(...array); // equalint    

    if (method == 'equalint') {
      let steps = Math.round((maxv - minv) / bins);
      let i = 0;

      while (i < bins) {
        result.push((i + 1) * steps + minv);
        i = i + 1;
      }

      ;

      if (this.debug) {
        console.log("CUTOFF RESULT", result, "\ninputarray", array);
      }
    }

    ; // equal group size 

    if (method == 'equalgroupsize') {
      let sortedarray = this.api.filterNA(array.sort((a, b) => parseFloat(a) - parseFloat(b)));
      let arraylength = sortedarray.length;
      let groupsize = Math.floor(arraylength / bins);

      for (let thebin of Array.apply(null, {
        length: bins
      }).map(Number.call, Number)) {
        if (thebin == 0) {
          result.push(sortedarray[0]);
        } else {
          result.push(sortedarray[groupsize * thebin]);
        }
      }

      if (this.debug) {
        console.log("CUTOFF RESULT", result.sort(), "\ninputarray", sortedarray, "Group Size", groupsize);
      }
    }

    ;
    return result;
  }

  newclick(e) {
    let res = [];

    for (let item of this.basemap.features) {
      if (item.properties[this.id] == e) {
        item.properties['___clicked'] = true;
      } else {
        item.properties['___clicked'] = false;
      }

      res.push(item);
    }

    this.basemap['features'] = res;
    this.initMap(this.containername);
  }

  zoomToFeature(map, e) {
    map.fitBounds(e.target.getBounds());
    this.clicked.emit(e.target.feature.properties[this.id]);
    this.clickedvalue = e.target.feature.properties[this.id];
  }

  selectarea(map, e) {
    map.fitBounds(e.target.getBounds());
    this.clicked.emit(e.target.feature.properties[this.id]);
    this.clickedvalue = e.target.feature.properties[this.id];
    this.newclick(e.target.feature.properties[this.id]);
  }

  makescale(bins = 5) {
    return chroma_js__WEBPACK_IMPORTED_MODULE_2__.scale([chroma_js__WEBPACK_IMPORTED_MODULE_2__(this.api.primarycolor).set('hsl.h', -120), this.api.primarycolor]).colors(bins);
  }

  getcenter() {
    let features = this.basemap.features;
    let coords = {
      'a': [],
      'b': []
    };

    for (let item of features) {
      for (let area of item.geometry.coordinates) {
        for (let subarea of area) {
          coords['a'].push(subarea[0]);
          coords['b'].push(subarea[1]);
        }
      }
    }

    if (this.debug) {
      console.log("CENTER FEATURES:", this.basemap.features);
      console.log("CENTER COORDS:", coords);
    }

    let a = coords['a'].reduce((pv, cv) => pv + cv, 0) / coords['a'].length;
    let b = coords['b'].reduce((pv, cv) => pv + cv, 0) / coords['b'].length;
    return [b, a];
  }

  donothing(e) {
    return null;
  }

}

MapComponent.ɵfac = function MapComponent_Factory(t) {
  return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
};

MapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MapComponent,
  selectors: [["app-map"]],
  inputs: {
    data: "data",
    nacolor: "nacolor",
    debug: "debug",
    Outcome: "Outcome",
    Zoom: "Zoom",
    basemap: "basemap",
    center: "center",
    opacity: "opacity",
    feature: "feature",
    colorscale: "colorscale",
    cutofflist: "cutofflist",
    customlabels: "customlabels",
    binmethod: "binmethod",
    selectmap: "selectmap",
    bins: "bins",
    id: "id",
    percent: "percent",
    containername: "containername"
  },
  outputs: {
    clicked: "clicked"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["color", "primary"], [1, "map-container"], ["id", "map-frame", 1, "map-frame"], ["color", "primary", 4, "ngIf"]],
  template: function MapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MapComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MapComponent_ng_container_1_Template, 4, 1, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.basemap);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.basemap);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner],
  styles: [".map-container[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.map-frame[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  height: 100%;\n}\n\n.mapdiv[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 400px;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBREo7O0FBS0U7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRkoiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXAtY29udGFpbmVyIHtcclxuICAgIFxyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5tYXAtZnJhbWUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWFwZGl2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4iXX0= */"]
});

/***/ }),

/***/ 6571:
/*!**********************************************************!*\
  !*** ./src/app/components/plotly/plot/plot.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlotComponent": () => (/* binding */ PlotComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-plotly.js */ 249);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);







function PlotComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return { position: "relative", width: "100%", height: "100%" }; };
function PlotComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "plotly-plot", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("plotlyClick", function PlotComponent_ng_container_1_Template_plotly_plot_plotlyClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.reportclick($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r1.plotdata)("divId", ctx_r1.divid)("debug", true)("layout", ctx_r1.plotlayout)("config", ctx_r1.mainconfig)("useResizeHandler", true);
} }
class PlotComponent {
    constructor(api) {
        this.api = api;
        this.outcomelabels = [];
        this.basecolor = "";
        this.colorscheme = [];
        this.annotations = [];
        this.hovertemplate = "";
        this.plottitle = "";
        this.plotsubtitle = "";
        this.plotcaption = "";
        this.n_yticks = 8;
        this.xtickformat = "";
        this.xtitle = "";
        this.ytitle = "";
        this.id = "";
        this.divid = "";
        this.fontfamily = "Lato, sans-serif";
        this.fontsize = ".85rem";
        this.fontcolor = "black";
        this.legendbg = 'ffffff20';
        this.legendposx = 'right';
        this.legendposy = 1;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        if (this.divid == "") {
            this.divid = "plotdiv" + Math.round(Math.random() * 1000).toString() + "_" + Math.round(Math.random() * 1000).toString();
        }
        if (!this.linewidth) {
            this.linewidth = 2;
        }
        ;
        if (this.basecolor == "") {
            this.basecolor = this.api.primarycolor;
        }
        ;
        if (this.colorscheme.length == 0) {
            this.colorscheme = [this.basecolor];
        }
        this.make_plot();
    }
    ngOnChanges(changes) {
        setTimeout(() => { this.make_plot(); }, 0);
    }
    reportclick(input) {
        this.clicked.emit(input);
        this.clickedvalue = input;
    }
    make_plot() {
        this.mainconfig = {
            displayModeBar: false,
            scrollZoom: false,
            autosizable: true,
            locale: 'de-eu',
            locales: {
                'de-eu': {
                    format: {
                        currency: ['€', ''],
                        decimal: ',',
                        thousands: '.',
                        grouping: [2]
                    }
                }
            },
            doubleClick: 'reset',
            showAxisDragHandles: false,
            showAxisRangeEntryBoxes: false,
            showTips: true,
            seperator: ',.'
        };
        if (this.plottype == "bar") {
            this.plotlytype = "bar";
            this.plotlayout = {
                xaxis: { fixedrange: false, type: 'category', automargin: false },
                yaxis: {
                    fixedrange: true, title: '', automargin: true, rangemode: 'tozero',
                    gridcolor: "lightgrey",
                    gridpattern: "dot",
                    gridwidth: 1,
                    zerolinecolor: this.fontcolor,
                    zerolinewidth: 2,
                    annotations: this.annotations,
                    ticksuffix: " ",
                    nticks: this.n_yticks,
                },
                autosize: true, padding: 0,
                legend: { x: 1, xanchor: this.legendposx, y: this.legendposy, bgcolor: this.legendbg },
                margin: { l: 0, r: 100, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
                annotations: this.annotations,
            };
            if (this.percent) {
                this.plotlayout.yaxis.tickformat = ',.1%';
            }
        }
        if (this.plottype == "heatmap") {
            this.plotlytype = 'heatmap';
            this.plotlayout = {
                xaxis: { side: 'top' },
                yaxis: { autosize: true },
                autosize: false, padding: 0,
                // legend: { x: 1, xanchor: this.legendposx , y: this.legendposy,  bgcolor: this.legendbg},
                margin: { l: 50, r: 50, b: 0, t: 50 },
                paper_bgcolor: "transparent", plot_bgcolor: "transparent",
                //annotations: this.annotations
            };
            // intermediate fix for bugging xaxis placement
            this.plotlayout.yaxis.autorange = 'reversed';
            let plotdata = this.data;
            plotdata['type'] = "heatmap";
            let colors = this.api.makescale(2);
            plotdata['colorscale'] = [
                [0, colors[1].concat('CC')],
                [1, colors[0].concat('CC')]
            ];
            plotdata['showscale'] = false;
            this.plotdata = [plotdata];
        }
        if (this.plottype == "violin") {
            this.plotlytype = "violin";
            this.plotlayout = {
                xaxis: { fixedrange: false, type: 'category', automargin: false },
                yaxis: { zeroline: false, automargin: true, rangemode: 'tozero', ticksuffix: " " },
                autosize: true, padding: 0,
                legend: { x: 1, xanchor: this.legendposx, y: this.legendposy, bgcolor: this.legendbg },
                margin: { l: 0, r: 100, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
                annotations: this.annotations
            };
            if (this.percent) {
                this.plotlayout.yaxis.tickformat = ',.1%';
            }
        }
        if (this.plottype == "stackedbar") {
            this.plotlytype = "bar";
            this.plotlayout = {
                barmode: "stack",
                xaxis: { fixedrange: false, showgrid: false, type: 'category', automargin: false },
                yaxis: {
                    fixedrange: true, title: '', autosize: true, automargin: true,
                    rangemode: 'tozero', ticksuffix: " ",
                    zerolinecolor: this.fontcolor,
                    zerolinewidth: 2,
                    nticks: this.n_yticks
                },
                padding: 0,
                legend: { x: 1, xanchor: this.legendposx, y: this.legendposy, bgcolor: this.legendbg },
                margin: { l: 0, r: 100, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
                annotations: this.annotations
            };
        }
        if (this.plottype == "tsline" || this.plottype == "lines" || this.plottype == "area" ||
            this.plottype == "stackedarea" || this.plottype == 'scatter') {
            this.plotlytype = "lines";
            this.plotlayout = {
                xaxis: { fixedrange: false, showgrid: false, automargin: false, zeroline: false },
                yaxis: {
                    fixedrange: true, title: '', automargin: true, rangemode: 'tozero',
                    gridcolor: "lightgrey",
                    gridpattern: "dot",
                    gridwidth: 1,
                    zerolinecolor: this.fontcolor,
                    zerolinewidth: 2,
                    annotations: this.annotations,
                    ticksuffix: " ",
                    nticks: this.n_yticks,
                },
                autosize: true, padding: 0,
                legend: { x: 1, xanchor: this.legendposx, y: this.legendposy, bgcolor: this.legendbg },
                margin: { l: 0, r: 20, b: 50, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent"
            };
            if (this.percent) {
                this.plotlayout.yaxis.tickformat = ',.1%';
            }
            if (this.percentx) {
                this.plotlayout.xaxis.tickformat = ',.1%';
            }
        }
        if (this.plottype == "hbar") {
            this.plotlytype = "hbar";
            this.plotlayout = {
                xaxis: {
                    fixedrange: true, showgrid: true, title: '',
                    automargin: true, nticks: this.n_yticks
                },
                yaxis: {
                    fixedrange: false, type: 'category', automargin: true,
                    rangemode: 'tozero', ticksuffix: " ",
                    zerolinecolor: this.fontcolor,
                    zerolinewidth: 2
                },
                autosize: true, padding: 0,
                legend: { x: 1, xanchor: this.legendposx, y: this.legendposy, bgcolor: this.legendbg },
                margin: { l: 200, r: 0, b: 20, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
                annotations: this.annotations
            };
        }
        if (this.custommargins) {
            this.plotlayout['margin'] = this.custommargins;
        }
        if (this.showlegend) {
            this.plotlayout['showlegend'] = true;
        }
        if (this.xtickformat != '') {
            this.plotlayout['xaxis']['tickformat'] = this.xtickformat;
        }
        this.plotlayout['font'] = {
            family: this.fontfamily,
            size: this.fontsize,
            color: this.fontcolor
        };
        if (this.xtitle !== "") {
            this.plotlayout['xaxis']['title'] = this.xtitle;
            this.plotlayout['xaxis']['titlefont'] =
                {
                    family: this.fontfamily,
                    size: this.fontsize,
                    color: this.fontcolor
                };
        }
        if (this.ytitle !== "") {
            this.plotlayout['yaxis']['title'] = this.ytitle;
            this.plotlayout['yaxis']['titlefont'] =
                {
                    family: this.fontfamily,
                    size: this.fontsize,
                    color: this.fontcolor
                };
        }
        if (this.plottype != "heatmap") {
            let plotdata = [];
            for (let item of this.data) {
                plotdata.push(item);
            }
            if (this.sort) {
                plotdata = this.api.sortArray(plotdata, this.outcomes[0]);
            }
            if (this.sortx) {
                plotdata = this.api.sortArray(plotdata, this.xvalue);
            }
            let outcomes = this.outcomes;
            if (this.colorby) {
                outcomes = this.api.getuniqueValues(plotdata, this.colorby);
                if (outcomes.length > 1) {
                    this.colorscheme = this.api.makescale(outcomes.length);
                }
                plotdata = this.make_colorbyvalues();
            }
            this.plotdata = this.make_plotdata(plotdata, this.xvalue, outcomes, this.plotlytype);
            // DEBUG
            // console.log("Make Plotdata:","\ndf:",plotdata,"\nx:", this.xvalue,"\nout:", outcomes,"\ntype:", this.plotlytype)
        }
        ;
    }
    make_colorbyvalues() {
        let newdata = [];
        let inputdata = this.data;
        let thecolorvalues = this.api.getuniqueValues(inputdata, this.colorby).sort();
        let thexvalues = this.api.getuniqueValues(inputdata, this.xvalue);
        let theoutcome = this.outcomes[0];
        for (let xvalue of thexvalues) {
            let topush = {};
            topush[this.xvalue] = xvalue;
            for (let tocolor of thecolorvalues) {
                let datapoint = this.api.filterArray(this.api.filterArray(inputdata, this.colorby, tocolor), this.xvalue, xvalue)[0];
                if (datapoint) {
                    topush[tocolor] = datapoint[theoutcome];
                }
            }
            newdata.push(topush);
        }
        // console.log("DEBUG make_colorbyvalues:",'df',inputdata,"colorvals",thecolorvalues,"xvals",thexvalues,"outcome",theoutcome,"newdf",newdata);
        return newdata;
    }
    make_trace(xdata, ydata = [], name, type = "") {
        let trace = {
            x: xdata,
            y: ydata,
            name: name,
            type: type,
        };
        if (this.plottype == "stackedarea") {
            trace['stackgroup'] = "one";
        }
        // if (this.hovertemplate !== "") {
        //   trace['hovertemplate'] = this.hovertemplate;
        // }
        return trace;
    }
    make_plotdata(source = [], xaxis = "", ylist = [], type = "bar", colors = this.colorscheme) {
        let xdata = this.api.getValues(source, xaxis);
        let list = [];
        let i = 0;
        for (let name in ylist) {
            let theydata = this.api.getValues(source, ylist[i]);
            let tracename = ylist[i];
            if (this.outcomelabels.length == ylist.length) {
                tracename = this.outcomelabels[i];
            }
            let trace = this.make_trace(xdata, theydata, tracename, type = type);
            if (type == "hbar") {
                trace = this.make_trace(this.api.getValues(source, ylist[i]), xdata, ylist[i], type = "bar");
                trace["orientation"] = "h";
            }
            if (type == "bar" || type == "bar" || type == "scatter") {
                trace["marker"] = {
                    color: colors[i]
                };
            }
            if (type == "lines") {
                trace["line"] = {
                    color: colors[i],
                    width: this.linewidth * 2
                };
                trace["marker"] = {
                    color: colors[i],
                    size: this.linewidth * 5
                };
                trace['name'] = '';
                trace['hovertemplate'] = '%{x} | %{y:.2f}';
            }
            if (this.plottype == "area") {
                trace["fill"] = "tozeroy";
            }
            if (this.plottype == "violin") {
                trace = this.make_trace(name, theydata, ylist[i], type = type);
                trace['x'] = name;
                trace["line"] = {
                    color: colors[i],
                    width: this.linewidth
                };
            }
            if (this.plottype == "scatter") {
                trace['mode'] = 'markers';
                trace["marker"] = {
                    color: colors[i],
                    size: this.linewidth * 5
                };
                if (this.id != "") {
                    trace["text"] = this.api.getValues(source, this.id);
                    trace["textfont"] = { family: this.fontfamily };
                    if (trace['x'].length < 50) {
                        trace['mode'] = 'markers+text';
                        trace['textposition'] = 'bottom center';
                    }
                    else {
                        trace['mode'] = 'markers';
                    }
                }
            }
            list.push(trace);
            i = i + 1;
        }
        return list;
    }
}
PlotComponent.ɵfac = function PlotComponent_Factory(t) { return new (t || PlotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
PlotComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlotComponent, selectors: [["app-plot"]], inputs: { data: "data", xvalue: "xvalue", colorby: "colorby", outcomes: "outcomes", outcomelabels: "outcomelabels", plottype: "plottype", customdata: "customdata", customconfig: "customconfig", customlayout: "customlayout", custommargins: "custommargins", linewidth: "linewidth", showlegend: "showlegend", sort: "sort", sortx: "sortx", percent: "percent", percentx: "percentx", basecolor: "basecolor", colorscheme: "colorscheme", annotations: "annotations", hovertemplate: "hovertemplate", plottitle: "plottitle", plotsubtitle: "plotsubtitle", plotcaption: "plotcaption", n_yticks: "n_yticks", xtickformat: "xtickformat", xtitle: "xtitle", ytitle: "ytitle", id: "id", divid: "divid", fontfamily: "fontfamily", fontsize: "fontsize", fontcolor: "fontcolor", legendbg: "legendbg", legendposx: "legendposx", legendposy: "legendposy" }, outputs: { clicked: "clicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([angular_plotly_js__WEBPACK_IMPORTED_MODULE_2__.PlotlyService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["color", "primary"], [1, "plotlydiv", 3, "data", "divId", "debug", "layout", "config", "useResizeHandler", "plotlyClick"]], template: function PlotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PlotComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlotComponent_ng_container_1_Template, 2, 9, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.plotdata && ctx.mainconfig && ctx.plotlayout));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.plotdata && ctx.mainconfig && ctx.plotlayout);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinner, angular_plotly_js__WEBPACK_IMPORTED_MODULE_2__.PlotlyComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbG90LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3101:
/*!***********************************************************!*\
  !*** ./src/app/components/table/table/table.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);










function TableComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 6)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Suche");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TableComponent_ng_container_0_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.applyFilter($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TableComponent_ng_container_2_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thecol_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", thecol_r7, " ");
} }
function TableComponent_ng_container_2_mat_cell_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const thecol_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r11[thecol_r7]));
} }
function TableComponent_ng_container_2_mat_cell_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const thecol_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r11[thecol_r7]));
} }
function TableComponent_ng_container_2_mat_cell_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const thecol_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r11[thecol_r7]);
} }
function TableComponent_ng_container_2_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_ng_container_2_mat_cell_3_span_1_Template, 3, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_ng_container_2_mat_cell_3_span_2_Template, 3, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_ng_container_2_mat_cell_3_span_3_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thecol_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.outcomes_rate.indexOf(thecol_r7) >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.outcomes_numeric.indexOf(thecol_r7) >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.outcomes_rate.indexOf(thecol_r7) < 0 && ctx_r9.outcomes_numeric.indexOf(thecol_r7) < 0);
} }
function TableComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0)(1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_ng_container_2_mat_header_cell_2_Template, 2, 1, "mat-header-cell", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_ng_container_2_mat_cell_3_Template, 4, 3, "mat-cell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]()();
} if (rf & 2) {
    const thecol_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", thecol_r7);
} }
function TableComponent_mat_header_row_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
function TableComponent_mat_row_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
} }
class TableComponent {
    constructor() { }
    ngOnInit() {
        if (!this.outcomes_numeric) {
            this.outcomes_numeric = [];
        }
        ;
        if (!this.outcomes_rate) {
            this.outcomes_rate = [];
        }
        ;
        if (!this.pagesizes) {
            this.pagesizes = [10, 50, 100];
        }
        ;
        this.displayedColumns = this.columns;
        this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.data);
        if (this.addrank) {
        }
    }
    ngAfterViewInit() {
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
    }
    ngOnChanges(changes) {
        this.displayedColumns = this.columns;
        this.datasource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.data);
        this.datasource.sort = this.sort;
        this.datasource.paginator = this.paginator;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.datasource.filter = filterValue.trim().toLowerCase();
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { data: "data", columns: "columns", outcomes_numeric: "outcomes_numeric", outcomes_rate: "outcomes_rate", newlabels: "newlabels", pagesizes: "pagesizes", addfilter: "addfilter", addrank: "addrank" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 6, consts: [[4, "ngIf"], ["matSort", "", 1, "mat-elevation-z0", 3, "dataSource", "dataSourceChange"], [4, "ngFor", "ngForOf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["appearance", "outline"], ["matInput", "", "placeholder", "Suche...", 3, "keyup"], ["input", ""], [3, "matColumnDef"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["mat-sort-header", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableComponent_ng_container_0_Template, 6, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dataSourceChange", function TableComponent_Template_mat_table_dataSourceChange_1_listener($event) { return ctx.datasource = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_ng_container_2_Template, 4, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_mat_header_row_3_Template, 1, 0, "mat-header-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableComponent_mat_row_4_Template, 1, 0, "mat-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-paginator", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addfilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.datasource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", ctx.pagesizes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.PercentPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6601:
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _components_addUserDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/addUserDialog */ 6465);
/* harmony import */ var _components_updateUserDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/updateUserDialog */ 6827);
/* harmony import */ var _components_deleteUserDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/deleteUserDialog */ 8138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
























function AdminComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Administrationsaufgaben");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "In diesem Bereich k\u00F6nnen Dashboard Administratoren (\"Admin\") und Zi-Administratoren (\"Superadmin\") Daten oder Nutzer*innen hinzuf\u00FCgen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div")(7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.openAddUserDialog(ctx_r3.userAddDialog)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Nutzer hinzuf\u00FCgen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
function AdminComponent_div_4_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "th", 19);
} }
function AdminComponent_div_4_td_9_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " admin_panel_settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_4_td_9_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " account_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_4_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminComponent_div_4_td_9_mat_icon_1_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminComponent_div_4_td_9_mat_icon_2_Template, 2, 0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", element_r17["roles"].indexOf("superadmin") >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", element_r17["roles"].indexOf("superadmin") < 0);
} }
function AdminComponent_div_4_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Nutzer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_4_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r8.fullName(element_r20), " ");
} }
function AdminComponent_div_4_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Rechte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_4_td_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const role_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r22.toUpperCase(role_r23));
} }
function AdminComponent_div_4_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20)(1, "mat-chip-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminComponent_div_4_td_15_span_2_Template, 3, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", element_r21.roles);
} }
function AdminComponent_div_4_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Gruppen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_4_td_18_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const group_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r27.toUpperCase(group_r28));
} }
function AdminComponent_div_4_td_18_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-chip-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminComponent_div_4_td_18_ng_container_1_span_2_Template, 3, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", element_r24.usergroups.smed_reporting);
} }
function AdminComponent_div_4_td_18_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-chip-list", 25)(2, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Public Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function AdminComponent_div_4_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminComponent_div_4_td_18_ng_container_1_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminComponent_div_4_td_18_ng_container_2_Template, 4, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", element_r24["usergroups"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !element_r24["usergroups"] || !element_r24["usergroups"]["smed_reporting"]);
} }
function AdminComponent_div_4_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Aktionen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_4_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20)(1, "button", 27)(2, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_4_td_21_Template_mat_icon_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const element_r30 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.openUpdateUserDialog(element_r30)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 27)(5, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_4_td_21_Template_mat_icon_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const element_r30 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.openDeleteUserDialog(element_r30)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} }
function AdminComponent_div_4_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 30);
} }
function AdminComponent_div_4_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 31);
} }
function AdminComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Nutzerliste");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "In diesem Bereich k\u00F6nnen Nutzerberechtigungen ge\u00E4ndert werden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card")(6, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](7, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AdminComponent_div_4_th_8_Template, 1, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AdminComponent_div_4_td_9_Template, 3, 2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](10, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AdminComponent_div_4_th_11_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AdminComponent_div_4_td_12_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AdminComponent_div_4_th_14_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AdminComponent_div_4_td_15_Template, 3, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](16, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AdminComponent_div_4_th_17_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AdminComponent_div_4_td_18_Template, 3, 2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](19, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AdminComponent_div_4_th_20_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AdminComponent_div_4_td_21_Template, 7, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AdminComponent_div_4_tr_22_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AdminComponent_div_4_tr_23_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r1.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
function AdminComponent_div_5_mat_radio_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-radio-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Geodaten hinzuf\u00FCgen\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_5_div_19_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AdminComponent_div_5_div_19_div_6_mat_form_field_2_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", option_r48, " ");
} }
function AdminComponent_div_5_div_19_div_6_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 49)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Gebiet f\u00FCr Geodatendatei festlegen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AdminComponent_div_5_div_19_div_6_mat_form_field_2_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r49.uploadarea = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdminComponent_div_5_div_19_div_6_mat_form_field_2_mat_option_4_Template, 2, 2, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r45.uploadarea);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r45.areavalues);
} }
function AdminComponent_div_5_div_19_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44)(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminComponent_div_5_div_19_div_6_mat_form_field_2_Template, 5, 2, "mat-form-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 6)(4, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminComponent_div_5_div_19_div_6_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r51.changeListenerGEOJSON($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_5_div_19_div_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52); const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r46.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Daten Ausw\u00E4hlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r43.uploadarea);
} }
function AdminComponent_div_5_div_19_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AdminComponent_div_5_div_19_div_7_mat_form_field_10_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", option_r57, " ");
} }
function AdminComponent_div_5_div_19_div_7_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 49)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Wie lautet die Bezeichnung Regionen im geojson?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AdminComponent_div_5_div_19_div_7_mat_form_field_10_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r58.uploadareaid = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdminComponent_div_5_div_19_div_7_mat_form_field_10_mat_option_4_Template, 2, 2, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r55.uploadareaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r55.areafeatures);
} }
function AdminComponent_div_5_div_19_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53)(1, "div", 6)(2, "h3")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "2. GEOJSON beschreiben");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdminComponent_div_5_div_19_div_7_span_5_Template, 3, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AdminComponent_div_5_div_19_div_7_mat_form_field_10_Template, 5, 2, "mat-form-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r44.geodatafile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Die Datei hat ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 3, ctx_r44.geojsonfile["features"].length), " Regionen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", true);
} }
function AdminComponent_div_5_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 40)(1, "div", 6)(2, "h3")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "1. GEOJSON Datei hochladen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdminComponent_div_5_div_19_span_5_Template, 3, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AdminComponent_div_5_div_19_div_6_Template, 10, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AdminComponent_div_5_div_19_div_7_Template, 11, 5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r36.geojsonfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r36.geojsonfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r36.geojsonfile);
} }
function AdminComponent_div_5_div_20_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AdminComponent_div_5_div_20_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55)(1, "input", 56, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminComponent_div_5_div_20_div_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r63.datafile = ctx_r63.changeListener($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br")(4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_5_div_20_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r64); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r62.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Daten Ausw\u00E4hlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AdminComponent_div_5_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h3")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1. CSV Datei hochladen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdminComponent_div_5_div_20_span_4_Template, 3, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdminComponent_div_5_div_20_div_5_Template, 7, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r37.datafile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r37.datafile);
} }
function AdminComponent_div_5_mat_card_21_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span")(1, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AdminComponent_div_5_mat_card_21_div_8_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-list-item")(1, "mat-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 60)(4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const hinweis_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](hinweis_r70);
} }
function AdminComponent_div_5_mat_card_21_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-list")(2, "h3", 58)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Gefundene Fehler:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdminComponent_div_5_mat_card_21_div_8_mat_list_item_5_Template, 6, 1, "mat-list-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r67.datacheck);
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_5_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", option_r81, " ");
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 49)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Bereich");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_5_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r84); const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](row_r72.topic = $event); })("selectionChange", function AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_5_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r84); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r85.checkmetadata()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_5_mat_option_4_Template, 2, 2, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", row_r72.topic);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r73.topicoptions);
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", option_r88, " ");
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 49)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Art");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_7_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r91); const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](row_r72.type = $event); })("selectionChange", function AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_7_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r92.checkmetadata()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", row_r72.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r74.typeoptions);
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r97, "");
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 49)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Referenzkategorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r100); const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](row_r72.allforlevel = $event); })("selectionChange", function AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r100); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r101.checkmetadata()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_mat_option_4_Template, 2, 2, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", row_r72.allforlevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r94.getrefvalues(row_r72.varname));
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r104, "");
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 49)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00D6ffentliche Raumebenen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r107); const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](row_r72.publiclevels = $event); })("selectionChange", function AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r107); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r108.checkmetadata()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_mat_option_4_Template, 2, 2, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", row_r72.publiclevels);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r95.getrefvalues(row_r72.varname));
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_Template, 5, 2, "mat-form-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_Template, 5, 2, "mat-form-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r72.type == "level");
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00D6ffentlich");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Privat");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_5_mat_card_21_div_9_div_11_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6)(1, "mat-form-field", 75)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Indikatorenbeschreibung");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "textarea", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_5_mat_card_21_div_9_div_11_div_18_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r113); const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](row_r72.description = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", row_r72.description);
} }
const _c0 = function () { return ["ordering", "subgroups"]; };
function AdminComponent_div_5_mat_card_21_div_9_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 69)(1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_5_Template, 5, 2, "mat-form-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AdminComponent_div_5_mat_card_21_div_9_div_11_mat_form_field_7_Template, 5, 2, "mat-form-field", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_9_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AdminComponent_div_5_mat_card_21_div_9_div_11_ng_container_10_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 64)(12, "mat-chip-list")(13, "mat-chip", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminComponent_div_5_mat_card_21_div_9_div_11_Template_mat_chip_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r115.checkmetadata()); })("click", function AdminComponent_div_5_mat_card_21_div_9_div_11_Template_mat_chip_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r116); const row_r72 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](row_r72.public = !row_r72.public); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AdminComponent_div_5_mat_card_21_div_9_div_11_span_14_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AdminComponent_div_5_mat_card_21_div_9_div_11_span_15_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-chip", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_5_mat_card_21_div_9_div_11_Template_mat_chip_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r116); const row_r72 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](row_r72.adddescr = !row_r72.adddescr); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Beschreibung ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AdminComponent_div_5_mat_card_21_div_9_div_11_div_18_Template, 5, 1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r72.varname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c0).indexOf(row_r72.topic) >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0).indexOf(row_r72.topic) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", row_r72.public);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r72.public);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !row_r72.public);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", row_r72.adddescr);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", row_r72.adddescr);
} }
function AdminComponent_div_5_mat_card_21_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Thema");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Typ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Referenzkategorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AdminComponent_div_5_mat_card_21_div_9_div_11_Template, 19, 12, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div")(13, "div")(14, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_5_mat_card_21_div_9_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r120); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r119.metadone = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Beschreibung Fertig");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r68.metadatafile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !(ctx_r68.datacheck.length == 0));
} }
function AdminComponent_div_5_mat_card_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card")(1, "div")(2, "h3")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "2. Daten beschreiben");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdminComponent_div_5_mat_card_21_span_5_Template, 3, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Bitte pr\u00FCfen Sie die initinale Zuordnung sorgf\u00E4ltig. Jeder Upload muss mindestens zwei Variablen vom Bereich \"ordering\" enthalten (Typen: level,levelid). Ebenso sollten alle Subgruppenvariablen vom Typ Gruppe sein. Jede Variable aus den Bereichen \"ordering\" oder \"sungroups\" muss Angaben zur Referenzkategorie machen. Zellen f\u00FCr diese Kategorie m\u00FCssen auch in der Tabelle zu finden sein. Die Variablen aus den Bereichen Outcomes oder Demography sollten vom Typ 'rate' oder 'number' sein. Das Hinzuf\u00FCgen einer Indikatorenbeschreibung ist optional.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AdminComponent_div_5_mat_card_21_div_8_Template, 6, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AdminComponent_div_5_mat_card_21_div_9_Template, 16, 2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r38.metadone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r38.datacheck.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r38.metadatafile && !ctx_r38.metadone);
} }
function AdminComponent_div_5_div_22_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00FCberschreiben");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_5_div_22_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "nicht \u00FCberschreiben.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_5_div_22_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p")(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Achtung: Das Erg\u00E4nzen der Daten ist aufw\u00E4ndig und erfordert ggf. viel Zeit. Bitte erg\u00E4nzen Sie nur kleine Datenk\u00F6rper!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AdminComponent_div_5_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-card")(2, "h3")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "3. Sollen die aktuellen Daten \u00FCberschrieben werden?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p")(6, "mat-slide-toggle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_5_div_22_Template_mat_slide_toggle_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r125); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r124.replacedata = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AdminComponent_div_5_div_22_span_7_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AdminComponent_div_5_div_22_span_8_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AdminComponent_div_5_div_22_p_9_Template, 3, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r39.replacedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r39.replacedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r39.replacedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r39.replacedata);
} }
function AdminComponent_div_5_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "div")(2, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_5_div_23_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r126.uploadnewdata()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Hinzuf\u00FCgen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_5_div_23_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r127); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r128.resetall()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r40.metadone && !ctx_r40.uploadareaid);
} }
function AdminComponent_div_5_div_24_mat_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner", 81);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 50);
} }
function AdminComponent_div_5_div_24_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Hinweis: Bitte haben Sie Geduld: Es kann etwas dauern wenn viele Daten aktualisiert oder gel\u00F6scht werden m\u00FCssen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AdminComponent_div_5_div_24_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Upload erfolgreich!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function AdminComponent_div_5_div_24_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Fehler beim Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Fehlermeldung: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r132.uploaderror);
} }
function AdminComponent_div_5_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "mat-card")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Datenupload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdminComponent_div_5_div_24_mat_spinner_4_Template, 1, 1, "mat-spinner", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdminComponent_div_5_div_24_p_5_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AdminComponent_div_5_div_24_p_6_Template, 3, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AdminComponent_div_5_div_24_p_7_Template, 6, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r41.uploadres == "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r41.uploadres == "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r41.uploadres == "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r41.uploadres == "error");
} }
function AdminComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "h2")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Daten hinzuf\u00FCgen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Mehr Informationen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "hier");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-card")(9, "div")(10, "h3")(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Was soll hochgeladen werden?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-radio-group", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AdminComponent_div_5_Template_mat_radio_group_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r134); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r133.dataintend = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-radio-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Daten hinzuf\u00FCgen\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AdminComponent_div_5_mat_radio_button_16_Template, 2, 0, "mat-radio-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br")(18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AdminComponent_div_5_div_19_Template, 8, 3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AdminComponent_div_5_div_20_Template, 6, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AdminComponent_div_5_mat_card_21_Template, 10, 3, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AdminComponent_div_5_div_22_Template, 10, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AdminComponent_div_5_div_23_Template, 7, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AdminComponent_div_5_div_24_Template, 8, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.dataintend);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.areavalues);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.dataintend == "geodataupload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.dataintend == "dataupload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.metadatafile && ctx_r2.dataintend == "dataupload");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.metadone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.uploadres || ctx_r2.uploadres == "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.uploadres);
} }
class AdminComponent {
    constructor(api, auth, dialog) {
        this.api = api;
        this.auth = auth;
        this.dialog = dialog;
        this.usergroupoptions = ['kvuser'];
        this.selectedDataLevel = [];
        this.displayedColumns = ['symbol', 'user', 'rights', 'group', 'actions'];
    }
    ngOnInit() {
        this.currentuser = this.auth.getUserDetails();
        this.updateUserList();
    }
    updateUserList() {
        this.api.getTypeRequest('users/').subscribe(data => { this.users = data; });
    }
    copy(item) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
    openAddUserDialog() {
        const dialogRef = this.dialog.open(_components_addUserDialog__WEBPACK_IMPORTED_MODULE_0__.AddUserDialog, {});
        dialogRef.afterClosed().subscribe(result => {
            this.updateUserList();
        });
    }
    openUpdateUserDialog(user) {
        const dialogRef = this.dialog.open(_components_updateUserDialog__WEBPACK_IMPORTED_MODULE_1__.UpdateUserDialog, {
            data: user
        });
        dialogRef.afterClosed().subscribe(result => {
            this.updateUserList();
        });
    }
    openDeleteUserDialog(user) {
        const dialogRef = this.dialog.open(_components_deleteUserDialog__WEBPACK_IMPORTED_MODULE_2__.DeleteUserDialog, {
            data: user
        });
        dialogRef.afterClosed().subscribe(result => {
            this.updateUserList();
        });
    }
    toUpperCase(value) {
        return value.toLocaleUpperCase();
    }
    fullName(value) {
        if (value.full_name) {
            return value.full_name;
        }
        return `${value.anrede} ${value.firstname} ${value.lastname}`;
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
AdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 6, vars: 3, consts: [["fxLayout", "column", "fxLayoutGap", "1rem", 1, "container"], ["ngClass.lt-sm", "mobileheading"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", "fxLayoutAlign", "start space-between", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "10px", "fxShow.lt-md", "false", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", "fxLayoutAlign", "start space-between"], ["fxFlex", "100"], [1, "mat-caption", "greycolor"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-table", "", 1, "table", 3, "dataSource"], ["matColumnDef", "symbol"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "user"], ["matColumnDef", "rights"], ["matColumnDef", "group"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["class", "matListIcon", "color", "accent", "mat-list-icon", "", 4, "ngIf"], ["mat-list-icon", "", 4, "ngIf"], ["color", "accent", "mat-list-icon", "", 1, "matListIcon"], ["mat-list-icon", ""], [1, "smallchips"], [4, "ngFor", "ngForOf"], ["mat-icon-button", ""], ["mat-list-icon", "", 3, "click"], ["color", "warn", "mat-list-icon", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["fxLayout", "column", "fxLayoutGap", "10px", "fxShow.lt-md", "false"], ["href", "./assets/docs/Upload_Dateien.html"], [3, "ngModel", "ngModelChange"], ["value", "dataupload"], ["value", "geodataupload", 4, "ngIf"], ["fxLayout", "column", 4, "ngIf"], ["class", "add-margin", "fxLayoutAlign", "space-between", 4, "ngIf"], ["value", "geodataupload"], ["fxLayout", "column"], ["fxFlex.lt-md", "100", "fxFlex", "50", "fxLayout", "column", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "10px", 4, "ngIf"], ["color", "primary"], ["fxFlex.lt-md", "100", "fxFlex", "50", "fxLayout", "column"], ["appearance", "outline", 4, "ngIf"], ["type", "file", "accept", ".geojson", 2, "display", "none", 3, "change"], ["dataInput", ""], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["appearance", "outline"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["fxLayout", "column", "fxLayoutGap", "10px"], ["fxFlex.lt-md", "100", "fxFlex", "50", 4, "ngIf"], ["fxFlex.lt-md", "100", "fxFlex", "50"], ["type", "file", "accept", ".csv", 2, "display", "none", 3, "change"], ["class", "smalltab", "fxflex", "100", 4, "ngIf"], ["matSubheader", ""], ["color", "primary", "mat-list-icon", ""], ["mat-line", ""], [1, "primarycolor"], ["fxflex", "100", 1, "smalltab"], ["fxLayout", "row wrap", "fxLayoutGap", "10px", 1, "tabheader"], ["fxFlex", "15"], ["fxFlex", "20"], ["fxFlex", ""], ["class", "tabvalues primarycolor", "fxLayout", "row wrap", "fxLayoutGap", "10px", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["fxLayout", "row wrap", "fxLayoutGap", "10px", 1, "tabvalues", "primarycolor"], ["color", "primary", 3, "selected", "change", "click"], ["color", "primary", 3, "selected", "click"], ["fxFlex", "100", 4, "ngIf"], [3, "value", "valueChange", "selectionChange"], ["multiple", "", 3, "value", "valueChange", "selectionChange"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "rows", "10", "cols", "40", 2, "color", "black", 3, "ngModel", "ngModelChange"], ["style", "color:crimson;", 4, "ngIf"], [2, "color", "crimson"], ["fxLayoutAlign", "space-between", 1, "add-margin"], [3, "diameter", 4, "ngIf"], [3, "diameter"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AdminComponent_div_3_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AdminComponent_div_4_Template, 24, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AdminComponent_div_5_Template, 25, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.adduser && !ctx.adddata);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.adduser && !ctx.adddata);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.adddata);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListIconCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListSubheaderCssMatStyler, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggle, _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinner, _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__.MatChip, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultShowHideDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe], styles: [".tabheader[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 1.2rem;\n  border-bottom: 1px;\n  border-color: darkgray;\n}\n\n.smalltab[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 0.9rem;\n  background-color: white;\n  padding: 1.2em;\n  border-radius: 15px;\n}\n\n.tabvalues[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.smallchips[_ngcontent-%COMP%]   .mat-chip[_ngcontent-%COMP%] {\n  font-size: 9px;\n  margin-top: 8px;\n  margin-right: 2px;\n  margin-bottom: 4px;\n  margin-left: 8px;\n}\n\n.smallchips[_ngcontent-%COMP%]   .mat-standard-chip[_ngcontent-%COMP%] {\n  min-height: 18px;\n}\n\n.listbox[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.01);\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.matListIcon[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7QUFESjs7QUFLQTtFQUNFLDJDQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtBQUZGIiwiZmlsZSI6ImFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweDtcclxuICBib3JkZXItY29sb3I6IGRhcmtncmF5O1xyXG59XHJcblxyXG4uc21hbGx0YWIge1xyXG4gIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgbGluZS1oZWlnaHQ6IC45cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEuMmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi50YWJ2YWx1ZXMge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbWFsbGNoaXBzIHtcclxuICAubWF0LWNoaXAge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAubWF0LXN0YW5kYXJkLWNoaXAge1xyXG4gICAgbWluLWhlaWdodDogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0Ym94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHdpZHRoOiAxMDAlXHJcbn1cclxuXHJcbi5tYXRMaXN0SWNvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6465:
/*!*********************************************************!*\
  !*** ./src/app/pages/admin/components/addUserDialog.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserDialog": () => (/* binding */ AddUserDialog)
/* harmony export */ });
/* harmony import */ var C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
















function AddUserDialog_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const salutation_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", salutation_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", salutation_r4 === " " ? "keine Anrede" : salutation_r4, " ");
  }
}

function AddUserDialog_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const rights_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", rights_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", rights_r5.name, " ");
  }
}

function AddUserDialog_mat_option_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const dataLevel_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", dataLevel_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dataLevel_r6.name, " ");
  }
}

function AddUserDialog_mat_hint_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ihr Passwort (mindestens 12 Zeichen). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

class AddUserDialog {
  constructor(dialogRef, api, fb) {
    this.dialogRef = dialogRef;
    this.api = api;
    this.fb = fb;
    this.usergroupoptions = [{
      name: 'Public Access',
      value: 'public'
    }, {
      name: 'KV Benutzer',
      value: 'kvuser'
    }];
    this.userRights = [{
      name: 'User',
      value: 'user'
    }, {
      name: 'Admin',
      value: 'admin'
    }, {
      name: 'Superadmin',
      value: 'superadmin'
    }];
    this.salutations = ['Herr', 'Frau', 'Frau Dr.', 'Herr Dr.', 'Dr.', ' '];
  }

  ngOnInit() {
    // this.currentuser = this.auth.getUserDetails();
    this.buildForm();
    this.getUserGroups();
  }

  addUser() {
    const userDataAdd = this.myRegform.value;
    this.api.postTypeRequest("newuser", userDataAdd).subscribe(data => {});
  }

  getUserGroups() {
    var _this = this;

    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const metaData = yield _this.api.getmetadata("metadata");
      const getLevelId = metaData.filter(item => item.varname === 'levelid')[0];
      const levelRights = getLevelId.levelrights;

      if (levelRights) {
        const getCustomerLevels = Object.keys(levelRights).filter(key => !key.includes('kvuser') && !key.includes('public')).reduce((cur, key) => {
          return Object.assign(cur, {
            [key]: levelRights[key]
          });
        }, {});
        const levelKeys = Object.keys(getCustomerLevels);

        for (const level of levelKeys) {
          _this.usergroupoptions.push({
            name: level,
            value: level
          });
        }
      }
    })();
  }

  buildForm() {
    this.myRegform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      anrede: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: '',
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: '',
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: '',
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: '',
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: '',
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      dataLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: '',
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: '',
        disabled: false
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(12)])
    });
    this.myRegform.patchValue({
      "password": this.randomPassword()
    });
  }

  randomPassword() {
    return Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}

AddUserDialog.ɵfac = function AddUserDialog_Factory(t) {
  return new (t || AddUserDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
};

AddUserDialog.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AddUserDialog,
  selectors: [["addUserDialog"]],
  decls: 78,
  vars: 6,
  consts: [["fxLayout", "row wrap"], ["fxFlex", "100"], ["autocomplete", "on", 3, "formGroup"], ["appearance", "fill", 1, "full-width"], ["name", "anredefeld", "formControlName", "anrede", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", "required", "", 1, "full-width"], ["matInput", "", "placeholder", "First name", "name", "fname", "formControlName", "firstname"], ["matInput", "", "placeholder", "Last Name", "name", "lname", "formControlName", "lastname"], ["matInput", "", "type", "email", "placeholder", "Email", "formControlName", "email"], ["matSuffix", ""], ["name", "roles", "formControlName", "roles"], ["multiple", "", "name", "dataLevel", "formControlName", "dataLevel"], ["matInput", "", "type", "string", "formControlName", "password", "required", ""], [4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"]],
  template: function AddUserDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2")(3, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nutzer hinzuf\u00FCgen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card")(6, "form", 2)(7, "h2")(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Informationen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4")(11, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 3)(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Anrede");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AddUserDialog_mat_option_18_Template, 2, 2, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Bitte w\u00E4hlen Sie eine bevorzugte Anrede f\u00FCr sich");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 6)(22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Vorname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Fehler: Wir ben\u00F6tigen den Vornamen f\u00FCr die Registrierung.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field", 6)(28, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Nachname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Fehler: Wir ben\u00F6tigen den Nachnamen f\u00FCr die Registrierung.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h4")(34, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "E-Mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " des neuen Nutzers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Die E-Mail-Adresse ist ung\u00FCltig");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h4")(44, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Rechte");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-form-field", 3)(47, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, AddUserDialog_mat_option_48_Template, 2, 2, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Bitte w\u00E4hlen Sie eine Bereichtungsstufe aus.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h4")(52, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Daten-Level");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-form-field", 3)(55, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, AddUserDialog_mat_option_56_Template, 2, 2, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Bitte w\u00E4hlen Sie mindestens ein Datenlevel aus.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Initiales ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Passwort");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "mat-form-field", 3)(65, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Passwort");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Passwort zu kurz");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "mat-hint");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Bitte kopieren Sie das Passwort");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, AddUserDialog_mat_hint_72_Template, 2, 0, "mat-hint", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 15)(74, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddUserDialog_Template_button_click_74_listener() {
        return ctx.onNoClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Abbrechen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddUserDialog_Template_button_click_76_listener() {
        return ctx.addUser();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Hinzuf\u00FCgen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myRegform);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.salutations);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.userRights);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.usergroupoptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.myRegform.value.password.length < 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.myRegform.value.password.length < 12);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  encapsulation: 2
});

/***/ }),

/***/ 8138:
/*!************************************************************!*\
  !*** ./src/app/pages/admin/components/deleteUserDialog.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteUserDialog": () => (/* binding */ DeleteUserDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);







class DeleteUserDialog {
    constructor(dialogRef, api, data) {
        this.dialogRef = dialogRef;
        this.api = api;
        this.data = data;
    }
    deletUser() {
        alert('delete');
        // open dialog to reinsure it wasn't a mistake
        // this.api.deleteuser(user).subscribe(
        //   data => { this.updateUserList() });
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DeleteUserDialog.ɵfac = function DeleteUserDialog_Factory(t) { return new (t || DeleteUserDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
DeleteUserDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleteUserDialog, selectors: [["deleteUserDialog"]], decls: 11, vars: 1, consts: [["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between"], ["mat-raised-button", "", 3, "click"]], template: function DeleteUserDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2")(1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nutzer L\u00F6schen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card")(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0)(7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteUserDialog_Template_button_click_7_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Abrechen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteUserDialog_Template_button_click_9_listener() { return ctx.deletUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "L\u00F6schen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Sind Sie sicher dass Sie den User ", ctx.data.firstname, " l\u00F6schen wollen?");
    } }, dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective], encapsulation: 2 });


/***/ }),

/***/ 6827:
/*!************************************************************!*\
  !*** ./src/app/pages/admin/components/updateUserDialog.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserDialog": () => (/* binding */ UpdateUserDialog)
/* harmony export */ });
/* harmony import */ var C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);



















function UpdateUserDialog_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const salutation_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", salutation_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", salutation_r5 === " " ? "keine Anrede" : salutation_r5, " ");
  }
}

function UpdateUserDialog_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateUserDialog_div_42_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.togglePasswordChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Passwort \u00E4ndern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function UpdateUserDialog_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Passwort muss 8 Zeichen lang sein, min. einen Gro\u00DF.- und Kleinbuchstaben, eine Zahl und ein Sonderzeichen enthalten.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateUserDialog_div_43_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.togglePasswordChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateUserDialog_div_43_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u00C4ndern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function UpdateUserDialog_mat_chip_48_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function UpdateUserDialog_mat_chip_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateUserDialog_mat_chip_48_Template_mat_chip_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const right_r11 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.updateUserRole("role", ctx_r13.data, "user", right_r11.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UpdateUserDialog_mat_chip_48_mat_icon_1_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const right_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", right_r11.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", right_r11.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", right_r11.name, " ");
  }
}

function UpdateUserDialog_mat_chip_53_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function UpdateUserDialog_mat_chip_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateUserDialog_mat_chip_53_Template_mat_chip_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const dataLevel_r15 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.updateUserDataLevel("dataLevel", ctx_r17.data.email, "usergroups", dataLevel_r15.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UpdateUserDialog_mat_chip_53_mat_icon_1_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const dataLevel_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", dataLevel_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", dataLevel_r15.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", dataLevel_r15.name, " ");
  }
}

class UpdateUserDialog {
  constructor(dialogRef, api, fb, data) {
    this.dialogRef = dialogRef;
    this.api = api;
    this.fb = fb;
    this.data = data;
    this.isPasswordChange = false;
    this.userGroupOptions = [{
      name: 'Public Access',
      value: 'public',
      selected: false
    }, {
      name: 'KV Benutzer',
      value: 'kvuser',
      selected: false
    }];
    this.userRights = [{
      name: 'User',
      value: 'user',
      selected: false
    }, {
      name: 'Admin',
      value: 'admin',
      selected: false
    }, {
      name: 'Superadmin',
      value: 'superadmin',
      selected: false
    }];
    this.salutations = ['Herr', 'Frau', 'Frau Dr.', 'Herr Dr.', 'Dr.', ' '];
    this.strongPasswordRegx = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  }

  ngOnInit() {
    // this.currentuser = this.auth.getUserDetails();
    this.buildForm();
    this.getUserGroups();
  }

  getUserGroups() {
    var _this = this;

    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const metaData = yield _this.api.getmetadata("metadata");
      const getLevelId = metaData.filter(item => item.varname === 'levelid')[0];
      const levelRights = getLevelId.levelrights;

      if (levelRights) {
        const getCustomerLevels = Object.keys(levelRights).filter(key => !key.includes('kvuser') && !key.includes('public')).reduce((cur, key) => {
          return Object.assign(cur, {
            [key]: levelRights[key]
          });
        }, {});
        const levelKeys = Object.keys(getCustomerLevels);

        for (const level of levelKeys) {
          _this.userGroupOptions.push({
            name: level,
            value: level,
            selected: false
          });
        }
      }

      _this.rights();

      _this.dataLevel();
    })();
  }

  rights() {
    for (let role of this.data.roles) {
      for (let rights of this.userRights) {
        if (role === rights.value) {
          rights.selected = true;
        }

        if (this.data.is_admin && rights.value === 'admin') {
          rights.selected = true;
        }
      }
    }

    return this.userRights;
  }

  dataLevel() {
    for (let group of this.data.usergroups.smed_reporting) {
      for (let group_ of this.userGroupOptions) {
        if (group === group_.value) {
          group_.selected = true;
        }
      }
    }

    return this.userGroupOptions;
  }

  updateUserRole(type, user, key, value) {
    if (type === 'role') {
      if (value === 'user') {
        this.userRights.filter(i => {
          if (i.value === value) i.selected = !i.selected;
        });
        this.api.updateuser(user.email, value, !user['is_user']).subscribe();
      }

      if (value === 'admin') {
        this.userRights.filter(i => {
          if (i.value === value) i.selected = !i.selected;
        });
        this.api.updateuser(user.email, value, !user['is_admin']).subscribe();
      }

      if (value === 'superadmin') {
        this.userRights.filter(i => {
          if (i.value === value) i.selected = !i.selected;
        });
        this.api.updateuser(user.email, value, !user['is_superadmin']).subscribe();
      }
    }
  }

  updateUserDataLevel(type, user, key, value) {
    let add = false;

    if (value !== 'public') {
      add = true;
    }

    this.userGroupOptions.filter(i => {
      if (i.value === value) i.selected = !i.selected;
    });
    this.api.updateuser(user, key, add, value).subscribe();
  }

  buildForm() {
    this.myRegform = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      anrede: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: this.data.anrede,
        disabled: true
      }),
      firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: this.data.firstname,
        disabled: true
      }),
      lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: this.data.lastname,
        disabled: true
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.strongPasswordRegx)]
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: this.data.email,
        disabled: true
      }),
      roles: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: this.data.roles[this.data.roles.length - 1],
        disabled: false
      }),
      dataLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl({
        value: this.data.usergroups ? this.data.usergroups.smed_reporting : [],
        disabled: false
      })
    });
  }

  randomPassword() {
    return Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8);
  }

  togglePasswordChange() {
    this.isPasswordChange = !this.isPasswordChange;
  }

  changePassword() {
    const password = this.myRegform.value.password;
    this.api.changeuserpwd(this.data.email, password).subscribe(data => {});
    this.togglePasswordChange();
  }

  onNoClick() {
    this.dialogRef.close();
  }

}

UpdateUserDialog.ɵfac = function UpdateUserDialog_Factory(t) {
  return new (t || UpdateUserDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
};

UpdateUserDialog.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UpdateUserDialog,
  selectors: [["updateUserDialog"]],
  decls: 57,
  vars: 6,
  consts: [["fxLayout", "row wrap"], ["fxFlex", "100"], ["autocomplete", "on", 3, "formGroup"], ["appearance", "fill", 1, "full-width"], ["name", "anredefeld", "formControlName", "anrede"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "First name", "name", "fname", "formControlName", "firstname"], ["appearance", "fill", "required", "", 1, "full-width"], ["matInput", "", "placeholder", "Last Name", "name", "lname", "formControlName", "lastname"], ["matInput", "", "type", "email", "placeholder", "Email", "formControlName", "email"], ["matSuffix", ""], [4, "ngIf"], [1, "smallchips"], ["color", "primary", 3, "value", "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"], ["mat-raised-button", "", 3, "click"], ["matInput", "", "type", "password", "placeholder", "Passwort", "formControlName", "password"], [2, "font-size", "small", "font-style", "italic", "color", "gray"], ["color", "primary", 3, "value", "click"], ["matListIcon", "", 4, "ngIf"], ["matListIcon", ""]],
  template: function UpdateUserDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2")(3, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Nutzer Bearbeiten");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card")(6, "form", 2)(7, "h2")(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Informationen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4")(11, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 3)(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Anrede");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, UpdateUserDialog_mat_option_18_Template, 2, 2, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Bitte w\u00E4hlen Sie eine bevorzugte Anrede f\u00FCr sich");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field", 3)(22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Vorname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Fehler: Wir ben\u00F6tigen den Vornamen f\u00FCr die Registrierung.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field", 7)(28, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Nachname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Fehler: Wir ben\u00F6tigen den Nachnamen f\u00FCr die Registrierung.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h4")(34, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " E-Mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Die E-Mail-Adresse ist ung\u00FCltig");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, UpdateUserDialog_div_42_Template, 3, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, UpdateUserDialog_div_43_Template, 9, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h4")(45, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Rechte");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-chip-list", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, UpdateUserDialog_mat_chip_48_Template, 3, 3, "mat-chip", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h4")(50, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Daten-Level");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-chip-list", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, UpdateUserDialog_mat_chip_53_Template, 3, 3, "mat-chip", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 14)(55, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateUserDialog_Template_button_click_55_listener() {
        return ctx.onNoClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Schlie\u00DFen");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.myRegform);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.salutations);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isPasswordChange);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isPasswordChange);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.userRights);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.userGroupOptions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListIconCssMatStyler, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChip, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["mat-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  font-size: 20px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZVVzZXJEaWFsb2cuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoidXBkYXRlVXNlckRpYWxvZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24ge1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);












function LoginComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div")(2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_1_div_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Abbrechen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.form.valid);
} }
function LoginComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " ... in Bearbeitung ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Falscher Benutzername/Falsches Kennwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "mat-card")(2, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_1_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.login()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 5)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 5)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Kennwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LoginComponent_div_1_div_13_Template, 7, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginComponent_div_1_div_14_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LoginComponent_div_1_div_15_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.login_pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.login_pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginerror);
} }
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " You're in! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Ausloggen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class LoginComponent {
    constructor(_api, _auth, router, fb) {
        this._api = _api;
        this._auth = _auth;
        this.router = router;
        this.fb = fb;
    }
    ngOnInit() {
        this.login_pending = false;
        this.form = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        if (this._auth.getToken()) {
            this.loggedin = true;
        }
    }
    login() {
        this.login_pending = true;
        this._auth.login(this.form.value).subscribe(data => {
            setTimeout(() => {
                this.loggedin = true;
                this.router.navigate(['/']);
            }, 750);
        }, error => {
            this.loginerror = true;
        });
        this.login_pending = false;
    }
    logout() {
        this._auth.logout();
        this.router.navigate(['/']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 2, consts: [["fxLayout", "column", "fxLayoutGap", "1rem", 1, "container"], ["fxFlex", "100", "style", "max-width: 500px;", 4, "ngIf"], [4, "ngIf"], ["fxFlex", "100", 2, "max-width", "500px"], [3, "formGroup", "ngSubmit"], ["appearance", "fill", 1, "full-width"], ["matInput", "", "type", "email", "placeholder", "Email", "name", "email", "formControlName", "username", "autocomplete", "false", "required", ""], ["matInput", "", "type", "password", "name", "current-password", "formControlName", "password", "required", "", "autocomplete", "false"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [2, "color", "crimson"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 16, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loggedin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loggedin);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName], styles: ["input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, textarea[_ngcontent-%COMP%]:-webkit-autofill, textarea[_ngcontent-%COMP%]:-webkit-autofill:hover, textarea[_ngcontent-%COMP%]:-webkit-autofill:focus, select[_ngcontent-%COMP%]:-webkit-autofill, select[_ngcontent-%COMP%]:-webkit-autofill:hover, select[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  border: 0px solid rgb(255, 255, 255);\n  -webkit-text-fill-color: #ffffff;\n  -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFBO0FBQ0E7Ozs7Ozs7OztFQVNFLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5REFBQTtFQUNBLHlEQUFBO0VBQUEsaURBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENoYW5nZSBBdXRvY29tcGxldGUgc3R5bGVzIGluIENocm9tZSovXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXHJcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsIFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxyXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLFxyXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxyXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxyXG5zZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCxcclxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXHJcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcclxuICBib3JkZXI6IDBweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmZmZmY7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCByZ2JhKDAsIDAsIDAsIDApIGluc2V0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3836:
/*!****************************************************!*\
  !*** ./src/app/pages/private/private.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateComponent": () => (/* binding */ PrivateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_csvexport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/csvexport.service */ 9873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/plotly/plot/plot.component */ 6571);
/* harmony import */ var _components_table_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/table/table/table.component */ 3101);
/* harmony import */ var _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/infobox/box/box.component */ 5752);




















function PrivateComponent_div_9_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 12)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Analysezeitraum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-date-range-input", 13)(4, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function PrivateComponent_div_9_mat_form_field_3_Template_input_dateChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.updatequery("__change", true)); })("ngModelChange", function PrivateComponent_div_9_mat_form_field_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]((ctx_r19.settings["start"] = $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function PrivateComponent_div_9_mat_form_field_3_Template_input_dateChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.updatequery("__change", true)); })("ngModelChange", function PrivateComponent_div_9_mat_form_field_3_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]((ctx_r21.settings["end"] = $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-datepicker-toggle", 16)(7, "mat-date-range-picker", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rangePicker", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.settings["start"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.settings["end"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r16);
} }
function PrivateComponent_div_9_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 12)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Analysezeitraum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function PrivateComponent_div_9_mat_form_field_4_Template_input_dateChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.updatequery("__change", true)); })("ngModelChange", function PrivateComponent_div_9_mat_form_field_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]((ctx_r25.settings["start"] = $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "mat-datepicker-toggle", 16)(5, "mat-datepicker", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r22)("ngModel", ctx_r2.settings["start"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r22);
} }
function PrivateComponent_div_9_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Die maximale L\u00E4nge des Analysezeitraums betr\u00E4gt 64 Tage. Ihre Anfrage kann nicht ausgef\u00FChrt werden. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PrivateComponent_div_9_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Bitte beachten Sie, aufgrund der gro\u00DFen Zahl betroffener Datens\u00E4tze kann es zu einer verz\u00F6gerten Auswertung kommen. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PrivateComponent_div_9_mat_chip_15_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrivateComponent_div_9_mat_chip_15_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const item_r26 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.updatequery("levelid", item_r26)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx_r5.settings["levelid"] == item_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r26, " ");
} }
function PrivateComponent_div_9_mat_chip_21_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrivateComponent_div_9_mat_chip_21_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const item_r29 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.updatequery("SmED_Level", item_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx_r6.SmED_Level == item_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r29, " ");
} }
function PrivateComponent_div_9_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Hinweis Assessments mit SmED-Patient sind ab dem 6.12.21 enthalten. Sie k\u00F6nnen aktuell noch nicht KVen zugeordnet werden. Bitte w\u00E4hlen Sie \"Gesamt\" als Region aus.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PrivateComponent_div_9_mat_chip_27_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrivateComponent_div_9_mat_chip_27_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const item_r32 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r33.updatequery("SmED_Modul", item_r32)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx_r8.SmED_Modul == item_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r32, " ");
} }
function PrivateComponent_div_9_mat_chip_33_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrivateComponent_div_9_mat_chip_33_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const item_r35 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.updatequery("outcome", item_r35)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx_r9.settings["outcome"] == item_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r35, " ");
} }
function PrivateComponent_div_9_div_34_mat_chip_7_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrivateComponent_div_9_div_34_mat_chip_7_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const item_r39 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.updatequery("diffmerkmale", item_r39)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx_r38.settings["diffmerkmale"].includes(item_r39));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r39, " ");
} }
function PrivateComponent_div_9_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Differenzierungsmerkmale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "(max. 2 Merkmale m\u00F6glich)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p")(6, "mat-chip-list", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PrivateComponent_div_9_div_34_mat_chip_7_Template, 2, 2, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r10.diffmerkmale);
} }
function PrivateComponent_div_9_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PrivateComponent_div_9_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Keine Ergebnisse zur Anzeige");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function PrivateComponent_div_9_div_37_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-box", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r42.tsqueryresult[0]["DAUERsmed"])("numberformat", "1.0-0")("maincolor", ctx_r42.colorsscheme[2].concat("80"))("description", "Mittlere Dauer SmED");
} }
function PrivateComponent_div_9_div_37_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-box", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r43.tsqueryresult[0]["DAUERdispo"])("numberformat", "1.0-0")("maincolor", ctx_r43.colorsscheme[2].concat("80"))("description", "Mittlere Dauer Disposition");
} }
function PrivateComponent_div_9_div_37_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-box", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r44.tsqueryresult[0]["Anzahl_Fragen"])("numberformat", "1.0-0")("maincolor", ctx_r44.colorsscheme[1].concat("80"))("description", "Mittlere Anzahl Fragen SmED");
} }
function PrivateComponent_div_9_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-box", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PrivateComponent_div_9_div_37_div_3_Template, 2, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PrivateComponent_div_9_div_37_div_4_Template, 2, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PrivateComponent_div_9_div_37_div_5_Template, 2, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r13.tsqueryresult[0]["count"])("numberformat", "1.0-0")("maincolor", ctx_r13.colorsscheme[4].concat("80"))("description", "Assessments in ".concat(ctx_r13.settings["levelid"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.tsqueryresult[0]["DAUERsmed"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.tsqueryresult[0]["DAUERdispo"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.tsqueryresult[0]["Anzahl_Fragen"]);
} }
function PrivateComponent_div_9_div_38_div_1_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["count"]; };
function PrivateComponent_div_9_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Anzahl Assessments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-plot", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dataChange", function PrivateComponent_div_9_div_38_div_1_Template_app_plot_dataChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r49.tsqueryresult = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div")(6, "mat-expansion-panel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("opened", function PrivateComponent_div_9_div_38_div_1_Template_mat_expansion_panel_opened_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r51.panelOpenState = true); })("closed", function PrivateComponent_div_9_div_38_div_1_Template_mat_expansion_panel_closed_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.panelOpenState = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PrivateComponent_div_9_div_38_div_1_mat_icon_8_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-panel-description")(10, "div", 31)(11, "p")(12, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrivateComponent_div_9_div_38_div_1_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r53.exportascsv("daten.csv", ctx_r53.tsqueryresult)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r45.tsqueryresult)("xvalue", ctx_r45.settings["diffmerkmale"][0])("fontcolor", "white")("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r45.panelOpenState);
} }
function PrivateComponent_div_9_div_38_div_2_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["#d0f321"]; };
const _c2 = function () { return ["Anteil"]; };
function PrivateComponent_div_9_div_38_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Anteil Assessments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-plot", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dataChange", function PrivateComponent_div_9_div_38_div_2_Template_app_plot_dataChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r55.tsqueryresult = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div")(6, "mat-expansion-panel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("opened", function PrivateComponent_div_9_div_38_div_2_Template_mat_expansion_panel_opened_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r57.panelOpenState = true); })("closed", function PrivateComponent_div_9_div_38_div_2_Template_mat_expansion_panel_closed_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r58.panelOpenState = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PrivateComponent_div_9_div_38_div_2_mat_icon_8_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-panel-description")(10, "div", 31)(11, "p")(12, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrivateComponent_div_9_div_38_div_2_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r59.exportascsv("daten.csv", ctx_r59.tsqueryresult)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r46.tsqueryresult)("xvalue", ctx_r46.settings["diffmerkmale"][0])("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c1))("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c2))("percent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r46.panelOpenState);
} }
const _c3 = function () { return ["orange"]; };
const _c4 = function (a0) { return [a0]; };
function PrivateComponent_div_9_div_38_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-plot", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dataChange", function PrivateComponent_div_9_div_38_div_3_ng_container_4_Template_app_plot_dataChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r63.tsqueryresult = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r60.tsqueryresult)("xvalue", ctx_r60.settings["diffmerkmale"][0])("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c3))("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c4, ctx_r60.tsquery["outcome"]));
} }
function PrivateComponent_div_9_div_38_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dataChange", function PrivateComponent_div_9_div_38_div_3_ng_container_5_Template_app_table_dataChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r65.tsqueryresult = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r61.tsqueryresult)("outcomes_rate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c2))("columns", ctx_r61.restablecols);
} }
function PrivateComponent_div_9_div_38_div_3_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PrivateComponent_div_9_div_38_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PrivateComponent_div_9_div_38_div_3_ng_container_4_Template, 2, 8, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PrivateComponent_div_9_div_38_div_3_ng_container_5_Template, 2, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div")(7, "mat-expansion-panel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("opened", function PrivateComponent_div_9_div_38_div_3_Template_mat_expansion_panel_opened_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r67.panelOpenState = true); })("closed", function PrivateComponent_div_9_div_38_div_3_Template_mat_expansion_panel_closed_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r69.panelOpenState = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PrivateComponent_div_9_div_38_div_3_mat_icon_9_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-panel-description")(11, "div", 31)(12, "p")(13, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrivateComponent_div_9_div_38_div_3_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r68); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r70.exportascsv("daten.csv", ctx_r70.tsqueryresult)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r47.settings["outcome"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r47.settings["diffmerkmale"].includes("Hauptbeschwerde") && !ctx_r47.settings["diffmerkmale"].includes("Beschwerde"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r47.settings["diffmerkmale"].includes("Hauptbeschwerde") || ctx_r47.settings["diffmerkmale"].includes("Beschwerde"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r47.panelOpenState);
} }
function PrivateComponent_div_9_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PrivateComponent_div_9_div_38_div_1_Template, 20, 6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PrivateComponent_div_9_div_38_div_2_Template, 20, 9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PrivateComponent_div_9_div_38_div_3_Template, 21, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.tsqueryresult);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.tsqueryresult);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.tsqueryresult.length > 0 && ctx_r14.tsquery["outcome"] || ctx_r14.settings["diffmerkmale"].includes("Hauptbeschwerde") || ctx_r14.settings["diffmerkmale"].includes("Beschwerde"));
} }
function PrivateComponent_div_9_div_39_div_1_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PrivateComponent_div_9_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Anzahl Assessments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-plot", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dataChange", function PrivateComponent_div_9_div_39_div_1_Template_app_plot_dataChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r75.tsqueryresult = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div")(6, "mat-expansion-panel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("opened", function PrivateComponent_div_9_div_39_div_1_Template_mat_expansion_panel_opened_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r77.panelOpenState = true); })("closed", function PrivateComponent_div_9_div_39_div_1_Template_mat_expansion_panel_closed_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r76); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r78.panelOpenState = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PrivateComponent_div_9_div_39_div_1_mat_icon_8_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-panel-description")(10, "div", 31)(11, "p")(12, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrivateComponent_div_9_div_39_div_1_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r76); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r79.exportascsv("daten.csv", ctx_r79.tsqueryresult)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r71.tsqueryresult)("xvalue", ctx_r71.settings["diffmerkmale"][0])("fontcolor", "white")("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0))("colorby", ctx_r71.settings["diffmerkmale"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r71.panelOpenState);
} }
function PrivateComponent_div_9_div_39_div_2_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PrivateComponent_div_9_div_39_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Anteil Assessments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "app-plot", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dataChange", function PrivateComponent_div_9_div_39_div_2_Template_app_plot_dataChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r81.tsqueryresult = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div")(6, "mat-expansion-panel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("opened", function PrivateComponent_div_9_div_39_div_2_Template_mat_expansion_panel_opened_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r83.panelOpenState = true); })("closed", function PrivateComponent_div_9_div_39_div_2_Template_mat_expansion_panel_closed_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r84.panelOpenState = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PrivateComponent_div_9_div_39_div_2_mat_icon_8_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-panel-description")(10, "div", 31)(11, "p")(12, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrivateComponent_div_9_div_39_div_2_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r85.exportascsv("daten.csv", ctx_r85.tsqueryresult)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r72.tsqueryresult)("xvalue", ctx_r72.settings["diffmerkmale"][0])("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c1))("colorby", ctx_r72.settings["diffmerkmale"][1])("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c2))("percent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r72.panelOpenState);
} }
function PrivateComponent_div_9_div_39_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-plot", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dataChange", function PrivateComponent_div_9_div_39_div_3_ng_container_4_Template_app_plot_dataChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r89.tsqueryresult = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r86.tsqueryresult)("xvalue", ctx_r86.settings["diffmerkmale"][0])("colorby", ctx_r86.settings["diffmerkmale"][1])("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c3))("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c4, ctx_r86.tsquery["outcome"]));
} }
function PrivateComponent_div_9_div_39_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dataChange", function PrivateComponent_div_9_div_39_div_3_ng_container_5_Template_app_table_dataChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r91.tsqueryresult = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r87.tsqueryresult)("outcomes_rate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c2))("columns", ctx_r87.restablecols);
} }
function PrivateComponent_div_9_div_39_div_3_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PrivateComponent_div_9_div_39_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 35)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PrivateComponent_div_9_div_39_div_3_ng_container_4_Template, 2, 9, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, PrivateComponent_div_9_div_39_div_3_ng_container_5_Template, 2, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div")(7, "mat-expansion-panel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("opened", function PrivateComponent_div_9_div_39_div_3_Template_mat_expansion_panel_opened_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r93.panelOpenState = true); })("closed", function PrivateComponent_div_9_div_39_div_3_Template_mat_expansion_panel_closed_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r94); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r95.panelOpenState = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PrivateComponent_div_9_div_39_div_3_mat_icon_9_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-panel-description")(11, "div", 31)(12, "p")(13, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrivateComponent_div_9_div_39_div_3_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r94); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r96.exportascsv("daten.csv", ctx_r96.tsqueryresult)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r73.settings["outcome"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r73.settings["diffmerkmale"].includes("Hauptbeschwerde") && !ctx_r73.settings["diffmerkmale"].includes("Beschwerde"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r73.settings["diffmerkmale"].includes("Hauptbeschwerde") || ctx_r73.settings["diffmerkmale"].includes("Beschwerde"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r73.panelOpenState);
} }
function PrivateComponent_div_9_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PrivateComponent_div_9_div_39_div_1_Template, 20, 7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PrivateComponent_div_9_div_39_div_2_Template, 20, 10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PrivateComponent_div_9_div_39_div_3_Template, 21, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.tsqueryresult);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.tsqueryresult);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.tsqueryresult.length > 0 && (ctx_r15.tsquery["outcome"] || (ctx_r15.settings["diffmerkmale"].includes("Hauptbeschwerde") || ctx_r15.settings["diffmerkmale"].includes("Beschwerde"))));
} }
const _c5 = function () { return ["Alle", "Telefon", "Tresen", "Patient"]; };
const _c6 = function () { return ["Alle", "SmED-Triage", "SmED-COVID-kurz", "SmED-COVID-integriert", "SmED-Kontakt+"]; };
function PrivateComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div")(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PrivateComponent_div_9_mat_form_field_3_Template, 9, 4, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PrivateComponent_div_9_mat_form_field_4_Template, 7, 3, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div")(6, "mat-slide-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PrivateComponent_div_9_Template_mat_slide_toggle_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r97.isSingleDayAnalyses = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " ein Tag Analyse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PrivateComponent_div_9_p_8_Template, 2, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PrivateComponent_div_9_p_9_Template, 2, 0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div")(11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "p")(14, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, PrivateComponent_div_9_mat_chip_15_Template, 2, 2, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div")(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p")(20, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, PrivateComponent_div_9_mat_chip_21_Template, 2, 2, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, PrivateComponent_div_9_p_22_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Modul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p")(26, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, PrivateComponent_div_9_mat_chip_27_Template, 2, 2, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div")(29, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Outcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "p")(32, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, PrivateComponent_div_9_mat_chip_33_Template, 2, 2, "mat-chip", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, PrivateComponent_div_9_div_34_Template, 8, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, PrivateComponent_div_9_div_35_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, PrivateComponent_div_9_div_36_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, PrivateComponent_div_9_div_37_Template, 6, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, PrivateComponent_div_9_div_38_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, PrivateComponent_div_9_div_39_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.isSingleDayAnalyses);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isSingleDayAnalyses);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.isSingleDayAnalyses);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.duration > 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.duration > 7 && ctx_r0.duration <= 64 && ctx_r0.settings["levelid"] == "Gesamt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.levelvalues);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](16, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.SmED_Level == "Patient");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.outcomes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.settings["outcome"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.tsqueryresult.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.settings["diffmerkmale"].length == 0 && ctx_r0.tsqueryresult.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.settings["diffmerkmale"].length == 1 && ctx_r0.tsqueryresult.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.settings["diffmerkmale"].length == 2 && ctx_r0.tsqueryresult.length > 0);
} }
class PrivateComponent {
    constructor(api, auth, csv) {
        this.api = api;
        this.auth = auth;
        this.csv = csv;
        this.tsquery = {};
        this.tsqueryresult = {};
        this.bevrefdata = {};
        this.restablecols = [];
        this.progress = false;
        this.levelvalues = [
            'Gesamt',
            'Baden-Württemberg',
            'Bayern',
            'Berlin',
            'Brandenburg',
            'Bremen',
            'Hamburg',
            'Hessen',
            'Mecklenburg-Vorpommern',
            'Niedersachsen',
            'Nordrhein-Westfalen',
            'Nordrhein',
            'Westfalen-Lippe',
            'Rheinland-Pfalz',
            'Saarland',
            'Sachsen',
            'Sachsen-Anhalt',
            'Schleswig-Holstein',
            'Thüringen'
        ];
        this.outcomes = [
            //'Anteil Assessments', 
            'Anzahl Assessments',
            //'Anzahl Assessments je 100 Tsd. Einw.', ## Not possible due to missing reference data
            'Anzahl Beschwerden pro Assessment',
            'Anzahl Fragen je Assessment',
            'Mittlere Dauer je Assessment',
            'Mittlere Dauer Disposition',
            //'Anteil Assessment an Disposition',
            //'Häufigste Beschwerden',
            //'Häufigste Hauptbeschwerden'
        ];
        this.diffmerkmale = [
            'KV',
            'Alter',
            'Geschlecht',
            'Wochentag',
            'Empfehlung Dringlichkeit',
            'Empfehlung Ort',
            'Entscheidung Dringlichkeit',
            'Entscheidung Ort',
            'Hauptbeschwerde',
            'Beschwerde'
        ];
        this.diffvars = {
            'KV': 'levelid',
            'Alter': ['ALTER_id', 'ALTER_text'],
            'Geschlecht': ['Geschlecht'],
            'Wochentag': [],
            'Empfehlung Dringlichkeit': ['TTTsmed_id', 'TTTsmed_text'],
            'Empfehlung Ort': ['POCsmed_id', 'POCsmed_text'],
            'Entscheidung Dringlichkeit': ['TTTdispo_id', 'TTTdispo_text'],
            'Entscheidung Ort': ['POCdispo_id', 'POCdispo_text'],
            'Hauptbeschwerde': ['Hauptbeschwerde'],
            'Beschwerde': ['Beschwerden_gesamt']
        };
        this.SmED_Modul = "Alle";
        this.SmED_Level = "Alle";
        this.isSingleDayAnalyses = false;
    }
    ngOnInit() {
        this.colorsscheme = this.api.makescale(5);
        //console.log('colors',this.colorsscheme);
        this.settings = { 'analyzeall': true, 'level': 'KV', 'levelid': 'Gesamt', 'diffmerkmale': [] };
        //testesttings
        this.settings = {
            "analyzeall": true, "level": "KV", "levelid": "Gesamt", "diffmerkmale": [],
            "start": new Date("2022-01-02"),
            "end": new Date("2022-01-08"), "outcome": "Anzahl Assessments"
        };
        this.timeseriesquery();
    }
    updatequery(key, value) {
        //console.log("Settings changed");
        if (key != "__change" && key != "diffmerkmale") {
            this.settings[key] = value;
        }
        ;
        if (key == "levelid" && value == "Gesamt") {
            this.settings['analyzeall'] = true;
        }
        ;
        if (key == 'outcome' && value == 'Anzahl Assessments je 100 Tsd. Einw.') {
            this.settings['diffmerkmale'] = [];
        }
        if (key == 'diffmerkmale') {
            if (this.settings['diffmerkmale'].includes(value)) {
                this.settings['diffmerkmale'] = this.settings['diffmerkmale'].filter(function (item) { return item !== value; });
            }
            else {
                if (!this.settings['diffmerkmale'].includes(value) && this.settings['diffmerkmale'].length < 2) {
                    if (!((this.settings['outcome'] == 'Anzahl Assessments je 100 Tsd. Einw.') && ['Alter', 'Geschlecht'].includes(value)))
                        this.settings['diffmerkmale'].push(value);
                }
                ;
            }
            ;
        }
        if (key == 'SmED_Modul') {
            this.SmED_Modul = value;
        }
        if (key == 'SmED_Level') {
            this.SmED_Level = value;
        }
        if (this.checkparams()) {
            this.timeseriesquery();
        }
    }
    checkparams() {
        let res = true;
        this.duration = 0;
        if (this.settings['start'] && this.settings['end']) {
            this.duration = (this.settings['end'] - this.settings['start']) / 1000 / 60 / 60 / 24;
        }
        ;
        if (this.duration == 0 || this.duration > 90) {
            res = false;
        }
        ;
        if (!this.settings['outcome']) {
            res = false;
        }
        return res;
    }
    timeseriesquery() {
        this.progress = true;
        this.tsqueryresult = [];
        let _start = new Date(this.settings['start']);
        let _end = new Date(this.settings['end']);
        if (this.isSingleDayAnalyses) {
            _end = _start;
        }
        function setDate(date) {
            const minutesOffset = new Date(date.setMinutes(date.getMinutes() - date.getTimezoneOffset()));
            return minutesOffset.toISOString().substring(0, 10);
        }
        let start = "";
        if (this.settings['start']) {
            start = setDate(_start);
        }
        ;
        let end = "";
        if (this.settings['end']) {
            end = setDate(_end);
        }
        ;
        this.tsqueryresult = {};
        this.bevrefdata = {};
        this.tsquery = {
            "startdate": start.slice(0, 10),
            "stopdate": end.slice(0, 10),
            "timeframe": "none",
            "outcome": NaN,
            "filterlist": { 'level': 'KV' },
            "subgroups": [],
            "client_id": this.api.REST_API_SERVER_CLIENTID
        };
        if (this.settings['levelid'] != "Gesamt") {
            this.tsquery['filterlist']['levelid'] = this.settings['levelid'];
        }
        ;
        for (let item of this.settings['diffmerkmale']) {
            this.tsquery['subgroups'] = this.tsquery['subgroups'].concat(this.diffvars[item]);
        }
        ;
        if (this.settings['diffmerkmale'].includes('Wochentag')) {
            this.tsquery['timeframe'] = 'weekday';
        }
        ;
        if ('Anzahl Beschwerden pro Assessment' == this.settings['outcome']) {
            this.tsquery['outcome'] = "Anzahl_Beschwerden";
        }
        ;
        if ('Anzahl Fragen je Assessment' == this.settings['outcome']) {
            this.tsquery['outcome'] = "Anzahl_Fragen";
        }
        ;
        if ('Mittlere Dauer je Assessment' == this.settings['outcome']) {
            this.tsquery['outcome'] = "DAUERsmed";
        }
        ;
        if ('Mittlere Dauer Disposition' == this.settings['outcome']) {
            this.tsquery['outcome'] = "DAUERdispo";
            this.tsquery["filterlist"]['DAUERdispo'] = { $gte: 0 };
        }
        ;
        if ('Anteil Assessment an Disposition' == this.settings['outcome']) {
            // later 2 Queries need to be done, one for DAUERsmed and one DAUERdispo
            // console.log("Not implemented yet!");
        }
        ;
        if ('Häufigste Beschwerden' == this.settings['outcome']) {
            this.tsquery['outcome'] = "Beschwerden_gesamt";
        }
        ;
        if ('Häufigste Hauptbeschwerden' == this.settings['outcome']) {
            this.tsquery['outcome'] = "Hauptbeschwerde";
        }
        ;
        this.restablecols = this.settings['diffmerkmale'].concat([this.tsquery['outcome'], 'Anzahl', 'Anteil']);
        if (!this.tsquery['outcome']) {
            this.restablecols = this.settings['diffmerkmale'].concat(['Anzahl', 'Anteil']);
        }
        // Level/Modul
        if (this.SmED_Level != "Alle") {
            if (this.SmED_Level != "Patient") {
                this.tsquery["filterlist"]['SMED_Level'] = this.SmED_Level;
            }
            else {
                this.tsquery["filterlist"]['SMED_Level'] = 'pubusersmed';
            }
        }
        if (this.SmED_Modul != "Alle") {
            this.tsquery["filterlist"]['SMED_Modul'] = this.SmED_Modul;
        }
        this.api.postTypeRequest('get_data/', {
            "client_id": this.api.REST_API_SERVER_CLIENTID,
            "groupinfo": {
                "level": "KV", "levelid": this.settings['levelid'],
                "Jahr": parseInt(this.tsquery['stopdate'].slice(0, 4)),
                "Monat": parseInt(this.tsquery['stopdate'].slice(5, 7))
            },
            "showfields": ['level', 'levelid', 'Jahr', 'Monat', 'KM6Versicherte', 'BEVSTAND']
        }).subscribe(data => {
            this.bevrefdata = data['data'][0];
            this.api.postTypeRequest('analytics/timeseries/', this.tsquery).subscribe(data => { this.tsqueryresult = this.preparedata(data); });
        });
    }
    preparedata(input) {
        let output = [];
        if (input.length > 0) {
            let allitems = this.api.sumArray(this.api.getValues(input, 'count'));
            for (let item of input) {
                //item['Bev']=this.bevrefdata['BEVSTAND'];        
                if (parseFloat(item['count']) > 0) {
                    item['Anzahl'] = item['count'];
                    item['Anteil'] = Math.round(1000 * item['count'] / allitems) / 1000;
                }
                //item['Je100Tsd']=Math.round(1e6*item['count']/item['Bev'])/10;
                item['Alter'] = item['ALTER_text'];
                item['Wochentag'] = this.api.getweekdayname(item['timeframe'], true);
                item['KV'] = item['levelid'];
                if (item['POCsmed_text']) {
                    item['Empfehlung Ort'] = item['POCsmed_text'];
                }
                ;
                if (item['TTTsmed_text']) {
                    item['Empfehlung Dringlichkeit'] = item['TTTsmed_text'];
                }
                ;
                if (item['POCdispo_text']) {
                    item['Entscheidung Ort'] = item['POCdispo_text'];
                }
                ;
                if (item['TTTdispo_text']) {
                    item['Entscheidung Dringlichkeit'] = item['TTTdispo_text'];
                }
                ;
                if (item['Beschwerden_gesamt']) {
                    item['Beschwerde'] = item['Beschwerden_gesamt'];
                    delete item['Beschwerden_gesamt'];
                }
                ;
                if (item['Anzahl']) {
                    output.push(item);
                }
                ;
            }
            if (this.settings['diffmerkmale'].includes('Alter')) {
                output = this.api.sortArray(output, 'ALTER_id');
            }
        }
        this.progress = false;
        return output;
    }
    exportascsv(name, data) {
        this.csv.exportToCsv(name, data);
        this.csv.exportToCsv(name + "_settings.csv", [this.settings]);
    }
}
PrivateComponent.ɵfac = function PrivateComponent_Factory(t) { return new (t || PrivateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_csvexport_service__WEBPACK_IMPORTED_MODULE_2__.CsvexportService)); };
PrivateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PrivateComponent, selectors: [["app-private"]], decls: 10, vars: 1, consts: [["fxLayout", "column", "fxLayoutGap", "30px", 1, "container"], ["ngClass.lt-sm", "mobileheading"], [1, "lightgreycolor"], [2, "color", "white"], [4, "ngIf"], ["appearance", "fill", 4, "ngIf"], [2, "padding-bottom", "15px", 3, "ngModel", "ngModelChange"], ["class", "accentcolor", 4, "ngIf"], ["class", "mat-caption greycolor", 4, "ngIf"], ["color", "primary", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "mat-caption lightgreycolor", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngIf"], ["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Beginn", 3, "ngModel", "dateChange", "ngModelChange"], ["matEndDate", "", "placeholder", "Ende", 3, "ngModel", "dateChange", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", 3, "matDatepicker", "ngModel", "dateChange", "ngModelChange"], [1, "accentcolor"], [1, "mat-caption", "greycolor"], ["color", "primary", 3, "selected", "click"], [1, "mat-caption", "lightgreycolor"], ["multiple", ""], [3, "value", "numberformat", "maincolor", "description"], ["fxLayout", "row wrap"], ["fxFlex", "50", "fxFlex.lt-md", "100", 4, "ngIf"], ["fxFlex", "100", "fxFlex.lt-md", "100", 4, "ngIf"], ["fxFlex", "50", "fxFlex.lt-md", "100"], ["plottype", "bar", 3, "data", "xvalue", "fontcolor", "outcomes", "dataChange"], [1, "mat-elevation-z0", 3, "opened", "closed"], [1, "mat-caption"], [3, "click"], ["inline", "true"], ["plottype", "bar", 3, "data", "xvalue", "fontcolor", "colorscheme", "outcomes", "percent", "dataChange"], ["fxFlex", "100", "fxFlex.lt-md", "100"], ["plottype", "bar", 3, "data", "xvalue", "fontcolor", "colorscheme", "outcomes", "dataChange"], [3, "data", "outcomes_rate", "columns", "dataChange"], ["plottype", "bar", 3, "data", "xvalue", "fontcolor", "outcomes", "colorby", "dataChange"], ["plottype", "bar", 3, "data", "xvalue", "fontcolor", "colorscheme", "colorby", "outcomes", "percent", "dataChange"], ["plottype", "bar", 3, "data", "xvalue", "colorby", "fontcolor", "colorscheme", "outcomes", "dataChange"]], template: function PrivateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Tool f\u00FCr erweiterte Analysen");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "In diesem Bereich nur f\u00FCr KV-Mitarbeiter ist ein Zugriff auf faktisch anonymisierte Individualdatens\u00E4tze m\u00F6glich. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Bitte beachten Sie, dass die unstandardisierten Abfragen in diesem Bereich ggf. etwas l\u00E4nger dauern.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, PrivateComponent_div_9_Template, 40, 18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDateRangePicker, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChip, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelDescription, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__.DefaultClassDirective, _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_3__.PlotComponent, _components_table_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_5__.BoxComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8220:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);











function ProfileComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dashboards:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.userdetails.dashboards);
} }
function ProfileComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dashboard Admin:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.userdetails.dashboard_admin);
} }
function ProfileComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Fehlerhafte Loginversuche seit der letzten Anmeldung:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 6)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.userdetails.wrong_logins);
} }
function ProfileComponent_div_0_div_32_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "mat-form-field", 17)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Aktuelles Passwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_0_div_32_div_4_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.pwdrequest.oldpwd = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 17)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Neues Passwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_0_div_32_div_4_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.pwdrequest.newpwd = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Mindestl\u00E4nge 10 Zeichen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r7.pwdchange.progress)("ngModel", ctx_r7.pwdrequest.oldpwd);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r7.pwdchange.progress)("ngModel", ctx_r7.pwdrequest.newpwd);
} }
function ProfileComponent_div_0_div_32_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00E4ndere das Passwort...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_32_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p")(1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Fehler: Bitte pr\u00FCfen Sie das aktuelle Passwort!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_32_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p")(1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00C4nderung erfolgreich, Sie bleiben eingeloggt.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_div_32_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "div")(2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_32_div_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.action = ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_32_div_9_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.chpwd()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00C4ndern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r11.pwdrequest.newpwd.length < 10);
} }
function ProfileComponent_div_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Passwort \u00E4ndern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProfileComponent_div_0_div_32_div_4_Template, 11, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProfileComponent_div_0_div_32_mat_hint_6_Template, 2, 0, "mat-hint", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProfileComponent_div_0_div_32_p_7_Template, 4, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProfileComponent_div_0_div_32_p_8_Template, 4, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ProfileComponent_div_0_div_32_div_9_Template, 7, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.pwdchange.ok);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.pwdchange.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.pwdchange.done && !ctx_r5.pwdchange.ok);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.pwdchange.done && ctx_r5.pwdchange.ok);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.pwdchange.ok);
} }
function ProfileComponent_div_0_div_33_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Es ist ein Fehler aufgetreten, bitte pr\u00FCfen Sie Ihr Passwort.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function ProfileComponent_div_0_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Account l\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Warnung: Diese Aktion kann nicht r\u00FCckg\u00E4ngig gemacht werden");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Bitte geben Sie Ihr aktuelles Passwort zur Sicherheit ein:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 17)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Aktuelles Passwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_0_div_33_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.deleterequest.pwd = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 21)(13, "div")(14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_33_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.action = ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_0_div_33_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.deleteaccount()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Jetzt l\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ProfileComponent_div_0_div_33_div_19_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.deleterequest.pwd);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r6.deleterequest.pwd.length < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.deleteresult == "error");
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Ihre Nutzerdaten");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4)(11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "E-Mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4)(17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Rolle:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6)(20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ProfileComponent_div_0_div_22_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ProfileComponent_div_0_div_23_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ProfileComponent_div_0_div_24_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 8)(26, "div", 9)(27, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.action = "chpwd"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Passwort \u00E4ndern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9)(30, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.action = "deleteaccount"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Account l\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ProfileComponent_div_0_div_32_Template, 10, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProfileComponent_div_0_div_33_Template, 20, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.userdetails.anrede + " " + ctx_r0.userdetails.firstname + " " + ctx_r0.userdetails.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.userdetails.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.userdetails.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.userdetails.dashboards.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.userdetails.dashboard_admin.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.userdetails.wrong_logins > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.action == "chpwd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.action == "deleteaccount");
} }
function ProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ihr Account wurde gel\u00F6scht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class ProfileComponent {
    constructor(api, _auth, router) {
        this.api = api;
        this._auth = _auth;
        this.router = router;
    }
    ngOnInit() {
        this.pwdrequest = { 'oldpwd': '', 'newpwd': '' };
        this.deleterequest = { 'pwd': '' };
        this.pwdchange = { 'progress': false, 'ok': false };
        this.userdetails = this._auth.getUserDetails();
    }
    chpwd() {
        this.pwdchange['progress'] = true;
        this.api.changeuserpwd(this.userdetails.email, this.pwdrequest.newpwd, this.pwdrequest.oldpwd).subscribe(data => {
            this.pwdchange['ok'] = true;
            this.pwdchange['progress'] = false;
            this.pwdchange['done'] = true;
            setTimeout(() => {
                this.pwdchange = { 'progress': false, 'ok': false };
                this.action = '';
            }, 1500);
            this.pwdrequest = { 'oldpwd': '', 'newpwd': '' };
        }, error => {
            this.pwdchange['done'] = true;
            this.pwdchange['progress'] = false;
        });
    }
    deleteaccount() {
        this.api.deleteuser(this.userdetails.email, this.deleterequest.pwd).subscribe(data => {
            //this.deleteresult="success";
            //localStorage.clear();
            //setTimeout(()=>{this.router.navigate(['/'])},3000);        
        }, error => { this.deleteresult = "error"; });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 2, consts: [["class", "container", "fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-around", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-around", 1, "container"], [1, "small"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem"], ["fxFlex", "20", "fxFlex.lt-md", "100"], ["fxFlex", ""], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-around", "fxLayoutGap", "1rem", 1, "add-margin", 2, "max-width", "400px"], [1, "add-margin"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["fxLayout", "column", "style", "max-width: 450px;", 4, "ngIf"], ["style", "max-width: 450px;", 4, "ngIf"], ["fxLayout", "column", 2, "max-width", "450px"], [4, "ngIf"], ["class", "add-margin", "fxLayout", "row", "fxLayoutAlign", "space-between", 4, "ngIf"], ["appearance", "fill", 1, "full-width"], ["type", "password", "matInput", "", "value", "", 3, "disabled", "ngModel", "ngModelChange"], [2, "color", "red"], [2, "color", "green"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "add-margin"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], [2, "max-width", "450px"], ["type", "password", "matInput", "", "value", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [2, "color", "crimson"], [1, "container"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 34, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.deleteresult == "success"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.deleteresult == "success");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective], styles: [".small[_ngcontent-%COMP%] {\n  max-width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21hbGwge1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 4924:
/*!************************************************!*\
  !*** ./src/app/pages/start/start.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartComponent": () => (/* binding */ StartComponent)
/* harmony export */ });
/* harmony import */ var C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_dbservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dbservice.service */ 8351);
/* harmony import */ var src_app_services_csvexport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/csvexport.service */ 9873);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_smed_aggregation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/smed-aggregation.service */ 420);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/plotly/plot/plot.component */ 6571);
/* harmony import */ var _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/infobox/box/box.component */ 5752);





















function StartComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Angemeldet als ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.currentuser.anrede ? ctx_r0.currentuser.anrede + " " + ctx_r0.currentuser.lastname : "", "");
  }
}

const _c0 = function (a0) {
  return {
    "smallheader": a0
  };
};

function StartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Akut- und Notf\u00E4lle bei der 116117");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r1.currentuser || ctx_r1.summaryinfo["done"]));
  }
}

function StartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Ersteinsch\u00E4tzung von Akut- und Notf\u00E4llen mit SmED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c0, ctx_r2.currentuser || ctx_r2.summaryinfo["done"]));
  }
}

function StartComponent_ng_container_5_ng_container_1_h1_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Zeit bis zum Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.counterstring(ctx_r7.timetogo));
  }
}

function StartComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Auf diesem Portal stellt das Zentralinstitut f\u00FCr die kassen\u00E4rztliche Versorgung in Deutschland (");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "strong")(4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Zi");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, ") Informationen zu ambulanten Akut- und Notf\u00E4llen in Deutschland zur Verf\u00FCgung. Aktuell basieren die Auswertungen auf den SmED-Daten, die von den 116117-Leitstellen der Kassen\u00E4rztlichen Vereinigungen \u00FCbermittelt wurden. Bei ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "SmED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " (Strukturierte medizinische Ersteinsch\u00E4tzung in Deutschland) handelt es sich um eine Ersteinsch\u00E4tzungssoftware, die den Anwender bei der Einsch\u00E4tzung der Beschwerden eines Patienten unterst\u00FCtzen kann. Durch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "SmED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " wird das medizinische Fachpersonal bei der systematischen Abfrage von Symptomen in Kombination mit allgemeinen und symptomspezifischen Risikofaktoren (z.B. Alter, Geschlecht, Begleitbeschwerden) sowie bei der Entscheidung, welches die passende Versorgungsm\u00F6glichkeit f\u00FCr den Anrufenden ist, unterst\u00FCtzt. Die SmED-Empfehlungen der Software stellen dabei eine Entscheidungshilfe f\u00FCr den Anwender dar. Weitere Informationen zu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "SmED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " finden Sie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "strong")(17, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "hier");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Zuk\u00FCnftig soll das Portal um Informationen aus weiteren Quellen (wie beispielsweise die Abrechnungsdaten) f\u00FCr ambulante Akut- und Notf\u00E4lle erg\u00E4nzt werden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, StartComponent_ng_container_5_ng_container_1_h1_22_Template, 4, 1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.timetogo <= 0);
  }
}

function StartComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_ng_container_5_ng_container_1_Template, 23, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.timetogo < 0);
  }
}

function StartComponent_ng_container_6_ng_container_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Daten f\u00FCr vollst\u00E4ndige Kalenderwochen beginnend mit der Woche vom ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r10.summaryinfo["Beginn"]), " bis zur Woche beginnend am ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, ctx_r10.summaryinfo["Ende"]), ".");
  }
}

function StartComponent_ng_container_6_ng_container_1_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Als registrierter Nutzer steht Ihnen unser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "interner Analysebereich");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " zur Verf\u00FCgung.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Dashboard des Zentralinstituts f\u00FCr die kassen\u00E4rztliche Versorgung in Deutschland (");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "strong")(4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Zi");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, ") mit aktuellen Ergebnissen aus der Strukturierten medizinischen Ersteinsch\u00E4tzung in Deutschland (");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "strong")(8, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "SmED");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, ") im Rahmen von Anrufen bei der Rufnummer (");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "strong")(12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "116117");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "). Bei jeder Ersteinsch\u00E4tzung werden die Inhalte und Empfehlungen strukturiert protokolliert (Assessments). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, StartComponent_ng_container_6_ng_container_1_span_15_Template, 4, 6, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, StartComponent_ng_container_6_ng_container_1_p_16_Template, 5, 0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.summaryinfo && ctx_r8.levelsettings["resolution"] == "weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.currentuser);
  }
}

function StartComponent_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Dashboard mit aktuellen Ergebnissen aus der Strukturierten medizinischen Ersteinsch\u00E4tzung in Deutschland (SmED) im Rahmen der Anwendung am eigenen Standort. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
}

function StartComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_ng_container_6_ng_container_1_Template, 17, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, StartComponent_ng_container_6_ng_container_2_Template, 3, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r4.timetogo >= 0 || ctx_r4.currentuser) && !ctx_r4.isExtern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r4.timetogo >= 0 || ctx_r4.currentuser) && ctx_r4.isExtern);
  }
}

function StartComponent_div_7_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div");
  }
}

function StartComponent_div_7_div_1_ng_template_2_mat_chip_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_1_ng_template_2_mat_chip_4_Template_mat_chip_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const item_r23 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.setlevel("levelvalues", item_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", ctx_r22.levelsettings["levelvalues"] == item_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r23.replace("KV ", ""), " ");
  }
}

function StartComponent_div_7_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Bundesland");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p")(3, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, StartComponent_div_7_div_1_ng_template_2_mat_chip_4_Template, 2, 2, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r19.levelvalues);
  }
}

function StartComponent_div_7_div_1_ng_template_4_mat_chip_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_1_ng_template_4_mat_chip_4_Template_mat_chip_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const item_r27 = restoredCtx.$implicit;
      const index_r28 = restoredCtx.index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      ctx_r29.setlevel("levelvalues", item_r27);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.chipSelectedIndex = index_r28);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const index_r28 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", index_r28 === ctx_r26.chipSelectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r27, " ");
  }
}

function StartComponent_div_7_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Einsatzort");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p")(3, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, StartComponent_div_7_div_1_ng_template_4_mat_chip_4_Template, 2, 2, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r21.externLevelValues);
  }
}

function StartComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_div_7_div_1_div_1_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, StartComponent_div_7_div_1_ng_template_2_Template, 5, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, StartComponent_div_7_div_1_ng_template_4_Template, 5, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);

    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.isExtern)("ngIfThen", _r20)("ngIfElse", _r18);
  }
}

function StartComponent_div_7_mat_chip_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_mat_chip_6_Template_mat_chip_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.setlevel("zeitraum", item_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", ctx_r13.levelsettings["zeitraum"] == item_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r31, " ");
  }
}

function StartComponent_div_7_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Keine Daten verf\u00FCgbar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function StartComponent_div_7_div_18_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-box", 26)(3, "app-box", 27)(4, "app-box", 28)(5, "app-box", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r34.summaryinfo["Assessments Gesamt"])("textbehind", true)("numberformat", "1.0-0")("maincolor", ctx_r34.colorsscheme[4].concat("80"))("description", "Gesamtanzahl der Assessments");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("textbehind", true)("numberformat", "1.1-1")("maincolor", ctx_r34.colorsscheme[3].concat("80"))("value", ctx_r34.summaryinfo["Mittlere Dauer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("textbehind", true)("numberformat", "1.1-1")("maincolor", ctx_r34.colorsscheme[2].concat("80"))("value", ctx_r34.summaryinfo["Anzahl Beschwerden"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("textbehind", true)("numberformat", "1.1-1")("maincolor", ctx_r34.colorsscheme[1].concat("80"))("value", ctx_r34.summaryinfo["Anzahl Fragen"]);
  }
}

function StartComponent_div_7_div_18_div_2_mat_slide_toggle_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-slide-toggle", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function StartComponent_div_7_div_18_div_2_mat_slide_toggle_5_Template_mat_slide_toggle_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r55.absoluteNumbers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Absolute Zahlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r47.absoluteNumbers);
  }
}

function StartComponent_div_7_div_18_div_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "pro 100.000 Einwohner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Absolute Zahlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_2_mat_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_2_p_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_2_p_15_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r57.exportascsv("zeitreihe.csv", ctx_r57.stats_ts));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function StartComponent_div_7_div_18_div_2_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Anzahl der SmED-Assessments pro 100.000 Einwohner, die im Rahmen von Anrufen bei der 116117 ", ctx_r52.levelsettings["resolution"] === "weekly" ? "w\u00F6chentlich" : "monatlich", " durchgef\u00FChrt wurden.");
  }
}

function StartComponent_div_7_div_18_div_2_p_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Anzahl der SmED-Assessments (in Tausend), die im Rahmen von Anrufen bei der 116117 ", ctx_r53.levelsettings["resolution"] === "weekly" ? "w\u00F6chentlich" : "monatlich", " durchgef\u00FChrt wurden. ");
  }
}

function StartComponent_div_7_div_18_div_2_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Anzahl der SmED-Assessments pro ", ctx_r54.levelsettings["resolution"] === "weekly" ? "Kalenderwoche" : "Monat", ". ");
  }
}

const _c1 = function () {
  return ["Assessments pro 100 Tsd. Einw."];
};

const _c2 = function () {
  return ["totaleNumbers"];
};

function StartComponent_div_7_div_18_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "mat-card")(2, "div", 31)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "SmED Assessments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, StartComponent_div_7_div_18_div_2_mat_slide_toggle_5_Template, 2, 1, "mat-slide-toggle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, StartComponent_div_7_div_18_div_2_span_7_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, StartComponent_div_7_div_18_div_2_span_8_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "app-plot", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_2_Template_app_plot_dataChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r59.stats_ts = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div")(11, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_2_Template_mat_expansion_panel_opened_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r60);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r61.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_2_Template_mat_expansion_panel_closed_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r60);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r62.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, StartComponent_div_7_div_18_div_2_mat_icon_13_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, StartComponent_div_7_div_18_div_2_p_15_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, StartComponent_div_7_div_18_div_2_p_19_Template, 2, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, StartComponent_div_7_div_18_div_2_p_20_Template, 2, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, StartComponent_div_7_div_18_div_2_p_21_Template, 2, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r35.isExtern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r35.absoluteNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r35.absoluteNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r35.stats_ts)("xvalue", "Datum")("outcomes", !ctx_r35.absoluteNumbers ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](13, _c1) : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](14, _c2))("sortx", true)("fontcolor", "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r35.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r35.currentuser);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r35.absoluteNumbers && !ctx_r35.isExtern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r35.absoluteNumbers && !ctx_r35.isExtern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r35.isExtern);
  }
}

function StartComponent_div_7_div_18_div_3_mat_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_3_p_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_3_p_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r65.exportascsv("zeitreihe.csv", ctx_r65.stats_ts));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

const _c3 = function () {
  return ["Anteil ARE Assessments"];
};

const _c4 = function () {
  return ["crimson"];
};

function StartComponent_div_7_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Aktivit\u00E4t respiratorischer Erkrankungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Abweichung von der Hintergrundaktivit\u00E4t in Prozent");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "app-plot", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_3_Template_app_plot_dataChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r67.stats_ts = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div")(9, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_3_Template_mat_expansion_panel_opened_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r68);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r69.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_3_Template_mat_expansion_panel_closed_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r68);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r70.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, StartComponent_div_7_div_18_div_3_mat_icon_11_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, StartComponent_div_7_div_18_div_3_p_13_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Anzahl der Assessments mit typischen Symptomen von Akuten Respiratorischen Erkrankungen (ARE) ausgewiesen als prozentuale Abweichung von ARE Hintergrundaktivit\u00E4t (erwartet werden 25% ARE-Assessments). Ber\u00FCcksichtigt wurden folgende SmED-Beschwerdebilder: Atembeschwerden, Covid 19, Erk\u00E4ltung/Grippaler Infekt, Fieber, Hals-/Rachenschmerzen, Husten, Kopfschmerzen, Ohrenschmerzen und Schluckbeschwerden (Liste ist aktuell noch in Entwicklung, \u00C4nderungen sind m\u00F6glich).");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r36.stats_ts)("xvalue", "Datum")("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c3))("sortx", true)("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r36.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r36.currentuser);
  }
}

function StartComponent_div_7_div_18_div_4_mat_card_1_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_4_mat_card_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_4_mat_card_1_p_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r75);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r74.exportascsv("symptome.csv", ctx_r74.symptoms_list_export));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

const _c5 = function () {
  return ["Anteil"];
};

function StartComponent_div_7_div_18_div_4_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "H\u00E4ufigste Beschwerden");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Anteil Assessments mit angezeigter Beschwerde an allen Assessments in Prozent");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "app-plot", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_4_mat_card_1_Template_app_plot_dataChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r76.symptoms_list = $event);
    })("clicked", function StartComponent_div_7_div_18_div_4_mat_card_1_Template_app_plot_clicked_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r77);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r78.handleklick("Beschwerden", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div")(8, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_4_mat_card_1_Template_mat_expansion_panel_opened_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r77);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r79.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_4_mat_card_1_Template_mat_expansion_panel_closed_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r77);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r80.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, StartComponent_div_7_div_18_div_4_mat_card_1_mat_icon_10_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-panel-description")(12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, StartComponent_div_7_div_18_div_4_mat_card_1_p_13_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Darstellung der prozentuellen H\u00E4ufigkeit der im Rahmen der SmED-Assessments dokumentierten Beschwerden. Die Beschwerden sind sortiert nach der H\u00E4ufigkeit und werden anteilig an allen SmED-Assessments, in denen eine Angabe zur Beschwerde vorliegt, angezeigt. Insgesamt sind \u00FCber 100 verschiedene Beschwerden \u00FCber SmED verzeichnet worden. Bisher nicht enthalten sind Beschwerden, die im Rahmen der Abfrage von lebensbedrohlichen Situationen (Vortriage) erfasst wurden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r71.symptoms_list)("xvalue", "Sympt")("percent", true)("fontcolor", "white")("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c5))("sort", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r71.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r71.currentuser);
  }
}

function StartComponent_div_7_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_div_7_div_18_div_4_mat_card_1_Template, 18, 9, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("fxFlex", ctx_r37.isExtern ? 50 : 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r37.symptoms_list.length > 0);
  }
}

function StartComponent_div_7_div_18_div_5_ng_container_1_mat_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_5_ng_container_1_p_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_5_ng_container_1_p_16_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r85);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r84.exportascsv("zeiten.csv", ctx_r84.utiltimes));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function StartComponent_div_7_div_18_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Aufkommen nach Tag und Uhrzeit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Anteil Assessments zum angegebenen Zeitintervall an allen Assessments in Prozent");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "(gr\u00FCn:hoch, blau:niedrig)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "app-plot", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_5_ng_container_1_Template_app_plot_dataChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r87);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r86.utiltimes = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div")(11, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_5_ng_container_1_Template_mat_expansion_panel_opened_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r87);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r88.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_5_ng_container_1_Template_mat_expansion_panel_closed_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r87);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r89.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, StartComponent_div_7_div_18_div_5_ng_container_1_mat_icon_13_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-panel-description")(15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, StartComponent_div_7_div_18_div_5_ng_container_1_p_16_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Prozentuale Verteilung der SmED-Assessments nach Wochentag und Uhrzeit (Drei-Stunden-Intervalle).\u200B Gr\u00FCne Fl\u00E4chen zeigen ein hohes Aufkommen, blaue ein niedriges Aufkommen an durchgef\u00FChrten Assessments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r81.utiltimes)("fontcolor", "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r81.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r81.currentuser);
  }
}

function StartComponent_div_7_div_18_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_div_7_div_18_div_5_ng_container_1_Template, 21, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r38.utiltimes["z"].length > 0);
  }
}

function StartComponent_div_7_div_18_div_6_mat_card_1_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_6_mat_card_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_6_mat_card_1_p_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r94);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r93.exportascsv("empfehlung.csv", ctx_r93.timetotreat));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

const _c6 = function () {
  return {
    l: 50,
    r: 0,
    b: 0,
    t: 0
  };
};

function StartComponent_div_7_div_18_div_6_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "SmED Empfehlungen zur Dringlichkeit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Anteil Assessments mit angegebener Dringlichkeit an allen Assessments in Prozent");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "app-plot", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_6_mat_card_1_Template_app_plot_dataChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r96);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r95.timetotreat = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div")(8, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_6_mat_card_1_Template_mat_expansion_panel_opened_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r96);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r97.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_6_mat_card_1_Template_mat_expansion_panel_closed_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r96);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r98.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, StartComponent_div_7_div_18_div_6_mat_card_1_mat_icon_10_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-panel-description")(12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, StartComponent_div_7_div_18_div_6_mat_card_1_p_13_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Prozentuale Verteilung der SmED-Assessments nach der von SmED empfohlenen Versorgungsdringlichkeit. Die Versorgungsdringlichkeit gibt an, innerhalb welcher Zeitspanne der Anrufer medizinisch versorgt werden sollte. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ol", 46)(19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Notfall:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Es besteht ein potentiell lebensbedrohlicher Zustand. Die \u00E4rztliche Behandlung muss unverz\u00FCglich erfolgen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Schnellstm\u00F6gliche \u00E4rztliche Versorgung:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Die \u00E4rztliche Behandlung soll schnellstm\u00F6glich erfolgen, muss jedoch nicht unmittelbar stattfinden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "\u00C4rztliche Behandlung innerhalb von 24 h:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Die \u00E4rztliche Behandlung soll innerhalb von 24 Stunden erfolgen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "\u00C4rztliche Behandlung nicht innerhalb von 24 h erforderlich:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Die \u00E4rztliche Behandlung eilt nicht. Falls die Beschwerden in den n\u00E4chsten 2 Tagen nicht abklingen, ist eine \u00E4rztliche Behandlung in jedem Fall angezeigt.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r90.timetotreat)("xvalue", "TTTsmed_text")("fontcolor", "white")("showlegend", false)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c5))("custommargins", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r90.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r90.currentuser);
  }
}

function StartComponent_div_7_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_div_7_div_18_div_6_mat_card_1_Template, 35, 10, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r39.timetotreat.length > 0);
  }
}

function StartComponent_div_7_div_18_div_7_mat_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_7_p_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_7_p_14_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r102);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r101.exportascsv("zeitreihe.csv", ctx_r101.stats_ts));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

const _c7 = function (a0) {
  return [a0];
};

const _c8 = function () {
  return ["Mittlere Dauer (Sek.)"];
};

function StartComponent_div_7_div_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Mittlere Dauer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Dauer in Sekunden pro Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "app-plot", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_7_Template_app_plot_dataChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r104);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r103.stats_ts = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div")(9, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_7_Template_mat_expansion_panel_opened_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r104);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r105.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_7_Template_mat_expansion_panel_closed_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r104);
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r106.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, StartComponent_div_7_div_18_div_7_mat_icon_11_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-panel-description")(13, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, StartComponent_div_7_div_18_div_7_p_14_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Angaben zur Dauer liegen erst seit Mai 2020 vor. In die Berechnung der Dauer flie\u00DFen nur Assessments ein, die mit dem klassischen SmED-Modul (nicht COVID-spezifische Module) erfasst wurden. Weiterhin wurden Assessments mit einer Dauer von \u00FCber 1000 Sekunden ausgeschlossen, da bei diesen Assessments davon auszugehen ist, dass diese nicht ordnungsgem\u00E4\u00DF abgeschlossen wurden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r40.stats_ts)("xvalue", "Datum")("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c7, ctx_r40.colorsscheme[3]))("sortx", true)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r40.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r40.currentuser);
  }
}

function StartComponent_div_7_div_18_div_8_mat_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_8_p_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_8_p_14_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r110);
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r109.exportascsv("zeitreihe.csv", ctx_r109.stats_ts));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

const _c9 = function () {
  return ["Mittlere Anzahl Beschwerden"];
};

function StartComponent_div_7_div_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Mittlere Anzahl Beschwerden");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Mittlere Anzahl unterschiedlicher Beschwerden pro Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "app-plot", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_8_Template_app_plot_dataChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r112);
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r111.stats_ts = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div")(9, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_8_Template_mat_expansion_panel_opened_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r112);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r113.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_8_Template_mat_expansion_panel_closed_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r112);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r114.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, StartComponent_div_7_div_18_div_8_mat_icon_11_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-panel-description")(13, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, StartComponent_div_7_div_18_div_8_p_14_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Die Anzahl der Beschwerden umfasst die im Rahmen eines SmED-Assessments dokumentierten vorliegenden Beschwerden der Anrufenden. Bisher nicht enthalten sind Beschwerden, die im Rahmen der Abfrage von lebensbedrohlichen Situationen (Vortriage) erfasst wurden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r41.stats_ts)("xvalue", "Datum")("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c7, ctx_r41.colorsscheme[2]))("sortx", true)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r41.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r41.currentuser);
  }
}

function StartComponent_div_7_div_18_div_9_mat_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_9_p_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_9_p_16_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r118);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r117.exportascsv("zeitreihe.csv", ctx_r117.stats_ts));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

const _c10 = function () {
  return ["Mittlere Anzahl Fragen"];
};

function StartComponent_div_7_div_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Mittlere Anzahl Fragen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Mittlere Anzahl beantworteter Fragen pro Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "app-plot", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_9_Template_app_plot_dataChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r120);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r119.stats_ts = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div")(11, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_9_Template_mat_expansion_panel_opened_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r120);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r121.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_9_Template_mat_expansion_panel_closed_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r120);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r122.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, StartComponent_div_7_div_18_div_9_mat_icon_13_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-panel-description")(15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, StartComponent_div_7_div_18_div_9_p_16_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Die Anzahl der Fragen umfasst die im Rahmen eines SmED-Assessments dokumentierten beantworteten Fragen (inklusive Fragen zu Alter, Geschlecht, Schwangerschaft, lebensbedrohlicher Situation, Beschwerden, chronischen Erkrankungen, Begleitumst\u00E4nden usw.).");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r42.stats_ts)("xvalue", "Datum")("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c7, ctx_r42.colorsscheme[1]))("sortx", true)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r42.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r42.currentuser);
  }
}

function StartComponent_div_7_div_18_div_10_mat_card_1_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_10_mat_card_1_p_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_10_mat_card_1_p_15_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r127);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r126.exportascsv("timetotreat.csv", ctx_r126.timetotreat));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

const _c11 = function () {
  return ["Anzahl"];
};

const _c12 = function () {
  return {
    l: 50,
    r: 50,
    b: 150,
    t: 0
  };
};

function StartComponent_div_7_div_18_div_10_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Empfehlung Behandlungsort nach Dringlichkeit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Anzahl Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "lock_open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div")(9, "app-plot", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_10_mat_card_1_Template_app_plot_dataChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r129);
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r128.decisions_pocvsttt = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_10_mat_card_1_Template_mat_expansion_panel_opened_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r129);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r130.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_10_mat_card_1_Template_mat_expansion_panel_closed_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r129);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r131.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, StartComponent_div_7_div_18_div_10_mat_card_1_mat_icon_12_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-panel-description")(14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, StartComponent_div_7_div_18_div_10_mat_card_1_p_15_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Prozentuale Verteilung der SmED-Assessments nach der von SmED empfohlenen Versorgungsebene (Behandlungsort) und Versorgungsdringlichkeit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r123.decisions_pocvsttt)("xvalue", "TTTsmed_text")("fontcolor", "white")("showlegend", false)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c11))("custommargins", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c12))("colorby", "POCsmed_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r123.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r123.currentuser);
  }
}

function StartComponent_div_7_div_18_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_div_7_div_18_div_10_mat_card_1_Template, 20, 11, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r43.decisions_pocvsttt.length > 0);
  }
}

function StartComponent_div_7_div_18_div_11_mat_card_1_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_11_mat_card_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_11_mat_card_1_p_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r136);
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r135.exportascsv("empfehlung.csv", ctx_r135.timetotreat));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

const _c13 = function () {
  return ["data"];
};

function StartComponent_div_7_div_18_div_11_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "SmED-Assessments nach QM-Kategorien");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Anteil Assessments in der angegebenen QM-Kategorie an allen Assessments in Prozent, basierend auf Daten seit 14.04.2023, ohne COVID-Module");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "app-plot", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_11_mat_card_1_Template_app_plot_dataChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r138);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r137.qmCases = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div")(8, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_11_mat_card_1_Template_mat_expansion_panel_opened_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r138);
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r139.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_11_mat_card_1_Template_mat_expansion_panel_closed_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r138);
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r140.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, StartComponent_div_7_div_18_div_11_mat_card_1_mat_icon_10_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-panel-description")(12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, StartComponent_div_7_div_18_div_11_mat_card_1_p_13_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Prozentuale Verteilung der SmED-Assessments nach QM-Kategorie.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "ol", 46)(19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Vortriage:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Im Rahmen der Abfrage einer lebensbedrohlichen Situation (Vortriage) wurde ein Notfall festgestellt.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Nur Notfall ausgeschlossen:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Im Rahmen der Vortriage wurde ein Notfall ausgeschlossen, es wurde aber nicht weiter ins Assessment eingestiegen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Assessment vollst\u00E4ndig:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "SmED-Assessment durchgef\u00FChrt, SmED-Empfehlung zur Dringlichkeit liegt vor, es wurden alle farbigen Fragen beantwortet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Assessment abgek\u00FCrzt:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "SmED-Assessment durchgef\u00FChrt, SmED-Empfehlung zur Dringlichkeit liegt vor, jedoch nicht alle farbigen Fragen beantwortet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "SmED nicht anwendbar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Die Anwendung von SmED resultierte nicht in einer SmED-Empfehlung zur Dringlichkeit der Behandlung. Dies kann folgende Gr\u00FCnde haben: (a) Es wurden zu wenige Angaben gemacht, (b) es wurden zu viele unklare Antworten gegeben.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
  }

  if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r132.qmCases)("xvalue", "text")("fontcolor", "white")("showlegend", false)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c13))("custommargins", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r132.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r132.currentuser);
  }
}

function StartComponent_div_7_div_18_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_div_7_div_18_div_11_mat_card_1_Template, 39, 10, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r44.timetotreat.length > 0);
  }
}

function StartComponent_div_7_div_18_div_12_mat_card_1_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_12_mat_card_1_p_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_12_mat_card_1_p_15_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r145);
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r144.exportascsv("decisions_ttt.csv", ctx_r144.decisions_ttt));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function StartComponent_div_7_div_18_div_12_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Abgleich Empfehlung vs. Entscheidung Dringlichkeit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Anzahl Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "lock_open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div")(9, "app-plot", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_12_mat_card_1_Template_app_plot_dataChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r147);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r146.decisions_ttt = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_12_mat_card_1_Template_mat_expansion_panel_opened_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r147);
      const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r148.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_12_mat_card_1_Template_mat_expansion_panel_closed_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r147);
      const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r149.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, StartComponent_div_7_div_18_div_12_mat_card_1_mat_icon_12_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-panel-description")(14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, StartComponent_div_7_div_18_div_12_mat_card_1_p_15_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Abgleich der SmED-Empfehlung mit der Entscheidung des/der Disponent*in hinsichtlich der Versorgungsdringlichkeit. Die Entscheidung des/der Disponent*in wird in SmED bisher nur bei einem kleinen Anteil der SmED-Assessments dokumentiert. Es wird an einer \u00DCbermittlung der entsprechenden Angaben aus der Dispositionssoftware gearbeitet. Dieser Prozess ist bisher mit einigen wenigen KVen etabliert. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r141.decisions_ttt)("xvalue", "TTTsmed_text")("fontcolor", "white")("showlegend", true)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c11))("custommargins", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c12))("colorby", "TTTdispo_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r141.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r141.currentuser);
  }
}

function StartComponent_div_7_div_18_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_div_7_div_18_div_12_mat_card_1_Template, 20, 11, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r45.decisions_ttt.length > 0);
  }
}

function StartComponent_div_7_div_18_div_13_mat_card_1_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function StartComponent_div_7_div_18_div_13_mat_card_1_p_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_div_18_div_13_mat_card_1_p_15_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r154);
      const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r153.exportascsv("decisions_poc.csv", ctx_r153.decisions_poc));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function StartComponent_div_7_div_18_div_13_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Abgleich Empfehlung vs. Entscheidung Behandlungsort ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Anzahl Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "lock_open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div")(9, "app-plot", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dataChange", function StartComponent_div_7_div_18_div_13_mat_card_1_Template_app_plot_dataChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r156);
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r155.decisions_poc = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-expansion-panel", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("opened", function StartComponent_div_7_div_18_div_13_mat_card_1_Template_mat_expansion_panel_opened_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r156);
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r157.panelOpenState = true);
    })("closed", function StartComponent_div_7_div_18_div_13_mat_card_1_Template_mat_expansion_panel_closed_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r156);
      const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r158.panelOpenState = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, StartComponent_div_7_div_18_div_13_mat_card_1_mat_icon_12_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-panel-description")(14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, StartComponent_div_7_div_18_div_13_mat_card_1_p_15_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Abgleich der SmED-Empfehlung mit der Entscheidung des/der Disponent*in hinsichtlich der Versorgungsebene. Die Entscheidung des/der Disponent*in wird in SmED bisher nur bei einem kleinen Anteil der SmED-Assessments dokumentiert. Es wird an einer \u00DCbermittlung der entsprechenden Angaben aus der Dispositionssoftware gearbeitet. Dieser Prozess ist bisher mit einigen wenigen KVen etabliert. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("data", ctx_r150.decisions_poc)("xvalue", "POCsmed_text")("fontcolor", "white")("showlegend", true)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c11))("custommargins", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](10, _c12))("colorby", "POCdispo_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r150.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r150.currentuser);
  }
}

function StartComponent_div_7_div_18_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_div_7_div_18_div_13_mat_card_1_Template, 20, 11, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r46.decisions_poc.length > 0);
  }
}

function StartComponent_div_7_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_div_7_div_18_mat_card_1_Template, 6, 17, "mat-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, StartComponent_div_7_div_18_div_2_Template, 22, 15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, StartComponent_div_7_div_18_div_3_Template, 18, 10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, StartComponent_div_7_div_18_div_4_Template, 2, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, StartComponent_div_7_div_18_div_5_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, StartComponent_div_7_div_18_div_6_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, StartComponent_div_7_div_18_div_7_Template, 19, 11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, StartComponent_div_7_div_18_div_8_Template, 19, 11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, StartComponent_div_7_div_18_div_9_Template, 21, 11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, StartComponent_div_7_div_18_div_10_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, StartComponent_div_7_div_18_div_11_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, StartComponent_div_7_div_18_div_12_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, StartComponent_div_7_div_18_div_13_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.summaryinfo["Assessments Gesamt"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.stats_ts);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.stats_ts && !ctx_r16.isExtern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.symptoms_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.utiltimes["z"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.timetotreat);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.stats_ts);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.stats_ts);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.stats_ts && ctx_r16.currentuser);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.currentuser && ctx_r16.decisions_pocvsttt);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.timetotreat && ctx_r16.currentuser);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.currentuser && ctx_r16.decisions_ttt && !ctx_r16.isExtern);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r16.decisions_poc && ctx_r16.currentuser && !ctx_r16.isExtern);
  }
}

function StartComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, StartComponent_div_7_div_1_Template, 6, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Analysezeitraum");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p")(5, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, StartComponent_div_7_mat_chip_6_Template, 2, 2, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div")(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Zeitliche Aufl\u00F6sung");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p")(11, "mat-chip-list")(12, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_Template_mat_chip_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r160);
      const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r159.setlevel("resolution", "weekly"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Kalenderwochen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function StartComponent_div_7_Template_mat_chip_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r160);
      const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r161.setlevel("resolution", "monthly"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, " Monate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, StartComponent_div_7_div_16_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, StartComponent_div_7_div_17_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, StartComponent_div_7_div_18_Template, 14, 13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.currentuser);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.zeitaumoptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", ctx_r5.levelsettings["resolution"] == "weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", ctx_r5.levelsettings["resolution"] == "monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.summaryinfo && !ctx_r5.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.summaryinfo["done"]);
  }
}

class StartComponent {
  constructor(db, csv, api, auth, smed, router) {
    this.db = db;
    this.csv = csv;
    this.api = api;
    this.auth = auth;
    this.smed = smed;
    this.router = router;
    this.metadata = [];
    this.sortdata = [];
    this.levelvalues = ['Gesamt', 'Baden-Württemberg', 'Bayern', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hessen', 'Mecklenburg-Vorpommern', 'Niedersachsen', 'Nordrhein-Westfalen', 'Nordrhein', 'Westfalen-Lippe', 'Rheinland-Pfalz', 'Saarland', 'Sachsen', 'Sachsen-Anhalt', 'Schleswig-Holstein', 'Thüringen'];
    this.externLevelValues = [];
    this.levelsettings = {};
    this.debug = false; // SMED

    this.stats_ts = [];
    this.summaryinfo = {};
    this.smedrange = {};
    this.zeitaumoptions = ["Letzte 12 Monate", "Letztes Jahr", "Gesamt"];
    this.allpublicfields = ['stats', 'mainsymptoms_ts', 'timetotreat', 'timestats', 'qmCases'];
    this.ts_results = {};
    this.utiltimes = {};
    this.absoluteNumbers = false;
    this.isRKIUser = false;
    this.isRKIKVUser = false;
    this.isExtern = false;
    this.chipSelectedIndex = 0;
  }

  ngOnInit() {
    this.levelsettings = {
      "level": "KV",
      "levelvalues": "Gesamt",
      "zeitraum": "Letzte 12 Monate",
      'resolution': 'monthly'
    };
    this.summaryinfo["done"] = false;
    this.colorsscheme = this.api.makescale(5);
    this.mapdatafor = "";
    this.mapdata = [];
    this.levelsettings = this.smed.updatestartstop(this.levelsettings);
    this.auth.currentUser.subscribe(data => {
      this.currentuser = data;
    });
    this.isRKIUser = this.auth.isRKIUser();
    this.isRKIKVUser = this.auth.isRKIKVUser();
    this.isExtern = this.auth.isExtern();
    this.buildLevelValuesForCustomers();

    if (this.isExtern) {
      this.levelsettings['level'] = 'customer';
      this.levelsettings['levelvalues'] = this.externLevelValues[0];
      this.absoluteNumbers = true;
    }

    this.updatemetadata();
    window.scroll(0, 0);
    this.setlevel("__init", ""); // fix long loading

    setTimeout(() => {
      if (this.stats_ts.length == 0) {
        this.setlevel("__init", "");
      }

      ;
    }, 1500); // counter

    this.timetogo = this.check_portal_online();

    if (this.timetogo < 0 && !this.currentuser) {
      setInterval(() => {
        this.timetogo = this.check_portal_online();

        if (this.timetogo >= 0) {
          this.router.navigate(['/']);
        }
      }, 500);
    }

    ;
  }

  ngOnDestroy() {
    this.mapdata = [];
  }

  buildLevelValuesForCustomers() {
    if (this.isExtern) {
      for (const item of this.currentuser.usergroups.smed_reporting) {
        if (item === 'kvuser') continue;
        this.externLevelValues.push(item);
      }

      if (this.isRKIKVUser) {
        for (const item of this.levelvalues) {
          this.externLevelValues.push(item);
        }
      }
    }
  }

  setlevel(level, value) {
    var _this = this;

    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.currentuser && _this.timetogo < 0) {
        return null;
      }

      _this.levelsettings["resolution"] = _this.isExtern ? 'weekly' : _this.levelsettings["resolution"];

      if (level !== "__init") {
        _this.levelsettings[level] = value;
        _this.levelsettings = _this.smed.updatestartstop(_this.levelsettings);
      }

      ;
      _this.summaryinfo = [];
      _this.stats_ts = [];
      _this.utiltimes = {};
      _this.decisions_ttt = [];
      _this.decisions_poc = [];
      _this.decisions_pocvsttt = [];
      _this.timetotreat = NaN;
      _this.qmCases = NaN;

      if (_this.metadata.length == 0) {
        _this.updatemetadata();

        return null;
      }

      if (_this.levelsettings['start'] && _this.levelsettings['stop']) {
        _this.progress = true;
        yield _this.querydatasmed();

        if (_this.currentuser) {
          yield _this.querydatasmed('decisions');
        }

        ;
      }
    })();
  }

  updatemetadata() {
    var _this2 = this;

    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.api.getmetadata("metadata")) {
        _this2.metadata = yield _this2.api.getmetadata("metadata"); // Performance optimization - use only if needed by app
        // this.sortdata = this.api.getmetadata("sortdata");
        // this.geojson_available = this.api.getmetadata("geodata");
      }

      if (_this2.metadata) {
        if (_this2.metadata.length > 0) {
          _this2.dometasettings();
        }
      } else {
        _this2.metadata = [];
        setTimeout(() => {
          if (_this2.metadata !== undefined && _this2.sortdata !== undefined) {
            if (_this2.metadata.length > 0) {
              _this2.dometasettings();
            }
          } else {
            _this2.metadataok = false;
            _this2.metadata = [];
          }
        }, 1500);
      }

      ;
    })();
  }

  handleklick(plot, event) {}

  dometasettings() {
    this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
    this.levelid = this.api.filterArray(this.metadata, "type", "levelid")[0]['varname'];
    this.subgroups = ["Keine"].concat(this.api.getValues(this.api.filterArray(this.metadata, "type", "group"), "varname"));
    this.metadataok = true;
  }

  querydatasmed(thefield = "") {
    var _this3 = this;

    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let now = new Date();
      let oldstand = new Date();
      let dataage = 0; // 0 hours old     

      let query = {
        "client_id": _this3.api.REST_API_SERVER_CLIENTID,
        "groupinfo": {}
      };
      query["groupinfo"]["level"] = _this3.isExtern && _this3.levelsettings['levelvalues'] !== 'Gesamt' ? "customer" : "KV";
      query["groupinfo"]["levelid"] = _this3.levelsettings["levelvalues"];
      query["groupinfo"]["timeframe"] = _this3.levelsettings["resolution"];
      query["groupinfo"]["Jahr"] = {
        "$gte": parseInt(_this3.levelsettings["start"].slice(0, 4)),
        "$lte": parseInt(_this3.levelsettings["stop"].slice(0, 4))
      };

      if (thefield != "") {
        query["showfields"] = [thefield, 'KM6Versicherte', 'BEVSTAND'];
      } else {
        query["showfields"] = _this3.allpublicfields.concat(['KM6Versicherte', 'BEVSTAND']);
      }

      ;
      let dbdaterange;

      if (thefield != "") {
        yield _this3.db.querydatadates(_this3.levelsettings['level'], _this3.levelsettings["levelvalues"], thefield, _this3.levelsettings["resolution"]).then(data => {
          if (data.length > 0) {
            dbdaterange = Object.create(data[0]);
          }
        });
      } else {
        yield _this3.db.querydatadates(_this3.levelsettings['level'], _this3.levelsettings["levelvalues"], _this3.allpublicfields[0], _this3.levelsettings["resolution"]).then(data => {
          if (data.length > 0) {
            dbdaterange = Object.create(data[0]);
          }
        });
      }

      ;

      if (!dbdaterange) {
        dbdaterange = {
          'startdate': '2000-01-01',
          'stopdate': '2000-01-01'
        };
      } else {
        oldstand = new Date(dbdaterange['Stand']);
        dataage = (now.getTime() - oldstand.getTime()) / (1000 * 60 * 60);
      }

      ;

      if (dbdaterange['startdate'] <= _this3.levelsettings["start"] && dbdaterange['stopdate'] >= _this3.levelsettings["stop"] && dataage < 6) {
        if (thefield != "") {
          _this3.makesmeditems(thefield);
        } else {
          for (let fielditem of _this3.allpublicfields) {
            _this3.makesmeditems(fielditem);
          }

          ;
        }

        ;
      } else {
        yield _this3.api.postTypeRequest('get_data/', query).subscribe(data => {
          let res = data["data"];

          if (thefield === "") {
            for (const item of res) {
              if (!item.mainsymptoms_ts) {
                item.mainsymptoms_ts = [];
              }
            }
          }

          if (thefield != "" && res.length > 0) {
            _this3.db.deletewhere(thefield, _this3.levelsettings['level'], _this3.levelsettings["levelvalues"], _this3.levelsettings["resolution"], _this3.levelsettings["start"], _this3.levelsettings["stop"]).then(() => {
              _this3.updatedb(res, thefield);
            });

            _this3.db.storestand(thefield, _this3.levelsettings['level'], _this3.levelsettings["levelvalues"], now.toISOString(), _this3.levelsettings["start"], _this3.levelsettings["stop"], _this3.levelsettings["resolution"]);
          }

          ;

          if (thefield == "" && res.length > 0) {
            for (let fielditem of _this3.allpublicfields) {
              _this3.db.deletewhere(fielditem, _this3.levelsettings['level'], _this3.levelsettings["levelvalues"], _this3.levelsettings["resolution"], _this3.levelsettings["start"], _this3.levelsettings["stop"], _this3.levelsettings['zeitraum']).then(() => {
                _this3.updatedb(res, fielditem);
              });

              _this3.db.storestand(fielditem, _this3.levelsettings['level'], _this3.levelsettings["levelvalues"], now.toISOString(), _this3.levelsettings["start"], _this3.levelsettings["stop"], _this3.levelsettings["resolution"]);
            }

            ;
          }

          ;
        }, error => {});
      }

      ;
    })();
  }

  updatedb(data, thefield) {
    var _this4 = this;

    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.smed.newcombine(data, thefield);
      yield _this4.makesmeditems(thefield);
    })();
  }

  exportascsv(name, data) {
    this.csv.exportToCsv(name, data);
    this.csv.exportToCsv(name + "_settings.csv", [this.levelsettings]);
  }

  makesmeditems(thefield) {
    var _this5 = this;

    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.levelsettings = _this5.smed.updatestartstop(_this5.levelsettings);
      let startdate = _this5.levelsettings['startdate'];
      let enddate = _this5.levelsettings['enddate'];

      if (thefield == "stats") {
        _this5.stats_ts = [];
        _this5.summaryinfo = [];
        let statswdate = yield _this5.db.listdata('stats', _this5.levelsettings['level'], _this5.levelsettings['levelvalues'], _this5.levelsettings['start'], _this5.levelsettings['stop'], true, _this5.levelsettings["resolution"], _this5.levelsettings['zeitraum']);

        if (statswdate.length > 0) {
          for (let item of statswdate) {
            item["Mittlere Dauer (Sek.)"] = item["DAUERsmed"] / item["DAUERsmedFaelle"];

            if (item["Dauer_sek"] == 0) {
              item["Mittlere Dauer (Sek.)"] = null;
            }

            item["Mittlere Anzahl Beschwerden"] = item["Anzahl_Beschwerden"] / item["Assessments"];
            item["Mittlere Anzahl Fragen"] = item["Anzahl_Fragen"] / item["Assessments"];

            if (item["Anzahl_Beschwerden"] == 0) {
              item["Mittlere Anzahl Beschwerden"] = null;
            }

            item["Assessments pro 100 Tsd. Einw."] = item["Assessments"] / (item["BEVSTAND"] / 1e5); // item["ARE Assessments pro 100 Tsd. Einw."] = item["Assessments_mit_ARE"] / (item["BEVSTAND"] / 1e5);
            // item["ARE Assessments (v2) pro 100 Tsd. Einw."] = item["Assessments_mit_ARE_v2"] / (item["BEVSTAND"] / 1e5);

            item["Anteil ARE Assessments"] = 100 * (item["Assessments_mit_ARE_v3"] / item["Assessments"] / .25) - 100;
            item['totaleNumbers'] = item['Assessments'];
          }

          ;
          _this5.stats_ts = statswdate;
          let theid = _this5.stats_ts[0]['levelid'];

          if (theid != "Gesamt") {
            _this5.summaryinfo["levelid"] = " in ".concat(theid);
          } else {
            _this5.summaryinfo["levelid"] = " in Deutschland";
          }

          ;
          _this5.summaryinfo["Assessments Gesamt"] = _this5.api.sumArray(_this5.api.getValues(_this5.stats_ts, "Assessments"));
          _this5.summaryinfo["Assessments pro Woche"] = _this5.summaryinfo["Assessments Gesamt"] / _this5.api.getValues(_this5.stats_ts, "Assessments").length;
          _this5.summaryinfo["Mittlere Dauer"] = _this5.api.sumArray(_this5.api.getValues(_this5.stats_ts, "DAUERsmed")) / _this5.api.sumArray(_this5.api.getValues(_this5.stats_ts, "DAUERsmedFaelle"));
          _this5.summaryinfo["Anzahl Beschwerden"] = _this5.api.sumArray(_this5.api.getValues(_this5.stats_ts, "Anzahl_Beschwerden")) / _this5.summaryinfo["Assessments Gesamt"];
          _this5.summaryinfo["Anzahl Fragen"] = _this5.api.sumArray(_this5.api.getValues(_this5.stats_ts, "Anzahl_Fragen")) / _this5.summaryinfo["Assessments Gesamt"];

          let sorteddates = _this5.api.getValues(_this5.stats_ts, "Datum").sort();

          _this5.summaryinfo["Beginn"] = new Date(sorteddates[0]);
          _this5.summaryinfo["Ende"] = new Date(sorteddates.pop());
          _this5.summaryinfo["done"] = true; // only here signal for loading done:

          _this5.progress = false;
        }
      }

      ;

      if (thefield == "mainsymptoms_ts") {
        let symptoms_list = [];
        symptoms_list = yield _this5.db.listdata('mainsymptoms_ts', _this5.levelsettings['level'], _this5.levelsettings['levelvalues'], _this5.levelsettings['start'], _this5.levelsettings['stop'], true, _this5.levelsettings["resolution"], _this5.levelsettings['zeitraum']);
        symptoms_list = _this5.api.getValues(symptoms_list, 'data');
        _this5.symptoms_list_export = _this5.api.sortArray(_this5.api.groupbysum(symptoms_list, 'Sympt', '', 'n'), 'n', "descending");

        for (let item of _this5.symptoms_list_export) {
          let anzahl_symptome = _this5.api.sumArray(_this5.api.getValues(_this5.symptoms_list_export, "n"));

          item["Anteil"] = Math.round(1000 * item['n'] / anzahl_symptome) / 10;
        }

        _this5.symptoms_list = _this5.symptoms_list_export.slice(0, 15);
      }

      ;

      if (thefield == "timestats") {
        let utiltimes = [];
        let dbutiltimes = yield _this5.db.listdata('timestats', _this5.levelsettings['level'], _this5.levelsettings['levelvalues'], _this5.levelsettings['start'], _this5.levelsettings['stop'], false, _this5.levelsettings["resolution"], _this5.levelsettings['zeitraum']);
        dbutiltimes = _this5.api.getValues(dbutiltimes, 'data');
        utiltimes = _this5.api.groupbysum(dbutiltimes, "wt", "h", "n");

        let ntotal = _this5.api.sumArray(_this5.api.getValues(utiltimes, 'n'));

        dbutiltimes = [];

        for (let item of utiltimes) {
          item["Wochentag"] = _this5.api.getweekdayname(item["wt"]);
          item['Anzahl'] = item['n'];
          item['Anteil'] = 0.1 * Math.round(1000 * item['n'] / ntotal);
          item['TimeLabel'] = item['h'] + "-" + (item['h'] + 2) + 'h';
          delete item['n'];
        }

        _this5.utiltimes = _this5.api.makeheatmapdata(utiltimes, "wt", "h", 'Anteil', 'Wochentag', 'TimeLabel');
      }

      ;

      if (thefield == "timetotreat") {
        let result = [];
        let standardSort = [{
          TTTsmed_text: undefined,
          Anzahl: 0,
          Anteil: 0
        }, {
          TTTsmed_text: 'Notfall',
          Anzahl: 0,
          Anteil: 0
        }, {
          TTTsmed_text: 'schnellstmögliche ärztliche Behandlung',
          Anzahl: 0,
          Anteil: 0
        }, {
          TTTsmed_text: 'Ärztliche Behandlung innerhalb von 24h',
          Anzahl: 0,
          Anteil: 0
        }, {
          TTTsmed_text: 'Ärztliche Behandlung nicht innerhalb von 24h erforderlich',
          Anzahl: 0,
          Anteil: 0
        }, {
          TTTsmed_text: 'k.A./Befragung unklar',
          Anzahl: 0,
          Anteil: 0
        }];
        result = yield _this5.db.listdata('timetotreat', _this5.levelsettings['level'], _this5.levelsettings['levelvalues'], _this5.levelsettings['start'], _this5.levelsettings['stop'], true, _this5.levelsettings["resolution"], _this5.levelsettings['zeitraum']);
        result = _this5.api.groupbysum(result, 'TTTsmed_text', '', 'Anzahl');

        const total = _this5.api.sumArray(_this5.api.getValues(result, 'Anzahl'));

        for (let item of result) {
          item['Anteil'] = Math.round(1000 * item['Anzahl'] / total) / 10;
        }

        if (!_this5.isRKIUser || !_this5.isRKIKVUser) {
          if (result[0].TTTsmed_text !== undefined) {
            result.push({
              TTTsmed_text: undefined,
              Anzahl: 0,
              Anteil: 0
            });
          }
        }

        _this5.timetotreat = createStandardSort(result);

        function createStandardSort(data) {
          const result = [];

          for (const item of standardSort) {
            for (const _item of data) {
              if (item.TTTsmed_text === _item.TTTsmed_text) {
                item.Anteil = _item.Anteil;
                item.Anzahl = _item.Anzahl;
              }
            }

            result.push(item);
          }

          return result.reverse();
        }
      }

      if (thefield == "decisions") {
        let decisions = [];
        decisions = yield _this5.db.listdata('decisions', _this5.levelsettings['level'], _this5.levelsettings['levelvalues'], _this5.levelsettings['start'], _this5.levelsettings['stop'], true, _this5.levelsettings["resolution"], _this5.levelsettings['zeitraum']);

        let total = _this5.api.sumArray(_this5.api.getValues(decisions, 'Anzahl'));

        _this5.decisions_ttt = _this5.api.replacemissing(_this5.api.groupbysum(decisions, 'TTTsmed_text', "TTTdispo_text", 'Anzahl'), 'TTTdispo_text', "Keine Daten");
        _this5.decisions_poc = _this5.api.replacemissing(_this5.api.groupbysum(decisions, 'POCsmed_text', "POCdispo_text", 'Anzahl'), 'POCdispo_text', "Keine Daten");
        ;
        _this5.decisions_pocvsttt = _this5.api.groupbysum(decisions, 'TTTsmed_text', "POCsmed_text", 'Anzahl').reverse();
      }

      if (thefield === "qmCases") {
        let standardSort = [{
          text: "Vortriage",
          data: 0
        }, {
          text: 'nur Notfall ausgeschlossen',
          data: 0
        }, {
          text: 'Assessment vollständig',
          data: 0
        }, {
          text: 'Assessement abgekürzt',
          data: 0
        }, {
          text: 'SmED nicht anwendbar',
          data: 0
        }];
        const data = yield _this5.db.listdata('stats', _this5.levelsettings['level'], _this5.levelsettings['levelvalues'], _this5.levelsettings['start'], _this5.levelsettings['stop'], true, _this5.levelsettings["resolution"], _this5.levelsettings['zeitraum']);
        let total = 0;

        if (data.length > 0) {
          for (const item of data) {
            if (item["QMFaelle"]) {
              total += item["QMFaelle"];

              for (const _item of standardSort) {
                if (_item.text === "Vortriage") {
                  if (_item.data === 0) {
                    _item.data = _this5.api.sumArray(_this5.api.getValues(data, "QM_Kat_Vortriage"));
                  }
                }

                if (_item.text === "nur Notfall ausgeschlossen") {
                  if (_item.data === 0) {
                    _item.data = _this5.api.sumArray(_this5.api.getValues(data, "QM_Kat_nur_Notfall_ausgeschlossen"));
                  }
                }

                if (_item.text === "Assessment vollständig") {
                  if (_item.data === 0) {
                    _item.data = _this5.api.sumArray(_this5.api.getValues(data, "QM_Kat_Assessment_vollst"));
                  }
                }

                if (_item.text === "Assessement abgekürzt") {
                  if (_item.data === 0) {
                    _item.data = _this5.api.sumArray(_this5.api.getValues(data, "QM_Kat_Assessment_abgekuerzt"));
                  }
                }

                if (_item.text === "SmED nicht anwendbar") {
                  if (_item.data === 0) {
                    _item.data = _this5.api.sumArray(_this5.api.getValues(data, "QM_Kat_SmED_nicht_anwendbar"));
                  }
                }
              }
            }
          }
        }

        if (standardSort) {
          for (const item of standardSort) {
            item.data = inPercent(item.data, total);
          }
        }

        _this5.qmCases = standardSort.reverse();

        function inPercent(x, y) {
          const result = Math.round(1000 * x / y) / 10;
          return result;
        }
      }
    })();
  } // Pre Launch Counter


  check_portal_online() {
    let date1 = new Date("2022-03-14 08:00:00".replace(/-/g, "/")); // DUE TO BAD SAFARI IMPLEMENTATION!

    let date2 = new Date();
    let timediff = date2.getTime() - date1.getTime();
    return timediff;
  }

  counterstring(timediff) {
    if (timediff >= 0) {
      return "";
    }

    let Tage = Math.floor(-timediff / (1000 * 60 * 60 * 24));
    let Stunden = Math.floor(-timediff / (1000 * 60 * 60));
    Stunden = Math.floor((Stunden / 24 - Math.floor(Stunden / 24)) * 24);
    let Minuten = Math.floor(-timediff / (1000 * 60));
    Minuten = Math.floor((Minuten / 60 - Math.floor(Minuten / 60)) * 60);
    let Sekunden = Math.floor(-timediff / 1000);
    Sekunden = Math.floor((Sekunden / 60 - Math.floor(Sekunden / 60)) * 60);
    return Tage + ' Tage ' + Stunden + " Stunden " + Minuten + " Minuten " + Sekunden + " Sekunden";
  }

}

StartComponent.ɵfac = function StartComponent_Factory(t) {
  return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_dbservice_service__WEBPACK_IMPORTED_MODULE_1__.DBService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_csvexport_service__WEBPACK_IMPORTED_MODULE_2__.CsvexportService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_smed_aggregation_service__WEBPACK_IMPORTED_MODULE_5__.SmedAggregationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};

StartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: StartComponent,
  selectors: [["app-start"]],
  decls: 8,
  vars: 6,
  consts: [["fxLayout", "column", "fxLayoutGap", "1rem", "fxLayoutAllign", "space-around", 1, "container"], ["class", "mat-caption lightgreycolor right", 4, "ngIf"], ["class", "brandingpicture", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "mat-caption", "lightgreycolor", "right"], [1, "brandingpicture", 3, "ngClass"], ["href", "https://www.zi.de", 2, "color", "white"], ["href", "https://www.zi.de/smed"], ["class", "lightgreycolor", 4, "ngIf"], [1, "lightgreycolor"], ["href", "https://www.zi.de/smed", 2, "color", "white"], ["href", "https://www.116117.de", 2, "color", "white"], ["routerLink", "/private"], ["color", "primary", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["color", "primary", 3, "selected", "click"], ["fxLayout", "row wrap", 4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["kvUser", ""], ["rkiUser", ""], ["fxLayout", "row wrap"], ["class", "key-wrapper", 4, "ngIf"], ["fxFlex", "50", "fxFlex.lt-md", "100", 4, "ngIf"], ["fxFlex.lt-md", "100", 3, "fxFlex", 4, "ngIf"], ["fxFlex", "100", "fxFlex.lt-md", "100", 4, "ngIf"], [1, "key-wrapper"], [1, "card-wrapper"], ["title", "", 1, "app-box", 3, "value", "textbehind", "numberformat", "maincolor", "description"], ["title", "", "description", "Mittlere Dauer pro Assessment (in Sekunden)", 1, "app-box", 3, "textbehind", "numberformat", "maincolor", "value"], ["title", "", "description", "Mittlere Anzahl Beschwerden pro Asssessment", 1, "app-box", 3, "textbehind", "numberformat", "maincolor", "value"], ["title", "", "description", "Mittlere Anzahl beantworteter Fragen pro Asssessment", 1, "app-box", 3, "textbehind", "numberformat", "maincolor", "value"], ["fxFlex", "50", "fxFlex.lt-md", "100"], [1, "sliderHeader"], ["input", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["xtickformat", "%d.%m.<br>%Y", "plottype", "area", 3, "data", "xvalue", "outcomes", "sortx", "fontcolor", "dataChange"], [1, "mat-elevation-z0", 3, "opened", "closed"], [1, "mat-caption"], ["input", "", 3, "ngModel", "ngModelChange"], [3, "click"], ["inline", "true"], ["xtickformat", "%d.%m.<br>%Y", "plottype", "area", 3, "data", "xvalue", "outcomes", "sortx", "fontcolor", "colorscheme", "dataChange"], ["fxFlex.lt-md", "100", 3, "fxFlex"], ["plottype", "hbar", 3, "data", "xvalue", "percent", "fontcolor", "outcomes", "sort", "dataChange", "clicked"], ["fxFlex", "100", "fxFlex.lt-md", "100"], [1, "lightgreycolor", "mat-caption"], ["plottype", "heatmap", 3, "data", "fontcolor", "dataChange"], ["plottype", "hbar", 3, "data", "xvalue", "fontcolor", "showlegend", "outcomes", "custommargins", "dataChange"], ["type", "1"], ["xtickformat", "%d.%m.<br>%Y", "plottype", "tsline", 3, "data", "xvalue", "fontcolor", "colorscheme", "sortx", "outcomes", "dataChange"], [1, "backgroundicon"], ["plottype", "stackedbar", 3, "data", "xvalue", "fontcolor", "showlegend", "outcomes", "custommargins", "colorby", "dataChange"]],
  template: function StartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, StartComponent_p_2_Template, 4, 1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, StartComponent_div_3_Template, 3, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, StartComponent_div_4_Template, 3, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, StartComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, StartComponent_ng_container_6_Template, 3, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, StartComponent_div_7_Template, 19, 7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.currentuser);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isExtern);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isExtern);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.metadata && !ctx.currentuser);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.timetogo >= 0 || ctx.currentuser);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.timetogo >= 0 || ctx.currentuser);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChip, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionPanelDescription, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__.DefaultClassDirective, _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_6__.PlotComponent, _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_7__.BoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".box[_ngcontent-%COMP%] {\n  background-color: #2b2b2b;\n}\n\n.sliderHeader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.flagicon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding-left: 0.1rem;\n  padding-bottom: 0.3rem;\n}\n\n.brandingpicture[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-size: cover;\n  margin: -2em;\n  margin-bottom: 2em;\n  margin-top: 1em;\n  padding: 2em;\n  filter: contrast(1.3);\n  filter: grayscale(1);\n  min-height: 200px;\n  color: rgb(124, 124, 124);\n  background-image: url('pexels-karolina-grabowska-4386466.jpg');\n}\n\n.smallheader[_ngcontent-%COMP%] {\n  color: inherit;\n  padding: 0px;\n  background-image: none;\n  min-height: 0px;\n  margin: 0px;\n}\n\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.minheight[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.fakecontent[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.185);\n  color: rgba(255, 255, 255, 0.466);\n  border-radius: 15px;\n  text-align: center;\n  vertical-align: middle;\n  min-height: 150px;\n  height: 100%;\n}\n\n.grey[_ngcontent-%COMP%] {\n  stroke: rgba(255, 255, 255, 0.466) !important;\n}\n\n.backgroundicon[_ngcontent-%COMP%] {\n  color: rgb(114, 114, 114);\n}\n\n.card-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.app-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0FBQ0YiLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjJiO1xyXG59XHJcblxyXG4uc2xpZGVySGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZsYWdpY29uIHtcclxuICBmb250LXNpemU6IC44cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogLjFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IC4zcmVtO1xyXG59XHJcblxyXG4uYnJhbmRpbmdwaWN0dXJlIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWFyZ2luOiAtMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGZpbHRlcjogY29udHJhc3QoMS4zKTtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBjb2xvcjogcmdiKDEyNCwgMTI0LCAxMjQpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvYnJhbmRpbmcvcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00Mzg2NDY2LmpwZycpO1xyXG59XHJcblxyXG4uc21hbGxoZWFkZXIge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIG1pbi1oZWlnaHQ6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm1pbmhlaWdodCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmZha2Vjb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTg1KTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ2Nik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmV5IHtcclxuICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kaWNvbiB7XHJcbiAgY29sb3I6IHJnYigxMTQsIDExNCwgMTE0KTtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uYXBwLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG59Il19 */"]
});

/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chroma-js */ 8754);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);







class ApiService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.itsatest = false;
    this.REST_API_SERVER = "https://api.zidatasciencelab.de/"; // "https://barebonedashboardapi.azurewebsites.net/"; "https://dashboardapi.ziapp.de/"; "http://localhost:8000/"; 

    this.REST_API_SERVER_CLIENTID = "smed_reporting";
    this.primarycolor = '#3c9bfa'; //"#2196f3"; // "#e91e63";

    this.accentcolor = '#2dcd73'; //"#e3714e1";

    this.warncolor = '#f0194b'; //"#e1149b";
  }

  getTypeRequest(url) {
    return this.httpClient.get(this.REST_API_SERVER + url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    })).pipe(
    /*timeout(3500),*/
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(3));
  }

  postTypeRequest(url, payload) {
    return this.httpClient.post(this.REST_API_SERVER + url, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    })).pipe(
    /*timeout(15000),*/
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(3));
    ;
  }

  getTypeRequestnotimeout(url) {
    return this.httpClient.get(this.REST_API_SERVER + url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(3));
  }

  postTypeRequestnotimeout(url, payload) {
    return this.httpClient.post(this.REST_API_SERVER + url, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      return res;
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(3));
    ;
  } // Specific Requests


  updateuser(user, setting, value, usergroups = "") {
    let payload = {
      'email': user,
      'key': setting,
      'value': value
    };

    if (usergroups != "") {
      payload['usergroups'] = usergroups;
    }

    return this.postTypeRequest('userstatus/', payload);
  }

  deleteuser(user, password = "") {
    let payload = {
      "email": user
    };

    if (password != "") {
      payload["password"] = password;
    }

    ;
    return this.postTypeRequest('deleteuser', payload);
  }

  changeuserpwd(user, newpwd, oldpwd = "") {
    let payload = {
      "newpassword": newpwd,
      email: user
    };

    if (oldpwd != "") {
      payload["oldpassword"] = oldpwd;
    }

    return this.postTypeRequest('changepwd', payload);
  }

  countView(url) {
    // Privacy preserving Webcounter, see Documentation here https://github.com/zidatalab/ziwebcounter
    this.httpClient.get('https://analytics.api.ziapp.de/view/ambulante_notfaelle/data?pageid=' + url + '&cookiedissent=' + true, {
      withCredentials: false
    }).subscribe();
  } // Data APIs


  getValues(array, key) {
    let values = [];

    for (let item of array) {
      values.push(item[key]);
    }

    return values;
  }

  getKeys(array) {
    return Object.keys(array[0]);
  }

  objectkeystocolumns(array, targetData) {
    for (let item of array) {
      let obj = item[targetData];

      for (let key of Object.keys(obj)) {
        item[key] = obj[key];
      }

      obj[targetData] = NaN;
      delete obj[targetData];
    }

    return array;
  }

  getOptions(array, key) {
    return array.map(item => item[key]).filter((value, index, self) => self.indexOf(value) === index);
  }

  filterArray(array, key, value) {
    let i = 0;
    let result = [];

    if (!Array.isArray(array)) {
      return result;
    }

    for (let item of array) {
      if (item[key] == value) {
        result.push(item);
      }

      ;
      i = i + 1;
    }

    return result;
  }

  filterNAArray(array, key) {
    let i = 0;
    let result = [];

    for (let item of array) {
      if (item[key] && item[key] !== null && !isNaN(item[key])) {
        result.push(item);
      }

      ;
      i = i + 1;
    }

    return result;
  }

  filterNA(array) {
    let result = [];

    for (let item of array) {
      if (!isNaN(item)) {
        result.push(item);
      }

      ;
    }

    return result;
  }

  filterArraybyList(array, key, list) {
    let i = 0;
    let result = [];

    for (let item of array) {
      if (list.indexOf(item[key]) >= 0) {
        result.push(item);
      }

      ;
      i = i + 1;
    }

    return result;
  }

  getmetadata(name) {
    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return JSON.parse(localStorage.getItem(name));
    })();
  }

  sortArray(array, key, order = "ascending") {
    let result = array;

    if (order == "ascending") {
      return result.sort((a, b) => a[key] < b[key] ? -1 : 1);
    } else {
      return result.sort((a, b) => a[key] > b[key] ? -1 : 1);
    }
  }

  sumArray(array) {
    var total = 0;

    for (var obj of array) {
      if (parseFloat(obj)) {
        total += +obj;
      }
    }

    ;
    return total;
  }

  getuniqueValues(array, key) {
    let items = this.getValues(array, key);
    return [...new Set(items)];
  }

  groupbysum(array, key1, key2 = "", outcome) {
    let result = [];
    let valueskey1 = this.getuniqueValues(array, key1);
    let valueskey2 = [];

    if (key2 != "") {
      valueskey2 = this.getuniqueValues(array, key2);
    }

    for (let value of valueskey1) {
      let keyvalues = this.filterArray(array, key1, value);

      if (key2 == "") {
        let topush = {};
        topush[key1] = value;
        topush[outcome] = this.sumArray(this.getValues(keyvalues, outcome));
        result.push(topush);
      }

      if (key2 !== "") {
        for (let k2value of valueskey2) {
          let topush = {};
          topush[key1] = value;
          topush[key2] = k2value;
          topush[outcome] = this.sumArray(this.getValues(this.filterArray(keyvalues, key2, k2value), outcome));
          result.push(topush);
        }
      }

      ;
    }

    return result;
  }

  getweekdayname(dayofweek, mongo = false) {
    let days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

    if (mongo) {
      days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    }

    return days[dayofweek - 1];
  }

  splitarraybykey(array, splitkey) {
    let res = [];
    let splitvalues = this.getuniqueValues(array, splitkey);

    for (let value of splitvalues) {
      res.push(this.filterArray(array, splitkey, value));
    }

    return res = [];
  }

  makescale(bins = 5) {
    return chroma_js__WEBPACK_IMPORTED_MODULE_1__.scale([chroma_js__WEBPACK_IMPORTED_MODULE_1__(this.primarycolor).set('hsl.h', +70), this.primarycolor]).colors(bins);
  }

  stringwrap(string, maxlength = 30) {
    let newstring = "";
    let wordsarray = string.split(" ");
    let fulllength = string.length;
    let linelength = 0;

    for (let word of wordsarray) {
      let wordlen = word.length;

      if (linelength + wordlen < maxlength) {
        newstring = newstring + " " + word;
        linelength = linelength + wordlen;
      } else {
        newstring = newstring + "<br>" + word;
        linelength = wordlen;
      }

      ;
    }

    return newstring;
  }

  makeheatmapdata(array, xname, yname, valuename, xlabel = "", ylabel = "") {
    let res = {};
    res['x'] = this.getuniqueValues(array, xname).sort(function (a, b) {
      return a - b;
    });
    res['y'] = this.getuniqueValues(array, yname).sort(function (a, b) {
      return a - b;
    });
    res['z'] = [];

    for (let yitem of res['y']) {
      let topush = [];

      for (let xitem of res['x']) {
        try {
          topush.push(this.filterArray(this.filterArray(array, xname, xitem), yname, yitem)[0][valuename]);
        } catch {
          topush.push(NaN);
        }

        ;
      }

      res['z'].push(topush);
    }

    if (xlabel != "") {
      let xlab = [];

      for (let item of res['x']) {
        try {
          xlab.push(this.filterArray(array, xname, item)[0][xlabel]);
        } catch {
          xlab.push("");
        }

        ;
      }

      res['x'] = xlab;
    }

    ;

    if (ylabel != "") {
      let ylab = [];

      for (let item of res['y']) {
        try {
          ylab.push(this.filterArray(array, yname, item)[0][ylabel]);
        } catch {
          ylab.push("");
        }

        ;
      }

      res['y'] = ylab;
    }

    ;
    return res;
  }

  replacemissing(array, key, replacement = "Fehlend") {
    for (let item of array) {
      if (!item[key]) {
        item[key] = replacement;
      }
    }

    return array;
  }

  arrayintersect(a, b) {
    var setA = new Set(a);
    var setB = new Set(b);
    var intersection = new Set([...setA].filter(x => setB.has(x)));
    return Array.from(intersection);
  }

}

ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};

ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8968:
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class AuthGuardService {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate(next, state) {
        let result = false;
        let userdata = this._authService.getUserDetails();
        let isExtern = this._authService.isExtern();
        if (userdata && !isExtern) {
            result = true;
        }
        else {
            this._router.navigate(['/']);
        }
        return result;
    }
    canActivateAdmin(next, state) {
        let result = false;
        let userdata = this._authService.getUserDetails();
        if (userdata) {
            if (userdata["is_admin"] || userdata["is_superadmin"]) {
                result = true;
            }
        }
        else {
            this._router.navigate(['/']);
        }
        return result;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);







class AuthService {
    constructor(http, _api, router) {
        this.http = http;
        this._api = _api;
        this.router = router;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('userInfo')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    OnlineStatus() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(window, 'offline').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => false)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(window, 'online').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => true)), new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((sub) => {
            sub.next(navigator.onLine);
            sub.complete();
        }));
    }
    login(formdata) {
        let b = formdata;
        const payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpParams()
            .set('username', b.username)
            .set('password', b.password)
            .set('client_id', this._api.REST_API_SERVER_CLIENTID);
        return this._api.postTypeRequestnotimeout('login/', payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(user => {
            return this.logintasks(user);
        }));
    }
    logintasks(user) {
        this.setDataInLocalStorage('refresh_token', user.refresh_token);
        this.setDataInLocalStorage('access_token', user.access_token);
        this.storeUserDetails(user.user);
        this.currentUserSubject.next(user.user);
        return user;
    }
    adduser(data) {
        return this._api.postTypeRequest('newuser', data);
    }
    refreshToken() {
        return this.http.post(this._api.REST_API_SERVER + 'login/refresh/', { refresh: true }).subscribe(data => {
            let result = data;
            this.setDataInLocalStorage('access_token', result.access_token);
        }, error => { });
    }
    storeUserDetails(data) {
        return localStorage.setItem('userInfo', JSON.stringify(data));
    }
    getUserDetails() {
        return localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : false;
    }
    setDataInLocalStorage(variableName, data) {
        localStorage.setItem(variableName, data);
    }
    getToken() {
        return localStorage.getItem('access_token');
    }
    getRefreshToken() {
        return localStorage.getItem('refresh_token');
    }
    logout() {
        localStorage.clear();
        this.currentUserSubject.next(null);
    }
    updateUserData() {
        return this._api.getTypeRequest('users/profile/');
    }
    gettokeninfo() {
        let token = this.getToken();
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
    ;
    getUserReportingGroup() {
        if (this.currentUserValue) {
            return this.currentUserValue.usergroups.smed_reporting;
        }
        return [];
    }
    isRKIUser() {
        if (this.currentUserValue) {
            const userGroup = this.currentUserValue.usergroups.smed_reporting;
            if (userGroup.includes('rki') && !(userGroup.includes('kvuser'))) {
                return true;
            }
            return false;
        }
        return false;
    }
    isRKIKVUser() {
        if (this.currentUserValue) {
            const userGroup = this.currentUserValue.usergroups.smed_reporting;
            if (userGroup.includes('rki') && userGroup.includes('kvuser')) {
                return true;
            }
            return false;
        }
        return false;
    }
    isExtern() {
        if (this.currentUserValue) {
            const usergroup = this.currentUserValue.usergroups.smed_reporting;
            if (!usergroup.includes('kvuser')) {
                return true;
            }
            return false;
        }
        return false;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9873:
/*!***********************************************!*\
  !*** ./src/app/services/csvexport.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsvexportService": () => (/* binding */ CsvexportService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CsvexportService {
    exportToCsv(filename, rows) {
        if (!rows) {
            return;
        }
        if (rows && !rows.length) {
            rows = [rows];
        }
        const separator = ',';
        const keys = Object.keys(rows[0]);
        const csvContent = keys.join(separator) +
            '\n' +
            rows.map(row => {
                return keys.map(k => {
                    let cell = row[k] === null || row[k] === undefined ? '' : row[k];
                    cell = cell instanceof Date
                        ? cell.toLocaleString()
                        : cell.toString().replace(/"/g, '""');
                    if (cell.search(/("|,|\n)/g) >= 0) {
                        cell = `"${cell}"`;
                    }
                    return cell;
                }).join(separator);
            }).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) {
            // Browsers that support HTML5 download attribute
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
CsvexportService.ɵfac = function CsvexportService_Factory(t) { return new (t || CsvexportService)(); };
CsvexportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CsvexportService, factory: CsvexportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5518:
/*!********************************!*\
  !*** ./src/app/services/db.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDB": () => (/* binding */ AppDB),
/* harmony export */   "DataItem": () => (/* binding */ DataItem),
/* harmony export */   "StandItem": () => (/* binding */ StandItem),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dexie */ 1273);

class DataItem {
}
class StandItem {
}
class AppDB extends dexie__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super('smeddb');
        var db = this;
        db.on("versionchange", function (event) {
            db.close();
        });
        db.version(11).stores({
            datadb: 'id++,[level+levelid+Indicator+timeframe+Datum],[level+levelid+Indicator+timeframe],[level+levelid+Indicator+timeframe+Jahr]',
            standdb: 'id++,[level+levelid+Indicator+timeframe]',
        });
        db.datadb.mapToClass(DataItem);
        db.standdb.mapToClass(StandItem);
    }
}
var db = new AppDB();


/***/ }),

/***/ 8351:
/*!***********************************************!*\
  !*** ./src/app/services/dbservice.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DBService": () => (/* binding */ DBService)
/* harmony export */ });
/* harmony import */ var C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ 5518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 5830);




class DBService {
  constructor(api) {
    this.api = api;
  }

  storestand(Indicator, level, levelid, Stand, mindate, maxdate, resolution) {
    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _db__WEBPACK_IMPORTED_MODULE_1__.db.standdb.where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).delete();
      _db__WEBPACK_IMPORTED_MODULE_1__.db.standdb.put({
        'level': level,
        'levelid': levelid,
        'Stand': Stand,
        'Indicator': Indicator,
        'startdate': mindate,
        'stopdate': maxdate,
        'timeframe': resolution
      });
    })();
  }

  getstand(Indicator, level, levelid, resolution) {
    return _db__WEBPACK_IMPORTED_MODULE_1__.db.standdb.where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).first();
  }

  listdata(Indicator, level, levelid, start = "", stop = "", expand = true, resolution, timeframe = '') {
    let tosearch = {
      Indicator: Indicator,
      level: level,
      levelid: levelid
    }; // Can be implemented later to restrict results

    if (start !== "" && stop !== "" && expand == true) {
      if (timeframe === 'Letztes Jahr') {
        const lastYear = Number(start.slice(0, 4));
        return _db__WEBPACK_IMPORTED_MODULE_1__.db.datadb.where('[level+levelid+Indicator+timeframe+Jahr]').equals([level, levelid, Indicator, resolution, lastYear]).toArray().then(data => {
          return this.api.objectkeystocolumns(data, 'data');
        });
      }

      return _db__WEBPACK_IMPORTED_MODULE_1__.db.datadb.where('[level+levelid+Indicator+timeframe+Datum]').between([level, levelid, Indicator, resolution, start], [level, levelid, Indicator, resolution, stop]).toArray().then(data => this.api.objectkeystocolumns(data, 'data'));
    }

    if (expand == true) {
      return _db__WEBPACK_IMPORTED_MODULE_1__.db.datadb.where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).toArray().then(data => this.api.objectkeystocolumns(data, 'data'));
    }

    if (expand == false) {
      return _db__WEBPACK_IMPORTED_MODULE_1__.db.datadb.where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).toArray();
    }

    ;
  }

  querydatadates(level, levelid, Indicator, resolution = "monthly") {
    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = yield _db__WEBPACK_IMPORTED_MODULE_1__.db.standdb.where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).toArray();
      return res;
    })();
  }

  deletewhere(Indicator, level, levelid, resolution = "monthly", start = "", stop = "", timeframe = "") {
    let tosearch = {
      Indicator: Indicator,
      level: level,
      levelid: levelid,
      timeframe: resolution
    }; // Can be implemented later to restrict results

    if (start !== "" && stop !== "") {
      const lastYear = Number(start.slice(0, 4));

      if (timeframe === 'Letztes Jahr') {
        return _db__WEBPACK_IMPORTED_MODULE_1__.db.datadb.where('[level+levelid+Indicator+timeframe+Jahr]').equals([level, levelid, Indicator, resolution, lastYear]).delete();
      }

      return _db__WEBPACK_IMPORTED_MODULE_1__.db.datadb.where('[level+levelid+Indicator+timeframe+Datum]').between([level, levelid, Indicator, resolution, start], [level, levelid, Indicator, resolution, stop]).delete();
    } else {
      return _db__WEBPACK_IMPORTED_MODULE_1__.db.datadb.where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).delete();
    }
  }

  adddatabulk(array) {
    return _db__WEBPACK_IMPORTED_MODULE_1__.db.datadb.bulkPut(array);
  }

  adddata({
    level,
    levelid,
    Jahr,
    Monat,
    KW,
    Datum,
    Indicator,
    data,
    KM6Versicherte,
    BEVSTAND,
    resolution
  }) {
    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _db__WEBPACK_IMPORTED_MODULE_1__.db.datadb.put({
        Indicator: Indicator,
        level: level,
        levelid: levelid,
        Jahr: Jahr,
        Monat: Monat,
        KW: KW,
        Datum: Datum,
        data: data,
        timeframe: resolution
      });
    })();
  }

  clean() {
    _db__WEBPACK_IMPORTED_MODULE_1__.db["delete"]();
    _db__WEBPACK_IMPORTED_MODULE_1__.db.open();
  }

}

DBService.ɵfac = function DBService_Factory(t) {
  return new (t || DBService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
};

DBService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DBService,
  factory: DBService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3741:
/*!*********************************************************!*\
  !*** ./src/app/services/interceptor-service.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterceptorService": () => (/* binding */ InterceptorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 5830);






class InterceptorService {
    constructor(router, _auth, _api) {
        this.router = router;
        this._auth = _auth;
        this._api = _api;
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.apiurl = this._api.REST_API_SERVER;
    }
    intercept(request, next) {
        if (request.url.includes(this.apiurl) && !request.url.includes("login/refresh") && this._auth.getUserDetails()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this._auth.getToken()}`
                }
            });
        }
        if (request.url.includes(this.apiurl) && request.url.includes("login/refresh") && this._auth.getUserDetails()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this._auth.getRefreshToken()}`
                }
            });
        }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            // Refresh if token has expired and Userdetails not null
            if (request.url.includes(this.apiurl) && (this._auth.getUserDetails()["email"].length > 0) &&
                error.status == 401) {
                this._auth.refreshToken();
            }
            // Logout on Refresh error
            if (request.url.includes(this.apiurl) && request.url.includes("login/refresh") && error.status == 422) {
                this.refreshTokenInProgress = false;
                this._auth.logout();
                this.router.navigate(["/"]);
            }
            else {
                this.refreshTokenInProgress = false;
            }
            ;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
        }));
    }
}
InterceptorService.ɵfac = function InterceptorService_Factory(t) { return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
InterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: InterceptorService, factory: InterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 275:
/*!******************************************!*\
  !*** ./src/app/services/replace_pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplacePipe": () => (/* binding */ ReplacePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ReplacePipe {
    transform(value, strToReplace, replacementStr) {
        if (!value || !strToReplace || !replacementStr) {
            return value;
        }
        return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
    }
}
ReplacePipe.ɵfac = function ReplacePipe_Factory(t) { return new (t || ReplacePipe)(); };
ReplacePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "replace", type: ReplacePipe, pure: true });


/***/ }),

/***/ 420:
/*!******************************************************!*\
  !*** ./src/app/services/smed-aggregation.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmedAggregationService": () => (/* binding */ SmedAggregationService)
/* harmony export */ });
/* harmony import */ var C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_services_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/db */ 5518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_dbservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dbservice.service */ 8351);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ 5830);





class SmedAggregationService {
  constructor(db, api) {
    this.db = db;
    this.api = api;
  } // Query Methods


  newcombine(array, fieldname) {
    var _this = this;

    return (0,C_repos_ambulante_notfaelle_Dashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //if (fieldname=="stats"){console.log("newcombine",fieldname,array);};
      let dbarray = [];

      if (array.length == 0) {
        return [];
      }

      ;

      for (let item of array) {
        if (!item[fieldname]) {
          return [];
        } else {
          for (let fielditem of item[fieldname]) {
            let topush = new src_app_services_db__WEBPACK_IMPORTED_MODULE_1__.DataItem();
            topush['level'] = item['level'];
            topush['levelid'] = item['levelid'];
            topush['Jahr'] = item['Jahr'];
            topush['Monat'] = item['Monat'];
            topush['KM6Versicherte'] = item['KM6Versicherte'];
            topush['BEVSTAND'] = item['BEVSTAND'];
            topush['KW'] = fielditem['KW'];
            topush['Datum'] = fielditem['Datum'];
            delete fielditem['KW'];
            topush['data'] = fielditem;
            topush['Indicator'] = fieldname;
            topush['timeframe'] = item['timeframe'];
            dbarray.push(topush);
          }
        }

        ;
      } //if (fieldname=="stats"){console.log("newcombine res",fieldname,dbarray);};


      yield _this.db.adddatabulk(dbarray);
    })();
  }

  querysmedts(groupvars = [], outcome = "", levelsettings, sort = false, topx = false, filtervar = "", filtervalues = [], topxvar = "") {
    if (levelsettings["zeitraum"] !== "Gesamt") {
      let query = {
        "startdate": levelsettings['start'].toISOString().slice(0, 10),
        "stopdate": levelsettings['end'].toISOString().slice(0, 10),
        "subgroups": groupvars,
        "filterlist": []
      };
      query["filterlist"].push({
        "level": levelsettings['level']
      });

      if (levelsettings["levelvalues"] !== "Gesamt") {
        query["filterlist"].push({
          "levelid": levelsettings["levelvalues"]
        });
      }

      if (outcome != "") {
        query["outcome"] = outcome;
      }

      let tofilter = false;

      if (filtervar !== "" && filtervalues.length > 0) {
        tofilter = true;
      }

      ;
      return this.api.postTypeRequest('analytics/timeseries/', query).subscribe(data => {
        let res = data["result"];

        if (sort) {
          res = this.api.sortArray(res, "count", "descending");
        }

        if (topx && topxvar == '') {
          res = res.slice(0, topx);
        }

        if (tofilter) {
          res = this.api.filterArraybyList(res, filtervar, filtervalues);
        }

        if (topx && topxvar !== '') {
          let keycounts = {};

          for (let item of res) {
            if (keycounts[item[topxvar]] && Math.round(item['count'])) {
              keycounts[item[topxvar]] = keycounts[item[topxvar]] + item['count'];
            }

            if (!keycounts[item[topxvar]] && Math.round(item['count'])) {
              keycounts[item[topxvar]] = item['count'];
            }
          }

          let keycountsarray = [];

          for (let key of Object.keys(keycounts)) {
            keycountsarray.push({
              "name": key,
              "count": keycounts[key]
            });
          }

          let filterlist = this.api.getValues(this.api.sortArray(keycountsarray, 'count', "descending").slice(0, topx), "name");
          res = this.api.filterArraybyList(res, topxvar, filterlist);
        }

        return res;
      }, error => {
        return [];
      });
    } else {
      return [];
    }

    ;
  } // Aggregation Functions


  adddate(Array, yearvar, isoweekvar) {
    for (const item of Array) {
      item["Datum"] = this.getDateOfISOWeek(item[isoweekvar], item[yearvar]);
    }

    return Array;
  }

  adddatemonth(Array, yearvar, monthvar) {
    for (const item of Array) {
      item["Datum"] = new Date(item[yearvar] + "-" + item[monthvar] + "-01");
    }

    return Array;
  }

  getDateOfISOWeek(w, y) {
    let millisperday = 1000 * 60 * 60 * 24;
    let yearstart = new Date(y + "-01-01");
    yearstart = new Date(yearstart.getTime() - (yearstart.getDay() - 1) * millisperday);
    let ISOweekStart = new Date(yearstart.getTime() + millisperday * 7 * (w + 1));
    return ISOweekStart;
  }

  aggsymptoms(symptomsobject) {
    let inputarray = [];
    let output = {};
    let res = [];

    for (let item of symptomsobject) {
      inputarray = inputarray.concat(item["Symptome"]);
    }

    for (let item of inputarray) {
      if (output[item.name] !== undefined) {
        output[item.name] = output[item.name] + item["n"];
      } else {
        output[item.name] = item["n"];
      }
    }

    output["Keine Angabe"] = output[""];
    delete output[""];

    for (let thekey in Object.keys(output)) {
      res.push({
        "name": Object.keys(output)[thekey],
        "n": Object.values(output)[thekey]
      });
    }

    return this.api.sortArray(res, "n", "descending");
  }

  updatestartstop(levelsettings) {
    // Appply date filters
    let tzoffset = new Date().getTimezoneOffset() * 60000;
    let today = new Date();
    let startdate = "2019-04-01";
    let enddate = today.getFullYear() + "-12-31";

    if (levelsettings["zeitraum"] == "Letzte 12 Monate") {
      startdate = new Date(today.getFullYear() - 1 + today.toISOString().slice(4, 8) + "01").toISOString().slice(0, 10);
      enddate = today.toISOString().slice(0, 10);
    }

    ;

    if (levelsettings["zeitraum"] == "Aktuelles Jahr") {
      startdate = new Date(today.getFullYear() + "-01-01").toISOString().slice(0, 10);
      enddate = new Date(today.getFullYear() + "-12-31").toISOString().slice(0, 10);
    }

    ;

    if (levelsettings["zeitraum"] == "Letztes Jahr") {
      startdate = new Date(today.getFullYear() - 1 + "-01-01").toISOString().slice(0, 10);
      enddate = new Date(today.getFullYear() - 1 + "-12-31").toISOString().slice(0, 10);
    }

    ;
    let millisperday = 1000 * 60 * 60 * 24;

    if (levelsettings["zeitraum"] == "Letzte 4 Wochen") {
      enddate = new Date(today.getTime() - today.getDay() * millisperday).toISOString().slice(0, 10);
      startdate = new Date(today.getTime() - (4 * 7 - 1) * millisperday).toISOString().slice(0, 10);
    }

    ;

    if (levelsettings["zeitraum"] == "Letzte Woche") {
      enddate = new Date(today.getTime() - today.getDay() * millisperday).toISOString().slice(0, 10);
      startdate = new Date(today.getTime() - 6 * millisperday).toISOString().slice(0, 10);
    }

    ;

    if (levelsettings["zeitraum"] == "Detailliert") {
      let newstart = new Date(levelsettings['start_picker'] - tzoffset).toISOString().slice(0, 10);
      let newstop = new Date(levelsettings['stop_picker'] - tzoffset).toISOString().slice(0, 10); //console.log("Detailliert",levelsettings['start_picker'],newstart,levelsettings['stop_picker'],newstop);

      levelsettings["start"] = newstart;
      levelsettings["stop"] = newstop;
    }

    if (levelsettings["zeitraum"] != "Detailliert") {
      levelsettings["start"] = startdate;
      levelsettings["stop"] = enddate;
    } else {}

    ;
    return levelsettings;
  }

}

SmedAggregationService.ɵfac = function SmedAggregationService_Factory(t) {
  return new (t || SmedAggregationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_services_dbservice_service__WEBPACK_IMPORTED_MODULE_2__.DBService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
};

SmedAggregationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: SmedAggregationService,
  factory: SmedAggregationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 649:
/*!*****************************************!*\
  !*** ./src/material/material.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);






























class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__.MatSliderModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__.MatBadgeModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__.MatStepperModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__.MatSliderModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__.MatBadgeModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__.MatStepperModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__.MatSliderModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__.MatBadgeModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__.MatStepperModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionModule], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__.MatSliderModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__.MatBadgeModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__.MatStepperModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionModule] }); })();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map