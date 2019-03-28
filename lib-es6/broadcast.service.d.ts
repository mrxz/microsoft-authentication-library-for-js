import { Subscription, BehaviorSubject, Observable } from 'rxjs';
export declare type MessageCallback = (payload: any) => void;
export declare class BroadcastService {
    private _msalSubject;
    private msalItem$;
    constructor();
    broadcast(type: string, payload: any): void;
    getMSALSubject(): BehaviorSubject<any>;
    getMSALItem(): Observable<any>;
    subscribe(type: string, callback: MessageCallback): Subscription;
}
