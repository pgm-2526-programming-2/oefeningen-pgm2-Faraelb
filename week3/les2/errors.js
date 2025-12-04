//throw "Fout!";
const message = new Error("Er ging iets mis!");

//throw message;

try {
  console.log("we voeren code uit!");

  // real-life - zelden gaan we zelf een error throwen, dit komt meestal uit library of ingebouwde js-feauture.

  //bv: item in databank bestaat niet!
  throw new Error("item in databank bestaat niet");
} catch (error) {
  console.log("hier geraken we wanneer er iets mis gaat");
} finally {
  console.log(
    "code die sws moet uitgevoerd worden zelfs als er iets mosgaat, maarook indien niet"
  );
}

// error validatie dus met try, catch en finally
