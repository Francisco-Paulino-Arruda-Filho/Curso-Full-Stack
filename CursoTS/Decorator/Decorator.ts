export class Animal {
  private name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound() {
        return 'Generic sound';
    }
}

export class Dog extends Animal {
    makeSound() {
        return 'Woof! Woof!';
    }
}

function Decorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        makeSound() {
            return 'Generic sound';
        }

        run() {
            return 'Running';
        }
    }
}

const AnimalDecorator = Decorator(Animal);
console.log(new AnimalDecorator('Rex').makeSound());
console.log(new AnimalDecorator('Rex').run());
//Decorator

