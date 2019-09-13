"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var BroadcastService = /** @class */ (function () {
    function BroadcastService() {
        this._msalSubject = new BehaviorSubject_1.BehaviorSubject(1);
        this.msalItem$ = this._msalSubject.asObservable();
    }
    BroadcastService.prototype.broadcast = function (type, payload) {
        this._msalSubject.next({ type: type, payload: payload });
    };
    BroadcastService.prototype.getMSALSubject = function () {
        return this._msalSubject;
    };
    BroadcastService.prototype.getMSALItem = function () {
        return this.msalItem$;
    };
    BroadcastService.prototype.subscribe = function (type, callback) {
        return this.msalItem$
            .filter(function (message) { return message.type === type; })
            .map(function (message) { return message.payload; })
            .subscribe(callback);
    };
    BroadcastService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    BroadcastService.ctorParameters = function () { return []; };
    return BroadcastService;
}());
exports.BroadcastService = BroadcastService;
//# sourceMappingURL=broadcast.service.js.map