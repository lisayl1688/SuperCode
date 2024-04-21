function berechnung(){
    const alter1 = document.querySelector(".alter1").value
    const alter2 = document.querySelector (".alter2").value
    const differenz = document.querySelector (".output")
    let differenzBerechnung
    if(alter1 > alter2){
        differenzBerechnung = alter1 - alter2;
    }else if (alter2 > alter1){
        differenzBerechnung = alter2 - alter1;
    }

    differenz.innerHTML ="die Differenz ist: " + differenzBerechnung;
}