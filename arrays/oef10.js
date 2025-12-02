function filterEvenGetallen(getallen) {
  // Implementeer de logica hier
  return getallen.filter(n => n % 2 === 0);
}

let willekeurigeGetallen = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(willekeurigeGetallen);
console.log(evenGetallen); // geeft [8, 6, 10]