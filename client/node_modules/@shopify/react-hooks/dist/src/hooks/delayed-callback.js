"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useDelayedCallback(callback, delay) {
    var timeoutRef = react_1.useRef();
    react_1.useEffect(function () {
        return function () {
            if (timeoutRef.current != null) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    function callbackWithDelay() {
        var timeoutId = setTimeout(function () {
            callback();
            timeoutRef.current = undefined;
        }, delay);
        timeoutRef.current = timeoutId;
    }
    return callbackWithDelay;
}
exports.useDelayedCallback = useDelayedCallback;
