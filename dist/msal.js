/*! msal v1.1.3 2019-09-13 */
'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Msal", [], factory);
	else if(typeof exports === 'object')
		exports["Msal"] = factory();
	else
		root["Msal"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
Object.defineProperty(exports, "__esModule", { value: true });
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
exports.__extends = __extends;
exports.__assign = function () {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
exports.__rest = __rest;
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
exports.__awaiter = __awaiter;
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
exports.__generator = __generator;
function __exportStar(m, exports) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
exports.__exportStar = __exportStar;
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m)
        return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length)
                o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
exports.__values = __values;
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
exports.__spreadArrays = __spreadArrays;
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
exports.__asyncValues = __asyncValues;
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
exports.__makeTemplateObject = __makeTemplateObject;
;
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result.default = mod;
    return result;
}
exports.__importStar = __importStar;
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}
exports.__importDefault = __importDefault;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * Check if a string is empty
     *
     * @param str
     */
    StringUtils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 * Constants
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "errorDescription", {
        get: function () { return "error_description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "error", {
        get: function () { return "error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "scope", {
        get: function () { return "scope"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientInfo", {
        get: function () { return "client_info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientId", {
        get: function () { return "clientId"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idToken", {
        get: function () { return "id_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "adalIdToken", {
        get: function () { return "adal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessToken", {
        get: function () { return "access_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expiresIn", {
        get: function () { return "expires_in"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "sessionState", {
        get: function () { return "session_state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "claims", {
        get: function () { return "claims"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalClientInfo", {
        get: function () { return "msal.client.info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalError", {
        get: function () { return "msal.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalErrorDescription", {
        get: function () { return "msal.error.description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalSessionState", {
        get: function () { return "msal.session.state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenKeys", {
        get: function () { return "msal.token.keys"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessTokenKey", {
        get: function () { return "msal.access.token.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expirationKey", {
        get: function () { return "msal.expiration.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateLogin", {
        get: function () { return "msal.state.login"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateAcquireToken", {
        get: function () { return "msal.state.acquireToken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateRenew", {
        get: function () { return "msal.state.renew"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "nonceIdToken", {
        get: function () { return "msal.nonce.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "userName", {
        get: function () { return "msal.username"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idTokenKey", {
        get: function () { return "msal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginRequest", {
        get: function () { return "msal.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginError", {
        get: function () { return "msal.login.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewStatus", {
        get: function () { return "msal.token.renew.status"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "urlHash", {
        get: function () { return "msal.urlHash"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "angularLoginRequest", {
        get: function () { return "msal.angular.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msal", {
        get: function () { return "msal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "no_account", {
        get: function () { return "NO_ACCOUNT"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "consumersUtid", {
        get: function () { return "9188040d-6c67-4c5b-b112-36a304b66dad"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "upn", {
        get: function () { return "upn"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_select_account", {
        get: function () { return "&prompt=select_account"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_none", {
        get: function () { return "&prompt=none"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt", {
        get: function () { return "prompt"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "response_mode_fragment", {
        get: function () { return "&response_mode=fragment"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "resourceDelimiter", {
        get: function () { return "|"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCancelled", {
        get: function () { return "Canceled"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCompleted", {
        get: function () { return "Completed"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusInProgress", {
        get: function () { return "In Progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpWidth", {
        get: function () { return this._popUpWidth; },
        set: function (width) {
            this._popUpWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpHeight", {
        get: function () { return this._popUpHeight; },
        set: function (height) {
            this._popUpHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "login", {
        get: function () { return "LOGIN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewToken", {
        get: function () { return "RENEW_TOKEN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "unknown", {
        get: function () { return "UNKNOWN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "homeAccountIdentifier", {
        get: function () { return "homeAccountIdentifier"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "common", {
        get: function () { return "common"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "openidScope", {
        get: function () { return "openid"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "profileScope", {
        get: function () { return "profile"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheLocationLocal", {
        get: function () { return "localStorage"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheLocationSession", {
        get: function () { return "sessionStorage"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypeRedirect", {
        get: function () { return "redirectInteraction"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypePopup", {
        get: function () { return "popupInteraction"; },
        enumerable: true,
        configurable: true
    });
    Constants._popUpWidth = 483;
    Constants._popUpHeight = 600;
    return Constants;
}());
exports.Constants = Constants;
/**
 * @hidden
 * CacheKeys for 'authority' and 'account'
 */
exports.CacheKeys = {
    AUTHORITY: "msal.authority",
    ACQUIRE_TOKEN_ACCOUNT: "msal.acquireTokenAccount"
};
exports.AADTrustedHostList = {
    "login.windows.net": "login.windows.net",
    "login.chinacloudapi.cn": "login.chinacloudapi.cn",
    "login.cloudgovapi.us": "login.cloudgovapi.us",
    "login.microsoftonline.com": "login.microsoftonline.com",
    "login.microsoftonline.de": "login.microsoftonline.de",
    "login.microsoftonline.us": "login.microsoftonline.us"
};
/**
 * @hidden
 * SSO Types - generated to populate hints
 */
exports.SSOTypes = {
    ACCOUNT: "account",
    SID: "sid",
    LOGIN_HINT: "login_hint",
    ID_TOKEN: "id_token",
    DOMAIN_HINT: "domain_hint",
    ORGANIZATIONS: "organizations",
    CONSUMERS: "consumers",
    ACCOUNT_ID: "accountIdentifier",
    HOMEACCOUNT_ID: "homeAccountIdentifier",
    LOGIN_REQ: "login_req",
    DOMAIN_REQ: "domain_req"
};
/**
 * @hidden
 */
exports.BlacklistedEQParams = [
    exports.SSOTypes.SID,
    exports.SSOTypes.LOGIN_HINT
];
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 * @hidden
 */
exports.PromptState = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};
/**
 * MSAL JS Library Version
 */
function libraryVersion() {
    return "1.1.3";
}
exports.libraryVersion = libraryVersion;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var CryptoUtils = /** @class */ (function () {
    function CryptoUtils() {
    }
    /**
     * Creates a new random GUID - used to populate state?
     * @returns string (GUID)
     */
    CryptoUtils.createNewGuid = function () {
        /*
         * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
         * pseudo-random numbers.
         * The algorithm is as follows:
         *     Set the two most significant bits (bits 6 and 7) of the
         *        clock_seq_hi_and_reserved to zero and one, respectively.
         *     Set the four most significant bits (bits 12 through 15) of the
         *        time_hi_and_version field to the 4-bit version number from
         *        Section 4.1.3. Version4
         *     Set all the other bits to randomly (or pseudo-randomly) chosen
         *     values.
         * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
         * time-low               = 4hexOctet
         * time-mid               = 2hexOctet
         * time-high-and-version  = 2hexOctet
         * clock-seq-and-reserved = hexOctet:
         * clock-seq-low          = hexOctet
         * node                   = 6hexOctet
         * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
         * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
         * y values are 8, 9, A, B
         */
        var cryptoObj = window.crypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
            return CryptoUtils.decimalToHex(buffer[0]) + CryptoUtils.decimalToHex(buffer[1])
                + CryptoUtils.decimalToHex(buffer[2]) + CryptoUtils.decimalToHex(buffer[3])
                + "-" + CryptoUtils.decimalToHex(buffer[4]) + CryptoUtils.decimalToHex(buffer[5])
                + "-" + CryptoUtils.decimalToHex(buffer[6]) + CryptoUtils.decimalToHex(buffer[7])
                + "-" + CryptoUtils.decimalToHex(buffer[8]) + CryptoUtils.decimalToHex(buffer[9])
                + "-" + CryptoUtils.decimalToHex(buffer[10]) + CryptoUtils.decimalToHex(buffer[11])
                + CryptoUtils.decimalToHex(buffer[12]) + CryptoUtils.decimalToHex(buffer[13])
                + CryptoUtils.decimalToHex(buffer[14]) + CryptoUtils.decimalToHex(buffer[15]);
        }
        else {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === "x") {
                    guidResponse += hex[r];
                }
                else if (guidHolder[i] === "y") {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                }
                else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    /**
     * Decimal to Hex
     *
     * @param num
     */
    CryptoUtils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    // See: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_4_%E2%80%93_escaping_the_string_before_encoding_it
    /**
     * encoding string to base64 - platform specific check
     *
     * @param input
     */
    CryptoUtils.base64Encode = function (input) {
        return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode(Number("0x" + p1));
        }));
    };
    /**
     * decoding base64 token - platform specific check
     *
     * @param base64IdToken
     */
    CryptoUtils.base64Decode = function (input) {
        return decodeURIComponent(atob(input).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    };
    /**
     * deserialize a string
     *
     * @param query
     */
    CryptoUtils.deserialize = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    return CryptoUtils;
}());
exports.CryptoUtils = CryptoUtils;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var ScopeSet_1 = __webpack_require__(13);
var StringUtils_1 = __webpack_require__(1);
var CryptoUtils_1 = __webpack_require__(3);
/**
 * @hidden
 */
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    /**
     * generates the URL with QueryString Parameters
     * @param scopes
     */
    UrlUtils.createNavigateUrl = function (serverRequestParams) {
        var str = this.createNavigationUrlString(serverRequestParams);
        var authEndpoint = serverRequestParams.authorityInstance.AuthorizationEndpoint;
        // if the endpoint already has queryparams, lets add to it, otherwise add the first one
        if (authEndpoint.indexOf("?") < 0) {
            authEndpoint += "?";
        }
        else {
            authEndpoint += "&";
        }
        var requestUrl = "" + authEndpoint + str.join("&");
        return requestUrl;
    };
    /**
     * Generate the array of all QueryStringParams to be sent to the server
     * @param scopes
     */
    UrlUtils.createNavigationUrlString = function (serverRequestParams) {
        var scopes = serverRequestParams.scopes;
        if (scopes.indexOf(serverRequestParams.clientId) === -1) {
            scopes.push(serverRequestParams.clientId);
        }
        var str = [];
        str.push("response_type=" + serverRequestParams.responseType);
        this.translateclientIdUsedInScope(scopes, serverRequestParams.clientId);
        str.push("scope=" + encodeURIComponent(ScopeSet_1.ScopeSet.parseScope(scopes)));
        str.push("client_id=" + encodeURIComponent(serverRequestParams.clientId));
        str.push("redirect_uri=" + encodeURIComponent(serverRequestParams.redirectUri));
        str.push("state=" + encodeURIComponent(serverRequestParams.state));
        str.push("nonce=" + encodeURIComponent(serverRequestParams.nonce));
        str.push("client_info=1");
        str.push("x-client-SKU=" + serverRequestParams.xClientSku);
        str.push("x-client-Ver=" + serverRequestParams.xClientVer);
        if (serverRequestParams.promptValue) {
            str.push("prompt=" + encodeURIComponent(serverRequestParams.promptValue));
        }
        if (serverRequestParams.claimsValue) {
            str.push("claims=" + encodeURIComponent(serverRequestParams.claimsValue));
        }
        if (serverRequestParams.queryParameters) {
            str.push(serverRequestParams.queryParameters);
        }
        if (serverRequestParams.extraQueryParameters) {
            str.push(serverRequestParams.extraQueryParameters);
        }
        str.push("client-request-id=" + encodeURIComponent(serverRequestParams.correlationId));
        return str;
    };
    /**
     * append the required scopes: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes
     * @param scopes
     */
    UrlUtils.translateclientIdUsedInScope = function (scopes, clientId) {
        var clientIdIndex = scopes.indexOf(clientId);
        if (clientIdIndex >= 0) {
            scopes.splice(clientIdIndex, 1);
            if (scopes.indexOf("openid") === -1) {
                scopes.push("openid");
            }
            if (scopes.indexOf("profile") === -1) {
                scopes.push("profile");
            }
        }
    };
    /**
     * Returns current window URL as redirect uri
     */
    UrlUtils.getDefaultRedirectUri = function () {
        return window.location.href.split("?")[0].split("#")[0];
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    UrlUtils.replaceTenantPath = function (url, tenantId) {
        url = url.toLowerCase();
        var urlObject = this.GetUrlComponents(url);
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return this.constructAuthorityUriFromObject(urlObject, pathArray);
    };
    UrlUtils.constructAuthorityUriFromObject = function (urlObject, pathArray) {
        return this.CanonicalizeUri(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/"));
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    UrlUtils.GetUrlComponents = function (url) {
        if (!url) {
            throw "Url required";
        }
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var match = url.match(regEx);
        if (!match || match.length < 6) {
            throw "Valid url required";
        }
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        return urlComponents;
    };
    /**
     * Given a url or path, append a trailing slash if one doesnt exist
     *
     * @param url
     */
    UrlUtils.CanonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
        }
        if (url && !UrlUtils.endsWith(url, "/")) {
            url += "/";
        }
        return url;
    };
    /**
     * Checks to see if the url ends with the suffix
     * Required because we are compiling for es5 instead of es6
     * @param url
     * @param str
     */
    // TODO: Rename this, not clear what it is supposed to do
    UrlUtils.endsWith = function (url, suffix) {
        if (!url || !suffix) {
            return false;
        }
        return url.indexOf(suffix, url.length - suffix.length) !== -1;
    };
    /**
     * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
     * @param url
     * @param name
     */
    UrlUtils.urlRemoveQueryStringParameter = function (url, name) {
        if (StringUtils_1.StringUtils.isEmpty(url)) {
            return url;
        }
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        url = url.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        return url;
    };
    /**
     * @hidden
     * @ignore
     *
     * Returns the anchor part(#) of the URL
     */
    UrlUtils.getHashFromUrl = function (urlStringOrFragment) {
        var hashIndex1 = urlStringOrFragment.indexOf("#");
        var hashIndex2 = urlStringOrFragment.indexOf("#/");
        if (hashIndex2 > -1) {
            return urlStringOrFragment.substring(hashIndex2 + 2);
        }
        else if (hashIndex1 > -1) {
            return urlStringOrFragment.substring(hashIndex1 + 1);
        }
        return urlStringOrFragment;
    };
    /**
     * @hidden
     * Check if the url contains a hash with known properties
     * @ignore
     */
    UrlUtils.urlContainsHash = function (urlString) {
        var parameters = UrlUtils.deserializeHash(urlString);
        return (parameters.hasOwnProperty(Constants_1.Constants.errorDescription) ||
            parameters.hasOwnProperty(Constants_1.Constants.error) ||
            parameters.hasOwnProperty(Constants_1.Constants.accessToken) ||
            parameters.hasOwnProperty(Constants_1.Constants.idToken));
    };
    /**
     * @hidden
     * Returns deserialized portion of URL hash
     * @ignore
     */
    UrlUtils.deserializeHash = function (urlFragment) {
        var hash = UrlUtils.getHashFromUrl(urlFragment);
        return CryptoUtils_1.CryptoUtils.deserialize(hash);
    };
    return UrlUtils;
}());
exports.UrlUtils = UrlUtils;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Constants_1 = __webpack_require__(2);
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientConfigurationErrorMessage = {
    configurationNotSet: {
        code: "no_config_set",
        desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
    },
    invalidCacheLocation: {
        code: "invalid_cache_location",
        desc: "The cache location provided is not valid."
    },
    noStorageSupported: {
        code: "browser_storage_not_supported",
        desc: "localStorage and sessionStorage are not supported."
    },
    noRedirectCallbacksSet: {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    invalidCallbackObject: {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    scopesRequired: {
        code: "scopes_required",
        desc: "Scopes are required to obtain an access token."
    },
    emptyScopes: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as empty array."
    },
    nonArrayScopes: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientScope: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
    },
    invalidAuthorityType: {
        code: "invalid_authority_type",
        desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https."
    },
    authorityUriInvalidPath: {
        code: "authority_uri_invalid_path",
        desc: "Given authority URI is invalid."
    },
    unsupportedAuthorityValidation: {
        code: "unsupported_authority_validation",
        desc: "The authority validation is not supported for this authority type."
    },
    b2cAuthorityUriInvalidPath: {
        code: "b2c_authority_uri_invalid_path",
        desc: "The given URI for the B2C authority is invalid."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    emptyRequestError: {
        code: "empty_request_error",
        desc: "Request object is required."
    },
    telemetryConfigError: {
        code: "telemetry_config_error",
        desc: "Telemetry config is not configured with required values"
    }
};
/**
 * Error thrown when there is an error in configuration of the .js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    ClientConfigurationError.createNoSetConfigurationError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.configurationNotSet.code, "" + exports.ClientConfigurationErrorMessage.configurationNotSet.desc);
    };
    ClientConfigurationError.createInvalidCacheLocationConfigError = function (givenCacheLocation) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCacheLocation.code, exports.ClientConfigurationErrorMessage.invalidCacheLocation.desc + " Provided value: " + givenCacheLocation + ". Possible values are: " + Constants_1.Constants.cacheLocationLocal + ", " + Constants_1.Constants.cacheLocationSession + ".");
    };
    ClientConfigurationError.createNoStorageSupportedError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noStorageSupported.code, exports.ClientConfigurationErrorMessage.noStorageSupported.desc);
    };
    ClientConfigurationError.createRedirectCallbacksNotSetError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code, exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc);
    };
    ClientConfigurationError.createInvalidCallbackObjectError = function (callbackObject) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
    };
    ClientConfigurationError.createEmptyScopesArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.emptyScopes.code, exports.ClientConfigurationErrorMessage.emptyScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesNonArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.nonArrayScopes.code, exports.ClientConfigurationErrorMessage.nonArrayScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createClientIdSingleScopeError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.clientScope.code, exports.ClientConfigurationErrorMessage.clientScope.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesRequiredError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.scopesRequired.code, exports.ClientConfigurationErrorMessage.scopesRequired.desc + " Given value: " + scopesValue);
    };
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidPrompt.code, exports.ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    ClientConfigurationError.createEmptyRequestError = function () {
        var _a = exports.ClientConfigurationErrorMessage.emptyRequestError, code = _a.code, desc = _a.desc;
        return new ClientConfigurationError(code, desc);
    };
    ClientConfigurationError.createTelemetryConfigError = function (config) {
        var _a = exports.ClientConfigurationErrorMessage.telemetryConfigError, code = _a.code, desc = _a.desc;
        var requiredKeys = {
            applicationName: "string",
            applicationVersion: "string",
            telemetryEmitter: "function"
        };
        var missingKeys = Object.keys(requiredKeys)
            .reduce(function (keys, key) {
            return config[key] ? keys : keys.concat([key + " (" + requiredKeys[key] + ")"]);
        }, []);
        return new ClientConfigurationError(code, desc + " mising values: " + missingKeys.join(","));
    };
    return ClientConfigurationError;
}(ClientAuthError_1.ClientAuthError));
exports.ClientConfigurationError = ClientConfigurationError;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
var StringUtils_1 = __webpack_require__(1);
exports.ClientAuthErrorMessage = {
    multipleMatchingTokens: {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements like authority."
    },
    multipleCacheAuthorities: {
        code: "multiple_authorities",
        desc: "Multiple authorities found in the cache. Pass authority in the API overload."
    },
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    popUpWindowError: {
        code: "popup_window_error",
        desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
    },
    tokenRenewalError: {
        code: "token_renewal_error",
        desc: "Token renewal operation failed due to timeout."
    },
    invalidIdToken: {
        code: "invalid_id_token",
        desc: "Invalid ID token format."
    },
    invalidStateError: {
        code: "invalid_state_error",
        desc: "Invalid state."
    },
    nonceMismatchError: {
        code: "nonce_mismatch_error",
        desc: "Nonce is not matching, Nonce received: "
    },
    loginProgressError: {
        code: "login_progress_error",
        desc: "Login_In_Progress: Error during login call - login is already in progress."
    },
    acquireTokenProgressError: {
        code: "acquiretoken_progress_error",
        desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
    },
    userCancelledError: {
        code: "user_cancelled",
        desc: "User cancelled the flow."
    },
    callbackError: {
        code: "callback_error",
        desc: "Error occurred in token received callback function."
    },
    userLoginRequiredError: {
        code: "user_login_error",
        desc: "User login is required."
    },
    userDoesNotExistError: {
        code: "user_non_existent",
        desc: "User object does not exist. Please call a login API."
    },
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoNotPopulatedError: {
        code: "client_info_not_populated_error",
        desc: "The service did not populate client_info in the response, Please verify with the service team"
    },
    nullOrEmptyIdToken: {
        code: "null_or_empty_id_token",
        desc: "The idToken is null or empty. Please review the trace to determine the root cause."
    },
    idTokenNotParsed: {
        code: "id_token_parsing_error",
        desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
    },
    tokenEncodingError: {
        code: "token_encoding_error",
        desc: "The token to be decoded is not encoded correctly."
    },
    invalidInteractionType: {
        code: "invalid_interaction_type",
        desc: "The interaction type passed to the handler was incorrect or unknown"
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    ClientAuthError.createEndpointResolutionError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.endpointResolutionError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.endpointResolutionError.code, errorMessage);
    };
    ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    ClientAuthError.createMultipleAuthoritiesInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleCacheAuthorities.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleCacheAuthorities.desc + ".");
    };
    ClientAuthError.createPopupWindowError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.popUpWindowError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.popUpWindowError.code, errorMessage);
    };
    ClientAuthError.createTokenRenewalTimeoutError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenRenewalError.code, exports.ClientAuthErrorMessage.tokenRenewalError.desc);
    };
    ClientAuthError.createInvalidIdTokenError = function (idToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidIdToken.code, exports.ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + idToken);
    };
    // TODO: Is this not a security flaw to send the user the state expected??
    ClientAuthError.createInvalidStateError = function (invalidState, actualState) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidStateError.code, exports.ClientAuthErrorMessage.invalidStateError.desc + " " + invalidState + ", state expected : " + actualState + ".");
    };
    // TODO: Is this not a security flaw to send the user the Nonce expected??
    ClientAuthError.createNonceMismatchError = function (invalidNonce, actualNonce) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nonceMismatchError.code, exports.ClientAuthErrorMessage.nonceMismatchError.desc + " " + invalidNonce + ", nonce expected : " + actualNonce + ".");
    };
    ClientAuthError.createLoginInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.loginProgressError.code, exports.ClientAuthErrorMessage.loginProgressError.desc);
    };
    ClientAuthError.createAcquireTokenInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.acquireTokenProgressError.code, exports.ClientAuthErrorMessage.acquireTokenProgressError.desc);
    };
    ClientAuthError.createUserCancelledError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userCancelledError.code, exports.ClientAuthErrorMessage.userCancelledError.desc);
    };
    ClientAuthError.createErrorInCallbackFunction = function (errorDesc) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.callbackError.code, exports.ClientAuthErrorMessage.callbackError.desc + " " + errorDesc + ".");
    };
    ClientAuthError.createUserLoginRequiredError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userLoginRequiredError.code, exports.ClientAuthErrorMessage.userLoginRequiredError.desc);
    };
    ClientAuthError.createUserDoesNotExistError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userDoesNotExistError.code, exports.ClientAuthErrorMessage.userDoesNotExistError.desc);
    };
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoDecodingError.code, exports.ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createClientInfoNotPopulatedError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.code, exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code, exports.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
    };
    ClientAuthError.createIdTokenParsingError = function (caughtParsingError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.idTokenNotParsed.code, exports.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + caughtParsingError);
    };
    ClientAuthError.createTokenEncodingError = function (incorrectlyEncodedToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenEncodingError.code, exports.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + incorrectlyEncodedToken);
    };
    ClientAuthError.createInvalidInteractionTypeError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidInteractionType.code, exports.ClientAuthErrorMessage.invalidInteractionType.desc);
    };
    return ClientAuthError;
}(AuthError_1.AuthError));
exports.ClientAuthError = ClientAuthError;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
exports.AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    }
};
/**
 * General error class thrown by the MSAL.js library.
 */
var AuthError = /** @class */ (function (_super) {
    tslib_1.__extends(AuthError, _super);
    function AuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorMessage) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode;
        _this.errorMessage = errorMessage;
        _this.name = "AuthError";
        return _this;
    }
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(exports.AuthErrorMessage.unexpectedError.code, exports.AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    return AuthError;
}(Error));
exports.AuthError = AuthError;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ClientConfigurationError_1 = __webpack_require__(5);
var XHRClient_1 = __webpack_require__(18);
var UrlUtils_1 = __webpack_require__(4);
/**
 * @hidden
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
})(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
/**
 * @hidden
 */
var Authority = /** @class */ (function () {
    function Authority(authority, validateAuthority) {
        this.IsValidationEnabled = validateAuthority;
        this.CanonicalAuthority = authority;
        this.validateAsUri();
    }
    Object.defineProperty(Authority.prototype, "Tenant", {
        get: function () {
            return this.CanonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.Issuer.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Authority.prototype.validateResolved = function () {
        if (!this.tenantDiscoveryResponse) {
            throw "Please call ResolveEndpointsAsync first";
        }
    };
    Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this.canonicalAuthority;
        },
        set: function (url) {
            this.canonicalAuthority = UrlUtils_1.UrlUtils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
        get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
                this.canonicalAuthorityUrlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(this.CanonicalAuthority);
            }
            return this.canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
        /**
         * // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
         */
        get: function () {
            return this.CanonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Given a string, validate that it is of the form https://domain/path
     */
    Authority.prototype.validateAsUri = function () {
        var components;
        try {
            components = this.CanonicalAuthorityUrlComponents;
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInsecure;
        }
        if (!components.PathSegments || components.PathSegments.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInvalidPath;
        }
    };
    /**
     * Calls the OIDC endpoint and returns the response
     */
    Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint) {
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(openIdConfigurationEndpoint, "GET", /* enableCaching: */ true)
            .then(function (response) {
            return {
                AuthorizationEndpoint: response.authorization_endpoint,
                EndSessionEndpoint: response.end_session_endpoint,
                Issuer: response.issuer
            };
        });
    };
    /**
     * Returns a promise.
     * Checks to see if the authority is in the cache
     * Discover endpoints via openid-configuration
     * If successful, caches the endpoint for later use in OIDC
     */
    Authority.prototype.resolveEndpointsAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var openIdConfigurationEndpointResponse, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.GetOpenIdConfigurationEndpointAsync()];
                    case 1:
                        openIdConfigurationEndpointResponse = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.DiscoverEndpoints(openIdConfigurationEndpointResponse)];
                    case 2:
                        _a.tenantDiscoveryResponse = _b.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return Authority;
}());
exports.Authority = Authority;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_NAME_PREFIX = "msal.";
exports.EVENT_NAME_KEY = "event_name";
exports.START_TIME_KEY = "start_time";
exports.ELAPSED_TIME_KEY = "elapsed_time";
exports.TELEMETRY_BLOB_EVENT_NAMES = {
    MsalCorrelationIdConstStrKey: "Microsoft.MSAL.correlation_id",
    ApiTelemIdConstStrKey: "msal.api_telem_id",
    ApiIdConstStrKey: "msal.api_id",
    BrokerAppConstStrKey: "Microsoft_MSAL_broker_app",
    CacheEventCountConstStrKey: "Microsoft_MSAL_cache_event_count",
    HttpEventCountTelemetryBatchKey: "Microsoft_MSAL_http_event_count",
    IdpConstStrKey: "Microsoft_MSAL_idp",
    IsSilentTelemetryBatchKey: "",
    IsSuccessfulConstStrKey: "Microsoft_MSAL_is_successful",
    ResponseTimeConstStrKey: "Microsoft_MSAL_response_time",
    TenantIdConstStrKey: "Microsoft_MSAL_tenant_id",
    UiEventCountTelemetryBatchKey: "Microsoft_MSAL_ui_event_count"
};
// This is used to replace the real tenant in telemetry info
exports.TENANT_PLACEHOLDER = "<tenant>";


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = __webpack_require__(1);
var Constants_1 = __webpack_require__(2);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(localCallback, options) {
        if (options === void 0) { options = {}; }
        /**
         * @hidden
         */
        this.level = LogLevel.Info;
        var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
        this.localCallback = localCallback;
        this.correlationId = correlationId;
        this.level = level;
        this.piiLoggingEnabled = piiLoggingEnabled;
    }
    /**
     * @hidden
     */
    Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
        if ((logLevel > this.level) || (!this.piiLoggingEnabled && containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var log;
        if (!StringUtils_1.StringUtils.isEmpty(this.correlationId)) {
            log = timestamp + ":" + this.correlationId + "-" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        else {
            log = timestamp + ":" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        this.executeCallback(logLevel, log, containsPii);
    };
    /**
     * @hidden
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * @hidden
     */
    Logger.prototype.error = function (message) {
        this.logMessage(LogLevel.Error, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.errorPii = function (message) {
        this.logMessage(LogLevel.Error, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.warning = function (message) {
        this.logMessage(LogLevel.Warning, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.warningPii = function (message) {
        this.logMessage(LogLevel.Warning, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.info = function (message) {
        this.logMessage(LogLevel.Info, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.infoPii = function (message) {
        this.logMessage(LogLevel.Info, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbose = function (message) {
        this.logMessage(LogLevel.Verbose, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbosePii = function (message) {
        this.logMessage(LogLevel.Verbose, message, true);
    };
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled;
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
exports.ServerErrorMessage = {
    serverUnavailable: {
        code: "server_unavailable",
        desc: "Server is temporarily unavailable."
    },
    unknownServerError: {
        code: "unknown_server_error"
    },
};
/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    tslib_1.__extends(ServerError, _super);
    function ServerError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ServerError";
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    ServerError.createServerUnavailableError = function () {
        return new ServerError(exports.ServerErrorMessage.serverUnavailable.code, exports.ServerErrorMessage.serverUnavailable.desc);
    };
    ServerError.createUnknownServerError = function (errorDesc) {
        return new ServerError(exports.ServerErrorMessage.unknownServerError.code, errorDesc);
    };
    return ServerError;
}(AuthError_1.AuthError));
exports.ServerError = ServerError;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AccessTokenKey_1 = __webpack_require__(26);
var AccessTokenValue_1 = __webpack_require__(27);
var ServerRequestParameters_1 = __webpack_require__(28);
var ClientInfo_1 = __webpack_require__(29);
var Constants_1 = __webpack_require__(2);
var IdToken_1 = __webpack_require__(30);
var Storage_1 = __webpack_require__(31);
var Account_1 = __webpack_require__(16);
var ScopeSet_1 = __webpack_require__(13);
var StringUtils_1 = __webpack_require__(1);
var WindowUtils_1 = __webpack_require__(33);
var TokenUtils_1 = __webpack_require__(15);
var TimeUtils_1 = __webpack_require__(34);
var UrlUtils_1 = __webpack_require__(4);
var ResponseUtils_1 = __webpack_require__(35);
var AuthorityFactory_1 = __webpack_require__(36);
var Configuration_1 = __webpack_require__(20);
var ClientConfigurationError_1 = __webpack_require__(5);
var AuthError_1 = __webpack_require__(7);
var ClientAuthError_1 = __webpack_require__(6);
var ServerError_1 = __webpack_require__(11);
var InteractionRequiredAuthError_1 = __webpack_require__(21);
var AuthResponse_1 = __webpack_require__(22);
var TelemetryManager_1 = tslib_1.__importDefault(__webpack_require__(37));
// default authority
var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
/**
 * @hidden
 * @ignore
 * response_type from OpenIDConnect
 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
 * Since we support only implicit flow in this library, we restrict the response_type support to only 'token' and 'id_token'
 *
 */
var ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};
/**
 * UserAgentApplication class
 *
 * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
 */
var UserAgentApplication = /** @class */ (function () {
    /**
     * @constructor
     * Constructor for the UserAgentApplication used to instantiate the UserAgentApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application.
     * You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;.
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     *
     * In Azure B2C, authority is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/&lt;policyName&gt;/
     *
     * @param {@link (Configuration:type)} configuration object for the MSAL UserAgentApplication instance
     */
    function UserAgentApplication(configuration) {
        // callbacks for token/error
        this.authResponseCallback = null;
        this.tokenReceivedCallback = null;
        this.errorReceivedCallback = null;
        // Set the Configuration
        this.config = Configuration_1.buildConfiguration(configuration);
        // Set the callback boolean
        this.redirectCallbacksSet = false;
        this.logger = this.config.system.logger;
        this.clientId = this.config.auth.clientId;
        this.inCookie = this.config.cache.storeAuthStateInCookie;
        this.telemetryManager = this.getTelemetryManagerFromConfig(this.config.system.telemetry, this.clientId);
        // if no authority is passed, set the default: "https://login.microsoftonline.com/common"
        this.authority = this.config.auth.authority || DEFAULT_AUTHORITY;
        // track login and acquireToken in progress
        this.loginInProgress = false;
        this.acquireTokenInProgress = false;
        // cache keys msal - typescript throws an error if any value other than "localStorage" or "sessionStorage" is passed
        try {
            this.cacheStorage = new Storage_1.Storage(this.config.cache.cacheLocation);
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCacheLocationConfigError(this.config.cache.cacheLocation);
        }
        // Initialize window handling code
        window.activeRenewals = {};
        window.renewStates = [];
        window.callbackMappedToRenewStates = {};
        window.promiseMappedToRenewStates = {};
        window.msal = this;
        var urlHash = window.location.hash;
        var urlContainsHash = UrlUtils_1.UrlUtils.urlContainsHash(urlHash);
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular && urlContainsHash && !WindowUtils_1.WindowUtils.isInIframe() && !WindowUtils_1.WindowUtils.isInPopup()) {
            this.handleAuthenticationResponse(urlHash);
        }
    }
    Object.defineProperty(UserAgentApplication.prototype, "authority", {
        /**
         * Method to manage the authority URL.
         *
         * @returns {string} authority
         */
        get: function () {
            return this.authorityInstance.CanonicalAuthority;
        },
        /**
         * setter for the authority URL
         * @param {string} authority
         */
        // If the developer passes an authority, create an instance
        set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.config.auth.validateAuthority);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the current authority instance from the MSAL configuration object
     *
     * @returns {@link Authority} authority instance
     */
    UserAgentApplication.prototype.getAuthorityInstance = function () {
        return this.authorityInstance;
    };
    UserAgentApplication.prototype.handleRedirectCallback = function (authOrTokenCallback, errorReceivedCallback) {
        if (!authOrTokenCallback) {
            this.redirectCallbacksSet = false;
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError(authOrTokenCallback);
        }
        // Set callbacks
        if (errorReceivedCallback) {
            this.tokenReceivedCallback = authOrTokenCallback;
            this.errorReceivedCallback = errorReceivedCallback;
            this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).");
        }
        else {
            this.authResponseCallback = authOrTokenCallback;
        }
        this.redirectCallbacksSet = true;
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular) {
            var cachedHash = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
            if (cachedHash) {
                this.processCallBack(cachedHash, null);
            }
        }
    };
    UserAgentApplication.prototype.authResponseHandler = function (interactionType, response, resolve) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.tokenReceivedCallback(response);
            }
            else if (this.authResponseCallback) {
                this.authResponseCallback(null, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            resolve(response);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    UserAgentApplication.prototype.authErrorHandler = function (interactionType, authErr, response, reject) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.errorReceivedCallback(authErr, response.accountState);
            }
            else {
                this.authResponseCallback(authErr, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            reject(authErr);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    // #endregion
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     */
    UserAgentApplication.prototype.loginRedirect = function (request) {
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, true, request);
    };
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenRedirect = function (request) {
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, false, request);
    };
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param {@link (AuthenticationParameters:type)}
     *
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.loginPopup = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, true, request, resolve, reject);
        });
    };
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.acquireTokenPopup = function (request) {
        var _this = this;
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, false, request, resolve, reject);
        });
    };
    // #region Acquire Token
    /**
     * Use when initiating the login process or when you want to obtain an access_token for your API,
     * either by redirecting the user's browser window to the authorization endpoint or via opening a popup window in the user's browser.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenInteractive = function (interactionType, isLoginCall, request, resolve, reject) {
        var _this = this;
        // If already in progress, do not proceed
        if (this.loginInProgress || this.acquireTokenInProgress) {
            var thrownError = this.loginInProgress ? ClientAuthError_1.ClientAuthError.createLoginInProgressError() : ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError();
            var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request && request.state));
            this.authErrorHandler(interactionType, thrownError, stateOnlyResponse, reject);
            return;
        }
        // if extraScopesToConsent is passed in loginCall, append them to the login request
        var scopes = isLoginCall ? this.appendScopes(request) : request.scopes;
        // Validate and filter scopes (the validate function will throw if validation fails)
        this.validateInputScope(scopes, !isLoginCall);
        // Get the account object if a session exists
        var account = (request && request.account && !isLoginCall) ? request.account : this.getAccount();
        // If no session exists, prompt the user to login.
        if (!account && !ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request)) {
            if (isLoginCall) {
                // extract ADAL id_token if exists
                var adalIdToken = this.extractADALIdToken();
                // silent login if ADAL id_token is retrieved successfully - SSO
                if (adalIdToken && !scopes) {
                    this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                    var tokenRequest = this.buildIDTokenRequest(request);
                    this.silentLogin = true;
                    this.acquireTokenSilent(tokenRequest).then(function (response) {
                        _this.silentLogin = false;
                        _this.logger.info("Unified cache call is successful");
                        _this.authResponseHandler(interactionType, response, resolve);
                        return;
                    }, function (error) {
                        _this.silentLogin = false;
                        _this.logger.error("Error occurred during unified cache ATS: " + error);
                        // proceed to login since ATS failed
                        _this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                    });
                }
                // No ADAL token found, proceed to login
                else {
                    this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                }
            }
            // AcquireToken call, but no account or context given, so throw error
            else {
                this.logger.info("User login is required");
                throw ClientAuthError_1.ClientAuthError.createUserLoginRequiredError();
            }
        }
        // User session exists
        else {
            this.acquireTokenHelper(account, interactionType, isLoginCall, request, scopes, resolve, reject);
        }
    };
    /**
     * @hidden
     * @ignore
     * Helper function to acquireToken
     *
     */
    UserAgentApplication.prototype.acquireTokenHelper = function (account, interactionType, isLoginCall, request, scopes, resolve, reject) {
        var _this = this;
        // Track the acquireToken progress
        if (isLoginCall) {
            this.loginInProgress = true;
        }
        else {
            this.acquireTokenInProgress = true;
        }
        var scope = scopes ? scopes.join(" ").toLowerCase() : this.clientId.toLowerCase();
        var serverAuthenticationRequest;
        var acquireTokenAuthority = (!isLoginCall && request && request.authority) ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority) : this.authorityInstance;
        var popUpWindow;
        if (interactionType === Constants_1.Constants.interactionTypePopup) {
            // Generate a popup window
            popUpWindow = this.openWindow("about:blank", "_blank", 1, this, resolve, reject);
            if (!popUpWindow) {
                // We pass reject in openWindow, we reject there during an error
                return;
            }
        }
        acquireTokenAuthority.resolveEndpointsAsync().then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var responseType, loginStartPage, urlNavigate, hash;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        responseType = isLoginCall ? ResponseTypes.id_token : this.getTokenType(account, scopes, false);
                        if (isLoginCall) {
                            // if the user sets the login start page - angular only??
                            loginStartPage = this.cacheStorage.getItem(Constants_1.Constants.angularLoginRequest);
                            if (!loginStartPage || loginStartPage === "") {
                                loginStartPage = window.location.href;
                            }
                            else {
                                this.cacheStorage.setItem(Constants_1.Constants.angularLoginRequest, "");
                            }
                        }
                        serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, this.clientId, scopes, responseType, this.getRedirectUri(), request && request.state);
                        this.updateCacheEntries(serverAuthenticationRequest, account, loginStartPage);
                        // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
                        serverAuthenticationRequest.populateQueryParams(account, request);
                        urlNavigate = UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest) + Constants_1.Constants.response_mode_fragment;
                        // set state in cache
                        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                            if (!isLoginCall) {
                                this.cacheStorage.setItem(Constants_1.Constants.stateAcquireToken, serverAuthenticationRequest.state, this.inCookie);
                            }
                        }
                        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
                            window.renewStates.push(serverAuthenticationRequest.state);
                            window.requestType = isLoginCall ? Constants_1.Constants.login : Constants_1.Constants.renewToken;
                            // Register callback to capture results from server
                            this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
                        }
                        else {
                            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
                        }
                        // prompt user for interaction
                        this.navigateWindow(urlNavigate, popUpWindow);
                        if (!popUpWindow) return [3 /*break*/, 2];
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorWindowForHash(popUpWindow, this.config.system.loadFrameTimeout)];
                    case 1:
                        hash = _a.sent();
                        if (hash) {
                            this.handleAuthenticationResponse(hash);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); }).catch(function (err) {
            _this.logger.warning("could not resolve endpoints");
            _this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString), AuthResponse_1.buildResponseStateOnly(request.state), reject);
            if (popUpWindow) {
                popUpWindow.close();
            }
        });
    };
    /**
     * Use this function to obtain a token before every call to the API / resource provider
     *
     * MSAL return's a cached token when available
     * Or it send's a request to the STS to obtain a new token using a hidden iframe.
     *
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     *
     */
    UserAgentApplication.prototype.acquireTokenSilent = function (request) {
        var _this = this;
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        return new Promise(function (resolve, reject) {
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(request.scopes, true);
            var scope = request.scopes.join(" ").toLowerCase();
            // if the developer passes an account, give that account the priority
            var account = request.account || _this.getAccount();
            // extract if there is an adalIdToken stashed in the cache
            var adalIdToken = _this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
            // if there is no account logged in and no login_hint/sid is passed in the request
            if (!account && !(request.sid || request.loginHint) && StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                _this.logger.info("User login is required");
                return reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
            var responseType = _this.getTokenType(account, request.scopes, true);
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority), _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request && request.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            if (ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request) || account) {
                serverAuthenticationRequest.populateQueryParams(account, request);
            }
            // if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
            else if (!account && !StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                // if adalIdToken exists, extract the SSO info from the same
                var adalIdTokenObject = TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
                _this.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                serverAuthenticationRequest.populateQueryParams(account, null, adalIdTokenObject);
            }
            var userContainedClaims = request.claimsRequest || serverAuthenticationRequest.claimsValue;
            var authErr;
            var cacheResultResponse;
            if (!userContainedClaims && !request.forceRefresh) {
                try {
                    cacheResultResponse = _this.getCachedToken(serverAuthenticationRequest, account);
                }
                catch (e) {
                    authErr = e;
                }
            }
            // resolve/reject based on cacheResult
            if (cacheResultResponse) {
                _this.logger.info("Token is already in cache for scope:" + scope);
                resolve(cacheResultResponse);
                return null;
            }
            else if (authErr) {
                _this.logger.infoPii(authErr.errorCode + ":" + authErr.errorMessage);
                reject(authErr);
                return null;
            }
            // else proceed with login
            else {
                var logMessage = void 0;
                if (userContainedClaims) {
                    logMessage = "Skipped cache lookup since claims were given.";
                }
                else if (request.forceRefresh) {
                    logMessage = "Skipped cache lookup since request.forceRefresh option was set to true";
                }
                else {
                    logMessage = "Token is not in cache for scope:" + scope;
                }
                _this.logger.verbose(logMessage);
                // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
                if (!serverAuthenticationRequest.authorityInstance) {
                    serverAuthenticationRequest.authorityInstance = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority) : _this.authorityInstance;
                }
                // cache miss
                return serverAuthenticationRequest.authorityInstance.resolveEndpointsAsync()
                    .then(function () {
                    /*
                     * refresh attempt with iframe
                     * Already renewing for this scope, callback when we get the token.
                     */
                    if (window.activeRenewals[scope]) {
                        _this.logger.verbose("Renew token for scope: " + scope + " is in progress. Registering callback");
                        // Active renewals contains the state for each renewal.
                        _this.registerCallback(window.activeRenewals[scope], scope, resolve, reject);
                    }
                    else {
                        if (request.scopes && request.scopes.indexOf(_this.clientId) > -1 && request.scopes.length === 1) {
                            /*
                             * App uses idToken to send to api endpoints
                             * Default scope is tracked as clientId to store this token
                             */
                            _this.logger.verbose("renewing idToken");
                            _this.silentLogin = true;
                            _this.renewIdToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                        else {
                            // renew access token
                            _this.logger.verbose("renewing accesstoken");
                            _this.renewToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                    }
                }).catch(function (err) {
                    _this.logger.warning("could not resolve endpoints");
                    reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString()));
                    return null;
                });
            }
        });
    };
    // #endregion
    // #region Popup Window Creation
    /**
     * @hidden
     *
     * Used to send the user to the redirect_uri after authentication is complete. The user's bearer token is attached to the URI fragment as an id_token/access_token field.
     * This function also closes the popup window after redirection.
     *
     * @param urlNavigate
     * @param title
     * @param interval
     * @param instance
     * @param resolve
     * @param reject
     * @ignore
     */
    UserAgentApplication.prototype.openWindow = function (urlNavigate, title, interval, instance, resolve, reject) {
        var _this = this;
        // Generate a popup window
        var popupWindow;
        try {
            popupWindow = this.openPopup(urlNavigate, title, Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
        }
        catch (e) {
            instance.loginInProgress = false;
            instance.acquireTokenInProgress = false;
            this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code);
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
            if (reject) {
                reject(ClientAuthError_1.ClientAuthError.createPopupWindowError());
            }
            return null;
        }
        // Push popup window handle onto stack for tracking
        WindowUtils_1.WindowUtils.trackPopup(popupWindow);
        var pollTimer = window.setInterval(function () {
            // If popup closed or login in progress, cancel login
            if (popupWindow && popupWindow.closed && (instance.loginInProgress || instance.acquireTokenInProgress)) {
                if (reject) {
                    reject(ClientAuthError_1.ClientAuthError.createUserCancelledError());
                }
                window.clearInterval(pollTimer);
                if (_this.config.framework.isAngular) {
                    _this.broadcast("msal:popUpClosed", ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.code + Constants_1.Constants.resourceDelimiter + ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.desc);
                    return;
                }
                instance.loginInProgress = false;
                instance.acquireTokenInProgress = false;
            }
            try {
                var popUpWindowLocation = popupWindow.location;
                // If the popup hash changes, close the popup window
                if (popUpWindowLocation.href.indexOf(_this.getRedirectUri()) !== -1) {
                    window.clearInterval(pollTimer);
                    instance.loginInProgress = false;
                    instance.acquireTokenInProgress = false;
                    _this.logger.info("Closing popup window");
                    // TODO: Check how this can be extracted for any framework specific code?
                    if (_this.config.framework.isAngular) {
                        _this.broadcast("msal:popUpHashChanged", popUpWindowLocation.hash);
                        WindowUtils_1.WindowUtils.closePopups();
                    }
                }
            }
            catch (e) {
                /*
                 * Cross Domain url check error.
                 * Will be thrown until AAD redirects the user back to the app"s root page with the token.
                 * No need to log or throw this error as it will create unnecessary traffic.
                 */
            }
        }, interval);
        return popupWindow;
    };
    /**
     * @hidden
     *
     * Configures popup window for login.
     *
     * @param urlNavigate
     * @param title
     * @param popUpWidth
     * @param popUpHeight
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
        try {
            /**
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top = ((height / 2) - (popUpHeight / 2)) + winTop;
            // open the window
            var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top + ", left=" + left);
            if (!popupWindow) {
                throw ClientAuthError_1.ClientAuthError.createPopupWindowError();
            }
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            return popupWindow;
        }
        catch (e) {
            this.logger.error("error opening popup " + e.message);
            this.loginInProgress = false;
            this.acquireTokenInProgress = false;
            throw ClientAuthError_1.ClientAuthError.createPopupWindowError(e.toString());
        }
    };
    // #endregion
    // #region Iframe Management
    /**
     * @hidden
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
     */
    UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, scope) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var expectedState, iframe, hash;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expectedState = window.activeRenewals[scope];
                        this.logger.verbose("Set loading state to pending for: " + scope + ":" + expectedState);
                        this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusInProgress);
                        setTimeout(function () {
                            if (_this.cacheStorage.getItem(Constants_1.Constants.renewStatus + expectedState) === Constants_1.Constants.tokenRenewStatusInProgress) {
                                // fail the iframe session if it's in pending state
                                _this.logger.verbose("Loading frame has timed out after: " + (_this.config.system.loadFrameTimeout / 1000) + " seconds for scope " + scope + ":" + expectedState);
                                // Error after timeout
                                if (expectedState && window.callbackMappedToRenewStates[expectedState]) {
                                    window.callbackMappedToRenewStates[expectedState](null, ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError());
                                }
                                _this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusCancelled);
                            }
                        }, this.config.system.loadFrameTimeout);
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.loadFrame(urlNavigate, frameName, this.config.system.navigateFrameWait, this.logger)];
                    case 1:
                        iframe = _a.sent();
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorWindowForHash(iframe.contentWindow, this.config.system.loadFrameTimeout)];
                    case 2:
                        hash = _a.sent();
                        if (hash) {
                            this.handleAuthenticationResponse(hash);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // #endregion
    // #region General Helpers
    /**
     * @hidden
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
     */
    UserAgentApplication.prototype.navigateWindow = function (urlNavigate, popupWindow) {
        // Navigate if valid URL
        if (urlNavigate && !StringUtils_1.StringUtils.isEmpty(urlNavigate)) {
            var navigateWindow = popupWindow ? popupWindow : window;
            var logMessage = popupWindow ? "Navigated Popup window to:" + urlNavigate : "Navigate to:" + urlNavigate;
            this.logger.infoPii(logMessage);
            navigateWindow.location.replace(urlNavigate);
        }
        else {
            this.logger.info("Navigate url is empty");
            throw AuthError_1.AuthError.createUnexpectedError("Navigate url is empty");
        }
    };
    /**
     * @hidden
     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
     * @param {string} expectedState - Unique state identifier (guid).
     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {Function} resolve - The resolve function of the promise object.
     * @param {Function} reject - The reject function of the promise object.
     * @ignore
     */
    UserAgentApplication.prototype.registerCallback = function (expectedState, scope, resolve, reject) {
        var _this = this;
        // track active renewals
        window.activeRenewals[scope] = expectedState;
        // initialize callbacks mapped array
        if (!window.promiseMappedToRenewStates[expectedState]) {
            window.promiseMappedToRenewStates[expectedState] = [];
        }
        // indexing on the current state, push the callback params to callbacks mapped
        window.promiseMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
        // Store the server response in the current window??
        if (!window.callbackMappedToRenewStates[expectedState]) {
            window.callbackMappedToRenewStates[expectedState] =
                function (response, error) {
                    // reset active renewals
                    window.activeRenewals[scope] = null;
                    // for all promiseMappedtoRenewStates for a given 'state' - call the reject/resolve with error/token respectively
                    for (var i = 0; i < window.promiseMappedToRenewStates[expectedState].length; ++i) {
                        try {
                            if (error) {
                                window.promiseMappedToRenewStates[expectedState][i].reject(error);
                            }
                            else if (response) {
                                window.promiseMappedToRenewStates[expectedState][i].resolve(response);
                            }
                            else {
                                throw AuthError_1.AuthError.createUnexpectedError("Error and response are both null");
                            }
                        }
                        catch (e) {
                            _this.logger.warning(e);
                        }
                    }
                    // reset
                    window.promiseMappedToRenewStates[expectedState] = null;
                    window.callbackMappedToRenewStates[expectedState] = null;
                };
        }
    };
    // #endregion
    // #region Logout
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     */
    UserAgentApplication.prototype.logout = function () {
        var _this = this;
        this.clearCache();
        this.account = null;
        var logout = "";
        if (this.getPostLogoutRedirectUri()) {
            logout = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
        }
        this.authorityInstance.resolveEndpointsAsync().then(function (authority) {
            var urlNavigate = authority.EndSessionEndpoint
                ? authority.EndSessionEndpoint + "?" + logout
                : _this.authority + "oauth2/v2.0/logout?" + logout;
            _this.navigateWindow(urlNavigate);
        });
    };
    /**
     * @hidden
     * Clear all access tokens in the cache.
     * @ignore
     */
    UserAgentApplication.prototype.clearCache = function () {
        window.renewStates = [];
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            this.cacheStorage.removeItem(JSON.stringify(accessTokenItems[i].key));
        }
        this.cacheStorage.resetCacheItems();
        this.cacheStorage.clearCookie();
    };
    /**
     * @hidden
     * Clear a given access token from the cache.
     *
     * @param accessToken
     */
    UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            var token = accessTokenItems[i];
            if (token.value.accessToken === accessToken) {
                this.cacheStorage.removeItem(JSON.stringify(token.key));
            }
        }
    };
    // #endregion
    // #region Response
    /**
     * @hidden
     * @ignore
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
     */
    UserAgentApplication.prototype.isCallback = function (hash) {
        this.logger.info("isCallback will be deprecated in favor of urlContainsHash in MSAL.js v2.0.");
        return UrlUtils_1.UrlUtils.urlContainsHash(hash);
    };
    /**
     * @hidden
     * Used to call the constructor callback with the token/error
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.processCallBack = function (hash, stateInfo, parentCallback) {
        this.logger.info("Processing the callback from redirect response");
        // get the state info from the hash
        if (!stateInfo) {
            stateInfo = this.getResponseState(hash);
        }
        var response;
        var authErr;
        // Save the token info from the hash
        try {
            response = this.saveTokenFromHash(hash, stateInfo);
        }
        catch (err) {
            authErr = err;
        }
        // remove hash from the cache
        this.cacheStorage.removeItem(Constants_1.Constants.urlHash);
        try {
            // Clear the cookie in the hash
            this.cacheStorage.clearCookie();
            var accountState = this.getAccountState(stateInfo.state);
            if (response) {
                if ((stateInfo.requestType === Constants_1.Constants.renewToken) || response.accessToken) {
                    if (window.parent !== window) {
                        this.logger.verbose("Window is in iframe, acquiring token silently");
                    }
                    else {
                        this.logger.verbose("acquiring token interactive in progress");
                    }
                    response.tokenType = Constants_1.Constants.accessToken;
                }
                else if (stateInfo.requestType === Constants_1.Constants.login) {
                    response.tokenType = Constants_1.Constants.idToken;
                }
                if (!parentCallback) {
                    this.authResponseHandler(Constants_1.Constants.interactionTypeRedirect, response);
                    return;
                }
            }
            else if (!parentCallback) {
                this.authErrorHandler(Constants_1.Constants.interactionTypeRedirect, authErr, AuthResponse_1.buildResponseStateOnly(accountState));
                return;
            }
            parentCallback(response, authErr);
        }
        catch (err) {
            this.logger.error("Error occurred in token received callback function: " + err);
            throw ClientAuthError_1.ClientAuthError.createErrorInCallbackFunction(err.toString());
        }
    };
    /**
     * @hidden
     * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
     * calls the registered callbacks in case of redirect or resolves the promises with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
        // retrieve the hash
        var locationHash = hash || window.location.hash;
        // Check if the current flow is popup or hidden iframe
        var iframeWithHash = WindowUtils_1.WindowUtils.getIframeWithHash(locationHash);
        var popUpWithHash = WindowUtils_1.WindowUtils.getPopUpWithHash(locationHash);
        var isPopupOrIframe = !!(iframeWithHash || popUpWithHash);
        // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
        var stateInfo = this.getResponseState(locationHash);
        var tokenResponseCallback = null;
        this.logger.info("Returned from redirect url");
        // If parent window is the msal instance which opened the current window (iframe)
        if (isPopupOrIframe) {
            tokenResponseCallback = window.callbackMappedToRenewStates[stateInfo.state];
        }
        else {
            // Redirect cases
            tokenResponseCallback = null;
            // if set to navigate to loginRequest page post login
            if (this.config.auth.navigateToLoginRequestUrl) {
                this.cacheStorage.setItem(Constants_1.Constants.urlHash, locationHash);
                if (window.parent === window) {
                    window.location.href = this.cacheStorage.getItem(Constants_1.Constants.loginRequest, this.inCookie);
                }
                return;
            }
            else {
                window.location.hash = "";
            }
            if (!this.redirectCallbacksSet) {
                // We reached this point too early - cache hash, return and process in handleRedirectCallbacks
                this.cacheStorage.setItem(Constants_1.Constants.urlHash, locationHash);
                return;
            }
        }
        this.processCallBack(locationHash, stateInfo, tokenResponseCallback);
        // If current window is opener, close all windows
        if (isPopupOrIframe) {
            WindowUtils_1.WindowUtils.closePopups();
        }
    };
    /**
     * @hidden
     * Creates a stateInfo object from the URL fragment and returns it.
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @ignore
     */
    UserAgentApplication.prototype.getResponseState = function (hash) {
        var parameters = UrlUtils_1.UrlUtils.deserializeHash(hash);
        var stateResponse;
        if (!parameters) {
            throw AuthError_1.AuthError.createUnexpectedError("Hash was not parsed correctly.");
        }
        if (parameters.hasOwnProperty("state")) {
            stateResponse = {
                requestType: Constants_1.Constants.unknown,
                state: parameters.state,
                stateMatch: false
            };
        }
        else {
            throw AuthError_1.AuthError.createUnexpectedError("Hash does not contain state.");
        }
        /*
         * async calls can fire iframe and login request at the same time if developer does not use the API as expected
         * incoming callback needs to be looked up to find the request type
         */
        // loginRedirect
        if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie) || stateResponse.state === this.silentAuthenticationState) { // loginRedirect
            stateResponse.requestType = Constants_1.Constants.login;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // acquireTokenRedirect
        else if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateAcquireToken, this.inCookie)) { // acquireTokenRedirect
            stateResponse.requestType = Constants_1.Constants.renewToken;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // external api requests may have many renewtoken requests for different resource
        if (!stateResponse.stateMatch) {
            stateResponse.requestType = window.requestType;
            var statesInParentContext = window.renewStates;
            for (var i = 0; i < statesInParentContext.length; i++) {
                if (statesInParentContext[i] === stateResponse.state) {
                    stateResponse.stateMatch = true;
                    break;
                }
            }
        }
        return stateResponse;
    };
    // #endregion
    // #region Token Processing (Extract to TokenProcessing.ts)
    /**
     * @hidden
     * Used to get token for the specified set of scopes from the cache
     * @param {@link ServerRequestParameters} - Request sent to the STS to obtain an id_token/access_token
     * @param {Account} account - Account for which the scopes were requested
     */
    UserAgentApplication.prototype.getCachedToken = function (serverAuthenticationRequest, account) {
        var accessTokenCacheItem = null;
        var scopes = serverAuthenticationRequest.scopes;
        // filter by clientId and account
        var tokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, account ? account.homeAccountIdentifier : null);
        // No match found after initial filtering
        if (tokenCacheItems.length === 0) {
            return null;
        }
        var filteredItems = [];
        // if no authority passed
        if (!serverAuthenticationRequest.authority) {
            // filter by scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes)) {
                    filteredItems.push(cacheItem);
                }
            }
            // if only one cached token found
            if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.config.auth.validateAuthority);
            }
            // if more than one cached token is found
            else if (filteredItems.length > 1) {
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
            // if no match found, check if there was a single authority used
            else {
                var authorityList = this.getUniqueAuthority(tokenCacheItems, "authority");
                if (authorityList.length > 1) {
                    throw ClientAuthError_1.ClientAuthError.createMultipleAuthoritiesInCacheError(scopes.toString());
                }
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(authorityList[0], this.config.auth.validateAuthority);
            }
        }
        // if an authority is passed in the API
        else {
            // filter by authority and scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes) && UrlUtils_1.UrlUtils.CanonicalizeUri(cacheItem.key.authority) === serverAuthenticationRequest.authority) {
                    filteredItems.push(cacheItem);
                }
            }
            // no match
            if (filteredItems.length === 0) {
                return null;
            }
            // if only one cachedToken Found
            else if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
            }
            else {
                // if more than one cached token is found
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
        }
        if (accessTokenCacheItem != null) {
            var expired = Number(accessTokenCacheItem.value.expiresIn);
            // If expiration is within offset, it will force renew
            var offset = this.config.system.tokenRenewalOffsetSeconds || 300;
            if (expired && (expired > TimeUtils_1.TimeUtils.now() + offset)) {
                var idTokenObj = new IdToken_1.IdToken(accessTokenCacheItem.value.idToken);
                if (!account) {
                    account = this.getAccount();
                    if (!account) {
                        throw AuthError_1.AuthError.createUnexpectedError("Account should not be null here.");
                    }
                }
                var aState = this.getAccountState(serverAuthenticationRequest.state);
                var response = {
                    uniqueId: "",
                    tenantId: "",
                    tokenType: (accessTokenCacheItem.value.idToken === accessTokenCacheItem.value.accessToken) ? Constants_1.Constants.idToken : Constants_1.Constants.accessToken,
                    idToken: idTokenObj,
                    idTokenClaims: idTokenObj.claims,
                    accessToken: accessTokenCacheItem.value.accessToken,
                    scopes: accessTokenCacheItem.key.scopes.split(" "),
                    expiresOn: new Date(expired * 1000),
                    account: account,
                    accountState: aState
                };
                ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                return response;
            }
            else {
                this.cacheStorage.removeItem(JSON.stringify(filteredItems[0].key));
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * @hidden
     * Used to get a unique list of authorities from the cache
     * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAuthority = function (accessTokenCacheItems, property) {
        var authorityList = [];
        var flags = [];
        accessTokenCacheItems.forEach(function (element) {
            if (element.key.hasOwnProperty(property) && (flags.indexOf(element.key[property]) === -1)) {
                flags.push(element.key[property]);
                authorityList.push(element.key[property]);
            }
        });
        return authorityList;
    };
    /**
     * @hidden
     * Check if ADAL id_token exists and return if exists.
     *
     */
    UserAgentApplication.prototype.extractADALIdToken = function () {
        var adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
        if (!StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
            return TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
        }
        return null;
    };
    /**
     * @hidden
     * Acquires access token using a hidden iframe.
     * @ignore
     */
    UserAgentApplication.prototype.renewToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        var scope = scopes.join(" ").toLowerCase();
        this.logger.verbose("renewToken is called for scope:" + scope);
        var frameName = "msalRenewFrame" + scope;
        var frameHandle = WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew token Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        window.renewStates.push(serverAuthenticationRequest.state);
        window.requestType = Constants_1.Constants.renewToken;
        this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, frameName, scope);
    };
    /**
     * @hidden
     * Renews idtoken for app's own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
     */
    UserAgentApplication.prototype.renewIdToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        this.logger.info("renewidToken is called");
        var frameName = "msalIdTokenFrame";
        var frameHandle = WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew Idtoken Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        if (this.silentLogin) {
            window.requestType = Constants_1.Constants.login;
            this.silentAuthenticationState = serverAuthenticationRequest.state;
        }
        else {
            window.requestType = Constants_1.Constants.renewToken;
            window.renewStates.push(serverAuthenticationRequest.state);
        }
        // note: scope here is clientId
        this.registerCallback(serverAuthenticationRequest.state, this.clientId, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, frameName, this.clientId);
    };
    /**
     * @hidden
     *
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
     * @param {string} authority authority received in the redirect response from AAD.
     * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @param {Account} account account object for which scopes are consented for. The default account is the logged in account.
     * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
     * @param {IdToken} idToken idToken received as part of the response.
     * @ignore
     * @private
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveAccessToken = function (response, authority, parameters, clientInfo, idTokenObj) {
        var scope;
        var accessTokenResponse = tslib_1.__assign({}, response);
        var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
        var expiration;
        // if the response contains "scope"
        if (parameters.hasOwnProperty("scope")) {
            // read the scopes
            scope = parameters["scope"];
            var consentedScopes = scope.split(" ");
            // retrieve all access tokens from the cache, remove the dup scores
            var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, authority);
            for (var i = 0; i < accessTokenCacheItems.length; i++) {
                var accessTokenCacheItem = accessTokenCacheItems[i];
                if (accessTokenCacheItem.key.homeAccountIdentifier === response.account.homeAccountIdentifier) {
                    var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                    if (ScopeSet_1.ScopeSet.isIntersectingScopes(cachedScopes, consentedScopes)) {
                        this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                    }
                }
            }
            // Generate and cache accessTokenKey and accessTokenValue
            var expiresIn = TimeUtils_1.TimeUtils.parseExpiresIn(parameters[Constants_1.Constants.expiresIn]);
            expiration = TimeUtils_1.TimeUtils.now() + expiresIn;
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.accessToken], idTokenObj.rawIdToken, expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.accessToken];
            accessTokenResponse.scopes = consentedScopes;
        }
        // if the response does not contain "scope" - scope is usually client_id and the token will be id_token
        else {
            scope = this.clientId;
            // Generate and cache accessTokenKey and accessTokenValue
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            expiration = Number(idTokenObj.expiration);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.idToken], parameters[Constants_1.Constants.idToken], expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.scopes = [scope];
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.idToken];
        }
        if (expiration) {
            accessTokenResponse.expiresOn = new Date(expiration * 1000);
        }
        else {
            this.logger.error("Could not parse expiresIn parameter");
        }
        return accessTokenResponse;
    };
    /**
     * @hidden
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
     * @ignore
     */
    UserAgentApplication.prototype.saveTokenFromHash = function (hash, stateInfo) {
        this.logger.info("State status:" + stateInfo.stateMatch + "; Request type:" + stateInfo.requestType);
        this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
        this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
        var response = {
            uniqueId: "",
            tenantId: "",
            tokenType: "",
            idToken: null,
            idTokenClaims: null,
            accessToken: null,
            scopes: [],
            expiresOn: null,
            account: null,
            accountState: "",
        };
        var error;
        var hashParams = UrlUtils_1.UrlUtils.deserializeHash(hash);
        var authorityKey = "";
        var acquireTokenAccountKey = "";
        var idTokenObj = null;
        // If server returns an error
        if (hashParams.hasOwnProperty(Constants_1.Constants.errorDescription) || hashParams.hasOwnProperty(Constants_1.Constants.error)) {
            this.logger.infoPii("Error :" + hashParams[Constants_1.Constants.error] + "; Error description:" + hashParams[Constants_1.Constants.errorDescription]);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, hashParams[Constants_1.Constants.error]);
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, hashParams[Constants_1.Constants.errorDescription]);
            // login
            if (stateInfo.requestType === Constants_1.Constants.login) {
                this.loginInProgress = false;
                this.cacheStorage.setItem(Constants_1.Constants.loginError, hashParams[Constants_1.Constants.errorDescription] + ":" + hashParams[Constants_1.Constants.error]);
                authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
            }
            // acquireToken
            if (stateInfo.requestType === Constants_1.Constants.renewToken) {
                this.acquireTokenInProgress = false;
                authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                var account = this.getAccount();
                var accountId = void 0;
                if (account && !StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
                    accountId = account.homeAccountIdentifier;
                }
                else {
                    accountId = Constants_1.Constants.no_account;
                }
                acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, stateInfo.state);
            }
            var _a = Constants_1.Constants.error, hashErr = hashParams[_a], _b = Constants_1.Constants.errorDescription, hashErrDesc = hashParams[_b];
            if (InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErr) ||
                InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErrDesc)) {
                error = new InteractionRequiredAuthError_1.InteractionRequiredAuthError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
            else {
                error = new ServerError_1.ServerError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
        }
        // If the server returns "Success"
        else {
            // Verify the state from redirect and record tokens to storage if exists
            if (stateInfo.stateMatch) {
                this.logger.info("State is right");
                if (hashParams.hasOwnProperty(Constants_1.Constants.sessionState)) {
                    this.cacheStorage.setItem(Constants_1.Constants.msalSessionState, hashParams[Constants_1.Constants.sessionState]);
                }
                response.accountState = this.getAccountState(stateInfo.state);
                var clientInfo = "";
                // Process access_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.accessToken)) {
                    this.logger.info("Fragment has access token");
                    this.acquireTokenInProgress = false;
                    // retrieve the id_token from response if present
                    if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                        idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                        response.idToken = idTokenObj;
                        response.idTokenClaims = idTokenObj.claims;
                    }
                    else {
                        idTokenObj = new IdToken_1.IdToken(this.cacheStorage.getItem(Constants_1.Constants.idTokenKey));
                        response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    }
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    // retrieve client_info - if it is not found, generate the uid and utid from idToken
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                        throw ClientAuthError_1.ClientAuthError.createClientInfoNotPopulatedError("ClientInfo not received in the response from the server");
                    }
                    response.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    var accountKey = void 0;
                    if (response.account && !StringUtils_1.StringUtils.isEmpty(response.account.homeAccountIdentifier)) {
                        accountKey = response.account.homeAccountIdentifier;
                    }
                    else {
                        accountKey = Constants_1.Constants.no_account;
                    }
                    acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountKey, stateInfo.state);
                    var acquireTokenAccountKey_noaccount = Storage_1.Storage.generateAcquireTokenAccountKey(Constants_1.Constants.no_account, stateInfo.state);
                    var cachedAccount = this.cacheStorage.getItem(acquireTokenAccountKey);
                    var acquireTokenAccount = void 0;
                    // Check with the account in the Cache
                    if (!StringUtils_1.StringUtils.isEmpty(cachedAccount)) {
                        acquireTokenAccount = JSON.parse(cachedAccount);
                        if (response.account && acquireTokenAccount && Account_1.Account.compareAccounts(response.account, acquireTokenAccount)) {
                            response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                            this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                        }
                        else {
                            this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request");
                        }
                    }
                    else if (!StringUtils_1.StringUtils.isEmpty(this.cacheStorage.getItem(acquireTokenAccountKey_noaccount))) {
                        response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                    }
                }
                // Process id_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                    this.logger.info("Fragment has id token");
                    // login no longer in progress
                    this.loginInProgress = false;
                    // set the idToken
                    idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                    response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                    }
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    this.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    response.account = this.account;
                    if (idTokenObj && idTokenObj.nonce) {
                        // check nonce integrity if idToken has nonce - throw an error if not matched
                        if (idTokenObj.nonce !== this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie)) {
                            this.account = null;
                            this.cacheStorage.setItem(Constants_1.Constants.loginError, "Nonce Mismatch. Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            this.logger.error("Nonce Mismatch.Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            error = ClientAuthError_1.ClientAuthError.createNonceMismatchError(this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie), idTokenObj.nonce);
                        }
                        // Save the token
                        else {
                            this.cacheStorage.setItem(Constants_1.Constants.idTokenKey, hashParams[Constants_1.Constants.idToken]);
                            this.cacheStorage.setItem(Constants_1.Constants.msalClientInfo, clientInfo);
                            // Save idToken as access token for app itself
                            this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                        }
                    }
                    else {
                        authorityKey = stateInfo.state;
                        acquireTokenAccountKey = stateInfo.state;
                        this.logger.error("Invalid id_token received in the response");
                        error = ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(idTokenObj);
                        this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
                        this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
                    }
                }
            }
            // State mismatch - unexpected/invalid state
            else {
                authorityKey = stateInfo.state;
                acquireTokenAccountKey = stateInfo.state;
                var expectedState = this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie);
                this.logger.error("State Mismatch.Expected State: " + expectedState + "," + "Actual State: " + stateInfo.state);
                error = ClientAuthError_1.ClientAuthError.createInvalidStateError(stateInfo.state, expectedState);
                this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
                this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
            }
        }
        this.cacheStorage.setItem(Constants_1.Constants.renewStatus + stateInfo.state, Constants_1.Constants.tokenRenewStatusCompleted);
        this.cacheStorage.removeAcquireTokenEntries(stateInfo.state);
        // this is required if navigateToLoginRequestUrl=false
        if (this.inCookie) {
            this.cacheStorage.setItemCookie(authorityKey, "", -1);
            this.cacheStorage.clearCookie();
        }
        if (error) {
            throw error;
        }
        if (!response) {
            throw AuthError_1.AuthError.createUnexpectedError("Response is null");
        }
        return response;
    };
    /**
     * Set Authority when saving Token from the hash
     * @param state
     * @param inCookie
     * @param cacheStorage
     * @param idTokenObj
     * @param response
     */
    UserAgentApplication.prototype.populateAuthority = function (state, inCookie, cacheStorage, idTokenObj) {
        var authorityKey = Storage_1.Storage.generateAuthorityKey(state);
        var cachedAuthority = cacheStorage.getItem(authorityKey, inCookie);
        // retrieve the authority from cache and replace with tenantID
        return StringUtils_1.StringUtils.isEmpty(cachedAuthority) ? cachedAuthority : UrlUtils_1.UrlUtils.replaceTenantPath(cachedAuthority, idTokenObj.tenantId);
    };
    /* tslint:enable:no-string-literal */
    // #endregion
    // #region Account
    /**
     * Returns the signed in account
     * (the account object is created at the time of successful login)
     * or null when no state is found
     * @returns {@link Account} - the account object stored in MSAL
     */
    UserAgentApplication.prototype.getAccount = function () {
        // if a session already exists, get the account from the session
        if (this.account) {
            return this.account;
        }
        // frame is used to get idToken and populate the account for the given session
        var rawIdToken = this.cacheStorage.getItem(Constants_1.Constants.idTokenKey);
        var rawClientInfo = this.cacheStorage.getItem(Constants_1.Constants.msalClientInfo);
        if (!StringUtils_1.StringUtils.isEmpty(rawIdToken) && !StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo);
            this.account = Account_1.Account.createAccount(idToken, clientInfo);
            return this.account;
        }
        // if login not yet done, return null
        return null;
    };
    /**
     * @hidden
     *
     * Extracts state value from the accountState sent with the authentication request.
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getAccountState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return state;
    };
    /**
     * Use to get a list of unique accounts in MSAL cache based on homeAccountIdentifier.
     *
     * @param {@link Array<Account>} Account - all unique accounts in MSAL cache.
     */
    UserAgentApplication.prototype.getAllAccounts = function () {
        var accounts = [];
        var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
            var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.homeAccountIdentifier);
            var account = Account_1.Account.createAccount(idToken, clientInfo);
            accounts.push(account);
        }
        return this.getUniqueAccounts(accounts);
    };
    /**
     * @hidden
     *
     * Used to filter accounts based on homeAccountIdentifier
     * @param {Array<Account>}  Accounts - accounts saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAccounts = function (accounts) {
        if (!accounts || accounts.length <= 1) {
            return accounts;
        }
        var flags = [];
        var uniqueAccounts = [];
        for (var index = 0; index < accounts.length; ++index) {
            if (accounts[index].homeAccountIdentifier && flags.indexOf(accounts[index].homeAccountIdentifier) === -1) {
                flags.push(accounts[index].homeAccountIdentifier);
                uniqueAccounts.push(accounts[index]);
            }
        }
        return uniqueAccounts;
    };
    // #endregion
    // #region Scopes (Extract to Scopes.ts)
    /*
     * Note: "this" dependency in this section is minimal.
     * If pCacheStorage is separated from the class object, or passed as a fn param, scopesUtils.ts can be created
     */
    /**
     * @hidden
     *
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     * @ignore
     */
    UserAgentApplication.prototype.validateInputScope = function (scopes, scopesRequired) {
        if (!scopes) {
            if (scopesRequired) {
                throw ClientConfigurationError_1.ClientConfigurationError.createScopesRequiredError(scopes);
            }
            else {
                return;
            }
        }
        // Check that scopes is an array object (also throws error if scopes == null)
        if (!Array.isArray(scopes)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createScopesNonArrayError(scopes);
        }
        // Check that scopes is not an empty array
        if (scopes.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyScopesArrayError(scopes.toString());
        }
        // Check that clientId is passed as single scope
        if (scopes.indexOf(this.clientId) > -1) {
            if (scopes.length > 1) {
                throw ClientConfigurationError_1.ClientConfigurationError.createClientIdSingleScopeError(scopes.toString());
            }
        }
    };
    /**
     * @hidden
     *
     * Extracts scope value from the state sent with the authentication request.
     * @param {string} state
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getScopeFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /**
     * @ignore
     * Appends extraScopesToConsent if passed
     * @param {@link AuthenticationParameters}
     */
    UserAgentApplication.prototype.appendScopes = function (request) {
        var scopes;
        if (request && request.scopes) {
            if (request.extraScopesToConsent) {
                scopes = request.scopes.concat(request.extraScopesToConsent);
            }
            else {
                scopes = request.scopes;
            }
        }
        return scopes;
    };
    // #endregion
    // #region Angular
    /**
     * @hidden
     *
     * Broadcast messages - Used only for Angular?  *
     * @param eventName
     * @param data
     */
    UserAgentApplication.prototype.broadcast = function (eventName, data) {
        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };
    /**
     * @hidden
     *
     * Helper function to retrieve the cached token
     *
     * @param scopes
     * @param {@link Account} account
     * @param state
     * @return {@link AuthResponse} AuthResponse
     */
    UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, account, state) {
        // Get the current session's account object
        var accountObject = account || this.getAccount();
        if (!accountObject) {
            return null;
        }
        // Construct AuthenticationRequest based on response type
        var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.config.auth.validateAuthority);
        var responseType = this.getTokenType(accountObject, scopes, true);
        var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(newAuthority, this.clientId, scopes, responseType, this.getRedirectUri(), state);
        // get cached token
        return this.getCachedToken(serverAuthenticationRequest, account);
    };
    /**
     * @hidden
     *
     * Get scopes for the Endpoint - Used in Angular to track protected and unprotected resources without interaction from the developer app
     *
     * @param endpoint
     */
    UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
        // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
        if (this.config.framework.unprotectedResources.length > 0) {
            for (var i = 0; i < this.config.framework.unprotectedResources.length; i++) {
                if (endpoint.indexOf(this.config.framework.unprotectedResources[i]) > -1) {
                    return null;
                }
            }
        }
        // process all protected resources and send the matched one
        if (this.config.framework.protectedResourceMap.size > 0) {
            for (var _i = 0, _a = Array.from(this.config.framework.protectedResourceMap.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(key) > -1) {
                    return this.config.framework.protectedResourceMap.get(key);
                }
            }
        }
        /*
         * default resource will be clientid if nothing specified
         * App will use idtoken for calls to itself
         * check if it's staring from http or https, needs to match with app host
         */
        if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (this.getHostFromUri(endpoint) === this.getHostFromUri(this.getRedirectUri())) {
                return new Array(this.clientId);
            }
        }
        else {
            /*
             * in angular level, the url for $http interceptor call could be relative url,
             * if it's relative call, we'll treat it as app backend call.
             */
            return new Array(this.clientId);
        }
        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };
    /**
     * Return boolean flag to developer to help inform if login is in progress
     * @returns {boolean} true/false
     */
    UserAgentApplication.prototype.getLoginInProgress = function () {
        var pendingCallback = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
        if (pendingCallback) {
            return true;
        }
        return this.loginInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param loginInProgress
     */
    UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
        this.loginInProgress = loginInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the status of acquireTokenInProgress
     */
    UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
        return this.acquireTokenInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param acquireTokenInProgress
     */
    UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
        this.acquireTokenInProgress = acquireTokenInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the logger handle
     */
    UserAgentApplication.prototype.getLogger = function () {
        return this.config.system.logger;
    };
    // #endregion
    // #region Getters and Setters
    /**
     *
     * Use to get the redirect uri configured in MSAL or null.
     * Evaluates redirectUri if its a function, otherwise simply returns its value.
     * @returns {string} redirect URL
     *
     */
    UserAgentApplication.prototype.getRedirectUri = function () {
        if (typeof this.config.auth.redirectUri === "function") {
            return this.config.auth.redirectUri();
        }
        return this.config.auth.redirectUri;
    };
    /**
     * Use to get the post logout redirect uri configured in MSAL or null.
     * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     *
     * @returns {string} post logout redirect URL
     */
    UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
        if (typeof this.config.auth.postLogoutRedirectUri === "function") {
            return this.config.auth.postLogoutRedirectUri();
        }
        return this.config.auth.postLogoutRedirectUri;
    };
    /**
     * Use to get the current {@link Configuration} object in MSAL
     *
     * @returns {@link Configuration}
     */
    UserAgentApplication.prototype.getCurrentConfiguration = function () {
        if (!this.config) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError();
        }
        return this.config;
    };
    // #endregion
    // #region String Util (Should be extracted to Utils.ts)
    /**
     * @hidden
     * @ignore
     *
     * extract URI from the host
     *
     * @param {string} URI
     * @returns {string} host from the URI
     */
    UserAgentApplication.prototype.getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
        extractedUri = extractedUri.split("/")[0];
        return extractedUri;
    };
    /**
     * @hidden
     * @ignore
     *
     * Utils function to create the Authentication
     * @param {@link account} account object
     * @param scopes
     * @param silentCall
     *
     * @returns {string} token type: id_token or access_token
     *
     */
    UserAgentApplication.prototype.getTokenType = function (accountObject, scopes, silentCall) {
        /*
         * if account is passed and matches the account object/or set to getAccount() from cache
         * if client-id is passed as scope, get id_token else token/id_token_token (in case no session exists)
         */
        var tokenType;
        // acquireTokenSilent
        if (silentCall) {
            if (Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            else {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.id_token_token;
            }
            return tokenType;
        }
        // all other cases
        else {
            if (!Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = ResponseTypes.id_token_token;
            }
            else {
                tokenType = (scopes.indexOf(this.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            return tokenType;
        }
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cachekeys for and stores the account information in cache
     * @param account
     * @param state
     * @hidden
     */
    UserAgentApplication.prototype.setAccountCache = function (account, state) {
        // Cache acquireTokenAccountKey
        var accountId = account ? this.getAccountId(account) : Constants_1.Constants.no_account;
        var acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, state);
        this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cacheKey for and stores the authority information in cache
     * @param state
     * @param authority
     * @hidden
     */
    UserAgentApplication.prototype.setAuthorityCache = function (state, authority) {
        // Cache authorityKey
        var authorityKey = Storage_1.Storage.generateAuthorityKey(state);
        this.cacheStorage.setItem(authorityKey, UrlUtils_1.UrlUtils.CanonicalizeUri(authority), this.inCookie);
    };
    /**
     * Updates account, authority, and nonce in cache
     * @param serverAuthenticationRequest
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.updateCacheEntries = function (serverAuthenticationRequest, account, loginStartPage) {
        // Cache account and authority
        if (loginStartPage) {
            // Cache the state, nonce, and login request data
            this.cacheStorage.setItem(Constants_1.Constants.loginRequest, loginStartPage, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.loginError, "");
            this.cacheStorage.setItem(Constants_1.Constants.stateLogin, serverAuthenticationRequest.state, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
        }
        else {
            this.setAccountCache(account, serverAuthenticationRequest.state);
        }
        // Cache authorityKey
        this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
        // Cache nonce
        this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, this.inCookie);
    };
    /**
     * Returns the unique identifier for the logged in account
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.getAccountId = function (account) {
        // return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
        var accountId;
        if (!StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
            accountId = account.homeAccountIdentifier;
        }
        else {
            accountId = Constants_1.Constants.no_account;
        }
        return accountId;
    };
    /**
     * @hidden
     * @ignore
     *
     * Construct 'tokenRequest' from the available data in adalIdToken
     * @param extraQueryParameters
     * @hidden
     */
    UserAgentApplication.prototype.buildIDTokenRequest = function (request) {
        var tokenRequest = {
            scopes: [this.clientId],
            authority: this.authority,
            account: this.getAccount(),
            extraQueryParameters: request.extraQueryParameters
        };
        return tokenRequest;
    };
    // #endregion
    UserAgentApplication.prototype.getTelemetryManagerFromConfig = function (config, clientId) {
        if (!config) { // if unset
            return null;
        }
        // if set then validate
        var applicationName = config.applicationName, applicationVersion = config.applicationVersion, telemetryEmitter = config.telemetryEmitter;
        if (!applicationName || !applicationVersion || !telemetryEmitter) {
            throw ClientConfigurationError_1.ClientConfigurationError.createTelemetryConfigError(config);
        }
        // if valid then construct
        var telemetryPlatform = {
            sdk: "msal.js",
            sdkVersion: Constants_1.libraryVersion(),
            applicationName: applicationName,
            applicationVersion: applicationVersion
        };
        var telemetryManagerConfig = {
            platform: telemetryPlatform,
            clientId: clientId
        };
        return new TelemetryManager_1.default(telemetryManagerConfig, telemetryEmitter);
    };
    return UserAgentApplication;
}());
exports.UserAgentApplication = UserAgentApplication;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ScopeSet = /** @class */ (function () {
    function ScopeSet() {
    }
    /**
     * Check if there are dup scopes in a given request
     *
     * @param cachedScopes
     * @param scopes
     */
    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
    ScopeSet.isIntersectingScopes = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        for (var i = 0; i < scopes.length; i++) {
            if (cachedScopes.indexOf(scopes[i].toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if a given scope is present in the request
     *
     * @param cachedScopes
     * @param scopes
     */
    ScopeSet.containsScope = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    /**
     * toLower
     *
     * @param scopes
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.convertToLowerCase = function (scopes) {
        return scopes.map(function (scope) { return scope.toLowerCase(); });
    };
    /**
     * remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.removeElement = function (scopes, scope) {
        return scopes.filter(function (value) { return value !== scope; });
    };
    /**
     * Parse the scopes into a formatted scopeList
     * @param scopes
     */
    ScopeSet.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    return ScopeSet;
}());
exports.ScopeSet = ScopeSet;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfigurationError_1 = __webpack_require__(5);
function validateClaimsRequest(request) {
    if (!request.claimsRequest) {
        return;
    }
    var claims;
    try {
        claims = JSON.parse(request.claimsRequest);
    }
    catch (e) {
        throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
    }
    // TODO: More validation will be added when the server team tells us how they have actually implemented claims
}
exports.validateClaimsRequest = validateClaimsRequest;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var TokenUtils = /** @class */ (function () {
    function TokenUtils() {
    }
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    TokenUtils.decodeJwt = function (jwtToken) {
        if (StringUtils_1.StringUtils.isEmpty(jwtToken)) {
            return null;
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            // this._requestContext.logger.warn("The returned id_token is not parseable.");
            return null;
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Extract IdToken by decoding the RAWIdToken
     *
     * @param encodedIdToken
     */
    TokenUtils.extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = CryptoUtils_1.CryptoUtils.base64Decode(base64IdToken);
            if (!base64Decoded) {
                // this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            // this._requestContext.logger.error("The returned id_token could not be decoded" + err);
        }
        return null;
    };
    return TokenUtils;
}());
exports.TokenUtils = TokenUtils;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var StringUtils_1 = __webpack_require__(1);
/**
 * accountIdentifier       combination of idToken.uid and idToken.utid
 * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
 * userName                idToken.preferred_username
 * name                    idToken.name
 * idToken                 idToken
 * sid                     idToken.sid - session identifier
 * environment             idtoken.issuer (the authority that issues the token)
 */
var Account = /** @class */ (function () {
    /**
     * Creates an Account Object
     * @praram accountIdentifier
     * @param homeAccountIdentifier
     * @param userName
     * @param name
     * @param idToken
     * @param sid
     * @param environment
     */
    function Account(accountIdentifier, homeAccountIdentifier, userName, name, idTokenClaims, sid, environment) {
        this.accountIdentifier = accountIdentifier;
        this.homeAccountIdentifier = homeAccountIdentifier;
        this.userName = userName;
        this.name = name;
        // will be deprecated soon
        this.idToken = idTokenClaims;
        this.idTokenClaims = idTokenClaims;
        this.sid = sid;
        this.environment = environment;
    }
    /**
     * @hidden
     * @param idToken
     * @param clientInfo
     */
    Account.createAccount = function (idToken, clientInfo) {
        // create accountIdentifier
        var accountIdentifier = idToken.objectId || idToken.subject;
        // create homeAccountIdentifier
        var uid = clientInfo ? clientInfo.uid : "";
        var utid = clientInfo ? clientInfo.utid : "";
        var homeAccountIdentifier;
        if (!StringUtils_1.StringUtils.isEmpty(uid) && !StringUtils_1.StringUtils.isEmpty(utid)) {
            homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
        }
        return new Account(accountIdentifier, homeAccountIdentifier, idToken.preferredName, idToken.name, idToken.claims, idToken.sid, idToken.issuer);
    };
    /**
     * Utils function to compare two Account objects - used to check if the same user account is logged in
     *
     * @param a1: Account object
     * @param a2: Account object
     */
    Account.compareAccounts = function (a1, a2) {
        if (!a1 || !a2) {
            return false;
        }
        if (a1.homeAccountIdentifier && a2.homeAccountIdentifier) {
            if (a1.homeAccountIdentifier === a2.homeAccountIdentifier) {
                return true;
            }
        }
        return false;
    };
    return Account;
}());
exports.Account = Account;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Authority_1 = __webpack_require__(8);
var XHRClient_1 = __webpack_require__(18);
var Constants_1 = __webpack_require__(2);
/**
 * @hidden
 */
var AadAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(AadAuthority, _super);
    function AadAuthority(authority, validateAuthority) {
        return _super.call(this, authority, validateAuthority) || this;
    }
    Object.defineProperty(AadAuthority.prototype, "AadInstanceDiscoveryEndpointUrl", {
        get: function () {
            return AadAuthority.AadInstanceDiscoveryEndpoint + "?api-version=1.0&authorization_endpoint=" + this.CanonicalAuthority + "oauth2/v2.0/authorize";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AadAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.Aad;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise which resolves to the OIDC endpoint
     * Only responds with the endpoint
     */
    AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var client;
            return tslib_1.__generator(this, function (_a) {
                if (!this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
                    return [2 /*return*/, this.DefaultOpenIdConfigurationEndpoint];
                }
                client = new XHRClient_1.XhrClient();
                return [2 /*return*/, client.sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", true)
                        .then(function (response) {
                        return response.tenant_discovery_endpoint;
                    })];
            });
        });
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param {string} The host to look up
     */
    AadAuthority.prototype.IsInTrustedHostList = function (host) {
        return Constants_1.AADTrustedHostList[host.toLowerCase()];
    };
    AadAuthority.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance";
    return AadAuthority;
}(Authority_1.Authority));
exports.AadAuthority = AadAuthority;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * XHR client for JSON endpoints
 * https://www.npmjs.com/package/async-promise
 * @hidden
 */
var XhrClient = /** @class */ (function () {
    function XhrClient() {
    }
    XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /* async: */ true);
            if (enableCaching) {
                /*
                 * TODO: (shivb) ensure that this can be cached
                 * xhr.setRequestHeader("Cache-Control", "Public");
                 */
            }
            xhr.onload = function (ev) {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(_this.handleError(xhr.responseText));
                }
                var jsonResponse;
                try {
                    jsonResponse = JSON.parse(xhr.responseText);
                }
                catch (e) {
                    reject(_this.handleError(xhr.responseText));
                }
                resolve(jsonResponse);
            };
            xhr.onerror = function (ev) {
                reject(xhr.status);
            };
            if (method === "GET") {
                xhr.send();
            }
            else {
                throw "not implemented";
            }
        });
    };
    XhrClient.prototype.handleError = function (responseText) {
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
            if (jsonResponse.error) {
                return jsonResponse.error;
            }
            else {
                throw responseText;
            }
        }
        catch (e) {
            return responseText;
        }
    };
    return XhrClient;
}());
exports.XhrClient = XhrClient;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AadAuthority_1 = __webpack_require__(17);
var Authority_1 = __webpack_require__(8);
var ClientConfigurationError_1 = __webpack_require__(5);
var UrlUtils_1 = __webpack_require__(4);
/**
 * @hidden
 */
var B2cAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(B2cAuthority, _super);
    function B2cAuthority(authority, validateAuthority) {
        var _this = _super.call(this, authority, validateAuthority) || this;
        var urlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(authority);
        var pathSegments = urlComponents.PathSegments;
        if (pathSegments.length < 3) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.b2cAuthorityUriInvalidPath;
        }
        _this.CanonicalAuthority = "https://" + urlComponents.HostNameAndPort + "/" + pathSegments[0] + "/" + pathSegments[1] + "/" + pathSegments[2] + "/";
        return _this;
    }
    Object.defineProperty(B2cAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.B2C;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise with the TenantDiscoveryEndpoint
     */
    B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
                    return [2 /*return*/, this.DefaultOpenIdConfigurationEndpoint];
                }
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.unsupportedAuthorityValidation;
            });
        });
    };
    B2cAuthority.B2C_PREFIX = "tfp";
    return B2cAuthority;
}(AadAuthority_1.AadAuthority));
exports.B2cAuthority = B2cAuthority;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Logger_1 = __webpack_require__(10);
var UrlUtils_1 = __webpack_require__(4);
/**
 * Defaults for the Configuration Options
 */
var FRAME_TIMEOUT = 6000;
var OFFSET = 300;
var NAVIGATE_FRAME_WAIT = 500;
var DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: null,
    validateAuthority: true,
    redirectUri: function () { return UrlUtils_1.UrlUtils.getDefaultRedirectUri(); },
    postLogoutRedirectUri: function () { return UrlUtils_1.UrlUtils.getDefaultRedirectUri(); },
    navigateToLoginRequestUrl: true
};
var DEFAULT_CACHE_OPTIONS = {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
};
var DEFAULT_SYSTEM_OPTIONS = {
    logger: new Logger_1.Logger(null),
    loadFrameTimeout: FRAME_TIMEOUT,
    tokenRenewalOffsetSeconds: OFFSET,
    navigateFrameWait: NAVIGATE_FRAME_WAIT
};
var DEFAULT_FRAMEWORK_OPTIONS = {
    isAngular: false,
    unprotectedResources: new Array(),
    protectedResourceMap: new Map()
};
/**
 * MSAL function that sets the default options when not explicitly configured from app developer
 *
 * @param TAuthOptions
 * @param TCacheOptions
 * @param TSystemOptions
 * @param TFrameworkOptions
 *
 * @returns TConfiguration object
 */
function buildConfiguration(_a) {
    var auth = _a.auth, _b = _a.cache, cache = _b === void 0 ? {} : _b, _c = _a.system, system = _c === void 0 ? {} : _c, _d = _a.framework, framework = _d === void 0 ? {} : _d;
    var overlayedConfig = {
        auth: tslib_1.__assign({}, DEFAULT_AUTH_OPTIONS, auth),
        cache: tslib_1.__assign({}, DEFAULT_CACHE_OPTIONS, cache),
        system: tslib_1.__assign({}, DEFAULT_SYSTEM_OPTIONS, system),
        framework: tslib_1.__assign({}, DEFAULT_FRAMEWORK_OPTIONS, framework)
    };
    return overlayedConfig;
}
exports.buildConfiguration = buildConfiguration;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ServerError_1 = __webpack_require__(11);
exports.InteractionRequiredAuthErrorMessage = {
    interactionRequired: {
        code: "interaction_required"
    },
    consentRequired: {
        code: "consent_required"
    },
    loginRequired: {
        code: "login_required"
    },
};
/**
 * Error thrown when the user is required to perform an interactive token request.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorString) {
        var interactionRequiredCodes = [
            exports.InteractionRequiredAuthErrorMessage.interactionRequired.code,
            exports.InteractionRequiredAuthErrorMessage.consentRequired.code,
            exports.InteractionRequiredAuthErrorMessage.loginRequired.code
        ];
        return errorString && interactionRequiredCodes.indexOf(errorString) > -1;
    };
    InteractionRequiredAuthError.createLoginRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.loginRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createInteractionRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.interactionRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createConsentRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.consentRequired.code, errorDesc);
    };
    return InteractionRequiredAuthError;
}(ServerError_1.ServerError));
exports.InteractionRequiredAuthError = InteractionRequiredAuthError;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function buildResponseStateOnly(state) {
    return {
        uniqueId: "",
        tenantId: "",
        tokenType: "",
        idToken: null,
        idTokenClaims: null,
        accessToken: "",
        scopes: null,
        expiresOn: null,
        account: null,
        accountState: state
    };
}
exports.buildResponseStateOnly = buildResponseStateOnly;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var B2cAuthority_1 = __webpack_require__(19);
var Constants_1 = __webpack_require__(2);
var TelemetryConstants_1 = __webpack_require__(9);
var CryptoUtils_1 = __webpack_require__(3);
var UrlUtils_1 = __webpack_require__(4);
exports.scrubTenantFromUri = function (uri) {
    var url = UrlUtils_1.UrlUtils.GetUrlComponents(uri);
    // validate trusted host
    if (!Constants_1.AADTrustedHostList[url.HostNameAndPort.toLocaleLowerCase()]) {
        // Should this return null or what was passed?
        return null;
    }
    var pathParams = url.PathSegments;
    if (pathParams && pathParams.length >= 2) {
        var tenantPosition = pathParams[1] === B2cAuthority_1.B2cAuthority.B2C_PREFIX ? 2 : 1;
        if (tenantPosition < pathParams.length) {
            pathParams[tenantPosition] = TelemetryConstants_1.TENANT_PLACEHOLDER;
        }
    }
    return url.Protocol + "//" + url.HostNameAndPort + "/" + pathParams.join("/");
};
exports.hashPersonalIdentifier = function (valueToHash) {
    /*
     * TODO sha256 this
     * Current test runner is being funny with node libs that are webpacked anyway
     * need a different solution
     */
    return CryptoUtils_1.CryptoUtils.base64Encode(valueToHash);
};
exports.prependEventNamePrefix = function (suffix) { return "" + TelemetryConstants_1.EVENT_NAME_PREFIX + (suffix || ""); };


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAgentApplication_1 = __webpack_require__(12);
exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
var Logger_1 = __webpack_require__(10);
exports.Logger = Logger_1.Logger;
var Logger_2 = __webpack_require__(10);
exports.LogLevel = Logger_2.LogLevel;
var Account_1 = __webpack_require__(16);
exports.Account = Account_1.Account;
var Constants_1 = __webpack_require__(2);
exports.Constants = Constants_1.Constants;
var Authority_1 = __webpack_require__(8);
exports.Authority = Authority_1.Authority;
var UserAgentApplication_2 = __webpack_require__(12);
exports.CacheResult = UserAgentApplication_2.CacheResult;
var Configuration_1 = __webpack_require__(20);
exports.CacheLocation = Configuration_1.CacheLocation;
exports.Configuration = Configuration_1.Configuration;
var AuthenticationParameters_1 = __webpack_require__(14);
exports.AuthenticationParameters = AuthenticationParameters_1.AuthenticationParameters;
var AuthResponse_1 = __webpack_require__(22);
exports.AuthResponse = AuthResponse_1.AuthResponse;
// Errors
var AuthError_1 = __webpack_require__(7);
exports.AuthError = AuthError_1.AuthError;
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
var ServerError_1 = __webpack_require__(11);
exports.ServerError = ServerError_1.ServerError;
var ClientConfigurationError_1 = __webpack_require__(5);
exports.ClientConfigurationError = ClientConfigurationError_1.ClientConfigurationError;
var InteractionRequiredAuthError_1 = __webpack_require__(21);
exports.InteractionRequiredAuthError = InteractionRequiredAuthError_1.InteractionRequiredAuthError;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var UrlUtils_1 = __webpack_require__(4);
/**
 * @hidden
 */
var AccessTokenKey = /** @class */ (function () {
    function AccessTokenKey(authority, clientId, scopes, uid, utid) {
        this.authority = UrlUtils_1.UrlUtils.CanonicalizeUri(authority);
        this.clientId = clientId;
        this.scopes = scopes;
        this.homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
    }
    return AccessTokenKey;
}());
exports.AccessTokenKey = AccessTokenKey;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenValue = /** @class */ (function () {
    function AccessTokenValue(accessToken, idToken, expiresIn, homeAccountIdentifier) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.homeAccountIdentifier = homeAccountIdentifier;
    }
    return AccessTokenValue;
}());
exports.AccessTokenValue = AccessTokenValue;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var AuthenticationParameters_1 = __webpack_require__(14);
var Constants_1 = __webpack_require__(2);
var ClientConfigurationError_1 = __webpack_require__(5);
var StringUtils_1 = __webpack_require__(1);
/**
 * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
 * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
 * @hidden
 */
var ServerRequestParameters = /** @class */ (function () {
    /**
     * Constructor
     * @param authority
     * @param clientId
     * @param scope
     * @param responseType
     * @param redirectUri
     * @param state
     */
    function ServerRequestParameters(authority, clientId, scope, responseType, redirectUri, state) {
        this.authorityInstance = authority;
        this.clientId = clientId;
        if (!scope) {
            this.scopes = [clientId];
        }
        else {
            this.scopes = scope.slice();
        }
        this.nonce = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.state = state && !StringUtils_1.StringUtils.isEmpty(state) ? CryptoUtils_1.CryptoUtils.createNewGuid() + "|" + state : CryptoUtils_1.CryptoUtils.createNewGuid();
        // TODO: Change this to user passed vs generated with the new PR
        this.correlationId = CryptoUtils_1.CryptoUtils.createNewGuid();
        // telemetry information
        this.xClientSku = "MSAL.JS";
        this.xClientVer = Constants_1.libraryVersion();
        this.responseType = responseType;
        this.redirectUri = redirectUri;
    }
    Object.defineProperty(ServerRequestParameters.prototype, "authority", {
        get: function () {
            return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     * @ignore
     *
     * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
     * @param request
     * @param serverAuthenticationRequest
     */
    ServerRequestParameters.prototype.populateQueryParams = function (account, request, adalIdTokenObject) {
        var queryParameters = {};
        if (request) {
            // add the prompt parameter to serverRequestParameters if passed
            if (request.prompt) {
                this.validatePromptParameter(request.prompt);
                this.promptValue = request.prompt;
            }
            // Add claims challenge to serverRequestParameters if passed
            if (request.claimsRequest) {
                AuthenticationParameters_1.validateClaimsRequest(request);
                this.claimsValue = request.claimsRequest;
            }
            // if the developer provides one of these, give preference to developer choice
            if (ServerRequestParameters.isSSOParam(request)) {
                queryParameters = this.constructUnifiedCacheQueryParameter(request, null);
            }
        }
        if (adalIdTokenObject) {
            queryParameters = this.constructUnifiedCacheQueryParameter(null, adalIdTokenObject);
        }
        /*
         * adds sid/login_hint if not populated; populates domain_req, login_req and domain_hint
         * this.logger.verbose("Calling addHint parameters");
         */
        queryParameters = this.addHintParameters(account, queryParameters);
        // sanity check for developer passed extraQueryParameters
        var eQParams;
        if (request) {
            eQParams = this.sanitizeEQParams(request);
        }
        // Populate the extraQueryParameters to be sent to the server
        this.queryParameters = ServerRequestParameters.generateQueryParametersString(queryParameters);
        this.extraQueryParameters = ServerRequestParameters.generateQueryParametersString(eQParams);
    };
    // #region QueryParam helpers
    /**
     * @hidden
     * @ignore
     *
     * Utility to test if valid prompt value is passed in the request
     * @param request
     */
    ServerRequestParameters.prototype.validatePromptParameter = function (prompt) {
        if (!([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) >= 0)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    /**
     * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
     * in any login() or acquireToken() calls
     * @param idTokenObject
     * @param extraQueryParameters
     * @param sid
     * @param loginHint
     */
    // TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
    ServerRequestParameters.prototype.constructUnifiedCacheQueryParameter = function (request, idTokenObject) {
        // preference order: account > sid > login_hint
        var ssoType;
        var ssoData;
        var serverReqParam = {};
        // if account info is passed, account.sid > account.login_hint
        if (request) {
            if (request.account) {
                var account = request.account;
                if (account.sid) {
                    ssoType = Constants_1.SSOTypes.SID;
                    ssoData = account.sid;
                }
                else if (account.userName) {
                    ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                    ssoData = account.userName;
                }
            }
            // sid from request
            else if (request.sid) {
                ssoType = Constants_1.SSOTypes.SID;
                ssoData = request.sid;
            }
            // loginHint from request
            else if (request.loginHint) {
                ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                ssoData = request.loginHint;
            }
        }
        // adalIdToken retrieved from cache
        else if (idTokenObject) {
            if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
                ssoType = Constants_1.SSOTypes.ID_TOKEN;
                ssoData = idTokenObject.upn;
            }
            else {
                ssoType = Constants_1.SSOTypes.ORGANIZATIONS;
                ssoData = null;
            }
        }
        serverReqParam = this.addSSOParameter(ssoType, ssoData);
        // add the HomeAccountIdentifier info/ domain_hint
        if (request && request.account && request.account.homeAccountIdentifier) {
            serverReqParam = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, request.account.homeAccountIdentifier, serverReqParam);
        }
        return serverReqParam;
    };
    /**
     * @hidden
     *
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint can be one of users/organizations which when added skips the email based discovery process of the user
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
     *
     * @param {@link Account} account - Account for which the token is requested
     * @param queryparams
     * @param {@link ServerRequestParameters}
     * @ignore
     */
    ServerRequestParameters.prototype.addHintParameters = function (account, qParams) {
        /*
         * This is a final check for all queryParams added so far; preference order: sid > login_hint
         * sid cannot be passed along with login_hint or domain_hint, hence we check both are not populated yet in queryParameters
         */
        if (account && !qParams[Constants_1.SSOTypes.SID]) {
            // sid - populate only if login_hint is not already populated and the account has sid
            var populateSID = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.sid && this.promptValue === Constants_1.PromptState.NONE;
            if (populateSID) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.SID, account.sid, qParams);
            }
            // login_hint - account.userName
            else {
                var populateLoginHint = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.userName && !StringUtils_1.StringUtils.isEmpty(account.userName);
                if (populateLoginHint) {
                    qParams = this.addSSOParameter(Constants_1.SSOTypes.LOGIN_HINT, account.userName, qParams);
                }
            }
            var populateReqParams = !qParams[Constants_1.SSOTypes.DOMAIN_REQ] && !qParams[Constants_1.SSOTypes.LOGIN_REQ];
            if (populateReqParams) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, account.homeAccountIdentifier, qParams);
            }
        }
        return qParams;
    };
    /**
     * Add SID to extraQueryParameters
     * @param sid
     */
    ServerRequestParameters.prototype.addSSOParameter = function (ssoType, ssoData, ssoParam) {
        if (!ssoParam) {
            ssoParam = {};
        }
        if (!ssoData) {
            return ssoParam;
        }
        switch (ssoType) {
            case Constants_1.SSOTypes.SID: {
                ssoParam[Constants_1.SSOTypes.SID] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ID_TOKEN: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.LOGIN_HINT: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ORGANIZATIONS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.CONSUMERS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                break;
            }
            case Constants_1.SSOTypes.HOMEACCOUNT_ID: {
                var homeAccountId = ssoData.split(".");
                var uid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[0]);
                var utid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[1]);
                // TODO: domain_req and login_req are not needed according to eSTS team
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = uid;
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = utid;
                if (utid === Constants_1.Constants.consumersUtid) {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                }
                else {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                }
                break;
            }
            case Constants_1.SSOTypes.LOGIN_REQ: {
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.DOMAIN_REQ: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = ssoData;
                break;
            }
        }
        return ssoParam;
    };
    /**
     * @hidden
     * @ignore
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    ServerRequestParameters.prototype.sanitizeEQParams = function (request) {
        var eQParams = request.extraQueryParameters;
        if (!eQParams) {
            return null;
        }
        if (request.claimsRequest) {
            // this.logger.warning("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
            delete eQParams[Constants_1.Constants.claims];
        }
        Constants_1.BlacklistedEQParams.forEach(function (param) {
            if (eQParams[param]) {
                // this.logger.warning("Removed duplicate " + param + " from extraQueryParameters. Please use the " + param + " field in request object.");
                delete eQParams[param];
            }
        });
        return eQParams;
    };
    /**
     * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
     * @param extraQueryParameters
     */
    ServerRequestParameters.generateQueryParametersString = function (queryParameters) {
        var paramsString = null;
        if (queryParameters) {
            Object.keys(queryParameters).forEach(function (key) {
                if (paramsString == null) {
                    paramsString = key + "=" + encodeURIComponent(queryParameters[key]);
                }
                else {
                    paramsString += "&" + key + "=" + encodeURIComponent(queryParameters[key]);
                }
            });
        }
        return paramsString;
    };
    // #endregion
    /**
     * Check to see if there are SSO params set in the Request
     * @param request
     */
    ServerRequestParameters.isSSOParam = function (request) {
        return request && (request.account || request.sid || request.loginHint);
    };
    return ServerRequestParameters;
}());
exports.ServerRequestParameters = ServerRequestParameters;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var ClientAuthError_1 = __webpack_require__(6);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var ClientInfo = /** @class */ (function () {
    function ClientInfo(rawClientInfo) {
        if (!rawClientInfo || StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
        }
        try {
            var decodedClientInfo = CryptoUtils_1.CryptoUtils.base64Decode(rawClientInfo);
            var clientInfo = JSON.parse(decodedClientInfo);
            if (clientInfo) {
                if (clientInfo.hasOwnProperty("uid")) {
                    this.uid = clientInfo.uid;
                }
                if (clientInfo.hasOwnProperty("utid")) {
                    this.utid = clientInfo.utid;
                }
            }
        }
        catch (e) {
            throw ClientAuthError_1.ClientAuthError.createClientInfoDecodingError(e);
        }
    }
    Object.defineProperty(ClientInfo.prototype, "uid", {
        get: function () {
            return this._uid ? this._uid : "";
        },
        set: function (uid) {
            this._uid = uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientInfo.prototype, "utid", {
        get: function () {
            return this._utid ? this._utid : "";
        },
        set: function (utid) {
            this._utid = utid;
        },
        enumerable: true,
        configurable: true
    });
    return ClientInfo;
}());
exports.ClientInfo = ClientInfo;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientAuthError_1 = __webpack_require__(6);
var TokenUtils_1 = __webpack_require__(15);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var IdToken = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    function IdToken(rawIdToken) {
        if (StringUtils_1.StringUtils.isEmpty(rawIdToken)) {
            throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
        }
        try {
            this.rawIdToken = rawIdToken;
            this.claims = TokenUtils_1.TokenUtils.extractIdToken(rawIdToken);
            if (this.claims) {
                if (this.claims.hasOwnProperty("iss")) {
                    this.issuer = this.claims["iss"];
                }
                if (this.claims.hasOwnProperty("oid")) {
                    this.objectId = this.claims["oid"];
                }
                if (this.claims.hasOwnProperty("sub")) {
                    this.subject = this.claims["sub"];
                }
                if (this.claims.hasOwnProperty("tid")) {
                    this.tenantId = this.claims["tid"];
                }
                if (this.claims.hasOwnProperty("ver")) {
                    this.version = this.claims["ver"];
                }
                if (this.claims.hasOwnProperty("preferred_username")) {
                    this.preferredName = this.claims["preferred_username"];
                }
                if (this.claims.hasOwnProperty("name")) {
                    this.name = this.claims["name"];
                }
                if (this.claims.hasOwnProperty("nonce")) {
                    this.nonce = this.claims["nonce"];
                }
                if (this.claims.hasOwnProperty("exp")) {
                    this.expiration = this.claims["exp"];
                }
                if (this.claims.hasOwnProperty("home_oid")) {
                    this.homeObjectId = this.claims["home_oid"];
                }
                if (this.claims.hasOwnProperty("sid")) {
                    this.sid = this.claims["sid"];
                }
                if (this.claims.hasOwnProperty("cloud_instance_host_name")) {
                    this.cloudInstance = this.claims["cloud_instance_host_name"];
                }
                /* tslint:enable:no-string-literal */
            }
        }
        catch (e) {
            /*
             * TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
             * Need to add better error handling here to account for being unable to decode jwts.
             */
            throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(e);
        }
    }
    return IdToken;
}());
exports.IdToken = IdToken;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var AccessTokenCacheItem_1 = __webpack_require__(32);
var ClientConfigurationError_1 = __webpack_require__(5);
/**
 * @hidden
 */
var Storage = /** @class */ (function () {
    function Storage(cacheLocation) {
        if (Storage.instance) {
            return Storage.instance;
        }
        this.cacheLocation = cacheLocation;
        this.localStorageSupported = typeof window[this.cacheLocation] !== "undefined" && window[this.cacheLocation] != null;
        this.sessionStorageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] != null;
        Storage.instance = this;
        if (!this.localStorageSupported && !this.sessionStorageSupported) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoStorageSupportedError();
        }
        return Storage.instance;
    }
    // add value to storage
    Storage.prototype.setItem = function (key, value, enableCookieStorage) {
        if (window[this.cacheLocation]) {
            window[this.cacheLocation].setItem(key, value);
        }
        if (enableCookieStorage) {
            this.setItemCookie(key, value);
        }
    };
    // get one item by key from storage
    Storage.prototype.getItem = function (key, enableCookieStorage) {
        if (enableCookieStorage && this.getItemCookie(key)) {
            return this.getItemCookie(key);
        }
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].getItem(key);
        }
        return null;
    };
    // remove value from storage
    Storage.prototype.removeItem = function (key) {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].removeItem(key);
        }
    };
    // clear storage (remove all items from it)
    Storage.prototype.clear = function () {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].clear();
        }
    };
    Storage.prototype.getAllAccessTokens = function (clientId, homeAccountIdentifier) {
        var results = [];
        var accessTokenCacheItem;
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.match(clientId) && key.match(homeAccountIdentifier)) {
                        var value = this.getItem(key);
                        if (value) {
                            accessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(JSON.parse(key), JSON.parse(value));
                            results.push(accessTokenCacheItem);
                        }
                    }
                }
            }
        }
        return results;
    };
    Storage.prototype.removeAcquireTokenEntries = function (state) {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if ((key.indexOf(Constants_1.CacheKeys.AUTHORITY) !== -1 || key.indexOf(Constants_1.CacheKeys.ACQUIRE_TOKEN_ACCOUNT) !== 1) && (!state || key.indexOf(state) !== -1)) {
                        var splitKey = key.split(Constants_1.Constants.resourceDelimiter);
                        var state_1 = void 0;
                        if (splitKey.length > 1) {
                            state_1 = splitKey[1];
                        }
                        if (state_1 && !this.tokenRenewalInProgress(state_1)) {
                            this.removeItem(key);
                            this.removeItem(Constants_1.Constants.renewStatus + state_1);
                            this.removeItem(Constants_1.Constants.stateLogin);
                            this.removeItem(Constants_1.Constants.stateAcquireToken);
                            this.setItemCookie(key, "", -1);
                        }
                    }
                }
            }
        }
        this.clearCookie();
    };
    Storage.prototype.tokenRenewalInProgress = function (stateValue) {
        var storage = window[this.cacheLocation];
        var renewStatus = storage[Constants_1.Constants.renewStatus + stateValue];
        return !(!renewStatus || renewStatus !== Constants_1.Constants.tokenRenewStatusInProgress);
    };
    Storage.prototype.resetCacheItems = function () {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.indexOf(Constants_1.Constants.msal) !== -1) {
                        this.removeItem(key);
                    }
                }
            }
            this.removeAcquireTokenEntries();
        }
    };
    Storage.prototype.setItemCookie = function (cName, cValue, expires) {
        var cookieStr = cName + "=" + cValue + ";";
        if (expires) {
            var expireTime = this.getCookieExpirationTime(expires);
            cookieStr += "expires=" + expireTime + ";";
        }
        document.cookie = cookieStr;
    };
    Storage.prototype.getItemCookie = function (cName) {
        var name = cName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    Storage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLifeDays * 24 * 60 * 60 * 1000);
        return expr.toUTCString();
    };
    Storage.prototype.clearCookie = function () {
        this.setItemCookie(Constants_1.Constants.nonceIdToken, "", -1);
        this.setItemCookie(Constants_1.Constants.stateLogin, "", -1);
        this.setItemCookie(Constants_1.Constants.loginRequest, "", -1);
        this.setItemCookie(Constants_1.Constants.stateAcquireToken, "", -1);
    };
    /**
     * Create acquireTokenAccountKey to cache account object
     * @param accountId
     * @param state
     */
    Storage.generateAcquireTokenAccountKey = function (accountId, state) {
        return Constants_1.CacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants_1.Constants.resourceDelimiter +
            ("" + accountId) + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    /**
     * Create authorityKey to cache authority
     * @param state
     */
    Storage.generateAuthorityKey = function (state) {
        return Constants_1.CacheKeys.AUTHORITY + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    return Storage;
}());
exports.Storage = Storage;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenCacheItem = /** @class */ (function () {
    function AccessTokenCacheItem(key, value) {
        this.key = key;
        this.value = value;
    }
    return AccessTokenCacheItem;
}());
exports.AccessTokenCacheItem = AccessTokenCacheItem;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ClientAuthError_1 = __webpack_require__(6);
var UrlUtils_1 = __webpack_require__(4);
var WindowUtils = /** @class */ (function () {
    function WindowUtils() {
    }
    /**
     * @hidden
     * Checks if the current page is running in an iframe.
     * @ignore
     */
    WindowUtils.isInIframe = function () {
        return window.parent !== window;
    };
    /**
     * @hidden
     * Check if the current page is running in a popup.
     * @ignore
     */
    WindowUtils.isInPopup = function () {
        return !!(window.opener && window.opener !== window);
    };
    /**
     * @hidden
     * Monitors a window until it loads a url with a hash
     * @ignore
     */
    WindowUtils.monitorWindowForHash = function (contentWindow, timeout) {
        return new Promise(function (resolve, reject) {
            var maxTicks = timeout / WindowUtils.POLLING_INTERVAL_MS;
            var ticks = 0;
            var intervalId = setInterval(function () {
                var href;
                try {
                    /*
                     * Will throw if cross origin,
                     * which should be caught and ignored
                     * since we need the interval to keep running while on STS UI.
                     */
                    href = contentWindow.location.href;
                }
                catch (e) { }
                // Don't process blank pages or cross domain
                if (!href || href === "about:blank") {
                    return;
                }
                // Only run clock when we are on same domain
                ticks++;
                if (UrlUtils_1.UrlUtils.urlContainsHash(href)) {
                    clearInterval(intervalId);
                    resolve(contentWindow.location.hash);
                }
                else if (contentWindow.closed) {
                    clearInterval(intervalId);
                    resolve();
                }
                else if (ticks > maxTicks) {
                    clearInterval(intervalId);
                    reject(ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError()); // better error?
                }
            }, WindowUtils.POLLING_INTERVAL_MS);
        });
    };
    /**
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    WindowUtils.loadFrame = function (urlNavigate, frameName, timeoutMs, logger) {
        /*
         * This trick overcomes iframe navigation in IE
         * IE does not load the page consistently in iframe
         */
        logger.info("LoadFrame: " + frameName);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var frameHandle = WindowUtils.addHiddenIFrame(frameName, logger);
                if (!frameHandle) {
                    reject("Unable to load iframe with name: " + frameName);
                    return;
                }
                if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                    frameHandle.src = urlNavigate;
                    logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
                }
                resolve(frameHandle);
            }, timeoutMs);
        });
    };
    /**
     * @hidden
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     */
    WindowUtils.addHiddenIFrame = function (iframeId, logger) {
        if (typeof iframeId === "undefined") {
            return null;
        }
        logger.info("Add msal frame to document:" + iframeId);
        var adalFrame = document.getElementById(iframeId);
        if (!adalFrame) {
            if (document.createElement &&
                document.documentElement &&
                (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                var ifr = document.createElement("iframe");
                ifr.setAttribute("id", iframeId);
                ifr.style.visibility = "hidden";
                ifr.style.position = "absolute";
                ifr.style.width = ifr.style.height = "0";
                ifr.style.border = "0";
                ifr.setAttribute("sandbox", "allow-same-origin");
                adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }
        return adalFrame;
    };
    /**
     * @hidden
     * Find and return the iframe element with the given hash
     * @ignore
     */
    WindowUtils.getIframeWithHash = function (hash) {
        return Array.from(document.getElementsByTagName("iframe")).find(function (iframe) {
            try {
                return iframe.contentWindow.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        });
    };
    /**
     * @hidden
     * Returns an array of all the popups opened by MSAL
     * @ignore
     */
    WindowUtils.getPopups = function () {
        if (!window.openedWindows) {
            window.openedWindows = [];
        }
        return window.openedWindows;
    };
    /**
     * @hidden
     * Find and return the popup with the given hash
     * @ignore
     */
    WindowUtils.getPopUpWithHash = function (hash) {
        return WindowUtils.getPopups().find(function (popup) {
            try {
                return popup.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        });
    };
    /**
     * @hidden
     * Add the popup to the known list of popups
     * @ignore
     */
    WindowUtils.trackPopup = function (popup) {
        WindowUtils.getPopups().push(popup);
    };
    /**
     * @hidden
     * Close all popups
     * @ignore
     */
    WindowUtils.closePopups = function () {
        WindowUtils.getPopups().forEach(function (popup) { return popup.close(); });
    };
    /**
     * @hidden
     * Interval in milliseconds that we poll a window
     * @ignore
     */
    WindowUtils.POLLING_INTERVAL_MS = 50;
    return WindowUtils;
}());
exports.WindowUtils = WindowUtils;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     * Returns time in seconds for expiration based on string value passed in.
     *
     * @param expiresIn
     */
    TimeUtils.parseExpiresIn = function (expiresIn) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        if (!expiresIn) {
            expiresIn = "3599";
        }
        return parseInt(expiresIn, 10);
    };
    /**
     * return the current time in Unix time. Date.getTime() returns in milliseconds.
     */
    TimeUtils.now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };
    return TimeUtils;
}());
exports.TimeUtils = TimeUtils;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 */
var ResponseUtils = /** @class */ (function () {
    function ResponseUtils() {
    }
    ResponseUtils.setResponseIdToken = function (originalResponse, idTokenObj) {
        if (!originalResponse) {
            return null;
        }
        else if (!idTokenObj) {
            return originalResponse;
        }
        var exp = Number(idTokenObj.expiration);
        if (exp && !originalResponse.expiresOn) {
            originalResponse.expiresOn = new Date(exp * 1000);
        }
        return tslib_1.__assign({}, originalResponse, { idToken: idTokenObj, idTokenClaims: idTokenObj.claims, uniqueId: idTokenObj.objectId || idTokenObj.subject, tenantId: idTokenObj.tenantId });
    };
    return ResponseUtils;
}());
exports.ResponseUtils = ResponseUtils;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AadAuthority_1 = __webpack_require__(17);
var B2cAuthority_1 = __webpack_require__(19);
var Authority_1 = __webpack_require__(8);
var ClientConfigurationError_1 = __webpack_require__(5);
var UrlUtils_1 = __webpack_require__(4);
var StringUtils_1 = __webpack_require__(1);
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
     * Parse the url and determine the type of authority
     */
    AuthorityFactory.DetectAuthorityFromUrl = function (authorityUrl) {
        authorityUrl = UrlUtils_1.UrlUtils.CanonicalizeUri(authorityUrl);
        var components = UrlUtils_1.UrlUtils.GetUrlComponents(authorityUrl);
        var pathSegments = components.PathSegments;
        switch (pathSegments[0]) {
            case "tfp":
                return Authority_1.AuthorityType.B2C;
            default:
                return Authority_1.AuthorityType.Aad;
        }
    };
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
     */
    AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority) {
        if (StringUtils_1.StringUtils.isEmpty(authorityUrl)) {
            return null;
        }
        var type = AuthorityFactory.DetectAuthorityFromUrl(authorityUrl);
        // Depending on above detection, create the right type.
        switch (type) {
            case Authority_1.AuthorityType.B2C:
                return new B2cAuthority_1.B2cAuthority(authorityUrl, validateAuthority);
            case Authority_1.AuthorityType.Aad:
                return new AadAuthority_1.AadAuthority(authorityUrl, validateAuthority);
            default:
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
    };
    return AuthorityFactory;
}());
exports.AuthorityFactory = AuthorityFactory;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var DefaultEvent_1 = tslib_1.__importDefault(__webpack_require__(38));
// for use in cache events
var MSAL_CACHE_EVENT_VALUE_PREFIX = "msal.token";
var MSAL_CACHE_EVENT_NAME = "msal.cache_event";
var createEventKey = function (event) { return (event.telemetryCorrelationId + "-" + event.eventId + "-" + event.eventName); };
var TelemetryManager = /** @class */ (function () {
    function TelemetryManager(config, telemetryEmitter) {
        // correlation Id to list of events
        this.completedEvents = {};
        // event key to event
        this.inProgressEvents = {};
        // correlation id to map of eventname to count
        this.eventCountByCorrelationId = {};
        // Implement after API EVENT
        this.onlySendFailureTelemetry = false;
        // TODO THROW if bad options
        this.telemetryPlatform = config.platform;
        this.clientId = config.clientId;
        this.onlySendFailureTelemetry = config.onlySendFailureTelemetry;
        /*
         * TODO, when i get to wiring this through, think about what it means if
         * a developer does not implement telem at all, we still instrument, but telemetryEmitter can be
         * optional?
         */
        this.telemetryEmitter = telemetryEmitter;
    }
    TelemetryManager.prototype.startEvent = function (event) {
        if (!this.telemetryEmitter) {
            return;
        }
        var eventKey = createEventKey(event);
        this.inProgressEvents[eventKey] = event;
    };
    TelemetryManager.prototype.stopEvent = function (event) {
        var eventKey = createEventKey(event);
        if (!this.telemetryEmitter || !this.inProgressEvents[eventKey]) {
            return;
        }
        event.stop();
        this.incrementEventCount(event);
        var completedEvents = this.completedEvents[event.telemetryCorrelationId];
        this.completedEvents[event.telemetryCorrelationId] = (completedEvents || []).concat([event]);
        delete this.inProgressEvents[eventKey];
    };
    TelemetryManager.prototype.flush = function (correlationId) {
        var _this = this;
        // If there is only unfinished events should this still return them?
        if (!this.telemetryEmitter || !this.completedEvents[correlationId]) {
            return;
        }
        var orphanedEvents = this.getOrphanedEvents(correlationId);
        orphanedEvents.forEach(function (event) { return _this.incrementEventCount(event); });
        var eventsToFlush = this.completedEvents[correlationId].concat(orphanedEvents);
        delete this.completedEvents[correlationId];
        var eventCountsToFlush = this.eventCountByCorrelationId[correlationId];
        delete this.eventCountByCorrelationId[correlationId];
        // TODO add funcitonality for onlyFlushFailures after implementing api event? ??
        if (!eventsToFlush || !eventsToFlush.length) {
            return;
        }
        var defaultEvent = new DefaultEvent_1.default(this.telemetryPlatform, correlationId, this.clientId, eventCountsToFlush);
        var eventsWithDefaultEvent = eventsToFlush.concat([defaultEvent]);
        this.telemetryEmitter(eventsWithDefaultEvent.map(function (e) { return e.get(); }));
    };
    TelemetryManager.prototype.incrementEventCount = function (event) {
        var _a;
        /*
         * TODO, name cache event different?
         * if type is cache event, change name
         */
        var eventName = event.eventName;
        var eventCount = this.eventCountByCorrelationId[event.telemetryCorrelationId];
        if (!eventCount) {
            this.eventCountByCorrelationId[event.telemetryCorrelationId] = (_a = {},
                _a[eventName] = 1,
                _a);
        }
        else {
            eventCount[eventName] = eventCount[eventName] ? eventCount[eventName] + 1 : 1;
        }
    };
    TelemetryManager.prototype.getOrphanedEvents = function (correlationId) {
        var _this = this;
        return Object.keys(this.inProgressEvents)
            .reduce(function (memo, eventKey) {
            if (eventKey.indexOf(correlationId) !== -1) {
                var event = _this.inProgressEvents[eventKey];
                delete _this.inProgressEvents[eventKey];
                return memo.concat([event]);
            }
            return memo;
        }, []);
    };
    return TelemetryManager;
}());
exports.default = TelemetryManager;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(9);
var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(39));
var TelemetryUtils_1 = __webpack_require__(23);
var DefaultEvent = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultEvent, _super);
    // TODO Platform Type
    function DefaultEvent(platform, correlationId, clientId, eventCount) {
        var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("default_event"), correlationId) || this;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("client_id")] = clientId;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_plaform")] = platform.sdk;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_version")] = platform.sdkVersion;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_name")] = platform.applicationName;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_version")] = platform.applicationVersion;
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.UiEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("ui_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.HttpEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("http_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.CacheEventCountConstStrKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("cache_event"), eventCount);
        return _this;
        // / Device id?
    }
    DefaultEvent.prototype.getEventCount = function (eventName, eventCount) {
        if (!eventCount[eventName]) {
            return 0;
        }
        return eventCount[eventName];
    };
    return DefaultEvent;
}(TelemetryEvent_1.default));
exports.default = DefaultEvent;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(9);
var TelemetryConstants_2 = __webpack_require__(9);
var TelemetryUtils_1 = __webpack_require__(23);
var CryptoUtils_1 = __webpack_require__(3);
var TelemetryEvent = /** @class */ (function () {
    function TelemetryEvent(eventName, correlationId) {
        var _a;
        this.startTimestamp = Date.now();
        this.eventId = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.event = (_a = {},
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)] = eventName,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.START_TIME_KEY)] = this.startTimestamp,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = -1,
            _a["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = correlationId,
            _a);
    }
    TelemetryEvent.prototype.setElapsedTime = function (time) {
        this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = time;
    };
    TelemetryEvent.prototype.stop = function () {
        // Set duration of event
        this.setElapsedTime(+Date.now() - +this.startTimestamp);
    };
    Object.defineProperty(TelemetryEvent.prototype, "telemetryCorrelationId", {
        get: function () {
            return this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey];
        },
        set: function (value) {
            this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TelemetryEvent.prototype, "eventName", {
        get: function () {
            return this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)];
        },
        enumerable: true,
        configurable: true
    });
    TelemetryEvent.prototype.get = function () {
        return tslib_1.__assign({}, this.event, { eventId: this.eventId });
    };
    return TelemetryEvent;
}());
exports.default = TelemetryEvent;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01zYWwvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL01zYWwvLi9zcmMvdXRpbHMvU3RyaW5nVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9DcnlwdG9VdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1VybFV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQ2xpZW50QXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvYXV0aG9yaXR5L0F1dGhvcml0eS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3RlbGVtZXRyeS9UZWxlbWV0cnlDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9TZXJ2ZXJFcnJvci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1VzZXJBZ2VudEFwcGxpY2F0aW9uLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvU2NvcGVTZXQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9Ub2tlblV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjb3VudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2F1dGhvcml0eS9BYWRBdXRob3JpdHkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9YSFJDbGllbnQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9hdXRob3JpdHkvQjJjQXV0aG9yaXR5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRoUmVzcG9uc2UudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FjY2Vzc1Rva2VuS2V5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjZXNzVG9rZW5WYWx1ZS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1NlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ2xpZW50SW5mby50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0lkVG9rZW4udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9TdG9yYWdlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjZXNzVG9rZW5DYWNoZUl0ZW0udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9XaW5kb3dVdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1RpbWVVdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1Jlc3BvbnNlVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9hdXRob3JpdHkvQXV0aG9yaXR5RmFjdG9yeS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3RlbGVtZXRyeS9UZWxlbWV0cnlNYW5hZ2VyLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvdGVsZW1ldHJ5L0RlZmF1bHRFdmVudC50cyIsIndl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Q0FBQztvQkFDeEQsS0FBSyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pELEtBQUssQ0FBQzt3QkFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pEO3dCQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFBQyxTQUFTO3lCQUFFO3dCQUM1RyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDdEYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDbkUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQUMsU0FBUztpQkFDOUI7Z0JBQ0QsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFBRTtvQkFBUztnQkFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUFFO1FBQzFELElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNyRixDQUFDO0FBQ0wsQ0FBQztBQTFCRCxrQ0EwQkM7QUFFRCxTQUFnQixZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU87SUFDbkMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBRkQsb0NBRUM7QUFFRCxTQUFnQixRQUFRLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLElBQUksQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixPQUFPO1FBQ0gsSUFBSSxFQUFFO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO2dCQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNuQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1QyxDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUM7QUFURCw0QkFTQztBQUVELFNBQWdCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxJQUFJLENBQUMsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLElBQUk7UUFDQSxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSTtZQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzlFO0lBQ0QsT0FBTyxLQUFLLEVBQUU7UUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7S0FBRTtZQUMvQjtRQUNKLElBQUk7WUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7Z0JBQ087WUFBRSxJQUFJLENBQUM7Z0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQUU7S0FDcEM7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFmRCx3QkFlQztBQUVELFNBQWdCLFFBQVE7SUFDcEIsS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7UUFDOUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBSkQsNEJBSUM7QUFFRCxTQUFnQixjQUFjO0lBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFBRSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNwRixLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUM3RCxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQU5ELHdDQU1DO0FBQUEsQ0FBQztBQUVGLFNBQWdCLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sSUFBSSxZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUZELDBCQUVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTO0lBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYTtRQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUN2RixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsY0FBYyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEgsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxSSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7UUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUFFLENBQUMsQ0FBQztJQUNsRixTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4SCxTQUFTLE9BQU8sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEYsQ0FBQztBQVZELDRDQVVDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxjQUFjLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1SSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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LENBQUMsS0FBRywrQ0FBMEIsQ0FBQyw0QkFBOEIsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNyRixDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLHFDQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLHVDQUFzQixDQUFDLG1DQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBRU0sNEJBQUcsR0FBVjtRQUNJLDRCQUNPLElBQUksQ0FBQyxLQUFLLElBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQ3ZCO0lBQ04sQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJtc2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJNc2FsXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1zYWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTXNhbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI0KTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIGEgc3RyaW5nIGlzIGVtcHR5XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHN0clxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNFbXB0eShzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhc3RyIHx8IDAgPT09IHN0ci5sZW5ndGgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENhY2hlTG9jYXRpb24gfSBmcm9tIFwiLi4vQ29uZmlndXJhdGlvblwiO1xyXG5cclxuLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBDb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG4gICAgc3RhdGljIGdldCBlcnJvckRlc2NyaXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiBcImVycm9yX2Rlc2NyaXB0aW9uXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgZXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwiZXJyb3JcIjsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgc2NvcGUoKTogc3RyaW5nIHsgcmV0dXJuIFwic2NvcGVcIjsgfVxyXG4gICAgc3RhdGljIGdldCBjbGllbnRJbmZvKCk6IHN0cmluZyB7IHJldHVybiBcImNsaWVudF9pbmZvXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgY2xpZW50SWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiY2xpZW50SWRcIjsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaWRUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJpZF90b2tlblwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IGFkYWxJZFRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcImFkYWwuaWR0b2tlblwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IGFjY2Vzc1Rva2VuKCk6IHN0cmluZyB7IHJldHVybiBcImFjY2Vzc190b2tlblwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IGV4cGlyZXNJbigpOiBzdHJpbmcgeyByZXR1cm4gXCJleHBpcmVzX2luXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgc2Vzc2lvblN0YXRlKCk6IHN0cmluZyB7IHJldHVybiBcInNlc3Npb25fc3RhdGVcIjsgfVxyXG4gICAgc3RhdGljIGdldCBjbGFpbXMoKTogc3RyaW5nIHsgcmV0dXJuIFwiY2xhaW1zXCI7IH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IG1zYWxDbGllbnRJbmZvKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuY2xpZW50LmluZm9cIjsgfVxyXG4gICAgc3RhdGljIGdldCBtc2FsRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5lcnJvclwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IG1zYWxFcnJvckRlc2NyaXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuZXJyb3IuZGVzY3JpcHRpb25cIjsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgbXNhbFNlc3Npb25TdGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnNlc3Npb24uc3RhdGVcIjsgfVxyXG4gICAgc3RhdGljIGdldCB0b2tlbktleXMoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC50b2tlbi5rZXlzXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgYWNjZXNzVG9rZW5LZXkoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5hY2Nlc3MudG9rZW4ua2V5XCI7IH1cclxuICAgIHN0YXRpYyBnZXQgZXhwaXJhdGlvbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmV4cGlyYXRpb24ua2V5XCI7IH1cclxuICAgIHN0YXRpYyBnZXQgc3RhdGVMb2dpbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnN0YXRlLmxvZ2luXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgc3RhdGVBY3F1aXJlVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5zdGF0ZS5hY3F1aXJlVG9rZW5cIjsgfVxyXG4gICAgc3RhdGljIGdldCBzdGF0ZVJlbmV3KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc3RhdGUucmVuZXdcIjsgfVxyXG4gICAgc3RhdGljIGdldCBub25jZUlkVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5ub25jZS5pZHRva2VuXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgdXNlck5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC51c2VybmFtZVwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IGlkVG9rZW5LZXkoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5pZHRva2VuXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgbG9naW5SZXF1ZXN0KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwubG9naW4ucmVxdWVzdFwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IGxvZ2luRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5sb2dpbi5lcnJvclwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IHJlbmV3U3RhdHVzKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudG9rZW4ucmVuZXcuc3RhdHVzXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgdXJsSGFzaCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnVybEhhc2hcIjsgfVxyXG4gICAgc3RhdGljIGdldCBhbmd1bGFyTG9naW5SZXF1ZXN0KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuYW5ndWxhci5sb2dpbi5yZXF1ZXN0XCI7IH1cclxuICAgIHN0YXRpYyBnZXQgbXNhbCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsXCI7IH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IG5vX2FjY291bnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiTk9fQUNDT1VOVFwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IGNvbnN1bWVyc1V0aWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgdXBuKCk6IHN0cmluZyB7IHJldHVybiBcInVwblwiOyB9XHJcblxyXG4gICAgc3RhdGljIGdldCBwcm9tcHRfc2VsZWN0X2FjY291bnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiJnByb21wdD1zZWxlY3RfYWNjb3VudFwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IHByb21wdF9ub25lKCk6IHN0cmluZyB7IHJldHVybiBcIiZwcm9tcHQ9bm9uZVwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IHByb21wdCgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9tcHRcIjsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgcmVzcG9uc2VfbW9kZV9mcmFnbWVudCgpOiBzdHJpbmcgeyByZXR1cm4gXCImcmVzcG9uc2VfbW9kZT1mcmFnbWVudFwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IHJlc291cmNlRGVsaW1pdGVyKCk6IHN0cmluZyB7IHJldHVybiBcInxcIjsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgdG9rZW5SZW5ld1N0YXR1c0NhbmNlbGxlZCgpOiBzdHJpbmcgeyByZXR1cm4gXCJDYW5jZWxlZFwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IHRva2VuUmVuZXdTdGF0dXNDb21wbGV0ZWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ29tcGxldGVkXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgdG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MoKTogc3RyaW5nIHsgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjsgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9wb3BVcFdpZHRoOiBudW1iZXIgPSA0ODM7XHJcbiAgICBzdGF0aWMgZ2V0IHBvcFVwV2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3BvcFVwV2lkdGg7IH1cclxuICAgIHN0YXRpYyBzZXQgcG9wVXBXaWR0aCh3aWR0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcG9wVXBXaWR0aCA9IHdpZHRoO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3BvcFVwSGVpZ2h0OiBudW1iZXIgPSA2MDA7XHJcbiAgICBzdGF0aWMgZ2V0IHBvcFVwSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9wb3BVcEhlaWdodDsgfVxyXG4gICAgc3RhdGljIHNldCBwb3BVcEhlaWdodChoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3BvcFVwSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgbG9naW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiTE9HSU5cIjsgfVxyXG4gICAgc3RhdGljIGdldCByZW5ld1Rva2VuKCk6IHN0cmluZyB7IHJldHVybiBcIlJFTkVXX1RPS0VOXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgdW5rbm93bigpOiBzdHJpbmcgeyByZXR1cm4gXCJVTktOT1dOXCI7IH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGhvbWVBY2NvdW50SWRlbnRpZmllcigpOiBzdHJpbmcgeyByZXR1cm4gXCJob21lQWNjb3VudElkZW50aWZpZXJcIjsgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY29tbW9uKCk6IHN0cmluZyB7IHJldHVybiBcImNvbW1vblwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IG9wZW5pZFNjb3BlKCk6IHN0cmluZyB7IHJldHVybiBcIm9wZW5pZFwiOyB9XHJcbiAgICBzdGF0aWMgZ2V0IHByb2ZpbGVTY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9maWxlXCI7IH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGNhY2hlTG9jYXRpb25Mb2NhbCgpOiBDYWNoZUxvY2F0aW9uIHsgcmV0dXJuIFwibG9jYWxTdG9yYWdlXCI7IH1cclxuICAgIHN0YXRpYyBnZXQgY2FjaGVMb2NhdGlvblNlc3Npb24oKTogQ2FjaGVMb2NhdGlvbiB7IHJldHVybiBcInNlc3Npb25TdG9yYWdlXCI7IH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGludGVyYWN0aW9uVHlwZVJlZGlyZWN0KCk6IEludGVyYWN0aW9uVHlwZSB7IHJldHVybiBcInJlZGlyZWN0SW50ZXJhY3Rpb25cIjsgfVxyXG4gICAgc3RhdGljIGdldCBpbnRlcmFjdGlvblR5cGVQb3B1cCgpOiBJbnRlcmFjdGlvblR5cGUgeyByZXR1cm4gXCJwb3B1cEludGVyYWN0aW9uXCI7IH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICogQ2FjaGVLZXlzIGZvciAnYXV0aG9yaXR5JyBhbmQgJ2FjY291bnQnXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ2FjaGVLZXlzID0ge1xyXG4gICAgQVVUSE9SSVRZOiBcIm1zYWwuYXV0aG9yaXR5XCIsXHJcbiAgICBBQ1FVSVJFX1RPS0VOX0FDQ09VTlQ6IFwibXNhbC5hY3F1aXJlVG9rZW5BY2NvdW50XCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBQURUcnVzdGVkSG9zdExpc3QgPSAge1xyXG4gICAgXCJsb2dpbi53aW5kb3dzLm5ldFwiOiBcImxvZ2luLndpbmRvd3MubmV0XCIsXHJcbiAgICBcImxvZ2luLmNoaW5hY2xvdWRhcGkuY25cIjogXCJsb2dpbi5jaGluYWNsb3VkYXBpLmNuXCIsXHJcbiAgICBcImxvZ2luLmNsb3VkZ292YXBpLnVzXCI6IFwibG9naW4uY2xvdWRnb3ZhcGkudXNcIixcclxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLmNvbVwiOiBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS5jb21cIixcclxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLmRlXCIsXHJcbiAgICBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS51c1wiOiBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS51c1wiXHJcbn07XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBTU08gVHlwZXMgLSBnZW5lcmF0ZWQgdG8gcG9wdWxhdGUgaGludHNcclxuICovXHJcbmV4cG9ydCBjb25zdCBTU09UeXBlcyA9IHtcclxuICAgIEFDQ09VTlQ6IFwiYWNjb3VudFwiLFxyXG4gICAgU0lEOiBcInNpZFwiLFxyXG4gICAgTE9HSU5fSElOVDogXCJsb2dpbl9oaW50XCIsXHJcbiAgICBJRF9UT0tFTjogXCJpZF90b2tlblwiLFxyXG4gICAgRE9NQUlOX0hJTlQ6IFwiZG9tYWluX2hpbnRcIixcclxuICAgIE9SR0FOSVpBVElPTlM6IFwib3JnYW5pemF0aW9uc1wiLFxyXG4gICAgQ09OU1VNRVJTOiBcImNvbnN1bWVyc1wiLFxyXG4gICAgQUNDT1VOVF9JRDogXCJhY2NvdW50SWRlbnRpZmllclwiLFxyXG4gICAgSE9NRUFDQ09VTlRfSUQ6IFwiaG9tZUFjY291bnRJZGVudGlmaWVyXCIsXHJcbiAgICBMT0dJTl9SRVE6IFwibG9naW5fcmVxXCIsXHJcbiAgICBET01BSU5fUkVROiBcImRvbWFpbl9yZXFcIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBCbGFja2xpc3RlZEVRUGFyYW1zID0gW1xyXG4gICAgU1NPVHlwZXMuU0lELFxyXG4gICAgU1NPVHlwZXMuTE9HSU5fSElOVFxyXG5dO1xyXG5cclxuZXhwb3J0IHR5cGUgSW50ZXJhY3Rpb25UeXBlID0gXCJyZWRpcmVjdEludGVyYWN0aW9uXCIgfCBcInBvcHVwSW50ZXJhY3Rpb25cIjtcclxuXHJcbi8qKlxyXG4gKiB3ZSBjb25zaWRlcmVkIG1ha2luZyB0aGlzIFwiZW51bVwiIGluIHRoZSByZXF1ZXN0IGluc3RlYWQgb2Ygc3RyaW5nLCBob3dldmVyIGl0IGxvb2tzIGxpa2UgdGhlIGFsbG93ZWQgbGlzdCBvZlxyXG4gKiBwcm9tcHQgdmFsdWVzIGtlcHQgY2hhbmdpbmcgb3ZlciBwYXN0IGNvdXBsZSBvZiB5ZWFycy4gVGhlcmUgYXJlIHNvbWUgdW5kb2N1bWVudGVkIHByb21wdCB2YWx1ZXMgZm9yIHNvbWVcclxuICogaW50ZXJuYWwgcGFydG5lcnMgdG9vLCBoZW5jZSB0aGUgY2hvaWNlIG9mIGdlbmVyaWMgXCJzdHJpbmdcIiB0eXBlIGluc3RlYWQgb2YgdGhlIFwiZW51bVwiXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBQcm9tcHRTdGF0ZSA9IHtcclxuICAgIExPR0lOOiBcImxvZ2luXCIsXHJcbiAgICBTRUxFQ1RfQUNDT1VOVDogXCJzZWxlY3RfYWNjb3VudFwiLFxyXG4gICAgQ09OU0VOVDogXCJjb25zZW50XCIsXHJcbiAgICBOT05FOiBcIm5vbmVcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNU0FMIEpTIExpYnJhcnkgVmVyc2lvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpYnJhcnlWZXJzaW9uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCIxLjEuM1wiO1xyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDcnlwdG9VdGlscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJhbmRvbSBHVUlEIC0gdXNlZCB0byBwb3B1bGF0ZSBzdGF0ZT9cclxuICAgICAqIEByZXR1cm5zIHN0cmluZyAoR1VJRClcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZU5ld0d1aWQoKTogc3RyaW5nIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIFJGQzQxMjI6IFRoZSB2ZXJzaW9uIDQgVVVJRCBpcyBtZWFudCBmb3IgZ2VuZXJhdGluZyBVVUlEcyBmcm9tIHRydWx5LXJhbmRvbSBvclxyXG4gICAgICAgICAqIHBzZXVkby1yYW5kb20gbnVtYmVycy5cclxuICAgICAgICAgKiBUaGUgYWxnb3JpdGhtIGlzIGFzIGZvbGxvd3M6XHJcbiAgICAgICAgICogICAgIFNldCB0aGUgdHdvIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoYml0cyA2IGFuZCA3KSBvZiB0aGVcclxuICAgICAgICAgKiAgICAgICAgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZCB0byB6ZXJvIGFuZCBvbmUsIHJlc3BlY3RpdmVseS5cclxuICAgICAgICAgKiAgICAgU2V0IHRoZSBmb3VyIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoYml0cyAxMiB0aHJvdWdoIDE1KSBvZiB0aGVcclxuICAgICAgICAgKiAgICAgICAgdGltZV9oaV9hbmRfdmVyc2lvbiBmaWVsZCB0byB0aGUgNC1iaXQgdmVyc2lvbiBudW1iZXIgZnJvbVxyXG4gICAgICAgICAqICAgICAgICBTZWN0aW9uIDQuMS4zLiBWZXJzaW9uNFxyXG4gICAgICAgICAqICAgICBTZXQgYWxsIHRoZSBvdGhlciBiaXRzIHRvIHJhbmRvbWx5IChvciBwc2V1ZG8tcmFuZG9tbHkpIGNob3NlblxyXG4gICAgICAgICAqICAgICB2YWx1ZXMuXHJcbiAgICAgICAgICogVVVJRCAgICAgICAgICAgICAgICAgICA9IHRpbWUtbG93IFwiLVwiIHRpbWUtbWlkIFwiLVwidGltZS1oaWdoLWFuZC12ZXJzaW9uIFwiLVwiY2xvY2stc2VxLXJlc2VydmVkIGFuZCBsb3coMmhleE9jdGV0KVwiLVwiIG5vZGVcclxuICAgICAgICAgKiB0aW1lLWxvdyAgICAgICAgICAgICAgID0gNGhleE9jdGV0XHJcbiAgICAgICAgICogdGltZS1taWQgICAgICAgICAgICAgICA9IDJoZXhPY3RldFxyXG4gICAgICAgICAqIHRpbWUtaGlnaC1hbmQtdmVyc2lvbiAgPSAyaGV4T2N0ZXRcclxuICAgICAgICAgKiBjbG9jay1zZXEtYW5kLXJlc2VydmVkID0gaGV4T2N0ZXQ6XHJcbiAgICAgICAgICogY2xvY2stc2VxLWxvdyAgICAgICAgICA9IGhleE9jdGV0XHJcbiAgICAgICAgICogbm9kZSAgICAgICAgICAgICAgICAgICA9IDZoZXhPY3RldFxyXG4gICAgICAgICAqIEZvcm1hdDogeHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XHJcbiAgICAgICAgICogeSBjb3VsZCBiZSAxMDAwLCAxMDAxLCAxMDEwLCAxMDExIHNpbmNlIG1vc3Qgc2lnbmlmaWNhbnQgdHdvIGJpdHMgbmVlZHMgdG8gYmUgMTBcclxuICAgICAgICAgKiB5IHZhbHVlcyBhcmUgOCwgOSwgQSwgQlxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICBjb25zdCBjcnlwdG9PYmo6IENyeXB0byA9IHdpbmRvdy5jcnlwdG87IC8vIGZvciBJRSAxMVxyXG4gICAgICAgIGlmIChjcnlwdG9PYmogJiYgY3J5cHRvT2JqLmdldFJhbmRvbVZhbHVlcykge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXI6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheSgxNik7XHJcbiAgICAgICAgICAgIGNyeXB0b09iai5nZXRSYW5kb21WYWx1ZXMoYnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGJ1ZmZlcls2XSBhbmQgYnVmZmVyWzddIHJlcHJlc2VudHMgdGhlIHRpbWVfaGlfYW5kX3ZlcnNpb24gZmllbGQuIFdlIHdpbGwgc2V0IHRoZSBmb3VyIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoNCB0aHJvdWdoIDcpIG9mIGJ1ZmZlcls2XSB0byByZXByZXNlbnQgZGVjaW1hbCBudW1iZXIgNCAoVVVJRCB2ZXJzaW9uIG51bWJlcikuXHJcbiAgICAgICAgICAgIGJ1ZmZlcls2XSB8PSAweDQwOyAvLyBidWZmZXJbNl0gfCAwMTAwMDAwMCB3aWxsIHNldCB0aGUgNiBiaXQgdG8gMS5cclxuICAgICAgICAgICAgYnVmZmVyWzZdICY9IDB4NGY7IC8vIGJ1ZmZlcls2XSAmIDAxMDAxMTExIHdpbGwgc2V0IHRoZSA0LCA1LCBhbmQgNyBiaXQgdG8gMCBzdWNoIHRoYXQgYml0cyA0LTcgPT0gMDEwMCA9IFwiNFwiLlxyXG5cclxuICAgICAgICAgICAgLy8gYnVmZmVyWzhdIHJlcHJlc2VudHMgdGhlIGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWQgZmllbGQuIFdlIHdpbGwgc2V0IHRoZSB0d28gbW9zdCBzaWduaWZpY2FudCBiaXRzICg2IGFuZCA3KSBvZiB0aGUgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZCB0byB6ZXJvIGFuZCBvbmUsIHJlc3BlY3RpdmVseS5cclxuICAgICAgICAgICAgYnVmZmVyWzhdIHw9IDB4ODA7IC8vIGJ1ZmZlcls4XSB8IDEwMDAwMDAwIHdpbGwgc2V0IHRoZSA3IGJpdCB0byAxLlxyXG4gICAgICAgICAgICBidWZmZXJbOF0gJj0gMHhiZjsgLy8gYnVmZmVyWzhdICYgMTAxMTExMTEgd2lsbCBzZXQgdGhlIDYgYml0IHRvIDAuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclswXSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzFdKVxyXG4gICAgICAgICAgICArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMl0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclszXSlcclxuICAgICAgICAgICAgKyBcIi1cIiArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNF0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls1XSlcclxuICAgICAgICAgICAgKyBcIi1cIiArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNl0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls3XSlcclxuICAgICAgICAgICAgKyBcIi1cIiArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbOF0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls5XSlcclxuICAgICAgICAgICAgKyBcIi1cIiArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTBdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTFdKVxyXG4gICAgICAgICAgICArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTJdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTNdKVxyXG4gICAgICAgICAgICArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTRdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTVdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGd1aWRIb2xkZXI6IHN0cmluZyA9IFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gXCIwMTIzNDU2Nzg5YWJjZGVmXCI7XHJcbiAgICAgICAgICAgIGxldCByOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBsZXQgZ3VpZFJlc3BvbnNlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMzY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGd1aWRIb2xkZXJbaV0gIT09IFwiLVwiICYmIGd1aWRIb2xkZXJbaV0gIT09IFwiNFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZWFjaCB4IGFuZCB5IG5lZWRzIHRvIGJlIHJhbmRvbVxyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBNYXRoLnJhbmRvbSgpICAqIDE2IHwgMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChndWlkSG9sZGVyW2ldID09PSBcInhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBoZXhbcl07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGd1aWRIb2xkZXJbaV0gPT09IFwieVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvY2stc2VxLWFuZC1yZXNlcnZlZCBmaXJzdCBoZXggaXMgZmlsdGVyZWQgYW5kIHJlbWFpbmluZyBoZXggdmFsdWVzIGFyZSByYW5kb21cclxuICAgICAgICAgICAgICAgICAgICByICY9IDB4MzsgLy8gYml0IGFuZCB3aXRoIDAwMTEgdG8gc2V0IHBvcyAyIHRvIHplcm8gPzA/P1xyXG4gICAgICAgICAgICAgICAgICAgIHIgfD0gMHg4OyAvLyBzZXQgcG9zIDMgdG8gMSBhcyAxPz8/XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGhleFtyXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGd1aWRIb2xkZXJbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGd1aWRSZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNpbWFsIHRvIEhleFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBudW1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlY2ltYWxUb0hleChudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGhleDogc3RyaW5nID0gbnVtLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB3aGlsZSAoaGV4Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgaGV4ID0gXCIwXCIgKyBoZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoZXg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nI1NvbHV0aW9uXzRfJUUyJTgwJTkzX2VzY2FwaW5nX3RoZV9zdHJpbmdfYmVmb3JlX2VuY29kaW5nX2l0XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBlbmNvZGluZyBzdHJpbmcgdG8gYmFzZTY0IC0gcGxhdGZvcm0gc3BlY2lmaWMgY2hlY2tcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGJhc2U2NEVuY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRvU29saWRCeXRlcyhtYXRjaCwgcDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKE51bWJlcihcIjB4XCIgKyBwMSkpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkZWNvZGluZyBiYXNlNjQgdG9rZW4gLSBwbGF0Zm9ybSBzcGVjaWZpYyBjaGVja1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBiYXNlNjRJZFRva2VuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBiYXNlNjREZWNvZGUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhdG9iKGlucHV0KS5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24oYykge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIlXCIgKyAoXCIwMFwiICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gICAgICAgIH0pLmpvaW4oXCJcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGVzZXJpYWxpemUgYSBzdHJpbmdcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcXVlcnlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGRlc2VyaWFsaXplKHF1ZXJ5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGxldCBtYXRjaDogQXJyYXk8c3RyaW5nPjsgLy8gUmVnZXggZm9yIHJlcGxhY2luZyBhZGRpdGlvbiBzeW1ib2wgd2l0aCBhIHNwYWNlXHJcbiAgICAgICAgY29uc3QgcGwgPSAvXFwrL2c7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gLyhbXiY9XSspPShbXiZdKikvZztcclxuICAgICAgICBjb25zdCBkZWNvZGUgPSAoczogc3RyaW5nKSA9PiBkZWNvZGVVUklDb21wb25lbnQocy5yZXBsYWNlKHBsLCBcIiBcIikpO1xyXG4gICAgICAgIGNvbnN0IG9iajoge30gPSB7fTtcclxuICAgICAgICBtYXRjaCA9IHNlYXJjaC5leGVjKHF1ZXJ5KTtcclxuICAgICAgICB3aGlsZSAobWF0Y2gpIHtcclxuICAgICAgICAgICAgb2JqW2RlY29kZShtYXRjaFsxXSldID0gZGVjb2RlKG1hdGNoWzJdKTtcclxuICAgICAgICAgICAgbWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuLi9JVXJpXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cywgU1NPVHlwZXMgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vU2VydmVyUmVxdWVzdFBhcmFtZXRlcnNcIjtcclxuaW1wb3J0IHsgU2NvcGVTZXQgfSBmcm9tIFwiLi4vU2NvcGVTZXRcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL0NyeXB0b1V0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVybFV0aWxzIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlcyB0aGUgVVJMIHdpdGggUXVlcnlTdHJpbmcgUGFyYW1ldGVyc1xyXG4gICAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlTmF2aWdhdGVVcmwoc2VydmVyUmVxdWVzdFBhcmFtczogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHRoaXMuY3JlYXRlTmF2aWdhdGlvblVybFN0cmluZyhzZXJ2ZXJSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICBsZXQgYXV0aEVuZHBvaW50OiBzdHJpbmcgPSBzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmF1dGhvcml0eUluc3RhbmNlLkF1dGhvcml6YXRpb25FbmRwb2ludDtcclxuICAgICAgICAvLyBpZiB0aGUgZW5kcG9pbnQgYWxyZWFkeSBoYXMgcXVlcnlwYXJhbXMsIGxldHMgYWRkIHRvIGl0LCBvdGhlcndpc2UgYWRkIHRoZSBmaXJzdCBvbmVcclxuICAgICAgICBpZiAoYXV0aEVuZHBvaW50LmluZGV4T2YoXCI/XCIpIDwgMCkge1xyXG4gICAgICAgICAgICBhdXRoRW5kcG9pbnQgKz0gXCI/XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXV0aEVuZHBvaW50ICs9IFwiJlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFVybDogc3RyaW5nID0gYCR7YXV0aEVuZHBvaW50fSR7c3RyLmpvaW4oXCImXCIpfWA7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSB0aGUgYXJyYXkgb2YgYWxsIFF1ZXJ5U3RyaW5nUGFyYW1zIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxyXG4gICAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlTmF2aWdhdGlvblVybFN0cmluZyhzZXJ2ZXJSZXF1ZXN0UGFyYW1zOiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IHNjb3BlcyA9IHNlcnZlclJlcXVlc3RQYXJhbXMuc2NvcGVzO1xyXG5cclxuICAgICAgICBpZiAoc2NvcGVzLmluZGV4T2Yoc2VydmVyUmVxdWVzdFBhcmFtcy5jbGllbnRJZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHNjb3Blcy5wdXNoKHNlcnZlclJlcXVlc3RQYXJhbXMuY2xpZW50SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHI6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgICBzdHIucHVzaChcInJlc3BvbnNlX3R5cGU9XCIgKyBzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnJlc3BvbnNlVHlwZSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlY2xpZW50SWRVc2VkSW5TY29wZShzY29wZXMsIHNlcnZlclJlcXVlc3RQYXJhbXMuY2xpZW50SWQpO1xyXG4gICAgICAgIHN0ci5wdXNoKFwic2NvcGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoU2NvcGVTZXQucGFyc2VTY29wZShzY29wZXMpKSk7XHJcbiAgICAgICAgc3RyLnB1c2goXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5jbGllbnRJZCkpO1xyXG4gICAgICAgIHN0ci5wdXNoKFwicmVkaXJlY3RfdXJpPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMucmVkaXJlY3RVcmkpKTtcclxuXHJcbiAgICAgICAgc3RyLnB1c2goXCJzdGF0ZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnN0YXRlKSk7XHJcbiAgICAgICAgc3RyLnB1c2goXCJub25jZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLm5vbmNlKSk7XHJcblxyXG4gICAgICAgIHN0ci5wdXNoKFwiY2xpZW50X2luZm89MVwiKTtcclxuICAgICAgICBzdHIucHVzaChgeC1jbGllbnQtU0tVPSR7c2VydmVyUmVxdWVzdFBhcmFtcy54Q2xpZW50U2t1fWApO1xyXG4gICAgICAgIHN0ci5wdXNoKGB4LWNsaWVudC1WZXI9JHtzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnhDbGllbnRWZXJ9YCk7XHJcbiAgICAgICAgaWYgKHNlcnZlclJlcXVlc3RQYXJhbXMucHJvbXB0VmFsdWUpIHtcclxuICAgICAgICAgICAgc3RyLnB1c2goXCJwcm9tcHQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5wcm9tcHRWYWx1ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlcnZlclJlcXVlc3RQYXJhbXMuY2xhaW1zVmFsdWUpIHtcclxuICAgICAgICAgICAgc3RyLnB1c2goXCJjbGFpbXM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5jbGFpbXNWYWx1ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlcnZlclJlcXVlc3RQYXJhbXMucXVlcnlQYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgIHN0ci5wdXNoKHNlcnZlclJlcXVlc3RQYXJhbXMucXVlcnlQYXJhbWV0ZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmV4dHJhUXVlcnlQYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgIHN0ci5wdXNoKHNlcnZlclJlcXVlc3RQYXJhbXMuZXh0cmFRdWVyeVBhcmFtZXRlcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RyLnB1c2goXCJjbGllbnQtcmVxdWVzdC1pZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNvcnJlbGF0aW9uSWQpKTtcclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYXBwZW5kIHRoZSByZXF1aXJlZCBzY29wZXM6IGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1iYXNpYy0xXzAuaHRtbCNTY29wZXNcclxuICAgICAqIEBwYXJhbSBzY29wZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdHJhbnNsYXRlY2xpZW50SWRVc2VkSW5TY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4sIGNsaWVudElkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjbGllbnRJZEluZGV4OiBudW1iZXIgPSBzY29wZXMuaW5kZXhPZihjbGllbnRJZCk7XHJcbiAgICAgICAgaWYgKGNsaWVudElkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBzY29wZXMuc3BsaWNlKGNsaWVudElkSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBpZiAoc2NvcGVzLmluZGV4T2YoXCJvcGVuaWRcIikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZXMucHVzaChcIm9wZW5pZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2NvcGVzLmluZGV4T2YoXCJwcm9maWxlXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgc2NvcGVzLnB1c2goXCJwcm9maWxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBjdXJyZW50IHdpbmRvdyBVUkwgYXMgcmVkaXJlY3QgdXJpXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXREZWZhdWx0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdLnNwbGl0KFwiI1wiKVswXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgdXJsIGxpa2UgaHR0cHM6Ly9hOmIvY29tbW9uL2Q/ZT1mI2csIGFuZCBhIHRlbmFudElkLCByZXR1cm5zIGh0dHBzOi8vYTpiL3RlbmFudElkL2RcclxuICAgICAqIEBwYXJhbSBocmVmIFRoZSB1cmxcclxuICAgICAqIEBwYXJhbSB0ZW5hbnRJZCBUaGUgdGVuYW50IGlkIHRvIHJlcGxhY2VcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJlcGxhY2VUZW5hbnRQYXRoKHVybDogc3RyaW5nLCB0ZW5hbnRJZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICB1cmwgPSB1cmwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCB1cmxPYmplY3QgPSB0aGlzLkdldFVybENvbXBvbmVudHModXJsKTtcclxuICAgICAgICBjb25zdCBwYXRoQXJyYXkgPSB1cmxPYmplY3QuUGF0aFNlZ21lbnRzO1xyXG4gICAgICAgIGlmICh0ZW5hbnRJZCAmJiAocGF0aEFycmF5Lmxlbmd0aCAhPT0gMCAmJiAocGF0aEFycmF5WzBdID09PSBDb25zdGFudHMuY29tbW9uIHx8IHBhdGhBcnJheVswXSA9PT0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUykpKSB7XHJcbiAgICAgICAgICAgIHBhdGhBcnJheVswXSA9IHRlbmFudElkO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RBdXRob3JpdHlVcmlGcm9tT2JqZWN0KHVybE9iamVjdCwgcGF0aEFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3Q6IElVcmksIHBhdGhBcnJheTogc3RyaW5nW10pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5DYW5vbmljYWxpemVVcmkodXJsT2JqZWN0LlByb3RvY29sICsgXCIvL1wiICsgdXJsT2JqZWN0Lkhvc3ROYW1lQW5kUG9ydCArIFwiL1wiICsgcGF0aEFycmF5LmpvaW4oXCIvXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhcnNlcyBvdXQgdGhlIGNvbXBvbmVudHMgZnJvbSBhIHVybCBzdHJpbmcuXHJcbiAgICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgdmFyaW91cyBjb21wb25lbnRzLiBQbGVhc2UgY2FjaGUgdGhpcyB2YWx1ZSBpbnN0ZWQgb2YgY2FsbGluZyB0aGlzIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIHVybC5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIEdldFVybENvbXBvbmVudHModXJsOiBzdHJpbmcpOiBJVXJpIHtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIlVybCByZXF1aXJlZFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vY3VydGlzei8xMTEzOWIyY2ZjYWVmNGEyNjFlMFxyXG4gICAgICAgIGNvbnN0IHJlZ0V4ID0gUmVnRXhwKFwiXigoW146Lz8jXSspOik/KC8vKFteLz8jXSopKT8oW14/I10qKShcXFxcPyhbXiNdKikpPygjKC4qKSk/XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdFeCk7XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2ggfHwgbWF0Y2gubGVuZ3RoIDwgNikge1xyXG4gICAgICAgICAgICB0aHJvdyBcIlZhbGlkIHVybCByZXF1aXJlZFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXJsQ29tcG9uZW50cyA9IDxJVXJpPntcclxuICAgICAgICAgICAgUHJvdG9jb2w6IG1hdGNoWzFdLFxyXG4gICAgICAgICAgICBIb3N0TmFtZUFuZFBvcnQ6IG1hdGNoWzRdLFxyXG4gICAgICAgICAgICBBYnNvbHV0ZVBhdGg6IG1hdGNoWzVdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHBhdGhTZWdtZW50cyA9IHVybENvbXBvbmVudHMuQWJzb2x1dGVQYXRoLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBwYXRoU2VnbWVudHMgPSBwYXRoU2VnbWVudHMuZmlsdGVyKCh2YWwpID0+IHZhbCAmJiB2YWwubGVuZ3RoID4gMCk7IC8vIHJlbW92ZSBlbXB0eSBlbGVtZW50c1xyXG4gICAgICAgIHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzO1xyXG4gICAgICAgIHJldHVybiB1cmxDb21wb25lbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gYSB1cmwgb3IgcGF0aCwgYXBwZW5kIGEgdHJhaWxpbmcgc2xhc2ggaWYgb25lIGRvZXNudCBleGlzdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqL1xyXG4gICAgc3RhdGljIENhbm9uaWNhbGl6ZVVyaSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1cmwgJiYgIVVybFV0aWxzLmVuZHNXaXRoKHVybCwgXCIvXCIpKSB7XHJcbiAgICAgICAgICAgIHVybCArPSBcIi9cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSB1cmwgZW5kcyB3aXRoIHRoZSBzdWZmaXhcclxuICAgICAqIFJlcXVpcmVkIGJlY2F1c2Ugd2UgYXJlIGNvbXBpbGluZyBmb3IgZXM1IGluc3RlYWQgb2YgZXM2XHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKiBAcGFyYW0gc3RyXHJcbiAgICAgKi9cclxuICAgIC8vIFRPRE86IFJlbmFtZSB0aGlzLCBub3QgY2xlYXIgd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBkb1xyXG4gICAgc3RhdGljIGVuZHNXaXRoKHVybDogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdXJsIHx8ICFzdWZmaXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVybC5pbmRleE9mKHN1ZmZpeCwgdXJsLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFV0aWxzIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgbG9naW5faGludCBhbmQgZG9tYWluX2hpbnQgZnJvbSB0aGUgaS9wIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdXJsUmVtb3ZlUXVlcnlTdHJpbmdQYXJhbWV0ZXIodXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodXJsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcXFxcJlwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcclxuICAgICAgICAvLyBuYW1lPXZhbHVlJlxyXG4gICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcIiArIG5hbWUgKyBcIj0pW15cXCZdKyZcIik7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgICAgIC8vIG5hbWU9dmFsdWVcclxuICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBuYW1lICsgXCI9KVteXFwmXStcIik7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKlxyXG4gICAgICogUmV0dXJucyB0aGUgYW5jaG9yIHBhcnQoIykgb2YgdGhlIFVSTFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SGFzaEZyb21VcmwodXJsU3RyaW5nT3JGcmFnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBoYXNoSW5kZXgxID0gdXJsU3RyaW5nT3JGcmFnbWVudC5pbmRleE9mKFwiI1wiKTtcclxuICAgICAgICBjb25zdCBoYXNoSW5kZXgyID0gdXJsU3RyaW5nT3JGcmFnbWVudC5pbmRleE9mKFwiIy9cIik7XHJcbiAgICAgICAgaWYgKGhhc2hJbmRleDIgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXJsU3RyaW5nT3JGcmFnbWVudC5zdWJzdHJpbmcoaGFzaEluZGV4MiArIDIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzaEluZGV4MSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmxTdHJpbmdPckZyYWdtZW50LnN1YnN0cmluZyhoYXNoSW5kZXgxICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmxTdHJpbmdPckZyYWdtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQ2hlY2sgaWYgdGhlIHVybCBjb250YWlucyBhIGhhc2ggd2l0aCBrbm93biBwcm9wZXJ0aWVzXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyB1cmxDb250YWluc0hhc2godXJsU3RyaW5nOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gVXJsVXRpbHMuZGVzZXJpYWxpemVIYXNoKHVybFN0cmluZyk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbikgfHxcclxuICAgICAgICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3IpIHx8XHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmFjY2Vzc1Rva2VuKSB8fFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5pZFRva2VuKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBSZXR1cm5zIGRlc2VyaWFsaXplZCBwb3J0aW9uIG9mIFVSTCBoYXNoXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZUhhc2godXJsRnJhZ21lbnQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGhhc2ggPSBVcmxVdGlscy5nZXRIYXNoRnJvbVVybCh1cmxGcmFnbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIENyeXB0b1V0aWxzLmRlc2VyaWFsaXplKGhhc2gpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9DbGllbnRBdXRoRXJyb3JcIjtcclxuaW1wb3J0IHsgVGVsZW1ldHJ5T3B0aW9ucyB9IGZyb20gXCIuLi9Db25maWd1cmF0aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSA9IHtcclxuICAgIGNvbmZpZ3VyYXRpb25Ob3RTZXQ6IHtcclxuICAgICAgICBjb2RlOiBcIm5vX2NvbmZpZ19zZXRcIixcclxuICAgICAgICBkZXNjOiBcIkNvbmZpZ3VyYXRpb24gaGFzIG5vdCBiZWVuIHNldC4gUGxlYXNlIGNhbGwgdGhlIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGNvbnN0cnVjdG9yIHdpdGggYSB2YWxpZCBDb25maWd1cmF0aW9uIG9iamVjdC5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRDYWNoZUxvY2F0aW9uOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2NhY2hlX2xvY2F0aW9uXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGUgbG9jYXRpb24gcHJvdmlkZWQgaXMgbm90IHZhbGlkLlwiXHJcbiAgICB9LFxyXG4gICAgbm9TdG9yYWdlU3VwcG9ydGVkOiB7XHJcbiAgICAgICAgY29kZTogXCJicm93c2VyX3N0b3JhZ2Vfbm90X3N1cHBvcnRlZFwiLFxyXG4gICAgICAgIGRlc2M6IFwibG9jYWxTdG9yYWdlIGFuZCBzZXNzaW9uU3RvcmFnZSBhcmUgbm90IHN1cHBvcnRlZC5cIlxyXG4gICAgfSxcclxuICAgIG5vUmVkaXJlY3RDYWxsYmFja3NTZXQ6IHtcclxuICAgICAgICBjb2RlOiBcIm5vX3JlZGlyZWN0X2NhbGxiYWNrc1wiLFxyXG4gICAgICAgIGRlc2M6IFwiTm8gcmVkaXJlY3QgY2FsbGJhY2tzIGhhdmUgYmVlbiBzZXQuIFBsZWFzZSBjYWxsIHNldFJlZGlyZWN0Q2FsbGJhY2tzKCkgd2l0aCB0aGUgYXBwcm9wcmlhdGUgZnVuY3Rpb24gYXJndW1lbnRzIGJlZm9yZSBjb250aW51aW5nLiBcIiArXHJcbiAgICAgICAgICAgIFwiTW9yZSBpbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0F6dXJlQUQvbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL3dpa2kvTVNBTC1iYXNpY3MuXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkQ2FsbGJhY2tPYmplY3Q6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfY2FsbGJhY2tfb2JqZWN0XCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgb2JqZWN0IHBhc3NlZCBmb3IgdGhlIGNhbGxiYWNrIHdhcyBpbnZhbGlkLiBcIiArXHJcbiAgICAgICAgICBcIk1vcmUgaW5mb3JtYXRpb24gaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9BenVyZUFEL21pY3Jvc29mdC1hdXRoZW50aWNhdGlvbi1saWJyYXJ5LWZvci1qcy93aWtpL01TQUwtYmFzaWNzLlwiXHJcbiAgICB9LFxyXG4gICAgc2NvcGVzUmVxdWlyZWQ6IHtcclxuICAgICAgICBjb2RlOiBcInNjb3Blc19yZXF1aXJlZFwiLFxyXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGFyZSByZXF1aXJlZCB0byBvYnRhaW4gYW4gYWNjZXNzIHRva2VuLlwiXHJcbiAgICB9LFxyXG4gICAgZW1wdHlTY29wZXM6IHtcclxuICAgICAgICBjb2RlOiBcImVtcHR5X2lucHV0X3Njb3Blc19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGNhbm5vdCBiZSBwYXNzZWQgYXMgZW1wdHkgYXJyYXkuXCJcclxuICAgIH0sXHJcbiAgICBub25BcnJheVNjb3Blczoge1xyXG4gICAgICAgIGNvZGU6IFwibm9uYXJyYXlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJTY29wZXMgY2Fubm90IGJlIHBhc3NlZCBhcyBub24tYXJyYXkuXCJcclxuICAgIH0sXHJcbiAgICBjbGllbnRTY29wZToge1xyXG4gICAgICAgIGNvZGU6IFwiY2xpZW50aWRfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJDbGllbnQgSUQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgYXMgYSBzaW5nbGUgc2NvcGUuXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkUHJvbXB0OiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX3Byb21wdF92YWx1ZVwiLFxyXG4gICAgICAgIGRlc2M6IFwiU3VwcG9ydGVkIHByb21wdCB2YWx1ZXMgYXJlICdsb2dpbicsICdzZWxlY3RfYWNjb3VudCcsICdjb25zZW50JyBhbmQgJ25vbmUnXCIsXHJcbiAgICB9LFxyXG4gICAgaW52YWxpZEF1dGhvcml0eVR5cGU6IHtcclxuICAgICAgICBjb2RlOiBcImludmFsaWRfYXV0aG9yaXR5X3R5cGVcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBnaXZlbiBhdXRob3JpdHkgaXMgbm90IGEgdmFsaWQgdHlwZSBvZiBhdXRob3JpdHkgc3VwcG9ydGVkIGJ5IE1TQUwuIFBsZWFzZSBzZWUgaGVyZSBmb3IgdmFsaWQgYXV0aG9yaXRpZXM6IDxpbnNlcnQgVVJMIGhlcmU+LlwiXHJcbiAgICB9LFxyXG4gICAgYXV0aG9yaXR5VXJpSW5zZWN1cmU6IHtcclxuICAgICAgICBjb2RlOiBcImF1dGhvcml0eV91cmlfaW5zZWN1cmVcIixcclxuICAgICAgICBkZXNjOiBcIkF1dGhvcml0eSBVUklzIG11c3QgdXNlIGh0dHBzLlwiXHJcbiAgICB9LFxyXG4gICAgYXV0aG9yaXR5VXJpSW52YWxpZFBhdGg6IHtcclxuICAgICAgICBjb2RlOiBcImF1dGhvcml0eV91cmlfaW52YWxpZF9wYXRoXCIsXHJcbiAgICAgICAgZGVzYzogXCJHaXZlbiBhdXRob3JpdHkgVVJJIGlzIGludmFsaWQuXCJcclxuICAgIH0sXHJcbiAgICB1bnN1cHBvcnRlZEF1dGhvcml0eVZhbGlkYXRpb246IHtcclxuICAgICAgICBjb2RlOiBcInVuc3VwcG9ydGVkX2F1dGhvcml0eV92YWxpZGF0aW9uXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgYXV0aG9yaXR5IHZhbGlkYXRpb24gaXMgbm90IHN1cHBvcnRlZCBmb3IgdGhpcyBhdXRob3JpdHkgdHlwZS5cIlxyXG4gICAgfSxcclxuICAgIGIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoOiB7XHJcbiAgICAgICAgY29kZTogXCJiMmNfYXV0aG9yaXR5X3VyaV9pbnZhbGlkX3BhdGhcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBnaXZlbiBVUkkgZm9yIHRoZSBCMkMgYXV0aG9yaXR5IGlzIGludmFsaWQuXCJcclxuICAgIH0sXHJcbiAgICBjbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjbGFpbXNfcmVxdWVzdF9wYXJzaW5nX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJDb3VsZCBub3QgcGFyc2UgdGhlIGdpdmVuIGNsYWltcyByZXF1ZXN0IG9iamVjdC5cIlxyXG4gICAgfSxcclxuICAgIGVtcHR5UmVxdWVzdEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJlbXB0eV9yZXF1ZXN0X2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJSZXF1ZXN0IG9iamVjdCBpcyByZXF1aXJlZC5cIlxyXG4gICAgfSxcclxuICAgIHRlbGVtZXRyeUNvbmZpZ0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ0ZWxlbWV0cnlfY29uZmlnX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJUZWxlbWV0cnkgY29uZmlnIGlzIG5vdCBjb25maWd1cmVkIHdpdGggcmVxdWlyZWQgdmFsdWVzXCJcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciBpbiBjb25maWd1cmF0aW9uIG9mIHRoZSAuanMgbGlicmFyeS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgZXh0ZW5kcyBDbGllbnRBdXRoRXJyb3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZU5vU2V0Q29uZmlndXJhdGlvbkVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jb25maWd1cmF0aW9uTm90U2V0LmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY29uZmlndXJhdGlvbk5vdFNldC5kZXNjfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkQ2FjaGVMb2NhdGlvbkNvbmZpZ0Vycm9yKGdpdmVuQ2FjaGVMb2NhdGlvbjogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWNoZUxvY2F0aW9uLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhY2hlTG9jYXRpb24uZGVzY30gUHJvdmlkZWQgdmFsdWU6ICR7Z2l2ZW5DYWNoZUxvY2F0aW9ufS4gUG9zc2libGUgdmFsdWVzIGFyZTogJHtDb25zdGFudHMuY2FjaGVMb2NhdGlvbkxvY2FsfSwgJHtDb25zdGFudHMuY2FjaGVMb2NhdGlvblNlc3Npb259LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVOb1N0b3JhZ2VTdXBwb3J0ZWRFcnJvcigpIDogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vU3RvcmFnZVN1cHBvcnRlZC5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vU3RvcmFnZVN1cHBvcnRlZC5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9SZWRpcmVjdENhbGxiYWNrc1NldC5jb2RlLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vUmVkaXJlY3RDYWxsYmFja3NTZXQuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDYWxsYmFja09iamVjdEVycm9yKGNhbGxiYWNrT2JqZWN0OiBvYmplY3QpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhbGxiYWNrT2JqZWN0LmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhbGxiYWNrT2JqZWN0LmRlc2N9IEdpdmVuIHZhbHVlIGZvciBjYWxsYmFjayBmdW5jdGlvbjogJHtjYWxsYmFja09iamVjdH1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlRW1wdHlTY29wZXNBcnJheUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXMuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5lbXB0eVNjb3Blcy5kZXNjfSBHaXZlbiB2YWx1ZTogJHtzY29wZXNWYWx1ZX0uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVNjb3Blc05vbkFycmF5RXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub25BcnJheVNjb3Blcy5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SWRTaW5nbGVTY29wZUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY2xpZW50U2NvcGUuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGllbnRTY29wZS5kZXNjfSBHaXZlbiB2YWx1ZTogJHtzY29wZXNWYWx1ZX0uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVNjb3Blc1JlcXVpcmVkRXJyb3Ioc2NvcGVzVmFsdWU6IGFueSk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5zY29wZXNSZXF1aXJlZC5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnNjb3Blc1JlcXVpcmVkLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0VmFsdWU6IGFueSk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkUHJvbXB0LmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZFByb21wdC5kZXNjfSBHaXZlbiB2YWx1ZTogJHtwcm9tcHRWYWx1ZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihjbGFpbXNSZXF1ZXN0UGFyc2VFcnJvcjogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yLmRlc2N9IEdpdmVuIHZhbHVlOiAke2NsYWltc1JlcXVlc3RQYXJzZUVycm9yfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVJlcXVlc3RFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xyXG4gICAgICAgIGNvbnN0IHsgY29kZSwgZGVzYyB9ID0gQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5lbXB0eVJlcXVlc3RFcnJvcjtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihjb2RlLCBkZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVGVsZW1ldHJ5Q29uZmlnRXJyb3IoY29uZmlnOiBUZWxlbWV0cnlPcHRpb25zKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcclxuICAgICAgICBjb25zdCB7IGNvZGUsIGRlc2MgfSA9IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UudGVsZW1ldHJ5Q29uZmlnRXJyb3I7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRLZXlzID0ge1xyXG4gICAgICAgICAgICBhcHBsaWNhdGlvbk5hbWU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uVmVyc2lvbjogXCJzdHJpbmdcIixcclxuICAgICAgICAgICAgdGVsZW1ldHJ5RW1pdHRlcjogXCJmdW5jdGlvblwiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbWlzc2luZ0tleXMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZEtleXMpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKGtleXMsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZ1trZXldID8ga2V5cyA6IGtleXMuY29uY2F0KFsgYCR7a2V5fSAoJHtyZXF1aXJlZEtleXNba2V5XX0pYCBdKTtcclxuICAgICAgICAgICAgfSwgW10pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihjb2RlLCBgJHtkZXNjfSBtaXNpbmcgdmFsdWVzOiAke21pc3NpbmdLZXlzLmpvaW4oXCIsXCIpfWApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vQXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi4vSWRUb2tlblwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudEF1dGhFcnJvck1lc3NhZ2UgPSB7XHJcbiAgICBtdWx0aXBsZU1hdGNoaW5nVG9rZW5zOiB7XHJcbiAgICAgICAgY29kZTogXCJtdWx0aXBsZV9tYXRjaGluZ190b2tlbnNcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBjYWNoZSBjb250YWlucyBtdWx0aXBsZSB0b2tlbnMgc2F0aXNmeWluZyB0aGUgcmVxdWlyZW1lbnRzLiBcIiArXHJcbiAgICAgICAgICAgIFwiQ2FsbCBBY3F1aXJlVG9rZW4gYWdhaW4gcHJvdmlkaW5nIG1vcmUgcmVxdWlyZW1lbnRzIGxpa2UgYXV0aG9yaXR5LlwiXHJcbiAgICB9LFxyXG4gICAgbXVsdGlwbGVDYWNoZUF1dGhvcml0aWVzOiB7XHJcbiAgICAgICAgY29kZTogXCJtdWx0aXBsZV9hdXRob3JpdGllc1wiLFxyXG4gICAgICAgIGRlc2M6IFwiTXVsdGlwbGUgYXV0aG9yaXRpZXMgZm91bmQgaW4gdGhlIGNhY2hlLiBQYXNzIGF1dGhvcml0eSBpbiB0aGUgQVBJIG92ZXJsb2FkLlwiXHJcbiAgICB9LFxyXG4gICAgZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImVuZHBvaW50c19yZXNvbHV0aW9uX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJFcnJvcjogY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzLiBQbGVhc2UgY2hlY2sgbmV0d29yayBhbmQgdHJ5IGFnYWluLlwiXHJcbiAgICB9LFxyXG4gICAgcG9wVXBXaW5kb3dFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwicG9wdXBfd2luZG93X2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJFcnJvciBvcGVuaW5nIHBvcHVwIHdpbmRvdy4gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBhcmUgdXNpbmcgSUUgb3IgaWYgcG9wdXBzIGFyZSBibG9ja2VkIGluIHRoZSBicm93c2VyLlwiXHJcbiAgICB9LFxyXG4gICAgdG9rZW5SZW5ld2FsRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInRva2VuX3JlbmV3YWxfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIlRva2VuIHJlbmV3YWwgb3BlcmF0aW9uIGZhaWxlZCBkdWUgdG8gdGltZW91dC5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRJZFRva2VuOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2lkX3Rva2VuXCIsXHJcbiAgICAgICAgZGVzYzogXCJJbnZhbGlkIElEIHRva2VuIGZvcm1hdC5cIlxyXG4gICAgfSxcclxuICAgIGludmFsaWRTdGF0ZUVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX3N0YXRlX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJJbnZhbGlkIHN0YXRlLlwiXHJcbiAgICB9LFxyXG4gICAgbm9uY2VNaXNtYXRjaEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJub25jZV9taXNtYXRjaF9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiTm9uY2UgaXMgbm90IG1hdGNoaW5nLCBOb25jZSByZWNlaXZlZDogXCJcclxuICAgIH0sXHJcbiAgICBsb2dpblByb2dyZXNzRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcImxvZ2luX3Byb2dyZXNzX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJMb2dpbl9Jbl9Qcm9ncmVzczogRXJyb3IgZHVyaW5nIGxvZ2luIGNhbGwgLSBsb2dpbiBpcyBhbHJlYWR5IGluIHByb2dyZXNzLlwiXHJcbiAgICB9LFxyXG4gICAgYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiYWNxdWlyZXRva2VuX3Byb2dyZXNzX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJBY3F1aXJlVG9rZW5fSW5fUHJvZ3Jlc3M6IEVycm9yIGR1cmluZyBsb2dpbiBjYWxsIC0gbG9naW4gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcy5cIlxyXG4gICAgfSxcclxuICAgIHVzZXJDYW5jZWxsZWRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidXNlcl9jYW5jZWxsZWRcIixcclxuICAgICAgICBkZXNjOiBcIlVzZXIgY2FuY2VsbGVkIHRoZSBmbG93LlwiXHJcbiAgICB9LFxyXG4gICAgY2FsbGJhY2tFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiY2FsbGJhY2tfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIkVycm9yIG9jY3VycmVkIGluIHRva2VuIHJlY2VpdmVkIGNhbGxiYWNrIGZ1bmN0aW9uLlwiXHJcbiAgICB9LFxyXG4gICAgdXNlckxvZ2luUmVxdWlyZWRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidXNlcl9sb2dpbl9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVXNlciBsb2dpbiBpcyByZXF1aXJlZC5cIlxyXG4gICAgfSxcclxuICAgIHVzZXJEb2VzTm90RXhpc3RFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidXNlcl9ub25fZXhpc3RlbnRcIixcclxuICAgICAgICBkZXNjOiBcIlVzZXIgb2JqZWN0IGRvZXMgbm90IGV4aXN0LiBQbGVhc2UgY2FsbCBhIGxvZ2luIEFQSS5cIlxyXG4gICAgfSxcclxuICAgIGNsaWVudEluZm9EZWNvZGluZ0Vycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJjbGllbnRfaW5mb19kZWNvZGluZ19lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIGNsaWVudCBpbmZvIGNvdWxkIG5vdCBiZSBwYXJzZWQvZGVjb2RlZCBjb3JyZWN0bHkuIFBsZWFzZSByZXZpZXcgdGhlIHRyYWNlIHRvIGRldGVybWluZSB0aGUgcm9vdCBjYXVzZS5cIlxyXG4gICAgfSxcclxuICAgIGNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwiY2xpZW50X2luZm9fbm90X3BvcHVsYXRlZF9lcnJvclwiLFxyXG4gICAgICAgIGRlc2M6IFwiVGhlIHNlcnZpY2UgZGlkIG5vdCBwb3B1bGF0ZSBjbGllbnRfaW5mbyBpbiB0aGUgcmVzcG9uc2UsIFBsZWFzZSB2ZXJpZnkgd2l0aCB0aGUgc2VydmljZSB0ZWFtXCJcclxuICAgIH0sXHJcbiAgICBudWxsT3JFbXB0eUlkVG9rZW46IHtcclxuICAgICAgICBjb2RlOiBcIm51bGxfb3JfZW1wdHlfaWRfdG9rZW5cIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBpZFRva2VuIGlzIG51bGwgb3IgZW1wdHkuIFBsZWFzZSByZXZpZXcgdGhlIHRyYWNlIHRvIGRldGVybWluZSB0aGUgcm9vdCBjYXVzZS5cIlxyXG4gICAgfSxcclxuICAgIGlkVG9rZW5Ob3RQYXJzZWQ6IHtcclxuICAgICAgICBjb2RlOiBcImlkX3Rva2VuX3BhcnNpbmdfZXJyb3JcIixcclxuICAgICAgICBkZXNjOiBcIklEIHRva2VuIGNhbm5vdCBiZSBwYXJzZWQuIFBsZWFzZSByZXZpZXcgc3RhY2sgdHJhY2UgdG8gZGV0ZXJtaW5lIHJvb3QgY2F1c2UuXCJcclxuICAgIH0sXHJcbiAgICB0b2tlbkVuY29kaW5nRXJyb3I6IHtcclxuICAgICAgICBjb2RlOiBcInRva2VuX2VuY29kaW5nX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJUaGUgdG9rZW4gdG8gYmUgZGVjb2RlZCBpcyBub3QgZW5jb2RlZCBjb3JyZWN0bHkuXCJcclxuICAgIH0sXHJcbiAgICBpbnZhbGlkSW50ZXJhY3Rpb25UeXBlOiB7XHJcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2ludGVyYWN0aW9uX3R5cGVcIixcclxuICAgICAgICBkZXNjOiBcIlRoZSBpbnRlcmFjdGlvbiB0eXBlIHBhc3NlZCB0byB0aGUgaGFuZGxlciB3YXMgaW5jb3JyZWN0IG9yIHVua25vd25cIlxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBjbGllbnQgY29kZSBydW5uaW5nIG9uIHRoZSBicm93c2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsaWVudEF1dGhFcnJvciBleHRlbmRzIEF1dGhFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudEF1dGhFcnJvclwiO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQ2xpZW50QXV0aEVycm9yLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyckRldGFpbD86IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuZGVzYztcclxuICAgICAgICBpZiAoZXJyRGV0YWlsICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGVyckRldGFpbCkpIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGAgRGV0YWlsczogJHtlcnJEZXRhaWx9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5jb2RlLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3BlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ1Rva2Vucy5jb2RlLFxyXG4gICAgICAgICAgICBgQ2FjaGUgZXJyb3IgZm9yIHNjb3BlICR7c2NvcGV9OiAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ1Rva2Vucy5kZXNjfS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlTXVsdGlwbGVBdXRob3JpdGllc0luQ2FjaGVFcnJvcihzY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm11bHRpcGxlQ2FjaGVBdXRob3JpdGllcy5jb2RlLFxyXG4gICAgICAgICAgICBgQ2FjaGUgZXJyb3IgZm9yIHNjb3BlICR7c2NvcGV9OiAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVDYWNoZUF1dGhvcml0aWVzLmRlc2N9LmApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVQb3B1cFdpbmRvd0Vycm9yKGVyckRldGFpbD86IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5kZXNjO1xyXG4gICAgICAgIGlmIChlcnJEZXRhaWwgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkoZXJyRGV0YWlsKSkge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYCBEZXRhaWxzOiAke2VyckRldGFpbH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuY29kZSwgZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVG9rZW5SZW5ld2FsVGltZW91dEVycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlblJlbmV3YWxFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuUmVuZXdhbEVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkSWRUb2tlbkVycm9yKGlkVG9rZW46IElkVG9rZW4pIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRJZFRva2VuLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZElkVG9rZW4uZGVzY30gR2l2ZW4gdG9rZW46ICR7aWRUb2tlbn1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBJcyB0aGlzIG5vdCBhIHNlY3VyaXR5IGZsYXcgdG8gc2VuZCB0aGUgdXNlciB0aGUgc3RhdGUgZXhwZWN0ZWQ/P1xyXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRTdGF0ZUVycm9yKGludmFsaWRTdGF0ZTogc3RyaW5nLCBhY3R1YWxTdGF0ZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZFN0YXRlRXJyb3IuZGVzY30gJHtpbnZhbGlkU3RhdGV9LCBzdGF0ZSBleHBlY3RlZCA6ICR7YWN0dWFsU3RhdGV9LmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IElzIHRoaXMgbm90IGEgc2VjdXJpdHkgZmxhdyB0byBzZW5kIHRoZSB1c2VyIHRoZSBOb25jZSBleHBlY3RlZD8/XHJcbiAgICBzdGF0aWMgY3JlYXRlTm9uY2VNaXNtYXRjaEVycm9yKGludmFsaWROb25jZTogc3RyaW5nLCBhY3R1YWxOb25jZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTWlzbWF0Y2hFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTWlzbWF0Y2hFcnJvci5kZXNjfSAke2ludmFsaWROb25jZX0sIG5vbmNlIGV4cGVjdGVkIDogJHthY3R1YWxOb25jZX0uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUxvZ2luSW5Qcm9ncmVzc0Vycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5sb2dpblByb2dyZXNzRXJyb3IuY29kZSxcclxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5sb2dpblByb2dyZXNzRXJyb3IuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUFjcXVpcmVUb2tlbkluUHJvZ3Jlc3NFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmFjcXVpcmVUb2tlblByb2dyZXNzRXJyb3IuZGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJDYW5jZWxsZWRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVFcnJvckluQ2FsbGJhY2tGdW5jdGlvbihlcnJvckRlc2M6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5jYWxsYmFja0Vycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2FsbGJhY2tFcnJvci5kZXNjfSAke2Vycm9yRGVzY30uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyTG9naW5SZXF1aXJlZEVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckxvZ2luUmVxdWlyZWRFcnJvci5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVXNlckRvZXNOb3RFeGlzdEVycm9yKCkgOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckRvZXNOb3RFeGlzdEVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckRvZXNOb3RFeGlzdEVycm9yLmRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJbmZvRGVjb2RpbmdFcnJvcihjYXVnaHRFcnJvcjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvRGVjb2RpbmdFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9EZWNvZGluZ0Vycm9yLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodEVycm9yfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IoY2F1Z2h0RXJyb3I6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodEVycm9yfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVJZFRva2VuTnVsbE9yRW1wdHlFcnJvcihpbnZhbGlkUmF3VG9rZW5TdHJpbmc6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubnVsbE9yRW1wdHlJZFRva2VuLmNvZGUsXHJcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UubnVsbE9yRW1wdHlJZFRva2VuLmRlc2N9IFJhdyBJRCBUb2tlbiBWYWx1ZTogJHtpbnZhbGlkUmF3VG9rZW5TdHJpbmd9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUlkVG9rZW5QYXJzaW5nRXJyb3IoY2F1Z2h0UGFyc2luZ0Vycm9yOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmlkVG9rZW5Ob3RQYXJzZWQuY29kZSxcclxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pZFRva2VuTm90UGFyc2VkLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodFBhcnNpbmdFcnJvcn1gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVG9rZW5FbmNvZGluZ0Vycm9yKGluY29ycmVjdGx5RW5jb2RlZFRva2VuOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcclxuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuRW5jb2RpbmdFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuRW5jb2RpbmdFcnJvci5kZXNjfSBBdHRlbXB0ZWQgdG8gZGVjb2RlOiAke2luY29ycmVjdGx5RW5jb2RlZFRva2VufWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkSW50ZXJhY3Rpb25UeXBlRXJyb3IoKSA6IENsaWVudEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSW50ZXJhY3Rpb25UeXBlLmNvZGUsXHJcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZEludGVyYWN0aW9uVHlwZS5kZXNjKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgdW5leHBlY3RlZEVycm9yOiB7XHJcbiAgICAgICAgY29kZTogXCJ1bmV4cGVjdGVkX2Vycm9yXCIsXHJcbiAgICAgICAgZGVzYzogXCJVbmV4cGVjdGVkIGVycm9yIGluIGF1dGhlbnRpY2F0aW9uLlwiXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogR2VuZXJhbCBlcnJvciBjbGFzcyB0aHJvd24gYnkgdGhlIE1TQUwuanMgbGlicmFyeS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBdXRoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcblxyXG4gICAgZXJyb3JDb2RlOiBzdHJpbmc7XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQXV0aEVycm9yLnByb3RvdHlwZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiQXV0aEVycm9yXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihlcnJEZXNjOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEF1dGhFcnJvcihBdXRoRXJyb3JNZXNzYWdlLnVuZXhwZWN0ZWRFcnJvci5jb2RlLCBgJHtBdXRoRXJyb3JNZXNzYWdlLnVuZXhwZWN0ZWRFcnJvci5kZXNjfTogJHtlcnJEZXNjfWApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuLi9JVXJpXCI7XHJcbmltcG9ydCB7IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZSB9IGZyb20gXCIuL0lUZW5hbnREaXNjb3ZlcnlSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xyXG5pbXBvcnQgeyBYaHJDbGllbnQgfSBmcm9tIFwiLi4vWEhSQ2xpZW50XCI7XHJcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGVudW0gQXV0aG9yaXR5VHlwZSB7XHJcbiAgICBBYWQsXHJcbiAgICBBZGZzLFxyXG4gICAgQjJDXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXV0aG9yaXR5IHtcclxuICAgIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuSXNWYWxpZGF0aW9uRW5hYmxlZCA9IHZhbGlkYXRlQXV0aG9yaXR5O1xyXG4gICAgICAgIHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlQXNVcmkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IEF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZTtcclxuXHJcbiAgICBwdWJsaWMgSXNWYWxpZGF0aW9uRW5hYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IFRlbmFudCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGVuYW50RGlzY292ZXJ5UmVzcG9uc2U6IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IEF1dGhvcml6YXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLkF1dGhvcml6YXRpb25FbmRwb2ludC5yZXBsYWNlKFwie3RlbmFudH1cIiwgdGhpcy5UZW5hbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgRW5kU2Vzc2lvbkVuZHBvaW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuRW5kU2Vzc2lvbkVuZHBvaW50LnJlcGxhY2UoXCJ7dGVuYW50fVwiLCB0aGlzLlRlbmFudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBTZWxmU2lnbmVkSnd0QXVkaWVuY2UoKTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5Jc3N1ZXIucmVwbGFjZShcInt0ZW5hbnR9XCIsIHRoaXMuVGVuYW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlUmVzb2x2ZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiUGxlYXNlIGNhbGwgUmVzb2x2ZUVuZHBvaW50c0FzeW5jIGZpcnN0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBVUkwgdGhhdCBpcyB0aGUgYXV0aG9yaXR5IHNldCBieSB0aGUgZGV2ZWxvcGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgQ2Fub25pY2FsQXV0aG9yaXR5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQ2Fub25pY2FsQXV0aG9yaXR5KHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jYW5vbmljYWxBdXRob3JpdHkgPSBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkodXJsKTtcclxuICAgICAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2Fub25pY2FsQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM6IElVcmk7XHJcblxyXG4gICAgcHVibGljIGdldCBDYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKCk6IElVcmkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IFVybFV0aWxzLkdldFVybENvbXBvbmVudHModGhpcy5DYW5vbmljYWxBdXRob3JpdHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIC8vIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWRpc2NvdmVyeS0xXzAuaHRtbCNQcm92aWRlck1ldGFkYXRhXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXQgRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLkNhbm9uaWNhbEF1dGhvcml0eX12Mi4wLy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uYDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdpdmVuIGEgc3RyaW5nLCB2YWxpZGF0ZSB0aGF0IGl0IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vZG9tYWluL3BhdGhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUFzVXJpKCkge1xyXG4gICAgICAgIGxldCBjb21wb25lbnRzO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHMgPSB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRBdXRob3JpdHlUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb21wb25lbnRzLlByb3RvY29sIHx8IGNvbXBvbmVudHMuUHJvdG9jb2wudG9Mb3dlckNhc2UoKSAhPT0gXCJodHRwczpcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmF1dGhvcml0eVVyaUluc2VjdXJlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjb21wb25lbnRzLlBhdGhTZWdtZW50cyB8fCBjb21wb25lbnRzLlBhdGhTZWdtZW50cy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW52YWxpZFBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbHMgdGhlIE9JREMgZW5kcG9pbnQgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgRGlzY292ZXJFbmRwb2ludHMob3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50OiBzdHJpbmcpOiBQcm9taXNlPElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZT4ge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBYaHJDbGllbnQoKTtcclxuICAgICAgICByZXR1cm4gY2xpZW50LnNlbmRSZXF1ZXN0QXN5bmMob3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50LCBcIkdFVFwiLCAvKiBlbmFibGVDYWNoaW5nOiAqLyB0cnVlKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJVGVuYW50RGlzY292ZXJ5UmVzcG9uc2U+e1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb25FbmRwb2ludDogcmVzcG9uc2UuYXV0aG9yaXphdGlvbl9lbmRwb2ludCxcclxuICAgICAgICAgICAgICAgICAgICBFbmRTZXNzaW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmVuZF9zZXNzaW9uX2VuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgIElzc3VlcjogcmVzcG9uc2UuaXNzdWVyXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBwcm9taXNlLlxyXG4gICAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgYXV0aG9yaXR5IGlzIGluIHRoZSBjYWNoZVxyXG4gICAgICogRGlzY292ZXIgZW5kcG9pbnRzIHZpYSBvcGVuaWQtY29uZmlndXJhdGlvblxyXG4gICAgICogSWYgc3VjY2Vzc2Z1bCwgY2FjaGVzIHRoZSBlbmRwb2ludCBmb3IgbGF0ZXIgdXNlIGluIE9JRENcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHJlc29sdmVFbmRwb2ludHNBc3luYygpOiBQcm9taXNlPEF1dGhvcml0eT4ge1xyXG4gICAgICAgIGNvbnN0IG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludFJlc3BvbnNlID0gYXdhaXQgdGhpcy5HZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpO1xyXG4gICAgICAgIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UgPSBhd2FpdCB0aGlzLkRpc2NvdmVyRW5kcG9pbnRzKG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludFJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBUZW5hbnREaXNjb3ZlcnlFbmRwb2ludFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgR2V0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50QXN5bmMoKTogUHJvbWlzZTxzdHJpbmc+O1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBFVkVOVF9OQU1FX1BSRUZJWCA9IFwibXNhbC5cIjtcclxuZXhwb3J0IGNvbnN0IEVWRU5UX05BTUVfS0VZID0gXCJldmVudF9uYW1lXCI7XHJcbmV4cG9ydCBjb25zdCBTVEFSVF9USU1FX0tFWSA9IFwic3RhcnRfdGltZVwiO1xyXG5leHBvcnQgY29uc3QgRUxBUFNFRF9USU1FX0tFWSAgPSBcImVsYXBzZWRfdGltZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTID0gIHtcclxuICAgIE1zYWxDb3JyZWxhdGlvbklkQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0Lk1TQUwuY29ycmVsYXRpb25faWRcIixcclxuICAgIEFwaVRlbGVtSWRDb25zdFN0cktleTogXCJtc2FsLmFwaV90ZWxlbV9pZFwiLFxyXG4gICAgQXBpSWRDb25zdFN0cktleTogXCJtc2FsLmFwaV9pZFwiLFxyXG4gICAgQnJva2VyQXBwQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfYnJva2VyX2FwcFwiLFxyXG4gICAgQ2FjaGVFdmVudENvdW50Q29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfY2FjaGVfZXZlbnRfY291bnRcIixcclxuICAgIEh0dHBFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXk6IFwiTWljcm9zb2Z0X01TQUxfaHR0cF9ldmVudF9jb3VudFwiLFxyXG4gICAgSWRwQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfaWRwXCIsXHJcbiAgICBJc1NpbGVudFRlbGVtZXRyeUJhdGNoS2V5OiBcIlwiLFxyXG4gICAgSXNTdWNjZXNzZnVsQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfaXNfc3VjY2Vzc2Z1bFwiLFxyXG4gICAgUmVzcG9uc2VUaW1lQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfcmVzcG9uc2VfdGltZVwiLFxyXG4gICAgVGVuYW50SWRDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF90ZW5hbnRfaWRcIixcclxuICAgIFVpRXZlbnRDb3VudFRlbGVtZXRyeUJhdGNoS2V5OiBcIk1pY3Jvc29mdF9NU0FMX3VpX2V2ZW50X2NvdW50XCJcclxufTtcclxuXHJcbi8vIFRoaXMgaXMgdXNlZCB0byByZXBsYWNlIHRoZSByZWFsIHRlbmFudCBpbiB0ZWxlbWV0cnkgaW5mb1xyXG5leHBvcnQgY29uc3QgVEVOQU5UX1BMQUNFSE9MREVSID0gXCI8dGVuYW50PlwiO1xyXG5cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IGxpYnJhcnlWZXJzaW9uIH0gZnJvbSBcIi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXJDYWxsYmFjayB7XHJcbiAgICAobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcsIGNvbnRhaW5zUGlpOiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xyXG4gICAgRXJyb3IsXHJcbiAgICBXYXJuaW5nLFxyXG4gICAgSW5mbyxcclxuICAgIFZlcmJvc2VcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2dlciB7Ly8gU2luZ2xldG9uIENsYXNzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIC8vIFRPRE86IFRoaXMgZG9lcyBub3Qgc2VlbSB0byBiZSBhIHNpbmdsZXRvbiEhIENoYW5nZSBvciBEZWxldGUuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTG9nZ2VyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JbmZvO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBpaUxvZ2dpbmdFbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvY2FsQ2FsbGJhY2s6IElMb2dnZXJDYWxsYmFjaztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbENhbGxiYWNrOiBJTG9nZ2VyQ2FsbGJhY2ssXHJcbiAgICAgICAgb3B0aW9uczpcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGxldmVsPzogTG9nTGV2ZWwsXHJcbiAgICAgICAgICAgIHBpaUxvZ2dpbmdFbmFibGVkPzogYm9vbGVhbixcclxuICAgICAgICB9ID0ge30pIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQgPSBcIlwiLFxyXG4gICAgICAgICAgICBsZXZlbCA9IExvZ0xldmVsLkluZm8sXHJcbiAgICAgICAgICAgIHBpaUxvZ2dpbmdFbmFibGVkID0gZmFsc2VcclxuICAgICAgICB9ID0gb3B0aW9ucztcclxuXHJcbiAgICAgICAgdGhpcy5sb2NhbENhbGxiYWNrID0gbG9jYWxDYWxsYmFjaztcclxuICAgICAgICB0aGlzLmNvcnJlbGF0aW9uSWQgPSBjb3JyZWxhdGlvbklkO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICB0aGlzLnBpaUxvZ2dpbmdFbmFibGVkID0gcGlpTG9nZ2luZ0VuYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9nTWVzc2FnZShsb2dMZXZlbDogTG9nTGV2ZWwsIGxvZ01lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoKGxvZ0xldmVsID4gdGhpcy5sZXZlbCkgfHwgKCF0aGlzLnBpaUxvZ2dpbmdFbmFibGVkICYmIGNvbnRhaW5zUGlpKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcclxuICAgICAgICBsZXQgbG9nOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY29ycmVsYXRpb25JZCkpIHtcclxuICAgICAgICAgICAgbG9nID0gdGltZXN0YW1wICsgXCI6XCIgKyB0aGlzLmNvcnJlbGF0aW9uSWQgKyBcIi1cIiArIGxpYnJhcnlWZXJzaW9uKCkgKyBcIi1cIiArIExvZ0xldmVsW2xvZ0xldmVsXSArIFwiIFwiICsgbG9nTWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxvZyA9IHRpbWVzdGFtcCArIFwiOlwiICsgbGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmV4ZWN1dGVDYWxsYmFjayhsb2dMZXZlbCwgbG9nLCBjb250YWluc1BpaSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGV4ZWN1dGVDYWxsYmFjayhsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxDYWxsYmFjayhsZXZlbCwgbWVzc2FnZSwgY29udGFpbnNQaWkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGVycm9yUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5FcnJvciwgbWVzc2FnZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLldhcm5pbmcsIG1lc3NhZ2UsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgd2FybmluZ1BpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuV2FybmluZywgbWVzc2FnZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkluZm8sIG1lc3NhZ2UsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgaW5mb1BpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHZlcmJvc2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLlZlcmJvc2UsIG1lc3NhZ2UsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgdmVyYm9zZVBpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuVmVyYm9zZSwgbWVzc2FnZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNQaWlMb2dnaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waWlMb2dnaW5nRW5hYmxlZDtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL0F1dGhFcnJvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlcnZlckVycm9yTWVzc2FnZSA9IHtcclxuICAgIHNlcnZlclVuYXZhaWxhYmxlOiB7XHJcbiAgICAgICAgY29kZTogXCJzZXJ2ZXJfdW5hdmFpbGFibGVcIixcclxuICAgICAgICBkZXNjOiBcIlNlcnZlciBpcyB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZS5cIlxyXG4gICAgfSxcclxuICAgIHVua25vd25TZXJ2ZXJFcnJvcjoge1xyXG4gICAgICAgIGNvZGU6IFwidW5rbm93bl9zZXJ2ZXJfZXJyb3JcIlxyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciB3aXRoIHRoZSBzZXJ2ZXIgY29kZSwgZm9yIGV4YW1wbGUsIHVuYXZhaWxhYmlsaXR5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9yIGV4dGVuZHMgQXV0aEVycm9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiU2VydmVyRXJyb3JcIjtcclxuXHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFNlcnZlckVycm9yLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVNlcnZlclVuYXZhaWxhYmxlRXJyb3IoKTogU2VydmVyRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgU2VydmVyRXJyb3IoU2VydmVyRXJyb3JNZXNzYWdlLnNlcnZlclVuYXZhaWxhYmxlLmNvZGUsXHJcbiAgICAgICAgICAgIFNlcnZlckVycm9yTWVzc2FnZS5zZXJ2ZXJVbmF2YWlsYWJsZS5kZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVW5rbm93blNlcnZlckVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogU2VydmVyRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgU2VydmVyRXJyb3IoU2VydmVyRXJyb3JNZXNzYWdlLnVua25vd25TZXJ2ZXJFcnJvci5jb2RlLFxyXG4gICAgICAgICAgICBlcnJvckRlc2MpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5DYWNoZUl0ZW0gfSBmcm9tIFwiLi9BY2Nlc3NUb2tlbkNhY2hlSXRlbVwiO1xyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbktleSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuS2V5XCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuVmFsdWUgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlblZhbHVlXCI7XHJcbmltcG9ydCB7IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vU2VydmVyUmVxdWVzdFBhcmFtZXRlcnNcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBDbGllbnRJbmZvIH0gZnJvbSBcIi4vQ2xpZW50SW5mb1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMsIEludGVyYWN0aW9uVHlwZSwgbGlicmFyeVZlcnNpb24gfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlXCI7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XHJcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4vU2NvcGVTZXRcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5pbXBvcnQgeyBXaW5kb3dVdGlscyB9IGZyb20gXCIuL3V0aWxzL1dpbmRvd1V0aWxzXCI7XHJcbmltcG9ydCB7IFRva2VuVXRpbHMgfSBmcm9tIFwiLi91dGlscy9Ub2tlblV0aWxzXCI7XHJcbmltcG9ydCB7IFRpbWVVdGlscyB9IGZyb20gXCIuL3V0aWxzL1RpbWVVdGlsc1wiO1xyXG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gXCIuL3V0aWxzL1VybFV0aWxzXCI7XHJcbmltcG9ydCB7IFJlc3BvbnNlVXRpbHMgfSBmcm9tIFwiLi91dGlscy9SZXNwb25zZVV0aWxzXCI7XHJcbmltcG9ydCB7IEF1dGhvcml0eUZhY3RvcnkgfSBmcm9tIFwiLi9hdXRob3JpdHkvQXV0aG9yaXR5RmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBidWlsZENvbmZpZ3VyYXRpb24sIFRlbGVtZXRyeU9wdGlvbnMgfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZSB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL2Vycm9yL1NlcnZlckVycm9yXCI7XHJcbmltcG9ydCB7IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IEF1dGhSZXNwb25zZSwgYnVpbGRSZXNwb25zZVN0YXRlT25seSB9IGZyb20gXCIuL0F1dGhSZXNwb25zZVwiO1xyXG5pbXBvcnQgVGVsZW1ldHJ5TWFuYWdlciBmcm9tIFwiLi90ZWxlbWV0cnkvVGVsZW1ldHJ5TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUZWxlbWV0cnlQbGF0Zm9ybSwgVGVsZW1ldHJ5Q29uZmlnIH0gZnJvbSBcIi4vdGVsZW1ldHJ5L1RlbGVtZXRyeVR5cGVzXCI7XHJcblxyXG4vLyBkZWZhdWx0IGF1dGhvcml0eVxyXG5jb25zdCBERUZBVUxUX0FVVEhPUklUWSA9IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiO1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0byBoYW5kbGUgaUZyYW1lIGdlbmVyYXRpb24sIFBvcHVwIFdpbmRvdyBjcmVhdGlvbiBhbmQgcmVkaXJlY3QgaGFuZGxpbmdcclxuICovXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgICAgIG1zYWw6IE9iamVjdDtcclxuICAgICAgICBDdXN0b21FdmVudDogQ3VzdG9tRXZlbnQ7XHJcbiAgICAgICAgRXZlbnQ6IEV2ZW50O1xyXG4gICAgICAgIGFjdGl2ZVJlbmV3YWxzOiB7fTtcclxuICAgICAgICByZW5ld1N0YXRlczogQXJyYXk8c3RyaW5nPjtcclxuICAgICAgICBjYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXMgOiB7fTtcclxuICAgICAgICBwcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlczoge307XHJcbiAgICAgICAgb3BlbmVkV2luZG93czogQXJyYXk8V2luZG93PjtcclxuICAgICAgICByZXF1ZXN0VHlwZTogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBAaWdub3JlXHJcbiAqIHJlc3BvbnNlX3R5cGUgZnJvbSBPcGVuSURDb25uZWN0XHJcbiAqIFJlZmVyZW5jZXM6IGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vYXV0aC12Mi1tdWx0aXBsZS1yZXNwb25zZS10eXBlcy0xXzAuaHRtbCAmIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tNC4yLjFcclxuICogU2luY2Ugd2Ugc3VwcG9ydCBvbmx5IGltcGxpY2l0IGZsb3cgaW4gdGhpcyBsaWJyYXJ5LCB3ZSByZXN0cmljdCB0aGUgcmVzcG9uc2VfdHlwZSBzdXBwb3J0IHRvIG9ubHkgJ3Rva2VuJyBhbmQgJ2lkX3Rva2VuJ1xyXG4gKlxyXG4gKi9cclxuY29uc3QgUmVzcG9uc2VUeXBlcyA9IHtcclxuICAgIGlkX3Rva2VuOiBcImlkX3Rva2VuXCIsXHJcbiAgICB0b2tlbjogXCJ0b2tlblwiLFxyXG4gICAgaWRfdG9rZW5fdG9rZW46IFwiaWRfdG9rZW4gdG9rZW5cIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDYWNoZVJlc3VsdCB7XHJcbiAgICBlcnJvckRlc2M6IHN0cmluZztcclxuICAgIHRva2VuOiBzdHJpbmc7XHJcbiAgICBlcnJvcjogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBAaWdub3JlXHJcbiAqIERhdGEgdHlwZSB0byBob2xkIGluZm9ybWF0aW9uIGFib3V0IHN0YXRlIHJldHVybmVkIGZyb20gdGhlIHNlcnZlclxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVzcG9uc2VTdGF0ZUluZm8gPSB7XHJcbiAgICBzdGF0ZTogc3RyaW5nO1xyXG4gICAgc3RhdGVNYXRjaDogYm9vbGVhbjtcclxuICAgIHJlcXVlc3RUeXBlOiBzdHJpbmc7XHJcbn07XHJcblxyXG4vKipcclxuICogQSB0eXBlIGFsaWFzIGZvciBhbiBhdXRoUmVzcG9uc2VDYWxsYmFjayBmdW5jdGlvbi5cclxuICoge0BsaW5rIChhdXRoUmVzcG9uc2VDYWxsYmFjazp0eXBlKX1cclxuICogQHBhcmFtIGF1dGhFcnIgZXJyb3IgY3JlYXRlZCBmb3IgZmFpbHVyZSBjYXNlc1xyXG4gKiBAcGFyYW0gcmVzcG9uc2UgcmVzcG9uc2UgY29udGFpbmluZyB0b2tlbiBzdHJpbmdzIGluIHN1Y2Nlc3MgY2FzZXMsIG9yIGp1c3Qgc3RhdGUgdmFsdWUgaW4gZXJyb3IgY2FzZXNcclxuICovXHJcbmV4cG9ydCB0eXBlIGF1dGhSZXNwb25zZUNhbGxiYWNrID0gKGF1dGhFcnI6IEF1dGhFcnJvciwgcmVzcG9uc2U/OiBBdXRoUmVzcG9uc2UpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogQSB0eXBlIGFsaWFzIGZvciBhIHRva2VuUmVjZWl2ZWRDYWxsYmFjayBmdW5jdGlvbi5cclxuICoge0BsaW5rICh0b2tlblJlY2VpdmVkQ2FsbGJhY2s6dHlwZSl9XHJcbiAqIEByZXR1cm5zIHJlc3BvbnNlIG9mIHR5cGUge0BsaW5rIChBdXRoUmVzcG9uc2U6dHlwZSl9XHJcbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgZ2V0IHRoZSBjYWxsIGJhY2sgb25jZSB0aGlzIEFQSSBpcyBjb21wbGV0ZWQgKGVpdGhlciBzdWNjZXNzZnVsbHkgb3Igd2l0aCBhIGZhaWx1cmUpLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgdG9rZW5SZWNlaXZlZENhbGxiYWNrID0gKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogQSB0eXBlIGFsaWFzIGZvciBhIGVycm9yUmVjZWl2ZWRDYWxsYmFjayBmdW5jdGlvbi5cclxuICoge0BsaW5rIChlcnJvclJlY2VpdmVkQ2FsbGJhY2s6dHlwZSl9XHJcbiAqIEByZXR1cm5zIHJlc3BvbnNlIG9mIHR5cGUge0BsaW5rIChBdXRoRXJyb3I6Y2xhc3MpfVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhY2NvdW50IHN0YXRlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBlcnJvclJlY2VpdmVkQ2FsbGJhY2sgPSAoYXV0aEVycjogQXV0aEVycm9yLCBhY2NvdW50U3RhdGU6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBVc2VyQWdlbnRBcHBsaWNhdGlvbiBjbGFzc1xyXG4gKlxyXG4gKiBPYmplY3QgSW5zdGFuY2UgdGhhdCB0aGUgZGV2ZWxvcGVyIGNhbiB1c2UgdG8gbWFrZSBsb2dpblhYIE9SIGFjcXVpcmVUb2tlblhYIGZ1bmN0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVzZXJBZ2VudEFwcGxpY2F0aW9uIHtcclxuXHJcbiAgICAvLyBpbnB1dCBDb25maWd1cmF0aW9uIGJ5IHRoZSBkZXZlbG9wZXIvdXNlclxyXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgLy8gY2FsbGJhY2tzIGZvciB0b2tlbi9lcnJvclxyXG4gICAgcHJpdmF0ZSBhdXRoUmVzcG9uc2VDYWxsYmFjazogYXV0aFJlc3BvbnNlQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0b2tlblJlY2VpdmVkQ2FsbGJhY2s6IHRva2VuUmVjZWl2ZWRDYWxsYmFjayA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVycm9yUmVjZWl2ZWRDYWxsYmFjazogZXJyb3JSZWNlaXZlZENhbGxiYWNrID0gbnVsbDtcclxuXHJcbiAgICAvLyBBZGRlZCBmb3IgcmVhZGFiaWxpdHkgYXMgdGhlc2UgcGFyYW1zIGFyZSB2ZXJ5IGZyZXF1ZW50bHkgdXNlZFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcclxuICAgIHByaXZhdGUgY2xpZW50SWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW5Db29raWU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHRlbGVtZXRyeU1hbmFnZXI6IFRlbGVtZXRyeU1hbmFnZXI7XHJcblxyXG4gICAgLy8gQ2FjaGUgYW5kIEFjY291bnQgaW5mbyByZWZlcnJlZCBhY3Jvc3MgdG9rZW4gZ3JhbnQgZmxvd1xyXG4gICAgcHJvdGVjdGVkIGNhY2hlU3RvcmFnZTogU3RvcmFnZTtcclxuICAgIHByaXZhdGUgYWNjb3VudDogQWNjb3VudDtcclxuXHJcbiAgICAvLyBzdGF0ZSB2YXJpYWJsZXNcclxuICAgIHByaXZhdGUgbG9naW5JblByb2dyZXNzOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBhY3F1aXJlVG9rZW5JblByb2dyZXNzOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBzaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHNpbGVudExvZ2luOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSByZWRpcmVjdENhbGxiYWNrc1NldDogYm9vbGVhbjtcclxuXHJcbiAgICAvLyBBdXRob3JpdHkgRnVuY3Rpb25hbGl0eVxyXG4gICAgcHJvdGVjdGVkIGF1dGhvcml0eUluc3RhbmNlOiBBdXRob3JpdHk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXR0ZXIgZm9yIHRoZSBhdXRob3JpdHkgVVJMXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5XHJcbiAgICAgKi9cclxuICAgIC8vIElmIHRoZSBkZXZlbG9wZXIgcGFzc2VzIGFuIGF1dGhvcml0eSwgY3JlYXRlIGFuIGluc3RhbmNlXHJcbiAgICBwdWJsaWMgc2V0IGF1dGhvcml0eSh2YWwpIHtcclxuICAgICAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlID0gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZSh2YWwsIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWV0aG9kIHRvIG1hbmFnZSB0aGUgYXV0aG9yaXR5IFVSTC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBhdXRob3JpdHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBhdXRob3JpdHkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5DYW5vbmljYWxBdXRob3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgYXV0aG9yaXR5IGluc3RhbmNlIGZyb20gdGhlIE1TQUwgY29uZmlndXJhdGlvbiBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7QGxpbmsgQXV0aG9yaXR5fSBhdXRob3JpdHkgaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEF1dGhvcml0eUluc3RhbmNlKCk6IEF1dGhvcml0eSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqIENvbnN0cnVjdG9yIGZvciB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gdXNlZCB0byBpbnN0YW50aWF0ZSB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gb2JqZWN0XHJcbiAgICAgKlxyXG4gICAgICogSW1wb3J0YW50IGF0dHJpYnV0ZXMgaW4gdGhlIENvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciBhdXRoIGFyZTpcclxuICAgICAqIC0gY2xpZW50SUQ6IHRoZSBhcHBsaWNhdGlvbiBJRCBvZiB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gICAgICogWW91IGNhbiBvYnRhaW4gb25lIGJ5IHJlZ2lzdGVyaW5nIHlvdXIgYXBwbGljYXRpb24gd2l0aCBvdXIgQXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbCA6IGh0dHBzOi8vcG9ydGFsLmF6dXJlLmNvbS8jYmxhZGUvTWljcm9zb2Z0X0FBRF9JQU0vQWN0aXZlRGlyZWN0b3J5TWVudUJsYWRlL1JlZ2lzdGVyZWRBcHBzUHJldmlld1xyXG4gICAgICogLSBhdXRob3JpdHk6IHRoZSBhdXRob3JpdHkgVVJMIGZvciB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEluIEF6dXJlIEFELCBhdXRob3JpdHkgaXMgYSBVUkwgaW5kaWNhdGluZyB0aGUgQXp1cmUgYWN0aXZlIGRpcmVjdG9yeSB0aGF0IE1TQUwgdXNlcyB0byBvYnRhaW4gdG9rZW5zLlxyXG4gICAgICogSXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tLyZsdDtFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZSZndDsuXHJcbiAgICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEFjY291bnRzIGluIG9uZSBvcmdhbml6YXRpb25hbCBkaXJlY3RvcnksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggdGhlIFRlbmFudCBJZCBvciBUZW5hbnQgbmFtZSAoZm9yIGV4YW1wbGUsIGNvbnRvc28ubWljcm9zb2Z0LmNvbSkuXHJcbiAgICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEFjY291bnRzIGluIGFueSBvcmdhbml6YXRpb25hbCBkaXJlY3RvcnksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggb3JnYW5pemF0aW9ucy5cclxuICAgICAqIElmIHlvdXIgYXBwbGljYXRpb24gc3VwcG9ydHMgQWNjb3VudHMgaW4gYW55IG9yZ2FuaXphdGlvbmFsIGRpcmVjdG9yeSBhbmQgcGVyc29uYWwgTWljcm9zb2Z0IGFjY291bnRzLCByZXBsYWNlIFwiRW50ZXJfdGhlX1RlbmFudF9JbmZvX0hlcmVcIiB2YWx1ZSB3aXRoIGNvbW1vbi5cclxuICAgICAqIFRvIHJlc3RyaWN0IHN1cHBvcnQgdG8gUGVyc29uYWwgTWljcm9zb2Z0IGFjY291bnRzIG9ubHksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggY29uc3VtZXJzLlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAgKiBJbiBBenVyZSBCMkMsIGF1dGhvcml0eSBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDtpbnN0YW5jZSZndDsvdGZwLyZsdDt0ZW5hbnQmZ3Q7LyZsdDtwb2xpY3lOYW1lJmd0Oy9cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIChDb25maWd1cmF0aW9uOnR5cGUpfSBjb25maWd1cmF0aW9uIG9iamVjdCBmb3IgdGhlIE1TQUwgVXNlckFnZW50QXBwbGljYXRpb24gaW5zdGFuY2VcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIENvbmZpZ3VyYXRpb25cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGJ1aWxkQ29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoZSBjYWxsYmFjayBib29sZWFuXHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlciA9IHRoaXMuY29uZmlnLnN5c3RlbS5sb2dnZXI7XHJcbiAgICAgICAgdGhpcy5jbGllbnRJZCA9IHRoaXMuY29uZmlnLmF1dGguY2xpZW50SWQ7XHJcbiAgICAgICAgdGhpcy5pbkNvb2tpZSA9IHRoaXMuY29uZmlnLmNhY2hlLnN0b3JlQXV0aFN0YXRlSW5Db29raWU7XHJcblxyXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5TWFuYWdlciA9IHRoaXMuZ2V0VGVsZW1ldHJ5TWFuYWdlckZyb21Db25maWcodGhpcy5jb25maWcuc3lzdGVtLnRlbGVtZXRyeSwgdGhpcy5jbGllbnRJZCk7XHJcblxyXG4gICAgICAgIC8vIGlmIG5vIGF1dGhvcml0eSBpcyBwYXNzZWQsIHNldCB0aGUgZGVmYXVsdDogXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCJcclxuICAgICAgICB0aGlzLmF1dGhvcml0eSA9IHRoaXMuY29uZmlnLmF1dGguYXV0aG9yaXR5IHx8IERFRkFVTFRfQVVUSE9SSVRZO1xyXG5cclxuICAgICAgICAvLyB0cmFjayBsb2dpbiBhbmQgYWNxdWlyZVRva2VuIGluIHByb2dyZXNzXHJcbiAgICAgICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gY2FjaGUga2V5cyBtc2FsIC0gdHlwZXNjcmlwdCB0aHJvd3MgYW4gZXJyb3IgaWYgYW55IHZhbHVlIG90aGVyIHRoYW4gXCJsb2NhbFN0b3JhZ2VcIiBvciBcInNlc3Npb25TdG9yYWdlXCIgaXMgcGFzc2VkXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UgPSBuZXcgU3RvcmFnZSh0aGlzLmNvbmZpZy5jYWNoZS5jYWNoZUxvY2F0aW9uKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ2FjaGVMb2NhdGlvbkNvbmZpZ0Vycm9yKHRoaXMuY29uZmlnLmNhY2hlLmNhY2hlTG9jYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB3aW5kb3cgaGFuZGxpbmcgY29kZVxyXG4gICAgICAgIHdpbmRvdy5hY3RpdmVSZW5ld2FscyA9IHt9O1xyXG4gICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xyXG4gICAgICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXMgPSB7IH07XHJcbiAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzID0geyB9O1xyXG4gICAgICAgIHdpbmRvdy5tc2FsID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc3QgdXJsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgIGNvbnN0IHVybENvbnRhaW5zSGFzaCA9IFVybFV0aWxzLnVybENvbnRhaW5zSGFzaCh1cmxIYXNoKTtcclxuXHJcbiAgICAgICAgLy8gT24gdGhlIHNlcnZlciAzMDIgLSBSZWRpcmVjdCwgaGFuZGxlIHRoaXNcclxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIgJiYgdXJsQ29udGFpbnNIYXNoICYmICFXaW5kb3dVdGlscy5pc0luSWZyYW1lKCkgJiYgIVdpbmRvd1V0aWxzLmlzSW5Qb3B1cCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb25SZXNwb25zZSh1cmxIYXNoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI3JlZ2lvbiBSZWRpcmVjdCBDYWxsYmFja3NcclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICogU2V0IHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgZm9yIHRoZSByZWRpcmVjdCBmbG93IHRvIHNlbmQgYmFjayB0aGUgc3VjY2VzcyBvciBlcnJvciBvYmplY3QuXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rICh0b2tlblJlY2VpdmVkQ2FsbGJhY2s6dHlwZSl9IHN1Y2Nlc3NDYWxsYmFjayAtIENhbGxiYWNrIHdoaWNoIGNvbnRhaW5zIHRoZSBBdXRoUmVzcG9uc2Ugb2JqZWN0LCBjb250YWluaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxyXG4gICAgICogQHBhcmFtIHtAbGluayAoZXJyb3JSZWNlaXZlZENhbGxiYWNrOnR5cGUpfSBlcnJvckNhbGxiYWNrIC0gQ2FsbGJhY2sgd2hpY2ggY29udGFpbnMgYSBBdXRoRXJyb3Igb2JqZWN0LCBjb250YWluaW5nIGVycm9yIGRhdGEgZnJvbSBlaXRoZXIgdGhlIHNlcnZlclxyXG4gICAgICogb3IgdGhlIGxpYnJhcnksIGRlcGVuZGluZyBvbiB0aGUgb3JpZ2luIG9mIHRoZSBlcnJvci5cclxuICAgICAqL1xyXG4gICAgaGFuZGxlUmVkaXJlY3RDYWxsYmFjayh0b2tlblJlY2VpdmVkQ2FsbGJhY2s6IHRva2VuUmVjZWl2ZWRDYWxsYmFjaywgZXJyb3JSZWNlaXZlZENhbGxiYWNrOiBlcnJvclJlY2VpdmVkQ2FsbGJhY2spOiB2b2lkO1xyXG4gICAgaGFuZGxlUmVkaXJlY3RDYWxsYmFjayhhdXRoQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrKTogdm9pZDtcclxuICAgIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2soYXV0aE9yVG9rZW5DYWxsYmFjazogYXV0aFJlc3BvbnNlQ2FsbGJhY2sgfCB0b2tlblJlY2VpdmVkQ2FsbGJhY2ssIGVycm9yUmVjZWl2ZWRDYWxsYmFjaz86IGVycm9yUmVjZWl2ZWRDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIGlmICghYXV0aE9yVG9rZW5DYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ2FsbGJhY2tPYmplY3RFcnJvcihhdXRoT3JUb2tlbkNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBjYWxsYmFja3NcclxuICAgICAgICBpZiAoZXJyb3JSZWNlaXZlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrID0gYXV0aE9yVG9rZW5DYWxsYmFjayBhcyB0b2tlblJlY2VpdmVkQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrID0gZXJyb3JSZWNlaXZlZENhbGxiYWNrO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiVGhpcyBvdmVybG9hZCBmb3IgY2FsbGJhY2sgaXMgZGVwcmVjYXRlZCAtIHBsZWFzZSBjaGFuZ2UgdGhlIGZvcm1hdCBvZiB0aGUgY2FsbGJhY2tzIHRvIGEgc2luZ2xlIGNhbGxiYWNrIGFzIHNob3duOiAoZXJyOiBBdXRoRXJyb3IsIHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UpLlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUNhbGxiYWNrID0gYXV0aE9yVG9rZW5DYWxsYmFjayBhcyBhdXRoUmVzcG9uc2VDYWxsYmFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBPbiB0aGUgc2VydmVyIDMwMiAtIFJlZGlyZWN0LCBoYW5kbGUgdGhpc1xyXG4gICAgICAgIGlmICghdGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xyXG4gICAgICAgICAgICBjb25zdCBjYWNoZWRIYXNoID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMudXJsSGFzaCk7XHJcbiAgICAgICAgICAgIGlmIChjYWNoZWRIYXNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NDYWxsQmFjayhjYWNoZWRIYXNoLCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGF1dGhSZXNwb25zZUhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlOiBJbnRlcmFjdGlvblR5cGUsIHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIHJlc29sdmU/OiBhbnkpIDogdm9pZCB7XHJcbiAgICAgICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlblJlY2VpdmVkQ2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0aFJlc3BvbnNlQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlQ2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZEludGVyYWN0aW9uVHlwZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXV0aEVycm9ySGFuZGxlcihpbnRlcmFjdGlvblR5cGU6IEludGVyYWN0aW9uVHlwZSwgYXV0aEVycjogQXV0aEVycm9yLCByZXNwb25zZTogQXV0aFJlc3BvbnNlLCByZWplY3Q/OiBhbnkpIDogdm9pZCB7XHJcbiAgICAgICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvclJlY2VpdmVkQ2FsbGJhY2soYXV0aEVyciwgcmVzcG9uc2UuYWNjb3VudFN0YXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlQ2FsbGJhY2soYXV0aEVyciwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCkge1xyXG4gICAgICAgICAgICByZWplY3QoYXV0aEVycik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB3aGVuIGluaXRpYXRpbmcgdGhlIGxvZ2luIHByb2Nlc3MgYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIncyBicm93c2VyIHRvIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50LlxyXG4gICAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxyXG4gICAgICovXHJcbiAgICBsb2dpblJlZGlyZWN0KHJlcXVlc3Q/OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiB2b2lkIHtcclxuICAgICAgICAvLyBUaHJvdyBlcnJvciBpZiBjYWxsYmFja3MgYXJlIG5vdCBzZXQgYmVmb3JlIHJlZGlyZWN0XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0KSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW50ZXJhY3RpdmUoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0LCB0cnVlLCByZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJIGJ5IHJlZGlyZWN0aW5nIHRoZSB1c2VyJ3MgYnJvd3NlciB3aW5kb3cgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIChBdXRoZW50aWNhdGlvblBhcmFtZXRlcnM6dHlwZSl9XHJcbiAgICAgKlxyXG4gICAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcclxuICAgICAqL1xyXG4gICAgYWNxdWlyZVRva2VuUmVkaXJlY3QocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVJlcXVlc3RFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgY2FsbGJhY2tzIGFyZSBub3Qgc2V0IGJlZm9yZSByZWRpcmVjdFxyXG4gICAgICAgIGlmICghdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkludGVyYWN0aXZlKENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCwgZmFsc2UsIHJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyB2aWEgb3BlbmluZyBhIHBvcHVwIHdpbmRvdyBpbiB0aGUgdXNlcidzIGJyb3dzZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIChBdXRoZW50aWNhdGlvblBhcmFtZXRlcnM6dHlwZSl9XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPEF1dGhSZXNwb25zZT59IC0gYSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXR1cm5zIHRoZSB7QGxpbmsgQXV0aFJlc3BvbnNlfSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgbG9naW5Qb3B1cChyZXF1ZXN0PzogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW50ZXJhY3RpdmUoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwLCB0cnVlLCByZXF1ZXN0LCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHdoZW4geW91IHdhbnQgdG8gb2J0YWluIGFuIGFjY2Vzc190b2tlbiBmb3IgeW91ciBBUEkgdmlhIG9wZW5pbmcgYSBwb3B1cCB3aW5kb3cgaW4gdGhlIHVzZXIncyBicm93c2VyXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cclxuICAgICAqXHJcbiAgICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPEF1dGhSZXNwb25zZT59IC0gYSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXR1cm5zIHRoZSB7QGxpbmsgQXV0aFJlc3BvbnNlfSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgYWNxdWlyZVRva2VuUG9wdXAocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcclxuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW50ZXJhY3RpdmUoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwLCBmYWxzZSwgcmVxdWVzdCwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjcmVnaW9uIEFjcXVpcmUgVG9rZW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB3aGVuIGluaXRpYXRpbmcgdGhlIGxvZ2luIHByb2Nlc3Mgb3Igd2hlbiB5b3Ugd2FudCB0byBvYnRhaW4gYW4gYWNjZXNzX3Rva2VuIGZvciB5b3VyIEFQSSxcclxuICAgICAqIGVpdGhlciBieSByZWRpcmVjdGluZyB0aGUgdXNlcidzIGJyb3dzZXIgd2luZG93IHRvIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50IG9yIHZpYSBvcGVuaW5nIGEgcG9wdXAgd2luZG93IGluIHRoZSB1c2VyJ3MgYnJvd3Nlci5cclxuICAgICAqIEBwYXJhbSB7QGxpbmsgKEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyczp0eXBlKX1cclxuICAgICAqXHJcbiAgICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFjcXVpcmVUb2tlbkludGVyYWN0aXZlKGludGVyYWN0aW9uVHlwZTogSW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbDogYm9vbGVhbiwgcmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgcmVzb2x2ZT86IGFueSwgcmVqZWN0PzogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIElmIGFscmVhZHkgaW4gcHJvZ3Jlc3MsIGRvIG5vdCBwcm9jZWVkXHJcbiAgICAgICAgaWYgKHRoaXMubG9naW5JblByb2dyZXNzIHx8IHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICBjb25zdCB0aHJvd25FcnJvciA9IHRoaXMubG9naW5JblByb2dyZXNzID8gQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUxvZ2luSW5Qcm9ncmVzc0Vycm9yKCkgOiBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQWNxdWlyZVRva2VuSW5Qcm9ncmVzc0Vycm9yKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlT25seVJlc3BvbnNlID0gYnVpbGRSZXNwb25zZVN0YXRlT25seSh0aGlzLmdldEFjY291bnRTdGF0ZShyZXF1ZXN0ICYmIHJlcXVlc3Quc3RhdGUpKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRoRXJyb3JIYW5kbGVyKGludGVyYWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgICAgIHRocm93bkVycm9yLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVPbmx5UmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICByZWplY3QpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBleHRyYVNjb3Blc1RvQ29uc2VudCBpcyBwYXNzZWQgaW4gbG9naW5DYWxsLCBhcHBlbmQgdGhlbSB0byB0aGUgbG9naW4gcmVxdWVzdFxyXG4gICAgICAgIGNvbnN0IHNjb3BlczogQXJyYXk8c3RyaW5nPiA9IGlzTG9naW5DYWxsID8gdGhpcy5hcHBlbmRTY29wZXMocmVxdWVzdCkgOiByZXF1ZXN0LnNjb3BlcztcclxuXHJcbiAgICAgICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzLCAhaXNMb2dpbkNhbGwpO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIGFjY291bnQgb2JqZWN0IGlmIGEgc2Vzc2lvbiBleGlzdHNcclxuICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gKHJlcXVlc3QgJiYgcmVxdWVzdC5hY2NvdW50ICYmICFpc0xvZ2luQ2FsbCkgPyByZXF1ZXN0LmFjY291bnQgOiB0aGlzLmdldEFjY291bnQoKTtcclxuXHJcbiAgICAgICAgLy8gSWYgbm8gc2Vzc2lvbiBleGlzdHMsIHByb21wdCB0aGUgdXNlciB0byBsb2dpbi5cclxuICAgICAgICBpZiAoIWFjY291bnQgJiYgIVNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLmlzU1NPUGFyYW0ocmVxdWVzdCkpIHtcclxuICAgICAgICAgICAgaWYgKGlzTG9naW5DYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IEFEQUwgaWRfdG9rZW4gaWYgZXhpc3RzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZGFsSWRUb2tlbiA9IHRoaXMuZXh0cmFjdEFEQUxJZFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2lsZW50IGxvZ2luIGlmIEFEQUwgaWRfdG9rZW4gaXMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSAtIFNTT1xyXG4gICAgICAgICAgICAgICAgaWYgKGFkYWxJZFRva2VuICYmICFzY29wZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQURBTCdzIGlkVG9rZW4gZXhpc3RzLiBFeHRyYWN0aW5nIGxvZ2luIGluZm9ybWF0aW9uIGZyb20gQURBTCdzIGlkVG9rZW4gXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0gdGhpcy5idWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlblNpbGVudCh0b2tlblJlcXVlc3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJVbmlmaWVkIGNhY2hlIGNhbGwgaXMgc3VjY2Vzc2Z1bFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlSGFuZGxlcihpbnRlcmFjdGlvblR5cGUsIHJlc3BvbnNlLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiRXJyb3Igb2NjdXJyZWQgZHVyaW5nIHVuaWZpZWQgY2FjaGUgQVRTOiBcIiArIGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2NlZWQgdG8gbG9naW4gc2luY2UgQVRTIGZhaWxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkhlbHBlcihudWxsLCBpbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsLCByZXF1ZXN0LCBzY29wZXMsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBObyBBREFMIHRva2VuIGZvdW5kLCBwcm9jZWVkIHRvIGxvZ2luXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkhlbHBlcihudWxsLCBpbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsLCByZXF1ZXN0LCBzY29wZXMsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQWNxdWlyZVRva2VuIGNhbGwsIGJ1dCBubyBhY2NvdW50IG9yIGNvbnRleHQgZ2l2ZW4sIHNvIHRocm93IGVycm9yXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFVzZXIgc2Vzc2lvbiBleGlzdHNcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5IZWxwZXIoYWNjb3VudCwgaW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbCwgcmVxdWVzdCwgc2NvcGVzLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byBhY3F1aXJlVG9rZW5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYWNxdWlyZVRva2VuSGVscGVyKGFjY291bnQ6IEFjY291bnQsIGludGVyYWN0aW9uVHlwZTogSW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbDogYm9vbGVhbiwgcmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgc2NvcGVzPzogQXJyYXk8c3RyaW5nPiwgcmVzb2x2ZT86IGFueSwgcmVqZWN0PzogYW55KTogdm9pZCB7XHJcbiAgICAvLyBUcmFjayB0aGUgYWNxdWlyZVRva2VuIHByb2dyZXNzXHJcbiAgICAgICAgaWYgKGlzTG9naW5DYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzY29wZXMgPyBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKSA6IHRoaXMuY2xpZW50SWQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgbGV0IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnM7XHJcbiAgICAgICAgY29uc3QgYWNxdWlyZVRva2VuQXV0aG9yaXR5ID0gKCFpc0xvZ2luQ2FsbCAmJiByZXF1ZXN0ICYmIHJlcXVlc3QuYXV0aG9yaXR5KSA/IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpIDogdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcclxuXHJcbiAgICAgICAgbGV0IHBvcFVwV2luZG93OiBXaW5kb3c7XHJcbiAgICAgICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwKSB7XHJcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgcG9wdXAgd2luZG93XHJcbiAgICAgICAgICAgIHBvcFVwV2luZG93ID0gdGhpcy5vcGVuV2luZG93KFwiYWJvdXQ6YmxhbmtcIiwgXCJfYmxhbmtcIiwgMSwgdGhpcywgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgaWYgKCFwb3BVcFdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgcGFzcyByZWplY3QgaW4gb3BlbldpbmRvdywgd2UgcmVqZWN0IHRoZXJlIGR1cmluZyBhbiBlcnJvclxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhY3F1aXJlVG9rZW5BdXRob3JpdHkucmVzb2x2ZUVuZHBvaW50c0FzeW5jKCkudGhlbihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIE9uIEZ1bGZpbGxtZW50XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZTogc3RyaW5nID0gaXNMb2dpbkNhbGwgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudCwgc2NvcGVzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGxldCBsb2dpblN0YXJ0UGFnZTogc3RyaW5nO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTG9naW5DYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdXNlciBzZXRzIHRoZSBsb2dpbiBzdGFydCBwYWdlIC0gYW5ndWxhciBvbmx5Pz9cclxuICAgICAgICAgICAgICAgIGxvZ2luU3RhcnRQYWdlID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuYW5ndWxhckxvZ2luUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxvZ2luU3RhcnRQYWdlIHx8IGxvZ2luU3RhcnRQYWdlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW5TdGFydFBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuYW5ndWxhckxvZ2luUmVxdWVzdCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyhcclxuICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkF1dGhvcml0eSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgICAgICBzY29wZXMsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJpKCksXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0ICYmIHJlcXVlc3Quc3RhdGVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCwgbG9naW5TdGFydFBhZ2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAgICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCByZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbnN0cnVjdCB1cmxOYXZpZ2F0ZVxyXG4gICAgICAgICAgICBjb25zdCB1cmxOYXZpZ2F0ZSA9IFVybFV0aWxzLmNyZWF0ZU5hdmlnYXRlVXJsKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCkgKyBDb25zdGFudHMucmVzcG9uc2VfbW9kZV9mcmFnbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIHNldCBzdGF0ZSBpbiBjYWNoZVxyXG4gICAgICAgICAgICBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNMb2dpbkNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5zdGF0ZUFjcXVpcmVUb2tlbiwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmluQ29va2llKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IGlzTG9naW5DYWxsID8gQ29uc3RhbnRzLmxvZ2luIDogQ29uc3RhbnRzLnJlbmV3VG9rZW47XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0ZXIgY2FsbGJhY2sgdG8gY2FwdHVyZSByZXN1bHRzIGZyb20gc2VydmVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkSW50ZXJhY3Rpb25UeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gcHJvbXB0IHVzZXIgZm9yIGludGVyYWN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVXaW5kb3codXJsTmF2aWdhdGUsIHBvcFVwV2luZG93KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHBvcFVwV2luZG93IHdpbGwgYmUgbnVsbCBmb3IgcmVkaXJlY3RzLCBzbyB3ZSBkb250IG5lZWQgdG8gYXR0ZW1wdCB0byBtb25pdG9yIHRoZSB3aW5kb3dcclxuICAgICAgICAgICAgaWYgKHBvcFVwV2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgV2luZG93VXRpbHMubW9uaXRvcldpbmRvd0Zvckhhc2gocG9wVXBXaW5kb3csIHRoaXMuY29uZmlnLnN5c3RlbS5sb2FkRnJhbWVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKGhhc2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhFcnJvckhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlLCBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyLnRvU3RyaW5nKSwgYnVpbGRSZXNwb25zZVN0YXRlT25seShyZXF1ZXN0LnN0YXRlKSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgaWYgKHBvcFVwV2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICBwb3BVcFdpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgdGhpcyBmdW5jdGlvbiB0byBvYnRhaW4gYSB0b2tlbiBiZWZvcmUgZXZlcnkgY2FsbCB0byB0aGUgQVBJIC8gcmVzb3VyY2UgcHJvdmlkZXJcclxuICAgICAqXHJcbiAgICAgKiBNU0FMIHJldHVybidzIGEgY2FjaGVkIHRva2VuIHdoZW4gYXZhaWxhYmxlXHJcbiAgICAgKiBPciBpdCBzZW5kJ3MgYSByZXF1ZXN0IHRvIHRoZSBTVFMgdG8gb2J0YWluIGEgbmV3IHRva2VuIHVzaW5nIGEgaGlkZGVuIGlmcmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cclxuICAgICAqXHJcbiAgICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPEF1dGhSZXNwb25zZT59IC0gYSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXR1cm5zIHRoZSB7QGxpbmsgQXV0aFJlc3BvbnNlfSBvYmplY3RcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGFjcXVpcmVUb2tlblNpbGVudChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiBQcm9taXNlPEF1dGhSZXNwb25zZT4ge1xyXG4gICAgICAgIGlmICghcmVxdWVzdCkge1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlRW1wdHlSZXF1ZXN0RXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEF1dGhSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dFNjb3BlKHJlcXVlc3Quc2NvcGVzLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlID0gcmVxdWVzdC5zY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBkZXZlbG9wZXIgcGFzc2VzIGFuIGFjY291bnQsIGdpdmUgdGhhdCBhY2NvdW50IHRoZSBwcmlvcml0eVxyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50IHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gZXh0cmFjdCBpZiB0aGVyZSBpcyBhbiBhZGFsSWRUb2tlbiBzdGFzaGVkIGluIHRoZSBjYWNoZVxyXG4gICAgICAgICAgICBjb25zdCBhZGFsSWRUb2tlbiA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmFkYWxJZFRva2VuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGFjY291bnQgbG9nZ2VkIGluIGFuZCBubyBsb2dpbl9oaW50L3NpZCBpcyBwYXNzZWQgaW4gdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgaWYgKCFhY2NvdW50ICYmICEocmVxdWVzdC5zaWQgIHx8IHJlcXVlc3QubG9naW5IaW50KSAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VUeXBlID0gdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudCwgcmVxdWVzdC5zY29wZXMsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShyZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudElkLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zY29wZXMsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJpKCksXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0ICYmIHJlcXVlc3Quc3RhdGVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAgICAgICAgICBpZiAoU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuaXNTU09QYXJhbShyZXF1ZXN0KSB8fCBhY2NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiB1c2VyIGRpZG4ndCBwYXNzIGxvZ2luX2hpbnQvc2lkIGFuZCBhZGFsJ3MgaWR0b2tlbiBpcyBwcmVzZW50LCBleHRyYWN0IHRoZSBsb2dpbl9oaW50IGZyb20gdGhlIGFkYWxJZFRva2VuXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCFhY2NvdW50ICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgYWRhbElkVG9rZW4gZXhpc3RzLCBleHRyYWN0IHRoZSBTU08gaW5mbyBmcm9tIHRoZSBzYW1lXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZGFsSWRUb2tlbk9iamVjdCA9IFRva2VuVXRpbHMuZXh0cmFjdElkVG9rZW4oYWRhbElkVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIkFEQUwncyBpZFRva2VuIGV4aXN0cy4gRXh0cmFjdGluZyBsb2dpbiBpbmZvcm1hdGlvbiBmcm9tIEFEQUwncyBpZFRva2VuIFwiKTtcclxuICAgICAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5wb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQsIG51bGwsIGFkYWxJZFRva2VuT2JqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB1c2VyQ29udGFpbmVkQ2xhaW1zID0gcmVxdWVzdC5jbGFpbXNSZXF1ZXN0IHx8IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5jbGFpbXNWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhdXRoRXJyOiBBdXRoRXJyb3I7XHJcbiAgICAgICAgICAgIGxldCBjYWNoZVJlc3VsdFJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF1c2VyQ29udGFpbmVkQ2xhaW1zICYmICFyZXF1ZXN0LmZvcmNlUmVmcmVzaCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZVJlc3VsdFJlc3BvbnNlID0gdGhpcy5nZXRDYWNoZWRUb2tlbihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhFcnIgPSBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyByZXNvbHZlL3JlamVjdCBiYXNlZCBvbiBjYWNoZVJlc3VsdFxyXG4gICAgICAgICAgICBpZiAoY2FjaGVSZXN1bHRSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlRva2VuIGlzIGFscmVhZHkgaW4gY2FjaGUgZm9yIHNjb3BlOlwiICsgc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjYWNoZVJlc3VsdFJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGF1dGhFcnIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoYXV0aEVyci5lcnJvckNvZGUgKyBcIjpcIiArIGF1dGhFcnIuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChhdXRoRXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVsc2UgcHJvY2VlZCB3aXRoIGxvZ2luXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvZ01lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlckNvbnRhaW5lZENsYWltcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ01lc3NhZ2UgPSBcIlNraXBwZWQgY2FjaGUgbG9va3VwIHNpbmNlIGNsYWltcyB3ZXJlIGdpdmVuLlwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmZvcmNlUmVmcmVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ01lc3NhZ2UgPSBcIlNraXBwZWQgY2FjaGUgbG9va3VwIHNpbmNlIHJlcXVlc3QuZm9yY2VSZWZyZXNoIG9wdGlvbiB3YXMgc2V0IHRvIHRydWVcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nTWVzc2FnZSA9IFwiVG9rZW4gaXMgbm90IGluIGNhY2hlIGZvciBzY29wZTpcIiArIHNjb3BlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShsb2dNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDYWNoZSByZXN1bHQgY2FuIHJldHVybiBudWxsIGlmIGNhY2hlIGlzIGVtcHR5LiBJbiB0aGF0IGNhc2UsIHNldCBhdXRob3JpdHkgdG8gZGVmYXVsdCB2YWx1ZSBpZiBubyBhdXRob3JpdHkgaXMgcGFzc2VkIHRvIHRoZSBhcGkuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSA9IHJlcXVlc3QuYXV0aG9yaXR5ID8gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShyZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSkgOiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY2FjaGUgbWlzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogcmVmcmVzaCBhdHRlbXB0IHdpdGggaWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEFscmVhZHkgcmVuZXdpbmcgZm9yIHRoaXMgc2NvcGUsIGNhbGxiYWNrIHdoZW4gd2UgZ2V0IHRoZSB0b2tlbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiUmVuZXcgdG9rZW4gZm9yIHNjb3BlOiBcIiArIHNjb3BlICsgXCIgaXMgaW4gcHJvZ3Jlc3MuIFJlZ2lzdGVyaW5nIGNhbGxiYWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWN0aXZlIHJlbmV3YWxzIGNvbnRhaW5zIHRoZSBzdGF0ZSBmb3IgZWFjaCByZW5ld2FsLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0sIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Quc2NvcGVzICYmIHJlcXVlc3Quc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSAmJiByZXF1ZXN0LnNjb3Blcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEFwcCB1c2VzIGlkVG9rZW4gdG8gc2VuZCB0byBhcGkgZW5kcG9pbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogRGVmYXVsdCBzY29wZSBpcyB0cmFja2VkIGFzIGNsaWVudElkIHRvIHN0b3JlIHRoaXMgdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwicmVuZXdpbmcgaWRUb2tlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmV3SWRUb2tlbihyZXF1ZXN0LnNjb3BlcywgcmVzb2x2ZSwgcmVqZWN0LCBhY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5ldyBhY2Nlc3MgdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwicmVuZXdpbmcgYWNjZXNzdG9rZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5ld1Rva2VuKHJlcXVlc3Quc2NvcGVzLCByZXNvbHZlLCByZWplY3QsIGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyLnRvU3RyaW5nKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQb3B1cCBXaW5kb3cgQ3JlYXRpb25cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqXHJcbiAgICAgKiBVc2VkIHRvIHNlbmQgdGhlIHVzZXIgdG8gdGhlIHJlZGlyZWN0X3VyaSBhZnRlciBhdXRoZW50aWNhdGlvbiBpcyBjb21wbGV0ZS4gVGhlIHVzZXIncyBiZWFyZXIgdG9rZW4gaXMgYXR0YWNoZWQgdG8gdGhlIFVSSSBmcmFnbWVudCBhcyBhbiBpZF90b2tlbi9hY2Nlc3NfdG9rZW4gZmllbGQuXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGFsc28gY2xvc2VzIHRoZSBwb3B1cCB3aW5kb3cgYWZ0ZXIgcmVkaXJlY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybE5hdmlnYXRlXHJcbiAgICAgKiBAcGFyYW0gdGl0bGVcclxuICAgICAqIEBwYXJhbSBpbnRlcnZhbFxyXG4gICAgICogQHBhcmFtIGluc3RhbmNlXHJcbiAgICAgKiBAcGFyYW0gcmVzb2x2ZVxyXG4gICAgICogQHBhcmFtIHJlamVjdFxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9wZW5XaW5kb3codXJsTmF2aWdhdGU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgaW50ZXJ2YWw6IG51bWJlciwgaW5zdGFuY2U6IHRoaXMsIHJlc29sdmU/OiBGdW5jdGlvbiwgcmVqZWN0PzogRnVuY3Rpb24pOiBXaW5kb3cge1xyXG4gICAgLy8gR2VuZXJhdGUgYSBwb3B1cCB3aW5kb3dcclxuICAgICAgICBsZXQgcG9wdXBXaW5kb3c6IFdpbmRvdztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBwb3B1cFdpbmRvdyA9IHRoaXMub3BlblBvcHVwKHVybE5hdmlnYXRlLCB0aXRsZSwgQ29uc3RhbnRzLnBvcFVwV2lkdGgsIENvbnN0YW50cy5wb3BVcEhlaWdodCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuY29kZSArIFwiOlwiICsgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmRlc2MpO1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5jb2RlKTtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5kZXNjKTtcclxuICAgICAgICAgICAgaWYgKHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVQb3B1cFdpbmRvd0Vycm9yKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHVzaCBwb3B1cCB3aW5kb3cgaGFuZGxlIG9udG8gc3RhY2sgZm9yIHRyYWNraW5nXHJcbiAgICAgICAgV2luZG93VXRpbHMudHJhY2tQb3B1cChwb3B1cFdpbmRvdyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvbGxUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIElmIHBvcHVwIGNsb3NlZCBvciBsb2dpbiBpbiBwcm9ncmVzcywgY2FuY2VsIGxvZ2luXHJcbiAgICAgICAgICAgIGlmIChwb3B1cFdpbmRvdyAmJiBwb3B1cFdpbmRvdy5jbG9zZWQgJiYgKGluc3RhbmNlLmxvZ2luSW5Qcm9ncmVzcyB8fCBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlckNhbmNlbGxlZEVycm9yKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwocG9sbFRpbWVyKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5mcmFtZXdvcmsuaXNBbmd1bGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoXCJtc2FsOnBvcFVwQ2xvc2VkXCIsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmNvZGUgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5kZXNjKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcFVwV2luZG93TG9jYXRpb24gPSBwb3B1cFdpbmRvdy5sb2NhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzaCBjaGFuZ2VzLCBjbG9zZSB0aGUgcG9wdXAgd2luZG93XHJcbiAgICAgICAgICAgICAgICBpZiAocG9wVXBXaW5kb3dMb2NhdGlvbi5ocmVmLmluZGV4T2YodGhpcy5nZXRSZWRpcmVjdFVyaSgpKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChwb2xsVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQ2xvc2luZyBwb3B1cCB3aW5kb3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQ2hlY2sgaG93IHRoaXMgY2FuIGJlIGV4dHJhY3RlZCBmb3IgYW55IGZyYW1ld29yayBzcGVjaWZpYyBjb2RlP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5mcmFtZXdvcmsuaXNBbmd1bGFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0KFwibXNhbDpwb3BVcEhhc2hDaGFuZ2VkXCIsIHBvcFVwV2luZG93TG9jYXRpb24uaGFzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdpbmRvd1V0aWxzLmNsb3NlUG9wdXBzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAqIENyb3NzIERvbWFpbiB1cmwgY2hlY2sgZXJyb3IuXHJcbiAgICAgICAgICAgICAqIFdpbGwgYmUgdGhyb3duIHVudGlsIEFBRCByZWRpcmVjdHMgdGhlIHVzZXIgYmFjayB0byB0aGUgYXBwXCJzIHJvb3QgcGFnZSB3aXRoIHRoZSB0b2tlbi5cclxuICAgICAgICAgICAgICogTm8gbmVlZCB0byBsb2cgb3IgdGhyb3cgdGhpcyBlcnJvciBhcyBpdCB3aWxsIGNyZWF0ZSB1bm5lY2Vzc2FyeSB0cmFmZmljLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW50ZXJ2YWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9wdXBXaW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKlxyXG4gICAgICogQ29uZmlndXJlcyBwb3B1cCB3aW5kb3cgZm9yIGxvZ2luLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB1cmxOYXZpZ2F0ZVxyXG4gICAgICogQHBhcmFtIHRpdGxlXHJcbiAgICAgKiBAcGFyYW0gcG9wVXBXaWR0aFxyXG4gICAgICogQHBhcmFtIHBvcFVwSGVpZ2h0XHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb3BlblBvcHVwKHVybE5hdmlnYXRlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHBvcFVwV2lkdGg6IG51bWJlciwgcG9wVXBIZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBhZGRpbmcgd2luTGVmdCBhbmQgd2luVG9wIHRvIGFjY291bnQgZm9yIGR1YWwgbW9uaXRvclxyXG4gICAgICAgICAgICAgKiB1c2luZyBzY3JlZW5MZWZ0IGFuZCBzY3JlZW5Ub3AgZm9yIElFOCBhbmQgZWFybGllclxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgY29uc3Qgd2luTGVmdCA9IHdpbmRvdy5zY3JlZW5MZWZ0ID8gd2luZG93LnNjcmVlbkxlZnQgOiB3aW5kb3cuc2NyZWVuWDtcclxuICAgICAgICAgICAgY29uc3Qgd2luVG9wID0gd2luZG93LnNjcmVlblRvcCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiB3aW5kb3cuc2NyZWVuWTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIHdpbmRvdy5pbm5lcldpZHRoIGRpc3BsYXlzIGJyb3dzZXIgd2luZG93XCJzIGhlaWdodCBhbmQgd2lkdGggZXhjbHVkaW5nIHRvb2xiYXJzXHJcbiAgICAgICAgICAgICAqIHVzaW5nIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCBmb3IgSUU4IGFuZCBlYXJsaWVyXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgY29uc3QgbGVmdCA9ICgod2lkdGggLyAyKSAtIChwb3BVcFdpZHRoIC8gMikpICsgd2luTGVmdDtcclxuICAgICAgICAgICAgY29uc3QgdG9wID0gKChoZWlnaHQgLyAyKSAtIChwb3BVcEhlaWdodCAvIDIpKSArIHdpblRvcDtcclxuXHJcbiAgICAgICAgICAgIC8vIG9wZW4gdGhlIHdpbmRvd1xyXG4gICAgICAgICAgICBjb25zdCBwb3B1cFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybE5hdmlnYXRlLCB0aXRsZSwgXCJ3aWR0aD1cIiArIHBvcFVwV2lkdGggKyBcIiwgaGVpZ2h0PVwiICsgcG9wVXBIZWlnaHQgKyBcIiwgdG9wPVwiICsgdG9wICsgXCIsIGxlZnQ9XCIgKyBsZWZ0KTtcclxuICAgICAgICAgICAgaWYgKCFwb3B1cFdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVBvcHVwV2luZG93RXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9wdXBXaW5kb3cuZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwV2luZG93LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwb3B1cFdpbmRvdztcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiZXJyb3Igb3BlbmluZyBwb3B1cCBcIiArIGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBJZnJhbWUgTWFuYWdlbWVudFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQ2FsbGluZyBfbG9hZEZyYW1lIGJ1dCB3aXRoIGEgdGltZW91dCB0byBzaWduYWwgZmFpbHVyZSBpbiBsb2FkZnJhbWVTdGF0dXMuIENhbGxiYWNrcyBhcmUgbGVmdC5cclxuICAgICAqIHJlZ2lzdGVyZWQgd2hlbiBuZXR3b3JrIGVycm9ycyBvY2N1ciBhbmQgc3Vic2VxdWVudCB0b2tlbiByZXF1ZXN0cyBmb3Igc2FtZSByZXNvdXJjZSBhcmUgcmVnaXN0ZXJlZCB0byB0aGUgcGVuZGluZyByZXF1ZXN0LlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGxvYWRJZnJhbWVUaW1lb3V0KHVybE5hdmlnYXRlOiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nLCBzY29wZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy8gc2V0IGlmcmFtZSBzZXNzaW9uIHRvIHBlbmRpbmdcclxuICAgICAgICBjb25zdCBleHBlY3RlZFN0YXRlID0gd2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXTtcclxuICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiU2V0IGxvYWRpbmcgc3RhdGUgdG8gcGVuZGluZyBmb3I6IFwiICsgc2NvcGUgKyBcIjpcIiArIGV4cGVjdGVkU3RhdGUpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgZXhwZWN0ZWRTdGF0ZSwgQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNJblByb2dyZXNzKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgZXhwZWN0ZWRTdGF0ZSkgPT09IENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgLy8gZmFpbCB0aGUgaWZyYW1lIHNlc3Npb24gaWYgaXQncyBpbiBwZW5kaW5nIHN0YXRlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiTG9hZGluZyBmcmFtZSBoYXMgdGltZWQgb3V0IGFmdGVyOiBcIiArICh0aGlzLmNvbmZpZy5zeXN0ZW0ubG9hZEZyYW1lVGltZW91dCAvIDEwMDApICsgXCIgc2Vjb25kcyBmb3Igc2NvcGUgXCIgKyBzY29wZSArIFwiOlwiICsgZXhwZWN0ZWRTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBFcnJvciBhZnRlciB0aW1lb3V0XHJcbiAgICAgICAgICAgICAgICBpZiAoZXhwZWN0ZWRTdGF0ZSAmJiB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXShudWxsLCBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVG9rZW5SZW5ld2FsVGltZW91dEVycm9yKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgZXhwZWN0ZWRTdGF0ZSwgQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNDYW5jZWxsZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQpO1xyXG5cclxuICAgICAgICBjb25zdCBpZnJhbWUgPSBhd2FpdCBXaW5kb3dVdGlscy5sb2FkRnJhbWUodXJsTmF2aWdhdGUsIGZyYW1lTmFtZSwgdGhpcy5jb25maWcuc3lzdGVtLm5hdmlnYXRlRnJhbWVXYWl0LCB0aGlzLmxvZ2dlcik7XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IFdpbmRvd1V0aWxzLm1vbml0b3JXaW5kb3dGb3JIYXNoKGlmcmFtZS5jb250ZW50V2luZG93LCB0aGlzLmNvbmZpZy5zeXN0ZW0ubG9hZEZyYW1lVGltZW91dCk7XHJcbiAgICAgICAgaWYgKGhhc2gpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKGhhc2gpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBHZW5lcmFsIEhlbHBlcnNcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIFVzZWQgdG8gcmVkaXJlY3QgdGhlIGJyb3dzZXIgdG8gdGhlIFNUUyBhdXRob3JpemF0aW9uIGVuZHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsTmF2aWdhdGUgLSBVUkwgb2YgdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZVdpbmRvdyh1cmxOYXZpZ2F0ZTogc3RyaW5nLCBwb3B1cFdpbmRvdz86IFdpbmRvdykge1xyXG4gICAgICAgIC8vIE5hdmlnYXRlIGlmIHZhbGlkIFVSTFxyXG4gICAgICAgIGlmICh1cmxOYXZpZ2F0ZSAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eSh1cmxOYXZpZ2F0ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmF2aWdhdGVXaW5kb3c6IFdpbmRvdyA9IHBvcHVwV2luZG93ID8gcG9wdXBXaW5kb3cgOiB3aW5kb3c7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ01lc3NhZ2U6IHN0cmluZyA9IHBvcHVwV2luZG93ID8gXCJOYXZpZ2F0ZWQgUG9wdXAgd2luZG93IHRvOlwiICsgdXJsTmF2aWdhdGUgOiBcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGU7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkobG9nTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIG5hdmlnYXRlV2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsTmF2aWdhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIk5hdmlnYXRlIHVybCBpcyBlbXB0eVwiKTtcclxuICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIk5hdmlnYXRlIHVybCBpcyBlbXB0eVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBVc2VkIHRvIGFkZCB0aGUgZGV2ZWxvcGVyIHJlcXVlc3RlZCBjYWxsYmFjayB0byB0aGUgYXJyYXkgb2YgY2FsbGJhY2tzIGZvciB0aGUgc3BlY2lmaWVkIHNjb3Blcy4gVGhlIHVwZGF0ZWQgYXJyYXkgaXMgc3RvcmVkIG9uIHRoZSB3aW5kb3cgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwZWN0ZWRTdGF0ZSAtIFVuaXF1ZSBzdGF0ZSBpZGVudGlmaWVyIChndWlkKS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzY29wZSAtIERldmVsb3BlciByZXF1ZXN0ZWQgcGVybWlzc2lvbnMuIE5vdCBhbGwgc2NvcGVzIGFyZSBndWFyYW50ZWVkIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQuXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIC0gVGhlIHJlc29sdmUgZnVuY3Rpb24gb2YgdGhlIHByb21pc2Ugb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IC0gVGhlIHJlamVjdCBmdW5jdGlvbiBvZiB0aGUgcHJvbWlzZSBvYmplY3QuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJDYWxsYmFjayhleHBlY3RlZFN0YXRlOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcsIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdHJhY2sgYWN0aXZlIHJlbmV3YWxzXHJcbiAgICAgICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSA9IGV4cGVjdGVkU3RhdGU7XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgY2FsbGJhY2tzIG1hcHBlZCBhcnJheVxyXG4gICAgICAgIGlmICghd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbmRleGluZyBvbiB0aGUgY3VycmVudCBzdGF0ZSwgcHVzaCB0aGUgY2FsbGJhY2sgcGFyYW1zIHRvIGNhbGxiYWNrcyBtYXBwZWRcclxuICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0ucHVzaCh7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0IH0pO1xyXG5cclxuICAgICAgICAvLyBTdG9yZSB0aGUgc2VydmVyIHJlc3BvbnNlIGluIHRoZSBjdXJyZW50IHdpbmRvdz8/XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPVxyXG4gICAgICAocmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgZXJyb3I6IEF1dGhFcnJvcikgPT4ge1xyXG4gICAgICAgICAgLy8gcmVzZXQgYWN0aXZlIHJlbmV3YWxzXHJcbiAgICAgICAgICB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAvLyBmb3IgYWxsIHByb21pc2VNYXBwZWR0b1JlbmV3U3RhdGVzIGZvciBhIGdpdmVuICdzdGF0ZScgLSBjYWxsIHRoZSByZWplY3QvcmVzb2x2ZSB3aXRoIGVycm9yL3Rva2VuIHJlc3BlY3RpdmVseVxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXVtpXS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV1baV0ucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiRXJyb3IgYW5kIHJlc3BvbnNlIGFyZSBib3RoIG51bGxcIik7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHJlc2V0XHJcbiAgICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBudWxsO1xyXG4gICAgICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9IG51bGw7XHJcbiAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIExvZ291dFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRvIGxvZyBvdXQgdGhlIGN1cnJlbnQgdXNlciwgYW5kIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoZSBwb3N0TG9nb3V0UmVkaXJlY3RVcmkuXHJcbiAgICAgKiBEZWZhdWx0IGJlaGF2aW91ciBpcyB0byByZWRpcmVjdCB0aGUgdXNlciB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxyXG4gICAgICovXHJcbiAgICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbnVsbDtcclxuICAgICAgICBsZXQgbG9nb3V0ID0gXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5nZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKSkge1xyXG4gICAgICAgICAgICBsb2dvdXQgPSBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKS50aGVuKGF1dGhvcml0eSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybE5hdmlnYXRlID0gYXV0aG9yaXR5LkVuZFNlc3Npb25FbmRwb2ludFxyXG4gICAgICAgICAgICAgICAgPyBgJHthdXRob3JpdHkuRW5kU2Vzc2lvbkVuZHBvaW50fT8ke2xvZ291dH1gXHJcbiAgICAgICAgICAgICAgICA6IGAke3RoaXMuYXV0aG9yaXR5fW9hdXRoMi92Mi4wL2xvZ291dD8ke2xvZ291dH1gO1xyXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlV2luZG93KHVybE5hdmlnYXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIENsZWFyIGFsbCBhY2Nlc3MgdG9rZW5zIGluIHRoZSBjYWNoZS5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNsZWFyQ2FjaGUoKTogdm9pZCB7XHJcbiAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzID0gW107XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5JdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuSXRlbXNbaV0ua2V5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlc2V0Q2FjaGVJdGVtcygpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLmNsZWFyQ29va2llKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBDbGVhciBhIGdpdmVuIGFjY2VzcyB0b2tlbiBmcm9tIHRoZSBjYWNoZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzVG9rZW5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGNsZWFyQ2FjaGVGb3JTY29wZShhY2Nlc3NUb2tlbjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5JdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGFjY2Vzc1Rva2VuSXRlbXNbaV07XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi52YWx1ZS5hY2Nlc3NUb2tlbiA9PT0gYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkodG9rZW4ua2V5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUmVzcG9uc2VcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqIENoZWNrcyBpZiB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgU1RTLiBJbiBjYXNlIG9mIHJlZGlyZWN0LCB0aGUgdXJsIGZyYWdtZW50IGhhcyBlaXRoZXIgaWRfdG9rZW4sIGFjY2Vzc190b2tlbiBvciBlcnJvci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoIC0gSGFzaCBwYXNzZWQgZnJvbSByZWRpcmVjdCBwYWdlLlxyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IC0gdHJ1ZSBpZiByZXNwb25zZSBjb250YWlucyBpZF90b2tlbiwgYWNjZXNzX3Rva2VuIG9yIGVycm9yLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICAgKi9cclxuICAgIGlzQ2FsbGJhY2soaGFzaDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzQ2FsbGJhY2sgd2lsbCBiZSBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHVybENvbnRhaW5zSGFzaCBpbiBNU0FMLmpzIHYyLjAuXCIpO1xyXG4gICAgICAgIHJldHVybiBVcmxVdGlscy51cmxDb250YWluc0hhc2goaGFzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBVc2VkIHRvIGNhbGwgdGhlIGNvbnN0cnVjdG9yIGNhbGxiYWNrIHdpdGggdGhlIHRva2VuL2Vycm9yXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2hhc2g9d2luZG93LmxvY2F0aW9uLmhhc2hdIC0gSGFzaCBmcmFnbWVudCBvZiBVcmwuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJvY2Vzc0NhbGxCYWNrKGhhc2g6IHN0cmluZywgc3RhdGVJbmZvOiBSZXNwb25zZVN0YXRlSW5mbywgcGFyZW50Q2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJQcm9jZXNzaW5nIHRoZSBjYWxsYmFjayBmcm9tIHJlZGlyZWN0IHJlc3BvbnNlXCIpO1xyXG4gICAgICAgIC8vIGdldCB0aGUgc3RhdGUgaW5mbyBmcm9tIHRoZSBoYXNoXHJcbiAgICAgICAgaWYgKCFzdGF0ZUluZm8pIHtcclxuICAgICAgICAgICAgc3RhdGVJbmZvID0gdGhpcy5nZXRSZXNwb25zZVN0YXRlKGhhc2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlIDogQXV0aFJlc3BvbnNlO1xyXG4gICAgICAgIGxldCBhdXRoRXJyIDogQXV0aEVycm9yO1xyXG4gICAgICAgIC8vIFNhdmUgdGhlIHRva2VuIGluZm8gZnJvbSB0aGUgaGFzaFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlVG9rZW5Gcm9tSGFzaChoYXNoLCBzdGF0ZUluZm8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhdXRoRXJyID0gZXJyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGhhc2ggZnJvbSB0aGUgY2FjaGVcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGNvb2tpZSBpbiB0aGUgaGFzaFxyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5jbGVhckNvb2tpZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50U3RhdGU6IHN0cmluZyA9IHRoaXMuZ2V0QWNjb3VudFN0YXRlKHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5yZW5ld1Rva2VuKSB8fCByZXNwb25zZS5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIldpbmRvdyBpcyBpbiBpZnJhbWUsIGFjcXVpcmluZyB0b2tlbiBzaWxlbnRseVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiYWNxdWlyaW5nIHRva2VuIGludGVyYWN0aXZlIGluIHByb2dyZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50b2tlblR5cGUgPSBDb25zdGFudHMuYWNjZXNzVG9rZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5sb2dpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRva2VuVHlwZSA9IENvbnN0YW50cy5pZFRva2VuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFJlc3BvbnNlSGFuZGxlcihDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXBhcmVudENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhFcnJvckhhbmRsZXIoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0LCBhdXRoRXJyLCBidWlsZFJlc3BvbnNlU3RhdGVPbmx5KGFjY291bnRTdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwYXJlbnRDYWxsYmFjayhyZXNwb25zZSwgYXV0aEVycik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiRXJyb3Igb2NjdXJyZWQgaW4gdG9rZW4gcmVjZWl2ZWQgY2FsbGJhY2sgZnVuY3Rpb246IFwiICsgZXJyKTtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVycm9ySW5DYWxsYmFja0Z1bmN0aW9uKGVyci50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBmb3IgcHJvY2Vzc2luZyB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSB0aGUgU1RTLiBJdCBleHRyYWN0cyB0aGUgaGFzaCwgcHJvY2Vzc2VzIHRoZSB0b2tlbiBvciBlcnJvciBpbmZvcm1hdGlvbiBhbmQgc2F2ZXMgaXQgaW4gdGhlIGNhY2hlLiBJdCB0aGVuXHJcbiAgICAgKiBjYWxscyB0aGUgcmVnaXN0ZXJlZCBjYWxsYmFja3MgaW4gY2FzZSBvZiByZWRpcmVjdCBvciByZXNvbHZlcyB0aGUgcHJvbWlzZXMgd2l0aCB0aGUgcmVzdWx0LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoPXdpbmRvdy5sb2NhdGlvbi5oYXNoXSAtIEhhc2ggZnJhZ21lbnQgb2YgVXJsLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UoaGFzaDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy8gcmV0cmlldmUgdGhlIGhhc2hcclxuICAgICAgICBjb25zdCBsb2NhdGlvbkhhc2ggPSBoYXNoIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBmbG93IGlzIHBvcHVwIG9yIGhpZGRlbiBpZnJhbWVcclxuICAgICAgICBjb25zdCBpZnJhbWVXaXRoSGFzaCA9IFdpbmRvd1V0aWxzLmdldElmcmFtZVdpdGhIYXNoKGxvY2F0aW9uSGFzaCk7XHJcbiAgICAgICAgY29uc3QgcG9wVXBXaXRoSGFzaCA9IFdpbmRvd1V0aWxzLmdldFBvcFVwV2l0aEhhc2gobG9jYXRpb25IYXNoKTtcclxuICAgICAgICBjb25zdCBpc1BvcHVwT3JJZnJhbWUgPSAhIShpZnJhbWVXaXRoSGFzaCB8fCBwb3BVcFdpdGhIYXNoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyksIGJ5IHVzaW5nIHNlbGYsIHdpbmRvdy5wYXJlbnQgYmVjb21lcyBlcXVhbCB0byB3aW5kb3cgaW4gZ2V0UmVzcG9uc2VTdGF0ZSBtZXRob2Qgc3BlY2lmaWNhbGx5XHJcbiAgICAgICAgY29uc3Qgc3RhdGVJbmZvID0gdGhpcy5nZXRSZXNwb25zZVN0YXRlKGxvY2F0aW9uSGFzaCk7XHJcblxyXG4gICAgICAgIGxldCB0b2tlblJlc3BvbnNlQ2FsbGJhY2s6IChyZXNwb25zZTogQXV0aFJlc3BvbnNlLCBlcnJvcjogQXV0aEVycm9yKSA9PiB2b2lkID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlJldHVybmVkIGZyb20gcmVkaXJlY3QgdXJsXCIpO1xyXG4gICAgICAgIC8vIElmIHBhcmVudCB3aW5kb3cgaXMgdGhlIG1zYWwgaW5zdGFuY2Ugd2hpY2ggb3BlbmVkIHRoZSBjdXJyZW50IHdpbmRvdyAoaWZyYW1lKVxyXG4gICAgICAgIGlmIChpc1BvcHVwT3JJZnJhbWUpIHtcclxuICAgICAgICAgICAgdG9rZW5SZXNwb25zZUNhbGxiYWNrID0gd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tzdGF0ZUluZm8uc3RhdGVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFJlZGlyZWN0IGNhc2VzXHJcbiAgICAgICAgICAgIHRva2VuUmVzcG9uc2VDYWxsYmFjayA9IG51bGw7XHJcbiAgICAgICAgICAgIC8vIGlmIHNldCB0byBuYXZpZ2F0ZSB0byBsb2dpblJlcXVlc3QgcGFnZSBwb3N0IGxvZ2luXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5hdXRoLm5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnVybEhhc2gsIGxvY2F0aW9uSGFzaCk7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LnBhcmVudCA9PT0gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIHRoaXMuaW5Db29raWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIFdlIHJlYWNoZWQgdGhpcyBwb2ludCB0b28gZWFybHkgLSBjYWNoZSBoYXNoLCByZXR1cm4gYW5kIHByb2Nlc3MgaW4gaGFuZGxlUmVkaXJlY3RDYWxsYmFja3NcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnVybEhhc2gsIGxvY2F0aW9uSGFzaCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJvY2Vzc0NhbGxCYWNrKGxvY2F0aW9uSGFzaCwgc3RhdGVJbmZvLCB0b2tlblJlc3BvbnNlQ2FsbGJhY2spO1xyXG5cclxuICAgICAgICAvLyBJZiBjdXJyZW50IHdpbmRvdyBpcyBvcGVuZXIsIGNsb3NlIGFsbCB3aW5kb3dzXHJcbiAgICAgICAgaWYgKGlzUG9wdXBPcklmcmFtZSkge1xyXG4gICAgICAgICAgICBXaW5kb3dVdGlscy5jbG9zZVBvcHVwcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIENyZWF0ZXMgYSBzdGF0ZUluZm8gb2JqZWN0IGZyb20gdGhlIFVSTCBmcmFnbWVudCBhbmQgcmV0dXJucyBpdC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoICAtICBIYXNoIHBhc3NlZCBmcm9tIHJlZGlyZWN0IHBhZ2VcclxuICAgICAqIEByZXR1cm5zIHtUb2tlblJlc3BvbnNlfSBhbiBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSByZWRpcmVjdCByZXNwb25zZSBmcm9tIEFBRCBjb21wcmlzaW5nIG9mIHRoZSBrZXlzIC0gcGFyYW1ldGVycywgcmVxdWVzdFR5cGUsIHN0YXRlTWF0Y2gsIHN0YXRlUmVzcG9uc2UgYW5kIHZhbGlkLlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0UmVzcG9uc2VTdGF0ZShoYXNoOiBzdHJpbmcpOiBSZXNwb25zZVN0YXRlSW5mbyB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IFVybFV0aWxzLmRlc2VyaWFsaXplSGFzaChoYXNoKTtcclxuICAgICAgICBsZXQgc3RhdGVSZXNwb25zZTogUmVzcG9uc2VTdGF0ZUluZm87XHJcbiAgICAgICAgaWYgKCFwYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJIYXNoIHdhcyBub3QgcGFyc2VkIGNvcnJlY3RseS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KFwic3RhdGVcIikpIHtcclxuICAgICAgICAgICAgc3RhdGVSZXNwb25zZSA9IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RUeXBlOiBDb25zdGFudHMudW5rbm93bixcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBwYXJhbWV0ZXJzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc3RhdGVNYXRjaDogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiSGFzaCBkb2VzIG5vdCBjb250YWluIHN0YXRlLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBhc3luYyBjYWxscyBjYW4gZmlyZSBpZnJhbWUgYW5kIGxvZ2luIHJlcXVlc3QgYXQgdGhlIHNhbWUgdGltZSBpZiBkZXZlbG9wZXIgZG9lcyBub3QgdXNlIHRoZSBBUEkgYXMgZXhwZWN0ZWRcclxuICAgICAgICAgKiBpbmNvbWluZyBjYWxsYmFjayBuZWVkcyB0byBiZSBsb29rZWQgdXAgdG8gZmluZCB0aGUgcmVxdWVzdCB0eXBlXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgIC8vIGxvZ2luUmVkaXJlY3RcclxuICAgICAgICBpZiAoc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgdGhpcy5pbkNvb2tpZSkgfHwgc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5zaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlKSB7IC8vIGxvZ2luUmVkaXJlY3RcclxuICAgICAgICAgICAgc3RhdGVSZXNwb25zZS5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5sb2dpbjtcclxuICAgICAgICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFjcXVpcmVUb2tlblJlZGlyZWN0XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVBY3F1aXJlVG9rZW4sIHRoaXMuaW5Db29raWUpKSB7IC8vIGFjcXVpcmVUb2tlblJlZGlyZWN0XHJcbiAgICAgICAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSBDb25zdGFudHMucmVuZXdUb2tlbjtcclxuICAgICAgICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBleHRlcm5hbCBhcGkgcmVxdWVzdHMgbWF5IGhhdmUgbWFueSByZW5ld3Rva2VuIHJlcXVlc3RzIGZvciBkaWZmZXJlbnQgcmVzb3VyY2VcclxuICAgICAgICBpZiAoIXN0YXRlUmVzcG9uc2Uuc3RhdGVNYXRjaCkge1xyXG4gICAgICAgICAgICBzdGF0ZVJlc3BvbnNlLnJlcXVlc3RUeXBlID0gd2luZG93LnJlcXVlc3RUeXBlO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZXNJblBhcmVudENvbnRleHQgPSB3aW5kb3cucmVuZXdTdGF0ZXM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzSW5QYXJlbnRDb250ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzSW5QYXJlbnRDb250ZXh0W2ldID09PSBzdGF0ZVJlc3BvbnNlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gVG9rZW4gUHJvY2Vzc2luZyAoRXh0cmFjdCB0byBUb2tlblByb2Nlc3NpbmcudHMpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBVc2VkIHRvIGdldCB0b2tlbiBmb3IgdGhlIHNwZWNpZmllZCBzZXQgb2Ygc2NvcGVzIGZyb20gdGhlIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzfSAtIFJlcXVlc3Qgc2VudCB0byB0aGUgU1RTIHRvIG9idGFpbiBhbiBpZF90b2tlbi9hY2Nlc3NfdG9rZW5cclxuICAgICAqIEBwYXJhbSB7QWNjb3VudH0gYWNjb3VudCAtIEFjY291bnQgZm9yIHdoaWNoIHRoZSBzY29wZXMgd2VyZSByZXF1ZXN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRDYWNoZWRUb2tlbihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLCBhY2NvdW50OiBBY2NvdW50KTogQXV0aFJlc3BvbnNlIHtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW5DYWNoZUl0ZW06IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gbnVsbDtcclxuICAgICAgICBjb25zdCBzY29wZXMgPSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc2NvcGVzO1xyXG5cclxuICAgICAgICAvLyBmaWx0ZXIgYnkgY2xpZW50SWQgYW5kIGFjY291bnRcclxuICAgICAgICBjb25zdCB0b2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnModGhpcy5jbGllbnRJZCwgYWNjb3VudCA/IGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyIDogbnVsbCk7XHJcblxyXG4gICAgICAgIC8vIE5vIG1hdGNoIGZvdW5kIGFmdGVyIGluaXRpYWwgZmlsdGVyaW5nXHJcbiAgICAgICAgaWYgKHRva2VuQ2FjaGVJdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaWYgbm8gYXV0aG9yaXR5IHBhc3NlZFxyXG4gICAgICAgIGlmICghc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eSkge1xyXG4gICAgICAgICAgICAvLyBmaWx0ZXIgYnkgc2NvcGVcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbkNhY2hlSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlSXRlbSA9IHRva2VuQ2FjaGVJdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChTY29wZVNldC5jb250YWluc1Njb3BlKGNhY2hlZFNjb3Blcywgc2NvcGVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChjYWNoZUl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBvbmx5IG9uZSBjYWNoZWQgdG9rZW4gZm91bmRcclxuICAgICAgICAgICAgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IGZpbHRlcmVkSXRlbXNbMF07XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIG1vcmUgdGhhbiBvbmUgY2FjaGVkIHRva2VuIGlzIGZvdW5kXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdUb2tlbnNJbkNhY2hlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIG5vIG1hdGNoIGZvdW5kLCBjaGVjayBpZiB0aGVyZSB3YXMgYSBzaW5nbGUgYXV0aG9yaXR5IHVzZWRcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdXRob3JpdHlMaXN0ID0gdGhpcy5nZXRVbmlxdWVBdXRob3JpdHkodG9rZW5DYWNoZUl0ZW1zLCBcImF1dGhvcml0eVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChhdXRob3JpdHlMaXN0Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVBdXRob3JpdGllc0luQ2FjaGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlID0gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShhdXRob3JpdHlMaXN0WzBdLCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiBhbiBhdXRob3JpdHkgaXMgcGFzc2VkIGluIHRoZSBBUElcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZmlsdGVyIGJ5IGF1dGhvcml0eSBhbmQgc2NvcGVcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbkNhY2hlSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlSXRlbSA9IHRva2VuQ2FjaGVJdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChTY29wZVNldC5jb250YWluc1Njb3BlKGNhY2hlZFNjb3Blcywgc2NvcGVzKSAmJiBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkoY2FjaGVJdGVtLmtleS5hdXRob3JpdHkpID09PSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGNhY2hlSXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbm8gbWF0Y2hcclxuICAgICAgICAgICAgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiBvbmx5IG9uZSBjYWNoZWRUb2tlbiBGb3VuZFxyXG4gICAgICAgICAgICBlbHNlIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBmaWx0ZXJlZEl0ZW1zWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBjYWNoZWQgdG9rZW4gaXMgZm91bmRcclxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhwaXJlZCA9IE51bWJlcihhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5leHBpcmVzSW4pO1xyXG4gICAgICAgICAgICAvLyBJZiBleHBpcmF0aW9uIGlzIHdpdGhpbiBvZmZzZXQsIGl0IHdpbGwgZm9yY2UgcmVuZXdcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5jb25maWcuc3lzdGVtLnRva2VuUmVuZXdhbE9mZnNldFNlY29uZHMgfHwgMzAwO1xyXG4gICAgICAgICAgICBpZiAoZXhwaXJlZCAmJiAoZXhwaXJlZCA+IFRpbWVVdGlscy5ub3coKSArIG9mZnNldCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkVG9rZW5PYmogPSBuZXcgSWRUb2tlbihhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5pZFRva2VuKTtcclxuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQgPSB0aGlzLmdldEFjY291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkFjY291bnQgc2hvdWxkIG5vdCBiZSBudWxsIGhlcmUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFTdGF0ZSA9IHRoaXMuZ2V0QWNjb3VudFN0YXRlKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA6IEF1dGhSZXNwb25zZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1bmlxdWVJZDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnRJZDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICB0b2tlblR5cGU6IChhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5pZFRva2VuID09PSBhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5hY2Nlc3NUb2tlbikgPyBDb25zdGFudHMuaWRUb2tlbiA6IENvbnN0YW50cy5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuT2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IGlkVG9rZW5PYmouY2xhaW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgICAgICAgICBzY29wZXM6IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXNPbjogbmV3IERhdGUoZXhwaXJlZCAqIDEwMDApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudFN0YXRlOiBhU3RhdGVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBSZXNwb25zZVV0aWxzLnNldFJlc3BvbnNlSWRUb2tlbihyZXNwb25zZSwgaWRUb2tlbk9iaik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkSXRlbXNbMF0ua2V5KSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIFVzZWQgdG8gZ2V0IGEgdW5pcXVlIGxpc3Qgb2YgYXV0aG9yaXRpZXMgZnJvbSB0aGUgY2FjaGVcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+fSAgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zIC0gYWNjZXNzVG9rZW5DYWNoZUl0ZW1zIHNhdmVkIGluIHRoZSBjYWNoZVxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFVuaXF1ZUF1dGhvcml0eShhY2Nlc3NUb2tlbkNhY2hlSXRlbXM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiwgcHJvcGVydHk6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IGF1dGhvcml0eUxpc3Q6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgICBjb25zdCBmbGFnczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5rZXkuaGFzT3duUHJvcGVydHkocHJvcGVydHkpICYmIChmbGFncy5pbmRleE9mKGVsZW1lbnQua2V5W3Byb3BlcnR5XSkgPT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgZmxhZ3MucHVzaChlbGVtZW50LmtleVtwcm9wZXJ0eV0pO1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5TGlzdC5wdXNoKGVsZW1lbnQua2V5W3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYXV0aG9yaXR5TGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIENoZWNrIGlmIEFEQUwgaWRfdG9rZW4gZXhpc3RzIGFuZCByZXR1cm4gaWYgZXhpc3RzLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBleHRyYWN0QURBTElkVG9rZW4oKTogYW55IHtcclxuICAgICAgICBjb25zdCBhZGFsSWRUb2tlbiA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmFkYWxJZFRva2VuKTtcclxuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoYWRhbElkVG9rZW4pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBUb2tlblV0aWxzLmV4dHJhY3RJZFRva2VuKGFkYWxJZFRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBBY3F1aXJlcyBhY2Nlc3MgdG9rZW4gdXNpbmcgYSBoaWRkZW4gaWZyYW1lLlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlbmV3VG9rZW4oc2NvcGVzOiBBcnJheTxzdHJpbmc+LCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgYWNjb3VudDogQWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNjb3BlID0gc2NvcGVzLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcInJlbmV3VG9rZW4gaXMgY2FsbGVkIGZvciBzY29wZTpcIiArIHNjb3BlKTtcclxuXHJcbiAgICAgICAgY29uc3QgZnJhbWVOYW1lID0gYG1zYWxSZW5ld0ZyYW1lJHtzY29wZX1gO1xyXG4gICAgICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gV2luZG93VXRpbHMuYWRkSGlkZGVuSUZyYW1lKGZyYW1lTmFtZSwgdGhpcy5sb2dnZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyB0b2tlbiBFeHBlY3RlZCBzdGF0ZTogXCIgKyBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG5cclxuICAgICAgICAvLyBCdWlsZCB1cmxOYXZpZ2F0ZSB3aXRoIFwicHJvbXB0PW5vbmVcIiBhbmQgbmF2aWdhdGUgdG8gVVJMIGluIGhpZGRlbiBpRnJhbWVcclxuICAgICAgICBjb25zdCB1cmxOYXZpZ2F0ZSA9IFVybFV0aWxzLnVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKFVybFV0aWxzLmNyZWF0ZU5hdmlnYXRlVXJsKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCksIENvbnN0YW50cy5wcm9tcHQpICsgQ29uc3RhbnRzLnByb21wdF9ub25lO1xyXG5cclxuICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlKTtcclxuICAgICAgICBmcmFtZUhhbmRsZS5zcmMgPSBcImFib3V0OmJsYW5rXCI7XHJcbiAgICAgICAgdGhpcy5sb2FkSWZyYW1lVGltZW91dCh1cmxOYXZpZ2F0ZSwgZnJhbWVOYW1lLCBzY29wZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBSZW5ld3MgaWR0b2tlbiBmb3IgYXBwJ3Mgb3duIGJhY2tlbmQgd2hlbiBjbGllbnRJZCBpcyBwYXNzZWQgYXMgYSBzaW5nbGUgc2NvcGUgaW4gdGhlIHNjb3BlcyBhcnJheS5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZW5ld0lkVG9rZW4oc2NvcGVzOiBBcnJheTxzdHJpbmc+LCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgYWNjb3VudDogQWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJyZW5ld2lkVG9rZW4gaXMgY2FsbGVkXCIpO1xyXG4gICAgICAgIGNvbnN0IGZyYW1lTmFtZSA9IFwibXNhbElkVG9rZW5GcmFtZVwiO1xyXG4gICAgICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gV2luZG93VXRpbHMuYWRkSGlkZGVuSUZyYW1lKGZyYW1lTmFtZSwgdGhpcy5sb2dnZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiUmVuZXcgSWR0b2tlbiBFeHBlY3RlZCBzdGF0ZTogXCIgKyBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG5cclxuICAgICAgICAvLyBCdWlsZCB1cmxOYXZpZ2F0ZSB3aXRoIFwicHJvbXB0PW5vbmVcIiBhbmQgbmF2aWdhdGUgdG8gVVJMIGluIGhpZGRlbiBpRnJhbWVcclxuICAgICAgICBjb25zdCB1cmxOYXZpZ2F0ZSA9IFVybFV0aWxzLnVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKFVybFV0aWxzLmNyZWF0ZU5hdmlnYXRlVXJsKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCksIENvbnN0YW50cy5wcm9tcHQpICsgQ29uc3RhbnRzLnByb21wdF9ub25lO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zaWxlbnRMb2dpbikge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMubG9naW47XHJcbiAgICAgICAgICAgIHRoaXMuc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZSA9IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMucmVuZXdUb2tlbjtcclxuICAgICAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG5vdGU6IHNjb3BlIGhlcmUgaXMgY2xpZW50SWRcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmNsaWVudElkLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlKTtcclxuICAgICAgICBmcmFtZUhhbmRsZS5zcmMgPSBcImFib3V0OmJsYW5rXCI7XHJcbiAgICAgICAgdGhpcy5sb2FkSWZyYW1lVGltZW91dCh1cmxOYXZpZ2F0ZSwgZnJhbWVOYW1lLCB0aGlzLmNsaWVudElkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBmb3IgcHJvY2Vzc2luZyB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBBQUQuIEl0IGV4dHJhY3RzIHRoZSBoYXNoLCBwcm9jZXNzZXMgdGhlIHRva2VuIG9yIGVycm9yLCBzYXZlcyBpdCBpbiB0aGUgY2FjaGUgYW5kIGNhbGxzIHRoZSByZWdpc3RlcmVkIGNhbGxiYWNrcyB3aXRoIHRoZSByZXN1bHQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5IGF1dGhvcml0eSByZWNlaXZlZCBpbiB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQuXHJcbiAgICAgKiBAcGFyYW0ge1Rva2VuUmVzcG9uc2V9IHJlcXVlc3RJbmZvIGFuIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFEIGNvbXByaXNpbmcgb2YgdGhlIGtleXMgLSBwYXJhbWV0ZXJzLCByZXF1ZXN0VHlwZSwgc3RhdGVNYXRjaCwgc3RhdGVSZXNwb25zZSBhbmQgdmFsaWQuXHJcbiAgICAgKiBAcGFyYW0ge0FjY291bnR9IGFjY291bnQgYWNjb3VudCBvYmplY3QgZm9yIHdoaWNoIHNjb3BlcyBhcmUgY29uc2VudGVkIGZvci4gVGhlIGRlZmF1bHQgYWNjb3VudCBpcyB0aGUgbG9nZ2VkIGluIGFjY291bnQuXHJcbiAgICAgKiBAcGFyYW0ge0NsaWVudEluZm99IGNsaWVudEluZm8gY2xpZW50SW5mbyByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSByZXNwb25zZSBjb21wcmlzaW5nIG9mIGZpZWxkcyB1aWQgYW5kIHV0aWQuXHJcbiAgICAgKiBAcGFyYW0ge0lkVG9rZW59IGlkVG9rZW4gaWRUb2tlbiByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSByZXNwb25zZS5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLXN0cmluZy1saXRlcmFsICovXHJcbiAgICBwcml2YXRlIHNhdmVBY2Nlc3NUb2tlbihyZXNwb25zZTogQXV0aFJlc3BvbnNlLCBhdXRob3JpdHk6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBjbGllbnRJbmZvOiBzdHJpbmcsIGlkVG9rZW5PYmo6IElkVG9rZW4pOiBBdXRoUmVzcG9uc2Uge1xyXG4gICAgICAgIGxldCBzY29wZTogc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuUmVzcG9uc2UgPSB7IC4uLnJlc3BvbnNlIH07XHJcbiAgICAgICAgY29uc3QgY2xpZW50T2JqOiBDbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8oY2xpZW50SW5mbyk7XHJcbiAgICAgICAgbGV0IGV4cGlyYXRpb246IG51bWJlcjtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHJlc3BvbnNlIGNvbnRhaW5zIFwic2NvcGVcIlxyXG4gICAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KFwic2NvcGVcIikpIHtcclxuICAgICAgICAgICAgLy8gcmVhZCB0aGUgc2NvcGVzXHJcbiAgICAgICAgICAgIHNjb3BlID0gcGFyYW1ldGVyc1tcInNjb3BlXCJdO1xyXG4gICAgICAgICAgICBjb25zdCBjb25zZW50ZWRTY29wZXMgPSBzY29wZS5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgICAgICAgICAvLyByZXRyaWV2ZSBhbGwgYWNjZXNzIHRva2VucyBmcm9tIHRoZSBjYWNoZSwgcmVtb3ZlIHRoZSBkdXAgc2NvcmVzXHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2Vucyh0aGlzLmNsaWVudElkLCBhdXRob3JpdHkpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhY2Nlc3NUb2tlbkNhY2hlSXRlbS5rZXkuaG9tZUFjY291bnRJZGVudGlmaWVyID09PSByZXNwb25zZS5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChTY29wZVNldC5pc0ludGVyc2VjdGluZ1Njb3BlcyhjYWNoZWRTY29wZXMsIGNvbnNlbnRlZFNjb3BlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbkNhY2hlSXRlbS5rZXkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGFuZCBjYWNoZSBhY2Nlc3NUb2tlbktleSBhbmQgYWNjZXNzVG9rZW5WYWx1ZVxyXG4gICAgICAgICAgICBjb25zdCBleHBpcmVzSW4gPSBUaW1lVXRpbHMucGFyc2VFeHBpcmVzSW4ocGFyYW1ldGVyc1tDb25zdGFudHMuZXhwaXJlc0luXSk7XHJcbiAgICAgICAgICAgIGV4cGlyYXRpb24gPSBUaW1lVXRpbHMubm93KCkgKyBleHBpcmVzSW47XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuS2V5ID0gbmV3IEFjY2Vzc1Rva2VuS2V5KGF1dGhvcml0eSwgdGhpcy5jbGllbnRJZCwgc2NvcGUsIGNsaWVudE9iai51aWQsIGNsaWVudE9iai51dGlkKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5WYWx1ZSA9IG5ldyBBY2Nlc3NUb2tlblZhbHVlKHBhcmFtZXRlcnNbQ29uc3RhbnRzLmFjY2Vzc1Rva2VuXSwgaWRUb2tlbk9iai5yYXdJZFRva2VuLCBleHBpcmF0aW9uLnRvU3RyaW5nKCksIGNsaWVudEluZm8pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbktleSksIEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuVmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuUmVzcG9uc2UuYWNjZXNzVG9rZW4gID0gcGFyYW1ldGVyc1tDb25zdGFudHMuYWNjZXNzVG9rZW5dO1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLnNjb3BlcyA9IGNvbnNlbnRlZFNjb3BlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgdGhlIHJlc3BvbnNlIGRvZXMgbm90IGNvbnRhaW4gXCJzY29wZVwiIC0gc2NvcGUgaXMgdXN1YWxseSBjbGllbnRfaWQgYW5kIHRoZSB0b2tlbiB3aWxsIGJlIGlkX3Rva2VuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNjb3BlID0gdGhpcy5jbGllbnRJZDtcclxuXHJcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGFuZCBjYWNoZSBhY2Nlc3NUb2tlbktleSBhbmQgYWNjZXNzVG9rZW5WYWx1ZVxyXG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbktleSA9IG5ldyBBY2Nlc3NUb2tlbktleShhdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlLCBjbGllbnRPYmoudWlkLCBjbGllbnRPYmoudXRpZCk7XHJcbiAgICAgICAgICAgIGV4cGlyYXRpb24gPSBOdW1iZXIoaWRUb2tlbk9iai5leHBpcmF0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5WYWx1ZSA9IG5ldyBBY2Nlc3NUb2tlblZhbHVlKHBhcmFtZXRlcnNbQ29uc3RhbnRzLmlkVG9rZW5dLCBwYXJhbWV0ZXJzW0NvbnN0YW50cy5pZFRva2VuXSwgZXhwaXJhdGlvbi50b1N0cmluZygpLCBjbGllbnRJbmZvKTtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbktleSksIEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuVmFsdWUpKTtcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5zY29wZXMgPSBbc2NvcGVdO1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLmFjY2Vzc1Rva2VuID0gcGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXhwaXJhdGlvbikge1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLmV4cGlyZXNPbiA9IG5ldyBEYXRlKGV4cGlyYXRpb24gKiAxMDAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkNvdWxkIG5vdCBwYXJzZSBleHBpcmVzSW4gcGFyYW1ldGVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuUmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBTYXZlcyB0b2tlbiBvciBlcnJvciByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSBBQUQgaW4gdGhlIGNhY2hlLiBJbiBjYXNlIG9mIGlkX3Rva2VuLCBpdCBhbHNvIGNyZWF0ZXMgdGhlIGFjY291bnQgb2JqZWN0LlxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc2F2ZVRva2VuRnJvbUhhc2goaGFzaDogc3RyaW5nLCBzdGF0ZUluZm86IFJlc3BvbnNlU3RhdGVJbmZvKTogQXV0aFJlc3BvbnNlIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU3RhdGUgc3RhdHVzOlwiICsgc3RhdGVJbmZvLnN0YXRlTWF0Y2ggKyBcIjsgUmVxdWVzdCB0eXBlOlwiICsgc3RhdGVJbmZvLnJlcXVlc3RUeXBlKTtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIFwiXCIpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBcIlwiKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlIDogQXV0aFJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICB1bmlxdWVJZDogXCJcIixcclxuICAgICAgICAgICAgdGVuYW50SWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHRva2VuVHlwZTogXCJcIixcclxuICAgICAgICAgICAgaWRUb2tlbjogbnVsbCxcclxuICAgICAgICAgICAgaWRUb2tlbkNsYWltczogbnVsbCxcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IG51bGwsXHJcbiAgICAgICAgICAgIHNjb3BlczogW10sXHJcbiAgICAgICAgICAgIGV4cGlyZXNPbjogbnVsbCxcclxuICAgICAgICAgICAgYWNjb3VudDogbnVsbCxcclxuICAgICAgICAgICAgYWNjb3VudFN0YXRlOiBcIlwiLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBlcnJvcjogQXV0aEVycm9yO1xyXG4gICAgICAgIGNvbnN0IGhhc2hQYXJhbXMgPSBVcmxVdGlscy5kZXNlcmlhbGl6ZUhhc2goaGFzaCk7XHJcbiAgICAgICAgbGV0IGF1dGhvcml0eUtleTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBsZXQgYWNxdWlyZVRva2VuQWNjb3VudEtleTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBsZXQgaWRUb2tlbk9iajogSWRUb2tlbiA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIElmIHNlcnZlciByZXR1cm5zIGFuIGVycm9yXHJcbiAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb24pIHx8IGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmVycm9yKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiRXJyb3IgOlwiICsgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdICsgXCI7IEVycm9yIGRlc2NyaXB0aW9uOlwiICsgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XHJcblxyXG4gICAgICAgICAgICAvLyBsb2dpblxyXG4gICAgICAgICAgICBpZiAoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMubG9naW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpbkVycm9yLCBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSArIFwiOlwiICsgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdKTtcclxuICAgICAgICAgICAgICAgIGF1dGhvcml0eUtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYWNxdWlyZVRva2VuXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5yZW5ld1Rva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGF1dGhvcml0eUtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGVJbmZvLnN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gdGhpcy5nZXRBY2NvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudElkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhY2NvdW50ICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJZCA9IGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkID0gQ29uc3RhbnRzLm5vX2FjY291bnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRJZCwgc3RhdGVJbmZvLnN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgW0NvbnN0YW50cy5lcnJvcl06IGhhc2hFcnIsXHJcbiAgICAgICAgICAgICAgICBbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dOiBoYXNoRXJyRGVzY1xyXG4gICAgICAgICAgICB9ID0gaGFzaFBhcmFtcztcclxuICAgICAgICAgICAgaWYgKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IuaXNJbnRlcmFjdGlvblJlcXVpcmVkRXJyb3IoaGFzaEVycikgfHxcclxuICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLmlzSW50ZXJhY3Rpb25SZXF1aXJlZEVycm9yKGhhc2hFcnJEZXNjKSkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvcl0sIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IFNlcnZlckVycm9yKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIHRoZSBzZXJ2ZXIgcmV0dXJucyBcIlN1Y2Nlc3NcIlxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBWZXJpZnkgdGhlIHN0YXRlIGZyb20gcmVkaXJlY3QgYW5kIHJlY29yZCB0b2tlbnMgdG8gc3RvcmFnZSBpZiBleGlzdHNcclxuICAgICAgICAgICAgaWYgKHN0YXRlSW5mby5zdGF0ZU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU3RhdGUgaXMgcmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuc2Vzc2lvblN0YXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxTZXNzaW9uU3RhdGUsIGhhc2hQYXJhbXNbQ29uc3RhbnRzLnNlc3Npb25TdGF0ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuYWNjb3VudFN0YXRlID0gdGhpcy5nZXRBY2NvdW50U3RhdGUoc3RhdGVJbmZvLnN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY2xpZW50SW5mbzogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIGFjY2Vzc190b2tlblxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmFjY2Vzc1Rva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJGcmFnbWVudCBoYXMgYWNjZXNzIHRva2VuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSB0aGUgaWRfdG9rZW4gZnJvbSByZXNwb25zZSBpZiBwcmVzZW50XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmlkVG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkVG9rZW5PYmogPSBuZXcgSWRUb2tlbihoYXNoUGFyYW1zW0NvbnN0YW50cy5pZFRva2VuXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmlkVG9rZW4gPSBpZFRva2VuT2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pZFRva2VuQ2xhaW1zID0gaWRUb2tlbk9iai5jbGFpbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmlkVG9rZW5LZXkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBSZXNwb25zZVV0aWxzLnNldFJlc3BvbnNlSWRUb2tlbihyZXNwb25zZSwgaWRUb2tlbk9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgYXV0aG9yaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXV0aG9yaXR5OiBzdHJpbmcgPSB0aGlzLnBvcHVsYXRlQXV0aG9yaXR5KHN0YXRlSW5mby5zdGF0ZSwgdGhpcy5pbkNvb2tpZSwgdGhpcy5jYWNoZVN0b3JhZ2UsIGlkVG9rZW5PYmopO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSBjbGllbnRfaW5mbyAtIGlmIGl0IGlzIG5vdCBmb3VuZCwgZ2VuZXJhdGUgdGhlIHVpZCBhbmQgdXRpZCBmcm9tIGlkVG9rZW5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuY2xpZW50SW5mbykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SW5mbyA9IGhhc2hQYXJhbXNbQ29uc3RhbnRzLmNsaWVudEluZm9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJDbGllbnRJbmZvIG5vdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSBBQURcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IoXCJDbGllbnRJbmZvIG5vdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuT2JqLCBuZXcgQ2xpZW50SW5mbyhjbGllbnRJbmZvKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhY2NvdW50S2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFjY291bnQgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkocmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRLZXkgPSByZXNwb25zZS5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRLZXkgPSBDb25zdGFudHMubm9fYWNjb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50S2V5LCBzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjcXVpcmVUb2tlbkFjY291bnRLZXlfbm9hY2NvdW50ID0gU3RvcmFnZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoQ29uc3RhbnRzLm5vX2FjY291bnQsIHN0YXRlSW5mby5zdGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlZEFjY291bnQ6IHN0cmluZyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjcXVpcmVUb2tlbkFjY291bnQ6IEFjY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHdpdGggdGhlIGFjY291bnQgaW4gdGhlIENhY2hlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGNhY2hlZEFjY291bnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnQgPSBKU09OLnBhcnNlKGNhY2hlZEFjY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWNjb3VudCAmJiBhY3F1aXJlVG9rZW5BY2NvdW50ICYmIEFjY291bnQuY29tcGFyZUFjY291bnRzKHJlc3BvbnNlLmFjY291bnQsIGFjcXVpcmVUb2tlbkFjY291bnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlLCBhdXRob3JpdHksIGhhc2hQYXJhbXMsIGNsaWVudEluZm8sIGlkVG9rZW5PYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlRoZSB1c2VyIG9iamVjdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgaXMgdGhlIHNhbWUgYXMgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFjcXVpcmVUb2tlbiByZXF1ZXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBhY2NvdW50IG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlc3BvbnNlIGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgb25lIHBhc3NlZCBpbiB0aGUgYWNxdWlyZVRva2VuIHJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShhY3F1aXJlVG9rZW5BY2NvdW50S2V5X25vYWNjb3VudCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2UsIGF1dGhvcml0eSwgaGFzaFBhcmFtcywgY2xpZW50SW5mbywgaWRUb2tlbk9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgaWRfdG9rZW5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5pZFRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJGcmFnbWVudCBoYXMgaWQgdG9rZW5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvZ2luIG5vIGxvbmdlciBpbiBwcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgaWRUb2tlblxyXG4gICAgICAgICAgICAgICAgICAgIGlkVG9rZW5PYmogPSBuZXcgSWRUb2tlbihoYXNoUGFyYW1zW0NvbnN0YW50cy5pZFRva2VuXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gUmVzcG9uc2VVdGlscy5zZXRSZXNwb25zZUlkVG9rZW4ocmVzcG9uc2UsIGlkVG9rZW5PYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5jbGllbnRJbmZvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvID0gaGFzaFBhcmFtc1tDb25zdGFudHMuY2xpZW50SW5mb107XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcIkNsaWVudEluZm8gbm90IHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBhdXRob3JpdHlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMucG9wdWxhdGVBdXRob3JpdHkoc3RhdGVJbmZvLnN0YXRlLCB0aGlzLmluQ29va2llLCB0aGlzLmNhY2hlU3RvcmFnZSwgaWRUb2tlbk9iaik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuT2JqLCBuZXcgQ2xpZW50SW5mbyhjbGllbnRJbmZvKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYWNjb3VudCA9IHRoaXMuYWNjb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkVG9rZW5PYmogJiYgaWRUb2tlbk9iai5ub25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBub25jZSBpbnRlZ3JpdHkgaWYgaWRUb2tlbiBoYXMgbm9uY2UgLSB0aHJvdyBhbiBlcnJvciBpZiBub3QgbWF0Y2hlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWRUb2tlbk9iai5ub25jZSAhPT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCB0aGlzLmluQ29va2llKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIFwiTm9uY2UgTWlzbWF0Y2guIEV4cGVjdGVkIE5vbmNlOiBcIiArIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSkgKyBcIixcIiArIFwiQWN0dWFsIE5vbmNlOiBcIiArIGlkVG9rZW5PYmoubm9uY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJOb25jZSBNaXNtYXRjaC5FeHBlY3RlZCBOb25jZTogXCIgKyB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHRoaXMuaW5Db29raWUpICsgXCIsXCIgKyBcIkFjdHVhbCBOb25jZTogXCIgKyBpZFRva2VuT2JqLm5vbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU5vbmNlTWlzbWF0Y2hFcnJvcih0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHRoaXMuaW5Db29raWUpLCBpZFRva2VuT2JqLm5vbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSB0b2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmlkVG9rZW5LZXksIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmlkVG9rZW5dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxDbGllbnRJbmZvLCBjbGllbnRJbmZvKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGlkVG9rZW4gYXMgYWNjZXNzIHRva2VuIGZvciBhcHAgaXRzZWxmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVBY2Nlc3NUb2tlbihyZXNwb25zZSwgYXV0aG9yaXR5LCBoYXNoUGFyYW1zLCBjbGllbnRJbmZvLCBpZFRva2VuT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcml0eUtleSA9IHN0YXRlSW5mby5zdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IHN0YXRlSW5mby5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiSW52YWxpZCBpZF90b2tlbiByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJZFRva2VuRXJyb3IoaWRUb2tlbk9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgZXJyb3IuZXJyb3JDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIGVycm9yLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFN0YXRlIG1pc21hdGNoIC0gdW5leHBlY3RlZC9pbnZhbGlkIHN0YXRlXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IHN0YXRlSW5mby5zdGF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZFN0YXRlID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlN0YXRlIE1pc21hdGNoLkV4cGVjdGVkIFN0YXRlOiBcIiArIGV4cGVjdGVkU3RhdGUgKyBcIixcIiArIFwiQWN0dWFsIFN0YXRlOiBcIiArIHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkU3RhdGVFcnJvcihzdGF0ZUluZm8uc3RhdGUsIGV4cGVjdGVkU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBlcnJvci5lcnJvckNvZGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIGVycm9yLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgc3RhdGVJbmZvLnN0YXRlLCBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0NvbXBsZXRlZCk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcyhzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgICAgIC8vIHRoaXMgaXMgcmVxdWlyZWQgaWYgbmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybD1mYWxzZVxyXG4gICAgICAgIGlmICh0aGlzLmluQ29va2llKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW1Db29raWUoYXV0aG9yaXR5S2V5LCBcIlwiLCAtMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLmNsZWFyQ29va2llKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIlJlc3BvbnNlIGlzIG51bGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBBdXRob3JpdHkgd2hlbiBzYXZpbmcgVG9rZW4gZnJvbSB0aGUgaGFzaFxyXG4gICAgICogQHBhcmFtIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gaW5Db29raWVcclxuICAgICAqIEBwYXJhbSBjYWNoZVN0b3JhZ2VcclxuICAgICAqIEBwYXJhbSBpZFRva2VuT2JqXHJcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwb3B1bGF0ZUF1dGhvcml0eShzdGF0ZTogc3RyaW5nLCBpbkNvb2tpZTogYm9vbGVhbiwgY2FjaGVTdG9yYWdlOiBTdG9yYWdlLCBpZFRva2VuT2JqOiBJZFRva2VuKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBhdXRob3JpdHlLZXk6IHN0cmluZyA9IFN0b3JhZ2UuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEF1dGhvcml0eTogc3RyaW5nID0gY2FjaGVTdG9yYWdlLmdldEl0ZW0oYXV0aG9yaXR5S2V5LCBpbkNvb2tpZSk7XHJcblxyXG4gICAgICAgIC8vIHJldHJpZXZlIHRoZSBhdXRob3JpdHkgZnJvbSBjYWNoZSBhbmQgcmVwbGFjZSB3aXRoIHRlbmFudElEXHJcbiAgICAgICAgcmV0dXJuIFN0cmluZ1V0aWxzLmlzRW1wdHkoY2FjaGVkQXV0aG9yaXR5KSA/IGNhY2hlZEF1dGhvcml0eSA6IFVybFV0aWxzLnJlcGxhY2VUZW5hbnRQYXRoKGNhY2hlZEF1dGhvcml0eSwgaWRUb2tlbk9iai50ZW5hbnRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogdHNsaW50OmVuYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIEFjY291bnRcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHNpZ25lZCBpbiBhY2NvdW50XHJcbiAgICAgKiAodGhlIGFjY291bnQgb2JqZWN0IGlzIGNyZWF0ZWQgYXQgdGhlIHRpbWUgb2Ygc3VjY2Vzc2Z1bCBsb2dpbilcclxuICAgICAqIG9yIG51bGwgd2hlbiBubyBzdGF0ZSBpcyBmb3VuZFxyXG4gICAgICogQHJldHVybnMge0BsaW5rIEFjY291bnR9IC0gdGhlIGFjY291bnQgb2JqZWN0IHN0b3JlZCBpbiBNU0FMXHJcbiAgICAgKi9cclxuICAgIGdldEFjY291bnQoKTogQWNjb3VudCB7XHJcbiAgICAgICAgLy8gaWYgYSBzZXNzaW9uIGFscmVhZHkgZXhpc3RzLCBnZXQgdGhlIGFjY291bnQgZnJvbSB0aGUgc2Vzc2lvblxyXG4gICAgICAgIGlmICh0aGlzLmFjY291bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZyYW1lIGlzIHVzZWQgdG8gZ2V0IGlkVG9rZW4gYW5kIHBvcHVsYXRlIHRoZSBhY2NvdW50IGZvciB0aGUgZ2l2ZW4gc2Vzc2lvblxyXG4gICAgICAgIGNvbnN0IHJhd0lkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5pZFRva2VuS2V5KTtcclxuICAgICAgICBjb25zdCByYXdDbGllbnRJbmZvID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubXNhbENsaWVudEluZm8pO1xyXG5cclxuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkocmF3SWRUb2tlbikgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkocmF3Q2xpZW50SW5mbykpIHtcclxuICAgICAgICAgICAgY29uc3QgaWRUb2tlbiA9IG5ldyBJZFRva2VuKHJhd0lkVG9rZW4pO1xyXG4gICAgICAgICAgICBjb25zdCBjbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8ocmF3Q2xpZW50SW5mbyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuLCBjbGllbnRJbmZvKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgbG9naW4gbm90IHlldCBkb25lLCByZXR1cm4gbnVsbFxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICpcclxuICAgICAqIEV4dHJhY3RzIHN0YXRlIHZhbHVlIGZyb20gdGhlIGFjY291bnRTdGF0ZSBzZW50IHdpdGggdGhlIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QuXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzY29wZS5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgZ2V0QWNjb3VudFN0YXRlIChzdGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0SW5kZXggPSBzdGF0ZS5pbmRleE9mKFwifFwiKTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0SW5kZXggPiAtMSAmJiBzcGxpdEluZGV4ICsgMSA8IHN0YXRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRvIGdldCBhIGxpc3Qgb2YgdW5pcXVlIGFjY291bnRzIGluIE1TQUwgY2FjaGUgYmFzZWQgb24gaG9tZUFjY291bnRJZGVudGlmaWVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QGxpbmsgQXJyYXk8QWNjb3VudD59IEFjY291bnQgLSBhbGwgdW5pcXVlIGFjY291bnRzIGluIE1TQUwgY2FjaGUuXHJcbiAgICAgKi9cclxuICAgIGdldEFsbEFjY291bnRzKCk6IEFycmF5PEFjY291bnQ+IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50czogQXJyYXk8QWNjb3VudD4gPSBbXTtcclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnMoQ29uc3RhbnRzLmNsaWVudElkLCBDb25zdGFudHMuaG9tZUFjY291bnRJZGVudGlmaWVyKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaWRUb2tlbiA9IG5ldyBJZFRva2VuKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtc1tpXS52YWx1ZS5pZFRva2VuKTtcclxuICAgICAgICAgICAgY29uc3QgY2xpZW50SW5mbyA9IG5ldyBDbGllbnRJbmZvKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtc1tpXS52YWx1ZS5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW4sIGNsaWVudEluZm8pO1xyXG4gICAgICAgICAgICBhY2NvdW50cy5wdXNoKGFjY291bnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VW5pcXVlQWNjb3VudHMoYWNjb3VudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICpcclxuICAgICAqIFVzZWQgdG8gZmlsdGVyIGFjY291bnRzIGJhc2VkIG9uIGhvbWVBY2NvdW50SWRlbnRpZmllclxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBY2NvdW50Pn0gIEFjY291bnRzIC0gYWNjb3VudHMgc2F2ZWQgaW4gdGhlIGNhY2hlXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0VW5pcXVlQWNjb3VudHMoYWNjb3VudHM6IEFycmF5PEFjY291bnQ+KTogQXJyYXk8QWNjb3VudD4ge1xyXG4gICAgICAgIGlmICghYWNjb3VudHMgfHwgYWNjb3VudHMubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY291bnRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmxhZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgICBjb25zdCB1bmlxdWVBY2NvdW50czogQXJyYXk8QWNjb3VudD4gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWNjb3VudHMubGVuZ3RoOyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChhY2NvdW50c1tpbmRleF0uaG9tZUFjY291bnRJZGVudGlmaWVyICYmIGZsYWdzLmluZGV4T2YoYWNjb3VudHNbaW5kZXhdLmhvbWVBY2NvdW50SWRlbnRpZmllcikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBmbGFncy5wdXNoKGFjY291bnRzW2luZGV4XS5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlQWNjb3VudHMucHVzaChhY2NvdW50c1tpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5pcXVlQWNjb3VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gU2NvcGVzIChFeHRyYWN0IHRvIFNjb3Blcy50cylcclxuXHJcbiAgICAvKlxyXG4gICAgICogTm90ZTogXCJ0aGlzXCIgZGVwZW5kZW5jeSBpbiB0aGlzIHNlY3Rpb24gaXMgbWluaW1hbC5cclxuICAgICAqIElmIHBDYWNoZVN0b3JhZ2UgaXMgc2VwYXJhdGVkIGZyb20gdGhlIGNsYXNzIG9iamVjdCwgb3IgcGFzc2VkIGFzIGEgZm4gcGFyYW0sIHNjb3Blc1V0aWxzLnRzIGNhbiBiZSBjcmVhdGVkXHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqXHJcbiAgICAgKiBVc2VkIHRvIHZhbGlkYXRlIHRoZSBzY29wZXMgaW5wdXQgcGFyYW1ldGVyIHJlcXVlc3RlZCAgYnkgdGhlIGRldmVsb3Blci5cclxuICAgICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc2NvcGVzIC0gRGV2ZWxvcGVyIHJlcXVlc3RlZCBwZXJtaXNzaW9ucy4gTm90IGFsbCBzY29wZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2NvcGVzUmVxdWlyZWQgLSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2NvcGVzIGFycmF5IGlzIHJlcXVpcmVkIG9yIG5vdFxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlSW5wdXRTY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3Blc1JlcXVpcmVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFzY29wZXMpIHtcclxuICAgICAgICAgICAgaWYgKHNjb3Blc1JlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlU2NvcGVzUmVxdWlyZWRFcnJvcihzY29wZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayB0aGF0IHNjb3BlcyBpcyBhbiBhcnJheSBvYmplY3QgKGFsc28gdGhyb3dzIGVycm9yIGlmIHNjb3BlcyA9PSBudWxsKVxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzY29wZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVTY29wZXNOb25BcnJheUVycm9yKHNjb3Blcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayB0aGF0IHNjb3BlcyBpcyBub3QgYW4gZW1wdHkgYXJyYXlcclxuICAgICAgICBpZiAoc2NvcGVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5U2NvcGVzQXJyYXlFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayB0aGF0IGNsaWVudElkIGlzIHBhc3NlZCBhcyBzaW5nbGUgc2NvcGVcclxuICAgICAgICBpZiAoc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSkge1xyXG4gICAgICAgICAgICBpZiAoc2NvcGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVDbGllbnRJZFNpbmdsZVNjb3BlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICpcclxuICAgICAqIEV4dHJhY3RzIHNjb3BlIHZhbHVlIGZyb20gdGhlIHN0YXRlIHNlbnQgd2l0aCB0aGUgYXV0aGVudGljYXRpb24gcmVxdWVzdC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZVxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gc2NvcGUuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0U2NvcGVGcm9tU3RhdGUoc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0SW5kZXggPSBzdGF0ZS5pbmRleE9mKFwifFwiKTtcclxuICAgICAgICAgICAgaWYgKHNwbGl0SW5kZXggPiAtMSAmJiBzcGxpdEluZGV4ICsgMSA8IHN0YXRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKiBBcHBlbmRzIGV4dHJhU2NvcGVzVG9Db25zZW50IGlmIHBhc3NlZFxyXG4gICAgICogQHBhcmFtIHtAbGluayBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnN9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXBwZW5kU2NvcGVzKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IEFycmF5PHN0cmluZz4ge1xyXG5cclxuICAgICAgICBsZXQgc2NvcGVzOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICAgICAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LnNjb3Blcykge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5leHRyYVNjb3Blc1RvQ29uc2VudCkge1xyXG4gICAgICAgICAgICAgICAgc2NvcGVzID0gWy4uLnJlcXVlc3Quc2NvcGVzLCAuLi5yZXF1ZXN0LmV4dHJhU2NvcGVzVG9Db25zZW50XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlcyA9IHJlcXVlc3Quc2NvcGVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2NvcGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIEFuZ3VsYXJcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqXHJcbiAgICAgKiBCcm9hZGNhc3QgbWVzc2FnZXMgLSBVc2VkIG9ubHkgZm9yIEFuZ3VsYXI/ICAqXHJcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGJyb2FkY2FzdChldmVudE5hbWU6IHN0cmluZywgZGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgeyBkZXRhaWw6IGRhdGEgfSk7XHJcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqXHJcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIGNhY2hlZCB0b2tlblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzY29wZXNcclxuICAgICAqIEBwYXJhbSB7QGxpbmsgQWNjb3VudH0gYWNjb3VudFxyXG4gICAgICogQHBhcmFtIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJuIHtAbGluayBBdXRoUmVzcG9uc2V9IEF1dGhSZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0Q2FjaGVkVG9rZW5JbnRlcm5hbChzY29wZXMgOiBBcnJheTxzdHJpbmc+ICwgYWNjb3VudDogQWNjb3VudCwgc3RhdGU6IHN0cmluZyk6IEF1dGhSZXNwb25zZSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHNlc3Npb24ncyBhY2NvdW50IG9iamVjdFxyXG4gICAgICAgIGNvbnN0IGFjY291bnRPYmplY3Q6IEFjY291bnQgPSBhY2NvdW50IHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG4gICAgICAgIGlmICghYWNjb3VudE9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbnN0cnVjdCBBdXRoZW50aWNhdGlvblJlcXVlc3QgYmFzZWQgb24gcmVzcG9uc2UgdHlwZVxyXG4gICAgICAgIGNvbnN0IG5ld0F1dGhvcml0eSA9IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPyB0aGlzLmF1dGhvcml0eUluc3RhbmNlIDogQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZSh0aGlzLmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VUeXBlID0gdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudE9iamVjdCwgc2NvcGVzLCB0cnVlKTtcclxuICAgICAgICBjb25zdCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMoXHJcbiAgICAgICAgICAgIG5ld0F1dGhvcml0eSxcclxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgc2NvcGVzLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcclxuICAgICAgICAgICAgc3RhdGVcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBnZXQgY2FjaGVkIHRva2VuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FjaGVkVG9rZW4oc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqXHJcbiAgICAgKiBHZXQgc2NvcGVzIGZvciB0aGUgRW5kcG9pbnQgLSBVc2VkIGluIEFuZ3VsYXIgdG8gdHJhY2sgcHJvdGVjdGVkIGFuZCB1bnByb3RlY3RlZCByZXNvdXJjZXMgd2l0aG91dCBpbnRlcmFjdGlvbiBmcm9tIHRoZSBkZXZlbG9wZXIgYXBwXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVuZHBvaW50XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRTY29wZXNGb3JFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKSA6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIC8vIGlmIHVzZXIgc3BlY2lmaWVkIGxpc3Qgb2YgdW5wcm90ZWN0ZWRSZXNvdXJjZXMsIG5vIG5lZWQgdG8gc2VuZCB0b2tlbiB0byB0aGVzZSBlbmRwb2ludHMsIHJldHVybiBudWxsLlxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5mcmFtZXdvcmsudW5wcm90ZWN0ZWRSZXNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2YodGhpcy5jb25maWcuZnJhbWV3b3JrLnVucHJvdGVjdGVkUmVzb3VyY2VzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHByb2Nlc3MgYWxsIHByb3RlY3RlZCByZXNvdXJjZXMgYW5kIHNlbmQgdGhlIG1hdGNoZWQgb25lXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay5wcm90ZWN0ZWRSZXNvdXJjZU1hcC5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMuY29uZmlnLmZyYW1ld29yay5wcm90ZWN0ZWRSZXNvdXJjZU1hcC5rZXlzKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25maWdFbmRwb2ludCBpcyBsaWtlIC9hcGkvVG9kbyByZXF1ZXN0ZWQgZW5kcG9pbnQgY2FuIGJlIC9hcGkvVG9kby8xXHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kcG9pbnQuaW5kZXhPZihrZXkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLmdldChrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIGRlZmF1bHQgcmVzb3VyY2Ugd2lsbCBiZSBjbGllbnRpZCBpZiBub3RoaW5nIHNwZWNpZmllZFxyXG4gICAgICAgICAqIEFwcCB3aWxsIHVzZSBpZHRva2VuIGZvciBjYWxscyB0byBpdHNlbGZcclxuICAgICAgICAgKiBjaGVjayBpZiBpdCdzIHN0YXJpbmcgZnJvbSBodHRwIG9yIGh0dHBzLCBuZWVkcyB0byBtYXRjaCB3aXRoIGFwcCBob3N0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2YoXCJodHRwOi8vXCIpID4gLTEgfHwgZW5kcG9pbnQuaW5kZXhPZihcImh0dHBzOi8vXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0SG9zdEZyb21VcmkoZW5kcG9pbnQpID09PSB0aGlzLmdldEhvc3RGcm9tVXJpKHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXk8c3RyaW5nPih0aGlzLmNsaWVudElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAqIGluIGFuZ3VsYXIgbGV2ZWwsIHRoZSB1cmwgZm9yICRodHRwIGludGVyY2VwdG9yIGNhbGwgY291bGQgYmUgcmVsYXRpdmUgdXJsLFxyXG4gICAgICAgICAgICAgKiBpZiBpdCdzIHJlbGF0aXZlIGNhbGwsIHdlJ2xsIHRyZWF0IGl0IGFzIGFwcCBiYWNrZW5kIGNhbGwuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5PHN0cmluZz4odGhpcy5jbGllbnRJZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBub3QgdGhlIGFwcCdzIG93biBiYWNrZW5kIG9yIG5vdCBhIGRvbWFpbiBsaXN0ZWQgaW4gdGhlIGVuZHBvaW50cyBzdHJ1Y3R1cmVcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBib29sZWFuIGZsYWcgdG8gZGV2ZWxvcGVyIHRvIGhlbHAgaW5mb3JtIGlmIGxvZ2luIGlzIGluIHByb2dyZXNzXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZS9mYWxzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TG9naW5JblByb2dyZXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHBlbmRpbmdDYWxsYmFjayA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnVybEhhc2gpO1xyXG4gICAgICAgIGlmIChwZW5kaW5nQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2luSW5Qcm9ncmVzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbG9naW5JblByb2dyZXNzXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzZXRsb2dpbkluUHJvZ3Jlc3MobG9naW5JblByb2dyZXNzIDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gbG9naW5JblByb2dyZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICpcclxuICAgICAqIHJldHVybnMgdGhlIHN0YXR1cyBvZiBhY3F1aXJlVG9rZW5JblByb2dyZXNzXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRBY3F1aXJlVG9rZW5JblByb2dyZXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFjcXVpcmVUb2tlbkluUHJvZ3Jlc3NcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHNldEFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MoYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBhY3F1aXJlVG9rZW5JblByb2dyZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICpcclxuICAgICAqIHJldHVybnMgdGhlIGxvZ2dlciBoYW5kbGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldExvZ2dlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuc3lzdGVtLmxvZ2dlcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBHZXR0ZXJzIGFuZCBTZXR0ZXJzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogVXNlIHRvIGdldCB0aGUgcmVkaXJlY3QgdXJpIGNvbmZpZ3VyZWQgaW4gTVNBTCBvciBudWxsLlxyXG4gICAgICogRXZhbHVhdGVzIHJlZGlyZWN0VXJpIGlmIGl0cyBhIGZ1bmN0aW9uLCBvdGhlcndpc2Ugc2ltcGx5IHJldHVybnMgaXRzIHZhbHVlLlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcmVkaXJlY3QgVVJMXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmF1dGgucmVkaXJlY3RVcmkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB0byBnZXQgdGhlIHBvc3QgbG9nb3V0IHJlZGlyZWN0IHVyaSBjb25maWd1cmVkIGluIE1TQUwgb3IgbnVsbC5cclxuICAgICAqIEV2YWx1YXRlcyBwb3N0TG9nb3V0cmVkaXJlY3RVcmkgaWYgaXRzIGEgZnVuY3Rpb24sIG90aGVyd2lzZSBzaW1wbHkgcmV0dXJucyBpdHMgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcG9zdCBsb2dvdXQgcmVkaXJlY3QgVVJMXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmF1dGgucG9zdExvZ291dFJlZGlyZWN0VXJpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmF1dGgucG9zdExvZ291dFJlZGlyZWN0VXJpKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB0byBnZXQgdGhlIGN1cnJlbnQge0BsaW5rIENvbmZpZ3VyYXRpb259IG9iamVjdCBpbiBNU0FMXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge0BsaW5rIENvbmZpZ3VyYXRpb259XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50Q29uZmlndXJhdGlvbigpOiBDb25maWd1cmF0aW9uIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVOb1NldENvbmZpZ3VyYXRpb25FcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gU3RyaW5nIFV0aWwgKFNob3VsZCBiZSBleHRyYWN0ZWQgdG8gVXRpbHMudHMpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKlxyXG4gICAgICogZXh0cmFjdCBVUkkgZnJvbSB0aGUgaG9zdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBVUklcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGhvc3QgZnJvbSB0aGUgVVJJXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0SG9zdEZyb21VcmkodXJpOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIHJlbW92ZSBodHRwOi8vIG9yIGh0dHBzOi8vIGZyb20gdXJpXHJcbiAgICAgICAgbGV0IGV4dHJhY3RlZFVyaSA9IFN0cmluZyh1cmkpLnJlcGxhY2UoL14oaHR0cHM/OilcXC9cXC8vLCBcIlwiKTtcclxuICAgICAgICBleHRyYWN0ZWRVcmkgPSBleHRyYWN0ZWRVcmkuc3BsaXQoXCIvXCIpWzBdO1xyXG4gICAgICAgIHJldHVybiBleHRyYWN0ZWRVcmk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKlxyXG4gICAgICogVXRpbHMgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBBdXRoZW50aWNhdGlvblxyXG4gICAgICogQHBhcmFtIHtAbGluayBhY2NvdW50fSBhY2NvdW50IG9iamVjdFxyXG4gICAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAgICogQHBhcmFtIHNpbGVudENhbGxcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0b2tlbiB0eXBlOiBpZF90b2tlbiBvciBhY2Nlc3NfdG9rZW5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0VG9rZW5UeXBlKGFjY291bnRPYmplY3Q6IEFjY291bnQsIHNjb3Blczogc3RyaW5nW10sIHNpbGVudENhbGw6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIGlmIGFjY291bnQgaXMgcGFzc2VkIGFuZCBtYXRjaGVzIHRoZSBhY2NvdW50IG9iamVjdC9vciBzZXQgdG8gZ2V0QWNjb3VudCgpIGZyb20gY2FjaGVcclxuICAgICAgICAgKiBpZiBjbGllbnQtaWQgaXMgcGFzc2VkIGFzIHNjb3BlLCBnZXQgaWRfdG9rZW4gZWxzZSB0b2tlbi9pZF90b2tlbl90b2tlbiAoaW4gY2FzZSBubyBzZXNzaW9uIGV4aXN0cylcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgdG9rZW5UeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8vIGFjcXVpcmVUb2tlblNpbGVudFxyXG4gICAgICAgIGlmIChzaWxlbnRDYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChBY2NvdW50LmNvbXBhcmVBY2NvdW50cyhhY2NvdW50T2JqZWN0LCB0aGlzLmdldEFjY291bnQoKSkpIHtcclxuICAgICAgICAgICAgICAgIHRva2VuVHlwZSA9IChzY29wZXMuaW5kZXhPZih0aGlzLmNvbmZpZy5hdXRoLmNsaWVudElkKSA+IC0xKSA/IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4gOiBSZXNwb25zZVR5cGVzLnRva2VuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5UeXBlICA9IChzY29wZXMuaW5kZXhPZih0aGlzLmNvbmZpZy5hdXRoLmNsaWVudElkKSA+IC0xKSA/IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4gOiBSZXNwb25zZVR5cGVzLmlkX3Rva2VuX3Rva2VuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5UeXBlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhbGwgb3RoZXIgY2FzZXNcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFBY2NvdW50LmNvbXBhcmVBY2NvdW50cyhhY2NvdW50T2JqZWN0LCB0aGlzLmdldEFjY291bnQoKSkpIHtcclxuICAgICAgICAgICAgICAgIHRva2VuVHlwZSA9IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW5fdG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlblR5cGUgPSAoc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSkgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogUmVzcG9uc2VUeXBlcy50b2tlbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuVHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICpcclxuICAgICAqIFNldHMgdGhlIGNhY2hla2V5cyBmb3IgYW5kIHN0b3JlcyB0aGUgYWNjb3VudCBpbmZvcm1hdGlvbiBpbiBjYWNoZVxyXG4gICAgICogQHBhcmFtIGFjY291bnRcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldEFjY291bnRDYWNoZShhY2NvdW50OiBBY2NvdW50LCBzdGF0ZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIC8vIENhY2hlIGFjcXVpcmVUb2tlbkFjY291bnRLZXlcclxuICAgICAgICBjb25zdCBhY2NvdW50SWQgPSBhY2NvdW50ID8gdGhpcy5nZXRBY2NvdW50SWQoYWNjb3VudCkgOiBDb25zdGFudHMubm9fYWNjb3VudDtcclxuXHJcbiAgICAgICAgY29uc3QgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRJZCwgc3RhdGUpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleSwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICpcclxuICAgICAqIFNldHMgdGhlIGNhY2hlS2V5IGZvciBhbmQgc3RvcmVzIHRoZSBhdXRob3JpdHkgaW5mb3JtYXRpb24gaW4gY2FjaGVcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldEF1dGhvcml0eUNhY2hlKHN0YXRlOiBzdHJpbmcsIGF1dGhvcml0eTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gQ2FjaGUgYXV0aG9yaXR5S2V5XHJcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShhdXRob3JpdHlLZXksIFVybFV0aWxzLkNhbm9uaWNhbGl6ZVVyaShhdXRob3JpdHkpLCB0aGlzLmluQ29va2llKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgYWNjb3VudCwgYXV0aG9yaXR5LCBhbmQgbm9uY2UgaW4gY2FjaGVcclxuICAgICAqIEBwYXJhbSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3RcclxuICAgICAqIEBwYXJhbSBhY2NvdW50XHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMsIGFjY291bnQ6IEFjY291bnQsIGxvZ2luU3RhcnRQYWdlPzogYW55KSB7XHJcbiAgICAgICAgLy8gQ2FjaGUgYWNjb3VudCBhbmQgYXV0aG9yaXR5XHJcbiAgICAgICAgaWYgKGxvZ2luU3RhcnRQYWdlKSB7XHJcbiAgICAgICAgICAgIC8vIENhY2hlIHRoZSBzdGF0ZSwgbm9uY2UsIGFuZCBsb2dpbiByZXF1ZXN0IGRhdGFcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5SZXF1ZXN0LCBsb2dpblN0YXJ0UGFnZSwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmluQ29va2llKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgXCJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBcIlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjY291bnRDYWNoZShhY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDYWNoZSBhdXRob3JpdHlLZXlcclxuICAgICAgICB0aGlzLnNldEF1dGhvcml0eUNhY2hlKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eSk7XHJcblxyXG4gICAgICAgIC8vIENhY2hlIG5vbmNlXHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Qubm9uY2UsIHRoaXMuaW5Db29raWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBsb2dnZWQgaW4gYWNjb3VudFxyXG4gICAgICogQHBhcmFtIGFjY291bnRcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRBY2NvdW50SWQoYWNjb3VudDogQWNjb3VudCk6IGFueSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIGAke2FjY291bnQuYWNjb3VudElkZW50aWZpZXJ9YCArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIGAke2FjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyfWA7XHJcbiAgICAgICAgbGV0IGFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgICAgIGlmICghU3RyaW5nVXRpbHMuaXNFbXB0eShhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgYWNjb3VudElkID0gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhY2NvdW50SWQgPSBDb25zdGFudHMubm9fYWNjb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhY2NvdW50SWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKlxyXG4gICAgICogQ29uc3RydWN0ICd0b2tlblJlcXVlc3QnIGZyb20gdGhlIGF2YWlsYWJsZSBkYXRhIGluIGFkYWxJZFRva2VuXHJcbiAgICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0ge1xyXG4gICAgICAgICAgICBzY29wZXM6IFt0aGlzLmNsaWVudElkXSxcclxuICAgICAgICAgICAgYXV0aG9yaXR5OiB0aGlzLmF1dGhvcml0eSxcclxuICAgICAgICAgICAgYWNjb3VudDogdGhpcy5nZXRBY2NvdW50KCksXHJcbiAgICAgICAgICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRva2VuUmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUZWxlbWV0cnlNYW5hZ2VyRnJvbUNvbmZpZyhjb25maWc6IFRlbGVtZXRyeU9wdGlvbnMsIGNsaWVudElkOiBzdHJpbmcpOiBUZWxlbWV0cnlNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIWNvbmZpZykgeyAvLyBpZiB1bnNldFxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgc2V0IHRoZW4gdmFsaWRhdGVcclxuICAgICAgICBjb25zdCB7IGFwcGxpY2F0aW9uTmFtZSwgYXBwbGljYXRpb25WZXJzaW9uLCB0ZWxlbWV0cnlFbWl0dGVyIH0gPSBjb25maWc7XHJcbiAgICAgICAgaWYgKCFhcHBsaWNhdGlvbk5hbWUgfHwgIWFwcGxpY2F0aW9uVmVyc2lvbiB8fCAhIHRlbGVtZXRyeUVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVRlbGVtZXRyeUNvbmZpZ0Vycm9yKGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIHZhbGlkIHRoZW4gY29uc3RydWN0XHJcbiAgICAgICAgY29uc3QgdGVsZW1ldHJ5UGxhdGZvcm06IFRlbGVtZXRyeVBsYXRmb3JtID0ge1xyXG4gICAgICAgICAgICBzZGs6IFwibXNhbC5qc1wiLCAvLyBUT0RPIG5lZWQgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGlzIGZvciBhbmd1bGFyLCByZWFjdCwgZXRjXHJcbiAgICAgICAgICAgIHNka1ZlcnNpb246IGxpYnJhcnlWZXJzaW9uKCksXHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgYXBwbGljYXRpb25WZXJzaW9uXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB0ZWxlbWV0cnlNYW5hZ2VyQ29uZmlnOiBUZWxlbWV0cnlDb25maWcgPSB7XHJcbiAgICAgICAgICAgIHBsYXRmb3JtOiB0ZWxlbWV0cnlQbGF0Zm9ybSxcclxuICAgICAgICAgICAgY2xpZW50SWQ6IGNsaWVudElkXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3IFRlbGVtZXRyeU1hbmFnZXIodGVsZW1ldHJ5TWFuYWdlckNvbmZpZywgdGVsZW1ldHJ5RW1pdHRlcik7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgU2NvcGVTZXQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlcmUgYXJlIGR1cCBzY29wZXMgaW4gYSBnaXZlbiByZXF1ZXN0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhY2hlZFNjb3Blc1xyXG4gICAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAgICovXHJcbiAgICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgaW50ZXJzZWN0aW5nIHNjb3BlcyBpc24ndCBhIGdyZWF0IG5hbWUgZm9yIGR1cGxpY2F0ZSBjaGVja2VyXHJcbiAgICBzdGF0aWMgaXNJbnRlcnNlY3RpbmdTY29wZXMoY2FjaGVkU2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZXM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICAgICAgICBjYWNoZWRTY29wZXMgPSB0aGlzLmNvbnZlcnRUb0xvd2VyQ2FzZShjYWNoZWRTY29wZXMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NvcGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWNoZWRTY29wZXMuaW5kZXhPZihzY29wZXNbaV0udG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYSBnaXZlbiBzY29wZSBpcyBwcmVzZW50IGluIHRoZSByZXF1ZXN0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhY2hlZFNjb3Blc1xyXG4gICAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29udGFpbnNTY29wZShjYWNoZWRTY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlczogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNhY2hlZFNjb3BlcyA9IHRoaXMuY29udmVydFRvTG93ZXJDYXNlKGNhY2hlZFNjb3Blcyk7XHJcbiAgICAgICAgcmV0dXJuIHNjb3Blcy5ldmVyeSgodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gY2FjaGVkU2NvcGVzLmluZGV4T2YodmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSA+PSAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRvTG93ZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICAgKi9cclxuICAgIC8vIFRPRE86IFJlbmFtZSB0aGlzLCB0b28gZ2VuZXJpYyBuYW1lIGZvciBhIGZ1bmN0aW9uIHRoYXQgb25seSBkZWFscyB3aXRoIHNjb3Blc1xyXG4gICAgc3RhdGljIGNvbnZlcnRUb0xvd2VyQ2FzZShzY29wZXM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gc2NvcGVzLm1hcChzY29wZSA9PiBzY29wZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbW92ZSBvbmUgZWxlbWVudCBmcm9tIGEgc2NvcGUgYXJyYXlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVcclxuICAgICAqL1xyXG4gICAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIHRvbyBnZW5lcmljIG5hbWUgZm9yIGEgZnVuY3Rpb24gdGhhdCBvbmx5IGRlYWxzIHdpdGggc2NvcGVzXHJcbiAgICBzdGF0aWMgcmVtb3ZlRWxlbWVudChzY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gc2NvcGVzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gc2NvcGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFyc2UgdGhlIHNjb3BlcyBpbnRvIGEgZm9ybWF0dGVkIHNjb3BlTGlzdFxyXG4gICAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VTY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBzY29wZUxpc3Q6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHNjb3Blcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2NvcGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZUxpc3QgKz0gKGkgIT09IHNjb3Blcy5sZW5ndGggLSAxKSA/IHNjb3Blc1tpXSArIFwiIFwiIDogc2NvcGVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2NvcGVMaXN0O1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAbGluayBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnN9QXV0aGVudGljYXRpb25QYXJhbWV0ZXJzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgPSB7XHJcbiAgICBzY29wZXM/OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgZXh0cmFTY29wZXNUb0NvbnNlbnQ/OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJvbXB0Pzogc3RyaW5nO1xyXG4gICAgZXh0cmFRdWVyeVBhcmFtZXRlcnM/OiBTdHJpbmdEaWN0O1xyXG4gICAgY2xhaW1zUmVxdWVzdD86IHN0cmluZztcclxuICAgIGF1dGhvcml0eT86IHN0cmluZztcclxuICAgIHN0YXRlPzogc3RyaW5nO1xyXG4gICAgY29ycmVsYXRpb25JZD86IHN0cmluZztcclxuICAgIGFjY291bnQ/OiBBY2NvdW50O1xyXG4gICAgc2lkPzogc3RyaW5nO1xyXG4gICAgbG9naW5IaW50Pzogc3RyaW5nO1xyXG4gICAgZm9yY2VSZWZyZXNoPzogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUNsYWltc1JlcXVlc3QocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKSB7XHJcbiAgICBpZiAoIXJlcXVlc3QuY2xhaW1zUmVxdWVzdCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBjbGFpbXM7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNsYWltcyA9IEpTT04ucGFyc2UocmVxdWVzdC5jbGFpbXNSZXF1ZXN0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBNb3JlIHZhbGlkYXRpb24gd2lsbCBiZSBhZGRlZCB3aGVuIHRoZSBzZXJ2ZXIgdGVhbSB0ZWxscyB1cyBob3cgdGhleSBoYXZlIGFjdHVhbGx5IGltcGxlbWVudGVkIGNsYWltc1xyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi9DcnlwdG9VdGlsc1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRva2VuVXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGVjb2RlIGEgSldUXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGp3dFRva2VuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBkZWNvZGVKd3Qoand0VG9rZW46IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoand0VG9rZW4pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZFRva2VuUGFydHNSZWdleCA9IC9eKFteXFwuXFxzXSopXFwuKFteXFwuXFxzXSspXFwuKFteXFwuXFxzXSopJC87XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGlkVG9rZW5QYXJ0c1JlZ2V4LmV4ZWMoand0VG9rZW4pO1xyXG4gICAgICAgIGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA8IDQpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLndhcm4oXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gaXMgbm90IHBhcnNlYWJsZS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjcmFja2VkVG9rZW4gPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogbWF0Y2hlc1sxXSxcclxuICAgICAgICAgICAgSldTUGF5bG9hZDogbWF0Y2hlc1syXSxcclxuICAgICAgICAgICAgSldTU2lnOiBtYXRjaGVzWzNdXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gY3JhY2tlZFRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0cmFjdCBJZFRva2VuIGJ5IGRlY29kaW5nIHRoZSBSQVdJZFRva2VuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGVuY29kZWRJZFRva2VuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBleHRyYWN0SWRUb2tlbihlbmNvZGVkSWRUb2tlbjogc3RyaW5nKTogYW55IHtcclxuICAgIC8vIGlkIHRva2VuIHdpbGwgYmUgZGVjb2RlZCB0byBnZXQgdGhlIHVzZXJuYW1lXHJcbiAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gdGhpcy5kZWNvZGVKd3QoZW5jb2RlZElkVG9rZW4pO1xyXG4gICAgICAgIGlmICghZGVjb2RlZFRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlNjRJZFRva2VuID0gZGVjb2RlZFRva2VuLkpXU1BheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NERlY29kZWQgPSBDcnlwdG9VdGlscy5iYXNlNjREZWNvZGUoYmFzZTY0SWRUb2tlbik7XHJcbiAgICAgICAgICAgIGlmICghYmFzZTY0RGVjb2RlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLmluZm8oXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gY291bGQgbm90IGJlIGJhc2U2NCB1cmwgc2FmZSBkZWNvZGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEVDTUEgc2NyaXB0IGhhcyBKU09OIGJ1aWx0LWluIHN1cHBvcnRcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0RGVjb2RlZCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci5lcnJvcihcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBjb3VsZCBub3QgYmUgZGVjb2RlZFwiICsgZXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ2xpZW50SW5mbyB9IGZyb20gXCIuL0NsaWVudEluZm9cIjtcclxuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcclxuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi91dGlscy9DcnlwdG9VdGlsc1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBhY2NvdW50SWRlbnRpZmllciAgICAgICBjb21iaW5hdGlvbiBvZiBpZFRva2VuLnVpZCBhbmQgaWRUb2tlbi51dGlkXHJcbiAqIGhvbWVBY2NvdW50SWRlbnRpZmllciAgIGNvbWJpbmF0aW9uIG9mIGNsaWVudEluZm8udWlkIGFuZCBjbGllbnRJbmZvLnV0aWRcclxuICogdXNlck5hbWUgICAgICAgICAgICAgICAgaWRUb2tlbi5wcmVmZXJyZWRfdXNlcm5hbWVcclxuICogbmFtZSAgICAgICAgICAgICAgICAgICAgaWRUb2tlbi5uYW1lXHJcbiAqIGlkVG9rZW4gICAgICAgICAgICAgICAgIGlkVG9rZW5cclxuICogc2lkICAgICAgICAgICAgICAgICAgICAgaWRUb2tlbi5zaWQgLSBzZXNzaW9uIGlkZW50aWZpZXJcclxuICogZW52aXJvbm1lbnQgICAgICAgICAgICAgaWR0b2tlbi5pc3N1ZXIgKHRoZSBhdXRob3JpdHkgdGhhdCBpc3N1ZXMgdGhlIHRva2VuKVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY291bnQge1xyXG5cclxuICAgIGFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgICBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpZFRva2VuOiBTdHJpbmdEaWN0OyAvLyB3aWxsIGJlIGRlcHJlY2F0ZWQgc29vblxyXG4gICAgaWRUb2tlbkNsYWltczogU3RyaW5nRGljdDtcclxuICAgIHNpZDogc3RyaW5nO1xyXG4gICAgZW52aXJvbm1lbnQ6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gQWNjb3VudCBPYmplY3RcclxuICAgICAqIEBwcmFyYW0gYWNjb3VudElkZW50aWZpZXJcclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkZW50aWZpZXJcclxuICAgICAqIEBwYXJhbSB1c2VyTmFtZVxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBpZFRva2VuXHJcbiAgICAgKiBAcGFyYW0gc2lkXHJcbiAgICAgKiBAcGFyYW0gZW52aXJvbm1lbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkZW50aWZpZXI6IHN0cmluZywgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcsIHVzZXJOYW1lOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaWRUb2tlbkNsYWltczogU3RyaW5nRGljdCwgc2lkOiBzdHJpbmcsICBlbnZpcm9ubWVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvdW50SWRlbnRpZmllciA9IGFjY291bnRJZGVudGlmaWVyO1xyXG4gICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB1c2VyTmFtZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIC8vIHdpbGwgYmUgZGVwcmVjYXRlZCBzb29uXHJcbiAgICAgICAgdGhpcy5pZFRva2VuID0gaWRUb2tlbkNsYWltcztcclxuICAgICAgICB0aGlzLmlkVG9rZW5DbGFpbXMgPSBpZFRva2VuQ2xhaW1zO1xyXG4gICAgICAgIHRoaXMuc2lkID0gc2lkO1xyXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBwYXJhbSBpZFRva2VuXHJcbiAgICAgKiBAcGFyYW0gY2xpZW50SW5mb1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlQWNjb3VudChpZFRva2VuOiBJZFRva2VuLCBjbGllbnRJbmZvOiBDbGllbnRJbmZvKTogQWNjb3VudCB7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhY2NvdW50SWRlbnRpZmllclxyXG4gICAgICAgIGNvbnN0IGFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcgPSBpZFRva2VuLm9iamVjdElkIHx8ICBpZFRva2VuLnN1YmplY3Q7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBob21lQWNjb3VudElkZW50aWZpZXJcclxuICAgICAgICBjb25zdCB1aWQ6IHN0cmluZyA9IGNsaWVudEluZm8gPyBjbGllbnRJbmZvLnVpZCA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgdXRpZDogc3RyaW5nID0gY2xpZW50SW5mbyA/IGNsaWVudEluZm8udXRpZCA6IFwiXCI7XHJcblxyXG4gICAgICAgIGxldCBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcclxuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkodWlkKSAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eSh1dGlkKSkge1xyXG4gICAgICAgICAgICBob21lQWNjb3VudElkZW50aWZpZXIgPSBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodWlkKSArIFwiLlwiICsgQ3J5cHRvVXRpbHMuYmFzZTY0RW5jb2RlKHV0aWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEFjY291bnQoYWNjb3VudElkZW50aWZpZXIsIGhvbWVBY2NvdW50SWRlbnRpZmllciwgaWRUb2tlbi5wcmVmZXJyZWROYW1lLCBpZFRva2VuLm5hbWUsIGlkVG9rZW4uY2xhaW1zLCBpZFRva2VuLnNpZCwgaWRUb2tlbi5pc3N1ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXRpbHMgZnVuY3Rpb24gdG8gY29tcGFyZSB0d28gQWNjb3VudCBvYmplY3RzIC0gdXNlZCB0byBjaGVjayBpZiB0aGUgc2FtZSB1c2VyIGFjY291bnQgaXMgbG9nZ2VkIGluXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGExOiBBY2NvdW50IG9iamVjdFxyXG4gICAgICogQHBhcmFtIGEyOiBBY2NvdW50IG9iamVjdFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29tcGFyZUFjY291bnRzKGExOiBBY2NvdW50LCBhMjogQWNjb3VudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghYTEgfHwgIWEyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGExLmhvbWVBY2NvdW50SWRlbnRpZmllciAmJiBhMi5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgaWYgKGExLmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gYTIuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBBdXRob3JpdHksIEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgWGhyQ2xpZW50IH0gZnJvbSBcIi4uL1hIUkNsaWVudFwiO1xyXG5pbXBvcnQgeyBBQURUcnVzdGVkSG9zdExpc3QgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFhZEF1dGhvcml0eSBleHRlbmRzIEF1dGhvcml0eSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBBYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50OiBzdHJpbmcgPSBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb24vZGlzY292ZXJ5L2luc3RhbmNlXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludFVybCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHtBYWRBdXRob3JpdHkuQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludH0/YXBpLXZlcnNpb249MS4wJmF1dGhvcml6YXRpb25fZW5kcG9pbnQ9JHt0aGlzLkNhbm9uaWNhbEF1dGhvcml0eX1vYXV0aDIvdjIuMC9hdXRob3JpemVgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcihhdXRob3JpdHksIHZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IEF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWFkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIE9JREMgZW5kcG9pbnRcclxuICAgICAqIE9ubHkgcmVzcG9uZHMgd2l0aCB0aGUgZW5kcG9pbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQgfHwgdGhpcy5Jc0luVHJ1c3RlZEhvc3RMaXN0KHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkRlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmb3IgY3VzdG9tIGRvbWFpbnMgaW4gQUFEIHdoZXJlIHdlIHF1ZXJ5IHRoZSBzZXJ2aWNlIGZvciB0aGUgSW5zdGFuY2UgZGlzY292ZXJ5XHJcbiAgICAgICAgY29uc3QgY2xpZW50OiBYaHJDbGllbnQgPSBuZXcgWGhyQ2xpZW50KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjbGllbnQuc2VuZFJlcXVlc3RBc3luYyh0aGlzLkFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnRVcmwsIFwiR0VUXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRlbmFudF9kaXNjb3ZlcnlfZW5kcG9pbnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgaG9zdCBpcyBpbiBhIGxpc3Qgb2YgdHJ1c3RlZCBob3N0c1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFRoZSBob3N0IHRvIGxvb2sgdXBcclxuICAgICAqL1xyXG4gICAgcHVibGljIElzSW5UcnVzdGVkSG9zdExpc3QoaG9zdDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEFBRFRydXN0ZWRIb3N0TGlzdFtob3N0LnRvTG93ZXJDYXNlKCldO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFhIUiBjbGllbnQgZm9yIEpTT04gZW5kcG9pbnRzXHJcbiAqIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2FzeW5jLXByb21pc2VcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFhockNsaWVudCB7XHJcbiAgICBwdWJsaWMgc2VuZFJlcXVlc3RBc3luYyh1cmw6IHN0cmluZywgbWV0aG9kOiBzdHJpbmcsIGVuYWJsZUNhY2hpbmc/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCwgLyogYXN5bmM6ICovIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoZW5hYmxlQ2FjaGluZykge1xyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAqIFRPRE86IChzaGl2YikgZW5zdXJlIHRoYXQgdGhpcyBjYW4gYmUgY2FjaGVkXHJcbiAgICAgICAgICAgICAgICAgKiB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNhY2hlLUNvbnRyb2xcIiwgXCJQdWJsaWNcIik7XHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5oYW5kbGVFcnJvcih4aHIucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQganNvblJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBqc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLmhhbmRsZUVycm9yKHhoci5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGpzb25SZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IFwibm90IGltcGxlbWVudGVkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaGFuZGxlRXJyb3IocmVzcG9uc2VUZXh0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGxldCBqc29uUmVzcG9uc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBpZiAoanNvblJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvblJlc3BvbnNlLmVycm9yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VUZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEFhZEF1dGhvcml0eSB9IGZyb20gXCIuL0FhZEF1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEIyY0F1dGhvcml0eSBleHRlbmRzIEFhZEF1dGhvcml0eSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEIyQ19QUkVGSVg6IFN0cmluZyA9IFwidGZwXCI7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIoYXV0aG9yaXR5LCB2YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgICAgICAgY29uc3QgdXJsQ29tcG9uZW50cyA9IFVybFV0aWxzLkdldFVybENvbXBvbmVudHMoYXV0aG9yaXR5KTtcclxuXHJcbiAgICAgICAgY29uc3QgcGF0aFNlZ21lbnRzID0gdXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHM7XHJcbiAgICAgICAgaWYgKHBhdGhTZWdtZW50cy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYjJjQXV0aG9yaXR5VXJpSW52YWxpZFBhdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eSA9IGBodHRwczovLyR7dXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnR9LyR7cGF0aFNlZ21lbnRzWzBdfS8ke3BhdGhTZWdtZW50c1sxXX0vJHtwYXRoU2VnbWVudHNbMl19L2A7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xyXG4gICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIFRlbmFudERpc2NvdmVyeUVuZHBvaW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBHZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGlmICghdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkIHx8IHRoaXMuSXNJblRydXN0ZWRIb3N0TGlzdCh0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS51bnN1cHBvcnRlZEF1dGhvcml0eVZhbGlkYXRpb247XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi91dGlscy9VcmxVdGlsc1wiO1xyXG5pbXBvcnQgeyBUZWxlbWV0cnlFbWl0dGVyIH0gZnJvbSBcIi4vdGVsZW1ldHJ5L1RlbGVtZXRyeVR5cGVzXCI7XHJcblxyXG4vKipcclxuICogQ2FjaGUgbG9jYXRpb24gb3B0aW9ucyBzdXBwb3J0ZWQgYnkgTVNBTCBhcmU6XHJcbiAqIC0gbG9jYWwgc3RvcmFnZTogTVNBTCB1c2VzIGJyb3dzZXJzIGxvY2FsIHN0b3JhZ2UgdG8gc3RvcmUgaXRzIGNhY2hlXHJcbiAqIC0gc2Vzc2lvbiBzdG9yYWdlOiBNU0FMIHVzZXMgdGhlIGJyb3dzZXJzIHNlc3Npb24gc3RvcmFnZSB0byBzdG9yZSBpdHMgY2FjaGVcclxuICovXHJcbmV4cG9ydCB0eXBlIENhY2hlTG9jYXRpb24gPSBcImxvY2FsU3RvcmFnZVwiIHwgXCJzZXNzaW9uU3RvcmFnZVwiO1xyXG5cclxuLyoqXHJcbiAqIERlZmF1bHRzIGZvciB0aGUgQ29uZmlndXJhdGlvbiBPcHRpb25zXHJcbiAqL1xyXG5jb25zdCBGUkFNRV9USU1FT1VUID0gNjAwMDtcclxuY29uc3QgT0ZGU0VUID0gMzAwO1xyXG5jb25zdCBOQVZJR0FURV9GUkFNRV9XQUlUID0gNTAwO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIEF1dGhPcHRpb25zOiBVc2UgdGhpcyB0byBjb25maWd1cmUgdGhlIGF1dGggb3B0aW9ucyBpbiB0aGUgQ29uZmlndXJhdGlvbiBvYmplY3RcclxuICpcclxuICogIC0gY2xpZW50SWQgICAgICAgICAgICAgICAgICAgIC0gQ2xpZW50IElEIG9mIHlvdXIgYXBwIHJlZ2lzdGVyZWQgd2l0aCBvdXIgQXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbCA6IGh0dHBzOi8vcG9ydGFsLmF6dXJlLmNvbS8jYmxhZGUvTWljcm9zb2Z0X0FBRF9JQU0vQWN0aXZlRGlyZWN0b3J5TWVudUJsYWRlL1JlZ2lzdGVyZWRBcHBzUHJldmlldyBpbiBNaWNyb3NvZnQgSWRlbnRpdHkgUGxhdGZvcm1cclxuICogIC0gYXV0aG9yaXR5ICAgICAgICAgICAgICAgICAgIC0gWW91IGNhbiBjb25maWd1cmUgYSBzcGVjaWZpYyBhdXRob3JpdHksIGRlZmF1bHRzIHRvIFwiIFwiIG9yIFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiXHJcbiAqICAtIHZhbGlkYXRlQXV0aG9yaXR5ICAgICAgICAgICAtIFVzZWQgdG8gdHVybiBhdXRob3JpdHkgdmFsaWRhdGlvbiBvbi9vZmYuIFdoZW4gc2V0IHRvIHRydWUgKGRlZmF1bHQpLCBNU0FMIHdpbGwgY29tcGFyZSB0aGUgYXBwbGljYXRpb24ncyBhdXRob3JpdHkgYWdhaW5zdCB3ZWxsLWtub3duIFVSTHMgdGVtcGxhdGVzIHJlcHJlc2VudGluZyB3ZWxsLWZvcm1lZCBhdXRob3JpdGllcy4gSXQgaXMgdXNlZnVsIHdoZW4gdGhlIGF1dGhvcml0eSBpcyBvYnRhaW5lZCBhdCBydW4gdGltZSB0byBwcmV2ZW50IE1TQUwgZnJvbSBkaXNwbGF5aW5nIGF1dGhlbnRpY2F0aW9uIHByb21wdHMgZnJvbSBtYWxpY2lvdXMgcGFnZXMuXHJcbiAqICAtIHJlZGlyZWN0VXJpICAgICAgICAgICAgICAgICAtIFRoZSByZWRpcmVjdCBVUkkgb2YgdGhlIGFwcGxpY2F0aW9uLCB0aGlzIHNob3VsZCBiZSBzYW1lIGFzIHRoZSB2YWx1ZSBpbiB0aGUgYXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbC5EZWZhdWx0cyB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxyXG4gKiAgLSBwb3N0TG9nb3V0UmVkaXJlY3RVcmkgICAgICAgLSBVc2VkIHRvIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoaXMgbG9jYXRpb24gYWZ0ZXIgbG9nb3V0LiBEZWZhdWx0cyB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxyXG4gKiAgLSBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsICAgLSBVc2VkIHRvIHR1cm4gb2ZmIGRlZmF1bHQgbmF2aWdhdGlvbiB0byBzdGFydCBwYWdlIGFmdGVyIGxvZ2luLiBEZWZhdWx0IGlzIHRydWUuIFRoaXMgaXMgdXNlZCBvbmx5IGZvciByZWRpcmVjdCBmbG93cy5cclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIEF1dGhPcHRpb25zID0ge1xyXG4gICAgY2xpZW50SWQ6IHN0cmluZztcclxuICAgIGF1dGhvcml0eT86IHN0cmluZztcclxuICAgIHZhbGlkYXRlQXV0aG9yaXR5PzogYm9vbGVhbjtcclxuICAgIHJlZGlyZWN0VXJpPzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XHJcbiAgICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcclxuICAgIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmw/OiBib29sZWFuO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVzZSB0aGlzIHRvIGNvbmZpZ3VyZSB0aGUgYmVsb3cgY2FjaGUgY29uZmlndXJhdGlvbiBvcHRpb25zOlxyXG4gKlxyXG4gKiAtIGNhY2hlTG9jYXRpb24gICAgICAgICAgICAtIFVzZWQgdG8gc3BlY2lmeSB0aGUgY2FjaGVMb2NhdGlvbiB1c2VyIHdhbnRzIHRvIHNldC4gVmFsaWQgdmFsdWVzIGFyZSBcImxvY2FsU3RvcmFnZVwiIGFuZCBcInNlc3Npb25TdG9yYWdlXCJcclxuICogLSBzdG9yZUF1dGhTdGF0ZUluQ29va2llICAgLSBJZiBzZXQsIE1TQUwgc3RvcmUncyB0aGUgYXV0aCByZXF1ZXN0IHN0YXRlIHJlcXVpcmVkIGZvciB2YWxpZGF0aW9uIG9mIHRoZSBhdXRoIGZsb3dzIGluIHRoZSBicm93c2VyIGNvb2tpZXMuIEJ5IGRlZmF1bHQgdGhpcyBmbGFnIGlzIHNldCB0byBmYWxzZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENhY2hlT3B0aW9ucyA9IHtcclxuICAgIGNhY2hlTG9jYXRpb24/OiBDYWNoZUxvY2F0aW9uO1xyXG4gICAgc3RvcmVBdXRoU3RhdGVJbkNvb2tpZT86IGJvb2xlYW47XHJcbn07XHJcblxyXG4vKipcclxuICogVGVsZW1ldHJ5IENvbmZpZyBPcHRpb25zXHJcbiAqIC0gYXBwbGljYXRpb25OYW1lICAgICAgICAgICAgICAtIE5hbWUgb2YgdGhlIGNvbnN1bWluZyBhcHBzIGFwcGxpY2F0aW9uXHJcbiAqIC0gYXBwbGljYXRpb25WZXJzaW9uICAgICAgICAgICAtIFZlcmlzb24gb2YgdGhlIGNvbnN1bWluZyBhcHBsaWNhdGlvblxyXG4gKiAtIHRlbGVtZXRyeUVtaXR0ZXIgICAgICAgICAgICAgLSBGdW5jdGlvbiB3aGVyZSB0ZWxlbWV0cnkgZXZlbnRzIGFyZSBmbHVzaGVkIHRvXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBUZWxlbWV0cnlPcHRpb25zID0ge1xyXG4gICAgYXBwbGljYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgICBhcHBsaWNhdGlvblZlcnNpb246IHN0cmluZztcclxuICAgIHRlbGVtZXRyeUVtaXR0ZXI6IFRlbGVtZXRyeUVtaXR0ZXJcclxuICAgIC8vIFRPRE8sIGFkZCBvbmx5QWRkRmFpbHVyZVRlbGVtZXRyeSBvcHRpb25cclxufTtcclxuXHJcbi8qKlxyXG4gKiBMaWJyYXJ5IFNwZWNpZmljIE9wdGlvbnNcclxuICpcclxuICogLSBsb2dnZXIgICAgICAgICAgICAgICAgICAgICAgIC0gVXNlZCB0byBpbml0aWFsaXplIHRoZSBMb2dnZXIgb2JqZWN0OyBUT0RPOiBFeHBhbmQgb24gbG9nZ2VyIGRldGFpbHMgb3IgbGluayB0byB0aGUgZG9jdW1lbnRhdGlvbiBvbiBsb2dnZXJcclxuICogLSBsb2FkRnJhbWVUaW1lb3V0ICAgICAgICAgICAgIC0gbWF4aW11bSB0aW1lIHRoZSBsaWJyYXJ5IHNob3VsZCB3YWl0IGZvciBhIGZyYW1lIHRvIGxvYWRcclxuICogLSB0b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzICAgIC0gc2V0cyB0aGUgd2luZG93IG9mIG9mZnNldCBuZWVkZWQgdG8gcmVuZXcgdGhlIHRva2VuIGJlZm9yZSBleHBpcnlcclxuICogLSBuYXZpZ2F0ZUZyYW1lV2FpdCAgICAgICAgICAgIC0gc2V0cyB0aGUgd2FpdCB0aW1lIGZvciBoaWRkZW4gaUZyYW1lIG5hdmlnYXRpb25cclxuICovXHJcbmV4cG9ydCB0eXBlIFN5c3RlbU9wdGlvbnMgPSB7XHJcbiAgICBsb2dnZXI/OiBMb2dnZXI7XHJcbiAgICBsb2FkRnJhbWVUaW1lb3V0PzogbnVtYmVyO1xyXG4gICAgdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcz86IG51bWJlcjtcclxuICAgIG5hdmlnYXRlRnJhbWVXYWl0PzogbnVtYmVyO1xyXG4gICAgdGVsZW1ldHJ5PzogVGVsZW1ldHJ5T3B0aW9uc1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFwcC9GcmFtZXdvcmsgc3BlY2lmaWMgZW52aXJvbm1lbnQgc3VwcG9ydFxyXG4gKlxyXG4gKiAtIGlzQW5ndWxhciAgICAgICAgICAgICAgICAtIGZsYWcgc2V0IHRvIGRldGVybWluZSBpZiBpdCBpcyBBbmd1bGFyIEZyYW1ld29yay4gTVNBTCB1c2VzIHRoaXMgdG8gYnJvYWRjYXN0IHRva2Vucy4gTW9yZSB0byBjb21lIGhlcmU6IGRldGFuZ2xlIHRoaXMgZGVwZW5kZW5jeSBmcm9tIGNvcmUuXHJcbiAqIC0gdW5wcm90ZWN0ZWRSZXNvdXJjZXMgICAgIC0gQXJyYXkgb2YgVVJJJ3Mgd2hpY2ggYXJlIHVucHJvdGVjdGVkIHJlc291cmNlcy4gTVNBTCB3aWxsIG5vdCBhdHRhY2ggYSB0b2tlbiB0byBvdXRnb2luZyByZXF1ZXN0cyB0aGF0IGhhdmUgdGhlc2UgVVJJLiBEZWZhdWx0cyB0byAnbnVsbCcuXHJcbiAqIC0gcHJvdGVjdGVkUmVzb3VyY2VNYXAgICAgIC0gVGhpcyBpcyBtYXBwaW5nIG9mIHJlc291cmNlcyB0byBzY29wZXMgdXNlZCBieSBNU0FMIGZvciBhdXRvbWF0aWNhbGx5IGF0dGFjaGluZyBhY2Nlc3MgdG9rZW5zIGluIHdlYiBBUEkgY2FsbHMuQSBzaW5nbGUgYWNjZXNzIHRva2VuIGlzIG9idGFpbmVkIGZvciB0aGUgcmVzb3VyY2UuIFNvIHlvdSBjYW4gbWFwIGEgc3BlY2lmaWMgcmVzb3VyY2UgcGF0aCBhcyBmb2xsb3dzOiB7XCJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20vdjEuMC9tZVwiLCBbXCJ1c2VyLnJlYWRcIl19LCBvciB0aGUgYXBwIFVSTCBvZiB0aGUgcmVzb3VyY2UgYXM6IHtcImh0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbS9cIiwgW1widXNlci5yZWFkXCIsIFwibWFpbC5zZW5kXCJdfS4gVGhpcyBpcyByZXF1aXJlZCBmb3IgQ09SUyBjYWxscy5cclxuICpcclxuICovXHJcbmV4cG9ydCB0eXBlIEZyYW1ld29ya09wdGlvbnMgPSB7XHJcbiAgICBpc0FuZ3VsYXI/OiBib29sZWFuO1xyXG4gICAgdW5wcm90ZWN0ZWRSZXNvdXJjZXM/OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJvdGVjdGVkUmVzb3VyY2VNYXA/OiBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBVc2UgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIGNvbmZpZ3VyZSBNU0FMIGFuZCBpbml0aWFsaXplIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbi5cclxuICpcclxuICogVGhpcyBvYmplY3QgYWxsb3dzIHlvdSB0byBjb25maWd1cmUgaW1wb3J0YW50IGVsZW1lbnRzIG9mIE1TQUwgZnVuY3Rpb25hbGl0eTpcclxuICogLSBhdXRoOiB0aGlzIGlzIHdoZXJlIHlvdSBjb25maWd1cmUgYXV0aCBlbGVtZW50cyBsaWtlIGNsaWVudElELCAgYXV0aG9yaXR5IHVzZWQgZm9yIGF1dGhlbnRpY2F0aW5nIGFnYWluc3QgdGhlIE1pY3Jvc29mdCBJZGVudGl0eSBQbGF0Zm9ybVxyXG4gKiAtIGNhY2hlOiB0aGlzIGlzIHdoZXJlIHlvdSBjb25maWd1cmUgY2FjaGUgbG9jYXRpb24gYW5kIHdoZXRoZXIgdG8gc3RvcmUgY2FjaGUgaW4gY29va2llc1xyXG4gKiAtIHN5c3RlbTogdGhpcyBpcyB3aGVyZSB5b3UgY2FuIGNvbmZpZ3VyZSB0aGUgbG9nZ2VyLCBmcmFtZSB0aW1lb3V0IGV0Yy5cclxuICogLSBmcmFtZXdvcms6IHRoaXMgaXMgd2hlcmUgeW91IGNhbiBjb25maWd1cmUgdGhlIHJ1bm5pbmcgbW9kZSBvZiBhbmd1bGFyLiBNb3JlIHRvIGNvbWUgaGVyZSBzb29uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29uZmlndXJhdGlvbiA9IHtcclxuICAgIGF1dGg6IEF1dGhPcHRpb25zLFxyXG4gICAgY2FjaGU/OiBDYWNoZU9wdGlvbnMsXHJcbiAgICBzeXN0ZW0/OiBTeXN0ZW1PcHRpb25zLFxyXG4gICAgZnJhbWV3b3JrPzogRnJhbWV3b3JrT3B0aW9uc1xyXG59O1xyXG5cclxuY29uc3QgREVGQVVMVF9BVVRIX09QVElPTlM6IEF1dGhPcHRpb25zID0ge1xyXG4gICAgY2xpZW50SWQ6IFwiXCIsXHJcbiAgICBhdXRob3JpdHk6IG51bGwsXHJcbiAgICB2YWxpZGF0ZUF1dGhvcml0eTogdHJ1ZSxcclxuICAgIHJlZGlyZWN0VXJpOiAoKSA9PiBVcmxVdGlscy5nZXREZWZhdWx0UmVkaXJlY3RVcmkoKSxcclxuICAgIHBvc3RMb2dvdXRSZWRpcmVjdFVyaTogKCkgPT4gVXJsVXRpbHMuZ2V0RGVmYXVsdFJlZGlyZWN0VXJpKCksXHJcbiAgICBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX0NBQ0hFX09QVElPTlM6IENhY2hlT3B0aW9ucyA9IHtcclxuICAgIGNhY2hlTG9jYXRpb246IFwic2Vzc2lvblN0b3JhZ2VcIixcclxuICAgIHN0b3JlQXV0aFN0YXRlSW5Db29raWU6IGZhbHNlXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX1NZU1RFTV9PUFRJT05TOiBTeXN0ZW1PcHRpb25zID0ge1xyXG4gICAgbG9nZ2VyOiBuZXcgTG9nZ2VyKG51bGwpLFxyXG4gICAgbG9hZEZyYW1lVGltZW91dDogRlJBTUVfVElNRU9VVCxcclxuICAgIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM6IE9GRlNFVCxcclxuICAgIG5hdmlnYXRlRnJhbWVXYWl0OiBOQVZJR0FURV9GUkFNRV9XQUlUXHJcbn07XHJcblxyXG5jb25zdCBERUZBVUxUX0ZSQU1FV09SS19PUFRJT05TOiBGcmFtZXdvcmtPcHRpb25zID0ge1xyXG4gICAgaXNBbmd1bGFyOiBmYWxzZSxcclxuICAgIHVucHJvdGVjdGVkUmVzb3VyY2VzOiBuZXcgQXJyYXk8c3RyaW5nPigpLFxyXG4gICAgcHJvdGVjdGVkUmVzb3VyY2VNYXA6IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PigpXHJcbn07XHJcblxyXG4vKipcclxuICogTVNBTCBmdW5jdGlvbiB0aGF0IHNldHMgdGhlIGRlZmF1bHQgb3B0aW9ucyB3aGVuIG5vdCBleHBsaWNpdGx5IGNvbmZpZ3VyZWQgZnJvbSBhcHAgZGV2ZWxvcGVyXHJcbiAqXHJcbiAqIEBwYXJhbSBUQXV0aE9wdGlvbnNcclxuICogQHBhcmFtIFRDYWNoZU9wdGlvbnNcclxuICogQHBhcmFtIFRTeXN0ZW1PcHRpb25zXHJcbiAqIEBwYXJhbSBURnJhbWV3b3JrT3B0aW9uc1xyXG4gKlxyXG4gKiBAcmV0dXJucyBUQ29uZmlndXJhdGlvbiBvYmplY3RcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDb25maWd1cmF0aW9uKHsgYXV0aCwgY2FjaGUgPSB7fSwgc3lzdGVtID0ge30sIGZyYW1ld29yayA9IHt9fTogQ29uZmlndXJhdGlvbik6IENvbmZpZ3VyYXRpb24ge1xyXG4gICAgY29uc3Qgb3ZlcmxheWVkQ29uZmlnOiBDb25maWd1cmF0aW9uID0ge1xyXG4gICAgICAgIGF1dGg6IHsgLi4uREVGQVVMVF9BVVRIX09QVElPTlMsIC4uLmF1dGggfSxcclxuICAgICAgICBjYWNoZTogeyAuLi5ERUZBVUxUX0NBQ0hFX09QVElPTlMsIC4uLmNhY2hlIH0sXHJcbiAgICAgICAgc3lzdGVtOiB7IC4uLkRFRkFVTFRfU1lTVEVNX09QVElPTlMsIC4uLnN5c3RlbSB9LFxyXG4gICAgICAgIGZyYW1ld29yazogeyAuLi5ERUZBVUxUX0ZSQU1FV09SS19PUFRJT05TLCAuLi5mcmFtZXdvcmsgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvdmVybGF5ZWRDb25maWc7XHJcbn1cclxuXHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi9TZXJ2ZXJFcnJvclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlID0ge1xyXG4gICAgaW50ZXJhY3Rpb25SZXF1aXJlZDoge1xyXG4gICAgICAgIGNvZGU6IFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIlxyXG4gICAgfSxcclxuICAgIGNvbnNlbnRSZXF1aXJlZDoge1xyXG4gICAgICAgIGNvZGU6IFwiY29uc2VudF9yZXF1aXJlZFwiXHJcbiAgICB9LFxyXG4gICAgbG9naW5SZXF1aXJlZDoge1xyXG4gICAgICAgIGNvZGU6IFwibG9naW5fcmVxdWlyZWRcIlxyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGUgdXNlciBpcyByZXF1aXJlZCB0byBwZXJmb3JtIGFuIGludGVyYWN0aXZlIHRva2VuIHJlcXVlc3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciBleHRlbmRzIFNlcnZlckVycm9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xyXG5cclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihlcnJvclN0cmluZzogc3RyaW5nKSA6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGludGVyYWN0aW9uUmVxdWlyZWRDb2RlcyA9IFtcclxuICAgICAgICAgICAgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuaW50ZXJhY3Rpb25SZXF1aXJlZC5jb2RlLFxyXG4gICAgICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5jb25zZW50UmVxdWlyZWQuY29kZSxcclxuICAgICAgICAgICAgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UubG9naW5SZXF1aXJlZC5jb2RlXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVycm9yU3RyaW5nICYmIGludGVyYWN0aW9uUmVxdWlyZWRDb2Rlcy5pbmRleE9mKGVycm9yU3RyaW5nKSA+IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVMb2dpblJlcXVpcmVkQXV0aEVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5pbnRlcmFjdGlvblJlcXVpcmVkLmNvZGUsIGVycm9yRGVzYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUNvbnNlbnRSZXF1aXJlZEF1dGhFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ige1xyXG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5jb25zZW50UmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XHJcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi9JZFRva2VuXCI7XHJcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEF1dGhSZXNwb25zZSA9IHtcclxuICAgIHVuaXF1ZUlkOiBzdHJpbmc7XHJcbiAgICB0ZW5hbnRJZDogc3RyaW5nO1xyXG4gICAgdG9rZW5UeXBlOiBzdHJpbmc7XHJcbiAgICBpZFRva2VuOiBJZFRva2VuO1xyXG4gICAgaWRUb2tlbkNsYWltczogU3RyaW5nRGljdDtcclxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgICBzY29wZXM6IEFycmF5PHN0cmluZz47XHJcbiAgICBleHBpcmVzT246IERhdGU7XHJcbiAgICBhY2NvdW50OiBBY2NvdW50O1xyXG4gICAgYWNjb3VudFN0YXRlOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSZXNwb25zZVN0YXRlT25seShzdGF0ZTogc3RyaW5nKSA6IEF1dGhSZXNwb25zZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVuaXF1ZUlkOiBcIlwiLFxyXG4gICAgICAgIHRlbmFudElkOiBcIlwiLFxyXG4gICAgICAgIHRva2VuVHlwZTogXCJcIixcclxuICAgICAgICBpZFRva2VuOiBudWxsLFxyXG4gICAgICAgIGlkVG9rZW5DbGFpbXM6IG51bGwsXHJcbiAgICAgICAgYWNjZXNzVG9rZW46IFwiXCIsXHJcbiAgICAgICAgc2NvcGVzOiBudWxsLFxyXG4gICAgICAgIGV4cGlyZXNPbjogbnVsbCxcclxuICAgICAgICBhY2NvdW50OiBudWxsLFxyXG4gICAgICAgIGFjY291bnRTdGF0ZTogc3RhdGVcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQjJjQXV0aG9yaXR5IH0gZnJvbSBcIi4uL2F1dGhvcml0eS9CMmNBdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQUFEVHJ1c3RlZEhvc3RMaXN0IH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBURU5BTlRfUExBQ0VIT0xERVIsIEVWRU5UX05BTUVfUFJFRklYIH0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL0NyeXB0b1V0aWxzXCI7XHJcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1VybFV0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2NydWJUZW5hbnRGcm9tVXJpID0gKHVyaTogc3RyaW5nKTogU3RyaW5nID0+IHtcclxuXHJcbiAgICBjb25zdCB1cmwgPSBVcmxVdGlscy5HZXRVcmxDb21wb25lbnRzKHVyaSk7XHJcblxyXG4gICAgLy8gdmFsaWRhdGUgdHJ1c3RlZCBob3N0XHJcbiAgICBpZiAoIUFBRFRydXN0ZWRIb3N0TGlzdFt1cmwuSG9zdE5hbWVBbmRQb3J0LnRvTG9jYWxlTG93ZXJDYXNlKCldKSB7XHJcbiAgICAgICAgLy8gU2hvdWxkIHRoaXMgcmV0dXJuIG51bGwgb3Igd2hhdCB3YXMgcGFzc2VkP1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhdGhQYXJhbXMgPSB1cmwuUGF0aFNlZ21lbnRzO1xyXG5cclxuICAgIGlmIChwYXRoUGFyYW1zICYmIHBhdGhQYXJhbXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICBjb25zdCB0ZW5hbnRQb3NpdGlvbiA9IHBhdGhQYXJhbXNbMV0gPT09ICBCMmNBdXRob3JpdHkuQjJDX1BSRUZJWCA/IDIgOiAxO1xyXG4gICAgICAgIGlmICh0ZW5hbnRQb3NpdGlvbiA8IHBhdGhQYXJhbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHBhdGhQYXJhbXNbdGVuYW50UG9zaXRpb25dID0gVEVOQU5UX1BMQUNFSE9MREVSO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gIGAke3VybC5Qcm90b2NvbH0vLyR7dXJsLkhvc3ROYW1lQW5kUG9ydH0vJHtwYXRoUGFyYW1zLmpvaW4oXCIvXCIpfWA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFzaFBlcnNvbmFsSWRlbnRpZmllciA9ICh2YWx1ZVRvSGFzaDogc3RyaW5nKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICogVE9ETyBzaGEyNTYgdGhpc1xyXG4gICAgICogQ3VycmVudCB0ZXN0IHJ1bm5lciBpcyBiZWluZyBmdW5ueSB3aXRoIG5vZGUgbGlicyB0aGF0IGFyZSB3ZWJwYWNrZWQgYW55d2F5XHJcbiAgICAgKiBuZWVkIGEgZGlmZmVyZW50IHNvbHV0aW9uXHJcbiAgICAgKi9cclxuICAgIHJldHVybiBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodmFsdWVUb0hhc2gpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXBlbmRFdmVudE5hbWVQcmVmaXggPSAoc3VmZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7RVZFTlRfTkFNRV9QUkVGSVh9JHtzdWZmaXggfHwgXCJcIn1gO1xyXG4iLCJleHBvcnQgeyBVc2VyQWdlbnRBcHBsaWNhdGlvbiB9IGZyb20gXCIuL1VzZXJBZ2VudEFwcGxpY2F0aW9uXCI7XHJcbmV4cG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlclwiO1xyXG5leHBvcnQgeyBMb2dMZXZlbCB9IGZyb20gXCIuL0xvZ2dlclwiO1xyXG5leHBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xyXG5leHBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcclxuZXhwb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vYXV0aG9yaXR5L0F1dGhvcml0eVwiO1xyXG5leHBvcnQgeyBDYWNoZVJlc3VsdCB9IGZyb20gXCIuL1VzZXJBZ2VudEFwcGxpY2F0aW9uXCI7XHJcbmV4cG9ydCB7IENhY2hlTG9jYXRpb24sIENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XHJcbmV4cG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xyXG5leHBvcnQgeyBBdXRoUmVzcG9uc2UgfSBmcm9tIFwiLi9BdXRoUmVzcG9uc2VcIjtcclxuXHJcbi8vIEVycm9yc1xyXG5leHBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9BdXRoRXJyb3JcIjtcclxuZXhwb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XHJcbmV4cG9ydCB7IFNlcnZlckVycm9yIH0gZnJvbSBcIi4vZXJyb3IvU2VydmVyRXJyb3JcIjtcclxuZXhwb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcbmV4cG9ydCB7IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XHJcbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi91dGlscy9DcnlwdG9VdGlsc1wiO1xyXG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gXCIuL3V0aWxzL1VybFV0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuS2V5IHtcclxuXHJcbiAgICBhdXRob3JpdHk6IHN0cmluZztcclxuICAgIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgICBzY29wZXM6IHN0cmluZztcclxuICAgIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBzY29wZXM6IHN0cmluZywgdWlkOiBzdHJpbmcsIHV0aWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXR5ID0gVXJsVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eSk7XHJcbiAgICAgICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xyXG4gICAgICAgIHRoaXMuc2NvcGVzID0gc2NvcGVzO1xyXG4gICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gQ3J5cHRvVXRpbHMuYmFzZTY0RW5jb2RlKHVpZCkgKyBcIi5cIiArIENyeXB0b1V0aWxzLmJhc2U2NEVuY29kZSh1dGlkKTtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5WYWx1ZSB7XHJcblxyXG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICAgIGlkVG9rZW46IHN0cmluZztcclxuICAgIGV4cGlyZXNJbjogc3RyaW5nO1xyXG4gICAgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYWNjZXNzVG9rZW46IHN0cmluZywgaWRUb2tlbjogc3RyaW5nLCBleHBpcmVzSW46IHN0cmluZywgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW47XHJcbiAgICAgICAgdGhpcy5pZFRva2VuID0gaWRUb2tlbjtcclxuICAgICAgICB0aGlzLmV4cGlyZXNJbiA9IGV4cGlyZXNJbjtcclxuICAgICAgICB0aGlzLmhvbWVBY2NvdW50SWRlbnRpZmllciA9IGhvbWVBY2NvdW50SWRlbnRpZmllcjtcclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi91dGlscy9DcnlwdG9VdGlsc1wiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIHZhbGlkYXRlQ2xhaW1zUmVxdWVzdCB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4vTXNhbFR5cGVzXCI7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XHJcbmltcG9ydCB7IFNTT1R5cGVzLCBDb25zdGFudHMsIFByb21wdFN0YXRlLCBCbGFja2xpc3RlZEVRUGFyYW1zLCBsaWJyYXJ5VmVyc2lvbiB9IGZyb20gXCIuL3V0aWxzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIE5vbmNlOiBPSURDIE5vbmNlIGRlZmluaXRpb246IGh0dHBzOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI0lEVG9rZW5cclxuICogU3RhdGU6IE9BdXRoIFNwZWM6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tMTAuMTJcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIHtcclxuXHJcbiAgICBhdXRob3JpdHlJbnN0YW5jZTogQXV0aG9yaXR5O1xyXG4gICAgY2xpZW50SWQ6IHN0cmluZztcclxuICAgIHNjb3BlczogQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgICBub25jZTogc3RyaW5nO1xyXG4gICAgc3RhdGU6IHN0cmluZztcclxuXHJcbiAgICAvLyB0ZWxlbWV0cnkgaW5mb3JtYXRpb25cclxuICAgIHhDbGllbnRWZXI6IHN0cmluZztcclxuICAgIHhDbGllbnRTa3U6IHN0cmluZztcclxuICAgIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcclxuXHJcbiAgICByZXNwb25zZVR5cGU6IHN0cmluZztcclxuICAgIHJlZGlyZWN0VXJpOiBzdHJpbmc7XHJcblxyXG4gICAgcHJvbXB0VmFsdWU6IHN0cmluZztcclxuICAgIGNsYWltc1ZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgcXVlcnlQYXJhbWV0ZXJzOiBzdHJpbmc7XHJcbiAgICBleHRyYVF1ZXJ5UGFyYW1ldGVyczogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgYXV0aG9yaXR5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPyB0aGlzLmF1dGhvcml0eUluc3RhbmNlLkNhbm9uaWNhbEF1dGhvcml0eSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxyXG4gICAgICogQHBhcmFtIGNsaWVudElkXHJcbiAgICAgKiBAcGFyYW0gc2NvcGVcclxuICAgICAqIEBwYXJhbSByZXNwb25zZVR5cGVcclxuICAgICAqIEBwYXJhbSByZWRpcmVjdFVyaVxyXG4gICAgICogQHBhcmFtIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yIChhdXRob3JpdHk6IEF1dGhvcml0eSwgY2xpZW50SWQ6IHN0cmluZywgc2NvcGU6IEFycmF5PHN0cmluZz4sIHJlc3BvbnNlVHlwZTogc3RyaW5nLCByZWRpcmVjdFVyaTogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA9IGF1dGhvcml0eTtcclxuICAgICAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XHJcbiAgICAgICAgaWYgKCFzY29wZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3BlcyA9IFtjbGllbnRJZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY29wZXMgPSBbIC4uLnNjb3BlIF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vbmNlID0gQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZSAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShzdGF0ZSkgPyAgQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpICsgXCJ8XCIgKyBzdGF0ZSAgIDogQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byB1c2VyIHBhc3NlZCB2cyBnZW5lcmF0ZWQgd2l0aCB0aGUgbmV3IFBSXHJcbiAgICAgICAgdGhpcy5jb3JyZWxhdGlvbklkID0gQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xyXG5cclxuICAgICAgICAvLyB0ZWxlbWV0cnkgaW5mb3JtYXRpb25cclxuICAgICAgICB0aGlzLnhDbGllbnRTa3UgPSBcIk1TQUwuSlNcIjtcclxuICAgICAgICB0aGlzLnhDbGllbnRWZXIgPSBsaWJyYXJ5VmVyc2lvbigpO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0VXJpID0gcmVkaXJlY3RVcmk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKlxyXG4gICAgICogVXRpbGl0eSB0byBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgYW5kIEV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIFNlcnZlclJlcXVlc3RQYXJhbWVyZXJzXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAgICogQHBhcmFtIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBwb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQ6IEFjY291bnQsIHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgYWRhbElkVG9rZW5PYmplY3Q/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcXVlcnlQYXJhbWV0ZXJzOiBTdHJpbmdEaWN0ID0ge307XHJcblxyXG4gICAgICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgcHJvbXB0IHBhcmFtZXRlciB0byBzZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyBpZiBwYXNzZWRcclxuICAgICAgICAgICAgaWYgKHJlcXVlc3QucHJvbXB0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlUHJvbXB0UGFyYW1ldGVyKHJlcXVlc3QucHJvbXB0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0VmFsdWUgPSByZXF1ZXN0LnByb21wdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGNsYWltcyBjaGFsbGVuZ2UgdG8gc2VydmVyUmVxdWVzdFBhcmFtZXRlcnMgaWYgcGFzc2VkXHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmNsYWltc1JlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlQ2xhaW1zUmVxdWVzdChyZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhaW1zVmFsdWUgPSByZXF1ZXN0LmNsYWltc1JlcXVlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBkZXZlbG9wZXIgcHJvdmlkZXMgb25lIG9mIHRoZXNlLCBnaXZlIHByZWZlcmVuY2UgdG8gZGV2ZWxvcGVyIGNob2ljZVxyXG4gICAgICAgICAgICBpZiAoU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuaXNTU09QYXJhbShyZXF1ZXN0KSkge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gdGhpcy5jb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihyZXF1ZXN0LCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFkYWxJZFRva2VuT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIobnVsbCwgYWRhbElkVG9rZW5PYmplY3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBhZGRzIHNpZC9sb2dpbl9oaW50IGlmIG5vdCBwb3B1bGF0ZWQ7IHBvcHVsYXRlcyBkb21haW5fcmVxLCBsb2dpbl9yZXEgYW5kIGRvbWFpbl9oaW50XHJcbiAgICAgICAgICogdGhpcy5sb2dnZXIudmVyYm9zZShcIkNhbGxpbmcgYWRkSGludCBwYXJhbWV0ZXJzXCIpO1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuYWRkSGludFBhcmFtZXRlcnMoYWNjb3VudCwgcXVlcnlQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICAgICAgLy8gc2FuaXR5IGNoZWNrIGZvciBkZXZlbG9wZXIgcGFzc2VkIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICAgICAgbGV0IGVRUGFyYW1zOiBTdHJpbmdEaWN0O1xyXG4gICAgICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGVRUGFyYW1zID0gdGhpcy5zYW5pdGl6ZUVRUGFyYW1zKHJlcXVlc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUG9wdWxhdGUgdGhlIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxyXG4gICAgICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzID0gU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuZ2VuZXJhdGVRdWVyeVBhcmFtZXRlcnNTdHJpbmcocXVlcnlQYXJhbWV0ZXJzKTtcclxuICAgICAgICB0aGlzLmV4dHJhUXVlcnlQYXJhbWV0ZXJzID0gU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuZ2VuZXJhdGVRdWVyeVBhcmFtZXRlcnNTdHJpbmcoZVFQYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNyZWdpb24gUXVlcnlQYXJhbSBoZWxwZXJzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKlxyXG4gICAgICogVXRpbGl0eSB0byB0ZXN0IGlmIHZhbGlkIHByb21wdCB2YWx1ZSBpcyBwYXNzZWQgaW4gdGhlIHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdmFsaWRhdGVQcm9tcHRQYXJhbWV0ZXIgKHByb21wdDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCEoW1Byb21wdFN0YXRlLkxPR0lOLCBQcm9tcHRTdGF0ZS5TRUxFQ1RfQUNDT1VOVCwgUHJvbXB0U3RhdGUuQ09OU0VOVCwgUHJvbXB0U3RhdGUuTk9ORV0uaW5kZXhPZihwcm9tcHQpID49IDApKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RzIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlciBmb3IgdGhlIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAgICogaW4gYW55IGxvZ2luKCkgb3IgYWNxdWlyZVRva2VuKCkgY2FsbHNcclxuICAgICAqIEBwYXJhbSBpZFRva2VuT2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgICAqIEBwYXJhbSBzaWRcclxuICAgICAqIEBwYXJhbSBsb2dpbkhpbnRcclxuICAgICAqL1xyXG4gICAgLy8gVE9ETzogY2hlY2sgaG93IHRoaXMgYmVoYXZlcyB3aGVuIGRvbWFpbl9oaW50IG9ubHkgaXMgc2VudCBpbiBleHRyYXBhcmFtZXRlcnMgYW5kIGlkVG9rZW4gaGFzIG5vIHVwbi5cclxuICAgIHByaXZhdGUgY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBpZFRva2VuT2JqZWN0OiBhbnkpOiBTdHJpbmdEaWN0IHtcclxuXHJcbiAgICAgICAgLy8gcHJlZmVyZW5jZSBvcmRlcjogYWNjb3VudCA+IHNpZCA+IGxvZ2luX2hpbnRcclxuICAgICAgICBsZXQgc3NvVHlwZTtcclxuICAgICAgICBsZXQgc3NvRGF0YTtcclxuICAgICAgICBsZXQgc2VydmVyUmVxUGFyYW06IFN0cmluZ0RpY3QgPSB7fTtcclxuICAgICAgICAvLyBpZiBhY2NvdW50IGluZm8gaXMgcGFzc2VkLCBhY2NvdW50LnNpZCA+IGFjY291bnQubG9naW5faGludFxyXG4gICAgICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmFjY291bnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSByZXF1ZXN0LmFjY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWNjb3VudC5zaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuU0lEO1xyXG4gICAgICAgICAgICAgICAgICAgIHNzb0RhdGEgPSBhY2NvdW50LnNpZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFjY291bnQudXNlck5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuTE9HSU5fSElOVDtcclxuICAgICAgICAgICAgICAgICAgICBzc29EYXRhID0gYWNjb3VudC51c2VyTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzaWQgZnJvbSByZXF1ZXN0XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlcXVlc3Quc2lkKSB7XHJcbiAgICAgICAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuU0lEO1xyXG4gICAgICAgICAgICAgICAgc3NvRGF0YSA9IHJlcXVlc3Quc2lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxvZ2luSGludCBmcm9tIHJlcXVlc3RcclxuICAgICAgICAgICAgZWxzZSBpZiAocmVxdWVzdC5sb2dpbkhpbnQpIHtcclxuICAgICAgICAgICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5MT0dJTl9ISU5UO1xyXG4gICAgICAgICAgICAgICAgc3NvRGF0YSA9IHJlcXVlc3QubG9naW5IaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGFkYWxJZFRva2VuIHJldHJpZXZlZCBmcm9tIGNhY2hlXHJcbiAgICAgICAgZWxzZSBpZiAoaWRUb2tlbk9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoaWRUb2tlbk9iamVjdC5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMudXBuKSkge1xyXG4gICAgICAgICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLklEX1RPS0VOO1xyXG4gICAgICAgICAgICAgICAgc3NvRGF0YSA9IGlkVG9rZW5PYmplY3QudXBuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XHJcbiAgICAgICAgICAgICAgICBzc29EYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VydmVyUmVxUGFyYW0gPSB0aGlzLmFkZFNTT1BhcmFtZXRlcihzc29UeXBlLCBzc29EYXRhKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHRoZSBIb21lQWNjb3VudElkZW50aWZpZXIgaW5mby8gZG9tYWluX2hpbnRcclxuICAgICAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LmFjY291bnQgJiYgcmVxdWVzdC5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICBzZXJ2ZXJSZXFQYXJhbSA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lELCByZXF1ZXN0LmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyLCBzZXJ2ZXJSZXFQYXJhbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2VydmVyUmVxUGFyYW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKlxyXG4gICAgICogQWRkcyBsb2dpbl9oaW50IHRvIGF1dGhvcml6YXRpb24gVVJMIHdoaWNoIGlzIHVzZWQgdG8gcHJlLWZpbGwgdGhlIHVzZXJuYW1lIGZpZWxkIG9mIHNpZ24gaW4gcGFnZSBmb3IgdGhlIHVzZXIgaWYga25vd24gYWhlYWQgb2YgdGltZVxyXG4gICAgICogZG9tYWluX2hpbnQgY2FuIGJlIG9uZSBvZiB1c2Vycy9vcmdhbml6YXRpb25zIHdoaWNoIHdoZW4gYWRkZWQgc2tpcHMgdGhlIGVtYWlsIGJhc2VkIGRpc2NvdmVyeSBwcm9jZXNzIG9mIHRoZSB1c2VyXHJcbiAgICAgKiBkb21haW5fcmVxIHV0aWQgcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgY2xpZW50SW5mb1xyXG4gICAgICogbG9naW5fcmVxIHVpZCByZWNlaXZlZCBhcyBwYXJ0IG9mIGNsaWVudEluZm9cclxuICAgICAqIEFsc28gZG9lcyBhIHNhbml0eSBjaGVjayBmb3IgZXh0cmFRdWVyeVBhcmFtZXRlcnMgcGFzc2VkIGJ5IHRoZSB1c2VyIHRvIGVuc3VyZSBubyByZXBlYXQgcXVlcnlQYXJhbWV0ZXJzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtAbGluayBBY2NvdW50fSBhY2NvdW50IC0gQWNjb3VudCBmb3Igd2hpY2ggdGhlIHRva2VuIGlzIHJlcXVlc3RlZFxyXG4gICAgICogQHBhcmFtIHF1ZXJ5cGFyYW1zXHJcbiAgICAgKiBAcGFyYW0ge0BsaW5rIFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzfVxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFkZEhpbnRQYXJhbWV0ZXJzKGFjY291bnQ6IEFjY291bnQsIHFQYXJhbXM6IFN0cmluZ0RpY3QpOiBTdHJpbmdEaWN0IHtcclxuICAgIC8qXHJcbiAgICAgKiBUaGlzIGlzIGEgZmluYWwgY2hlY2sgZm9yIGFsbCBxdWVyeVBhcmFtcyBhZGRlZCBzbyBmYXI7IHByZWZlcmVuY2Ugb3JkZXI6IHNpZCA+IGxvZ2luX2hpbnRcclxuICAgICAqIHNpZCBjYW5ub3QgYmUgcGFzc2VkIGFsb25nIHdpdGggbG9naW5faGludCBvciBkb21haW5faGludCwgaGVuY2Ugd2UgY2hlY2sgYm90aCBhcmUgbm90IHBvcHVsYXRlZCB5ZXQgaW4gcXVlcnlQYXJhbWV0ZXJzXHJcbiAgICAgKi9cclxuICAgICAgICBpZiAoYWNjb3VudCAmJiAhcVBhcmFtc1tTU09UeXBlcy5TSURdKSB7XHJcbiAgICAgICAgICAgIC8vIHNpZCAtIHBvcHVsYXRlIG9ubHkgaWYgbG9naW5faGludCBpcyBub3QgYWxyZWFkeSBwb3B1bGF0ZWQgYW5kIHRoZSBhY2NvdW50IGhhcyBzaWRcclxuICAgICAgICAgICAgY29uc3QgcG9wdWxhdGVTSUQgPSAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9ISU5UXSAmJiBhY2NvdW50LnNpZCAmJiB0aGlzLnByb21wdFZhbHVlID09PSBQcm9tcHRTdGF0ZS5OT05FO1xyXG4gICAgICAgICAgICBpZiAocG9wdWxhdGVTSUQpIHtcclxuICAgICAgICAgICAgICAgIHFQYXJhbXMgPSB0aGlzLmFkZFNTT1BhcmFtZXRlcihTU09UeXBlcy5TSUQsIGFjY291bnQuc2lkLCBxUGFyYW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsb2dpbl9oaW50IC0gYWNjb3VudC51c2VyTmFtZVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVsYXRlTG9naW5IaW50ID0gIXFQYXJhbXNbU1NPVHlwZXMuTE9HSU5fSElOVF0gJiYgYWNjb3VudC51c2VyTmFtZSAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShhY2NvdW50LnVzZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChwb3B1bGF0ZUxvZ2luSGludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHFQYXJhbXMgPSB0aGlzLmFkZFNTT1BhcmFtZXRlcihTU09UeXBlcy5MT0dJTl9ISU5ULCBhY2NvdW50LnVzZXJOYW1lLCBxUGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9wdWxhdGVSZXFQYXJhbXMgPSAhcVBhcmFtc1tTU09UeXBlcy5ET01BSU5fUkVRXSAmJiAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9SRVFdO1xyXG4gICAgICAgICAgICBpZiAocG9wdWxhdGVSZXFQYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHFQYXJhbXMgPSB0aGlzLmFkZFNTT1BhcmFtZXRlcihTU09UeXBlcy5IT01FQUNDT1VOVF9JRCwgYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIsIHFQYXJhbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcVBhcmFtcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBTSUQgdG8gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgICAqIEBwYXJhbSBzaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhZGRTU09QYXJhbWV0ZXIoc3NvVHlwZTogc3RyaW5nLCBzc29EYXRhOiBzdHJpbmcsIHNzb1BhcmFtPzogU3RyaW5nRGljdCk6IFN0cmluZ0RpY3Qge1xyXG4gICAgICAgIGlmICghc3NvUGFyYW0pIHtcclxuICAgICAgICAgICAgc3NvUGFyYW0gPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghc3NvRGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3NvUGFyYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHNzb1R5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5TSUQ6IHtcclxuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLlNJRF0gPSBzc29EYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5JRF9UT0tFTjoge1xyXG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fSElOVF0gPSBzc29EYXRhO1xyXG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU1NPVHlwZXMuTE9HSU5fSElOVDoge1xyXG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fSElOVF0gPSBzc29EYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5PUkdBTklaQVRJT05TOiB7XHJcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5DT05TVU1FUlM6IHtcclxuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9ISU5UXSA9IFNTT1R5cGVzLkNPTlNVTUVSUztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU1NPVHlwZXMuSE9NRUFDQ09VTlRfSUQ6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvbWVBY2NvdW50SWQgPSBzc29EYXRhLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVpZCA9IENyeXB0b1V0aWxzLmJhc2U2NERlY29kZShob21lQWNjb3VudElkWzBdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHV0aWQgPSBDcnlwdG9VdGlscy5iYXNlNjREZWNvZGUoaG9tZUFjY291bnRJZFsxXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZG9tYWluX3JlcSBhbmQgbG9naW5fcmVxIGFyZSBub3QgbmVlZGVkIGFjY29yZGluZyB0byBlU1RTIHRlYW1cclxuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX1JFUV0gPSB1aWQ7XHJcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fUkVRXSA9IHV0aWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWQgPT09IENvbnN0YW50cy5jb25zdW1lcnNVdGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuQ09OU1VNRVJTO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU1NPVHlwZXMuTE9HSU5fUkVROiB7XHJcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5MT0dJTl9SRVFdID0gc3NvRGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU1NPVHlwZXMuRE9NQUlOX1JFUToge1xyXG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX1JFUV0gPSBzc29EYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzc29QYXJhbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqIFJlbW92ZXMgdW5uZWNlc3Nhcnkgb3IgZHVwbGljYXRlIHF1ZXJ5IHBhcmFtZXRlcnMgZnJvbSBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZUVRUGFyYW1zKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycykgOiBTdHJpbmdEaWN0IHtcclxuICAgICAgICBjb25zdCBlUVBhcmFtcyA6IFN0cmluZ0RpY3QgPSByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzO1xyXG4gICAgICAgIGlmICghZVFQYXJhbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXF1ZXN0LmNsYWltc1JlcXVlc3QpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5sb2dnZXIud2FybmluZyhcIlJlbW92ZWQgZHVwbGljYXRlIGNsYWltcyBmcm9tIGV4dHJhUXVlcnlQYXJhbWV0ZXJzLiBQbGVhc2UgdXNlIGVpdGhlciB0aGUgY2xhaW1zUmVxdWVzdCBmaWVsZCBPUiBwYXNzIGFzIGV4dHJhUXVlcnlQYXJhbWV0ZXIgLSBub3QgYm90aC5cIik7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBlUVBhcmFtc1tDb25zdGFudHMuY2xhaW1zXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQmxhY2tsaXN0ZWRFUVBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcclxuICAgICAgICAgICAgaWYgKGVRUGFyYW1zW3BhcmFtXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dnZXIud2FybmluZyhcIlJlbW92ZWQgZHVwbGljYXRlIFwiICsgcGFyYW0gKyBcIiBmcm9tIGV4dHJhUXVlcnlQYXJhbWV0ZXJzLiBQbGVhc2UgdXNlIHRoZSBcIiArIHBhcmFtICsgXCIgZmllbGQgaW4gcmVxdWVzdCBvYmplY3QuXCIpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGVRUGFyYW1zW3BhcmFtXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBlUVBhcmFtcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFV0aWxpdHkgdG8gZ2VuZXJhdGUgYSBRdWVyeVBhcmFtZXRlclN0cmluZyBmcm9tIGEgS2V5LVZhbHVlIG1hcHBpbmcgb2YgZXh0cmFRdWVyeVBhcmFtZXRlcnMgcGFzc2VkXHJcbiAgICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdlbmVyYXRlUXVlcnlQYXJhbWV0ZXJzU3RyaW5nKHF1ZXJ5UGFyYW1ldGVyczogU3RyaW5nRGljdCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHBhcmFtc1N0cmluZzogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHF1ZXJ5UGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtZXRlcnMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zU3RyaW5nID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXNTdHJpbmcgPSBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5UGFyYW1ldGVyc1trZXldKX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zU3RyaW5nICs9IGAmJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5UGFyYW1ldGVyc1trZXldKX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJhbXNTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBTU08gcGFyYW1zIHNldCBpbiB0aGUgUmVxdWVzdFxyXG4gICAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzU1NPUGFyYW0ocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QgJiYgKHJlcXVlc3QuYWNjb3VudCB8fCByZXF1ZXN0LnNpZCB8fCByZXF1ZXN0LmxvZ2luSGludCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuL3V0aWxzL0NyeXB0b1V0aWxzXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3V0aWxzL1N0cmluZ1V0aWxzXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsaWVudEluZm8ge1xyXG5cclxuICAgIHByaXZhdGUgX3VpZDogc3RyaW5nO1xyXG4gICAgZ2V0IHVpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aWQgPyB0aGlzLl91aWQgOiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB1aWQodWlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl91aWQgPSB1aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXRpZDogc3RyaW5nO1xyXG4gICAgZ2V0IHV0aWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXRpZCA/IHRoaXMuX3V0aWQgOiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB1dGlkKHV0aWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3V0aWQgPSB1dGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJhd0NsaWVudEluZm86IHN0cmluZykge1xyXG4gICAgICAgIGlmICghcmF3Q2xpZW50SW5mbyB8fCBTdHJpbmdVdGlscy5pc0VtcHR5KHJhd0NsaWVudEluZm8pKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlkID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy51dGlkID0gXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZENsaWVudEluZm86IHN0cmluZyA9IENyeXB0b1V0aWxzLmJhc2U2NERlY29kZShyYXdDbGllbnRJbmZvKTtcclxuICAgICAgICAgICAgY29uc3QgY2xpZW50SW5mbzogQ2xpZW50SW5mbyA9IDxDbGllbnRJbmZvPkpTT04ucGFyc2UoZGVjb2RlZENsaWVudEluZm8pO1xyXG4gICAgICAgICAgICBpZiAoY2xpZW50SW5mbykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsaWVudEluZm8uaGFzT3duUHJvcGVydHkoXCJ1aWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpZCA9IGNsaWVudEluZm8udWlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbGllbnRJbmZvLmhhc093blByb3BlcnR5KFwidXRpZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXRpZCA9IGNsaWVudEluZm8udXRpZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUNsaWVudEluZm9EZWNvZGluZ0Vycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBUb2tlblV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvVG9rZW5VdGlsc1wiO1xyXG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4vTXNhbFR5cGVzXCI7XHJcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSWRUb2tlbiB7XHJcblxyXG4gICAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgICBvYmplY3RJZDogc3RyaW5nO1xyXG4gICAgc3ViamVjdDogc3RyaW5nO1xyXG4gICAgdGVuYW50SWQ6IHN0cmluZztcclxuICAgIHZlcnNpb246IHN0cmluZztcclxuICAgIHByZWZlcnJlZE5hbWU6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGhvbWVPYmplY3RJZDogc3RyaW5nO1xyXG4gICAgbm9uY2U6IHN0cmluZztcclxuICAgIGV4cGlyYXRpb246IHN0cmluZztcclxuICAgIHJhd0lkVG9rZW46IHN0cmluZztcclxuICAgIGNsYWltczogU3RyaW5nRGljdDtcclxuICAgIHNpZDogc3RyaW5nO1xyXG4gICAgY2xvdWRJbnN0YW5jZTogc3RyaW5nO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuICAgIGNvbnN0cnVjdG9yKHJhd0lkVG9rZW46IHN0cmluZykge1xyXG4gICAgICAgIGlmIChTdHJpbmdVdGlscy5pc0VtcHR5KHJhd0lkVG9rZW4pKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJZFRva2VuTnVsbE9yRW1wdHlFcnJvcihyYXdJZFRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5yYXdJZFRva2VuID0gcmF3SWRUb2tlbjtcclxuICAgICAgICAgICAgdGhpcy5jbGFpbXMgPSBUb2tlblV0aWxzLmV4dHJhY3RJZFRva2VuKHJhd0lkVG9rZW4pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcImlzc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNzdWVyID0gdGhpcy5jbGFpbXNbXCJpc3NcIl07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwib2lkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmplY3RJZCA9IHRoaXMuY2xhaW1zW1wib2lkXCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcInN1YlwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdCA9IHRoaXMuY2xhaW1zW1wic3ViXCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcInRpZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVuYW50SWQgPSB0aGlzLmNsYWltc1tcInRpZFwiXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJ2ZXJcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSB0aGlzLmNsYWltc1tcInZlclwiXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJwcmVmZXJyZWRfdXNlcm5hbWVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWZlcnJlZE5hbWUgPSB0aGlzLmNsYWltc1tcInByZWZlcnJlZF91c2VybmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5jbGFpbXNbXCJuYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcIm5vbmNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub25jZSA9IHRoaXMuY2xhaW1zW1wibm9uY2VcIl07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwiZXhwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBpcmF0aW9uID0gdGhpcy5jbGFpbXNbXCJleHBcIl07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwiaG9tZV9vaWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbWVPYmplY3RJZCA9IHRoaXMuY2xhaW1zW1wiaG9tZV9vaWRcIl07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwic2lkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWQgPSB0aGlzLmNsYWltc1tcInNpZFwiXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJjbG91ZF9pbnN0YW5jZV9ob3N0X25hbWVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3VkSW5zdGFuY2UgPSB0aGlzLmNsYWltc1tcImNsb3VkX2luc3RhbmNlX2hvc3RfbmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qIHRzbGludDplbmFibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICogVE9ETzogVGhpcyBlcnJvciBoZXJlIHdvbid0IHJlYWxseSBldmVyeSBiZSB0aHJvd24sIHNpbmNlIGV4dHJhY3RJZFRva2VuKCkgcmV0dXJucyBudWxsIGlmIHRoZSBkZWNvZGVKd3QoKSBmYWlscy5cclxuICAgICAgICAgICAgICogTmVlZCB0byBhZGQgYmV0dGVyIGVycm9yIGhhbmRsaW5nIGhlcmUgdG8gYWNjb3VudCBmb3IgYmVpbmcgdW5hYmxlIHRvIGRlY29kZSBqd3RzLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUlkVG9rZW5QYXJzaW5nRXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbnN0YW50cywgQ2FjaGVLZXlzIH0gZnJvbSBcIi4vdXRpbHMvQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5DYWNoZUl0ZW1cIjtcclxuaW1wb3J0IHsgQ2FjaGVMb2NhdGlvbiB9IGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0b3JhZ2Ugey8vIFNpbmdsZXRvblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTdG9yYWdlO1xyXG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTdXBwb3J0ZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHNlc3Npb25TdG9yYWdlU3VwcG9ydGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBjYWNoZUxvY2F0aW9uOiBDYWNoZUxvY2F0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhY2hlTG9jYXRpb246IENhY2hlTG9jYXRpb24pIHtcclxuICAgICAgICBpZiAoU3RvcmFnZS5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gU3RvcmFnZS5pbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FjaGVMb2NhdGlvbiA9IGNhY2hlTG9jYXRpb247XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgPSB0eXBlb2Ygd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0gIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0gIT0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlc3Npb25TdG9yYWdlU3VwcG9ydGVkID0gdHlwZW9mIHdpbmRvd1tjYWNoZUxvY2F0aW9uXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dbY2FjaGVMb2NhdGlvbl0gIT0gbnVsbDtcclxuICAgICAgICBTdG9yYWdlLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlU3VwcG9ydGVkICYmICF0aGlzLnNlc3Npb25TdG9yYWdlU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVOb1N0b3JhZ2VTdXBwb3J0ZWRFcnJvcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIHZhbHVlIHRvIHN0b3JhZ2VcclxuICAgIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGVuYWJsZUNvb2tpZVN0b3JhZ2U/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbmFibGVDb29raWVTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IG9uZSBpdGVtIGJ5IGtleSBmcm9tIHN0b3JhZ2VcclxuICAgIGdldEl0ZW0oa2V5OiBzdHJpbmcsIGVuYWJsZUNvb2tpZVN0b3JhZ2U/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoZW5hYmxlQ29va2llU3RvcmFnZSAmJiB0aGlzLmdldEl0ZW1Db29raWUoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtQ29va2llKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmUgdmFsdWUgZnJvbSBzdG9yYWdlXHJcbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsZWFyIHN0b3JhZ2UgKHJlbW92ZSBhbGwgaXRlbXMgZnJvbSBpdClcclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsQWNjZXNzVG9rZW5zKGNsaWVudElkOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nKTogQXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHRzOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4gPSBbXTtcclxuICAgICAgICBsZXQgYWNjZXNzVG9rZW5DYWNoZUl0ZW06IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtO1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5Lm1hdGNoKGNsaWVudElkKSAmJiBrZXkubWF0Y2goaG9tZUFjY291bnRJZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gbmV3IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtKEpTT04ucGFyc2Uoa2V5KSwgSlNPTi5wYXJzZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcyhzdGF0ZT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKGtleS5pbmRleE9mKENhY2hlS2V5cy5BVVRIT1JJVFkpICE9PSAtMSB8fCBrZXkuaW5kZXhPZihDYWNoZUtleXMuQUNRVUlSRV9UT0tFTl9BQ0NPVU5UKSAhPT0gMSkgJiYgKCFzdGF0ZSB8fCBrZXkuaW5kZXhPZihzdGF0ZSkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdEtleSA9IGtleS5zcGxpdChDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdEtleS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHNwbGl0S2V5WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJiAhdGhpcy50b2tlblJlbmV3YWxJblByb2dyZXNzKHN0YXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShDb25zdGFudHMuc3RhdGVBY3F1aXJlVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKGtleSwgXCJcIiwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsZWFyQ29va2llKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b2tlblJlbmV3YWxJblByb2dyZXNzKHN0YXRlVmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcclxuICAgICAgICBjb25zdCByZW5ld1N0YXR1cyA9IHN0b3JhZ2VbQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgc3RhdGVWYWx1ZV07XHJcbiAgICAgICAgcmV0dXJuICEoIXJlbmV3U3RhdHVzIHx8IHJlbmV3U3RhdHVzICE9PSBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0Q2FjaGVJdGVtcygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKENvbnN0YW50cy5tc2FsKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRJdGVtQ29va2llKGNOYW1lOiBzdHJpbmcsIGNWYWx1ZTogc3RyaW5nLCBleHBpcmVzPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNvb2tpZVN0ciA9IGNOYW1lICsgXCI9XCIgKyBjVmFsdWUgKyBcIjtcIjtcclxuICAgICAgICBpZiAoZXhwaXJlcykge1xyXG4gICAgICAgICAgICBjb25zdCBleHBpcmVUaW1lID0gdGhpcy5nZXRDb29raWVFeHBpcmF0aW9uVGltZShleHBpcmVzKTtcclxuICAgICAgICAgICAgY29va2llU3RyICs9IFwiZXhwaXJlcz1cIiArIGV4cGlyZVRpbWUgKyBcIjtcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtQ29va2llKGNOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBjTmFtZSArIFwiPVwiO1xyXG4gICAgICAgIGNvbnN0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gY2FbaV07XHJcbiAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcclxuICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29raWVFeHBpcmF0aW9uVGltZShjb29raWVMaWZlRGF5czogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZXhwciA9IG5ldyBEYXRlKHRvZGF5LmdldFRpbWUoKSArIGNvb2tpZUxpZmVEYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIGV4cHIudG9VVENTdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNvb2tpZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgXCJcIiwgLTEpO1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMuc3RhdGVMb2dpbiwgXCJcIiwgLTEpO1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMubG9naW5SZXF1ZXN0LCBcIlwiLCAtMSk7XHJcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKENvbnN0YW50cy5zdGF0ZUFjcXVpcmVUb2tlbiwgXCJcIiwgLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgdG8gY2FjaGUgYWNjb3VudCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBhY2NvdW50SWRcclxuICAgICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRJZDogYW55LCBzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQ2FjaGVLZXlzLkFDUVVJUkVfVE9LRU5fQUNDT1VOVCArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArXHJcbiAgICAgICAgICAgIGAke2FjY291bnRJZH1gICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyICArIGAke3N0YXRlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYXV0aG9yaXR5S2V5IHRvIGNhY2hlIGF1dGhvcml0eVxyXG4gICAgICogQHBhcmFtIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQ2FjaGVLZXlzLkFVVEhPUklUWSArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIGAke3N0YXRlfWA7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbktleSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuS2V5XCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuVmFsdWUgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlblZhbHVlXCI7XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIHtcclxuXHJcbiAgICBrZXk6IEFjY2Vzc1Rva2VuS2V5O1xyXG4gICAgdmFsdWU6IEFjY2Vzc1Rva2VuVmFsdWU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBBY2Nlc3NUb2tlbktleSwgdmFsdWU6IEFjY2Vzc1Rva2VuVmFsdWUpIHtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBVcmxVdGlscyB9IGZyb20gXCIuL1VybFV0aWxzXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9Mb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3dVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEludGVydmFsIGluIG1pbGxpc2Vjb25kcyB0aGF0IHdlIHBvbGwgYSB3aW5kb3dcclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgUE9MTElOR19JTlRFUlZBTF9NUyA9IDUwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgcnVubmluZyBpbiBhbiBpZnJhbWUuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0luSWZyYW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cucGFyZW50ICE9PSB3aW5kb3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCBwYWdlIGlzIHJ1bm5pbmcgaW4gYSBwb3B1cC5cclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGlzSW5Qb3B1cCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISEod2luZG93Lm9wZW5lciAmJiB3aW5kb3cub3BlbmVyICE9PSB3aW5kb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogTW9uaXRvcnMgYSB3aW5kb3cgdW50aWwgaXQgbG9hZHMgYSB1cmwgd2l0aCBhIGhhc2hcclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIG1vbml0b3JXaW5kb3dGb3JIYXNoKGNvbnRlbnRXaW5kb3c6IFdpbmRvdywgdGltZW91dDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXhUaWNrcyA9IHRpbWVvdXQgLyBXaW5kb3dVdGlscy5QT0xMSU5HX0lOVEVSVkFMX01TO1xyXG4gICAgICAgICAgICBsZXQgdGlja3MgPSAwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBocmVmO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIFdpbGwgdGhyb3cgaWYgY3Jvc3Mgb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgICAqIHdoaWNoIHNob3VsZCBiZSBjYXVnaHQgYW5kIGlnbm9yZWRcclxuICAgICAgICAgICAgICAgICAgICAgKiBzaW5jZSB3ZSBuZWVkIHRoZSBpbnRlcnZhbCB0byBrZWVwIHJ1bm5pbmcgd2hpbGUgb24gU1RTIFVJLlxyXG4gICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgPSBjb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIERvbid0IHByb2Nlc3MgYmxhbmsgcGFnZXMgb3IgY3Jvc3MgZG9tYWluXHJcbiAgICAgICAgICAgICAgICBpZiAoIWhyZWYgfHwgaHJlZiA9PT0gXCJhYm91dDpibGFua1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgcnVuIGNsb2NrIHdoZW4gd2UgYXJlIG9uIHNhbWUgZG9tYWluXHJcbiAgICAgICAgICAgICAgICB0aWNrcysrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVcmxVdGlscy51cmxDb250YWluc0hhc2goaHJlZikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29udGVudFdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGVudFdpbmRvdy5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGlja3MgPiBtYXhUaWNrcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVUb2tlblJlbmV3YWxUaW1lb3V0RXJyb3IoKSk7IC8vIGJldHRlciBlcnJvcj9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgV2luZG93VXRpbHMuUE9MTElOR19JTlRFUlZBTF9NUyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBMb2FkcyBpZnJhbWUgd2l0aCBhdXRob3JpemF0aW9uIGVuZHBvaW50IFVSTFxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbG9hZEZyYW1lKHVybE5hdmlnYXRlOiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nLCB0aW1lb3V0TXM6IG51bWJlciwgbG9nZ2VyOiBMb2dnZXIpOiBQcm9taXNlPEhUTUxJRnJhbWVFbGVtZW50PiB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBUaGlzIHRyaWNrIG92ZXJjb21lcyBpZnJhbWUgbmF2aWdhdGlvbiBpbiBJRVxyXG4gICAgICAgICAqIElFIGRvZXMgbm90IGxvYWQgdGhlIHBhZ2UgY29uc2lzdGVudGx5IGluIGlmcmFtZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKFwiTG9hZEZyYW1lOiBcIiArIGZyYW1lTmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWVIYW5kbGUgPSBXaW5kb3dVdGlscy5hZGRIaWRkZW5JRnJhbWUoZnJhbWVOYW1lLCBsb2dnZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZnJhbWVIYW5kbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoYFVuYWJsZSB0byBsb2FkIGlmcmFtZSB3aXRoIG5hbWU6ICR7ZnJhbWVOYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWVIYW5kbGUuc3JjID09PSBcIlwiIHx8IGZyYW1lSGFuZGxlLnNyYyA9PT0gXCJhYm91dDpibGFua1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVIYW5kbGUuc3JjID0gdXJsTmF2aWdhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm9QaWkoXCJGcmFtZSBOYW1lIDogXCIgKyBmcmFtZU5hbWUgKyBcIiBOYXZpZ2F0ZWQgdG86IFwiICsgdXJsTmF2aWdhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZnJhbWVIYW5kbGUpO1xyXG4gICAgICAgICAgICB9LCB0aW1lb3V0TXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGhpZGRlblxyXG4gICAgICogQWRkcyB0aGUgaGlkZGVuIGlmcmFtZSBmb3Igc2lsZW50IHRva2VuIHJlbmV3YWwuXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhZGRIaWRkZW5JRnJhbWUoaWZyYW1lSWQ6IHN0cmluZywgbG9nZ2VyOiBMb2dnZXIpOiBIVE1MSUZyYW1lRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpZnJhbWVJZCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvZ2dlci5pbmZvKFwiQWRkIG1zYWwgZnJhbWUgdG8gZG9jdW1lbnQ6XCIgKyBpZnJhbWVJZCk7XHJcbiAgICAgICAgbGV0IGFkYWxGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlmcmFtZUlkKSBhcyBIVE1MSUZyYW1lRWxlbWVudDtcclxuICAgICAgICBpZiAoIWFkYWxGcmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAmJlxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxyXG4gICAgICAgICh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSA1LjBcIikgPT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWZyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZnJhbWVJZCk7XHJcbiAgICAgICAgICAgICAgICBpZnIuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICBpZnIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICBpZnIuc3R5bGUud2lkdGggPSBpZnIuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBpZnIuc3R5bGUuYm9yZGVyID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBpZnIuc2V0QXR0cmlidXRlKFwic2FuZGJveFwiLCBcImFsbG93LXNhbWUtb3JpZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgYWRhbEZyYW1lID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChpZnIpIGFzIEhUTUxJRnJhbWVFbGVtZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5ICYmIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxpZnJhbWUgbmFtZT0nXCIgKyBpZnJhbWVJZCArIFwiJyBpZD0nXCIgKyBpZnJhbWVJZCArIFwiJyBzdHlsZT0nZGlzcGxheTpub25lJz48L2lmcmFtZT5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZnJhbWVzICYmIHdpbmRvdy5mcmFtZXNbaWZyYW1lSWRdKSB7XHJcbiAgICAgICAgICAgICAgICBhZGFsRnJhbWUgPSB3aW5kb3cuZnJhbWVzW2lmcmFtZUlkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFkYWxGcmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIEZpbmQgYW5kIHJldHVybiB0aGUgaWZyYW1lIGVsZW1lbnQgd2l0aCB0aGUgZ2l2ZW4gaGFzaFxyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SWZyYW1lV2l0aEhhc2goaGFzaDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpZnJhbWVcIikpLmZpbmQoaWZyYW1lID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpZnJhbWUuY29udGVudFdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBoYXNoO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBoaWRkZW5cclxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIHRoZSBwb3B1cHMgb3BlbmVkIGJ5IE1TQUxcclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFBvcHVwcygpOiBBcnJheTxXaW5kb3c+IHtcclxuICAgICAgICBpZiAoIXdpbmRvdy5vcGVuZWRXaW5kb3dzKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuZWRXaW5kb3dzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2luZG93Lm9wZW5lZFdpbmRvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBGaW5kIGFuZCByZXR1cm4gdGhlIHBvcHVwIHdpdGggdGhlIGdpdmVuIGhhc2hcclxuICAgICAqIEBpZ25vcmVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFBvcFVwV2l0aEhhc2goaGFzaDogc3RyaW5nKTogV2luZG93IHtcclxuICAgICAgICByZXR1cm4gV2luZG93VXRpbHMuZ2V0UG9wdXBzKCkuZmluZChwb3B1cCA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9wdXAubG9jYXRpb24uaGFzaCA9PT0gaGFzaDtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBBZGQgdGhlIHBvcHVwIHRvIHRoZSBrbm93biBsaXN0IG9mIHBvcHVwc1xyXG4gICAgICogQGlnbm9yZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgdHJhY2tQb3B1cChwb3B1cDogV2luZG93KTogdm9pZCB7XHJcbiAgICAgICAgV2luZG93VXRpbHMuZ2V0UG9wdXBzKCkucHVzaChwb3B1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaGlkZGVuXHJcbiAgICAgKiBDbG9zZSBhbGwgcG9wdXBzXHJcbiAgICAgKiBAaWdub3JlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjbG9zZVBvcHVwcygpOiB2b2lkIHtcclxuICAgICAgICBXaW5kb3dVdGlscy5nZXRQb3B1cHMoKS5mb3JFYWNoKHBvcHVwID0+IHBvcHVwLmNsb3NlKCkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGltZVV0aWxzIHtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aW1lIGluIHNlY29uZHMgZm9yIGV4cGlyYXRpb24gYmFzZWQgb24gc3RyaW5nIHZhbHVlIHBhc3NlZCBpbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZXhwaXJlc0luXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZUV4cGlyZXNJbihleHBpcmVzSW46IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gaWYgQUFEIGRpZCBub3Qgc2VuZCBcImV4cGlyZXNfaW5cIiBwcm9wZXJ0eSwgdXNlIGRlZmF1bHQgZXhwaXJhdGlvbiBvZiAzNTk5IHNlY29uZHMsIGZvciBzb21lIHJlYXNvbiBBQUQgc2VuZHMgMzU5OSBhcyBcImV4cGlyZXNfaW5cIiB2YWx1ZSBpbnN0ZWFkIG9mIDM2MDBcclxuICAgICAgICBpZiAoIWV4cGlyZXNJbikge1xyXG4gICAgICAgICAgICBleHBpcmVzSW4gPSBcIjM1OTlcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGV4cGlyZXNJbiwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIHRoZSBjdXJyZW50IHRpbWUgaW4gVW5peCB0aW1lLiBEYXRlLmdldFRpbWUoKSByZXR1cm5zIGluIG1pbGxpc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG5vdygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMC4wKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBdXRoUmVzcG9uc2UgfSBmcm9tIFwiLi4vQXV0aFJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi4vSWRUb2tlblwiO1xyXG5cclxuLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNlVXRpbHMge1xyXG5cclxuICAgIHN0YXRpYyBzZXRSZXNwb25zZUlkVG9rZW4ob3JpZ2luYWxSZXNwb25zZTogQXV0aFJlc3BvbnNlLCBpZFRva2VuT2JqOiBJZFRva2VuKSA6IEF1dGhSZXNwb25zZSB7XHJcbiAgICAgICAgaWYgKCFvcmlnaW5hbFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWlkVG9rZW5PYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHAgPSBOdW1iZXIoaWRUb2tlbk9iai5leHBpcmF0aW9uKTtcclxuICAgICAgICBpZiAoZXhwICYmICFvcmlnaW5hbFJlc3BvbnNlLmV4cGlyZXNPbikge1xyXG4gICAgICAgICAgICBvcmlnaW5hbFJlc3BvbnNlLmV4cGlyZXNPbiA9IG5ldyBEYXRlKGV4cCAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLm9yaWdpbmFsUmVzcG9uc2UsXHJcbiAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW5PYmosXHJcbiAgICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IGlkVG9rZW5PYmouY2xhaW1zLFxyXG4gICAgICAgICAgICB1bmlxdWVJZDogaWRUb2tlbk9iai5vYmplY3RJZCB8fCBpZFRva2VuT2JqLnN1YmplY3QsXHJcbiAgICAgICAgICAgIHRlbmFudElkOiBpZFRva2VuT2JqLnRlbmFudElkLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuICovXHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuaW1wb3J0IHsgQWFkQXV0aG9yaXR5IH0gZnJvbSBcIi4vQWFkQXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IEIyY0F1dGhvcml0eSB9IGZyb20gXCIuL0IyY0F1dGhvcml0eVwiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHksIEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSB9IGZyb20gXCIuLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVXJsVXRpbHNcIjtcclxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRob3JpdHlGYWN0b3J5IHtcclxuICAgIC8qKlxyXG4gICAgICogUGFyc2UgdGhlIHVybCBhbmQgZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGF1dGhvcml0eVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBEZXRlY3RBdXRob3JpdHlGcm9tVXJsKGF1dGhvcml0eVVybDogc3RyaW5nKTogQXV0aG9yaXR5VHlwZSB7XHJcbiAgICAgICAgYXV0aG9yaXR5VXJsID0gVXJsVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eVVybCk7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFVybFV0aWxzLkdldFVybENvbXBvbmVudHMoYXV0aG9yaXR5VXJsKTtcclxuICAgICAgICBjb25zdCBwYXRoU2VnbWVudHMgPSBjb21wb25lbnRzLlBhdGhTZWdtZW50cztcclxuICAgICAgICBzd2l0Y2ggKHBhdGhTZWdtZW50c1swXSkge1xyXG4gICAgICAgICAgICBjYXNlIFwidGZwXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5CMkM7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGFuIGF1dGhvcml0eSBvYmplY3Qgb2YgdGhlIGNvcnJlY3QgdHlwZSBiYXNlZCBvbiB0aGUgdXJsXHJcbiAgICAgKiBQZXJmb3JtcyBiYXNpYyBhdXRob3JpdHkgdmFsaWRhdGlvbiAtIGNoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBvZiBhIHZhbGlkIHR5cGUgKGVnIGFhZCwgYjJjKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUluc3RhbmNlKGF1dGhvcml0eVVybDogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbik6IEF1dGhvcml0eSB7XHJcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoYXV0aG9yaXR5VXJsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IEF1dGhvcml0eUZhY3RvcnkuRGV0ZWN0QXV0aG9yaXR5RnJvbVVybChhdXRob3JpdHlVcmwpO1xyXG4gICAgICAgIC8vIERlcGVuZGluZyBvbiBhYm92ZSBkZXRlY3Rpb24sIGNyZWF0ZSB0aGUgcmlnaHQgdHlwZS5cclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBdXRob3JpdHlUeXBlLkIyQzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQjJjQXV0aG9yaXR5KGF1dGhvcml0eVVybCwgdmFsaWRhdGVBdXRob3JpdHkpO1xyXG4gICAgICAgICAgICBjYXNlIEF1dGhvcml0eVR5cGUuQWFkOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBYWRBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCB2YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRBdXRob3JpdHlUeXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IFRlbGVtZXRyeUV2ZW50IGZyb20gXCIuL1RlbGVtZXRyeUV2ZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb21wbGV0ZWRFdmVudHMsXHJcbiAgICBFdmVudENvdW50LFxyXG4gICAgRXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZCxcclxuICAgIEluUHJvZ3Jlc3NFdmVudHMsXHJcbiAgICBUZWxlbWV0cnlDb25maWcsXHJcbiAgICBUZWxlbWV0cnlQbGF0Zm9ybSxcclxuICAgIFRlbGVtZXRyeUVtaXR0ZXJcclxufSBmcm9tIFwiLi9UZWxlbWV0cnlUeXBlc1wiO1xyXG5pbXBvcnQgRGVmYXVsdEV2ZW50IGZyb20gXCIuL0RlZmF1bHRFdmVudFwiO1xyXG5cclxuLy8gZm9yIHVzZSBpbiBjYWNoZSBldmVudHNcclxuY29uc3QgTVNBTF9DQUNIRV9FVkVOVF9WQUxVRV9QUkVGSVggPSBcIm1zYWwudG9rZW5cIjtcclxuY29uc3QgTVNBTF9DQUNIRV9FVkVOVF9OQU1FID0gXCJtc2FsLmNhY2hlX2V2ZW50XCI7XHJcblxyXG5jb25zdCBjcmVhdGVFdmVudEtleSA9IChldmVudDogVGVsZW1ldHJ5RXZlbnQpOiBzdHJpbmcgPT4gKFxyXG4gICAgYCR7ZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZH0tJHtldmVudC5ldmVudElkfS0ke2V2ZW50LmV2ZW50TmFtZX1gXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlNYW5hZ2VyIHtcclxuXHJcbiAgICAvLyBjb3JyZWxhdGlvbiBJZCB0byBsaXN0IG9mIGV2ZW50c1xyXG4gICAgcHJpdmF0ZSBjb21wbGV0ZWRFdmVudHM6IENvbXBsZXRlZEV2ZW50cyA9IHt9O1xyXG4gICAgLy8gZXZlbnQga2V5IHRvIGV2ZW50XHJcbiAgICBwcml2YXRlIGluUHJvZ3Jlc3NFdmVudHM6IEluUHJvZ3Jlc3NFdmVudHMgPSB7fTtcclxuICAgIC8vIGNvcnJlbGF0aW9uIGlkIHRvIG1hcCBvZiBldmVudG5hbWUgdG8gY291bnRcclxuICAgIHByaXZhdGUgZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZDogRXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZCA9IHt9O1xyXG5cclxuICAgIC8vIEltcGxlbWVudCBhZnRlciBBUEkgRVZFTlRcclxuICAgIHByaXZhdGUgb25seVNlbmRGYWlsdXJlVGVsZW1ldHJ5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRlbGVtZXRyeVBsYXRmb3JtOiBUZWxlbWV0cnlQbGF0Zm9ybTtcclxuICAgIHByaXZhdGUgY2xpZW50SWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGVsZW1ldHJ5RW1pdHRlcjogVGVsZW1ldHJ5RW1pdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFRlbGVtZXRyeUNvbmZpZywgdGVsZW1ldHJ5RW1pdHRlcjogVGVsZW1ldHJ5RW1pdHRlcikge1xyXG4gICAgICAgIC8vIFRPRE8gVEhST1cgaWYgYmFkIG9wdGlvbnNcclxuICAgICAgICB0aGlzLnRlbGVtZXRyeVBsYXRmb3JtID0gY29uZmlnLnBsYXRmb3JtO1xyXG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBjb25maWcuY2xpZW50SWQ7XHJcbiAgICAgICAgdGhpcy5vbmx5U2VuZEZhaWx1cmVUZWxlbWV0cnkgPSBjb25maWcub25seVNlbmRGYWlsdXJlVGVsZW1ldHJ5O1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogVE9ETywgd2hlbiBpIGdldCB0byB3aXJpbmcgdGhpcyB0aHJvdWdoLCB0aGluayBhYm91dCB3aGF0IGl0IG1lYW5zIGlmXHJcbiAgICAgICAgICogYSBkZXZlbG9wZXIgZG9lcyBub3QgaW1wbGVtZW50IHRlbGVtIGF0IGFsbCwgd2Ugc3RpbGwgaW5zdHJ1bWVudCwgYnV0IHRlbGVtZXRyeUVtaXR0ZXIgY2FuIGJlXHJcbiAgICAgICAgICogb3B0aW9uYWw/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy50ZWxlbWV0cnlFbWl0dGVyID0gdGVsZW1ldHJ5RW1pdHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEV2ZW50KGV2ZW50OiBUZWxlbWV0cnlFdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy50ZWxlbWV0cnlFbWl0dGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBjcmVhdGVFdmVudEtleShldmVudCk7XHJcbiAgICAgICAgdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XSA9IGV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BFdmVudChldmVudDogVGVsZW1ldHJ5RXZlbnQpIHtcclxuICAgICAgICBjb25zdCBldmVudEtleSA9IGNyZWF0ZUV2ZW50S2V5KGV2ZW50KTtcclxuICAgICAgICBpZiAoIXRoaXMudGVsZW1ldHJ5RW1pdHRlciB8fCAhdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3AoKTtcclxuICAgICAgICB0aGlzLmluY3JlbWVudEV2ZW50Q291bnQoZXZlbnQpO1xyXG5cclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRFdmVudHMgPSB0aGlzLmNvbXBsZXRlZEV2ZW50c1tldmVudC50ZWxlbWV0cnlDb3JyZWxhdGlvbklkXTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRFdmVudHNbZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZF0gPSBbLi4uKGNvbXBsZXRlZEV2ZW50cyB8fCBbXSksIGV2ZW50XTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV07XHJcbiAgICB9XHJcblxyXG4gICAgZmx1c2goY29ycmVsYXRpb25JZDogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG9ubHkgdW5maW5pc2hlZCBldmVudHMgc2hvdWxkIHRoaXMgc3RpbGwgcmV0dXJuIHRoZW0/XHJcbiAgICAgICAgaWYgKCF0aGlzLnRlbGVtZXRyeUVtaXR0ZXIgfHwgIXRoaXMuY29tcGxldGVkRXZlbnRzW2NvcnJlbGF0aW9uSWRdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9ycGhhbmVkRXZlbnRzID0gdGhpcy5nZXRPcnBoYW5lZEV2ZW50cyhjb3JyZWxhdGlvbklkKTtcclxuICAgICAgICBvcnBoYW5lZEV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHRoaXMuaW5jcmVtZW50RXZlbnRDb3VudChldmVudCkpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50c1RvRmx1c2g6IEFycmF5PFRlbGVtZXRyeUV2ZW50PiA9IFtcclxuICAgICAgICAgICAgLi4udGhpcy5jb21wbGV0ZWRFdmVudHNbY29ycmVsYXRpb25JZF0sXHJcbiAgICAgICAgICAgIC4uLm9ycGhhbmVkRXZlbnRzXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuY29tcGxldGVkRXZlbnRzW2NvcnJlbGF0aW9uSWRdO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50Q291bnRzVG9GbHVzaDogRXZlbnRDb3VudCA9IHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtjb3JyZWxhdGlvbklkXTtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtjb3JyZWxhdGlvbklkXTtcclxuICAgICAgICAvLyBUT0RPIGFkZCBmdW5jaXRvbmFsaXR5IGZvciBvbmx5Rmx1c2hGYWlsdXJlcyBhZnRlciBpbXBsZW1lbnRpbmcgYXBpIGV2ZW50PyA/P1xyXG5cclxuICAgICAgICBpZiAoIWV2ZW50c1RvRmx1c2ggfHwgIWV2ZW50c1RvRmx1c2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRFdmVudDogRGVmYXVsdEV2ZW50ID0gbmV3IERlZmF1bHRFdmVudChcclxuICAgICAgICAgICAgdGhpcy50ZWxlbWV0cnlQbGF0Zm9ybSxcclxuICAgICAgICAgICAgY29ycmVsYXRpb25JZCxcclxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgZXZlbnRDb3VudHNUb0ZsdXNoXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnRzV2l0aERlZmF1bHRFdmVudCA9IFsgLi4uZXZlbnRzVG9GbHVzaCwgZGVmYXVsdEV2ZW50IF07XHJcblxyXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5RW1pdHRlcihldmVudHNXaXRoRGVmYXVsdEV2ZW50Lm1hcChlID0+IGUuZ2V0KCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluY3JlbWVudEV2ZW50Q291bnQoZXZlbnQ6IFRlbGVtZXRyeUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBUT0RPLCBuYW1lIGNhY2hlIGV2ZW50IGRpZmZlcmVudD9cclxuICAgICAgICAgKiBpZiB0eXBlIGlzIGNhY2hlIGV2ZW50LCBjaGFuZ2UgbmFtZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50TmFtZTtcclxuICAgICAgICBjb25zdCBldmVudENvdW50ID0gdGhpcy5ldmVudENvdW50QnlDb3JyZWxhdGlvbklkW2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWRdO1xyXG4gICAgICAgIGlmICghZXZlbnRDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWRbZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZF0gPSB7XHJcbiAgICAgICAgICAgICAgICBbZXZlbnROYW1lXTogMVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV2ZW50Q291bnRbZXZlbnROYW1lXSA9IGV2ZW50Q291bnRbZXZlbnROYW1lXSA/IGV2ZW50Q291bnRbZXZlbnROYW1lXSArIDEgOiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE9ycGhhbmVkRXZlbnRzKGNvcnJlbGF0aW9uSWQ6IHN0cmluZyk6IEFycmF5PFRlbGVtZXRyeUV2ZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaW5Qcm9ncmVzc0V2ZW50cylcclxuICAgICAgICAgICAgLnJlZHVjZSgobWVtbywgZXZlbnRLZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudEtleS5pbmRleE9mKGNvcnJlbGF0aW9uSWQpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLm1lbW8sIGV2ZW50XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZW1vO1xyXG4gICAgICAgICAgICB9LCBbXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRVZFTlRfTkFNRV9QUkVGSVgsIFRFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTIH0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XHJcbmltcG9ydCBUZWxlbWV0cnlFdmVudCBmcm9tIFwiLi9UZWxlbWV0cnlFdmVudFwiO1xyXG5pbXBvcnQgeyBFdmVudENvdW50LCBUZWxlbWV0cnlQbGF0Zm9ybSB9IGZyb20gXCIuL1RlbGVtZXRyeVR5cGVzXCI7XHJcbmltcG9ydCB7IHByZXBlbmRFdmVudE5hbWVQcmVmaXggfSBmcm9tIFwiLi9UZWxlbWV0cnlVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdEV2ZW50IGV4dGVuZHMgVGVsZW1ldHJ5RXZlbnQge1xyXG4gICAgLy8gVE9ETyBQbGF0Zm9ybSBUeXBlXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybTogVGVsZW1ldHJ5UGxhdGZvcm0sIGNvcnJlbGF0aW9uSWQ6IHN0cmluZywgY2xpZW50SWQ6IHN0cmluZywgZXZlbnRDb3VudDogRXZlbnRDb3VudCkge1xyXG4gICAgICAgIHN1cGVyKHByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJkZWZhdWx0X2V2ZW50XCIpLCBjb3JyZWxhdGlvbklkKTtcclxuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJjbGllbnRfaWRcIildID0gY2xpZW50SWQ7XHJcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwic2RrX3BsYWZvcm1cIildID0gcGxhdGZvcm0uc2RrO1xyXG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcInNka192ZXJzaW9uXCIpXSA9IHBsYXRmb3JtLnNka1ZlcnNpb247XHJcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiYXBwbGljYXRpb25fbmFtZVwiKV0gPSBwbGF0Zm9ybS5hcHBsaWNhdGlvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiYXBwbGljYXRpb25fdmVyc2lvblwiKV0gPSBwbGF0Zm9ybS5hcHBsaWNhdGlvblZlcnNpb247XHJcbiAgICAgICAgdGhpcy5ldmVudFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5VaUV2ZW50Q291bnRUZWxlbWV0cnlCYXRjaEtleX1gXSA9IHRoaXMuZ2V0RXZlbnRDb3VudChwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwidWlfZXZlbnRcIiksIGV2ZW50Q291bnQpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuSHR0cEV2ZW50Q291bnRUZWxlbWV0cnlCYXRjaEtleX1gXSA9IHRoaXMuZ2V0RXZlbnRDb3VudChwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiaHR0cF9ldmVudFwiKSwgZXZlbnRDb3VudCk7XHJcbiAgICAgICAgdGhpcy5ldmVudFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5DYWNoZUV2ZW50Q291bnRDb25zdFN0cktleX1gXSA9IHRoaXMuZ2V0RXZlbnRDb3VudChwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiY2FjaGVfZXZlbnRcIiksIGV2ZW50Q291bnQpO1xyXG4gICAgICAgIC8vIC8gRGV2aWNlIGlkP1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RXZlbnRDb3VudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRDb3VudDogRXZlbnRDb3VudCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFldmVudENvdW50W2V2ZW50TmFtZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBldmVudENvdW50W2V2ZW50TmFtZV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMgfSBmcm9tIFwiLi9UZWxlbWV0cnlDb25zdGFudHNcIjtcclxuaW1wb3J0IHtcclxuICAgIEVWRU5UX05BTUVfS0VZLFxyXG4gICAgU1RBUlRfVElNRV9LRVksXHJcbiAgICBFTEFQU0VEX1RJTUVfS0VZXHJcbn0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHByZXBlbmRFdmVudE5hbWVQcmVmaXggfSBmcm9tIFwiLi9UZWxlbWV0cnlVdGlsc1wiO1xyXG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuLi91dGlscy9DcnlwdG9VdGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZW1ldHJ5RXZlbnQge1xyXG5cclxuICAgIHByaXZhdGUgc3RhcnRUaW1lc3RhbXA6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBldmVudDogYW55OyAvLyBUT0RPIFRZUEUgVEhJU1xyXG4gICAgcHVibGljIGV2ZW50SWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihldmVudE5hbWU6IHN0cmluZywgY29ycmVsYXRpb25JZDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRJZCA9IENyeXB0b1V0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcclxuICAgICAgICB0aGlzLmV2ZW50ID0ge1xyXG4gICAgICAgICAgICBbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFVkVOVF9OQU1FX0tFWSldOiBldmVudE5hbWUsXHJcbiAgICAgICAgICAgIFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFNUQVJUX1RJTUVfS0VZKV06IHRoaXMuc3RhcnRUaW1lc3RhbXAsXHJcbiAgICAgICAgICAgIFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KEVMQVBTRURfVElNRV9LRVkpXTogLTEsXHJcbiAgICAgICAgICAgIFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5Nc2FsQ29ycmVsYXRpb25JZENvbnN0U3RyS2V5fWBdOiBjb3JyZWxhdGlvbklkXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEVsYXBzZWRUaW1lKHRpbWU6IE51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFTEFQU0VEX1RJTUVfS0VZKV0gPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNldCBkdXJhdGlvbiBvZiBldmVudFxyXG4gICAgICAgIHRoaXMuc2V0RWxhcHNlZFRpbWUoK0RhdGUubm93KCkgLSArdGhpcy5zdGFydFRpbWVzdGFtcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0ZWxlbWV0cnlDb3JyZWxhdGlvbklkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHRlbGVtZXRyeUNvcnJlbGF0aW9uSWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZXZlbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFVkVOVF9OQU1FX0tFWSldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoKTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi50aGlzLmV2ZW50LFxyXG4gICAgICAgICAgICBldmVudElkOiB0aGlzLmV2ZW50SWRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=