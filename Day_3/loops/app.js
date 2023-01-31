/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = [];
  const consonants = [];

  for (const char of s) {
    if (/[aeiou]/.test(char)) {
      vowels.push(char);
    } else {
      consonants.push(char);
    }
  }

  console.log(vowels.join("\n"));
  console.log(consonants.join("\n"));
}

vowelsAndConsonants("aamir");
