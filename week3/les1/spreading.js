// operators 

// > > , etc.

//spread en rest operator  (lijken op elkr)
// drie puntjes. 

const numbers = [1, 2, 3];
console.log(numbers, ...numbers);  // er wordt een array gelogd + die typeof numbers zal zeggen wat het is. 

//reden om te spreaden ?
//1: kopie maken van een referentie datatype
const students = ["Mert", "Yens"];
const friends = students;  //voeg je iets toe aan freinds ook in students en omgekeerd ook.
students.push("Farah");

//const people: students // nieuwe array zonder de link met friends of students
// maar met de arrays students, dan is people een array me daarin een array.

const people = [...students]; //je steek de waarde uit de oude doos in een neiuwe doos, ze zijn niet meer gelinkt aan elkr
//nieuwe array refernetie kapot

students.push("Milana");
//students = mert, yens, farah en milana.
//friends = mert, yens, farah en milana.
//maar people= mert, yens, farah


//2: om arrays samen te voegen. 

const drinks = ["pintje", "gin", "mocktail"];
const snacks = ["frikandel", "chipjes"];

//manier om deze 2 samen te voegen
const menu = [...drinks,"cola", ...snacks]; // dan krijg je inhoud van de arrays met daar tussen cola 
//dit werkt ook allml met objecten.

const car = {
brand: "citroen",
model:"C8",
year: 2011

}
const upgrade = {
    spoiler: true,
    extra: ["gps", "custom uitlaat"]
}

car.upgrade = upgrade; // dit voegt een key toe
/* const car = {
brand: "citroen",
model:"C8",
year: 2011
upgrade {
  spoiler: true,
    extra: ["gps", "custom uitlaat"]
}}

}*/

//kan ook zo op deze manier beter
const upgradeCar = {
    ...car
    ...upgrade
}

// object keys advanced syntax
const a = "Hello"

const obj = { //altijd key en value nodig object
a
}
// a : a eerste us de key 2de is  de variabelen
// a: "hello"
// korte schrijfwijze van dit is gewoon a 


//3de reden: wnr een methode geen arrrays aanvaardt

Math.max(3,5,7,1,2);
Math.max(...numbers);