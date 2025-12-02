const willekeurigeGetallen = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 100) + 1
);
console.log(willekeurigeGetallen);

console.log(willekeurigeGetallen.filter((n) => n > 10));
willekeurigeGetallen.pop();
willekeurigeGetallen.shift();
willekeurigeGetallen.push(5);
console.log(willekeurigeGetallen.every((n) => n < 20));
console.log(willekeurigeGetallen.join(" "));
console.log(willekeurigeGetallen.reduce((t, n) => t + n, 0));
console.log(willekeurigeGetallen.map((n) => n * 2));
console.log(willekeurigeGetallen.some((n) => n > 30));
