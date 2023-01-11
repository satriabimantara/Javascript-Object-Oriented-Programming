class Shape {
  paint() {
    console.info("Paint in Shape Class");
  }
}

class Circle extends Shape {
  paint() {
    // akses method paint dan Shape dengan super
    super.paint();
    console.info("Paint in Circle Class");
  }
}

const ex_circle = new Circle();
ex_circle.paint();
