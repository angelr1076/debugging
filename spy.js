function encode(word) {
  //somewhere to store the converted characters
let result = [];
  //next we loop over each character in the string.
//use the in word instead of the of term
for (let i in word) {
  //and save the char code to the array
  result.push(word.charCodeAt(i));
}
// and return that list of codes, separated by colon 
  return result.join(':');
}

function decode(hash) {
  //split the code by semicolons!
let arr = hash.split(':');
// again somewhere to put our codes 
let result = [];
//loop over the codes
for (let code of arr){
  //change the code back to the string character equivalent
  result.push(String.fromCharCode(code));
  }
  return result.join('');
}

let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);
