function double(){
    const inhalt = document.querySelector(".inhalt").value
    const verdopplung = inhalt * 2
    const ergebnis = document.querySelector(".output")
    ergebnis.innerHTML = verdopplung;
}

