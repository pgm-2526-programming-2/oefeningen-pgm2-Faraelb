const person = {
  firstNAme: "Farah",
  lastName: "Elbahoui",
  age: 22,
};

const myFirstnNme = person.firstname; //belletje/ varaiabele naam zelfde als keynaam.
const myLastName = person.lastName;
const myAge = person.age;

const { firstName, lastName, age } = person;

// verschil tussen array en object obstructering
//object is op basis van een key en niet de index zoals bij een array, dus de volgorde maakt niet uit. (itt array destructurering)
const { firstName, age } = person;
console.log(age, gender); // gender hier is undefined.

const { firstName, age, gender = "Male" } = person;
console.log(age, gender); // undefined (male wnr default waarde)
// nadeel van object restructering , zelfde naam als key in object. !

const options = {
  c: 20000,
  w: 3000,
  mod: "C8",
};
const {c, w, nod } = options; //volgorde maakt niety uit , maar lees niet amkkelijk dus ka e volgen de doen
const {w: weight, mod:model, c:cost} = options;
//nieuwe varaibele name. 

const {w:altWeight, ...rest } = options; //rest = een object met alle andere keyvalues




const song = {
name: "flowers",
artist: "miley "

}

const info = {
    name: "7 things"
}

function editSong(s, (name)) {  is object

s.name = name;
}

editsSong(song, edit);