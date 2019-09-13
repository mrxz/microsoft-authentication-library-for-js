import { Logger } from "../Logger";
export declare class WindowUtils {
    /**
     * @hidden
     * Interval in milliseconds that we poll a window
     * @ignore
     */
    private static POLLING_INTERVAL_MS;
    /**
     * @hidden
     * Checks if the current page is running in an iframe.
     * @ignore
     */
    static isInIframe(): boolean;
    /**
     * @hidden
     * Check if the current page is running in a popup.
     * @ignore
     */
    static isInPopup(): boolean;
    /**
     * @hidden
     * Monitors a window until it loads a url with a hash
     * @ignore
     */
    static monitorWindowForHash(contentWindow: Window, timeout: number): Promise<string>;
    /**
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    static loadFrame(urlNavigate: string, frameName: string, timeoutMs: number, logger: Logger): Promise<HTMLIFrameElement>;
    /**
     * @hidden
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     */
    static addHiddenIFrame(iframeId: string, logger: Logger): HTMLIFrameElement;
    /**
     * @hidden
     * Find and return the iframe element with the given hash
     * @ignore
     */
    static getIframeWithHash(hash: string): HTMLIFrameElement;
    /**
     * @hidden
     * Returns an array of all the popups opened by MSAL
     * @ignore
     */
    static getPopups(): Array<Window>;
    /**
     * @hidden
     * Find and return the popup with the given hash
     * @ignore
     */
    static getPopUpWithHash(hash: string): Window;
    /**
     * @hidden
     * Add the popup to the known list of popups
     * @ignore
     */
    static trackPopup(popup: Window): void;
    /**
     * @hidden
     * Close all popups
     * @ignore
     */
    static closePopups(): void;
}
