"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// Adapted from https://overreacted.io/making-setinterval-declarative-with-react-hooks
// Also available at https://github.com/gaearon/overreacted.io/blob/master/src/pages/making-setinterval-declarative-with-react-hooks/index.md
//
// Copyright (c) 2020 Dan Abramov and the contributors.
//
function useInterval(callback, delay) {
    var savedCallback = react_1.useRef(callback);
    react_1.useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    react_1.useEffect(function () {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
    }, [delay]);
}
exports.useInterval = useInterval;
