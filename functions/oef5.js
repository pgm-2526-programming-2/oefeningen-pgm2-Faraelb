function checkAge(age) {
  if (age > 18) {
    return true;
  }
return false;
  return confirm("Did parents allow you?");
}

console.log(controlAge(16));
console.log(controlAge(21));