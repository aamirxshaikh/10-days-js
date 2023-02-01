/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  let reversed = "";

  try {
    for (let i = s.length - 1; i >= 0; i--) {
      reversed += s.charAt(i);
    }
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(reversed);
  }
}

reverseString("foo");
