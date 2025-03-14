var enumerator;
(function (enumerator) {
    enumerator[enumerator["Up"] = 1] = "Up";
    enumerator[enumerator["Down"] = 2] = "Down";
    enumerator[enumerator["Left"] = 3] = "Left";
    enumerator[enumerator["Right"] = 4] = "Right";
})(enumerator || (enumerator = {}));
console.log(enumerator.Up); // 1
console.log(enumerator.Down); // 2
console.log(enumerator.Left); // 3
console.log(enumerator.Right); // 4
console.log(enumerator[1]); // Up
console.log(enumerator[2]); // Down
console.log(enumerator[3]); // Left
console.log(enumerator[4]); // Right
