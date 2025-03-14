const tuple: [number, string] = [1, 'one'];
const tuple3: [number, string, boolean] = [1, 'one', true];

console.log(tuple3[0]); // 1
console.log(tuple3[1]); // one
console.log(tuple3[2]); // true
tuple3.pop();
console.log(tuple3[2]); // undefined

console.log(tuple[0]); // 1
console.log(tuple[1]); // one

tuple[0] = 2;
tuple[1] = 'two';

console.log(tuple[0]); // 2
console.log(tuple[1]); // two
