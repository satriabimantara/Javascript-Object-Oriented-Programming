/*
Static Class Field
- Jika suatu field ditambahkan keyword static didepannya, maka field tersebut bukan lagi milik instance object, melainkan milik dari Class itu sendiri
- Static field bisa diakses dari kelasnya bukan lagi lewat objek
- Static field bersifat global, sehingga bisa diakses dari mana saja dan siapa saja
*/

class Configuration {
  static name = "Software Adaption";
  static version = "1.7.2";
  static author = "Budiman";
}

// instansiasi objek
const config = new Configuration();
// name, version, author tidak melekat di instance objek
console.info(config);

// Mengakses static field
console.info(Configuration.name);
console.info(Configuration.author);
console.info(Configuration.version);

// Mengubah static field
Configuration.name = "B Software";
console.info(Configuration.name);
console.info(Configuration.author);
console.info(Configuration.version);
