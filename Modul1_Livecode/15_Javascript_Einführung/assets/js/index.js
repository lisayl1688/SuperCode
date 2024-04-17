console.log("Mein Datei ist eingebunden");

const trainerName = "Elisa";
console.log("trainerName :", trainerName);


let score = 0;
score =1;
console.log("score vom Fussballspiel" ,score)
console.log({score});

let alter = 20;
console.log(alter);

const teilNehmername = "dion";
console.log({teilNehmername});

let RealMadridScore = 0;
let BarcelonaScore = 0;

RealMadridScore = 2;
BarcelonaScore = 1;
const gesamtScore =RealMadridScore + BarcelonaScore
console.log("gesamtScore ist :" , gesamtScore);


console.log("Ich bin ein string");

console.log("NUMBERS");
console.log(10);
console.log(15);
console.log(10 + 12);

console.log("10" + "12");


console.log("vier" *  4);
console.log("vier" -  4);
console.log("vier" /  4);

console.log("das ist ein Boolean Wert",true);
console.log(false);

//! wie deklariere ich meine Variablen?( die linke seite! die rechte ist egal)

//* nicht zu kurz
//zb: let meineFunction= "function";

//* nicht zu lang
//zb: let lassUnsZusammenHeuteSpielenGucken = "nein, keinbcok";

//* eine variable nicht mit zahlen anfangen
// let 2pac ="rapper";

//* nicht mit Sonderzeichen anfangen
// let $meinGeld/@meinGmail ="hier kommt der wert als mail";

//* was ich machen muss!
//* camelCase
let meineErsteVariable = "hallo";
let myFirstWariable = "blblabla";

//* underScoure
let my_first_variable = "Mittwoch";

//! was ÜBERHAUPT nicht geht!
//! leerzeichen gehen nicht!!!
//!let gesamt note = 20

//! case Sensitive
let a = 10;
console.log(a);
let A = 100;
console.log(A);


//String Concatination

const firstName = "Christian"
const nachName = "Scholtysik"
const stadt = "berlin"

//! das ist alt
console.log("ich bin", firstName, nachName, "ich komme aus" , stadt);
console.log("ich bin" + firstName + nachName + "ich komme aus" + stadt);


//!template string
console.log(`ich bin ${firstName} ${nachName} und ich wohne in ${stadt}`);


//! aritmetische operatoren
let zahl1 = 5;
let zahl2 = 3;
let zahl3 = 20;

//addieren
console.log(zahl1 + zahl2 + zahl3);
//subtrahieren
console.log(zahl3 - zahl2);
//dividieren
console.log(zahl3 / zahl1);
//multiplizieren
console.log(zahl1 * zahl2);

//modulo ==> gibtn uns restwert
console.log(zahl3 % zahl1);
console.log(5 % 2);

let zahl5 = 30;
console.log(zahl5);
zahl5++
zahl5++
console.log(zahl5);

let zahl6 = 20;
zahl6--
zahl6--
zahl6--
zahl6--
zahl6--
console.log(zahl6);


//!Output
console.log("====output====");

document.write ("Guten Morgen")
document.write ("<h2> ich bin eine Headline</h2>")

//!window.alert
//window.alert ("VIRUS");

//!Input
//*window.prompt()
//let sayYourName = window.prompt("wie heißt du??")
//console.log(sayYourName);

//*window.confirm
//let confirmAlter = window.confirm ("bist du 18 jahre alt?")
//console.log(confirmAlter);


