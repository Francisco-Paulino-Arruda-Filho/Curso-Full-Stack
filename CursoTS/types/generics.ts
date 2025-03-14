
const array: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const arra3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

console.log(array);
console.log(array2);
console.log(arra3);

type FilterCallback<U> = (value: U, index?: number, array?: Array<U>) => boolean;

const meuFilter = <U>(array: Array<U>, callback: FilterCallback<U>): Array<U> => {
    const novoArray: Array<U> = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            novoArray.push(array[i]);
        }
    }

    return novoArray;
}

const arrayFiltrado = meuFilter(array, (item) => item > 5);
console.log(arrayFiltrado);
