function weather() {
    const wetter = document.getElementById("wetterRange").value
    const output = document.querySelector(".outPut")

    if(wetter >= 8 &&  wetter<=10){
        output.innerHTML = "super"
    }else if(wetter>=6 && wetter<=7){
        output.innerHTML = "gut"
    }else if(wetter>=3 && wetter<=5){
        output.innerHTML = "okay"
    }else if(wetter>=6 && wetter<=7){
        output.innerHTML = "schlecht"
    }
}


