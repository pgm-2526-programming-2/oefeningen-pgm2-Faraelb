const originalObject = { name: "Alice" };
const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject); // Output: { name: 'Alice', age: 25 }


function addProperty (object, eig, nieuw) {
    return { ...object,
    [eig]:nieuw,
};
}