// Constructor function diawal huruf kapital
// Mengirimkan parameter di constructor function
function Person(firstName, lastName) {
  // Properti di constructor function menggunakan keyword this
  this.firstName = firstName;
  this.lastName = lastName;

  // Menambahkan method di constructor function
  this.sayHello = function (name) {
    alert(`Halo selamat malam ${name}, selamat beraktivitas!`);
  };
}

// instansiasi objek
// const budi = new Person();
// const eko = new Person();
const budi = new Person("Buda", "Eko");

// mengubah properti dari object yang telah diinstansiasi
budi.firstName = "Budi";
budi.lastName = "Nugraha";
budi.sayHello(firstName + " " + lastName);
