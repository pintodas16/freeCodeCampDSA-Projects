# freeCodeCampDSA-Projects (JavaScript Algorithms and Data Structures Projects)

## Palindrome Checker problem

### In this problem i have got a string .

#### solving strategy

First i am eliminteing all the non-alphanumeric character from it after getting this string then i have check this string is palindrome or not

    1. To eliminate all the non-alphanumeric character i am using here two built in method. first one is str[i].charCodeAt(0) and the
       other one is String.fromCharCode(value)

    2. then i check updatedString is palindrome or not . if palindrome then return true otherwise return false

## ceasars cipher problem

### here i got a encoded string .i have to decode this string using ceaser cipher technique

    1.first i convert every char into corresponding ascii value using built
      in function str[i].charCodeAt(0)

    2.i check a empty string are present or not in the given string if present
      then i skip this iteration and track this position and to track this position i on the flag variable

    3. then i care about special character

    4.after that i convert all the corresponding value into a character using
      built in function called String.fromCharCode() and finally i append all the character into a string .
