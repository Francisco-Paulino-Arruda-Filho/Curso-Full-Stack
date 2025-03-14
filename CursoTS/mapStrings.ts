const mapStrings = (arr: string[], fn: (str: string) => string): string[] => {
  const newArr: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
};


const abcMapper = (str: string): string => {
  return str.toUpperCase();
}
console.log(mapStrings(['a', 'b', 'c'], abcMapper)); // [ 'A', 'B', 'C' ]

const toNumber = (str: string): string => {
  return str.length.toString();
}
console.log(mapStrings(['a', 'bb', 'ccc'], toNumber)); // [ '1', '2', '3' ]
