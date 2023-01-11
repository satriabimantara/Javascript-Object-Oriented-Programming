/*
Error Handling
- Bisa digunakan dengan Try Catch Finally
- Block finally selalu dieksekusi setelah try catch selesai (entah terjadi error atau tidak)
*/

class MathUtils {
  static sum(...numbers) {
    // cek dulu apakah array number panjangnya 0?
    if (numbers.length === 0) {
      throw new Error("Array numbers must not empty!");
    }
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

// akses method static sum
const numbers = [1, 2, 3, 4, 5];
console.info(MathUtils.sum(...numbers));

// Error Handling example
try {
  console.info(MathUtils.sum());
  console.log("Block Try akan berhenti");
} catch (error) {
  // menampilkan pesan error
  console.log(error.message);
} finally {
  console.log("Finally selalu dieksekusi");
}

console.info("Outside Try Catch Block");
