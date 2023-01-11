class Person {
  constructor(firstName, lastName, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
  }
  sayHello() {
    console.info(`Hello ${this.firstName} ${this.lastName} as ${this.job}`);
  }
}

class Manager extends Person {
  basicSalary() {
    console.info("Your Basic Salary = Rp. 4.000.000");
  }
}

const ananta = new Manager("Ananta", "Wijaya", "Student");
ananta.sayHello();
ananta.basicSalary();
