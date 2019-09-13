"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    MsalModule.forRoot = function (config) {
        return {
            ngModule: MsalModule,
            providers: [
                { provide: msal_service_1.MSAL_CONFIG, useValue: config }, msal_service_1.MsalService, { provide: WindowWrapper, useValue: window }
            ]
        };
    };
    MsalModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [],
                    providers: [msal_guard_service_1.MsalGuard, broadcast_service_1.BroadcastService],
                },] },
    ];
    /** @nocollapse */
    MsalModule.ctorParameters = function () { return []; };
    return MsalModule;
}());
exports.MsalModule = MsalModule;
//# sourceMappingURL=msal.module.js.map