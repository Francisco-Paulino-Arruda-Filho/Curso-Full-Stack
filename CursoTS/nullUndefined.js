"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = createPerson;
function createPerson(name, age) {
    return {
        name: name,
        age: age,
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = createPerson("Lucas", 30);
console.log(person);
