"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useTimeout(callback, delay) {
    var savedCallback = react_1.useRef(callback);
    react_1.useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    react_1.useEffect(function () {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            var id_1 = setTimeout(tick, delay);
            return function () { return clearTimeout(id_1); };
        }
    }, [delay]);
}
exports.useTimeout = useTimeout;
