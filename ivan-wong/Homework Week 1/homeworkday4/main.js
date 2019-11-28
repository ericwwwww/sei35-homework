console.log("hello")
const square = function(rectangle) {
  if (rectangle.length === rectangle.width) {
    console.log("This is a square")
  } else {
    return "This is not a square"
  }
  console.log("The area of this square is " + (rectangle.length * rectangle.width))
  return "The perimeter of this square is " + (rectangle.length*2 + rectangle.width*2)
};
console.log(square({length: 4, width: 4}))

const triangle = function(sides) {
  if (sides.A === sides.B === sides.C) {
    console.log("This triangle is equilateral")
  } else if (sides.A === sides.B !== sides.C || sides.A === sides.C !== sides.B || sides.C === sides.B !== sides.A) {
    console.log("This triangle is an isosceles triangle")
  }
  console.log("The area of this triangle is " + ((sides.A + sides.B + sides.C)/2))
}
const cartForParty = {
  banana: 1.25,
  handkerchief: .99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};
const cashRegister = function(goods) {
  let total  = 0
  for (var keys in goods) {
    total = total + goods[keys]
  }
  return total
}
console.log(cashRegister(cartForParty));
let not = 0
const bankaccounts = [
  {Owner: "Bob", Balance: 1223},
  {Owner: "Blop", Balance: 1125},
  {Owner: "Alex", Balance: 154},
  {Owner: "Jane", Balance: 2345},
  {Owner: "Mary", Balance: 324},
]
const addaccount = function(Name,Money) {
  bankaccounts.push({Owner: Name, Balance: Money})
}
const totalBal = function(Name) {
  for (i = 0; i < bankaccounts.length; i++) {
    if (bankaccounts[i].Owner === Name) {
      not = 0
      return bankaccounts[i].Balance
    } else {
      not = 1
    }
  }
  if (not === 1) {
    return "Sorry you are not with our bank"
  }
}
let UserID = undefined
const DepoWithBal = function(Name, amount) {
  for (i = 0; i < bankaccounts.length; i++) {
    if (bankaccounts[i].Owner === Name) {
      not = 0
      UserID = i
    }
  }
  if (not === 1) {
    return "Sorry you are not with our bank"
  }
  bankaccounts[UserID].Balance = bankaccounts[UserID].Balance + amount;
  if (bankaccounts[UserID].Balance < 0) {
    return "Insufficient funds"
  }
  return `Your balance is now ` + bankaccounts[UserID].Balance
}

const validateCreditCard = function(creditCard) {
  const valid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const splited = creditCard.split("");
  let digits = 0
  let sum = 0
  let used = []
  for (i = 0; i < splited.length; i++) {
    if (valid.includes(splited[i] === true)) {
      digit = digits + 1;
    } else {
      console.log(splited[i])
    }
    if (valid.includes(splited[i]) === true && used.includes(splited[i] === false)) { //WHYYYYYYYYYY
      used.push(splited[i])
    }
    for (x = 0; x < valid.length; x++) {
      if (splited[x] === splited[i]) {
        sum = sum + x
      }
    }
  }
  console.log(digits)
  console.log(sum)
  if (splited[splited.length - 1] % 2 !== 0) {
    return `error 1` // works
  } else if(digits ==! 16) {
    return `error 2` // doesn't work
  } else if (used.length < 1) {
    return `error 3` // doesn't work
  } else if(sum <= 16) {
    return `error 4` // works
  } else {
    return true
  }
}
