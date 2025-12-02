const firstName = "jan"; // primitief
const age = 20; //primitief
const isStudent = true; //primitief
const hobbies = ["gaming", "socccer"]; //samengesteld of referentie datatype
const address = [
    street= "New york straat",
    number= 4
] // samengesteld of referentie datatype



let nickname = firstName;
const interests = hobbies; 

const todos = interests;


nickname= "gamerboy";

interests.push("kitesurfen");

console.log(interests, hobbies, todos);


let total = 0;

function addFiveToNumber(a = 0) {
total = a + 5;
    console.log(a * 5);
}

addFiveToNumber(2) 
console.log("totaal", total);



function doubleNumberWithPreference(obj) {
Obj.number =  obj.number * 2;
console.log("binnen ref functie", Obj.number);
}


let orginalNumber = 5;

let orginalNumberWithPreferenceType =  {
    number:5
}
doubleNumber(orginalNumber) {
    doubleNumber(orginalNumberWithPreferenceType) 

console.log("original number uit functie", orginalNumber);
console.log("original number uit functie")
}

