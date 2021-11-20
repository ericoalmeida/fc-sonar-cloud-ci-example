const sum = (numberOne, numberTwo) => {
  return numberOne + numberTwo
}

const sub = (numberOne, numberTwo) => {
  return numberOne - numberTwo
}

const mult = (numberOne, numberTwo) => {
  return numberOne * numberTwo
}

const div = (numberOne, numberTwo) => {
  return numberOne / numberTwo
}

const mod = (numberOne, numberTwo) => {
  return numberOne % numberTwo
}

const applyDiscount = (amount, percentualDiscount) => {
  return amount - (( amount * percentualDiscount) / 100);
}

module.exports = {
  sum,
  sub,
  mult,
  div,
  mod,
  applyDiscount
}
