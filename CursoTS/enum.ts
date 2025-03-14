enum enumerator {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}

console.log(enumerator.Up); // 1
console.log(enumerator.Down); // 2
console.log(enumerator.Left); // 3
console.log(enumerator.Right); // 4
console.log(enumerator[1]); // Up
console.log(enumerator[2]); // Down
console.log(enumerator[3]); // Left
console.log(enumerator[4]); // Right

export function addOrConcat(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") return a + b;
    return `${a}${b}`;
}
