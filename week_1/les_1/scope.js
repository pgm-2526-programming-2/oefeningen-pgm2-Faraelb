const message = "hey daar";

function sayHello() {
  const message = "bye";

  const say = function () {
    const newMessage = "yolo";
    console.log(message);
  };
  console.log(newMessage);
  say();
}

sayHello();
console.log(message);
