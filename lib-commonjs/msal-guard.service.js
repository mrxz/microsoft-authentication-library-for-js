"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var msal_service_1 = require("./msal.service");
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
        if (!this.authService._oauthData.isAuthenticated && !this.authService._oauthData.userName) {
            if (state.url) {
                if (!this.authService._renewActive && !this.authService.loginInProgress()) {
                    var loginStartPage = this.getBaseUrl() + state.url;
                    if (loginStartPage !== null) {
                        this.authService.getCacheStorage().setItem(msal_1.Constants.angularLoginRequest, loginStartPage);
                    }
                    if (this.config.popUp) {
                        return new Promise(function (resolve, reject) {
                            _this.authService.loginPopup(_this.config.consentScopes, _this.config.extraQueryParameters).then(function (token) {
                                resolve(true);
                            }, function (error) {
                                reject(false);
                            });
                        });
                    }
                    else {
                        this.authService.loginRedirect(this.config.consentScopes, this.config.extraQueryParameters);
                    }
                }
            }
        }
        //token is expired/deleted but userdata still exists in _oauthData object
        else if (!this.authService._oauthData.isAuthenticated && this.authService._oauthData.userName) {
            return new Promise(function (resolve, reject) {
                _this.authService.acquireTokenSilent([_this.config.clientID]).then(function (token) {
                    if (token) {
                        _this.authService._oauthData.isAuthenticated = true;
                        var authenticationResult = new AuthenticationResult_1.AuthenticationResult(token);
                        _this.broadcastService.broadcast("msal:loginSuccess", authenticationResult);
                        resolve(true);
                    }
                }, function (error) {
                    var errorParts = error.split('|');
                    var msalError = new MSALError_1.MSALError(errorParts[0], errorParts[1], "");
                    _this.broadcastService.broadcast("msal:loginFailure", msalError);
                    resolve(false);
                });
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
    MsalGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(0, core_1.Inject(msal_service_1.MSAL_CONFIG)),
        tslib_1.__metadata("design:paramtypes", [msal_config_1.MsalConfig, msal_service_1.MsalService, router_1.Router, router_1.ActivatedRoute, common_1.Location, common_1.PlatformLocation, broadcast_service_1.BroadcastService])
    ], MsalGuard);
    return MsalGuard;
}());
exports.MsalGuard = MsalGuard;
//# sourceMappingURL=msal-guard.service.js.map