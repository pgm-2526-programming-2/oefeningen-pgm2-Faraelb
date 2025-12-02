const willekeurigeNamenArray = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eva", "Frank"],
  ["Grace", "Hank", "Ivy"],
  ["Jack", "Kelly", "Liam"],
];
console.log(willekeurigeNamenArray);
console.log(willekeurigeNamenArray.flat());
const numbers2D = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(numbers2D.flat().map((n) => n * 2));
willekeurigeNamenArray.forEach((sub) => sub.shift());
console.log(willekeurigeNamenArray);
willekeurigeNamenArray.pop();
console.log(willekeurigeNamenArray);
