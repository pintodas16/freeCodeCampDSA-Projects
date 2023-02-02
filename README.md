# freecodecampDSA-projects (JavaScript Algorithms and Data Structures Projects)

## Palindrome Checker problem

### In this problem i have got a string .

#### solving strategy

First i am eliminteing all the non-alphanumeric character from it after getting this string then i have check this string is palindrome or not

    1. To eliminate all the non-alphanumeric character i am using here two built in method.
       first one is str[i].charCodeAt(0) and the other one is String.fromCharCode(value)


    2. then i check updatedString is palindrome or not . if palindrome then return true
       otherwise return false.

## ceasars cipher problem

### here i got a encoded string .i have to decode this string using ceaser cipher technique

    1.first i convert every char into corresponding ascii value using built
      in function str[i].charCodeAt(0)

    2.i check a empty string are present or not in the given string if present
      then i skip this iteration and track this position and to track this position i on the flag variable

    3. then i care about special character

    4.after that i convert all the corresponding value into a character using
      built in function called String.fromCharCode() and finally i append all the character into a string .

## Roman Numeral Converter

### In this problem i have got a number and i have to convert this number into ruman Numeral(Ex:19-XIX) .

to solve this problem i follow this step:

    1.Everytime i check given number is greater then zero or not ,if not then break   out the whileloop, other wise go to inside the loop
    2.then i check the number is greater than or equal 1000 if condition satisfied add 'M' into our ans variable and subtract 1000 from num
    3.repeat no. 2 step for rest of all number are given in the problem statement
      900,500,400,100,90,50,40,10,9,5,4,1.
