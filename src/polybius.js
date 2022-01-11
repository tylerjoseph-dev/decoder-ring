const polybiusModule = (function () {
    const pSqr = [
    ["a", "f", "l", "q", "v"],
    ["b", "g","m","r","w"],
    ["c", "h", "n", "s", "x"],
    ["d", "(i/j)", "o", "t", "y"],
    ["e", "k", "p", "u", "z"]
]  
  function polybius(input, encode = true) {
    input = input.toLowerCase();
    if(!encode){ // odd check that removes spaces and divides by two, then converts to string to check for decimal point. returns false if found
      const oddcheck = (input.replace(" ", "").length / 2).toString();
      if(oddcheck.includes(".")) return false;
      
      
      const string = input;
      
      let pairArr = [];
      let result = "";
      // loops through each character in the string
      for(const char in string){
        const currentChar = string[char]; // assigns for readability
        if(pairArr.length < 2 && currentChar != " ") pairArr.push(currentChar); // checks if pair length less than 2 and if the current character is not a space, then pushes
        if(pairArr.length === 2){ // if the pair length is 2, grabs the values of each pair and adds to result. It does this for each pair finding the values
          const x = pairArr[0];
          const y = pairArr[1];
          pairArr = [];
          const val = pSqr[x-1][y-1]; // determines values here
          result += val;
        }
        if(currentChar === " ") result += " "; // appends the space if it is encountered
      }
      return result;
    }
    
    if(encode){ // determines if encoding or not
      let result = "";
      let isSpace;
      for(const char in input){ // loops through the input string
        isSpace = false;
        const currentChar = input[char]; // sets currentChar for readability
        if(currentChar == " "){
          result += currentChar; // adds the current char to result if it is a space, then toggles the flag
          isSpace = true;
        }
        for(let i = 0; i < pSqr.length; i++){ // starts looping through each initial array in the polybius square (top index)
          for(let j = 0; j < pSqr[i].length; j++){ // loops through each subsequential array value in the index (lower index);
            if(pSqr[i][j] == currentChar || (pSqr[i][j]).includes(currentChar) && isSpace == false){ // if the character is found, and it's not a space, pushes the indexes of the character
              result += `${i+1}${j+1}`// appends to the return string
            } ;
          }
        }
      }
      return result;
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
