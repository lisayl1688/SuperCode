function differenz(zahl) {
    const diff = zahl - 27
    if (zahl > 27){
        const ergebnis = diff * 2
        console.log(ergebnis);
    }else {
        console.log("zahl ist kleiner als 27");
    }
}


differenz(26);