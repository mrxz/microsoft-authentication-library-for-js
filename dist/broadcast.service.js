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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var BroadcastService = /** @class */ (function () {
    function BroadcastService() {
        this._msalSubject = new rxjs_1.BehaviorSubject(1);
        this.msalItem$ = this._msalSubject; //.asObservable();
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
        return this.msalItem$.pipe(operators_1.filter(function (message) { return message.type === type; }), operators_1.map(function (message) { return message.payload; })).subscribe(callback);
    };
    BroadcastService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], BroadcastService);
    return BroadcastService;
}());
exports.BroadcastService = BroadcastService;
//# sourceMappingURL=broadcast.service.js.map