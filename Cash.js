function checkCashRegister(price, cash, cid) {
  const cashBox = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  // calculate the difference between cash and price
  const difference = Number.parseFloat((cash - price).toFixed(2));
  // calculate the total money in cid
  let total = 0;
  for (let i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }

  total = Number.parseFloat(total.toFixed(2));
  // console.log(total,difference)

  // console.log(typeof total, typeof difference)
  // total === difference that means cid should closed
  if (total === difference) {
    return { status: "CLOSED", change: cid };
  } else {
    // here check total < difference that means cid had not enough money to give the customer
    if (total < difference) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      // now I have to calculate change coin to give it to customer
      const giveChange = [];
      let flag = 0;
      let number = difference; // to store difference value in new number variable
      // loop through our coin box
      for (let i = cashBox.length - 1; i >= 0; i--) {
        // console.log(number)
        // if number > cashBox that this maybe changeable
        if (number > cashBox[i][1]) {
          if (number === 0) {
            break;
          } else {
            if (cid[i][1] > number) {
              let ans = Number.parseInt(number / cashBox[i][1]);
              number = (number - ans * cashBox[i][1]).toFixed(2);
              // console.log(number)
              giveChange.push([cashBox[i][0], ans * cashBox[i][1]]);
            } else {
              if (cid[i][1] >= cashBox[i][1]) {
                number -= cid[i][1];
                giveChange.push([cashBox[i][0], cid[i][1]]);
              } else {
                // console.log('hello')
                // if this block of code execute that means cid have not this coin to give it to customer
                flag = 1;
                break;
              }
            }

            // console.log(number)
          }
        }
      }

      if (flag) {
        console.log("hello");
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else {
        return { status: "OPEN", change: giveChange };
      }
    }
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
