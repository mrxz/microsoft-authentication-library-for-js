"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var msal_service_1 = require("./msal.service");
var msal_guard_service_1 = require("./msal-guard.service");
var broadcast_service_1 = require("./broadcast.service");
core_1.Injectable();
var WindowWrapper = /** @class */ (function (_super) {
    __extends(WindowWrapper, _super);
    function WindowWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WindowWrapper;
}(Window));
exports.WindowWrapper = WindowWrapper;
var MsalModule = /** @class */ (function () {
    function MsalModule() {
    }
    MsalModule_1 = MsalModule;
    MsalModule.forRoot = function (config) {
        return {
            ngModule: MsalModule_1,
            providers: [
                { provide: msal_service_1.MSAL_CONFIG, useValue: config }, msal_service_1.MsalService, { provide: WindowWrapper, useValue: window },
            ]
        };
    };
    var MsalModule_1;
    MsalModule = MsalModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [],
            providers: [msal_guard_service_1.MsalGuard, broadcast_service_1.BroadcastService],
        })
    ], MsalModule);
    return MsalModule;
}());
exports.MsalModule = MsalModule;
//# sourceMappingURL=msal.module.js.map