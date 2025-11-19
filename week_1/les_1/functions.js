function sum(a, b) {
  return a + b;
}

const name = "adriaan";
const division = () => {};
const multiplier = function () {};

const age = 21;
const students = ["yme", "Arne", "Mert"];
console.log(sum(age, 12));
console.log(20);

function selectRandomStudent(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showMessage() {
  console.log("Answer checker Message");
}

console.log(selectRandomStudent(students));

function checkAnswer(answer, solution, callback) {
  if (answer === solution) {
    callback();
    return true;
  }
  showMessage();
  return false;
}

checkAnswer("ja", "oplossing", showMessage);














