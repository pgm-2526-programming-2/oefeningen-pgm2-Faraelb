// syntax is ook 3 puntjes ...
//selecteert "de rest"
//vb

function sun(a, b, c, d) {
  return a + b + c + d;
}

console.log(sum(1, 2, 3)); // geen fout melding want c en d wordt gegeven mr niets mee gedn
// dus om dit te vermijde kunnen we rest gebruiken.

function sun(a, b, ...rest) {
  console.log(rest);
  return a + b + rest.reduce((Prev, curr) => prev + curr, 0);
}

//rest operator verzamelt de overige argumenten en slaat deze op in een array
console.log(sum(1, 2, 3));

//rest operator is altijd op het einde en binnen haakjes. 