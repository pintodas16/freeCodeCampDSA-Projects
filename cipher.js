function cipher(str) {
  let flag = 0;
  let finalString = "";
  for (let i = 0; i < str.length; i++) {
    // if the character is empty
    if (str[i] == " ") {
      flag = 1;
    } else {
      let value = str[i].charCodeAt(0); // get the value from a character
      //   if the value is a special character
      if (value < 65) {
        finalString += String.fromCharCode(value);
      } else {
        let decodeValue = value + 13;
        if (decodeValue > 90) {
          decodeValue -= 26;
        }
        let decodedChar = String.fromCharCode(decodeValue); // get the character from the decode value
        if (flag) {
          finalString += " ";
          flag = 0;
        }
        finalString += decodedChar;
      }
    }
  }
  console.log(finalString);
}
cipher("ABZ. AF");
