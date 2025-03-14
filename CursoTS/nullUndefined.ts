export function createPerson(name: string, age?: number): Person {
  return {
    name,
    age,
  };
}

class Person {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

export function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const person = createPerson("Lucas", 30);
console.log(person);
