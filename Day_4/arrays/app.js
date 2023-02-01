/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/

function getSecondLargest(nums) {
  // sort the nums array in ascending order
  let unique = Array.from(new Set(nums)).sort((a, b) => b - a);

  // return the second largest number
  return unique[1];
}

console.log(getSecondLargest([1, 2, 333, 45, 889]));
