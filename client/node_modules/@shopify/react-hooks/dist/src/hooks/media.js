"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
function createUseMediaFactory(useEffectHook) {
    return function (query) {
        var _a = tslib_1.__read(react_1.useState(false), 2), match = _a[0], setMatch = _a[1];
        useEffectHook(function () {
            if (!window || !window.matchMedia) {
                return;
            }
            var matchMedia = window.matchMedia(query);
            var updateMatch = function (event) {
                return setMatch(event.matches);
            };
            setMatch(matchMedia.matches);
            matchMedia.addListener(updateMatch);
            return function () {
                matchMedia.removeListener(updateMatch);
            };
        }, [query]);
        return match;
    };
}
exports.useMedia = createUseMediaFactory(react_1.useEffect);
exports.useMediaLayout = createUseMediaFactory(react_1.useLayoutEffect);
