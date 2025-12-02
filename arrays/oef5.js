const woorden = [
  "mal",
  "snurkduif",
  "bromvlieg",
  "snottebel",
  "knotsgek",
  "pindakaas",
  "fluitketel",
  "smurfenmuts",
];

console.log(woorden.join('-')); 
console.log(woorden.some(w => w.toLowerCase().startsWith('b'))); 
woorden.unshift('Hello'); 
console.log(woorden.every(w => w.length > 2)); 
woorden.sort();
console.log(woorden);
console.log(woorden[2]); 
console.log(woorden.filter(w => w.length > 4));

