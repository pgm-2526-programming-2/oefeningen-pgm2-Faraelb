let matrix = [
  [Math.random(), Math.random(), Math.random()],
  [Math.random(), Math.random(), Math.random()],
];

console.log(matrix);
function getNumber(row, column) {
  if (matrix[row] && matrix[row][column] !== undefined) {
    console.log(matrix[row][column]);
  } else {
    console.log("Ongeldig");
  }
}

getNumber(0, 3);
getNumber(0, 1);
getNumber(2, 5);
