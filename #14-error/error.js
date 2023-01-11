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
// trigger error
// console.info(MathUtils.sum());
