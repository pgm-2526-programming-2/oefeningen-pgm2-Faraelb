let woordenArray = ["appel", "peer", "kiwi", "banaan"];

let langsteWoord = woordenArray.reduce((a, b) => (b.length > a.length ? b : a));

console.log(langsteWoord); // schrijf hier de logica om het langste woord te vinden // geeft 'banaan'
