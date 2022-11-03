"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var DEFAULT_DELAY = 500;
function useDebouncedValue(value, _a) {
    var timeoutMs = (_a === void 0 ? { timeoutMs: DEFAULT_DELAY } : _a).timeoutMs;
    var _b = tslib_1.__read(react_1.useState(value), 2), state = _b[0], setState = _b[1];
    var stateRef = react_1.useRef(state);
    react_1.useEffect(function () {
        if (stateRef.current === value) {
            return;
        }
        var timeout = setTimeout(function () {
            stateRef.current = value;
            setState(value);
        }, timeoutMs);
        return function () {
            clearTimeout(timeout);
        };
    }, [value, timeoutMs]);
    return state;
}
exports.useDebouncedValue = useDebouncedValue;
