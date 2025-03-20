function Person(firstName: string, age: number, lastName) {
    return {
      name: firstName,
      age: age,
      fullName: firstName + ' ' + lastName,
    }
}

const personProtype = {
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

function subPerson(firstName: string, age: number, lastName) {
    Person.call(this, firstName, age, lastName);
}

console.log(personProtype); // { name: 'John', age: 30, fullName: 'John Doe' }

Person.prototype = Object.create(personProtype)
