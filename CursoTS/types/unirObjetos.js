function unirObjetos(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
var obj1 = { a: 1 };
var obj2 = { b: 2 };
var obj3 = unirObjetos(obj1, obj2);
console.log(obj3); // { a: 1, b: 2 }
