// Definisi class
class Person {
  // Definisi constructor di class
  constructor(name) {
    // Definisikan properti di dalam constructor
    this.name = name;
  }

  // Defining method in class and automatically added into prototype class
  sayGoodBye() {
    console.info(`Nice to meet you Good Bye ${this.name}`);
  }
}

// Akses prototype dari kelas dengan keyword prototype
Person.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`);
};

const budi = new Person("Budiman Sudiatmika");
budi.sayHello();
budi.sayGoodBye();
