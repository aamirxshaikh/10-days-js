function getMaxLessThanK(n, k) {
  let largest = 0;

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let current = i & j;

      if (current > largest && current < k) {
        largest = current;
      }
    }
  }

  return largest;
}

console.log(getMaxLessThanK(8, 3));
