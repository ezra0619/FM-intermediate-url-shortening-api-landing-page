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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["#url-shortening-main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #9e9aa7;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   input#longUrl.form-is-valid[_ngcontent-%COMP%] {\n  color: #9e9aa7;\n  border: none;\n  font-size: 18px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   input#longUrl.form-is-invalid[_ngcontent-%COMP%] {\n  color: #ff7a7a;\n  border: 2px solid #ff7a7a;\n  font-size: 18px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   input#longUrl.form-is-valid[_ngcontent-%COMP%]::placeholder {\n  color: #9e9aa7;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   input#longUrl.form-is-invalid[_ngcontent-%COMP%]::placeholder {\n  color: red;\n  color: #ff7a7a;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #35323e;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   a.green-round-button[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  background-color: #2acfcf;\n  color: white;\n  width: auto;\n  padding: 10px 20px;\n  font-weight: 700;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   a.green-round-button[_ngcontent-%COMP%]:hover {\n  background-color: #a2e3e0;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%] {\n  padding: 0 10% 0 10%;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  width: 100%;\n  height: auto;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   a.simpleGrey[_ngcontent-%COMP%] {\n  color: #9e9aa7;\n  font-weight: 600;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   a.simpleGrey[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .left-nav-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .left-nav-container[_ngcontent-%COMP%]   #logo-image-container[_ngcontent-%COMP%] {\n  width: 130px;\n  display: flex;\n  justify-content: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .left-nav-container[_ngcontent-%COMP%]   #logo-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .left-nav-container[_ngcontent-%COMP%]   #menu-bar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .left-nav-container[_ngcontent-%COMP%]   #menu-bar-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .right-nav-container[_ngcontent-%COMP%]   #login-signup-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%]   .right-nav-container[_ngcontent-%COMP%]   #login-signup-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%] {\n  display: none;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%] {\n  padding: 0 10% 0 10%;\n  padding-right: 0;\n  width: 100%;\n  height: 60vh;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-text[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-right: 30px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-image[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 10% 0 10%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(180deg, #ffffff 60%, #f0f1f6 60%);\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 160px;\n  height: auto;\n  border-radius: 10px;\n  padding: 0 4%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: url(/assets/bg-shorten-desktop.svg) #3b3054;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   .errorLinkUrl[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n  padding-left: 4px;\n  line-height: 1.5rem;\n  height: auto;\n  color: red;\n  font-style: italic;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  padding-bottom: 24px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 16px 30px;\n  border-radius: 14px;\n  margin-right: 20px;\n  outline: none;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 18px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 16px;\n  border-radius: 14px;\n  background-color: #2acfcf;\n  color: white;\n  font-weight: 700;\n  outline: none;\n  font-size: 18px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  background-color: #a2e3e0;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #f0f1f6;\n  padding: 0 10% 0 10%;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: auto;\n  background-color: white;\n  border-radius: 10px;\n  padding: 8px 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .oldLink-section[_ngcontent-%COMP%] {\n  width: 60%;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .oldLink-section[_ngcontent-%COMP%]   .oldLink[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #35323e;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #2acfcf;\n  padding: 0 16px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n  background-color: #2acfcf;\n  border: none;\n  border-radius: 12px;\n  padding: 10px 20px;\n  color: white;\n  font-weight: 700;\n  outline: none;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #a2e3e0;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-information-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  padding: 50px 0;\n  text-align: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 100%;\n  padding-bottom: 80px;\n  position: relative;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   .blue-strip-container[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #2acfcf;\n  width: 100%;\n  padding: 0 20px;\n  height: 8px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 32%;\n  min-height: 350px;\n  height: 350px;\n  background-color: white;\n  padding: 30px;\n  border-radius: 10px;\n  position: relative;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%]   .board-icon-container[_ngcontent-%COMP%] {\n  background-color: #3b3054;\n  min-width: 100px;\n  min-height: 100px;\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  top: -16%;\n  margin-bottom: 20px;\n  position: absolute;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%]   .board-text-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 17%;\n  padding-bottom: 10%;\n  line-height: 2rem;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%]   .board-text-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .board-two[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .board-three[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #link-boost-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  background: url(/assets/bg-boost-desktop.svg) #3b3054;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #link-boost-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: white;\n  padding-bottom: 12px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  padding: 0 10% 0 10%;\n  padding-top: 40px;\n  background-color: #232127;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: white;\n  font-weight: 500;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 130px;\n  height: 33px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  fill: white;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 60%;\n  justify-content: space-between;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #afadb3;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2acfcf;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #features-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #resources-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #company-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n#url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #social-media-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 15%;\n  justify-content: space-evenly;\n}\n@media (max-width: 1080px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%] {\n    height: auto;\n    display: flex;\n    flex-direction: column-reverse;\n    margin-bottom: 5%;\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-text[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 2%;\n    width: 100%;\n    padding-right: 0;\n    text-align: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #first-impression-container[_ngcontent-%COMP%]   #page-introduction-image[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 6%;\n    padding-bottom: 0;\n    text-align: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   .blue-strip-container[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #2acfcf;\n    left: calc(50% - 4px);\n    height: 94%;\n    width: 8px;\n    padding: 0;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    width: 100%;\n    min-height: 260px;\n    height: 260px;\n    background-color: white;\n    padding: 30px;\n    border-radius: 10px;\n    position: relative;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%]   .board-icon-container[_ngcontent-%COMP%] {\n    background-color: #3b3054;\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    top: -16%;\n    left: calc(50% - 50px);\n    margin-bottom: 20px;\n    position: absolute;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%]   .board-text-container[_ngcontent-%COMP%] {\n    position: relative;\n    height: auto;\n    margin-top: 10%;\n    padding-bottom: 10%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .board-one[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .board-two[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .board-three[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #social-media-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    justify-content: start;\n  }\n}\n@media (max-width: 1000px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 14px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   #input-container[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%] {\n    padding: 0;\n    flex-direction: column;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .oldLink-section[_ngcontent-%COMP%] {\n    width: 100%;\n    border-bottom: 1px solid #d8d4d4;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .oldLink-section[_ngcontent-%COMP%]   .oldLink[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink-button[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #short-links-results[_ngcontent-%COMP%]   #link-processed-container[_ngcontent-%COMP%]   .short-link[_ngcontent-%COMP%]   .newLink-section[_ngcontent-%COMP%]   .newLink-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 14px;\n  }\n}\n@media (max-width: 820px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   #nav-bar-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    height: 60px;\n    width: 100%;\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%]   #hamburger-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 90%;\n    height: auto;\n    z-index: 2;\n    top: 100%;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #3a3053;\n    border-radius: 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%]   #hamburger-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-weight: 700;\n    padding: 10px;\n    width: 100%;\n    text-align: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%]   #hamburger-menu[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n    border-top: 0.5px solid rgba(255, 255, 255, 0.767);\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%]   #hamburger-menu.displayNone[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #hamburger-nav-bar-container[_ngcontent-%COMP%]   #hamburger-menu.displayFlex[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 768px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%] {\n    height: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-logo-container[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #features-container[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #resources-container[_ngcontent-%COMP%], #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #footer-links-container[_ngcontent-%COMP%]   #company-container[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #social-media-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    width: 40%;\n    justify-content: space-around;\n    padding-bottom: 20px;\n  }\n}\n@media (max-width: 576px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #advanced-statistics-container[_ngcontent-%COMP%]   #statistics-boards-container[_ngcontent-%COMP%]   #information-board-container[_ngcontent-%COMP%]   .information-board[_ngcontent-%COMP%] {\n    min-height: auto;\n    height: auto;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #social-media-container[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n  #url-shortening-main-container[_ngcontent-%COMP%]   #main-page-information-container[_ngcontent-%COMP%]   #shorten-link-container[_ngcontent-%COMP%]   #shorten-link[_ngcontent-%COMP%]   .errorLinkUrl[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media (max-width: 300px) {\n  #url-shortening-main-container[_ngcontent-%COMP%]   #url-shortening-footer-container[_ngcontent-%COMP%]   #social-media-container[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBZFE7QUFLWjtBQVlJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVlI7QUFhSTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFYUjtBQWFJO0VBQ0ksY0FBQTtBQVhSO0FBYUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBQVhSO0FBY0k7RUFDSSxxQkFBQTtBQVpSO0FBY0k7RUFDSSxhQUFBO0FBWlI7QUFlSTs7OztFQUlJLGdCQUFBO0VBQ0EsY0EvQ0E7QUFrQ1I7QUFnQkk7RUFDSSxlQUFBO0FBZFI7QUFpQkk7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZlI7QUFrQkk7RUFDSSx5QkFBQTtBQWhCUjtBQW9CSTtFQUNJLG9CQXBFZ0I7RUFxRWhCLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQS9FUztFQWdGVCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBbEJSO0FBb0JRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBbEJaO0FBc0JRO0VBQ0ksWUFBQTtBQXBCWjtBQXNCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBcEJaO0FBdUJZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQXJCaEI7QUFzQmdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBcEJwQjtBQXdCWTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtBQXZCaEI7QUF3QmdCO0VBQ0ksa0JBQUE7QUF0QnBCO0FBNkJZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Es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LGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtFQWxJZDtFQW1JYztJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFqSWxCO0VBb0ljO0lBQ0ksa0RBQUE7RUFsSWxCO0VBc0lVO0lBQ0ksYUFBQTtFQXBJZDtFQXVJVTtJQUNJLGFBQUE7RUFySWQ7QUFDRjtBQTBJSTtFQUVJO0lBQ0ksWUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFQXpJVjtFQTBJVTtJQUNJLG1CQUFBO0VBeElkO0VBMElVO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtFQXhJZDtFQTBJYzs7O0lBR0ksb0JBQUE7RUF4SWxCO0VBNElVO0lBQ0ksbUJBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7SUFDQSw2QkFBQTtJQUNBLG9CQUFBO0VBMUlkO0FBQ0Y7QUErSUk7RUFFSTtJQUNJLGlCQUFBO0VBOUlWO0VBdUpzQjtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtFQXJKMUI7RUErSlU7SUFDSSxVQUFBO0VBN0pkO0VBaUtNO0lBQ0ksZUFBQTtFQS9KVjtBQUNGO0FBa0tJO0VBRVE7SUFDSSxVQUFBO0VBaktkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZmlyc3RQYWdlQ29sb3I6IHdoaXRlO1xuJHNlY29uZFBhZ2VDb2xvcjogcmdiKDI0MCwgMjQxLCAyNDYpO1xuJHRoaXJkUGFnZUNvbG9yOiBoc2woMjU3LCAyNyUsIDI2JSk7IC8vUHVycGxlXG4kZm91cnRoUGFnZUNvbG9yOiBoc2woMjYwLCA4JSwgMTQlKTsgLy9mb290ZXIgY29sb3JcbiRmb250Q29sb3I6IGhzbCgyNTcsIDclLCA2MyUpOyAvLz9cbiRoQ29sb3I6aHNsKDI1NSwgMTElLCAyMiUpO1xuJHBhZGRpbmdNYWluQ29udGFpbmVyczogMCAxMCUgMCAxMCU7XG5cblxuI3VybC1zaG9ydGVuaW5nLW1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogJGZvbnRDb2xvcjtcbiAgICAvL2ZvbnQgd2VpZ2h0cyB1c2VkIDUwMCBhbmQgNzAwXG5cbiAgICBpbnB1dCNsb25nVXJsLmZvcm0taXMtdmFsaWR7XG4gICAgICAgIGNvbG9yOiBoc2woMjU3LCA3JSwgNjMlKTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuXG4gICAgaW5wdXQjbG9uZ1VybC5mb3JtLWlzLWludmFsaWR7XG4gICAgICAgIGNvbG9yOiBoc2woMCwgMTAwJSwgNzQlKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgaHNsKDAsIDEwMCUsIDc0JSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgaW5wdXQjbG9uZ1VybC5mb3JtLWlzLXZhbGlkOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiBoc2woMjU3LCA3JSwgNjMlKTtcbiAgICB9XG4gICAgaW5wdXQjbG9uZ1VybC5mb3JtLWlzLWludmFsaWQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgY29sb3I6IGhzbCgwLCAxMDAlLCA3NCUpO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIGE6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIGgxLFxuICAgIGgyLFxuICAgIGgzLFxuICAgIGg0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICRoQ29sb3I7XG4gICAgfVxuXG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG5cbiAgICBhLmdyZWVuLXJvdW5kLWJ1dHRvbntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4MCwgNjYlLCA0OSUpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICB9XG4gICAgYS5ncmVlbi1yb3VuZC1idXR0b246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjYTJlM2UwO1xuICAgIH1cblxuICAgIC8vTkFWQkFSXG4gICAgI25hdi1iYXItY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiAkcGFkZGluZ01haW5Db250YWluZXJzO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaXJzdFBhZ2VDb2xvcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIGEuc2ltcGxlR3JleSB7XG4gICAgICAgICAgICBjb2xvcjpoc2woMjU3LCA3JSwgNjMlKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGEuc2ltcGxlR3JleTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgfVxuICAgICAgICAubGVmdC1uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAjbG9nby1pbWFnZS1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICNtZW51LWJhci1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDEzMHB4KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5yaWdodC1uYXYtY29udGFpbmVye1xuICAgICAgICAgICAgLy8gd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAjbG9naW4tc2lnbnVwLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgICNoYW1idXJnZXItbmF2LWJhci1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC8vTUFJTiBQQUdFIENPTlRBSU5FUlxuICAgICNtYWluLXBhZ2UtaW5mb3JtYXRpb24tY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvL1RFWFQgQU5EIElNQUdFIENPTlRBSU5FUlxuICAgICAgICAjZmlyc3QtaW1wcmVzc2lvbi1jb250YWluZXJ7XG4gICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZ01haW5Db250YWluZXJzO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpcnN0UGFnZUNvbG9yO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAjcGFnZS1pbnRyb2R1Y3Rpb24tdGV4dHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG5cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjcGFnZS1pbnRyb2R1Y3Rpb24taW1hZ2V7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL1NIT1JURU4gTElOSyBDT05UQUlORVJcbiAgICAgICAgI3Nob3J0ZW4tbGluay1jb250YWluZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAkcGFkZGluZ01haW5Db250YWluZXJzO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiA2MCUsIHJnYigyNDAsIDI0MSwgMjQ2KSA2MCUpO1xuICAgICAgICAgICAgI3Nob3J0ZW4tbGlua3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDQlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYmctc2hvcnRlbi1kZXNrdG9wLnN2ZykgJHRoaXJkUGFnZUNvbG9yO1xuXG4gICAgICAgICAgICAgICAgLmVycm9yTGlua1VybHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAjaW5wdXQtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRde1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF17XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTgwLCA2NiUsIDQ5JSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICNhMmUzZTA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvL0FEVkFOQ0VEIFNUQVRJU1RJQ1MgQ09OVEFJTkVSXG4gICAgICAgICNhZHZhbmNlZC1zdGF0aXN0aWNzLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kUGFnZUNvbG9yO1xuICAgICAgICAgICAgcGFkZGluZzogJHBhZGRpbmdNYWluQ29udGFpbmVycztcblxuICAgICAgICAgICAgI3Nob3J0LWxpbmtzLXJlc3VsdHN7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgICNsaW5rLXByb2Nlc3NlZC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgICAgIC5zaG9ydC1saW5rIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAub2xkTGluay1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbGRMaW5re1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGhzbCgyNTUsIDExJSwgMjIlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLm5ld0xpbmstc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV3TGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaHNsKDE4MCwgNjYlLCA0OSUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV3TGluay1idXR0b24gYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICBoc2woMTgwLCA2NiUsIDQ5JSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5ld0xpbmstYnV0dG9uIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjYTJlM2UwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNzdGF0aXN0aWNzLWluZm9ybWF0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICNzdGF0aXN0aWNzLWJvYXJkcy1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAuYmx1ZS1zdHJpcC1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4MCwgNjYlLCA0OSUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAjaW5mb3JtYXRpb24tYm9hcmQtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuaW5mb3JtYXRpb24tYm9hcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMiU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLmJvYXJkLWljb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjU3LCAyNyUsIDI2JSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMjklO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTE2JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJvYXJkLXRleHQtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNyU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmJvYXJkLXR3b3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuYm9hcmQtdGhyZWV7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExJTksgQk9PU1QgQ09OVEFJTkVSXG4gICAgICAgICNsaW5rLWJvb3N0LWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2JnLWJvb3N0LWRlc2t0b3Auc3ZnKSAkdGhpcmRQYWdlQ29sb3I7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9GT09URVIgQ09OVEFJTkVSXG4gICAgI3VybC1zaG9ydGVuaW5nLWZvb3Rlci1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBwYWRkaW5nOiAkcGFkZGluZ01haW5Db250YWluZXJzO1xuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvdXJ0aFBhZ2VDb2xvcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAjZm9vdGVyLWxvZ28tY29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzcHg7XG5cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICNmb290ZXItbGlua3MtY29udGFpbmVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICBoNSxcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYWZhZGIzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGhzbCgxODAsIDY2JSwgNDklKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNmZWF0dXJlcy1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgI3Jlc291cmNlcy1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgI2NvbXBhbnktY29udGFpbmVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI3NvY2lhbC1tZWRpYS1jb250YWluZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vdGFibGV0IGxhbmRzY2FwZSB3aWR0aCAxMjgwcHhcbiAgICAvL3RhYmxldCB0YWJsZWQgNzY4cHhcbiAgICAvL21vYmlsZSA1NzZweFxuXG4gICAgQG1lZGlhKG1heC13aWR0aDogMTA4MHB4KXtcbiAgICAgICAgI21haW4tcGFnZS1pbmZvcm1hdGlvbi1jb250YWluZXJ7XG4gICAgICAgICAgICAjZmlyc3QtaW1wcmVzc2lvbi1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgICAgICAgICAgICAgI3BhZ2UtaW50cm9kdWN0aW9uLXRleHR7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNwYWdlLWludHJvZHVjdGlvbi1pbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNhZHZhbmNlZC1zdGF0aXN0aWNzLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICNzdGF0aXN0aWNzLWJvYXJkcy1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNiU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIC5ibHVlLXN0cmlwLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxODAsIDY2JSwgNDklKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNHB4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTQlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgI2luZm9ybWF0aW9uLWJvYXJkLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbmZvcm1hdGlvbi1ib2FyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYm9hcmQtaWNvbi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjU3LCAyNyUsIDI2JSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMjklO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xNiU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJvYXJkLXRleHQtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib2FyZC1vbmV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ib2FyZC10d297XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYm9hcmQtdGhyZWV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICN1cmwtc2hvcnRlbmluZy1mb290ZXItY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAjc29jaWFsLW1lZGlhLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpe1xuICAgICAgICAjbWFpbi1wYWdlLWluZm9ybWF0aW9uLWNvbnRhaW5lcntcbiAgICAgICAgICAgICNzaG9ydGVuLWxpbmstY29udGFpbmVye1xuXG4gICAgICAgICAgICAgICAgI3Nob3J0ZW4tbGlua3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAjaW5wdXQtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRde1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNhZHZhbmNlZC1zdGF0aXN0aWNzLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICAgICAgICAgICAgICAjc2hvcnQtbGlua3MtcmVzdWx0c3tcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgICAgICAjbGluay1wcm9jZXNzZWQtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3J0LWxpbmsge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAub2xkTGluay1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE2LCAyMTIsIDIxMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbGRMaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV3TGluay1zZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXdMaW5rIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV3TGluay1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5ld0xpbmstYnV0dG9uIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvL05BViBCQVIgQ09OVEFJTkVSIElOVE8gSEFNQlVSR0VSIE1FTlVcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA4MjBweCl7XG4gICAgICAgICNuYXYtYmFyLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAjaGFtYnVyZ2VyLW5hdi1iYXItY29udGFpbmVye1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XG5cbiAgICAgICAgICAgICNoYW1idXJnZXItbWVudXtcbiBcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAvLyBsZWZ0OiAzMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNhMzA1MztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9naW4tYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzY3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNoYW1idXJnZXItbWVudS5kaXNwbGF5Tm9uZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAjaGFtYnVyZ2VyLW1lbnUuZGlzcGxheUZsZXgge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcblxuICAgICAgICAjdXJsLXNob3J0ZW5pbmctZm9vdGVyLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAjZm9vdGVyLWxvZ28tY29udGFpbmVye1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjZm9vdGVyLWxpbmtzLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAjZmVhdHVyZXMtY29udGFpbmVyLFxuICAgICAgICAgICAgICAgICNyZXNvdXJjZXMtY29udGFpbmVyLFxuICAgICAgICAgICAgICAgICNjb21wYW55LWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI3NvY2lhbC1tZWRpYS1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgQG1lZGlhKG1heC13aWR0aDogNTc2cHgpe1xuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgI21haW4tcGFnZS1pbmZvcm1hdGlvbi1jb250YWluZXJ7XG5cbiAgICAgICAgICAgICNhZHZhbmNlZC1zdGF0aXN0aWNzLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICAjc3RhdGlzdGljcy1ib2FyZHMtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAjaW5mb3JtYXRpb24tYm9hcmQtY29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5mb3JtYXRpb24tYm9hcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgICN1cmwtc2hvcnRlbmluZy1mb290ZXItY29udGFpbmVye1xuICAgICAgICAgICAgI3NvY2lhbC1tZWRpYS1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICNtYWluLXBhZ2UtaW5mb3JtYXRpb24tY29udGFpbmVyICNzaG9ydGVuLWxpbmstY29udGFpbmVyICNzaG9ydGVuLWxpbmsgLmVycm9yTGlua1VybCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAzMDBweCl7XG4gICAgICAgICN1cmwtc2hvcnRlbmluZy1mb290ZXItY29udGFpbmVye1xuICAgICAgICAgICAgI3NvY2lhbC1tZWRpYS1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbiJdfQ== */"] });
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