// Constructor inheritance example
class Person {
  constructor(name) {
    this.name = name;
    console.info("This is Person Constructor");
  }
}

// class inheritance
class Manager extends Person {
  constructor(name, role) {
    // Wajib memanggil constructor di kelas parentnya
    super(name);
    this.role = role;
    console.info("This is Manage Constructor");
  }
}

// instansiasi objek kelas
const antoni = new Manager("Satria", "Manager");
