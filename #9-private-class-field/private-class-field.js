class Counter {
  /*
    Private Class Field
    - Dengan menambahkan tanda '#' di field tersebut
    */
  //  private class field tidak bisa diakses dari luar kelas
  #counter = 0;

  increment() {
    this.#counter++;
  }
  decrement() {
    this.#counter--;
  }
  get() {
    return this.#counter;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.info(counter.get());
