"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiargs = multiargs;
exports.concatStrings = concatStrings;
function multiargs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a * b; });
}
function concatStrings() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) { return a + b; });
}
multiargs(1, 2, 3, 4, 5); // 120
concatStrings('a', 'b', 'c', 'd', 'e'); // '
