function checkAirQuality() {
    const luft = document.getElementById("airQuality").value
    const output = document.querySelector(".outPut")
    const alles =document.querySelector("body")
    const luftLabel = document.getElementById("luftLabel")
    const All = document.querySelector(".All")

    if(luft >= 0 &&  luft<=50){
        alles.style.backgroundColor="forestgreen";
        All.style.
        luftLabel.innerHTML ="Luftqualität: "+ luft;
        output.innerHTML = "<p class='good'>Level of Health Concern: Good<br>Level of health effect: Little or no risk</p>"
    }else if(luft>=50 && luft<=100){
        alles.style.backgroundColor="khaki";
        luftLabel.innerHTML ="Luftqualität: "+ luft;
        output.innerHTML = "<p class='middle'>Level of Health Concern: Moderate<br>Level of health effect: Acceptable Quality</p>"
    }else if(luft>=100 && luft<=150){
        alles.style.backgroundColor="firebrick";
        luftLabel.innerHTML ="Luftqualität: "+ luft;
        output.innerHTML = "<p class='bad'>Level of Health Concern: Unhealthy for sensitive groups<br>Level of health effect: Generable publics not likely affected</p>"
    }
}


