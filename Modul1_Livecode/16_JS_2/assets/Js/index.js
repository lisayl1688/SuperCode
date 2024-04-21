// Wiederholung

console.log("es geht");


let userName = "dion"
console.log("name:", userName);

let zahl1 = "5";
console.log({ zahl1 });


let verheiratet = true;

console.log("Paul ist verheiratet:", verheiratet);

console.log(`paul ist verheiratet:${verheiratet}`);

let zahl2 = 5;
let zahl3 = 2;

let produkt = zahl2 * zahl3;


console.log(produkt);


// ! NEUE THEMEN


// ! VERGLEICHEN / COMPARISON


// => == vergleicht die Werte

// => === vergleicht die Werte und Daten Type


console.log(3 == "3"); // true
console.log(3 === "3"); // false


console.log(1 == 1);  // true
console.log(2 == 3); // false
//        false + false => 
console.log(6 == "7"); // false 


// => != nicht gleicher Wert
// => !== sowohl nicht gleicher Wert als auch gleiche daten Type

console.log(3 != 3); // false
console.log(3 !== 3); // false

console.log("3" !== 3); // true


// =>    > größer als
// =>    < kleiner als
// =>    >= größer gleich
// =>    <= kleiner gleich

console.log(3 > 2); // true
console.log(5 < 30); // true


console.log("a" > "A");

console.log("B" > "a");




// # Elemente Selektieren

const firstChild = document.getElementById("mein-erstes-kind-als-Id")

console.log(firstChild);
console.log(firstChild.innerHTML);


const secondChild = document.getElementById("mein-zweites-kind")


secondChild.innerHTML = "lisa frag mich, egal was"


console.log("%c querySelektor", "color: red; background: white");

const thirdChild = document.querySelector(".mein-drittes-kind");
console.log(thirdChild);

const fourthChild = document.querySelector("#mein-viertes-kind")

console.log(fourthChild);



const einPelementOhneIdODerKlasse = document.querySelector("section:nth-of-type(2) p")

console.log(einPelementOhneIdODerKlasse);
// ! "+" hilft uns, das wir den Inhalt nicht mehr überschreiben sondern was dazu hinzufügen können
einPelementOhneIdODerKlasse.innerHTML += " und hallo Christian"



const einListElement = document.querySelector("#listChild")

einListElement.innerHTML = "moin"
einListElement.innerHTML += " Leute"

einListElement.style.color = "red"
einListElement.style.backgroundColor = "pink"
einListElement.style.listStyle = "none"
einListElement.style.border = "1px solid red"


console.log("%c Function", "color:red; background: white");


// ! Function

const einHeadline = document.querySelector("section:nth-of-type(2) h4")

// => {} ist ein scope
function sayHello() {
    einHeadline.innerHTML = "ich bin ein Headline"
}
sayHello()


function logIn(firstName, email) {
    console.log(`Hallo, User ${email}, du bist eingeloggt${firstName}`);
}

logIn("anna", "anna@gmail.de")

logIn("christian", "christian@gmail.com")


function addieren(zahl1, zahl2) {
    const summe = zahl1 + zahl2
    console.log(summe);
    // const ergebnis = document.querySelector("#mein-sixtes-kind")
    // ergebnis.innerHTML = summe
    einHeadline.innerHTML += summe

}


addieren(2, 10)

let unserLetzesKind = document.querySelector("h6")

function halloName() {
    unserLetzesKind.innerHTML = "Hello Lisa, ich hoffe es geht dir gut"
    unserLetzesKind.style.color = "yellow"
    unserLetzesKind.style.fontSize = "2rem"

}



function byeLisa() {
    unserLetzesKind.innerHTML = "Caio"
    unserLetzesKind.style.color = "red"
}