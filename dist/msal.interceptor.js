"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var msal_service_1 = require("./msal.service");
var broadcast_service_1 = require("./broadcast.service");
var MSALError_1 = require("./MSALError");
var MsalInterceptor = /** @class */ (function () {
    function MsalInterceptor(auth, broadcastService) {
        this.auth = auth;
        this.broadcastService = broadcastService;
    }
    MsalInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var scopes = this.auth.getScopesForEndpoint(req.url);
        this.auth.verbose("Url: " + req.url + " maps to scopes: " + scopes);
        if (scopes === null) {
            return next.handle(req);
        }
        var tokenStored = this.auth.getCachedTokenInternal(scopes);
        if (tokenStored && tokenStored.token) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + tokenStored.token,
                }
            });
            return next.handle(req).pipe(operators_1.tap({ error: function (err) {
                    if (err instanceof http_1.HttpErrorResponse && err.status === 401) {
                        var scopes = _this.auth.getScopesForEndpoint(req.url);
                        var tokenStored = _this.auth.getCachedTokenInternal(scopes);
                        if (tokenStored && tokenStored.token) {
                            _this.auth.clearCacheForScope(tokenStored.token);
                        }
                        var msalError = new MSALError_1.MSALError(JSON.stringify(err), "", JSON.stringify(scopes));
                        _this.broadcastService.broadcast("msal:notAuthorized", msalError);
                    }
                } }));
        }
        else {
            return rxjs_1.from(this.auth.acquireTokenSilent(scopes).then(function (token) {
                var JWT = "Bearer " + token;
                return req.clone({
                    setHeaders: {
                        Authorization: JWT,
                    },
                });
            })).pipe(operators_1.mergeMap(function (req) { return next.handle(req); }), operators_1.tap({ error: function (err) {
                    if (err instanceof http_1.HttpErrorResponse && err.status === 401) {
                        var scopes = _this.auth.getScopesForEndpoint(req.url);
                        var tokenStored = _this.auth.getCachedTokenInternal(scopes);
                        if (tokenStored && tokenStored.token) {
                            _this.auth.clearCacheForScope(tokenStored.token);
                        }
                        var msalError = new MSALError_1.MSALError(JSON.stringify(err), "", JSON.stringify(scopes));
                        _this.broadcastService.broadcast("msal:notAuthorized", msalError);
                    }
                } })); //calling next.handle means we are passing control to next interceptor in chain
        }
    };
    MsalInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [msal_service_1.MsalService, broadcast_service_1.BroadcastService])
    ], MsalInterceptor);
    return MsalInterceptor;
}());
exports.MsalInterceptor = MsalInterceptor;
//# sourceMappingURL=msal.interceptor.js.map