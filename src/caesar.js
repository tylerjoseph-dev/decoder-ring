const caesarModule = (function () {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  function caesar(input, shift, encode = true) {
    if(shift > 25 || shift < -25 || !shift || typeof(shift) != "number" || typeof(encode) != "boolean") return false; // Catches invalid shift values
    input = input.toLowerCase(); // assigns all input to lowecase to resolve mismatches
    let result = ""; // declaration and initialization of result variable
    if(!encode) shift = -shift; // if not encoding, flips the value of shift
    for(const char in input){ // iterates through input chars and resolves corresponding wrapped or non-wrapped index chars
      const currentChar = input[char];
      const index = alphabet.indexOf(currentChar)
      // calculates array wrapping and grabs the character at the (remaining value) index and adds it. if no character is found, adds the current character;
      alphabet.includes(currentChar) 
      ? shift > 0 
        ? result += alphabet[(index + shift) % 26] 
        : result += alphabet[(index % 26 + 26 + shift) % 26] 
      : result += currentChar;
    }
    return result; // result return
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
