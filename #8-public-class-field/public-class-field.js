class Customer {
  //  public class field dibuat diluar dari constructor, field ini bisa diakses secara public
  firstName;
  lastName;
  balance = 0;

  // Mengubah nilai public class field melalui constructor
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const satria = new Customer("Satria", "Bimantara");
console.log(satria);
