"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var msal_service_1 = require("./msal.service");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/pairwise");
var common_1 = require("@angular/common");
var msal_config_1 = require("./msal-config");
var broadcast_service_1 = require("./broadcast.service");
var msal_1 = require("msal");
var MSALError_1 = require("./MSALError");
var AuthenticationResult_1 = require("./AuthenticationResult");
var MsalGuard = /** @class */ (function () {
    function MsalGuard(config, authService, router, activatedRoute, location, platformLocation, broadcastService) {
        this.config = config;
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.platformLocation = platformLocation;
        this.broadcastService = broadcastService;
        this.isEmpty = function (str) {
            return (typeof str === "undefined" || !str || 0 === str.length);
        };
    }
    MsalGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        this.authService.getLogger().verbose("location change event from old url to new url");
        this.authService.updateDataFromCache([this.config.clientID]);
        if (!this.authService._oauthData.isAuthenticated && this.isObjectEmpty(this.authService._oauthData.idToken)) {
            if (state.url) {
                if (!this.authService._renewActive && !this.authService.loginInProgress()) {
                    var loginStartPage = this.getBaseUrl() + state.url;
                    if (loginStartPage !== null) {
                        this.authService.getCacheStorage().setItem(msal_1.Constants.angularLoginRequest, loginStartPage);
                    }
                    if (this.config.popUp) {
                        return this.authService.loginPopup(this.config.consentScopes, this.config.extraQueryParameters)
                            .then(function (token) {
                            return true;
                        }, function (error) {
                            return false;
                        });
                    }
                    else {
                        this.authService.loginRedirect(this.config.consentScopes, this.config.extraQueryParameters);
                    }
                }
            }
        }
        //token is expired/deleted but userdata still exists in _oauthData object
        else if (!this.authService._oauthData.isAuthenticated && !this.isObjectEmpty(this.authService._oauthData.idToken)) {
            return this.authService.acquireTokenSilent([this.config.clientID])
                .then(function (token) {
                if (token) {
                    _this.authService._oauthData.isAuthenticated = true;
                    var authenticationResult = new AuthenticationResult_1.AuthenticationResult(token);
                    _this.broadcastService.broadcast("msal:loginSuccess", authenticationResult);
                    return true;
                }
            }, function (error) {
                var errorParts = error.split('|');
                var msalError = new MSALError_1.MSALError(errorParts[0], errorParts[1], "");
                _this.broadcastService.broadcast("msal:loginFailure", msalError);
                return false;
            });
        }
        else {
            return true;
        }
    };
    MsalGuard.prototype.getBaseUrl = function () {
        var currentAbsoluteUrl = window.location.href;
        var currentRelativeUrl = this.location.path();
        if (this.isEmpty(currentRelativeUrl)) {
            if (currentAbsoluteUrl.endsWith("/")) {
                currentAbsoluteUrl = currentAbsoluteUrl.replace(/\/$/, '');
            }
            return currentAbsoluteUrl;
        }
        else {
            var index = currentAbsoluteUrl.indexOf(currentRelativeUrl);
            return currentAbsoluteUrl.substring(0, index);
        }
    };
    MsalGuard.prototype.isObjectEmpty = function (obj) {
        return Object.keys(obj).length === 0;
    };
    ;
    MsalGuard.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    MsalGuard.ctorParameters = function () { return [
        { type: msal_config_1.MsalConfig, decorators: [{ type: core_1.Inject, args: [msal_service_1.MSAL_CONFIG,] },] },
        { type: msal_service_1.MsalService, },
        { type: router_1.Router, },
        { type: router_1.ActivatedRoute, },
        { type: common_1.Location, },
        { type: common_1.PlatformLocation, },
        { type: broadcast_service_1.BroadcastService, },
    ]; };
    return MsalGuard;
}());
exports.MsalGuard = MsalGuard;
//# sourceMappingURL=msal-guard.service.js.map