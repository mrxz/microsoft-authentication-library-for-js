import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
export class BroadcastService {
    constructor() {
        this._msalSubject = new BehaviorSubject(1);
        this.msalItem$ = this._msalSubject.asObservable();
    }
    broadcast(type, payload) {
        this._msalSubject.next({ type, payload });
    }
    getMSALSubject() {
        return this._msalSubject;
    }
    getMSALItem() {
        return this.msalItem$;
    }
    subscribe(type, callback) {
        return this.msalItem$
            .pipe(filter(message => message.type === type), map(message => message.payload))
            .subscribe(callback);
    }
}
BroadcastService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BroadcastService.ctorParameters = () => [];
//# sourceMappingURL=broadcast.service.js.map