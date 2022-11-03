"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
function useOnValueChange(value, onChange) {
    var tracked = react_1.default.useRef(value);
    react_1.useEffect(function () {
        var oldValue = tracked.current;
        if (value !== tracked.current) {
            tracked.current = value;
            onChange(value, oldValue);
        }
    }, [value, onChange]);
}
exports.useOnValueChange = useOnValueChange;
