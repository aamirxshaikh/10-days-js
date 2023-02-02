/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */

// using count

function getCount(objects) {
  let count = 0;

  for (let object in objects) {
    if (objects[object].x === objects[object].y) {
      count++;
    }
  }

  return count;
}

let objects = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];

console.log(getCount(objects));
