function getLetter(s) {
  // Write your code here.

  const char = s.charAt(0);

  if (/[aeiou]/.test(char)) return "A";
  if (/[bcdfg]/.test(char)) return "B";
  if (/[hjklm]/.test(char)) return "C";
  
  return "D";
}

console.log(getLetter("aamir"));
