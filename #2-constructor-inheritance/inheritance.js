// Create constructor function
function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    alert(`Halo selamat malam ${name}, selamat beraktivitas!`);
  };
}
// Inheritance in Manager Class
function Manager(firstName, lastName) {
  // inheritance using .call
  Employee.call(this, firstName);
  this.lastName = lastName;
}

// instansiasi objek manager yang telah melakukan inheritance
const satria = new Manager("Satria", "Bimantara");
satria.sayHello("Budiman");
