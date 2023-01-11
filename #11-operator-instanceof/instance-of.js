/*
Operator Instance Of
- Digunakan untuk mengecek apakah suatu objek merupakan instance dari suatu class tertentu atau turunan dari kelas tertentu
- return valuenya true or false
*/

class Employee {}
class Manager {}
class Manager2 extends Employee {}

const budi = new Employee();
const eko = new Manager();
const eko2 = new Manager2();

// true
console.info(budi instanceof Employee);
// false
console.info(budi instanceof Manager);
// true
console.info(eko2 instanceof Manager2);
