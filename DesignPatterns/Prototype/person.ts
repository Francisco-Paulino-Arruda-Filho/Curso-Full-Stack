const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const clone = { ...person };
console.log(clone); // { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }
const clone2 = Object.create(person);
