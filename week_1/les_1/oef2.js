//oefening: multiply, division.

function sum(a, b){
    return a + b;
}

function multiply(a, b){
  return a * b;
}

const age1= 35;
console.log(sum(age1,12));


function division(a, b) {
  return a / b;
}

const age2= 21;
console.log(sum(age2, 12));



//oef: functie showCalculation 3 parameters, 2getallen, en een van onze functies

function showCalculations(number1, number2, func) {
    console.log(func(number1, number2))
}

showCalculations(5, 2, multiply);
showCalculations(2, 2, sum);
