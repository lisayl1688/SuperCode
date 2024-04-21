function geburtsjahrBerechnen(){
    const geburtsjahr = document.querySelector(".jahr").value
    const alterBerechnung = 2024 - geburtsjahr;
    const alter = document.querySelector(".output")
    alter.innerHTML = alterBerechnung;
}