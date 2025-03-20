interface Car {
  drive(): void;
}

class BMW implements Car {
  drive() {
    console.log("BMW is driving");
  }
}

class Audi implements Car {
  drive() {
    console.log("Audi is driving");
  }
}

class Ferrari implements Car {
  drive() {
    console.log("Ferrari is driving");
  }
}

class Pegout implements Car {
  drive() {
    console.log("Pegout is driving");
  }
}

class Tesla implements Car {
  drive() {
    console.log("Tesla is driving");
  }
}

export {
  Tesla,
  Pegout,
  Ferrari,
  Audi,
  BMW
}
