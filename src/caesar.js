// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function caesar(input, shift, encode = true) {
      const message = [];
      //ignore capital letters
      input = input.toLowerCase();
      //shift values that should return false
      if (!shift || shift === 0 || shift < -25 || shift > 25) {
        return false;
      } 
      //error handling
      if (!encode) {
        shift = -shift;
      }
        for (let i = 0; i < input.length; i++) {
        let character = input.charCodeAt(i);
        if (character < 97 || character > 122) {
        message.push(String.fromCharCode(character)) 
        } else {
        //encoding
        character += shift;
        if (character > 96 && character < 123)message.push(String.fromCharCode(character));
        if (character < 97)message.push(String.fromCharCode(123 -(97 - character))); 
        if (character > 122)message.push(String.fromCharCode(96 +(character -122)));
        }
      } //decoding
      return message.join("");
    }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
