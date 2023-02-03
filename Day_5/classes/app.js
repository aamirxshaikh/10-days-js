/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

// increment

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter() {
    let perimeter = 0;
    
    this.sides.forEach((side) => {
      perimeter += side;
    });

    return perimeter;
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);

console.log(rectangle.perimeter());
