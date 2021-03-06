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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/profile/profile.component */ 8220);
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/start/start.component */ 4924);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ 8968);
/* harmony import */ var _pages_private_private_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/private/private.component */ 3836);
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/admin/admin.component */ 6601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









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
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_dbservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/dbservice.service */ 8351);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 6131);













function AppComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div")(1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AppComponent_div_31_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](19); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Anmelden");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
} }
function AppComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div")(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AppComponent_div_32_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r11); _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](19); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "account_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Benutzerprofil");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
} }
function AppComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div")(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AppComponent_div_33_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](19); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Erweiterte Analysen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
} }
function AppComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div")(1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AppComponent_div_34_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](19); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "admin_panel_settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Administration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
} }
function AppComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div")(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AppComponent_div_35_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](19); _r0.toggle(); return ctx_r16.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Ausloggen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
} }
function AppComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 36)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Keine Internetverbindung");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "Dieses Portal ben\u00F6tigt eine aktive Internetverbindung.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AppComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 36)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Keine Verbindung zur API");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "Dieses Portal ben\u00F6tigt eine aktive Internetverbindung.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
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
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_services_dbservice_service__WEBPACK_IMPORTED_MODULE_2__.DBService)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 64, vars: 11, consts: [["autosize", "true", "scrollable", "false"], ["color", "transparent"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", 3, "click"], [1, "example-spacer"], ["fxShow", "true", "fxHide.lt-sm", "true"], ["href", "https://www.zi.de/smed"], ["src", "./assets/branding/logo_project.png", 1, "brandinglogo"], ["href", "https://www.zi.de"], ["src", "https://ziwebstorage.blob.core.windows.net/appradar/assets/logo_zi_small_transparent.png", 1, "brandinglogo"], ["fxShow", "false", "fxShow.lt-sm", "true"], ["src", "https://ziwebstorage.blob.core.windows.net/appradar/assets/logo_zi_small_transparent.png", 1, "brandinglogotiny"], [1, "mat-typography"], ["autosize", ""], ["mode", "push", "position", "start", "autoFocus", "false"], ["drawer", ""], [1, "menucontainer"], [1, "primarycolor"], ["mat-icon-button", "", "routerLink", "/", 3, "click"], [1, "icon"], [4, "ngIf"], ["class", "offlinemsg", 4, "ngIf"], [1, "footerstyle"], ["fxLayout", "column", "fxLayoutGap", "0.5rem"], ["fxLayout", "column wrap", "fxLayoutAlign", "space-around start"], ["fxflex", "28", "fxHide.xs", ""], [2, "color", "white"], ["href", "https://www.zi.de/meta/impressum", 2, "color", "white"], ["href", "https://www.zi.de/footer/datenschutzhinweis", 2, "color", "white"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "space-between end"], ["fxFlex", ""], [2, "padding", "0.5rem", "text-align", "center"], ["mat-icon-button", "", "routerLink", "/login", 3, "click"], ["mat-icon-button", "", "routerLink", "/profile", 3, "click"], ["mat-icon-button", "", "routerLink", "/private", 3, "click"], ["mat-icon-button", "", "routerLink", "/admin", 3, "click"], ["mat-icon-button", "", "href", "./", 3, "click"], [1, "offlinemsg"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav-content")(2, "mat-toolbar", 1)(3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AppComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](19); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "div", 4)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 9)(13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "main")(16, "section", 11)(17, "mat-drawer-container", 12)(18, "mat-drawer", 13, 14)(20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "p", 16)(23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div")(26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AppComponent_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r18); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](19); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](30, "Startseite");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](31, AppComponent_div_31_Template, 6, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](32, AppComponent_div_32_Template, 6, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](33, AppComponent_div_33_Template, 6, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](34, AppComponent_div_34_Template, 6, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](35, AppComponent_div_35_Template, 6, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](37, AppComponent_div_37_Template, 5, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](38, AppComponent_div_38_Template, 5, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](39, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "footer")(41, "div", 21)(42, "div", 22)(43, "div", 23)(44, "div", 24)(45, "p")(46, "mat-list", 25)(47, "mat-list-item")(48, "p", 25)(49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](50, "Navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "mat-list-item")(52, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](53, "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "mat-list-item")(55, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](56, "Datenschutzhinweise");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "div", 28)(58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "div", 30)(61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](63, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.loginoption && !ctx.loginstatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.loginstatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currentuser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.adminstatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.loginstatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.apiconnection == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("\u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](63, 8, ctx.currentdate, "Y"), " Zentralinstitut f\u00FCr die kassen\u00E4rztliche Versorgung in der Bundesrepublik Deutschland");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultShowHideDirective, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawer, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatDrawerContent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListItem, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.offlinemsg[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: rgba(255, 255, 255, 0.8);\n  color: black;\n  position: absolute;\n  border-radius: 15px;\n  margin: 1rem;\n  right: 1rem;\n  padding: 0.6rem;\n  font-size: 0.8rem;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: #f5f5f5;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style: none;\n  cursor: pointer;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 auto;\n  padding-right: 0.6em;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0;\n  width: 85%;\n  vertical-align: middle;\n}\n\n.menucontainer[_ngcontent-%COMP%] {\n  width: 15rem;\n  margin: 0px;\n  height: 100%;\n  padding: 1rem;\n  padding-top: 1.5rem;\n  background-color: white;\n}\n\n.menucontainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.menucontainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  font-weight: bolder;\n}\n\n.menucontainer[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: black;\n  margin-right: 0.9rem;\n}\n\n.menucontainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n  .mat-drawer-inner-container {\n  overflow: hidden !important;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #000000 !important;\n  color: white;\n}\n\n.userinfo[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  color: rgba(255, 255, 255, 0.447);\n}\n\n.zilogostyle[_ngcontent-%COMP%] {\n  height: 2rem;\n  margin-top: 20px;\n  filter: grayscale(100%);\n}\n\n.brandinglogo[_ngcontent-%COMP%] {\n  height: 2rem;\n  margin-top: 20px;\n  margin-left: 50px;\n}\n\n.brandinglogotiny[_ngcontent-%COMP%] {\n  height: 1rem;\n  margin-top: 10px;\n  margin-left: 25px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n.footerstyle[_ngcontent-%COMP%] {\n  background-color: #303030;\n  color: #929292;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQztFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUFIOztBQUdDOztFQUVFLGNBQUE7QUFBSDs7QUFHQztFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUFIOztBQUdDO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUFIOztBQUdDO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBQUg7O0FBS0M7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZIOztBQUlHO0VBQ0UsWUFBQTtBQUZMOztBQUtHO0VBQ0UsbUJBQUE7QUFITDs7QUFPRztFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQUxMOztBQVFHO0VBQ0UsWUFBQTtBQU5MOztBQVdDO0VBQ0UsMkJBQUE7QUFSSDs7QUFXQTtFQUNFLDJCQUFBO0FBUkY7O0FBVUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQVBGOztBQVVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFQRjs7QUFVQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBV0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVJGOztBQVdBO0VBQ0EsbUJBQUE7QUFSQTs7QUFXQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQVJGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuXG4gIC5vZmZsaW5lbXNne1xuICAgIHBhZGRpbmc6MnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbjoxcmVtO1xuICAgIHJpZ2h0OjFyZW07XG4gICAgcGFkZGluZzouNnJlbTtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICAgIFxuICB9XG4gYSB7XG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICBjb2xvcjogd2hpdGU7XG4gfVxuIFxuIGE6aG92ZXIsXG4gYTphY3RpdmUge1xuICAgY29sb3I6ICNmNWY1ZjU7XG4gfVxuICBcbiAubmF2aWdhdGlvbi1pdGVtcyB7XG4gICBsaXN0LXN0eWxlOiBub25lO1xuICAgY3Vyc29yOiBwb2ludGVyO1xuIH1cbiBcbiAuaWNvbiB7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICBtYXJnaW46IDAgYXV0bztcbiAgIHBhZGRpbmctcmlnaHQ6IC42ZW07XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgd2lkdGg6IDE1JTtcbiB9XG4gXG4gLmxhYmVsIHtcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIG1hcmdpbjogMDtcbiAgIHdpZHRoOiA4NSU7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cblxuXG5cbiAubWVudWNvbnRhaW5lciB7XG4gICB3aWR0aDogMTVyZW07XG4gICBtYXJnaW46IDBweDtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHBhZGRpbmc6IDFyZW07XG4gICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICBcbiAgIHNwYW4gICAgIHtcbiAgICAgY29sb3I6IGJsYWNrO1xuICAgfVxuXG4gICBzcGFuOmhvdmVyIHtcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgIH1cblxuICAgIFxuICAgLmljb24ge1xuICAgICBjb2xvcjogYmxhY2s7XG4gICAgIG1hcmdpbi1yaWdodDogMC45cmVtO1xuICAgfVxuXG4gICBhOmhvdmVyIHtcbiAgICAgY29sb3I6IGJsYWNrOyAgICAgIFxuICAgfVxuICAgXG4gfVxuXG4gOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG4gICBvdmVyZmxvdzogaGlkZGVuIWltcG9ydGFudDtcbn1cblxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50O1xufVxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMCFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXJpbmZvIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ0Nyk7XG59XG5cbi56aWxvZ29zdHlsZSB7XG4gIGhlaWdodDogMi4wcmVtO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cblxuLmJyYW5kaW5nbG9nbyB7XG4gIGhlaWdodDogMi4wcmVtO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDsgIFxufVxuXG5cbi5icmFuZGluZ2xvZ290aW55IHtcbiAgaGVpZ2h0OiAxLjByZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4OyAgXG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uZm9vdGVyc3R5bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBjb2xvcjogcmdiKDE0NiwgMTQ2LCAxNDYpO1xufSJdfQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../material/material.module */ 649);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/start/start.component */ 4924);
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! plotly.js/dist/plotly.js */ 2355);
/* harmony import */ var plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-plotly.js */ 249);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _components_leafletmap_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/leafletmap/map/map.component */ 1888);
/* harmony import */ var _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/plotly/plot/plot.component */ 6571);
/* harmony import */ var _components_table_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/table/table/table.component */ 3101);
/* harmony import */ var _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/infobox/box/box.component */ 6264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/de */ 8855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/profile/profile.component */ 8220);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _services_interceptor_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/interceptor-service.service */ 3741);
/* harmony import */ var _pages_private_private_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/private/private.component */ 3836);
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/admin/admin.component */ 6601);
/* harmony import */ var _services_replace_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/replace_pipe */ 275);


























angular_plotly_js__WEBPACK_IMPORTED_MODULE_16__.PlotlyModule.plotlyjs = plotly_js_dist_plotly_js__WEBPACK_IMPORTED_MODULE_4__;
(0,_angular_common__WEBPACK_IMPORTED_MODULE_17__.registerLocaleData)(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9__["default"], 'de');
class AppModule {
    constructor(plotlyService) {
        this.plotlyService = plotlyService;
        this.plotlyService.getPlotly(); //.register(SVLocale);
    }
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["????inject"](angular_plotly_js__WEBPACK_IMPORTED_MODULE_16__.PlotlyService)); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineInjector"]({ providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_18__.LOCALE_ID, useValue: 'de-DE' }, angular_plotly_js__WEBPACK_IMPORTED_MODULE_16__.PlotlyService,
        // This needs to be uncommented to provide  auth
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS,
            useClass: _services_interceptor_service_service__WEBPACK_IMPORTED_MODULE_12__.InterceptorService,
            multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            angular_plotly_js__WEBPACK_IMPORTED_MODULE_16__.PlotlyModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__.FlexLayoutModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__.StartComponent,
        _components_leafletmap_map_map_component__WEBPACK_IMPORTED_MODULE_5__.MapComponent,
        _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_6__.PlotComponent,
        _components_table_table_table_component__WEBPACK_IMPORTED_MODULE_7__.TableComponent,
        _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_8__.BoxComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__.LoginComponent,
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__.ProfileComponent,
        _pages_private_private_component__WEBPACK_IMPORTED_MODULE_13__.PrivateComponent,
        _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_14__.AdminComponent,
        _services_replace_pipe__WEBPACK_IMPORTED_MODULE_15__.ReplacePipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        angular_plotly_js__WEBPACK_IMPORTED_MODULE_16__.PlotlyModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_22__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule] }); })();


/***/ }),

/***/ 6264:
/*!*********************************************************!*\
  !*** ./src/app/components/infobox/box/box.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxComponent": () => (/* binding */ BoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);






function BoxComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", ctx_r0.title, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 2, ctx_r0.value, ctx_r0.numberformat), "");
} }
function BoxComponent_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 2, ctx_r1.value, ctx_r1.numberformat), " ", ctx_r1.title, "");
} }
function BoxComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 1)(1, "span", 4)(2, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r2.maticon);
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
BoxComponent.??fac = function BoxComponent_Factory(t) { return new (t || BoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
BoxComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: BoxComponent, selectors: [["app-box"]], inputs: { value: "value", title: "title", description: "description", colors: "colors", cutoffs: "cutoffs", maincolor: "maincolor", numberformat: "numberformat", maticon: "maticon", textbehind: "textbehind" }, decls: 9, vars: 6, consts: [["fxLayout", "row"], ["fxFlex", ""], [4, "ngIf"], ["fxFlex", "", 4, "ngIf"], [1, "mat-headline"], ["inline", "true"]], template: function BoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, BoxComponent_h1_3_Template, 3, 5, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](4, BoxComponent_h1_4_Template, 3, 5, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "p")(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, BoxComponent_div_8_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleProp"]("background-color", ctx.itemcolor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.textbehind);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.textbehind);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.maticon);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe], styles: [".dynamicbg[_ngcontent-%COMP%] {\n  background-color: var(--bgcolor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGdDQUhVO0FBQ2QiLCJmaWxlIjoiYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kdGhlYmdjb2xvciA6IHZhcigtLWJnY29sb3IpOyBcblxuLmR5bmFtaWNiZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZWJnY29sb3I7XG59Il19 */"] });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 5836);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chroma-js */ 8754);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);










function MapComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "mat-spinner", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} }
function MapComponent_ng_container_1_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-spinner", 1);
} }
function MapComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, MapComponent_ng_container_1_mat_spinner_3_Template, 1, 0, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx_r1.mapok);
} }
class MapComponent {
    constructor(http, renderer, api) {
        this.http = http;
        this.renderer = renderer;
        this.api = api;
        this.data = [];
        this.nacolor = "white";
        this.debug = false;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.useprovider = 0;
        this.firstload = true;
        this.providers = ['https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'];
        this.attributions = ['Kartenmaterial &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            '??OpenStreetMap, ??CartoDB'];
    }
    ngOnInit() {
        // Debug
        if (this.debug) {
            console.log("ID:", this.id);
            console.log("Map:", this.api.getValues(this.basemap['features'], 'properties'));
        }
        // Sort data
        this.data = this.api.sortArray(this.data, this.Outcome);
        // Init vars
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
        }
        else {
            if ((changes.basemap) && this.checkallok()) {
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
        }
        else {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Init
            let mymap;
            this.mapok = false;
            let colors = this.colorscale;
            let cutoffs = this.cutofflist;
            let thedata;
            if (this.data) {
                thedata = Object.assign(this.data);
            }
            let propname = this.feature;
            let theid = this.id;
            let theopacity = this.opacity;
            let basestyle = {
                weight: 1,
                dashArray: '',
                "color": "grey",
                "fillOpacity": theopacity,
                "Opacity": theopacity
            };
            // If to many regions set weight to 0
            if (thedata.length > 30) {
                basestyle.weight = 0;
            }
            ;
            // Prepare dom
            this.firstload = false;
            let removed = false;
            yield this.preparedom(divid);
            // Load Map
            if (this.debug) {
                console.log('center: ', this.center);
            }
            try {
                mymap = yield leaflet__WEBPACK_IMPORTED_MODULE_0__.map(divid, { center: this.center, zoom: this.Zoom });
            }
            catch (e) {
                document.getElementById(divid).remove();
                yield this.preparedom(divid);
                mymap = yield leaflet__WEBPACK_IMPORTED_MODULE_0__.map(divid, { center: this.center, zoom: this.Zoom });
            }
            ;
            if (this.debug) {
                console.log('Map created');
            }
            // Fix Icons see https://stackoverflow.com/questions/41144319/leaflet-marker-not-found-production-env
            const iconRetinaUrl = 'assets/marker-icon-2x.png';
            const iconUrl = 'assets/marker-icon.png';
            const shadowUrl = 'assets/marker-shadow.png';
            const iconDefault = (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.icon)({
                iconRetinaUrl,
                iconUrl,
                shadowUrl,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            });
            leaflet__WEBPACK_IMPORTED_MODULE_0__.Marker.prototype.options.icon = iconDefault;
            // Load Tiles
            let theprovider = this.useprovider;
            const tiles = leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer(this.providers[theprovider], {
                maxZoom: 19, opacity: 1,
                attribution: this.attributions[theprovider]
            });
            tiles.addTo(mymap);
            mymap.attributionControl.setPrefix('<a href="https://www.ziapp.de"><strong>Zi</strong> Data Science Lab</a>');
            tiles.getContainer().className += ' custombgmap';
            // Chloropleth Map
            if (!this.selectmap) {
                // Layer
                const geojsonFeature = Object.assign(this.basemap);
                if (this.percent) {
                    for (let item of thedata) {
                        if (item[this.feature]) {
                            item['___thevalue'] = Math.round(item[this.feature] * 10000) / 100;
                        }
                        else {
                            item['___thevalue'] = null;
                        }
                    }
                }
                else {
                    for (let item of thedata) {
                        if (item[this.feature]) {
                            item['___thevalue'] = item[this.feature];
                        }
                        else {
                            item['___thevalue'] = null;
                        }
                    }
                }
                for (let item of geojsonFeature.features) {
                    let value = this.api.filterArray(thedata, this.id, item.properties[this.id]);
                    if (value.length > 0) {
                        item['properties'][propname] = value[0]['___thevalue'];
                    }
                    else {
                        item['properties'][propname] = null;
                    }
                }
                if (this.debug) {
                    console.log('Map Features', geojsonFeature.features);
                    console.log("Data:", this.data);
                }
                if (!cutoffs) {
                    cutoffs = this.makecutoffs(this.api.getValues(thedata, '___thevalue'), this.binmethod, this.bins);
                }
                ;
                if (colors.length < cutoffs.length) {
                    colors = this.makescale(cutoffs.length);
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
                    }
                    else {
                        result['color'] = 'grey';
                    }
                    ;
                    return result;
                };
                // Infobox
                let info;
                info = leaflet__WEBPACK_IMPORTED_MODULE_0__.control.layers();
                info.onAdd = function (map) {
                    this._div = leaflet__WEBPACK_IMPORTED_MODULE_0__.DomUtil.create('div');
                    this.update();
                    return this._div;
                };
                info.update = function (props) {
                    this._div.innerHTML = (props ? '<strong>Gebiet: </strong>' + props[theid] : "") + (props && props[propname] ? '<br><strong>Wert: </strong>' + props[propname].toLocaleString() : "");
                    if (props) {
                        leaflet__WEBPACK_IMPORTED_MODULE_0__.DomUtil.addClass(this._div, 'maphoverinfo');
                    }
                    else {
                        leaflet__WEBPACK_IMPORTED_MODULE_0__.DomUtil.removeClass(this._div, 'maphoverinfo');
                    }
                };
                info.addTo(mymap);
                // Add Features/Polygons to Map
                const featLayer = leaflet__WEBPACK_IMPORTED_MODULE_0__.geoJSON(geojsonFeature, {
                    style: myStyle,
                    onEachFeature: (feature, layer) => (layer.on({
                        mouseover: (e) => (this.highlightFeature(info, e)),
                        mouseout: (e) => (this.resetFeature(info, e)),
                        click: (e) => (this.zoomToFeature(mymap, e))
                    }))
                });
                featLayer.resetStyle();
                featLayer.addTo(mymap);
                // Add Legend to Map
                let labels;
                if (this.customlabels) {
                    labels = this.customlabels;
                }
                ;
                let legend;
                legend = leaflet__WEBPACK_IMPORTED_MODULE_0__.control.layers({}, {}, { position: 'topright' });
                let legendtitle = this.api.stringwrap(propname);
                legend.onAdd = function (map) {
                    this._ldiv = leaflet__WEBPACK_IMPORTED_MODULE_0__.DomUtil.create('div', 'customlegend');
                    this._ldiv.innerHTML = '<p><strong>' + legendtitle + '</strong></p>';
                    if (this.percent == true) {
                        this._ldiv.innerHTML += '<p><em>Anteil in %</em></p>';
                    }
                    if (cutoffs) {
                        for (var i = 0; i < cutoffs.length; i++) {
                            if (labels.length == cutoffs.length) {
                                this._ldiv.innerHTML +=
                                    '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;</i> ' +
                                        labels[i];
                            }
                            else {
                                if (cutoffs.length > 4) {
                                    this._ldiv.innerHTML +=
                                        '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i> ' +
                                            cutoffs[i].toLocaleString() + (cutoffs[i + 1] ? ' bis unter ' + cutoffs[i + 1].toLocaleString() + '<br>' : '+');
                                }
                                else {
                                    this._ldiv.innerHTML +=
                                        '<i style="background-color:' + colors[i] + ';">&nbsp;&nbsp;&nbsp;</i> ' +
                                            (cutoffs[i + 1] ? 'bis ' + cutoffs[i + 1].toLocaleString() + "&nbsp;" : cutoffs[i].toLocaleString() + '+');
                                }
                            }
                        }
                    }
                    return this._ldiv;
                };
                legend.addTo(mymap);
            }
            else {
                // Layer
                const geojsonFeature = Object.assign(this.basemap);
                colors = this.makescale(2);
                let myStyle = function (feature) {
                    let res = basestyle;
                    let thecolor = "grey";
                    if (feature.properties['___clicked']) {
                        thecolor = colors[1];
                    }
                    res['color'] = thecolor;
                    return res;
                };
                const featLayer = leaflet__WEBPACK_IMPORTED_MODULE_0__.geoJSON(geojsonFeature, {
                    style: myStyle,
                    onEachFeature: (feature, layer) => (layer.on({
                        mouseover: (e) => (this.highlightFeature(info, e)),
                        mouseout: (e) => (this.resetFeature(info, e)),
                        click: (e) => (this.selectarea(mymap, e))
                    }))
                });
                featLayer.addTo(mymap);
                // Infobox
                let info;
                info = leaflet__WEBPACK_IMPORTED_MODULE_0__.control.layers();
                info.onAdd = function (map) {
                    this._div = leaflet__WEBPACK_IMPORTED_MODULE_0__.DomUtil.create('div');
                    this.update();
                    return this._div;
                };
                info.update = function (props) {
                    this._div.innerHTML = (props ? '<strong>Gebiet: </strong>' + props[theid] : "");
                    if (props) {
                        leaflet__WEBPACK_IMPORTED_MODULE_0__.DomUtil.addClass(this._div, 'maphoverinfo');
                    }
                    else {
                        leaflet__WEBPACK_IMPORTED_MODULE_0__.DomUtil.removeClass(this._div, 'maphoverinfo');
                    }
                };
                info.addTo(mymap);
            }
            this.mapok = true;
        });
    }
    ;
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
            fillOpacity: this.opacity,
        });
        info.update();
    }
    makecutoffs(array, method = "equalint", bins) {
        let result = [];
        let minv = Math.min(...array);
        let maxv = Math.max(...array);
        // equalint    
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
        ;
        // equal group size 
        if (method == 'equalgroupsize') {
            let sortedarray = this.api.filterNA(array.sort((a, b) => parseFloat(a) - parseFloat(b)));
            let arraylength = sortedarray.length;
            let groupsize = Math.floor(arraylength / bins);
            for (let thebin of Array.apply(null, { length: bins }).map(Number.call, Number)) {
                if (thebin == 0) {
                    result.push(sortedarray[0]);
                }
                else {
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
    ;
    newclick(e) {
        let res = [];
        for (let item of this.basemap.features) {
            if (item.properties[this.id] == e) {
                item.properties['___clicked'] = true;
            }
            else {
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
        return chroma_js__WEBPACK_IMPORTED_MODULE_1__.scale([chroma_js__WEBPACK_IMPORTED_MODULE_1__(this.api.primarycolor).set('hsl.h', -120), this.api.primarycolor]).colors(bins);
    }
    getcenter() {
        let features = this.basemap.features;
        let coords = { 'a': [], 'b': [] };
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
    ;
}
MapComponent.??fac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService)); };
MapComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: MapComponent, selectors: [["app-map"]], inputs: { data: "data", nacolor: "nacolor", debug: "debug", Outcome: "Outcome", Zoom: "Zoom", basemap: "basemap", center: "center", opacity: "opacity", feature: "feature", colorscale: "colorscale", cutofflist: "cutofflist", customlabels: "customlabels", binmethod: "binmethod", selectmap: "selectmap", bins: "bins", id: "id", percent: "percent", containername: "containername" }, outputs: { clicked: "clicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????NgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["color", "primary"], [1, "map-container"], ["id", "map-frame", 1, "map-frame"], ["color", "primary", 4, "ngIf"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, MapComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, MapComponent_ng_container_1_Template, 4, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx.basemap);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.basemap);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatSpinner], styles: [".map-container[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.map-frame[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  height: 100%;\n}\n\n.mapdiv[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 400px;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBREo7O0FBS0U7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRkoiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFwLWNvbnRhaW5lciB7XG4gICAgXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBcbiAgfVxuICBcbiAgLm1hcC1mcmFtZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLm1hcGRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG5cblxuXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-plotly.js */ 249);






function PlotComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "mat-spinner", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} }
const _c0 = function () { return { position: "relative", width: "100%", height: "100%" }; };
function PlotComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "plotly-plot", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("plotlyClick", function PlotComponent_ng_container_1_Template_plotly_plot_plotlyClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r2.reportclick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("data", ctx_r1.plotdata)("divId", ctx_r1.divid)("debug", true)("layout", ctx_r1.plotlayout)("config", ctx_r1.mainconfig)("useResizeHandler", true);
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
            locale: 'de',
            doubleClick: 'reset',
            showAxisDragHandles: false,
            showAxisRangeEntryBoxes: false,
            showTips: true
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
                    nticks: this.n_yticks
                },
                autosize: true, padding: 0,
                legend: { x: 1, xanchor: this.legendposx, y: this.legendposy, bgcolor: this.legendbg },
                margin: { l: 0, r: 100, b: 100, t: 0 }, paper_bgcolor: "transparent", plot_bgcolor: "transparent",
                annotations: this.annotations
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
                //legend: { x: 1, xanchor: this.legendposx , y: this.legendposy,  bgcolor: this.legendbg},
                margin: { l: 50, r: 50, b: 0, t: 50 },
                paper_bgcolor: "transparent", plot_bgcolor: "transparent",
                //annotations: this.annotations
            };
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
                yaxis: { fixedrange: true, title: '', autosize: true, automargin: true,
                    rangemode: 'tozero', ticksuffix: " ",
                    zerolinecolor: this.fontcolor,
                    zerolinewidth: 2,
                    nticks: this.n_yticks },
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
                    nticks: this.n_yticks
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
                xaxis: { fixedrange: true, showgrid: true, title: '',
                    automargin: true, nticks: this.n_yticks },
                yaxis: { fixedrange: false, type: 'category', automargin: true,
                    rangemode: 'tozero', ticksuffix: " ",
                    zerolinecolor: this.fontcolor,
                    zerolinewidth: 2 },
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
            type: type
        };
        if (this.plottype == "stackedarea") {
            trace['stackgroup'] = "one";
        }
        if (this.hovertemplate != "") {
            trace['hovertemplate'] = this.hovertemplate;
        }
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
PlotComponent.??fac = function PlotComponent_Factory(t) { return new (t || PlotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
PlotComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: PlotComponent, selectors: [["app-plot"]], inputs: { data: "data", xvalue: "xvalue", colorby: "colorby", outcomes: "outcomes", outcomelabels: "outcomelabels", plottype: "plottype", customdata: "customdata", customconfig: "customconfig", customlayout: "customlayout", custommargins: "custommargins", linewidth: "linewidth", showlegend: "showlegend", sort: "sort", sortx: "sortx", percent: "percent", percentx: "percentx", basecolor: "basecolor", colorscheme: "colorscheme", annotations: "annotations", hovertemplate: "hovertemplate", plottitle: "plottitle", plotsubtitle: "plotsubtitle", plotcaption: "plotcaption", n_yticks: "n_yticks", xtickformat: "xtickformat", xtitle: "xtitle", ytitle: "ytitle", id: "id", divid: "divid", fontfamily: "fontfamily", fontsize: "fontsize", fontcolor: "fontcolor", legendbg: "legendbg", legendposx: "legendposx", legendposy: "legendposy" }, outputs: { clicked: "clicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["color", "primary"], [1, "plotlydiv", 3, "data", "divId", "debug", "layout", "config", "useResizeHandler", "plotlyClick"]], template: function PlotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, PlotComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, PlotComponent_ng_container_1_Template, 2, 9, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !(ctx.plotdata && ctx.mainconfig && ctx.plotlayout));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.plotdata && ctx.mainconfig && ctx.plotlayout);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatSpinner, angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__.PlotlyComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbG90LmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);










function TableComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-form-field", 6)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Suche");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function TableComponent_ng_container_0_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function TableComponent_ng_container_2_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-header-cell", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const thecol_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", thecol_r7, " ");
} }
function TableComponent_ng_container_2_mat_cell_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const thecol_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, element_r11[thecol_r7]));
} }
function TableComponent_ng_container_2_mat_cell_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const thecol_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, element_r11[thecol_r7]));
} }
function TableComponent_ng_container_2_mat_cell_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const element_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const thecol_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](element_r11[thecol_r7]);
} }
function TableComponent_ng_container_2_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, TableComponent_ng_container_2_mat_cell_3_span_1_Template, 3, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TableComponent_ng_container_2_mat_cell_3_span_2_Template, 3, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TableComponent_ng_container_2_mat_cell_3_span_3_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const thecol_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.outcomes_rate.indexOf(thecol_r7) >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.outcomes_numeric.indexOf(thecol_r7) >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.outcomes_rate.indexOf(thecol_r7) < 0 && ctx_r9.outcomes_numeric.indexOf(thecol_r7) < 0);
} }
function TableComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0)(1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TableComponent_ng_container_2_mat_header_cell_2_Template, 2, 1, "mat-header-cell", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TableComponent_ng_container_2_mat_cell_3_Template, 4, 3, "mat-cell", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]()();
} if (rf & 2) {
    const thecol_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matColumnDef", thecol_r7);
} }
function TableComponent_mat_header_row_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-header-row");
} }
function TableComponent_mat_row_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-row");
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
TableComponent.??fac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { data: "data", columns: "columns", outcomes_numeric: "outcomes_numeric", outcomes_rate: "outcomes_rate", newlabels: "newlabels", pagesizes: "pagesizes", addfilter: "addfilter", addrank: "addrank" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]], decls: 6, vars: 6, consts: [[4, "ngIf"], ["matSort", "", 1, "mat-elevation-z0", 3, "dataSource", "dataSourceChange"], [4, "ngFor", "ngForOf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["appearance", "outline"], ["matInput", "", "placeholder", "Suche...", 3, "keyup"], ["input", ""], [3, "matColumnDef"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["mat-sort-header", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, TableComponent_ng_container_0_Template, 6, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("dataSourceChange", function TableComponent_Template_mat_table_dataSourceChange_1_listener($event) { return ctx.datasource = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, TableComponent_ng_container_2_Template, 4, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, TableComponent_mat_header_row_3_Template, 1, 0, "mat-header-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, TableComponent_mat_row_4_Template, 1, 0, "mat-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "mat-paginator", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addfilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dataSource", ctx.datasource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("pageSizeOptions", ctx.pagesizes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSort, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.PercentPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);





















function AdminComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 6)(1, "div", 7)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Administrationsaufgaben");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "In diesem Bereich k\u00F6nnen Dashboard Administratoren (\"Admin\") und Zi-Administratoren (\"Superadmin\") Daten oder Nutzer*innen hinzuf\u00FCgen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div")(7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r4.adduser = !ctx_r4.adduser; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, "Nutzer hinzuf\u00FCgen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} }
function AdminComponent_div_4_ng_container_14_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "admin_panel_settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_4_ng_container_14_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_4_ng_container_14_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_4_ng_container_14_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span")(1, "strong")(2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_span_7_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r21); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; return user_r7.stammdaten = !user_r7.stammdaten; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", !user_r7.lastname ? "k.A." : user_r7.anrede + " " + user_r7.lastname, " ");
} }
function AdminComponent_div_4_ng_container_14_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", !user_r7.lastname ? "k.A." : user_r7.anrede + " " + user_r7.lastname, " ");
} }
function AdminComponent_div_4_ng_container_14_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("(", user_r7.email, ")");
} }
function AdminComponent_div_4_ng_container_14_mat_chip_list_12_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip-list", 24)(1, "mat-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_mat_chip_list_12_Template_mat_chip_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r27); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r25.updateuser(user_r7.email, "user", !user_r7["is_user"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_mat_chip_list_12_Template_mat_chip_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r27); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r28.updateuser(user_r7.email, "admin", !user_r7["is_admin"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_mat_chip_list_12_Template_mat_chip_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r27); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r30.updateuser(user_r7.email, "superadmin", !user_r7["is_superadmin"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Superadmin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("selected", user_r7["is_user"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("selected", user_r7["is_admin"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("selected", user_r7["is_superadmin"]);
} }
function AdminComponent_div_4_ng_container_14_ng_container_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-chip-list", 24)(2, "mat-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_ng_container_14_ng_container_1_Template_mat_chip_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r36); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2).$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r34.updateuser(user_r7.email, "usergroups.kvuser", !(user_r7["usergroups"]["smed_reporting"].indexOf("kvuser") >= 0)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "KV-User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_ng_container_14_ng_container_1_Template_mat_chip_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r36); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2).$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r37.updateuser(user_r7.email, "usergroups.public", user_r7["usergroups"]["smed_reporting"].indexOf("kvuser") >= 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Public Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("selected", user_r7["usergroups"]["smed_reporting"].indexOf("kvuser") >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("selected", !(user_r7["usergroups"]["smed_reporting"].indexOf("kvuser") >= 0));
} }
function AdminComponent_div_4_ng_container_14_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, AdminComponent_div_4_ng_container_14_ng_container_14_ng_container_1_Template, 6, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", user_r7["usergroups"]["smed_reporting"]);
} }
function AdminComponent_div_4_ng_container_14_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-chip-list", 24)(2, "mat-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_ng_container_15_Template_mat_chip_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r43); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r41.updateuser(user_r7.email, "usergroups.kvuser", true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "KV-User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-chip", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_ng_container_15_Template_mat_chip_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r43); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r44.updateuser(user_r7.email, "usergroups.public", true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Public Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("selected", user_r7["is_superadmin"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("selected", user_r7["is_user"] && !user_r7["is_superadmin"]);
} }
function AdminComponent_div_4_ng_container_14_div_16_mat_chip_list_1_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_div_16_mat_chip_list_1_mat_chip_1_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r52); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3).$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r50.deletuser(user_r7.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " l\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_4_ng_container_14_div_16_mat_chip_list_1_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_div_16_mat_chip_list_1_mat_chip_2_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r55); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3).$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); user_r7.chpwd = !user_r7.chpwd; return user_r7.rndpwd = ctx_r53.rndpwd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "password zur\u00FCcksetzen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_4_ng_container_14_div_16_mat_chip_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-chip-list", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, AdminComponent_div_4_ng_container_14_div_16_mat_chip_list_1_mat_chip_1_Template, 2, 0, "mat-chip", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, AdminComponent_div_4_ng_container_14_div_16_mat_chip_list_1_mat_chip_2_Template, 2, 0, "mat-chip", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !user_r7.chpwd);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !user_r7.chpwd);
} }
function AdminComponent_div_4_ng_container_14_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, AdminComponent_div_4_ng_container_14_div_16_mat_chip_list_1_Template, 3, 2, "mat-chip-list", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", user_r7.stammdaten);
} }
function AdminComponent_div_4_ng_container_14_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 27)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Neues Password: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_div_17_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r60); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r58.copy(user_r7.rndpwd); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "mat-chip", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_div_17_Template_mat_chip_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r60); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; return user_r7.chpwd = !user_r7.chpwd; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "abbrechen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "mat-chip", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_4_ng_container_14_div_17_Template_mat_chip_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r60); const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r63.chpwd(user_r7.email, user_r7.rndpwd); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "passwort setzen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const user_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](user_r7.rndpwd);
} }
function AdminComponent_div_4_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, AdminComponent_div_4_ng_container_14_mat_icon_2_Template, 2, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, AdminComponent_div_4_ng_container_14_mat_icon_3_Template, 2, 0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 10)(5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, AdminComponent_div_4_ng_container_14_span_6_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, AdminComponent_div_4_ng_container_14_span_7_Template, 4, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, AdminComponent_div_4_ng_container_14_span_8_Template, 3, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, AdminComponent_div_4_ng_container_14_span_9_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 18)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, AdminComponent_div_4_ng_container_14_mat_chip_list_12_Template, 7, 3, "mat-chip-list", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, AdminComponent_div_4_ng_container_14_ng_container_14_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, AdminComponent_div_4_ng_container_14_ng_container_15_Template, 6, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, AdminComponent_div_4_ng_container_14_div_16_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](17, AdminComponent_div_4_ng_container_14_div_17_Template, 13, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](18, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", user_r7["roles"].indexOf("superadmin") >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", user_r7["roles"].indexOf("superadmin") < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", user_r7.stammdaten);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r6.currentuser["is_superadmin"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r6.currentuser["is_superadmin"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", user_r7.stammdaten);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !user_r7.stammdaten);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", user_r7["usergroups"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !user_r7["usergroups"] || !user_r7["usergroups"]["smed_reporting"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", user_r7.stammdaten);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", user_r7.chpwd);
} }
function AdminComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Nutzerliste");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "In diesem Bereich k\u00F6nnen Nutzerberechtigungen ge\u00E4ndert werden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-card")(6, "mat-list")(7, "mat-list-item")(8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, " Benutzer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, " Rechte und Gruppen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, AdminComponent_div_4_ng_container_14_Template, 19, 11, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.users);
} }
function AdminComponent_div_5_mat_hint_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Ihr Passwort (mindestens 12 Zeichen). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 34)(1, "div", 7)(2, "h2")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Nutzer hinzuf\u00FCgen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-card")(6, "form", 35)(7, "h2")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Informationen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "h4")(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "mat-form-field", 36)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Anrede");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "mat-select", 37)(18, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Herr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Frau");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "Frau Dr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, "Herr Dr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "Dr.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Kein Anrede");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "Bitte w\u00E4hlen Sie eine bevorzugte Anrede f\u00FCr sich");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "mat-form-field", 44)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](40, "Vorname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](41, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, "Fehler: Wir ben\u00F6tigen den Vornamen f\u00FCr die Registrierung.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "mat-form-field", 44)(45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](46, "Nachname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](47, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](49, "Fehler: Wir ben\u00F6tigen den Nachnamen f\u00FCr die Registrierung.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "Initiales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](53, "Passwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](54, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "mat-form-field", 36)(56, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, "Passwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](59, "Passwort zu kurz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](60, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](62, "Bitte kopieren Sie das Passwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](63, AdminComponent_div_5_mat_hint_63_Template, 2, 0, "mat-hint", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](64, "br")(65, "br")(66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "h4")(68, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](69, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](70, " des neuen Nutzers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](71, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](72, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](74, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](75, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](76, "Die E-Mail-Adresse ist ung\u00FCltig");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](77, "div", 50)(78, "div", 51)(79, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_5_Template_button_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r67.addusernow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](80, "Hinzuf\u00FCgen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](81, "div", 51)(82, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_5_Template_button_click_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r69.adduser = !ctx_r69.adduser; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](83, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx_r2.myRegform);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.myRegform.value.password.length < 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r2.myRegform.value.password.length < 12);
} }
function AdminComponent_div_6_mat_radio_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-radio-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Geodaten hinzuf\u00FCgen\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_6_div_19_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span")(1, "mat-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} }
function AdminComponent_div_6_div_19_div_6_mat_form_field_2_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const option_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", option_r83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", option_r83, " ");
} }
function AdminComponent_div_6_div_19_div_6_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-form-field", 70)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Gebiet f\u00FCr Geodatendatei festlegen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function AdminComponent_div_6_div_19_div_6_mat_form_field_2_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4); return ctx_r84.uploadarea = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, AdminComponent_div_6_div_19_div_6_mat_form_field_2_mat_option_4_Template, 2, 2, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx_r80.uploadarea);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r80.areavalues);
} }
function AdminComponent_div_6_div_19_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 65)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, AdminComponent_div_6_div_19_div_6_mat_form_field_2_Template, 5, 2, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 7)(4, "input", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function AdminComponent_div_6_div_19_div_6_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3); return ctx_r86.changeListenerGEOJSON($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_6_div_19_div_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r87); const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](5); return _r81.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Daten Ausw\u00E4hlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx_r78.uploadarea);
} }
function AdminComponent_div_6_div_19_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span")(1, "mat-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} }
function AdminComponent_div_6_div_19_div_7_mat_form_field_10_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const option_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", option_r92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", option_r92, " ");
} }
function AdminComponent_div_6_div_19_div_7_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-form-field", 70)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Wie lautet die Bezeichnung Regionen im geojson?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function AdminComponent_div_6_div_19_div_7_mat_form_field_10_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4); return ctx_r93.uploadareaid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, AdminComponent_div_6_div_19_div_7_mat_form_field_10_mat_option_4_Template, 2, 2, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx_r90.uploadareaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r90.areafeatures);
} }
function AdminComponent_div_6_div_19_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 74)(1, "div", 7)(2, "h3")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "2. GEOJSON beschreiben");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, AdminComponent_div_6_div_19_div_7_span_5_Template, 3, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 7)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, AdminComponent_div_6_div_19_div_7_mat_form_field_10_Template, 5, 2, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r79.geodatafile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("Die Datei hat ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](9, 3, ctx_r79.geojsonfile["features"].length), " Regionen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", true);
} }
function AdminComponent_div_6_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 61)(1, "div", 7)(2, "h3")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "1. GEOJSON Datei hochladen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, AdminComponent_div_6_div_19_span_5_Template, 3, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, AdminComponent_div_6_div_19_div_6_Template, 10, 2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, AdminComponent_div_6_div_19_div_7_Template, 11, 5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r71.geojsonfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r71.geojsonfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r71.geojsonfile);
} }
function AdminComponent_div_6_div_20_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span")(1, "mat-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} }
function AdminComponent_div_6_div_20_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 76)(1, "input", 77, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function AdminComponent_div_6_div_20_div_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3); return ctx_r98.datafile = ctx_r98.changeListener($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "br")(4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_6_div_20_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r99); const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](2); return _r97.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Daten Ausw\u00E4hlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} }
function AdminComponent_div_6_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div")(1, "h3")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "1. CSV Datei hochladen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, AdminComponent_div_6_div_20_span_4_Template, 3, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, AdminComponent_div_6_div_20_div_5_Template, 7, 0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r72.datafile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r72.datafile);
} }
function AdminComponent_div_6_mat_card_21_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span")(1, "mat-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} }
function AdminComponent_div_6_mat_card_21_div_8_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-list-item")(1, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 27)(4, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const hinweis_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](hinweis_r105);
} }
function AdminComponent_div_6_mat_card_21_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div")(1, "mat-list")(2, "h3", 79)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Gefundene Fehler:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, AdminComponent_div_6_mat_card_21_div_8_mat_list_item_5_Template, 6, 1, "mat-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r102.datacheck);
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_5_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const option_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", option_r116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", option_r116, " ");
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-form-field", 70)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Bereich");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_5_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r119); const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; return row_r107.topic = $event; })("selectionChange", function AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_5_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](5); return ctx_r120.checkmetadata(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_5_mat_option_4_Template, 2, 2, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", row_r107.topic);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r108.topicoptions);
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const option_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", option_r123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", option_r123, " ");
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-form-field", 70)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Art");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_7_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r126); const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; return row_r107.type = $event; })("selectionChange", function AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_7_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r126); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](5); return ctx_r127.checkmetadata(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", row_r107.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r109.typeoptions);
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const option_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", option_r132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", option_r132, "");
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-form-field", 70)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Referenzkategorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r135); const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2).$implicit; return row_r107.allforlevel = $event; })("selectionChange", function AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r135); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](6); return ctx_r136.checkmetadata(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_mat_option_4_Template, 2, 2, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2).$implicit;
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", row_r107.allforlevel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r129.getrefvalues(row_r107.varname));
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const option_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", option_r139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", option_r139, "");
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-form-field", 70)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "\u00D6ffentliche Raumebenen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "mat-select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("valueChange", function AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r142); const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2).$implicit; return row_r107.publiclevels = $event; })("selectionChange", function AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_Template_mat_select_selectionChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r142); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](6); return ctx_r143.checkmetadata(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_mat_option_4_Template, 2, 2, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2).$implicit;
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", row_r107.publiclevels);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r130.getrefvalues(row_r107.varname));
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_1_Template, 5, 2, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_mat_form_field_2_Template, 5, 2, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
} if (rf & 2) {
    const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", row_r107.type == "level");
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainer"](0);
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\u00D6ffentlich");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Privat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_6_mat_card_21_div_9_div_11_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 7)(1, "mat-form-field", 92)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Indikatorenbeschreibung");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "textarea", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function AdminComponent_div_6_mat_card_21_div_9_div_11_div_18_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r148); const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; return row_r107.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const row_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", row_r107.description);
} }
const _c0 = function () { return ["ordering", "subgroups"]; };
function AdminComponent_div_6_mat_card_21_div_9_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 87)(1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_5_Template, 5, 2, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, AdminComponent_div_6_mat_card_21_div_9_div_11_mat_form_field_7_Template, 5, 2, "mat-form-field", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_9_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, AdminComponent_div_6_mat_card_21_div_9_div_11_ng_container_10_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "div", 84)(12, "mat-chip-list")(13, "mat-chip", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function AdminComponent_div_6_mat_card_21_div_9_div_11_Template_mat_chip_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r151); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](4); return ctx_r150.checkmetadata(); })("click", function AdminComponent_div_6_mat_card_21_div_9_div_11_Template_mat_chip_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r151); const row_r107 = restoredCtx.$implicit; return row_r107.public = !row_r107.public; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, AdminComponent_div_6_mat_card_21_div_9_div_11_span_14_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, AdminComponent_div_6_mat_card_21_div_9_div_11_span_15_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "mat-chip", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_6_mat_card_21_div_9_div_11_Template_mat_chip_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r151); const row_r107 = restoredCtx.$implicit; return row_r107.adddescr = !row_r107.adddescr; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, " Beschreibung ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](18, AdminComponent_div_6_mat_card_21_div_9_div_11_div_18_Template, 5, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const row_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](row_r107.varname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](10, _c0).indexOf(row_r107.topic) >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](11, _c0).indexOf(row_r107.topic) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("selected", row_r107.public);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", row_r107.public);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !row_r107.public);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("selected", row_r107.adddescr);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", row_r107.adddescr);
} }
function AdminComponent_div_6_mat_card_21_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 82)(1, "div", 83)(2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Thema");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Typ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Referenzkategorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, AdminComponent_div_6_mat_card_21_div_9_div_11_Template, 19, 12, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div")(13, "div")(14, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_6_mat_card_21_div_9_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r155); const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3); return ctx_r154.metadone = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Beschreibung Fertig");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
} if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r103.metadatafile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !(ctx_r103.datacheck.length == 0));
} }
function AdminComponent_div_6_mat_card_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-card")(1, "div")(2, "h3")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "2. Daten beschreiben");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, AdminComponent_div_6_mat_card_21_span_5_Template, 3, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Bitte pr\u00FCfen Sie die initinale Zuordnung sorgf\u00E4ltig. Jeder Upload muss mindestens zwei Variablen vom Bereich \"ordering\" enthalten (Typen: level,levelid). Ebenso sollten alle Subgruppenvariablen vom Typ Gruppe sein. Jede Variable aus den Bereichen \"ordering\" oder \"sungroups\" muss Angaben zur Referenzkategorie machen. Zellen f\u00FCr diese Kategorie m\u00FCssen auch in der Tabelle zu finden sein. Die Variablen aus den Bereichen Outcomes oder Demography sollten vom Typ 'rate' oder 'number' sein. Das Hinzuf\u00FCgen einer Indikatorenbeschreibung ist optional.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, AdminComponent_div_6_mat_card_21_div_8_Template, 6, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, AdminComponent_div_6_mat_card_21_div_9_Template, 16, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r73.metadone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r73.datacheck.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r73.metadatafile && !ctx_r73.metadone);
} }
function AdminComponent_div_6_div_22_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\u00FCberschreiben");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_6_div_22_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "nicht \u00FCberschreiben.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_6_div_22_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p")(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Achtung: Das Erg\u00E4nzen der Daten ist aufw\u00E4ndig und erfordert ggf. viel Zeit. Bitte erg\u00E4nzen Sie nur kleine Datenk\u00F6rper!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} }
function AdminComponent_div_6_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div")(1, "mat-card")(2, "h3")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "3. Sollen die aktuellen Daten \u00FCberschrieben werden?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "p")(6, "mat-slide-toggle", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function AdminComponent_div_6_div_22_Template_mat_slide_toggle_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r160); const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r159.replacedata = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, AdminComponent_div_6_div_22_span_7_Template, 2, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, AdminComponent_div_6_div_22_span_8_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, AdminComponent_div_6_div_22_p_9_Template, 3, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx_r74.replacedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r74.replacedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r74.replacedata);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r74.replacedata);
} }
function AdminComponent_div_6_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 96)(1, "div")(2, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_6_div_23_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r162); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r161.uploadnewdata(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Hinzuf\u00FCgen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div")(5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function AdminComponent_div_6_div_23_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r162); const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r163.resetall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx_r75.metadone && !ctx_r75.uploadareaid);
} }
function AdminComponent_div_6_div_24_mat_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "mat-spinner", 98);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("diameter", 50);
} }
function AdminComponent_div_6_div_24_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Hinweis: Bitte haben Sie Geduld: Es kann etwas dauern wenn viele Daten aktualisiert oder gel\u00F6scht werden m\u00FCssen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function AdminComponent_div_6_div_24_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Upload erfolgreich!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} }
function AdminComponent_div_6_div_24_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Fehler beim Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Fehlermeldung: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r167.uploaderror);
} }
function AdminComponent_div_6_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div")(1, "mat-card")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Datenupload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, AdminComponent_div_6_div_24_mat_spinner_4_Template, 1, 1, "mat-spinner", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, AdminComponent_div_6_div_24_p_5_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, AdminComponent_div_6_div_24_p_6_Template, 3, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, AdminComponent_div_6_div_24_p_7_Template, 6, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r76.uploadres == "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r76.uploadres == "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r76.uploadres == "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r76.uploadres == "error");
} }
function AdminComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 53)(1, "h2")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Daten hinzuf\u00FCgen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Mehr Informationen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "hier");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "mat-card")(9, "div")(10, "h3")(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Was soll hochgeladen werden?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "mat-radio-group", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function AdminComponent_div_6_Template_mat_radio_group_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r169); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r168.dataintend = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "mat-radio-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Daten hinzuf\u00FCgen\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, AdminComponent_div_6_mat_radio_button_16_Template, 2, 0, "mat-radio-button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "br")(18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, AdminComponent_div_6_div_19_Template, 8, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](20, AdminComponent_div_6_div_20_Template, 6, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](21, AdminComponent_div_6_mat_card_21_Template, 10, 3, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](22, AdminComponent_div_6_div_22_Template, 10, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](23, AdminComponent_div_6_div_23_Template, 7, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](24, AdminComponent_div_6_div_24_Template, 8, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx_r3.dataintend);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r3.areavalues);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r3.dataintend == "geodataupload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r3.dataintend == "dataupload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r3.metadatafile && ctx_r3.dataintend == "dataupload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r3.metadone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r3.uploadres || ctx_r3.uploadres == "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r3.uploadres);
} }
class AdminComponent {
    constructor(api, auth, fb) {
        this.api = api;
        this.auth = auth;
        this.fb = fb;
        this.usergroupoptions = ['kvuser'];
    }
    ngOnInit() {
        this.currentuser = this.auth.getUserDetails();
        this.updateuserlist();
        this.buildForm();
    }
    ngOnDestroy() {
    }
    updateuser(user, key, value) {
        if (key != "usergroups.kvuser" && key != "usergroups.public") {
            this.api.updateuser(user, key, value).subscribe(data => { this.updateuserlist(); });
        }
        ;
        let add = false;
        if (key == "usergroups.kvuser") {
            add = value;
        }
        ;
        if (key == "usergroups.public") {
            add = !value;
        }
        ;
        if (key == "usergroups.kvuser" || key == "usergroups.public") {
            this.api.updateuser(user, 'usergroups', add, 'kvuser').subscribe(data => { this.updateuserlist(); });
        }
    }
    deletuser(user) {
        this.api.deleteuser(user).subscribe(data => { this.updateuserlist(); });
    }
    updateuserlist() {
        this.api.getTypeRequest('users/').subscribe(data => { this.users = data; });
    }
    buildForm() {
        this.myRegform = this.fb.group({
            anrede: ["", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(1)
                ]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(12)]],
            firstname: ["", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)
                ]],
            lastname: ["", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)
                ]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]]
        });
        this.myRegform.patchValue({ "password": this.rndpwd() });
    }
    ;
    addusernow() {
        let toadd = this.myRegform.value;
        this.api.postTypeRequest("newuser", toadd).subscribe(data => {
            this.adduser = false;
            this.updateuserlist();
        });
    }
    chpwd(user, pwd) {
        this.api.changeuserpwd(user, pwd).subscribe(data => { this.updateuserlist(); });
    }
    rndpwd() {
        return Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8) + "-" + Math.random().toString(36).slice(4, 8);
    }
    copy(item) {
        document.addEventListener('copy', (e) => {
            e.clipboardData.setData('text/plain', (item));
            e.preventDefault();
            document.removeEventListener('copy', null);
        });
        document.execCommand('copy');
    }
}
AdminComponent.??fac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
AdminComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 7, vars: 4, consts: [["fxLayout", "column", "fxLayoutGap", "1rem", 1, "container"], ["ngClass.lt-sm", "mobileheading"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", "fxLayoutAlign", "start space-between", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "10px", "fxShow.lt-md", "false", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", "fxLayoutAlign", "start space-between"], ["fxFlex", "100"], [1, "mat-caption", "greycolor"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-line", "", "fxLayout", "row wrap"], ["fxFlex", "5"], ["fxFlex", "44", 1, "greycolor", "mat-caption"], ["fxFlex", "50", 1, "greycolor", "mat-caption"], [4, "ngFor", "ngForOf"], ["color", "accent", "fxHide.lt-md", "true", "mat-list-icon", "", 4, "ngIf"], ["fxHide.lt-md", "true", "mat-list-icon", "", 4, "ngIf"], ["fxFlex", "45"], ["fxFlex", "54", "fxLayoutGap", "10px", "fxLayoutAlign", "space-between"], ["class", "smallchips", 4, "ngIf"], ["mat-line", "", 4, "ngIf"], ["color", "accent", "fxHide.lt-md", "true", "mat-list-icon", ""], ["fxHide.lt-md", "true", "mat-list-icon", ""], [3, "click"], [1, "smallchips"], ["color", "primary", 3, "selected", "click"], ["color", "accent", 3, "selected", "click"], ["mat-line", ""], ["class", "add-margin", "class", "smallchips", 4, "ngIf"], ["color", "primary", "selected", "", 3, "click", 4, "ngIf"], ["color", "accent", "selected", "", 3, "click", 4, "ngIf"], ["color", "primary", "selected", "", 3, "click"], ["color", "accent", "selected", "", 3, "click"], [1, "add-margin", 3, "click"], ["fxLayout", "row wrap"], ["autocomplete", "on", 3, "formGroup"], ["appearance", "fill", 1, "full-width"], ["name", "anredefeld", "formControlName", "anrede", "required", ""], ["value", "Herr"], ["value", "Frau"], ["value", "Frau Dr."], ["value", "Herr Dr."], ["value", "Dr."], ["value", " "], ["appearance", "fill", "required", "", 1, "full-width"], ["matInput", "", "placeholder", "First name", "name", "fname", "formControlName", "firstname"], ["matInput", "", "placeholder", "Last Name", "name", "lname", "formControlName", "lastname"], ["matInput", "", "type", "string", "formControlName", "password", "required", ""], ["matInput", "", "type", "email", "placeholder", "Email", "formControlName", "email"], ["matSuffix", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between"], ["fxFlex", "20"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], ["fxLayout", "column", "fxLayoutGap", "10px", "fxShow.lt-md", "false"], ["href", "./assets/docs/Upload_Dateien.html"], [3, "ngModel", "ngModelChange"], ["value", "dataupload"], ["value", "geodataupload", 4, "ngIf"], ["fxLayout", "column", 4, "ngIf"], ["class", "add-margin", "fxLayoutAlign", "space-between", 4, "ngIf"], ["value", "geodataupload"], ["fxLayout", "column"], ["fxFlex.lt-md", "100", "fxFlex", "50", "fxLayout", "column", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "10px", 4, "ngIf"], ["color", "primary"], ["fxFlex.lt-md", "100", "fxFlex", "50", "fxLayout", "column"], ["appearance", "outline", 4, "ngIf"], ["type", "file", "accept", ".geojson", 2, "display", "none", 3, "change"], ["dataInput", ""], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["appearance", "outline"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["fxLayout", "column", "fxLayoutGap", "10px"], ["fxFlex.lt-md", "100", "fxFlex", "50", 4, "ngIf"], ["fxFlex.lt-md", "100", "fxFlex", "50"], ["type", "file", "accept", ".csv", 2, "display", "none", 3, "change"], ["class", "smalltab", "fxflex", "100", 4, "ngIf"], ["matSubheader", ""], ["color", "primary", "mat-list-icon", ""], [1, "primarycolor"], ["fxflex", "100", 1, "smalltab"], ["fxLayout", "row wrap", "fxLayoutGap", "10px", 1, "tabheader"], ["fxFlex", "15"], ["fxFlex", ""], ["class", "tabvalues primarycolor", "fxLayout", "row wrap", "fxLayoutGap", "10px", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutGap", "10px", 1, "tabvalues", "primarycolor"], ["color", "primary", 3, "selected", "change", "click"], ["fxFlex", "100", 4, "ngIf"], [3, "value", "valueChange", "selectionChange"], ["multiple", "", 3, "value", "valueChange", "selectionChange"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "rows", "10", "cols", "40", 2, "color", "black", 3, "ngModel", "ngModelChange"], ["style", "color:crimson;", 4, "ngIf"], [2, "color", "crimson"], ["fxLayoutAlign", "space-between", 1, "add-margin"], [3, "diameter", 4, "ngIf"], [3, "diameter"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, AdminComponent_div_3_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, AdminComponent_div_4_Template, 15, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, AdminComponent_div_5_Template, 84, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, AdminComponent_div_6_Template, 25, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.adduser && !ctx.adddata);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.adduser && !ctx.adddata);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.adduser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.adddata);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatLine, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultShowHideDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListIconCssMatStyler, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChip, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_17__.MatRadioButton, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListSubheaderCssMatStyler, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatSpinner], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: [".tabheader[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 1.2rem;\n  border-bottom: 1px;\n  border-color: darkgray;\n}\n\n.smalltab[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 0.9rem;\n  background-color: white;\n  padding: 1.2em;\n  border-radius: 15px;\n}\n\n.tabvalues[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.smallchips[_ngcontent-%COMP%]   .mat-chip[_ngcontent-%COMP%] {\n  font-size: 9px;\n  margin-top: 8px;\n  margin-right: 2px;\n  margin-bottom: 4px;\n  margin-left: 8px;\n}\n\n.smallchips[_ngcontent-%COMP%]   .mat-standard-chip[_ngcontent-%COMP%] {\n  min-height: 18px;\n}\n\n.listbox[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.01);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFFRSxXQUFBO0FBRkY7O0FBTUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhSOztBQUtJO0VBQ0ksZ0JBQUE7QUFIUjs7QUFPQztFQUNJLDJDQUFBO0FBSkwiLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50YWJoZWFkZXIge1xuXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweDtcbiAgICBib3JkZXItY29sb3I6IGRhcmtncmF5O1xufVxuXG4uc21hbGx0YWIge1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgbGluZS1oZWlnaHQ6IC45cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzogMS4yZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnRhYnZhbHVlcyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgXG59XG50ZXh0YXJlYVxue1xuICB3aWR0aDoxMDAlO1xufVxuXG4uc21hbGxjaGlwcyB7XG4gICAgLm1hdC1jaGlwIHtcbiAgICAgICAgZm9udC1zaXplOiA5cHg7ICAgIFxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7IFxuICAgIH1cbiAgICAubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgICAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICAgIH1cbiB9XG4gXG4gLmxpc3Rib3gge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpOyAgICAgICAgICAgICAgIFxuIH0iXX0= */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);












function LoginComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 9)(1, "div")(2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function LoginComponent_div_1_div_13_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Abbrechen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div")(5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx_r2.form.valid);
} }
function LoginComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " ... in Bearbeitung ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function LoginComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div")(1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Falscher Benutzername/Falsches Kennwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} }
function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3)(1, "mat-card")(2, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function LoginComponent_div_1_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r7.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-form-field", 5)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](8, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "mat-form-field", 5)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "Kennwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, LoginComponent_div_1_div_13_Template, 7, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, LoginComponent_div_1_div_14_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, LoginComponent_div_1_div_15_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r0.login_pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.login_pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.loginerror);
} }
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " You're in! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function LoginComponent_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Ausloggen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
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
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
LoginComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 2, consts: [["fxLayout", "column", "fxLayoutGap", "1rem", 1, "container"], ["fxFlex", "100", "style", "max-width: 500px;", 4, "ngIf"], [4, "ngIf"], ["fxFlex", "100", 2, "max-width", "500px"], [3, "formGroup", "ngSubmit"], ["appearance", "fill", 1, "full-width"], ["matInput", "", "type", "email", "placeholder", "Email", "name", "email", "formControlName", "username", "autocomplete", "false", "required", ""], ["matInput", "", "type", "password", "name", "current-password", "formControlName", "password", "required", "", "autocomplete", "false"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [2, "color", "crimson"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, LoginComponent_div_1_Template, 16, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, LoginComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.loggedin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.loggedin);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton], styles: ["input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, textarea[_ngcontent-%COMP%]:-webkit-autofill, textarea[_ngcontent-%COMP%]:-webkit-autofill:hover, textarea[_ngcontent-%COMP%]:-webkit-autofill:focus, select[_ngcontent-%COMP%]:-webkit-autofill, select[_ngcontent-%COMP%]:-webkit-autofill:hover, select[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  border: 0px solid white;\n  -webkit-text-fill-color: #ffffff;\n  -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFBO0FBQ0E7Ozs7Ozs7OztFQVNFLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5REFBQTtFQUNBLHlEQUFBO0VBQUEsaURBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENoYW5nZSBBdXRvY29tcGxldGUgc3R5bGVzIGluIENocm9tZSovXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlciwgXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxudGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbCxcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGwsXG5zZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgYm9yZGVyOiAwcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogI2ZmZmZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCByZ2JhKDAsIDAsIDAsIDApIGluc2V0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xufSJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_csvexport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/csvexport.service */ 9873);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/infobox/box/box.component */ 6264);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/plotly/plot/plot.component */ 6571);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _components_table_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/table/table/table.component */ 3101);


















function PrivateComponent_div_9_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Die maximale L\u00E4nge des Analysezeitraums betr\u00E4gt 64 Tage. Ihre Anfrage kann nicht ausgef\u00FChrt werden. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function PrivateComponent_div_9_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, " Bitte beachten Sie, aufgrund der gro\u00DFen Zahl betroffener Datens\u00E4tze kann es zu einer verz\u00F6gerten Auswertung kommen. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function PrivateComponent_div_9_mat_chip_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrivateComponent_div_9_mat_chip_19_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r17); const item_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); return ctx_r16.updatequery("levelid", item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("selected", ctx_r4.settings["levelid"] == item_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", item_r15, " ");
} }
function PrivateComponent_div_9_mat_chip_25_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrivateComponent_div_9_mat_chip_25_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r20); const item_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); return ctx_r19.updatequery("SmED_Level", item_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("selected", ctx_r5.SmED_Level == item_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", item_r18, " ");
} }
function PrivateComponent_div_9_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "Hinweis Assessments mit SmED-Patient sind ab dem 6.12.21 enthalten. Sie k\u00F6nnen aktuell noch nicht KVen zugeordnet werden. Bitte w\u00E4hlen Sie \"Gesamt\" als Region aus.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function PrivateComponent_div_9_mat_chip_31_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrivateComponent_div_9_mat_chip_31_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r23); const item_r21 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); return ctx_r22.updatequery("SmED_Modul", item_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("selected", ctx_r7.SmED_Modul == item_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", item_r21, " ");
} }
function PrivateComponent_div_9_mat_chip_37_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrivateComponent_div_9_mat_chip_37_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r26); const item_r24 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); return ctx_r25.updatequery("outcome", item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("selected", ctx_r8.settings["outcome"] == item_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", item_r24, " ");
} }
function PrivateComponent_div_9_div_38_mat_chip_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrivateComponent_div_9_div_38_mat_chip_7_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r30); const item_r28 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r29.updatequery("diffmerkmale", item_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("selected", ctx_r27.settings["diffmerkmale"].includes(item_r28));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", item_r28, " ");
} }
function PrivateComponent_div_9_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "Differenzierungsmerkmale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](4, "(max. 2 Merkmale m\u00F6glich)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "p")(6, "mat-chip-list", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](7, PrivateComponent_div_9_div_38_mat_chip_7_Template, 2, 2, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r9.diffmerkmale);
} }
function PrivateComponent_div_9_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function PrivateComponent_div_9_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2, "Keine Ergebnisse zur Anzeige");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
} }
function PrivateComponent_div_9_div_41_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "app-box", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", ctx_r31.tsqueryresult[0]["DAUERsmed"])("numberformat", "1.0-0")("maincolor", ctx_r31.colorsscheme[2].concat("80"))("description", "Mittlere Dauer SmED");
} }
function PrivateComponent_div_9_div_41_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "app-box", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", ctx_r32.tsqueryresult[0]["DAUERdispo"])("numberformat", "1.0-0")("maincolor", ctx_r32.colorsscheme[2].concat("80"))("description", "Mittlere Dauer Disposition");
} }
function PrivateComponent_div_9_div_41_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "app-box", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", ctx_r33.tsqueryresult[0]["Anzahl_Fragen"])("numberformat", "1.0-0")("maincolor", ctx_r33.colorsscheme[1].concat("80"))("description", "Mittlere Anzahl Fragen SmED");
} }
function PrivateComponent_div_9_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](2, "app-box", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](3, PrivateComponent_div_9_div_41_div_3_Template, 2, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, PrivateComponent_div_9_div_41_div_4_Template, 2, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](5, PrivateComponent_div_9_div_41_div_5_Template, 2, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("value", ctx_r12.tsqueryresult[0]["count"])("numberformat", "1.0-0")("maincolor", ctx_r12.colorsscheme[4].concat("80"))("description", "Assessments in ".concat(ctx_r12.settings["levelid"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r12.tsqueryresult[0]["DAUERsmed"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r12.tsqueryresult[0]["DAUERdispo"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r12.tsqueryresult[0]["Anzahl_Fragen"]);
} }
function PrivateComponent_div_9_div_42_div_1_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
const _c0 = function () { return ["count"]; };
function PrivateComponent_div_9_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 25)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "Anzahl Assessments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "app-plot", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("dataChange", function PrivateComponent_div_9_div_42_div_1_Template_app_plot_dataChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r38.tsqueryresult = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div")(6, "mat-expansion-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("opened", function PrivateComponent_div_9_div_42_div_1_Template_mat_expansion_panel_opened_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r40.panelOpenState = true; })("closed", function PrivateComponent_div_9_div_42_div_1_Template_mat_expansion_panel_closed_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r41.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](8, PrivateComponent_div_9_div_42_div_1_mat_icon_8_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "mat-panel-description")(10, "div", 28)(11, "p")(12, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrivateComponent_div_9_div_42_div_1_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r42.exportascsv("daten.csv", ctx_r42.tsqueryresult); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](14, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](19, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("data", ctx_r34.tsqueryresult)("xvalue", ctx_r34.settings["diffmerkmale"][0])("fontcolor", "white")("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r34.panelOpenState);
} }
function PrivateComponent_div_9_div_42_div_2_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
const _c1 = function () { return ["#d0f321"]; };
const _c2 = function () { return ["Anteil"]; };
function PrivateComponent_div_9_div_42_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 25)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "Anteil Assessments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "app-plot", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("dataChange", function PrivateComponent_div_9_div_42_div_2_Template_app_plot_dataChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r44.tsqueryresult = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div")(6, "mat-expansion-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("opened", function PrivateComponent_div_9_div_42_div_2_Template_mat_expansion_panel_opened_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r46.panelOpenState = true; })("closed", function PrivateComponent_div_9_div_42_div_2_Template_mat_expansion_panel_closed_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r47.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](8, PrivateComponent_div_9_div_42_div_2_mat_icon_8_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "mat-panel-description")(10, "div", 28)(11, "p")(12, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrivateComponent_div_9_div_42_div_2_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r45); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r48.exportascsv("daten.csv", ctx_r48.tsqueryresult); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](14, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](19, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("data", ctx_r35.tsqueryresult)("xvalue", ctx_r35.settings["diffmerkmale"][0])("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](7, _c1))("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](8, _c2))("percent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r35.panelOpenState);
} }
const _c3 = function () { return ["orange"]; };
const _c4 = function (a0) { return [a0]; };
function PrivateComponent_div_9_div_42_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "app-plot", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("dataChange", function PrivateComponent_div_9_div_42_div_3_ng_container_4_Template_app_plot_dataChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](4); return ctx_r52.tsqueryresult = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("data", ctx_r49.tsqueryresult)("xvalue", ctx_r49.settings["diffmerkmale"][0])("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](5, _c3))("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](6, _c4, ctx_r49.tsquery["outcome"]));
} }
function PrivateComponent_div_9_div_42_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "app-table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("dataChange", function PrivateComponent_div_9_div_42_div_3_ng_container_5_Template_app_table_dataChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](4); return ctx_r54.tsqueryresult = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("data", ctx_r50.tsqueryresult)("outcomes_rate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](3, _c2))("columns", ctx_r50.restablecols);
} }
function PrivateComponent_div_9_div_42_div_3_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function PrivateComponent_div_9_div_42_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 32)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, PrivateComponent_div_9_div_42_div_3_ng_container_4_Template, 2, 8, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](5, PrivateComponent_div_9_div_42_div_3_ng_container_5_Template, 2, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "div")(7, "mat-expansion-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("opened", function PrivateComponent_div_9_div_42_div_3_Template_mat_expansion_panel_opened_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r56.panelOpenState = true; })("closed", function PrivateComponent_div_9_div_42_div_3_Template_mat_expansion_panel_closed_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r58.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](9, PrivateComponent_div_9_div_42_div_3_mat_icon_9_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "mat-panel-description")(11, "div", 28)(12, "p")(13, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrivateComponent_div_9_div_42_div_3_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r57); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r59.exportascsv("daten.csv", ctx_r59.tsqueryresult); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](16, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](18, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](20, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r36.settings["outcome"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r36.settings["diffmerkmale"].includes("Hauptbeschwerde") && !ctx_r36.settings["diffmerkmale"].includes("Beschwerde"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r36.settings["diffmerkmale"].includes("Hauptbeschwerde") || ctx_r36.settings["diffmerkmale"].includes("Beschwerde"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r36.panelOpenState);
} }
function PrivateComponent_div_9_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](1, PrivateComponent_div_9_div_42_div_1_Template, 20, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](2, PrivateComponent_div_9_div_42_div_2_Template, 20, 9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](3, PrivateComponent_div_9_div_42_div_3_Template, 21, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r13.tsqueryresult);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r13.tsqueryresult);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r13.tsqueryresult.length > 0 && ctx_r13.tsquery["outcome"] || ctx_r13.settings["diffmerkmale"].includes("Hauptbeschwerde") || ctx_r13.settings["diffmerkmale"].includes("Beschwerde"));
} }
function PrivateComponent_div_9_div_43_div_1_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function PrivateComponent_div_9_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 25)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "Anzahl Assessments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "app-plot", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("dataChange", function PrivateComponent_div_9_div_43_div_1_Template_app_plot_dataChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r64.tsqueryresult = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div")(6, "mat-expansion-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("opened", function PrivateComponent_div_9_div_43_div_1_Template_mat_expansion_panel_opened_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r65); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r66.panelOpenState = true; })("closed", function PrivateComponent_div_9_div_43_div_1_Template_mat_expansion_panel_closed_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r65); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r67.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](8, PrivateComponent_div_9_div_43_div_1_mat_icon_8_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "mat-panel-description")(10, "div", 28)(11, "p")(12, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrivateComponent_div_9_div_43_div_1_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r65); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r68.exportascsv("daten.csv", ctx_r68.tsqueryresult); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](14, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](19, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("data", ctx_r60.tsqueryresult)("xvalue", ctx_r60.settings["diffmerkmale"][0])("fontcolor", "white")("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](6, _c0))("colorby", ctx_r60.settings["diffmerkmale"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r60.panelOpenState);
} }
function PrivateComponent_div_9_div_43_div_2_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function PrivateComponent_div_9_div_43_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 25)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "Anteil Assessments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "app-plot", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("dataChange", function PrivateComponent_div_9_div_43_div_2_Template_app_plot_dataChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r70.tsqueryresult = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div")(6, "mat-expansion-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("opened", function PrivateComponent_div_9_div_43_div_2_Template_mat_expansion_panel_opened_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r72.panelOpenState = true; })("closed", function PrivateComponent_div_9_div_43_div_2_Template_mat_expansion_panel_closed_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r71); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r73.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](8, PrivateComponent_div_9_div_43_div_2_mat_icon_8_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "mat-panel-description")(10, "div", 28)(11, "p")(12, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrivateComponent_div_9_div_43_div_2_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r71); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r74.exportascsv("daten.csv", ctx_r74.tsqueryresult); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](14, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](19, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("data", ctx_r61.tsqueryresult)("xvalue", ctx_r61.settings["diffmerkmale"][0])("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](8, _c1))("colorby", ctx_r61.settings["diffmerkmale"][1])("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](9, _c2))("percent", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r61.panelOpenState);
} }
function PrivateComponent_div_9_div_43_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "app-plot", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("dataChange", function PrivateComponent_div_9_div_43_div_3_ng_container_4_Template_app_plot_dataChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](4); return ctx_r78.tsqueryresult = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("data", ctx_r75.tsqueryresult)("xvalue", ctx_r75.settings["diffmerkmale"][0])("colorby", ctx_r75.settings["diffmerkmale"][1])("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](6, _c3))("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](7, _c4, ctx_r75.tsquery["outcome"]));
} }
function PrivateComponent_div_9_div_43_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "app-table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("dataChange", function PrivateComponent_div_9_div_43_div_3_ng_container_5_Template_app_table_dataChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](4); return ctx_r80.tsqueryresult = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("data", ctx_r76.tsqueryresult)("outcomes_rate", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](3, _c2))("columns", ctx_r76.restablecols);
} }
function PrivateComponent_div_9_div_43_div_3_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
function PrivateComponent_div_9_div_43_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 32)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, PrivateComponent_div_9_div_43_div_3_ng_container_4_Template, 2, 9, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](5, PrivateComponent_div_9_div_43_div_3_ng_container_5_Template, 2, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "div")(7, "mat-expansion-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("opened", function PrivateComponent_div_9_div_43_div_3_Template_mat_expansion_panel_opened_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r82.panelOpenState = true; })("closed", function PrivateComponent_div_9_div_43_div_3_Template_mat_expansion_panel_closed_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r84.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](9, PrivateComponent_div_9_div_43_div_3_mat_icon_9_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "mat-panel-description")(11, "div", 28)(12, "p")(13, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function PrivateComponent_div_9_div_43_div_3_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r83); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3); return ctx_r85.exportascsv("daten.csv", ctx_r85.tsqueryresult); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](16, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](18, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](20, "Es liegt aktuell keine Indikatorenbeschreibung vor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx_r62.settings["outcome"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r62.settings["diffmerkmale"].includes("Hauptbeschwerde") && !ctx_r62.settings["diffmerkmale"].includes("Beschwerde"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r62.settings["diffmerkmale"].includes("Hauptbeschwerde") || ctx_r62.settings["diffmerkmale"].includes("Beschwerde"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r62.panelOpenState);
} }
function PrivateComponent_div_9_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](1, PrivateComponent_div_9_div_43_div_1_Template, 20, 7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](2, PrivateComponent_div_9_div_43_div_2_Template, 20, 10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](3, PrivateComponent_div_9_div_43_div_3_Template, 21, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r14.tsqueryresult);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r14.tsqueryresult);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r14.tsqueryresult.length > 0 && (ctx_r14.tsquery["outcome"] || (ctx_r14.settings["diffmerkmale"].includes("Hauptbeschwerde") || ctx_r14.settings["diffmerkmale"].includes("Beschwerde"))));
} }
const _c5 = function () { return ["Alle", "Telefon", "Tresen", "Patient"]; };
const _c6 = function () { return ["Alle", "SmED-Triage", "SmED-COVID-kurz", "SmED-COVID-integriert", "SmED-Kontakt+"]; };
function PrivateComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div")(1, "div")(2, "p")(3, "mat-form-field", 5)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](5, "Analysezeitraum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "mat-date-range-input", 6)(7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("dateChange", function PrivateComponent_div_9_Template_input_dateChange_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r86.updatequery("__change", true); })("ngModelChange", function PrivateComponent_div_9_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return (ctx_r88.settings["start"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("dateChange", function PrivateComponent_div_9_Template_input_dateChange_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r89.updatequery("__change", true); })("ngModelChange", function PrivateComponent_div_9_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r87); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return (ctx_r90.settings["end"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](9, "mat-datepicker-toggle", 9)(10, "mat-date-range-picker", null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](12, PrivateComponent_div_9_p_12_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](13, PrivateComponent_div_9_p_13_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "div")(15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](16, "Region");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "p")(18, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](19, PrivateComponent_div_9_mat_chip_19_Template, 2, 2, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](20, "div")(21, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](22, "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](23, "p")(24, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](25, PrivateComponent_div_9_mat_chip_25_Template, 2, 2, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](26, PrivateComponent_div_9_p_26_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](27, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](28, "Modul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](29, "p")(30, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](31, PrivateComponent_div_9_mat_chip_31_Template, 2, 2, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](32, "div")(33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](34, "Outcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](35, "p")(36, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](37, PrivateComponent_div_9_mat_chip_37_Template, 2, 2, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](38, PrivateComponent_div_9_div_38_Template, 8, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](39, PrivateComponent_div_9_div_39_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](40, PrivateComponent_div_9_div_40_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](41, PrivateComponent_div_9_div_41_Template, 6, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](42, PrivateComponent_div_9_div_42_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](43, PrivateComponent_div_9_div_43_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????reference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("rangePicker", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngModel", ctx_r0.settings["start"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngModel", ctx_r0.settings["end"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("for", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.duration > 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.duration > 7 && ctx_r0.duration <= 64 && ctx_r0.settings["levelid"] == "Gesamt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r0.levelvalues);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](17, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.SmED_Level == "Patient");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](18, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx_r0.outcomes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.settings["outcome"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.tsqueryresult.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.settings["diffmerkmale"].length == 0 && ctx_r0.tsqueryresult.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.settings["diffmerkmale"].length == 1 && ctx_r0.tsqueryresult.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r0.settings["diffmerkmale"].length == 2 && ctx_r0.tsqueryresult.length > 0);
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
            'Baden-W??rttemberg',
            'Bayern',
            'Berlin',
            'Brandenburg',
            'Bremen',
            'Hamburg',
            'Hessen',
            'Mecklenburg-Vorpommern',
            'Niedersachsen',
            'Nordrhein-Westfalen',
            'Rheinland-Pfalz',
            'Saarland',
            'Sachsen',
            'Sachsen-Anhalt',
            'Schleswig-Holstein',
            'Th??ringen'
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
            //'H??ufigste Beschwerden',
            //'H??ufigste Hauptbeschwerden'
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
    }
    ngOnInit() {
        this.colorsscheme = this.api.makescale(5);
        //console.log('colors',this.colorsscheme);
        this.settings = { 'analyzeall': true, 'level': 'KV', 'levelid': 'Gesamt', 'diffmerkmale': [] };
        //testesttings
        this.settings = { "analyzeall": true, "level": "KV", "levelid": "Gesamt", "diffmerkmale": [],
            "start": new Date("2022-01-02"),
            "end": new Date("2022-01-08"), "outcome": "Anzahl Assessments" };
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
        let tzoffset = (new Date()).getTimezoneOffset() * 60000;
        let start = "";
        if (this.settings['start']) {
            start = (new Date(this.settings['start'] - tzoffset)).toISOString();
        }
        ;
        let end = "";
        if (this.settings['end']) {
            end = (new Date(this.settings['end'] - tzoffset)).toISOString();
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
        if ('H??ufigste Beschwerden' == this.settings['outcome']) {
            this.tsquery['outcome'] = "Beschwerden_gesamt";
        }
        ;
        if ('H??ufigste Hauptbeschwerden' == this.settings['outcome']) {
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
        this.api.postTypeRequest('get_data/', { "client_id": this.api.REST_API_SERVER_CLIENTID,
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
PrivateComponent.??fac = function PrivateComponent_Factory(t) { return new (t || PrivateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_services_csvexport_service__WEBPACK_IMPORTED_MODULE_2__.CsvexportService)); };
PrivateComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: PrivateComponent, selectors: [["app-private"]], decls: 10, vars: 1, consts: [["fxLayout", "column", "fxLayoutGap", "30px", 1, "container"], ["ngClass.lt-sm", "mobileheading"], [1, "lightgreycolor"], [2, "color", "white"], [4, "ngIf"], ["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Beginn", 3, "ngModel", "dateChange", "ngModelChange"], ["matEndDate", "", "placeholder", "Ende", 3, "ngModel", "dateChange", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["class", "accentcolor", 4, "ngIf"], ["class", "mat-caption greycolor", 4, "ngIf"], ["color", "primary", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "mat-caption lightgreycolor", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngIf"], [1, "accentcolor"], [1, "mat-caption", "greycolor"], ["color", "primary", 3, "selected", "click"], [1, "mat-caption", "lightgreycolor"], ["multiple", ""], [3, "value", "numberformat", "maincolor", "description"], ["fxLayout", "row wrap"], ["fxFlex", "50", "fxFlex.lt-md", "100", 4, "ngIf"], ["fxFlex", "100", "fxFlex.lt-md", "100", 4, "ngIf"], ["fxFlex", "50", "fxFlex.lt-md", "100"], ["plottype", "bar", 3, "data", "xvalue", "fontcolor", "outcomes", "dataChange"], [1, "mat-elevation-z0", 3, "opened", "closed"], [1, "mat-caption"], [3, "click"], ["inline", "true"], ["plottype", "bar", 3, "data", "xvalue", "fontcolor", "colorscheme", "outcomes", "percent", "dataChange"], ["fxFlex", "100", "fxFlex.lt-md", "100"], ["plottype", "bar", 3, "data", "xvalue", "fontcolor", "colorscheme", "outcomes", "dataChange"], [3, "data", "outcomes_rate", "columns", "dataChange"], ["plottype", "bar", 3, "data", "xvalue", "fontcolor", "outcomes", "colorby", "dataChange"], ["plottype", "bar", 3, "data", "xvalue", "fontcolor", "colorscheme", "colorby", "outcomes", "percent", "dataChange"], ["plottype", "bar", 3, "data", "xvalue", "colorby", "fontcolor", "colorscheme", "outcomes", "dataChange"]], template: function PrivateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 0)(1, "div")(2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3, "Tool f\u00FCr erweiterte Analysen");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](5, "In diesem Bereich nur f\u00FCr KV-Mitarbeiter ist ein Zugriff auf faktisch anonymisierte Individualdatens\u00E4tze m\u00F6glich. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](7, "Bitte beachten Sie, dass die unstandardisierten Abfragen in diesem Bereich ggf. etwas l\u00E4nger dauern.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](8, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](9, PrivateComponent_div_9_Template, 44, 19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", true);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatStartDate, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangePicker, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatSpinner, _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_3__.BoxComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_4__.PlotComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelHeader, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelDescription, _components_table_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);











function ProfileComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Dashboards:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 6)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r2.userdetails.dashboards);
} }
function ProfileComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Dashboard Admin:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 6)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r3.userdetails.dashboard_admin);
} }
function ProfileComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Fehlerhafte Loginversuche seit der letzten Anmeldung:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 6)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r4.userdetails.wrong_logins);
} }
function ProfileComponent_div_0_div_32_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div")(1, "mat-form-field", 17)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Aktuelles Passwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function ProfileComponent_div_0_div_32_div_4_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3); return ctx_r12.pwdrequest.oldpwd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-form-field", 17)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Neues Passwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function ProfileComponent_div_0_div_32_div_4_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3); return ctx_r14.pwdrequest.newpwd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Mindestl\u00E4nge 10 Zeichen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r7.pwdchange.progress)("ngModel", ctx_r7.pwdrequest.oldpwd);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r7.pwdchange.progress)("ngModel", ctx_r7.pwdrequest.newpwd);
} }
function ProfileComponent_div_0_div_32_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\u00E4ndere das Passwort...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProfileComponent_div_0_div_32_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p")(1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Fehler: Bitte pr\u00FCfen Sie das aktuelle Passwort!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProfileComponent_div_0_div_32_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p")(1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\u00C4nderung erfolgreich, Sie bleiben eingeloggt.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ProfileComponent_div_0_div_32_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 21)(1, "div")(2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProfileComponent_div_0_div_32_div_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3); return ctx_r15.action = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div")(5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProfileComponent_div_0_div_32_div_9_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3); return ctx_r17.chpwd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "\u00C4ndern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r11.pwdrequest.newpwd.length < 10);
} }
function ProfileComponent_div_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 14)(1, "div")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Passwort \u00E4ndern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, ProfileComponent_div_0_div_32_div_4_Template, 11, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, ProfileComponent_div_0_div_32_mat_hint_6_Template, 2, 0, "mat-hint", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, ProfileComponent_div_0_div_32_p_7_Template, 4, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, ProfileComponent_div_0_div_32_p_8_Template, 4, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, ProfileComponent_div_0_div_32_div_9_Template, 7, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r5.pwdchange.ok);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r5.pwdchange.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r5.pwdchange.done && !ctx_r5.pwdchange.ok);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r5.pwdchange.done && ctx_r5.pwdchange.ok);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r5.pwdchange.ok);
} }
function ProfileComponent_div_0_div_33_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div")(1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Es ist ein Fehler aufgetreten, bitte pr\u00FCfen Sie Ihr Passwort.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} }
function ProfileComponent_div_0_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 23)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Account l\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div")(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Warnung: Diese Aktion kann nicht r\u00FCckg\u00E4ngig gemacht werden");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Bitte geben Sie Ihr aktuelles Passwort zur Sicherheit ein:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "mat-form-field", 17)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Aktuelles Passwort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function ProfileComponent_div_0_div_33_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r19.deleterequest.pwd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 21)(13, "div")(14, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProfileComponent_div_0_div_33_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r21.action = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div")(17, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProfileComponent_div_0_div_33_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r22.deleteaccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "Jetzt l\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](19, ProfileComponent_div_0_div_33_div_19_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx_r6.deleterequest.pwd);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx_r6.deleterequest.pwd.length < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r6.deleteresult == "error");
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 2)(1, "div", 3)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Ihre Nutzerdaten");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 6)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 4)(11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "E-Mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 6)(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 4)(17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "Rolle:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "div", 6)(20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](22, ProfileComponent_div_0_div_22_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](23, ProfileComponent_div_0_div_23_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](24, ProfileComponent_div_0_div_24_Template, 6, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "div", 8)(26, "div", 9)(27, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProfileComponent_div_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r23.action = "chpwd"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](28, "Passwort \u00E4ndern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 9)(30, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ProfileComponent_div_0_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r25.action = "deleteaccount"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "Account l\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](32, ProfileComponent_div_0_div_32_Template, 10, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](33, ProfileComponent_div_0_div_33_Template, 20, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.userdetails.anrede + " " + ctx_r0.userdetails.firstname + " " + ctx_r0.userdetails.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.userdetails.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r0.userdetails.roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.userdetails.dashboards.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.userdetails.dashboard_admin.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.userdetails.wrong_logins > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.action == "chpwd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.action == "deleteaccount");
} }
function ProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 27)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "Ihr Account wurde gel\u00F6scht");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
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
ProfileComponent.??fac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ProfileComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 2, consts: [["class", "container", "fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-around", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-around", 1, "container"], [1, "small"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem"], ["fxFlex", "20", "fxFlex.lt-md", "100"], ["fxFlex", ""], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-around", "fxLayoutGap", "1rem", 1, "add-margin", 2, "max-width", "400px"], [1, "add-margin"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["fxLayout", "column", "style", "max-width: 450px;", 4, "ngIf"], ["style", "max-width: 450px;", 4, "ngIf"], ["fxLayout", "column", 2, "max-width", "450px"], [4, "ngIf"], ["class", "add-margin", "fxLayout", "row", "fxLayoutAlign", "space-between", 4, "ngIf"], ["appearance", "fill", 1, "full-width"], ["type", "password", "matInput", "", "value", "", 3, "disabled", "ngModel", "ngModelChange"], [2, "color", "red"], [2, "color", "green"], ["fxLayout", "row", "fxLayoutAlign", "space-between", 1, "add-margin"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], [2, "max-width", "450px"], ["type", "password", "matInput", "", "value", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [2, "color", "crimson"], [1, "container"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, ProfileComponent_div_0_Template, 34, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, ProfileComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !(ctx.deleteresult == "success"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.deleteresult == "success");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon], styles: [".small[_ngcontent-%COMP%] {\n  max-width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21hbGwge1xuICAgIG1heC13aWR0aDogNDUwcHg7XG59Il19 */"] });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_dbservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/dbservice.service */ 8351);
/* harmony import */ var src_app_services_csvexport_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/csvexport.service */ 9873);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_smed_aggregation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/smed-aggregation.service */ 420);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/infobox/box/box.component */ 6264);
/* harmony import */ var _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/plotly/plot/plot.component */ 6571);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 5590);


















function StartComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Angemeldet als ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r0.currentuser.anrede ? ctx_r0.currentuser.anrede + " " + ctx_r0.currentuser.lastname : "", "");
} }
function StartComponent_ng_container_6_ng_container_1_h1_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Zeit bis zum Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r5.counterstring(ctx_r5.timetogo));
} }
function StartComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Auf diesem Portal stellt das Zentralinstitut f\u00FCr die kassen\u00E4rztliche Versorgung in Deutschland (");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "strong")(4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Zi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, ") Informationen zu ambulanten Akut- und Notf\u00E4llen in Deutschland zur Verf\u00FCgung. Aktuell basieren die Auswertungen auf den SmED-Daten, die von den 116117-Leitstellen der Kassen\u00E4rztlichen Vereinigungen \u00FCbermittelt wurden. Bei ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8, "SmED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](9, " (Strukturierte medizinische Ersteinsch\u00E4tzung in Deutschland) handelt es sich um eine Ersteinsch\u00E4tzungssoftware, die den Anwender bei der Einsch\u00E4tzung der Beschwerden eines Patienten unterst\u00FCtzen kann. Durch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](11, "SmED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](12, " wird das medizinische Fachpersonal bei der systematischen Abfrage von Symptomen in Kombination mit allgemeinen und symptomspezifischen Risikofaktoren (z.B. Alter, Geschlecht, Begleitbeschwerden) sowie bei der Entscheidung, welches die passende Versorgungsm\u00F6glichkeit f\u00FCr den Anrufenden ist, unterst\u00FCtzt. Die SmED-Empfehlungen der Software stellen dabei eine Entscheidungshilfe f\u00FCr den Anwender dar. Weitere Informationen zu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](14, "SmED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, " finden Sie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "strong")(17, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18, "hier");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](19, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](21, "Zuk\u00FCnftig soll das Portal um Informationen aus weiteren Quellen (wie beispielsweise die Abrechnungsdaten) f\u00FCr ambulante Akut- und Notf\u00E4lle erg\u00E4nzt werden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](22, StartComponent_ng_container_6_ng_container_1_h1_22_Template, 4, 1, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r4.timetogo <= 0);
} }
function StartComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, StartComponent_ng_container_6_ng_container_1_Template, 23, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r1.timetogo < 0);
} }
function StartComponent_ng_container_7_ng_container_1_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate2"]("Daten f\u00FCr vollst\u00E4ndige Kalenderwochen beginnend mit der Woche vom ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](2, 2, ctx_r7.summaryinfo["Beginn"]), " bis zur Woche beginnend am ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](3, 4, ctx_r7.summaryinfo["Ende"]), ".");
} }
function StartComponent_ng_container_7_ng_container_1_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Als registrierter Nutzer steht Ihnen unser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "interner Analysebereich");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " zur Verf\u00FCgung.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Dashboard des Zentralinstituts f\u00FCr die kassen\u00E4rztliche Versorgung in Deutschland (");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "strong")(4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Zi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, ") mit aktuellen Ergebnissen aus der Strukturierten medizinischen Ersteinsch\u00E4tzung in Deutschland (");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "strong")(8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](9, "SmED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](10, ") im Rahmen von Anrufen bei der Rufnummer (");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "strong")(12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13, "116117");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](14, "). Bei jeder Ersteinsch\u00E4tzung werden die Inhalte und Empfehlungen strukturiert protokolliert (Assessments). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, StartComponent_ng_container_7_ng_container_1_span_15_Template, 4, 6, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](16, StartComponent_ng_container_7_ng_container_1_p_16_Template, 5, 0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r6.summaryinfo && ctx_r6.levelsettings["resolution"] == "weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r6.currentuser);
} }
function StartComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, StartComponent_ng_container_7_ng_container_1_Template, 17, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r2.timetogo >= 0 || ctx_r2.currentuser);
} }
function StartComponent_div_8_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "Bundesland");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_p_3_mat_chip_list_1_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_p_3_mat_chip_list_1_mat_chip_1_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r19); const item_r17 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r18.setlevel("levelvalues", item_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("selected", ctx_r16.levelsettings["levelvalues"] == item_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", item_r17.replace("KV ", ""), " ");
} }
function StartComponent_div_8_p_3_mat_chip_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, StartComponent_div_8_p_3_mat_chip_list_1_mat_chip_1_Template, 2, 2, "mat-chip", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r15.levelvalues);
} }
function StartComponent_div_8_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, StartComponent_div_8_p_3_mat_chip_list_1_Template, 2, 1, "mat-chip-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r10.currentuser);
} }
function StartComponent_div_8_mat_chip_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_mat_chip_8_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r22); const item_r20 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2); return ctx_r21.setlevel("zeitraum", item_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("selected", ctx_r11.levelsettings["zeitraum"] == item_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", item_r20, " ");
} }
function StartComponent_div_8_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Keine Daten verf\u00FCgbar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
function StartComponent_div_8_div_20_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "app-box", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("textbehind", true)("numberformat", "1.1-1")("maincolor", ctx_r35.colorsscheme[1].concat("80"))("value", ctx_r35.summaryinfo["Anzahl Fragen"]);
} }
function StartComponent_div_8_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19)(1, "mat-card")(2, "div", 15)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](4, "app-box", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](6, "app-box", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](8, "app-box", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](9, StartComponent_div_8_div_20_div_1_div_9_Template, 2, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", ctx_r23.summaryinfo["Assessments Gesamt"])("textbehind", true)("numberformat", "1.0-0")("maincolor", ctx_r23.colorsscheme[4].concat("80"))("description", "Assessments");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("textbehind", true)("numberformat", "1.1-1")("maincolor", ctx_r23.colorsscheme[3].concat("80"))("value", ctx_r23.summaryinfo["Mittlere Dauer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("textbehind", true)("numberformat", "1.1-1")("maincolor", ctx_r23.colorsscheme[2].concat("80"))("value", ctx_r23.summaryinfo["Anzahl Beschwerden"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r23.currentuser);
} }
function StartComponent_div_8_div_20_div_2_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_20_div_2_p_13_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_div_20_div_2_p_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r38.exportascsv("zeitreihe.csv", ctx_r38.stats_ts); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
const _c0 = function () { return ["Assessments pro 100 Tsd. Einw."]; };
function StartComponent_div_8_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 26)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "SmED Assessments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, "pro 100.000 Einwohner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "app-plot", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("dataChange", function StartComponent_div_8_div_20_div_2_Template_app_plot_dataChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r40.stats_ts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div")(9, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("opened", function StartComponent_div_8_div_20_div_2_Template_mat_expansion_panel_opened_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r42.panelOpenState = true; })("closed", function StartComponent_div_8_div_20_div_2_Template_mat_expansion_panel_closed_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r43.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](11, StartComponent_div_8_div_20_div_2_mat_icon_11_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](13, StartComponent_div_8_div_20_div_2_p_13_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](17, "Anzahl der SmED-Assessments pro 100.000 Einwohner, die im Rahmen von Anrufen bei der 116117 monatlich durchgef\u00FChrt wurden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("data", ctx_r24.stats_ts)("xvalue", "Datum")("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](7, _c0))("sortx", true)("fontcolor", "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r24.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r24.currentuser);
} }
function StartComponent_div_8_div_20_div_3_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_20_div_3_p_13_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_div_20_div_3_p_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r46.exportascsv("zeitreihe.csv", ctx_r46.stats_ts); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
const _c1 = function () { return ["Anteil ARE Assessments"]; };
const _c2 = function () { return ["crimson"]; };
function StartComponent_div_8_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 26)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "Aktivit\u00E4t respiratorischer Erkrankungen");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, "Abweichung von der Hintergrundaktivit\u00E4t in Prozent");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "app-plot", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("dataChange", function StartComponent_div_8_div_20_div_3_Template_app_plot_dataChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r48.stats_ts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div")(9, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("opened", function StartComponent_div_8_div_20_div_3_Template_mat_expansion_panel_opened_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r50.panelOpenState = true; })("closed", function StartComponent_div_8_div_20_div_3_Template_mat_expansion_panel_closed_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r51.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](11, StartComponent_div_8_div_20_div_3_mat_icon_11_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](13, StartComponent_div_8_div_20_div_3_p_13_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](17, "Anzahl der Assessments mit typischen Symptomen von Akuten Respiratorischen Erkrankungen (ARE) ausgewiesen als prozentuale Abweichung von ARE Hintergrundaktivit\u00E4t (erwartet werden 25% ARE-Assessments). Ber\u00FCcksichtigt wurden folgende SmED-Beschwerdebilder: Atembeschwerden, Covid 19, Erk\u00E4ltung/Grippaler Infekt, Fieber, Hals-/Rachenschmerzen, Husten, Kopfschmerzen, Ohrenschmerzen und Schluckbeschwerden (Liste ist aktuell noch in Entwicklung, \u00C4nderungen sind m\u00F6glich).");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("data", ctx_r25.stats_ts)("xvalue", "Datum")("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](8, _c1))("sortx", true)("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r25.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r25.currentuser);
} }
function StartComponent_div_8_div_20_div_4_mat_card_1_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_20_div_4_mat_card_1_p_13_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_div_20_div_4_mat_card_1_p_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](5); return ctx_r55.exportascsv("symptome.csv", ctx_r55.symptoms_list_export); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
const _c3 = function () { return ["Anteil"]; };
function StartComponent_div_8_div_20_div_4_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-card")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "H\u00E4ufigste Beschwerden");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Anteil Assessment in Prozent");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "app-plot", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("dataChange", function StartComponent_div_8_div_20_div_4_mat_card_1_Template_app_plot_dataChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r57.symptoms_list = $event; })("clicked", function StartComponent_div_8_div_20_div_4_mat_card_1_Template_app_plot_clicked_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r59.handleklick("Beschwerden", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div")(8, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("opened", function StartComponent_div_8_div_20_div_4_mat_card_1_Template_mat_expansion_panel_opened_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r60.panelOpenState = true; })("closed", function StartComponent_div_8_div_20_div_4_mat_card_1_Template_mat_expansion_panel_closed_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r61.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](10, StartComponent_div_8_div_20_div_4_mat_card_1_mat_icon_10_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "mat-panel-description")(12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](13, StartComponent_div_8_div_20_div_4_mat_card_1_p_13_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](17, "Prozentuelle H\u00E4ufigkeit der im Rahmen der SmED-Assessments dokumentierten Beschwerden, sortiert nach der H\u00E4ufigkeit, anteilig an allen SmED-Assessments, in denen eine Angabe zur Beschwerde vorliegt. Insgesamt sind \u00FCber 100 verschiedene Behandlungsanl\u00E4sse \u00FCber SmED verzeichnet worden. Bisher nicht enthalten sind Beschwerden, die im Rahmen der Vortriage erfasst wurden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("data", ctx_r52.symptoms_list)("xvalue", "Sympt")("percent", true)("fontcolor", "white")("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](8, _c3))("sort", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r52.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r52.currentuser);
} }
function StartComponent_div_8_div_20_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, StartComponent_div_8_div_20_div_4_mat_card_1_Template, 18, 9, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r26.symptoms_list.length > 0);
} }
function StartComponent_div_8_div_20_div_5_ng_container_1_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_20_div_5_ng_container_1_p_16_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_div_20_div_5_ng_container_1_p_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](5); return ctx_r65.exportascsv("zeiten.csv", ctx_r65.utiltimes); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
function StartComponent_div_8_div_20_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "Aufkommen nach Tag und Uhrzeit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, "Anteil Assessment in Prozent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8, "(gr\u00FCn:hoch, blau:niedrig)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "app-plot", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("dataChange", function StartComponent_div_8_div_20_div_5_ng_container_1_Template_app_plot_dataChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r67.utiltimes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "div")(11, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("opened", function StartComponent_div_8_div_20_div_5_ng_container_1_Template_mat_expansion_panel_opened_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r69.panelOpenState = true; })("closed", function StartComponent_div_8_div_20_div_5_ng_container_1_Template_mat_expansion_panel_closed_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r68); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r70.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](13, StartComponent_div_8_div_20_div_5_ng_container_1_mat_icon_13_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "mat-panel-description")(15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](16, StartComponent_div_8_div_20_div_5_ng_container_1_p_16_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](20, "Prozentuale Verteilung der SmED-Assessments nach Wochentag und Uhrzeit (Drei-Stunden-Intervalle).");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("data", ctx_r62.utiltimes)("fontcolor", "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r62.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r62.currentuser);
} }
function StartComponent_div_8_div_20_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, StartComponent_div_8_div_20_div_5_ng_container_1_Template, 21, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r27.utiltimes["z"].length > 0);
} }
function StartComponent_div_8_div_20_div_6_mat_card_1_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_20_div_6_mat_card_1_p_13_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_div_20_div_6_mat_card_1_p_13_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](5); return ctx_r74.exportascsv("empfehlung.csv", ctx_r74.timetotreat); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
const _c4 = function () { return { l: 50, r: 0, b: 0, t: 0 }; };
function StartComponent_div_8_div_20_div_6_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-card")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "SmED Empfehlungen zur Dringlichkeit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Anteil Assessment in Prozent");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "app-plot", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("dataChange", function StartComponent_div_8_div_20_div_6_mat_card_1_Template_app_plot_dataChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r76.timetotreat = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div")(8, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("opened", function StartComponent_div_8_div_20_div_6_mat_card_1_Template_mat_expansion_panel_opened_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r77); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r78.panelOpenState = true; })("closed", function StartComponent_div_8_div_20_div_6_mat_card_1_Template_mat_expansion_panel_closed_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r77); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r79.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](10, StartComponent_div_8_div_20_div_6_mat_card_1_mat_icon_10_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "mat-panel-description")(12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](13, StartComponent_div_8_div_20_div_6_mat_card_1_p_13_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](17, "Prozentuale Verteilung der SmED-Assessments nach von SmED empfohlener Versorgungsdringlichkeit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("data", ctx_r71.timetotreat)("xvalue", "TTTsmed_text")("fontcolor", "white")("showlegend", false)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](8, _c3))("custommargins", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](9, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r71.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r71.currentuser);
} }
function StartComponent_div_8_div_20_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, StartComponent_div_8_div_20_div_6_mat_card_1_Template, 18, 10, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r28.timetotreat.length > 0);
} }
function StartComponent_div_8_div_20_div_7_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_20_div_7_p_14_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_div_20_div_7_p_14_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r82.exportascsv("zeitreihe.csv", ctx_r82.stats_ts); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
const _c5 = function (a0) { return [a0]; };
const _c6 = function () { return ["Mittlere Dauer (Sek.)"]; };
function StartComponent_div_8_div_20_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 26)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "Mittlere Dauer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, "Dauer in Sekunden pro Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "app-plot", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("dataChange", function StartComponent_div_8_div_20_div_7_Template_app_plot_dataChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r84.stats_ts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div")(9, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("opened", function StartComponent_div_8_div_20_div_7_Template_mat_expansion_panel_opened_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r85); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r86.panelOpenState = true; })("closed", function StartComponent_div_8_div_20_div_7_Template_mat_expansion_panel_closed_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r85); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r87.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](11, StartComponent_div_8_div_20_div_7_mat_icon_11_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "mat-panel-description")(13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](14, StartComponent_div_8_div_20_div_7_p_14_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](16, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18, "Angaben zur Dauer liegen erst seit Mai 2020 vor. In die Berechnung der Dauer flie\u00DFen nur Assessments ein, die mit dem klassischen SmED-Modul (nicht COVID-spezifische Module) erfasst wurden. Weiterhin wurden Assessments mit einer Dauer von \u00FCber 1000 Sekunden ausgeschlossen, da bei diesen Assessments davon auszugehen ist, dass diese nicht ordnungsgem\u00E4\u00DF abgeschlossen wurden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("data", ctx_r29.stats_ts)("xvalue", "Datum")("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](8, _c5, ctx_r29.colorsscheme[3]))("sortx", true)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](10, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r29.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r29.currentuser);
} }
function StartComponent_div_8_div_20_div_8_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_20_div_8_p_14_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_div_20_div_8_p_14_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r90.exportascsv("zeitreihe.csv", ctx_r90.stats_ts); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
const _c7 = function () { return ["Mittlere Anzahl Beschwerden"]; };
function StartComponent_div_8_div_20_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 26)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "Anzahl Beschwerden");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, "Anzahl unterschiedliche Beschwerdebilder pro Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "app-plot", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("dataChange", function StartComponent_div_8_div_20_div_8_Template_app_plot_dataChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r92.stats_ts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div")(9, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("opened", function StartComponent_div_8_div_20_div_8_Template_mat_expansion_panel_opened_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r94.panelOpenState = true; })("closed", function StartComponent_div_8_div_20_div_8_Template_mat_expansion_panel_closed_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r93); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r95.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](11, StartComponent_div_8_div_20_div_8_mat_icon_11_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "mat-panel-description")(13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](14, StartComponent_div_8_div_20_div_8_p_14_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](16, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18, "Die Anzahl der Beschwerden umfasst die im Rahmen des SmED-Assessments dokumentierten vorliegenden Beschwerden der Anrufenden. Bisher nicht enthalten sind Beschwerden, die im Rahmen der Vortriage erfasst wurden.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("data", ctx_r30.stats_ts)("xvalue", "Datum")("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](8, _c5, ctx_r30.colorsscheme[2]))("sortx", true)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](10, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r30.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r30.currentuser);
} }
function StartComponent_div_8_div_20_div_9_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_20_div_9_p_16_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_div_20_div_9_p_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r98.exportascsv("zeitreihe.csv", ctx_r98.stats_ts); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
const _c8 = function () { return ["Mittlere Anzahl Fragen"]; };
function StartComponent_div_8_div_20_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 26)(1, "mat-card")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "Anzahl Fragen");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, "Anzahl Fragen pro Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "app-plot", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("dataChange", function StartComponent_div_8_div_20_div_9_Template_app_plot_dataChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r100.stats_ts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "div")(11, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("opened", function StartComponent_div_8_div_20_div_9_Template_mat_expansion_panel_opened_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r101); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r102.panelOpenState = true; })("closed", function StartComponent_div_8_div_20_div_9_Template_mat_expansion_panel_closed_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r101); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3); return ctx_r103.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](13, StartComponent_div_8_div_20_div_9_mat_icon_13_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "mat-panel-description")(15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](16, StartComponent_div_8_div_20_div_9_p_16_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](20, "In die Anzahl der Fragen flie\u00DFen alle im Rahmen des SmED-Assessments dokumentierten Fragen ein, sowohl allgemeine (Alter, Geschlecht, Schwangerschaft) als auch symptomspezifische Fragen (Vorliegen, Dauer, St\u00E4rke), auch wenn diese verneint wurden. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("data", ctx_r31.stats_ts)("xvalue", "Datum")("fontcolor", "white")("colorscheme", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](8, _c5, ctx_r31.colorsscheme[1]))("sortx", true)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](10, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r31.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r31.currentuser);
} }
function StartComponent_div_8_div_20_div_10_mat_card_1_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_20_div_10_mat_card_1_p_15_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_div_20_div_10_mat_card_1_p_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](5); return ctx_r107.exportascsv("timetotreat.csv", ctx_r107.timetotreat); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
const _c9 = function () { return ["Anzahl"]; };
const _c10 = function () { return { l: 50, r: 50, b: 150, t: 0 }; };
function StartComponent_div_8_div_20_div_10_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-card")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Empfehlung Behandlungsort nach Dringlichkeit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Anzahl Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](7, "lock_open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div")(9, "app-plot", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("dataChange", function StartComponent_div_8_div_20_div_10_mat_card_1_Template_app_plot_dataChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r109.decisions_pocvsttt = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("opened", function StartComponent_div_8_div_20_div_10_mat_card_1_Template_mat_expansion_panel_opened_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r110); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r111.panelOpenState = true; })("closed", function StartComponent_div_8_div_20_div_10_mat_card_1_Template_mat_expansion_panel_closed_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r110); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r112.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](12, StartComponent_div_8_div_20_div_10_mat_card_1_mat_icon_12_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "mat-panel-description")(14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, StartComponent_div_8_div_20_div_10_mat_card_1_p_15_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](19, "Prozentuale Verteilung der SmED-Assessments nach von SmED empfohlener Versorgungsebene und Versorgungsdringlichkeit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("data", ctx_r104.decisions_pocvsttt)("xvalue", "TTTsmed_text")("fontcolor", "white")("showlegend", false)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](9, _c9))("custommargins", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](10, _c10))("colorby", "POCsmed_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r104.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r104.currentuser);
} }
function StartComponent_div_8_div_20_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, StartComponent_div_8_div_20_div_10_mat_card_1_Template, 20, 11, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r32.decisions_pocvsttt.length > 0);
} }
function StartComponent_div_8_div_20_div_11_mat_card_1_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_20_div_11_mat_card_1_p_15_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_div_20_div_11_mat_card_1_p_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](5); return ctx_r116.exportascsv("decisions_ttt.csv", ctx_r116.decisions_ttt); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
function StartComponent_div_8_div_20_div_11_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-card")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Abgleich Empfehlung vs. Entscheidung Dringlichkeit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Anzahl Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](7, "lock_open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div")(9, "app-plot", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("dataChange", function StartComponent_div_8_div_20_div_11_mat_card_1_Template_app_plot_dataChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r118.decisions_ttt = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("opened", function StartComponent_div_8_div_20_div_11_mat_card_1_Template_mat_expansion_panel_opened_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r120.panelOpenState = true; })("closed", function StartComponent_div_8_div_20_div_11_mat_card_1_Template_mat_expansion_panel_closed_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r119); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r121.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](12, StartComponent_div_8_div_20_div_11_mat_card_1_mat_icon_12_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "mat-panel-description")(14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, StartComponent_div_8_div_20_div_11_mat_card_1_p_15_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](19, "Abgleich der SmED-Empfehlung mit der Entscheidung des/der Disponent*in hinsichtlich der Versorgungsdringlichkeit. Die Entscheidung des/der Disponent*in wird in SmED bisher nur bei einem kleinen Anteil der SmED-Assessments dokumentiert. Es wird an einer \u00DCbermittlung der entsprechenden Angaben aus der Dispositionssoftware gearbeitet. Dieser Prozess ist bisher mit einigen wenigen KVen etabliert. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("data", ctx_r113.decisions_ttt)("xvalue", "TTTsmed_text")("fontcolor", "white")("showlegend", true)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](9, _c9))("custommargins", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](10, _c10))("colorby", "TTTdispo_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r113.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r113.currentuser);
} }
function StartComponent_div_8_div_20_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, StartComponent_div_8_div_20_div_11_mat_card_1_Template, 20, 11, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r33.decisions_ttt.length > 0);
} }
function StartComponent_div_8_div_20_div_12_mat_card_1_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} }
function StartComponent_div_8_div_20_div_12_mat_card_1_p_15_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "p")(1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_div_20_div_12_mat_card_1_p_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r126); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](5); return ctx_r125.exportascsv("decisions_poc.csv", ctx_r125.decisions_poc); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Angezeigte Daten als CSV-Datei herunterladen \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
} }
function StartComponent_div_8_div_20_div_12_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "mat-card")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Abgleich Empfehlung vs. Entscheidung Behandlungsort ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Anzahl Assessment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "mat-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](7, "lock_open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div")(9, "app-plot", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("dataChange", function StartComponent_div_8_div_20_div_12_mat_card_1_Template_app_plot_dataChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r128); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r127.decisions_poc = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "mat-expansion-panel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("opened", function StartComponent_div_8_div_20_div_12_mat_card_1_Template_mat_expansion_panel_opened_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r128); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r129.panelOpenState = true; })("closed", function StartComponent_div_8_div_20_div_12_mat_card_1_Template_mat_expansion_panel_closed_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r128); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4); return ctx_r130.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](12, StartComponent_div_8_div_20_div_12_mat_card_1_mat_icon_12_Template, 2, 0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "mat-panel-description")(14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, StartComponent_div_8_div_20_div_12_mat_card_1_p_15_Template, 5, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](17, " Weitere Informationen zum Indikator");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](19, "Abgleich der SmED-Empfehlung mit der Entscheidung des/der Disponent*in hinsichtlich der Versorgungsebene. Die Entscheidung des/der Disponent*in wird in SmED bisher nur bei einem kleinen Anteil der SmED-Assessments dokumentiert. Es wird an einer \u00DCbermittlung der entsprechenden Angaben aus der Dispositionssoftware gearbeitet. Dieser Prozess ist bisher mit einigen wenigen KVen etabliert. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("data", ctx_r122.decisions_poc)("xvalue", "POCsmed_text")("fontcolor", "white")("showlegend", true)("outcomes", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](9, _c9))("custommargins", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction0"](10, _c10))("colorby", "POCdispo_text");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r122.panelOpenState);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r122.currentuser);
} }
function StartComponent_div_8_div_20_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, StartComponent_div_8_div_20_div_12_mat_card_1_Template, 20, 11, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r34.decisions_poc.length > 0);
} }
function StartComponent_div_8_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, StartComponent_div_8_div_20_div_1_Template, 10, 14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, StartComponent_div_8_div_20_div_2_Template, 18, 8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](3, StartComponent_div_8_div_20_div_3_Template, 18, 10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](4, StartComponent_div_8_div_20_div_4_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](5, StartComponent_div_8_div_20_div_5_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](6, StartComponent_div_8_div_20_div_6_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](7, StartComponent_div_8_div_20_div_7_Template, 19, 11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](8, StartComponent_div_8_div_20_div_8_Template, 19, 11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](9, StartComponent_div_8_div_20_div_9_Template, 21, 11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](10, StartComponent_div_8_div_20_div_10_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](11, StartComponent_div_8_div_20_div_11_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](12, StartComponent_div_8_div_20_div_12_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.summaryinfo["Assessments Gesamt"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.stats_ts);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.stats_ts);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.symptoms_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.utiltimes["z"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.timetotreat);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.stats_ts);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.stats_ts);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.stats_ts && ctx_r14.currentuser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.currentuser && ctx_r14.decisions_pocvsttt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.currentuser && ctx_r14.decisions_ttt);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r14.decisions_poc && ctx_r14.currentuser);
} }
function StartComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, StartComponent_div_8_h3_2_Template, 2, 0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](3, StartComponent_div_8_p_3_Template, 2, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Analysezeitraum");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "p")(7, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](8, StartComponent_div_8_mat_chip_8_Template, 2, 2, "mat-chip", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "div")(10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](11, "Zeitliche Aufl\u00F6sung");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "p")(13, "mat-chip-list")(14, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_Template_mat_chip_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](); return ctx_r131.setlevel("resolution", "weekly"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, " Kalenderwochen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "mat-chip", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function StartComponent_div_8_Template_mat_chip_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r132); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](); return ctx_r133.setlevel("resolution", "monthly"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](17, " Monate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](18, StartComponent_div_8_div_18_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](19, StartComponent_div_8_div_19_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](20, StartComponent_div_8_div_20_Template, 13, 12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r3.currentuser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r3.currentuser);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx_r3.zeitaumoptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("selected", ctx_r3.levelsettings["resolution"] == "weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("selected", ctx_r3.levelsettings["resolution"] == "monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r3.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r3.summaryinfo && !ctx_r3.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r3.summaryinfo["done"]);
} }
const _c11 = function (a0) { return { "smallheader": a0 }; };
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
        this.levelvalues = [
            'Gesamt',
            'Baden-W??rttemberg',
            'Bayern',
            'Berlin',
            'Brandenburg',
            'Bremen',
            'Hamburg',
            'Hessen',
            'Mecklenburg-Vorpommern',
            'Niedersachsen',
            'Nordrhein-Westfalen',
            'Rheinland-Pfalz',
            'Saarland',
            'Sachsen',
            'Sachsen-Anhalt',
            'Schleswig-Holstein',
            'Th??ringen'
        ];
        this.levelsettings = {};
        this.debug = false;
        // SMED
        this.stats_ts = [];
        this.summaryinfo = {};
        this.smedrange = {};
        this.zeitaumoptions = ["Letzte 12 Monate", "Letztes Jahr", "Gesamt"];
        this.allpublicfields = ['stats', 'mainsymptoms_ts', 'timetotreat', 'timestats'];
        this.ts_results = {};
        this.utiltimes = {};
    }
    ngOnInit() {
        this.levelsettings = { "level": "KV", "levelvalues": "Gesamt", "zeitraum": "Letzte 12 Monate", 'resolution': 'monthly' };
        this.summaryinfo["done"] = false;
        this.colorsscheme = this.api.makescale(5);
        this.mapdatafor = "";
        this.mapdata = [];
        this.levelsettings = this.smed.updatestartstop(this.levelsettings);
        this.auth.currentUser.subscribe(data => { this.currentuser = data; });
        this.updatemetadata();
        window.scroll(0, 0);
        this.setlevel("__init", "");
        // fix long loading
        setTimeout(() => {
            if (this.stats_ts.length == 0) {
                this.setlevel("__init", "");
            }
            ;
        }, 1500);
        // counter
        this.timetogo = this.check_portal_online();
        if ((this.timetogo < 0) && !this.currentuser) {
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
    setlevel(level, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.currentuser && (this.timetogo < 0)) {
                return null;
            }
            if (level !== "__init") {
                this.levelsettings[level] = value;
                this.levelsettings = this.smed.updatestartstop(this.levelsettings);
            }
            ;
            this.summaryinfo = [];
            this.stats_ts = [];
            this.utiltimes = {};
            this.decisions_ttt = [];
            this.decisions_poc = [];
            this.decisions_pocvsttt = [];
            this.timetotreat = NaN;
            if (this.metadata.length == 0) {
                this.updatemetadata();
                return null;
            }
            if (this.levelsettings['start'] && this.levelsettings['stop']) {
                this.progress = true;
                yield this.querydatasmed();
                if (this.currentuser) {
                    yield this.querydatasmed('decisions');
                }
                ;
            }
        });
    }
    updatemetadata() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.api.getmetadata("metadata")) {
                this.metadata = yield this.api.getmetadata("metadata");
                // Performance optimization - use only if needed by app
                // this.sortdata = this.api.getmetadata("sortdata");
                // this.geojson_available = this.api.getmetadata("geodata");
            }
            if (this.metadata) {
                if (this.metadata.length > 0) {
                    this.dometasettings();
                }
            }
            else {
                this.metadata = [];
                setTimeout(() => {
                    if ((this.metadata !== undefined) && (this.sortdata !== undefined)) {
                        if (this.metadata.length > 0) {
                            this.dometasettings();
                        }
                    }
                    else {
                        this.metadataok = false;
                        this.metadata = [];
                    }
                }, 1500);
            }
            ;
        });
    }
    handleklick(plot, event) {
    }
    dometasettings() {
        this.level = this.api.filterArray(this.metadata, "type", "level")[0]["varname"];
        this.levelid = this.api.filterArray(this.metadata, "type", "levelid")[0]['varname'];
        this.subgroups = ["Keine"].concat(this.api.getValues(this.api.filterArray(this.metadata, "type", "group"), "varname"));
        this.metadataok = true;
    }
    querydatasmed(thefield = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let now = new Date();
            let oldstand = new Date();
            let dataage = 0; // 0 hours old     
            let query = {
                "client_id": this.api.REST_API_SERVER_CLIENTID,
                "groupinfo": {}
            };
            query["groupinfo"]["level"] = "KV";
            query["groupinfo"]["levelid"] = this.levelsettings["levelvalues"];
            query["groupinfo"]["timeframe"] = this.levelsettings["resolution"];
            query["groupinfo"]["Jahr"] = {
                "$gte": parseInt(this.levelsettings["start"].slice(0, 4)),
                "$lte": parseInt(this.levelsettings["stop"].slice(0, 4))
            };
            if (thefield != "") {
                query["showfields"] = [thefield, 'KM6Versicherte', 'BEVSTAND'];
            }
            else {
                query["showfields"] = this.allpublicfields.concat(['KM6Versicherte', 'BEVSTAND']);
            }
            ;
            let dbdaterange;
            if (thefield != "") {
                yield this.db.querydatadates('KV', this.levelsettings["levelvalues"], thefield, this.levelsettings["resolution"]).then(data => {
                    if (data.length > 0) {
                        dbdaterange = Object.create(data[0]);
                    }
                });
            }
            else {
                yield this.db.querydatadates('KV', this.levelsettings["levelvalues"], this.allpublicfields[0], this.levelsettings["resolution"]).then(data => {
                    if (data.length > 0) {
                        dbdaterange = Object.create(data[0]);
                    }
                });
            }
            ;
            if (!dbdaterange) {
                dbdaterange = { 'startdate': '2000-01-01', 'stopdate': '2000-01-01' };
            }
            else {
                oldstand = new Date(dbdaterange['Stand']);
                dataage = (now.getTime() - oldstand.getTime()) / (1000 * 60 * 60);
            }
            ;
            if ((dbdaterange['startdate'] <= this.levelsettings["start"]) && (dbdaterange['stopdate'] >= this.levelsettings["stop"]) &&
                (dataage < 6)) {
                //console.log("local data!", dataage,'hours old',(now.getTime()-oldstand.getTime()));
                if (thefield != "") {
                    this.makesmeditems(thefield);
                }
                else {
                    for (let fielditem of this.allpublicfields) {
                        this.makesmeditems(fielditem);
                    }
                    ;
                }
                ;
            }
            else {
                yield this.api.postTypeRequest('get_data/', query).subscribe(data => {
                    let res = data["data"];
                    if (thefield != "" && res.length > 0) {
                        this.db.deletewhere(thefield, 'KV', this.levelsettings["levelvalues"], this.levelsettings["resolution"], this.levelsettings["start"], this.levelsettings["stop"]).then(() => {
                            this.updatedb(res, thefield);
                        });
                        this.db.storestand(thefield, 'KV', this.levelsettings["levelvalues"], now.toISOString(), this.levelsettings["start"], this.levelsettings["stop"], this.levelsettings["resolution"]);
                    }
                    ;
                    if (thefield == "" && res.length > 0) {
                        for (let fielditem of this.allpublicfields) {
                            this.db.deletewhere(fielditem, 'KV', this.levelsettings["levelvalues"], this.levelsettings["resolution"], this.levelsettings["start"], this.levelsettings["stop"]).then(() => {
                                this.updatedb(res, fielditem);
                            });
                            this.db.storestand(fielditem, 'KV', this.levelsettings["levelvalues"], now.toISOString(), this.levelsettings["start"], this.levelsettings["stop"], this.levelsettings["resolution"]);
                        }
                        ;
                    }
                    ;
                }, error => { });
            }
            ;
        });
    }
    updatedb(data, thefield) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.smed.newcombine(data, thefield);
            yield this.makesmeditems(thefield);
        });
    }
    exportascsv(name, data) {
        this.csv.exportToCsv(name, data);
        this.csv.exportToCsv(name + "_settings.csv", [this.levelsettings]);
    }
    makesmeditems(thefield) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.levelsettings = this.smed.updatestartstop(this.levelsettings);
            let startdate = this.levelsettings['startdate'];
            let enddate = this.levelsettings['enddate'];
            if (thefield == "stats") {
                this.stats_ts = [];
                this.summaryinfo = [];
                let statswdate = yield this.db.listdata('stats', "KV", this.levelsettings['levelvalues'], this.levelsettings['start'], this.levelsettings['stop'], true, this.levelsettings["resolution"]);
                if (statswdate.length > 0) {
                    for (let item of statswdate) {
                        item["Mittlere Dauer (Sek.)"] = (item["DAUERsmed"] / item["DAUERsmedFaelle"]);
                        if (item["Dauer_sek"] == 0) {
                            item["Mittlere Dauer (Sek.)"] = null;
                        }
                        item["Mittlere Anzahl Beschwerden"] = item["Anzahl_Beschwerden"] / item["Assessments"];
                        item["Mittlere Anzahl Fragen"] = item["Anzahl_Fragen"] / item["Assessments"];
                        if (item["Anzahl_Beschwerden"] == 0) {
                            item["Mittlere Anzahl Beschwerden"] = null;
                        }
                        item["Assessments pro 100 Tsd. Einw."] = item["Assessments"] / (item["BEVSTAND"] / 1e5);
                        // item["ARE Assessments pro 100 Tsd. Einw."] = item["Assessments_mit_ARE"] / (item["BEVSTAND"] / 1e5);
                        // item["ARE Assessments (v2) pro 100 Tsd. Einw."] = item["Assessments_mit_ARE_v2"] / (item["BEVSTAND"] / 1e5);
                        item["Anteil ARE Assessments"] = (100 * ((item["Assessments_mit_ARE_v3"] / item["Assessments"]) / .25)) - 100;
                    }
                    ;
                    this.stats_ts = statswdate;
                    let theid = this.stats_ts[0]['levelid'];
                    if (theid != "Gesamt") {
                        this.summaryinfo["levelid"] = " in ".concat(theid);
                    }
                    else {
                        this.summaryinfo["levelid"] = " in Deutschland";
                    }
                    ;
                    this.summaryinfo["Assessments Gesamt"] = this.api.sumArray(this.api.getValues(this.stats_ts, "Assessments"));
                    this.summaryinfo["Assessments pro Woche"] = this.summaryinfo["Assessments Gesamt"] / this.api.getValues(this.stats_ts, "Assessments").length;
                    this.summaryinfo["Mittlere Dauer"] = this.api.sumArray(this.api.getValues(this.stats_ts, "DAUERsmed")) / this.api.sumArray(this.api.getValues(this.stats_ts, "DAUERsmedFaelle"));
                    this.summaryinfo["Anzahl Beschwerden"] = this.api.sumArray(this.api.getValues(this.stats_ts, "Anzahl_Beschwerden")) / this.summaryinfo["Assessments Gesamt"];
                    this.summaryinfo["Anzahl Fragen"] = this.api.sumArray(this.api.getValues(this.stats_ts, "Anzahl_Fragen")) / this.summaryinfo["Assessments Gesamt"];
                    let sorteddates = this.api.getValues(this.stats_ts, "Datum").sort();
                    this.summaryinfo["Beginn"] = new Date(sorteddates[0]);
                    this.summaryinfo["Ende"] = new Date(sorteddates.pop());
                    this.summaryinfo["done"] = true;
                    // only here signal for loading done:
                    this.progress = false;
                }
            }
            ;
            if (thefield == "mainsymptoms_ts") {
                let symptoms_list = [];
                symptoms_list = yield this.db.listdata('mainsymptoms_ts', "KV", this.levelsettings['levelvalues'], this.levelsettings['start'], this.levelsettings['stop'], true, this.levelsettings["resolution"]);
                symptoms_list = this.api.getValues(symptoms_list, 'data');
                this.symptoms_list_export = this.api.sortArray(this.api.groupbysum(symptoms_list, 'Sympt', '', 'n'), 'n', "descending");
                for (let item of this.symptoms_list_export) {
                    let anzahl_symptome = this.api.sumArray(this.api.getValues(this.symptoms_list_export, "n"));
                    item["Anteil"] = Math.round(1000 * item['n'] / anzahl_symptome) / 10;
                }
                this.symptoms_list = this.symptoms_list_export.slice(0, 15);
            }
            ;
            if (thefield == "timestats") {
                let utiltimes = [];
                let dbutiltimes = yield this.db.listdata('timestats', "KV", this.levelsettings['levelvalues'], this.levelsettings['start'], this.levelsettings['stop'], false, this.levelsettings["resolution"]);
                dbutiltimes = this.api.getValues(dbutiltimes, 'data');
                utiltimes = this.api.groupbysum(dbutiltimes, "wt", "h", "n");
                let ntotal = this.api.sumArray(this.api.getValues(utiltimes, 'n'));
                dbutiltimes = [];
                for (let item of utiltimes) {
                    item["Wochentag"] = this.api.getweekdayname(item["wt"]);
                    item['Anzahl'] = item['n'];
                    item['Anteil'] = 0.1 * Math.round(1000 * item['n'] / ntotal);
                    item['TimeLabel'] = item['h'] + "-" + (item['h'] + 2) + 'h';
                    delete item['n'];
                }
                this.utiltimes = this.api.makeheatmapdata(utiltimes, "wt", "h", 'Anteil', 'Wochentag', 'TimeLabel');
            }
            ;
            if (thefield == "timetotreat") {
                let ttt = [];
                ttt = yield this.db.listdata('timetotreat', "KV", this.levelsettings['levelvalues'], this.levelsettings['start'], this.levelsettings['stop'], true, this.levelsettings["resolution"]);
                ttt = this.api.groupbysum(ttt, 'TTTsmed_text', '', 'Anzahl');
                let total = this.api.sumArray(this.api.getValues(ttt, 'Anzahl'));
                for (let item of ttt) {
                    item['Anteil'] = Math.round(1000 * item['Anzahl'] / total) / 10;
                }
                this.timetotreat = ttt;
            }
            if (thefield == "decisions") {
                let decisions = [];
                decisions = yield this.db.listdata('decisions', "KV", this.levelsettings['levelvalues'], this.levelsettings['start'], this.levelsettings['stop'], true, this.levelsettings["resolution"]);
                let total = this.api.sumArray(this.api.getValues(decisions, 'Anzahl'));
                this.decisions_ttt = this.api.replacemissing(this.api.groupbysum(decisions, 'TTTsmed_text', "TTTdispo_text", 'Anzahl'), 'TTTdispo_text', "Keine Daten");
                this.decisions_poc = this.api.replacemissing(this.api.groupbysum(decisions, 'POCsmed_text', "POCdispo_text", 'Anzahl'), 'POCdispo_text', "Keine Daten");
                ;
                this.decisions_pocvsttt = this.api.groupbysum(decisions, 'TTTsmed_text', "POCsmed_text", 'Anzahl');
            }
        });
    }
    // Pre Launch Counter
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
        let Sekunden = Math.floor(-timediff / (1000));
        Sekunden = Math.floor((Sekunden / 60 - Math.floor(Sekunden / 60)) * 60);
        return Tage + ' Tage ' + Stunden + " Stunden " + Minuten + " Minuten " + Sekunden + " Sekunden";
    }
}
StartComponent.??fac = function StartComponent_Factory(t) { return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_services_dbservice_service__WEBPACK_IMPORTED_MODULE_0__.DBService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_services_csvexport_service__WEBPACK_IMPORTED_MODULE_1__.CsvexportService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_services_smed_aggregation_service__WEBPACK_IMPORTED_MODULE_4__.SmedAggregationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
StartComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 9, vars: 7, consts: [["fxLayout", "column", "fxLayoutGap", "1rem", "fxLayoutAllign", "space-around", 1, "container"], ["class", "mat-caption lightgreycolor right", 4, "ngIf"], [1, "brandingpicture", 3, "ngClass"], [4, "ngIf"], [1, "mat-caption", "lightgreycolor", "right"], ["href", "https://www.zi.de", 2, "color", "white"], ["href", "https://www.zi.de/smed"], ["class", "lightgreycolor", 4, "ngIf"], [1, "lightgreycolor"], ["href", "https://www.zi.de/smed", 2, "color", "white"], ["href", "https://www.116117.de", 2, "color", "white"], ["routerLink", "/private"], ["color", "primary", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["color", "primary", 3, "selected", "click"], ["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100", 4, "ngIf"], ["fxFlex", "50", "fxFlex.lt-md", "100", 4, "ngIf"], ["fxFlex", "100", "fxFlex.lt-md", "100", 4, "ngIf"], ["fxFlex", "100"], ["fxFlex", "", "fxFlex.lt-md", "50", "fxFlex.lt-sm", "100"], ["title", "", 3, "value", "textbehind", "numberformat", "maincolor", "description"], ["title", "", "description", "Dauer in Sekunden", 3, "textbehind", "numberformat", "maincolor", "value"], ["title", "", "description", "Anzahl Beschwerden", 3, "textbehind", "numberformat", "maincolor", "value"], ["fxFlex", "", "fxFlex.lt-md", "50", "fxFlex.lt-sm", "100", 4, "ngIf"], ["title", "", "description", "Anzahl Fragen", 3, "textbehind", "numberformat", "maincolor", "value"], ["fxFlex", "50", "fxFlex.lt-md", "100"], ["xtickformat", "%d.%m.<br>%Y", "plottype", "area", 3, "data", "xvalue", "outcomes", "sortx", "fontcolor", "dataChange"], [1, "mat-elevation-z0", 3, "opened", "closed"], [1, "mat-caption"], [3, "click"], ["inline", "true"], ["xtickformat", "%d.%m.<br>%Y", "plottype", "area", 3, "data", "xvalue", "outcomes", "sortx", "fontcolor", "colorscheme", "dataChange"], ["plottype", "hbar", 3, "data", "xvalue", "percent", "fontcolor", "outcomes", "sort", "dataChange", "clicked"], [1, "lightgreycolor", "mat-caption"], ["plottype", "heatmap", 3, "data", "fontcolor", "dataChange"], ["fxFlex", "100", "fxFlex.lt-md", "100"], ["plottype", "hbar", 3, "data", "xvalue", "fontcolor", "showlegend", "outcomes", "custommargins", "dataChange"], ["xtickformat", "%d.%m.<br>%Y", "plottype", "tsline", 3, "data", "xvalue", "fontcolor", "colorscheme", "sortx", "outcomes", "dataChange"], [1, "backgroundicon"], ["plottype", "stackedbar", 3, "data", "xvalue", "fontcolor", "showlegend", "outcomes", "custommargins", "colorby", "dataChange"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, StartComponent_p_2_Template, 4, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 2)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5, "Ambulante Akut- und Notf\u00E4lle in Deutschland");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](6, StartComponent_ng_container_6_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](7, StartComponent_ng_container_7_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](8, StartComponent_div_8_Template, 21, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.currentuser);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](5, _c11, ctx.currentuser || ctx.summaryinfo["done"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.metadata && !ctx.currentuser);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.timetogo >= 0 || ctx.currentuser);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.timetogo >= 0 || ctx.currentuser);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCard, _components_infobox_box_box_component__WEBPACK_IMPORTED_MODULE_5__.BoxComponent, _components_plotly_plot_plot_component__WEBPACK_IMPORTED_MODULE_6__.PlotComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelHeader, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelDescription], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".box[_ngcontent-%COMP%] {\n  background-color: #2b2b2b;\n}\n\n.flagicon[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  padding-left: 0.1rem;\n  padding-bottom: 0.3rem;\n}\n\n.brandingpicture[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-size: cover;\n  margin: -2em;\n  margin-bottom: 2em;\n  margin-top: 1em;\n  padding: 2em;\n  filter: contrast(1.3);\n  filter: grayscale(1);\n  min-height: 200px;\n  color: #7c7c7c;\n  background-image: url('pexels-karolina-grabowska-4386466.jpg');\n}\n\n.smallheader[_ngcontent-%COMP%] {\n  color: inherit;\n  padding: 0px;\n  background-image: none;\n  min-height: 0px;\n  margin: 0px;\n}\n\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.minheight[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.fakecontent[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.185);\n  color: rgba(255, 255, 255, 0.466);\n  border-radius: 15px;\n  text-align: center;\n  vertical-align: middle;\n  min-height: 150px;\n  height: 100%;\n}\n\n.grey[_ngcontent-%COMP%] {\n  stroke: rgba(255, 255, 255, 0.466) !important;\n}\n\n.backgroundicon[_ngcontent-%COMP%] {\n  color: #727272;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDhEQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNJLGlCQUFBO0FBQU47O0FBR0M7RUFDRyxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksNENBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUVBO0VBRVEsNkNBQUE7QUFBUjs7QUFLQTtFQUNJLGNBQUE7QUFGSiIsImZpbGUiOiJzdGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMmI7XG59XG5cblxuLmZsYWdpY29uIHtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICAgIHBhZGRpbmctbGVmdDogLjFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC4zcmVtO1xufVxuXG4uYnJhbmRpbmdwaWN0dXJlIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWFyZ2luOiAtMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGZpbHRlcjogY29udHJhc3QoMS4zKTtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSA7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgY29sb3I6cmdiKDEyNCwgMTI0LCAxMjQpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvYnJhbmRpbmcvcGV4ZWxzLWthcm9saW5hLWdyYWJvd3NrYS00Mzg2NDY2LmpwZycpO1xuICB9XG5cbiAgLnNtYWxsaGVhZGVyIHtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOm5vbmU7XG4gICAgbWluLWhlaWdodDogMHB4O1xuICAgIG1hcmdpbjowcHg7XG4gIH1cblxuICAucmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuIC5taW5oZWlnaHQge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5mYWtlY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4NSk7XG4gICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ2Nik7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uZ3JleSB7XG4gICAgXG4gICAgICAgIHN0cm9rZTpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDY2KSFpbXBvcnRhbnQ7XG4gICAgICAgIFxuICAgIFxufVxuXG4uYmFja2dyb3VuZGljb24ge1xuICAgIGNvbG9yOnJnYigxMTQsIDExNCwgMTE0KTsgICAgXG59Il19 */"] });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8919);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ 8754);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);






class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.itsatest = false;
        this.REST_API_SERVER = "https://api.zidatasciencelab.de/"; // "https://dashboardapi.ziapp.de/"; "http://localhost:8000/"; 
        this.REST_API_SERVER_CLIENTID = "smed_reporting";
        this.primarycolor = "#2196f3"; // "#e91e63";
        this.accentcolor = "#e3714e1";
        this.warncolor = "#e1149b";
    }
    getTypeRequest(url) {
        return this.httpClient.get(this.REST_API_SERVER + url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            return res;
        })).pipe(/*timeout(3500),*/ (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(3));
    }
    postTypeRequest(url, payload) {
        return this.httpClient.post(this.REST_API_SERVER + url, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            return res;
        })).pipe(/*timeout(15000),*/ (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(3));
        ;
    }
    getTypeRequestnotimeout(url) {
        return this.httpClient.get(this.REST_API_SERVER + url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            return res;
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(3));
    }
    postTypeRequestnotimeout(url, payload) {
        return this.httpClient.post(this.REST_API_SERVER + url, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            return res;
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(3));
        ;
    }
    // Specific Requests
    updateuser(user, setting, value, usergroups = "") {
        let payload = { 'email': user, 'key': setting, 'value': value };
        if (usergroups != "") {
            payload['usergroups'] = usergroups;
        }
        return this.postTypeRequest('userstatus/', payload);
    }
    deleteuser(user, password = "") {
        let payload = { "email": user };
        if (password != "") {
            payload["password"] = password;
        }
        ;
        return this.postTypeRequest('deleteuser', payload);
    }
    changeuserpwd(user, newpwd, oldpwd = "") {
        let payload = { "newpassword": newpwd, email: user };
        if (oldpwd != "") {
            payload["oldpassword"] = oldpwd;
        }
        return this.postTypeRequest('changepwd', payload);
    }
    countView(url) {
        // Privacy preserving Webcounter, see Documentation here https://github.com/zidatalab/ziwebcounter
        this.httpClient.get('https://analytics.api.ziapp.de/view/ambulante_notfaelle/data?pageid=' + url + '&cookiedissent=' + true, { withCredentials: false }).subscribe();
    }
    // Data APIs
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
    objectkeystocolumns(array, objectname) {
        for (let item of array) {
            let theobject = item[objectname];
            for (let key of Object.keys(theobject)) {
                item[key] = theobject[key];
            }
            theobject[objectname] = NaN;
            delete theobject[objectname];
        }
        return array;
    }
    getOptions(array, key) {
        return array.map(item => item[key])
            .filter((value, index, self) => self.indexOf(value) === index);
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
            if (item[key] && (item[key] !== null) && (!isNaN(item[key]))) {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return JSON.parse(localStorage.getItem(name));
        });
    }
    sortArray(array, key, order = "ascending") {
        let result = array;
        if (order == "ascending") {
            return result.sort((a, b) => (a[key] < b[key] ? -1 : 1));
        }
        else {
            return result.sort((a, b) => (a[key] > b[key] ? -1 : 1));
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
        return chroma_js__WEBPACK_IMPORTED_MODULE_0__.scale([chroma_js__WEBPACK_IMPORTED_MODULE_0__(this.primarycolor).set('hsl.h', +70), this.primarycolor]).colors(bins);
    }
    ;
    stringwrap(string, maxlength = 30) {
        let newstring = "";
        let wordsarray = string.split(" ");
        let fulllength = string.length;
        let linelength = 0;
        for (let word of wordsarray) {
            let wordlen = word.length;
            if ((linelength + wordlen) < maxlength) {
                newstring = newstring + " " + word;
                linelength = linelength + wordlen;
            }
            else {
                newstring = newstring + "<br>" + word;
                linelength = wordlen;
            }
            ;
        }
        return newstring;
    }
    ;
    makeheatmapdata(array, xname, yname, valuename, xlabel = "", ylabel = "") {
        let res = {};
        res['x'] = this.getuniqueValues(array, xname).sort(function (a, b) { return a - b; });
        res['y'] = this.getuniqueValues(array, yname).sort(function (a, b) { return a - b; });
        res['z'] = [];
        for (let yitem of res['y']) {
            let topush = [];
            for (let xitem of res['x']) {
                try {
                    topush.push(this.filterArray(this.filterArray(array, xname, xitem), yname, yitem)[0][valuename]);
                }
                catch (_a) {
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
                }
                catch (_b) {
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
                }
                catch (_c) {
                    ylab.push("");
                }
                ;
            }
            res['y'] = ylab;
        }
        ;
        return res;
    }
    ;
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
ApiService.??fac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
ApiService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: ApiService, factory: ApiService.??fac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AuthGuardService {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate(next, state) {
        let result = false;
        let userdata = this._authService.getUserDetails();
        if (userdata) {
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
AuthGuardService.??fac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuardService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.??fac, providedIn: 'root' });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);







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
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
AuthService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

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
CsvexportService.??fac = function CsvexportService_Factory(t) { return new (t || CsvexportService)(); };
CsvexportService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CsvexportService, factory: CsvexportService.??fac, providedIn: 'root' });


/***/ }),

/***/ 5518:
/*!********************************!*\
  !*** ./src/app/services/db.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataItem": () => (/* binding */ DataItem),
/* harmony export */   "StandItem": () => (/* binding */ StandItem),
/* harmony export */   "AppDB": () => (/* binding */ AppDB),
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
            datadb: 'id++,[level+levelid+Indicator+timeframe+Datum],[level+levelid+Indicator+timeframe]',
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ 5518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 5830);




class DBService {
    constructor(api) {
        this.api = api;
    }
    storestand(Indicator, level, levelid, Stand, mindate, maxdate, resolution) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield _db__WEBPACK_IMPORTED_MODULE_0__.db.standdb.where('[level+levelid+Indicator+timeframe]')
                .equals([level, levelid, Indicator, resolution])
                .delete();
            _db__WEBPACK_IMPORTED_MODULE_0__.db.standdb.put({
                'level': level,
                'levelid': levelid,
                'Stand': Stand,
                'Indicator': Indicator,
                'startdate': mindate,
                'stopdate': maxdate,
                'timeframe': resolution
            });
        });
    }
    ;
    getstand(Indicator, level, levelid, resolution) {
        return _db__WEBPACK_IMPORTED_MODULE_0__.db.standdb.where('[level+levelid+Indicator+timeframe]')
            .equals([level, levelid, Indicator, resolution]).first();
    }
    listdata(Indicator, level, levelid, start = "", stop = "", expand = true, resolution) {
        let tosearch = {
            Indicator: Indicator,
            level: level,
            levelid: levelid
        };
        // Can be implemented later to restrict results
        if (start !== "" && stop !== "" && expand == true) {
            return _db__WEBPACK_IMPORTED_MODULE_0__.db.datadb.where('[level+levelid+Indicator+timeframe+Datum]')
                .between([level, levelid, Indicator, resolution, start], [level, levelid, Indicator, resolution, stop])
                .toArray()
                .then(data => this.api.objectkeystocolumns(data, 'data'));
        }
        if (expand == true) {
            return _db__WEBPACK_IMPORTED_MODULE_0__.db.datadb.where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).toArray().then(data => this.api.objectkeystocolumns(data, 'data'));
        }
        if (expand == false) {
            return _db__WEBPACK_IMPORTED_MODULE_0__.db.datadb.where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).toArray();
        }
        ;
    }
    querydatadates(level, levelid, Indicator, resolution = "monthly") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let res = yield _db__WEBPACK_IMPORTED_MODULE_0__.db.standdb.where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).toArray();
            return res;
        });
    }
    deletewhere(Indicator, level, levelid, resolution = "monthly", start = "", stop = "") {
        let tosearch = {
            Indicator: Indicator,
            level: level,
            levelid: levelid,
            timeframe: resolution
        };
        // Can be implemented later to restrict results
        if (start !== "" && stop !== "") {
            return _db__WEBPACK_IMPORTED_MODULE_0__.db.datadb.where('[level+levelid+Indicator+timeframe+Datum]').between([level, levelid, Indicator, resolution, start], [level, levelid, Indicator, resolution, stop]).delete();
        }
        else {
            return _db__WEBPACK_IMPORTED_MODULE_0__.db.datadb.where('[level+levelid+Indicator+timeframe]').equals([level, levelid, Indicator, resolution]).delete();
        }
    }
    adddatabulk(array) {
        //console.log('add bulk',array)
        return _db__WEBPACK_IMPORTED_MODULE_0__.db.datadb.bulkPut(array);
    }
    ;
    adddata({ level, levelid, Jahr, Monat, KW, Datum, Indicator, data, KM6Versicherte, BEVSTAND, resolution }) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return yield _db__WEBPACK_IMPORTED_MODULE_0__.db.datadb.put({
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
        });
    }
    ;
    clean() {
        _db__WEBPACK_IMPORTED_MODULE_0__.db["delete"]();
        _db__WEBPACK_IMPORTED_MODULE_0__.db.open();
    }
}
DBService.??fac = function DBService_Factory(t) { return new (t || DBService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
DBService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: DBService, factory: DBService.??fac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
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
            // Refresh if token has??expired and Userdetails not null
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
InterceptorService.??fac = function InterceptorService_Factory(t) { return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
InterceptorService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjectable"]({ token: InterceptorService, factory: InterceptorService.??fac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ReplacePipe {
    transform(value, strToReplace, replacementStr) {
        if (!value || !strToReplace || !replacementStr) {
            return value;
        }
        return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
    }
}
ReplacePipe.??fac = function ReplacePipe_Factory(t) { return new (t || ReplacePipe)(); };
ReplacePipe.??pipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "replace", type: ReplacePipe, pure: true });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var src_app_services_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/db */ 5518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_dbservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dbservice.service */ 8351);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ 5830);





class SmedAggregationService {
    constructor(db, api) {
        this.db = db;
        this.api = api;
    }
    // Query Methods
    newcombine(array, fieldname) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //if (fieldname=="stats"){console.log("newcombine",fieldname,array);};
            let dbarray = [];
            if (array.length == 0) {
                return [];
            }
            ;
            for (let item of array) {
                if (!item[fieldname]) {
                    return [];
                }
                else {
                    for (let fielditem of item[fieldname]) {
                        let topush = new src_app_services_db__WEBPACK_IMPORTED_MODULE_0__.DataItem;
                        topush['level'] = item['level'];
                        topush['levelid'] = item['levelid'];
                        topush['Jahr'] = item['Jahr'];
                        topush['Monat'] = item['Monat'];
                        topush['KM6Versicherte'] = item['KM6Versicherte'];
                        topush['BEVSTAND'] = item['KM6Versicherte'];
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
            }
            //if (fieldname=="stats"){console.log("newcombine res",fieldname,dbarray);};
            yield this.db.adddatabulk(dbarray);
        });
    }
    querysmedts(groupvars = [], outcome = "", levelsettings, sort = false, topx = false, filtervar = "", filtervalues = [], topxvar = "") {
        if (levelsettings["zeitraum"] !== "Gesamt") {
            let query = {
                "startdate": levelsettings['start'].toISOString().slice(0, 10),
                "stopdate": levelsettings['end'].toISOString().slice(0, 10),
                "subgroups": groupvars,
                "filterlist": []
            };
            query["filterlist"].push({ "level": "KV" });
            if (levelsettings["levelvalues"] !== "Gesamt") {
                query["filterlist"].push({ "levelid": levelsettings["levelvalues"] });
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
                        keycountsarray.push({ "name": key, "count": keycounts[key] });
                    }
                    let filterlist = this.api.getValues(this.api.sortArray(keycountsarray, 'count', "descending").slice(0, topx), "name");
                    res = this.api.filterArraybyList(res, topxvar, filterlist);
                }
                return res;
            }, error => { return []; });
        }
        else {
            return [];
        }
        ;
    }
    // Aggregation Functions
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
            }
            else {
                output[item.name] = item["n"];
            }
        }
        output["Keine Angabe"] = output[""];
        delete output[""];
        for (let thekey in Object.keys(output)) {
            res.push({ "name": Object.keys(output)[thekey], "n": Object.values(output)[thekey] });
        }
        return this.api.sortArray(res, "n", "descending");
    }
    updatestartstop(levelsettings) {
        // Appply date filters
        let tzoffset = (new Date()).getTimezoneOffset() * 60000;
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
            startdate = new Date(today.getTime() - ((4 * 7) - 1) * millisperday).toISOString().slice(0, 10);
        }
        ;
        if (levelsettings["zeitraum"] == "Letzte Woche") {
            enddate = new Date(today.getTime() - today.getDay() * millisperday).toISOString().slice(0, 10);
            startdate = new Date(today.getTime() - ((6)) * millisperday).toISOString().slice(0, 10);
        }
        ;
        if (levelsettings["zeitraum"] == "Detailliert") {
            let newstart = (new Date(levelsettings['start_picker'] - tzoffset)).toISOString().slice(0, 10);
            let newstop = (new Date(levelsettings['stop_picker'] - tzoffset)).toISOString().slice(0, 10);
            //console.log("Detailliert",levelsettings['start_picker'],newstart,levelsettings['stop_picker'],newstop);
            levelsettings["start"] = newstart;
            levelsettings["stop"] = newstop;
        }
        if (levelsettings["zeitraum"] != "Detailliert") {
            levelsettings["start"] = startdate;
            levelsettings["stop"] = enddate;
        }
        else {
        }
        ;
        return levelsettings;
    }
}
SmedAggregationService.??fac = function SmedAggregationService_Factory(t) { return new (t || SmedAggregationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](src_app_services_dbservice_service__WEBPACK_IMPORTED_MODULE_1__.DBService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService)); };
SmedAggregationService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: SmedAggregationService, factory: SmedAggregationService.??fac, providedIn: 'root' });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 833);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);






























class MaterialModule {
}
MaterialModule.??fac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: MaterialModule });
MaterialModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
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
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__.MatExpansionModule
        ], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule,
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
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