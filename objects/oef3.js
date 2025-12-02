function zijnObjectenIdentiek(obj1, obj2) {
 const list1 = object.keys(obj1);
 const list2 = object.keys(obj2);


  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(zijnObjectenIdentiek(objectA, objectB)); // true