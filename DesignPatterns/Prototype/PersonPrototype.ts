interface Prototype {
  clone(): Prototype;
}

class Adress implements Prototype{
  private city: string;
  private country: string;
  constructor(city: string, country: string) {
    this.city = city;
    this.country = country;
   }
   getCity() {
    return this.city;
   }
  getCountry() {
    return this.country;
  }
  setCity(city: string) {
    this.city = city;
  }
  setCountry(country: string) {
    this.country = country;
  }
  clone(): Prototype {
    return new Adress(this.city, this.country);
  }
}

class Person1 implements Prototype {
  private firstName: string;
  private lastName: string;
  private age: number;
  private address: Adress;
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = new Adress('New York', 'USA');
  }
  clone(): this {
    const newObj = Object.create(this)
    return newObj;
  }
}

const person1 = new Person1('Francisco', 'Gonzalez', 30);
const person2 = person1.clone();

console.log(person1);
