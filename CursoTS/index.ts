const soma = (a: number, b: number) => {
    return a + b;
}

export function multiargs(...args: number[]): number {
  return args.reduce((a, b) => a * b);
}

export function concatStrings(...args: string[]): string{
  return args.reduce((a, b) => a + b);
}

multiargs(1, 2, 3, 4, 5); // 120
concatStrings('a', 'b', 'c', 'd', 'e'); // '

console.log(multiargs(1, 2, 3, 4, 5));
console.log(concatStrings('a', 'b', 'c', 'd', 'e'));

console.log(soma(1, 2));
