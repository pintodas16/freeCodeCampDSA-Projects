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

    1.Everytime i check given number is greater then zero or not ,if not then break  out the whileloop,
    other wise go to inside the loop.
    2.then i check the number is greater than or equal 1000 if condition satisfied add 'M' into our
    ans variable and subtract 1000 from num
    3.repeat no. 2 step for rest of all number are given in the problem statement

    900,500,400,100,90,50,40,10,9,5,4,1.

## USA Telephone Number Validator

### In this i have given by a string which contains any combination of characters and specialcharacter .I have to validate wheither this string is valid american phone number or not .

To solve this problem first i have to understand which combination are valid Number. There are some valid number :

      555-555-5555
      (555)555-5555
      (555) 555-5555
      555 555 5555
      5555555555
      1 555 555 5555  //number may contain 1(if contain it must be start with 1) or may not as a country code.

The easiest way to validate a number is using regex that's why i am using regex here,

## Cash Register [problem-link](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register)

### In this problem I have given by the arguments ,the first one is price(perchase price ) , second one is cash and the last one is cid (cash in drawer) which is a 2d array with available currency and i have to return -

    1. if total cid is equal to due (cash - price) then,
        {status:'CLOSE',change:cid}
    2. if total cid is less than to due than i,
        {status:'INSUFFICIENT',change:[]}
    3. if i can give the due amount from cid then ,
        {status:'OPEN',change:changeCoin} here, changeCoin is a 2D Array

### Strategy :

      1. calculate the total amount in my cid
      2. calculate the difference between cash and price
      3. if total === due then our cash is closed
      4. if total is less than due that means our cash has inSufficient balance
      5. now i have to calculate giveMoney , to do that
         loop through the coin array if coin[i] is less than total
         that means this should be given

<!-- #### 1. At first I declear a cashBox which is a 2D Array :

```
const cashBox = [
  ["PENNY", .01],
  ["NICKEL", .05],
  ["DIME", .1],
  ["QUARTER", .25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
]
```

### 2. Then i calculate the difference between cash and price

```
const difference = Number.parseFloat((cash - price)toFixed(2))

```

### 3. I calculate the how much money present in my cid

```
let total = 0;
for(let i =0;i<cid.length; i++){
  total+= (cid[i][1])
}
total = Number.parseFloat(total.toFixed(2))

```

### Now I am good to go to check our problem condition-

### First I am checking between total and due if They are same then :

```
if(total=== difference){
  return({status:'CLOSED',change:cid})
}
```

### If they are not same I mean total is less than due

```
if(total<difference){
    return{status:'INSUFFICIENT_FUNDS',change:[]}
  }
```

### If above two condition are not satisfied now I have to calculate the changedCoin:
 -->
