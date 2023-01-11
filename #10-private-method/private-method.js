// Private Method dibuat dengan menggunakan tanda '#'

class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    if (this.name) {
      this.#sayWithName(this.name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithoutName() {
    console.info("Hello !");
  }
  #sayWithName() {
    console.info(`Hello ${this.name}!`);
  }
}

const budi = new Person("Budiman");
budi.say();
