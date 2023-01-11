function Person(firstName, lastName) {
  // Properti di constructor function menggunakan keyword this
  this.firstName = firstName;
  this.lastName = lastName;

  // Menambahkan method di constructor function
  this.sayHello = function (name) {
    alert(`Halo selamat malam ${name}, selamat beraktivitas!`);
  };
}

// Menambahkan properti ke prototype function
Person.prototype.sayBye = function () {
  console.info("Good Bye");
};
Person.prototype.run = function () {
  console.log(`${this.firstName} is running`);
};

// instansiasi objek
const budi = new Person("Budi", "Naratama");
const eko = new Person("Eko", "Satria");

// mengakses method yang telah didefinisikan di prototype function
budi.sayBye();
eko.run();
