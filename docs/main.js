(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shorten_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shorten-url.service */ "./src/app/shorten-url.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const _c0 = ["buttonElement"];
function AppComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid link. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.error, ". ");
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
function AppComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_56_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const shortLink_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r5.copyTextClipboard(shortLink_r4.newUrl); return ctx_r5.onCopyButton(shortLink_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const shortLink_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shortLink_r4.oldUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shortLink_r4.newUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", shortLink_r4.buttonInnerHtml, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, shortLink_r4.backgroundColor));
} }
const _c2 = function () { return { "font-size.px": 32 }; };
const _c3 = function (a0) { return { "displayNone": a0 }; };
class AppComponent {
    constructor(shortenURLService) {
        this.shortenURLService = shortenURLService;
        this.title = 'url-shortening-api-landing-page';
        this.shortenUrlArray = [];
        this.longUrl = '';
        this.shortUrl = '';
        this.linkIsValid = false;
        this.linkValidation = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
        this.linkSubmitted = false;
        this.error = null;
        this.shortUrlObj = {
            oldUrl: '',
            newUrl: '',
        };
        //request to http://tinyurl.com/api-create.php?url=http://www.example.com/
        //toggleHamburgerMenu
        this.toggleHamburgerMenu = false;
    }
    ngOnInit() {
    }
    validateLink(tempUrl) {
        console.log(tempUrl);
        console.log(tempUrl.match(this.linkValidation));
        this.error = null;
        //check if the link is valid
        if (tempUrl.match(this.linkValidation)) {
            //if link is valid
            console.log('valid');
            this.linkIsValid = true;
            //if link is valid then we send request for short url
            this.onShortenUrl(tempUrl);
        }
        else {
            //if link is not valid
            console.log('invalid');
            this.linkIsValid = false;
            this.linkSubmitted = true;
        }
    }
    onShortenUrl(longUrl) {
        console.log(longUrl);
        this.longUrl = longUrl;
        this.shortenURLService.shortenUrl(longUrl).subscribe(newUrl => {
            console.log(newUrl);
            this.shortUrl = newUrl;
            this.shortenUrlArray.push({ oldUrl: this.longUrl, newUrl: this.shortUrl, buttonInnerHtml: 'Copy', backgroundColor: '#2acfcf' });
            this.resetValues();
        }, error => {
            console.log('Error is: ' + error.message);
            this.error = error.message;
            console.log(this.longUrl);
            console.log(this.shortUrl);
            console.log(this.linkIsValid);
            console.log(this.linkSubmitted);
        });
        //to remove the long Url once the url has been shortened;
        //before sending a request we should check first if the input is a website
        //if not, make the user aware that it should be a website but not send a request yet
        //only once a successful request is sent, the longUrl to be reset
        //some validation on the input
    }
    resetValues() {
        this.longUrl = '';
        this.shortUrl = '';
        this.linkIsValid = false;
        this.linkSubmitted = false;
        this.error = null;
    }
    onToggleHamburgerMenu() {
        this.toggleHamburgerMenu = !this.toggleHamburgerMenu;
    }
    copyTextClipboard(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
    onCopyButton(shortLinkArray) {
        console.log(shortLinkArray.oldUrl);
        shortLinkArray.backgroundColor = '#3a3053';
        shortLinkArray.buttonInnerHtml = 'Copied';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shorten_url_service__WEBPACK_IMPORTED_MODULE_1__["ShortenURLService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 134, vars: 9, consts: [["id", "url-shortening-main-container"], ["id", "nav-bar-container"], [1, "left-nav-container"], ["id", "logo-image-container"], ["src", "./assets/logo.svg", "alt", "page logo"], ["id", "menu-bar-container"], ["alt", "features", 1, "simpleGrey"], [1, "right-nav-container"], ["id", "login-signup-container"], ["alt", "login-button", 1, "simpleGrey"], ["alt", "sign-up-button", 1, "green-round-button"], ["id", "hamburger-nav-bar-container"], [3, "click"], [1, "fa", "fa-bars", 3, "ngStyle"], ["id", "hamburger-menu", 3, "ngClass"], ["alt", "features"], ["alt", "login-button", 1, "login-button"], ["id", "main-page-information-container"], ["id", "first-impression-container"], ["id", "page-introduction-text"], [1, "green-round-button"], ["id", "page-introduction-image"], ["src", "./assets/illustration-working.svg", "alt", "person at computer image"], ["id", "shorten-link-container"], ["id", "shorten-link", 1, "form-group"], ["id", "input-container"], ["id", "longUrl", "type", "text", "name", "urlField", "ngModel", "", "placeholder", "Shorten a link here...", 3, "ngClass"], ["urlField", "ngModel"], ["type", "submit", "value", "Shorten It!", 3, "click"], ["class", "errorLinkUrl", 4, "ngIf"], ["id", "advanced-statistics-container"], ["id", "short-links-results"], ["id", "link-processed-container"], ["class", "short-link", 4, "ngFor", "ngForOf"], ["id", "statistics-information-container"], ["id", "statistics-boards-container"], [1, "blue-strip-container"], ["id", "information-board-container"], [1, "information-board", "board-one"], [1, "board-icon-container"], ["src", "./assets/icon-brand-recognition.svg", "alt", "Brand Recognition Icon"], [1, "board-text-container"], [1, "information-board", "board-two"], ["src", "./assets/icon-detailed-records.svg", "alt", "Detailed Records Icon"], [1, "information-board", "board-three"], ["src", "./assets/icon-fully-customizable.svg", "alt", "Fully Customizable Icon"], ["id", "link-boost-container"], ["alt", "Get Started Button", 1, "green-round-button"], ["id", "url-shortening-footer-container"], ["id", "footer-logo-container"], ["src", "./assets/logo-2.svg", "alt", "page logo"], ["id", "footer-links-container"], ["id", "features-container"], ["alt", "Link Shortening"], ["alt", "Branded Links"], ["alt", "Analytics"], ["id", "resources-container"], ["alt", "Blog"], ["alt", "Developers"], ["alt", "Support"], ["id", "company-container"], ["alt", "Our Team"], ["alt", "Careers"], ["alt", "Contact"], ["id", "social-media-container"], ["alt", "facebook icon"], ["src", "./assets/icon-facebook.svg", "alt", "facebook icon"], ["alt", "twitter icon"], ["src", "./assets/icon-twitter.svg", "alt", "twitter icon"], ["alt", "pininterest icon"], ["src", "./assets/icon-pinterest.svg", "alt", "pininterest icon"], ["alt", "instagram icon"], ["src", "./assets/icon-instagram.svg", "alt", "instagram icon"], [1, "errorLinkUrl"], [1, "short-link"], [1, "oldLink-section"], [1, "oldLink"], [1, "newLink-section"], [1, "newLink"], [1, "newLink-button"], [3, "innerHTML", "ngStyle", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_21_listener() { return ctx.onToggleHamburgerMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "More than just shorter links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Build your brand\u2019s recognition and get detailed insights on how your links are performing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_input_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49); return ctx.validateLink(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AppComponent_span_51_Template, 2, 0, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AppComponent_span_52_Template, 2, 1, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AppComponent_div_56_Template, 11, 6, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Advanced Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Track how your links are performing across the web with our advanced statistics dashboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Brand Recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Boost your brand recognition with each click. Generic links don\u2019t mean a thing. Branded links help instil confidence in your content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Detailed Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Fully Customizable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Boost your links today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Link Shortening");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Branded Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, !ctx.toggleHamburgerMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _r0.touched && ctx.linkSubmitted === true && ctx.linkIsValid === false ? "form-is-invalid" : "form-is-valid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.touched && ctx.linkSubmitted === true && ctx.linkIsValid === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shortenUrlArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#url-shortening-main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #9e9aa7;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   input#longUrl.form-is-valid[_ngcontent-%COMP%] {\n  color: #9e9aa7;\n  border: none;\n  font-size: 18px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   input#longUrl.form-is-invalid[_ngcontent-%COMP%] {\n  color: #ff7a7a;\n  border: 2px solid #ff7a7a;\n  font-size: 18px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   input#longUrl.form-is-valid[_ngcontent-%COMP%]::placeholder {\n  color: #9e9aa7;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   input#longUrl.form-is-invalid[_ngcontent-%COMP%]::placeholder {\n  color: red;\n  color: #ff7a7a;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #35323e;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   a.green-round-button[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  background-color: #2acfcf;\n  color: white;\n  width: auto;\n  padding: 10px 20px;\n  font-weight: 700;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   a.green-round-button[_ngcontent-%COMP%]:hover {\n  background-color: #a2e3e0;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%] {\n  padding: 0 10% 0 10%;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  width: 100%;\n  height: auto;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   a.simpleGrey[_ngcontent-%COMP%] {\n  color: #9e9aa7;\n  font-weight: 600;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   a.simpleGrey[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .left-nav-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .left-nav-container[_ngcontent-%COMP%]   #logo-image-container[_ngcontent-%COMP%] {\n  width: 130px;\n  display: flex;\n  justify-content: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .left-nav-container[_ngcontent-%COMP%]   #logo-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .left-nav-container[_ngcontent-%COMP%]   #menu-bar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .left-nav-container[_ngcontent-%COMP%]   #menu-bar-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .right-nav-container[_ngcontent-%COMP%]   #login-signup-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .right-nav-container[_ngcontent-%COMP%]   #login-signup-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%] {\n  display: none;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%] {\n  padding: 0 10% 0 10%;\n  padding-right: 0;\n  width: 100%;\n  height: 60vh;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-text[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-right: 30px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-image[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 10% 0 10%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(180deg, #ffffff 60%, #f0f1f6 60%);\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 160px;\n  height: auto;\n  border-radius: 10px;\n  padding: 0 4%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: url(/src/assets/bg-shorten-desktop.svg) #3b3054;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   .errorLinkUrl[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n  padding-left: 4px;\n  line-height: 1.5rem;\n  height: auto;\n  color: red;\n  font-style: italic;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  padding-bottom: 24px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 16px 30px;\n  border-radius: 14px;\n  margin-right: 20px;\n  outline: none;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 18px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 16px;\n  border-radius: 14px;\n  background-color: #2acfcf;\n  color: white;\n  font-weight: 700;\n  outline: none;\n  font-size: 18px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  background-color: #a2e3e0;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #f0f1f6;\n  padding: 0 10% 0 10%;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: auto;\n  background-color: white;\n  border-radius: 10px;\n  padding: 8px 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .oldLink-section[_ngcontent-%COMP%] {\n  width: 60%;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .oldLink-section[_ngcontent-%COMP%]   .oldLink[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #35323e;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #2acfcf;\n  padding: 0 16px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n  background-color: #2acfcf;\n  border: none;\n  border-radius: 12px;\n  padding: 10px 20px;\n  color: white;\n  font-weight: 700;\n  outline: none;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #a2e3e0;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-information-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  padding: 50px 0;\n  text-align: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 100%;\n  padding-bottom: 80px;\n  position: relative;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   .blue-strip-container[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #2acfcf;\n  width: 100%;\n  padding: 0 20px;\n  height: 8px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 32%;\n  min-height: 350px;\n  height: 350px;\n  background-color: white;\n  padding: 30px;\n  border-radius: 10px;\n  position: relative;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%]   .board-icon-container[_ngcontent-%COMP%] {\n  background-color: #3b3054;\n  min-width: 100px;\n  min-height: 100px;\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  top: -16%;\n  margin-bottom: 20px;\n  position: absolute;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%]   .board-text-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 17%;\n  padding-bottom: 10%;\n  line-height: 2rem;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%]   .board-text-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .board-two[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .board-three[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #link-boost-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  background: url(/assets/bg-boost-desktop.svg) #3b3054;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #link-boost-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: white;\n  padding-bottom: 12px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  padding: 0 10% 0 10%;\n  padding-top: 40px;\n  background-color: #232127;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: white;\n  font-weight: 500;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 130px;\n  height: 33px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  fill: white;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 60%;\n  justify-content: space-between;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #afadb3;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2acfcf;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #features-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #resources-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #company-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #social-media-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 15%;\n  justify-content: space-evenly;\n}\n@media (max-width: 1080px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    flex-direction: column-reverse;\n    margin-bottom: 5%;\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-text[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 2%;\n    width: 100%;\n    padding-right: 0;\n    text-align: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-image[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 6%;\n    padding-bottom: 0;\n    text-align: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   .blue-strip-container[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #2acfcf;\n    left: calc(50% - 4px);\n    height: 94%;\n    width: 8px;\n    padding: 0;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    width: 100%;\n    min-height: 260px;\n    height: 260px;\n    background-color: white;\n    padding: 30px;\n    border-radius: 10px;\n    position: relative;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%]   .board-icon-container[_ngcontent-%COMP%] {\n    background-color: #3b3054;\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    top: -16%;\n    left: calc(50% - 50px);\n    margin-bottom: 20px;\n    position: absolute;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%]   .board-text-container[_ngcontent-%COMP%] {\n    position: relative;\n    height: auto;\n    margin-top: 10%;\n    padding-bottom: 10%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .board-one[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .board-two[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .board-three[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #social-media-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n  }\n}\n@media (max-width: 1000px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 14px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%] {\n    padding: 0;\n    flex-direction: column;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .oldLink-section[_ngcontent-%COMP%] {\n    width: 100%;\n    border-bottom: 1px solid #d8d4d4;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .oldLink-section[_ngcontent-%COMP%]   .oldLink[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink-button[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 14px;\n  }\n}\n@media (max-width: 820px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    height: 60px;\n    width: 100%;\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%]   #hamburger-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 90%;\n    height: auto;\n    z-index: 2;\n    top: 100%;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #3a3053;\n    border-radius: 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%]   #hamburger-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-weight: 700;\n    padding: 10px;\n    width: 100%;\n    text-align: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%]   #hamburger-menu[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n    border-top: 0.5px solid rgba(255, 255, 255, 0.767);\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%]   #hamburger-menu.displayNone[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%]   #hamburger-menu.displayFlex[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 768px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%] {\n    height: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-logo-container[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #features-container[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #resources-container[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #company-container[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #social-media-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    width: 40%;\n    justify-content: space-around;\n    padding-bottom: 20px;\n  }\n}\n@media (max-width: 576px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%] {\n    min-height: auto;\n    height: auto;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #social-media-container[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   .errorLinkUrl[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media (max-width: 300px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #social-media-container[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBZFE7QUFLWjtBQVlJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVlI7QUFhSTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFYUjtBQWFJO0VBQ0ksY0FBQTtBQVhSO0FBYUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQVhSO0FBY0k7RUFDSSxxQkFBQTtBQVpSO0FBY0k7RUFDSSxhQUFBO0FBWlI7QUFlSTs7OztFQUlJLGdCQUFBO0VBQ0EsY0EvQ0E7QUFrQ1I7QUFnQkk7RUFDSSxlQUFBO0FBZFI7QUFpQkk7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZlI7QUFrQkk7RUFDSSx5QkFBQTtBQWhCUjtBQW9CSTtFQUNJLG9CQXBFZ0I7RUFxRWhCLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQS9FUztFQWdGVCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBbEJSO0FBb0JRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBbEJaO0FBc0JRO0VBQ0ksWUFBQTtBQXBCWjtBQXNCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBcEJaO0FBdUJZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQXJCaEI7QUFzQmdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBcEJwQjtBQXdCWTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtBQXZCaEI7QUF3QmdCO0VBQ0ksa0JBQUE7QUF0QnBCO0FBNkJZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Es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LGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtFQW5JZDtFQW9JYztJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFsSWxCO0VBcUljO0lBQ0ksa0RBQUE7RUFuSWxCO0VBdUlVO0lBQ0ksYUFBQTtFQXJJZDtFQXdJVTtJQUNJLGFBQUE7RUF0SWQ7QUFDRjtBQTJJSTtFQUVJO0lBQ0ksWUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFQTFJVjtFQTJJVTtJQUNJLG1CQUFBO0VBeklkO0VBMklVO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtFQXpJZDtFQTJJYzs7O0lBR0ksb0JBQUE7RUF6SWxCO0VBNklVO0lBQ0ksbUJBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSw2QkFBQTtJQUNBLG9CQUFBO0VBM0lkO0FBQ0Y7QUFnSkk7RUFFSTtJQUNJLGlCQUFBO0VBL0lWO0VBd0pzQjtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtFQXRKMUI7RUFnS1U7SUFDSSxVQUFBO0VBOUpkO0VBa0tNO0lBQ0ksZUFBQTtFQWhLVjtBQUNGO0FBbUtJO0VBRVE7SUFDSSxVQUFBO0VBbEtkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3RQYWdlQ29sb3I6IHdoaXRlO1xuJHNlY29uZFBhZ2VDb2xvcjogcmdiKDI0MCwgMjQxLCAyNDYpO1xuJHRoaXJkUGFnZUNvbG9yOiBoc2woMjU3LCAyNyUsIDI2JSk7IC8vUHVycGxlXG4kZm91cnRoUGFnZUNvbG9yOiBoc2woMjYwLCA4JSwgMTQlKTsgLy9mb290ZXIgY29sb3JcbiRmb250Q29sb3I6IGhzbCgyNTcsIDclLCA2MyUpOyAvLz9cbiRoQ29sb3I6aHNsKDI1NSwgMTElLCAyMiUpO1xuJHBhZGRpbmdNYWluQ29udGFpbmVyczogMCAxMCUgMCAxMCU7XG5cblxuI3VybC1zaG9ydGVuaW5nLW1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGZvbnRDb2xvcjtcbiAgICAvL2ZvbnQgd2VpZ2h0cyB1c2VkIDUwMCBhbmQgNzAwXG5cbiAgICBpbnB1dCNsb25nVXJsLmZvcm0taXMtdmFsaWR7XG4gICAgICAgIGNvbG9yOiBoc2woMjU3LCA3JSwgNjMlKTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgaW5wdXQjbG9uZ1VybC5mb3JtLWlzLWludmFsaWR7XG4gICAgICAgIGNvbG9yOiBoc2woMCwgMTAwJSwgNzQlKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgaHNsKDAsIDEwMCUsIDc0JSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgaW5wdXQjbG9uZ1VybC5mb3JtLWlzLXZhbGlkOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiBoc2woMjU3LCA3JSwgNjMlKTtcbiAgICB9XG4gICAgaW5wdXQjbG9uZ1VybC5mb3JtLWlzLWludmFsaWQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgY29sb3I6IGhzbCgwLCAxMDAlLCA3NCUpO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIGE6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIGgxLFxuICAgIGgyLFxuICAgIGgzLFxuICAgIGg0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICRoQ29sb3I7XG4gICAgfVxuXG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG5cbiAgICBhLmdyZWVuLXJvdW5kLWJ1dHRvbntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4MCwgNjYlLCA0OSUpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICB9XG4gICAgYS5ncmVlbi1yb3VuZC1idXR0b246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjYTJlM2UwO1xuICAgIH1cblxuICAgIC8vTkFWQkFSXG4gICAgI25hdi1iYXItY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiAkcGFkZGluZ01haW5Db250YWluZXJzO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaXJzdFBhZ2VDb2xvcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIGEuc2ltcGxlR3JleSB7XG4gICAgICAgICAgICBjb2xvcjpoc2woMjU3LCA3JSwgNjMlKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGEuc2ltcGxlR3JleTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgfVxuICAgICAgICAubGVmdC1uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAjbG9nby1pbWFnZS1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICNtZW51LWJhci1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDEzMHB4KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5yaWdodC1uYXYtY29udGFpbmVye1xuICAgICAgICAgICAgLy8gd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAjbG9naW4tc2lnbnVwLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICNoYW1idXJnZXItbmF2LWJhci1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC8vTUFJTiBQQUdFIENPTlRBSU5FUlxuICAgICNtYWluLXBhZ2UtaW5mb3JtYXRpb24tY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvL1RFWFQgQU5EIElNQUdFIENPTlRBSU5FUlxuICAgICAgICAjZmlyc3QtaW1wcmVzc2lvbi1jb250YWluZXJ7XG4gICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZ01haW5Db250YWluZXJzO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpcnN0UGFnZUNvbG9yO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAjcGFnZS1pbnRyb2R1Y3Rpb24tdGV4dHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjcGFnZS1pbnRyb2R1Y3Rpb24taW1hZ2V7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL1NIT1JURU4gTElOSyBDT05UQUlORVJcbiAgICAgICAgI3Nob3J0ZW4tbGluay1jb250YWluZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZ01haW5Db250YWluZXJzO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiA2MCUsIHJnYigyNDAsIDI0MSwgMjQ2KSA2MCUpO1xuICAgICAgICAgICAgI3Nob3J0ZW4tbGlua3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDQlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciA7XG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYmctc2hvcnRlbi1kZXNrdG9wLnN2ZykgJHRoaXJkUGFnZUNvbG9yO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3JjL2Fzc2V0cy9iZy1zaG9ydGVuLWRlc2t0b3Auc3ZnKSAkdGhpcmRQYWdlQ29sb3I7XG5cbiAgICAgICAgICAgICAgICAuZXJyb3JMaW5rVXJse1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICNpbnB1dC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF17XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9c3VibWl0XXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODAsIDY2JSwgNDklKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2EyZTNlMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQURWQU5DRUQgU1RBVElTVElDUyBDT05UQUlORVJcbiAgICAgICAgI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRQYWdlQ29sb3I7XG4gICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZ01haW5Db250YWluZXJzO1xuXG4gICAgICAgICAgICAjc2hvcnQtbGlua3MtcmVzdWx0c3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgI2xpbmstcHJvY2Vzc2VkLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgLnNob3J0LWxpbmsge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vbGRMaW5rLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9sZExpbmt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDI1NSwgMTElLCAyMiUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAubmV3TGluay1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXdMaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoc2woMTgwLCA2NiUsIDQ5JSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXdMaW5rLWJ1dHRvbiBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIGhzbCgxODAsIDY2JSwgNDklKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV3TGluay1idXR0b24gYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICNhMmUzZTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI3N0YXRpc3RpY3MtaW5mb3JtYXRpb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgI3N0YXRpc3RpY3MtYm9hcmRzLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIC5ibHVlLXN0cmlwLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTgwLCA2NiUsIDQ5JSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICNpbmZvcm1hdGlvbi1ib2FyZC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvcm1hdGlvbi1ib2FyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9hcmQtaWNvbi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNTcsIDI3JSwgMjYlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAyOSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTYlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9hcmQtdGV4dC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE3JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYm9hcmQtdHdve1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5ib2FyZC10aHJlZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTElOSyBCT09TVCBDT05UQUlORVJcbiAgICAgICAgI2xpbmstYm9vc3QtY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYmctYm9vc3QtZGVza3RvcC5zdmcpICR0aGlyZFBhZ2VDb2xvcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0ZPT1RFUiBDT05UQUlORVJcbiAgICAjdXJsLXNob3J0ZW5pbmctZm9vdGVyLWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIHBhZGRpbmc6ICRwYWRkaW5nTWFpbkNvbnRhaW5lcnM7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm91cnRoUGFnZUNvbG9yO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICNmb290ZXItbG9nby1jb250YWluZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzNweDtcblxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgI2Zvb3Rlci1saW5rcy1jb250YWluZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgIGg1LFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNhZmFkYjM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDE4MCwgNjYlLCA0OSUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2ZlYXR1cmVzLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAjcmVzb3VyY2VzLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAjY29tcGFueS1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjc29jaWFsLW1lZGlhLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy90YWJsZXQgbGFuZHNjYXBlIHdpZHRoIDEyODBweFxuICAgIC8vdGFibGV0IHRhYmxlZCA3NjhweFxuICAgIC8vbW9iaWxlIDU3NnB4XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAxMDgwcHgpe1xuICAgICAgICAjbWFpbi1wYWdlLWluZm9ybWF0aW9uLWNvbnRhaW5lcntcbiAgICAgICAgICAgICNmaXJzdC1pbXByZXNzaW9uLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICAgICAgICAgICAgICAjcGFnZS1pbnRyb2R1Y3Rpb24tdGV4dHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3BhZ2UtaW50cm9kdWN0aW9uLWltYWdle1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVye1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgI3N0YXRpc3RpY3MtYm9hcmRzLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLmJsdWUtc3RyaXAtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4MCwgNjYlLCA0OSUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA0cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5NCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAjaW5mb3JtYXRpb24tYm9hcmQtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZm9ybWF0aW9uLWJvYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ib2FyZC1pY29uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNTcsIDI3JSwgMjYlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAyOSU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTE2JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYm9hcmQtdGV4dC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJvYXJkLW9uZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJvYXJkLXR3b3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib2FyZC10aHJlZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgI3VybC1zaG9ydGVuaW5nLWZvb3Rlci1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICNzb2NpYWwtbWVkaWEtY29udGFpbmVye1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDEwMDBweCl7XG4gICAgICAgICNtYWluLXBhZ2UtaW5mb3JtYXRpb24tY29udGFpbmVye1xuICAgICAgICAgICAgI3Nob3J0ZW4tbGluay1jb250YWluZXJ7XG5cbiAgICAgICAgICAgICAgICAjc2hvcnRlbi1saW5re1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICNpbnB1dC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRde1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVye1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgICAgICAgICAgICAgICNzaG9ydC1saW5rcy1yZXN1bHRze1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgICAgICNsaW5rLXByb2Nlc3NlZC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvcnQtbGluayB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbGRMaW5rLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTYsIDIxMiwgMjEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9sZExpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXdMaW5rLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5ld0xpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXdMaW5rLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV3TGluay1idXR0b24gYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vTkFWIEJBUiBDT05UQUlORVIgSU5UTyBIQU1CVVJHRVIgTUVOVVxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDgyMHB4KXtcbiAgICAgICAgI25hdi1iYXItY29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICNoYW1idXJnZXItbmF2LWJhci1jb250YWluZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcblxuICAgICAgICAgICAgI2hhbWJ1cmdlci1tZW51e1xuIFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIC8vIGxlZnQ6IDMwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzMDUzO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sb2dpbi1idXR0b257XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2hhbWJ1cmdlci1tZW51LmRpc3BsYXlOb25lIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICNoYW1idXJnZXItbWVudS5kaXNwbGF5RmxleCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpe1xuXG4gICAgICAgICN1cmwtc2hvcnRlbmluZy1mb290ZXItY29udGFpbmVye1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICNmb290ZXItbG9nby1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNmb290ZXItbGlua3MtY29udGFpbmVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICNmZWF0dXJlcy1jb250YWluZXIsXG4gICAgICAgICAgICAgICAgI3Jlc291cmNlcy1jb250YWluZXIsXG4gICAgICAgICAgICAgICAgI2NvbXBhbnktY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjc29jaWFsLW1lZGlhLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiA1NzZweCl7XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAjbWFpbi1wYWdlLWluZm9ybWF0aW9uLWNvbnRhaW5lcntcblxuICAgICAgICAgICAgI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICNzdGF0aXN0aWNzLWJvYXJkcy1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICNpbmZvcm1hdGlvbi1ib2FyZC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmZvcm1hdGlvbi1ib2FyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgI3VybC1zaG9ydGVuaW5nLWZvb3Rlci1jb250YWluZXJ7XG4gICAgICAgICAgICAjc29jaWFsLW1lZGlhLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgI21haW4tcGFnZS1pbmZvcm1hdGlvbi1jb250YWluZXIgI3Nob3J0ZW4tbGluay1jb250YWluZXIgI3Nob3J0ZW4tbGluayAuZXJyb3JMaW5rVXJsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDMwMHB4KXtcbiAgICAgICAgI3VybC1zaG9ydGVuaW5nLWZvb3Rlci1jb250YWluZXJ7XG4gICAgICAgICAgICAjc29jaWFsLW1lZGlhLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shorten_url_service__WEBPACK_IMPORTED_MODULE_1__["ShortenURLService"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['buttonElement']
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shorten-url.service.ts":
/*!****************************************!*\
  !*** ./src/app/shorten-url.service.ts ***!
  \****************************************/
/*! exports provided: ShortenURLService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenURLService", function() { return ShortenURLService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ShortenURLService {
    constructor(http) {
        this.http = http;
    }
    shortenUrl(longUrl) {
        return this.http.get('https://tinyurl.com/api-create.php?url=' + longUrl, { responseType: 'text' });
    }
}
ShortenURLService.ɵfac = function ShortenURLService_Factory(t) { return new (t || ShortenURLService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ShortenURLService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShortenURLService, factory: ShortenURLService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortenURLService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/martin/andreea-projects/frontend-mentor-projects/intermediate/url-shortening-api-landing-page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map