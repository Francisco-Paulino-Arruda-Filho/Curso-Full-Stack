var mapStrings = function (arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
};
var abcMapper = function (str) {
    return str.toUpperCase();
};
console.log(mapStrings(['a', 'b', 'c'], abcMapper)); // [ 'A', 'B', 'C' ]
var toNumber = function (str) {
    return str.length.toString();
};
console.log(mapStrings(['a', 'bb', 'ccc'], toNumber)); // [ '1', '2', '3' ]
