function mainLogic(Callback) {
Callback();
}

function myCallback() {
    console.log("dit is de callback-functie");
}

mainLogic(myCallback);