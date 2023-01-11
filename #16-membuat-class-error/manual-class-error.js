/*
Manual Class Error 
- dapat dibuat dengan membuat kelas turunan dari kelas Error
- Wajib mengirimkan message
- Setiap Error Manual harus dibuat secara terpisah satu per satu sesuai jenis errornya
*/

// Membuat kelas Validation Error
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtils {
  static sum(...numbers) {
    // cek dulu apakah array number panjangnya 0?
    if (numbers.length === 0) {
      throw new ValidationError("Array numbers must not empty!", "numbers");
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
  if (error instanceof ValidationError) {
    console.log(
      `Terjadi error di field ${error.field} dengan message ${error.message}`
    );
  } else {
    console.log(error.message);
  }
} finally {
  console.log("Finally selalu dieksekusi");
}

console.info("Outside Try Catch Block");
