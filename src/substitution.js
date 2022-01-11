const substitutionModule = (function () {
 const _alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  function substitution(input, alphabet = [], encode = true) {
    if (!alphabet || alphabet.length !== 26) return false; // Checks to make sure alphabet exists, length is equal to 26
    input = input.toLowerCase(); // lowercases the input
    alphabet = alphabet.toLowerCase(); // lowercases the substitution alphabet
    const subAlphabet = alphabet.split(""); // splits alphabet into indexable array
    const duplicates = subAlphabet.some( (value,index,array) => {
      return array.lastIndexOf(value)!=index; // checks to see if duplicates exist in the substitution alphabet
    });
    if(duplicates) return false; // returns false if duplicates do exist
    
    let result = "" // declaration of result
    for(const char in input){ // loops through each character in the input

      const currentChar = input[char]; //declares current character for readability
      const indexOfChar = encode ? _alphabet.indexOf(currentChar) : alphabet.indexOf(currentChar); // determines the index of the current character via ternary op
      const replaceChar = encode ? alphabet[indexOfChar] : _alphabet[indexOfChar]; // determines the adequate replacement character via ternary op

      encode  // ternary operator determines if encoding or decoding
      ? _alphabet.includes(currentChar) // if encoding and _alphabet includes the current char
        ? result += replaceChar 
        : result += currentChar 
      : (alphabet.indexOf(currentChar) !== -1) // if decoding and index of currentcharacter is not equal to -1 (not found) 
        ? result += replaceChar 
        : result += currentChar; 
    }
    return result; // result return
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
