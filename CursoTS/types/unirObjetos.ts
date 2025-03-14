function unirObjetos(obj1: object, obj2: object): object {
    return Object.assign({}, obj1, obj2);
}

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = unirObjetos(obj1, obj2);
console.log(obj3); // { a: 1, b: 2 }

function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function soma<T>(...args: T[]): number {
    const retorno = args.reduce((sum, value) => {
        if (isNumber(sum) && isNumber(value)) {
            return sum + value;
        }

        return sum;
    }, 0);

    return retorno;
}
