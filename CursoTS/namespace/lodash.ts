import _ from 'lodash';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(_.chunk(arr, 2));
console.log(_.reverse(arr));
console.log(_.without(arr, 1));
console.log(_.shuffle(arr));
console.log(_.last(arr));
console.log(_.sum(arr));
console.log(_.mean(arr));
console.log(_.min(arr));
console.log(_.max(arr));
console.log(_.random(1, 100));


console.log(_.random(1, 100));

declare namespace lodash {
    interface LoDashStatic {
        log(arg: string): void;
    }
}

declare interface NodeTS {
    log(arg: string): void;
}

