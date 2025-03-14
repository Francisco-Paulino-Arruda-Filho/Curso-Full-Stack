export function multiargs(...args: number[]): number {
  return args.reduce((a, b) => a * b);
}

export function concatStrings(...args: string[]): string{
  return args.reduce((a, b) => a + b);
}

multiargs(1, 2, 3, 4, 5); // 120
console.log(multiargs(1, 2, 3, 4, 5));
concatStrings('a', 'b', 'c', 'd', 'e');
console.log(concatStrings('a', 'b', 'c', 'd', 'e'));
