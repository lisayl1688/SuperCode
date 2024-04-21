function adult () {
    const alter = document.getElementById("age").value
    const outPut = document.querySelector(".outPut")
    if(alter >= 18){
        outPut.innerHTML ="Ja, Du kannst Shisha rauchen"
    }else if (alter<18){
        outPut.innerHTML ="Du darfst noch nicht Shisha rauchen"
    }
} 