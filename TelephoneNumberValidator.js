// to validate american phone number
function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str); // it will return true if regex exact match in str otherwise false
}

telephoneCheck("555-555-5555"); //it will return true
telephoneCheck("1 5555555555"); //it will return true
telephoneCheck("(555-555-5555"); // it will return false
