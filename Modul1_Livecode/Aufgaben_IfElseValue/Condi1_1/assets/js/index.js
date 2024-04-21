function adult () {
    const alter = document.getElementById("age").value
    const outPut = document.querySelector(".outPut")
    if(alter >= 18){
        outPut.innerHTML ="true-volljährig"
    }else if (alter<18){
        outPut.innerHTML ="false-minderjährig"
    }
} 