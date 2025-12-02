function telArraysOp(a, b) {
  return a.map((v, i) => v + b[i]);
}

console.log(telArraysOp([1, 2, 3], [4, 5, 6]));
