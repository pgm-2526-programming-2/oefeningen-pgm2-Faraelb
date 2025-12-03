// ophalen van waardes uit een array of object en die opslaan in een variabele. 
//doormiddel van veelcode
const person = ["Farah", "ElBahoui"];
const firstname= person[0];
const lastname= person[1]
// simpeler door gebruik van destructioning

//door aan de linkerzijde vierkante haakjes te gebruiken weten we dat we waardes uit een array gaan destructuren. 
const [firstN, lastN] = ["Farah", "Elbahoui"];

const [firstNm, lastNm] = person; // kan ook zo komt op zelfde neer die person
// ander vb: const [firstNm= "jan" , lastNm, middleNm = "ignace"] = person; 
//console.log(firstNm, middleNm); //geeft weer adriaan igance


const result = ["ignace", "Arif", "Kobe", "Justin"];
const [firstWinner, , thirdWinner]= result; //thirdwinner is arif omdat het hier het 2de eleem,t is

console.log(firstWinner, thirdWinner); // je kan iets overslaan door het leeg te laten 

const songs = [

    {
name: "ophelia",
artist: "Taylor Swift"
    },
    {
        name: "Still DRE",
        artist: "Snoep Dogg"
    }
]

const [, firstTrack, lastTrack] = songs //let op de komma!
console.log(lastTrack); //undefined


//combinatie van de rest operator en destructuring !
//doel: array opsplitsen in eerste element en de rest. 
const [head, ...tail] = [1, 2, 3, 4, 5]  // tail = [2,3, 4, 5]   head= 1

