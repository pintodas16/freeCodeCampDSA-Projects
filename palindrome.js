// i have to remove all non-alphanumeric characters

function palindrome(str) {
  str = str.toLowerCase(); // change all the character into small character
  let finalString = "";
  let len = str.length;
  let updatedString = ""; // it would be our string which one contains  all alpha-numeric character
  for (let i = 0; i < len; i++) {
    let charCode = str[i].charCodeAt(0);
    if (
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57)
    ) {
      let char = String.fromCharCode(charCode);
      updatedString += char;
    }
  }

  // now check our sring is palindrome or not

  let left = 0;
  let right = updatedString.length - 1;
  let flag = 0;
  while (left < right) {
    if (updatedString[left] !== updatedString[right]) {
      flag = 1;
      break;
    }
    left += 1;
    right -= 1;
  }
  if (flag) {
    flag = 0;
    return false;
  } else {
    return true;
  }
}
console.log(palindrome("neveroddoreven"));
