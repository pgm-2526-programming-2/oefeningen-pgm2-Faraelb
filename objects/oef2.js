const person = {
  name: "Anna",
  age: 25,
  address: {
    street: "Hoofdstraat",
    number: 123,
    city: "Stadsville",
  },
};

console.log(person.address.number);

person.telephone = "0485 55 66 77";

const extraInfo = {
  hobby: "tekenen",
  favoriteColor: "groen",
};

Object.assign(person, extraInfo);
