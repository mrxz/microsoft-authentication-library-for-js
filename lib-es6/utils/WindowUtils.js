import { ClientAuthError } from "../error/ClientAuthError";
import { UrlUtils } from "./UrlUtils";
var WindowUtils = /** @class */ (function () {
    function WindowUtils() {
    }
    /**
     * @hidden
     * Checks if the current page is running in an iframe.
     * @ignore
     */
    WindowUtils.isInIframe = function () {
        return window.parent !== window;
    };
    /**
     * @hidden
     * Check if the current page is running in a popup.
     * @ignore
     */
    WindowUtils.isInPopup = function () {
        return !!(window.opener && window.opener !== window);
    };
    /**
     * @hidden
     * Monitors a window until it loads a url with a hash
     * @ignore
     */
    WindowUtils.monitorWindowForHash = function (contentWindow, timeout) {
        return new Promise(function (resolve, reject) {
            var maxTicks = timeout / WindowUtils.POLLING_INTERVAL_MS;
            var ticks = 0;
            var intervalId = setInterval(function () {
                var href;
                try {
                    /*
                     * Will throw if cross origin,
                     * which should be caught and ignored
                     * since we need the interval to keep running while on STS UI.
                     */
                    href = contentWindow.location.href;
                }
                catch (e) { }
                // Don't process blank pages or cross domain
                if (!href || href === "about:blank") {
                    return;
                }
                // Only run clock when we are on same domain
                ticks++;
                if (UrlUtils.urlContainsHash(href)) {
                    clearInterval(intervalId);
                    resolve(contentWindow.location.hash);
                }
                else if (contentWindow.closed) {
                    clearInterval(intervalId);
                    resolve();
                }
                else if (ticks > maxTicks) {
                    clearInterval(intervalId);
                    reject(ClientAuthError.createTokenRenewalTimeoutError()); // better error?
                }
            }, WindowUtils.POLLING_INTERVAL_MS);
        });
    };
    /**
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    WindowUtils.loadFrame = function (urlNavigate, frameName, timeoutMs, logger) {
        /*
         * This trick overcomes iframe navigation in IE
         * IE does not load the page consistently in iframe
         */
        logger.info("LoadFrame: " + frameName);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var frameHandle = WindowUtils.addHiddenIFrame(frameName, logger);
                if (!frameHandle) {
                    reject("Unable to load iframe with name: " + frameName);
                    return;
                }
                if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                    frameHandle.src = urlNavigate;
                    logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
                }
                resolve(frameHandle);
            }, timeoutMs);
        });
    };
    /**
     * @hidden
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     */
    WindowUtils.addHiddenIFrame = function (iframeId, logger) {
        if (typeof iframeId === "undefined") {
            return null;
        }
        logger.info("Add msal frame to document:" + iframeId);
        var adalFrame = document.getElementById(iframeId);
        if (!adalFrame) {
            if (document.createElement &&
                document.documentElement &&
                (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                var ifr = document.createElement("iframe");
                ifr.setAttribute("id", iframeId);
                ifr.style.visibility = "hidden";
                ifr.style.position = "absolute";
                ifr.style.width = ifr.style.height = "0";
                ifr.style.border = "0";
                ifr.setAttribute("sandbox", "allow-same-origin");
                adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }
        return adalFrame;
    };
    /**
     * @hidden
     * Find and return the iframe element with the given hash
     * @ignore
     */
    WindowUtils.getIframeWithHash = function (hash) {
        return Array.from(document.getElementsByTagName("iframe")).find(function (iframe) {
            try {
                return iframe.contentWindow.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        });
    };
    /**
     * @hidden
     * Returns an array of all the popups opened by MSAL
     * @ignore
     */
    WindowUtils.getPopups = function () {
        if (!window.openedWindows) {
            window.openedWindows = [];
        }
        return window.openedWindows;
    };
    /**
     * @hidden
     * Find and return the popup with the given hash
     * @ignore
     */
    WindowUtils.getPopUpWithHash = function (hash) {
        return WindowUtils.getPopups().find(function (popup) {
            try {
                return popup.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        });
    };
    /**
     * @hidden
     * Add the popup to the known list of popups
     * @ignore
     */
    WindowUtils.trackPopup = function (popup) {
        WindowUtils.getPopups().push(popup);
    };
    /**
     * @hidden
     * Close all popups
     * @ignore
     */
    WindowUtils.closePopups = function () {
        WindowUtils.getPopups().forEach(function (popup) { return popup.close(); });
    };
    /**
     * @hidden
     * Interval in milliseconds that we poll a window
     * @ignore
     */
    WindowUtils.POLLING_INTERVAL_MS = 50;
    return WindowUtils;
}());
export { WindowUtils };
//# sourceMappingURL=WindowUtils.js.map