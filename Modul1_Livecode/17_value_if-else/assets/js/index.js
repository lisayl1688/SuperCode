// # Wiederholung
// * Counter -> functions und innerHTML

let outputVal = 0;
const outputCalc = document.querySelector(".output-calc");
//console.log(outputCalc);

function superFunc(operator) {
  outputVal = outputVal + operator;

  outputCalc.innerHTML = outputVal;
}

function malZwei() {
  outputVal = outputVal * 2;

  outputCalc.innerHTML = outputVal;
}

function reset() {
  outputVal = 0;
  outputCalc.innerHTML = outputVal;
}

// * Funktion ein Argument uebergeben
// ? Parameter = Platzhalter bei der Definition der Funktion
// ? Argument = der Wert der an die Funktion uebergeben wird, wenn sie aufgerufen wird
//% man merke: man vergibt erst den Parameter und das Argument kommt speater

function sayHi(name) {
  const outputDiv = document.querySelector(".btn-output");
  outputDiv.innerHTML = `Hallo ${name}`;
}

//! NEUE THEMEN
// # Value auslesen

function getInputValue() {
  const output = document.querySelector(".form-output"); // greifen auf das p tag zu (Klasse "form-output")

  let name = document.querySelector(".name").value; //wir greifen auf den Wert vom inputfeld mit der Klasse "name" zu

  let age = Number(document.querySelector(".number").value);
  //% Funktion Number() konvertiert beliebige Werte in numerische Werte

  //   console.log({ name }, { age });

  let range = Number(document.querySelector(".range").value);

  let checkbox = document.querySelector(".checkbox").checked; // checked fragt ab ob die checkbox angewaehlt ist => ich bekomme true oder false zurueck

  let date = document.querySelector(".bday").value;

  //console.log({ name }, { age }, { range }, { checkbox }, { date });

  output.innerHTML = `${name}, ${age}, ${range}, happy: ${checkbox}, ${date}`;

  //output.innerHTML = name + " " + age + " " + range + " happy: " + checkbox + " " + date;
}

//# Conditional Statement if / else
//? if /else fuehrt Anweisungen nur aus wenn eine Bedingung wahr ist, der optionale else-Zweig wird ausgefuehrt wenn die Bedingung nicht wahr ist (die wir im if abgefragt haben)

let age = 10;

if (age >= 18) {
  console.log("du bist volljaehrig");
} else if (age <= 17 && age >= 14) {
  console.log("Du bist 14 bis 17 Jahre alt");
} else {
  console.log("du bist minerjaehrig");
}

//? wir koennen unendlich viele else if bedinungen abfragen
//% && fuegt eine und-Bedingung hinzu => man verknuepft zwei oder mehrere Bedinungen durch "und" => beide bzw alle Bedinungen muessen erfuellt sein , dass die gesamte Bedingung erfuellt ist

// % || fuegt eine bedingung oder hinzu => man verknuepft zwei oder mehrerer Bedingungen durch "oder" => es gnuegt wenn eine der Beingungen erfuellt ist, damit die gesamte Bedingung erfuellt ist

//# Login
let username = "lisa";
let password = "supercode";

function checkUserData() {
  const loginUserName = document.querySelector("#username").value;
  const loginUserPw = document.querySelector("#password").value;

  const outputLogin = document.querySelector("#login-feedback");

  if (username === loginUserName && password === loginUserPw) {
    outputLogin.innerHTML = "<p class='green'>Login war erfolgreich</p>";
  } else {
    outputLogin.innerHTML = "<p class='red'>Login war nicht erfolgreich</p>";
  }
}