/* 
Static Method
- Mirip seperti static field
- Method nantinya melekat ke class dan bukan instance dari objek
*/

class MathUtils {
  static sum(...numbers) {
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
