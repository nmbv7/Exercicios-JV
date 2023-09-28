function turnOnOrOff () {

    let img = document.getElementById("img");
    let htmlBody = document.body

    if (img.src.match("OFFLampada.jpg")) {
        img.src = "ONLampada.jpg"
        htmlBody.style.background = "White"
        htmlBody.style.color = "Black"

    } else {
        img.src = "OFFLampada.jpg"
        htmlBody.style.background = "Black"
        htmlBody.style.color = "White"
       
    }
    
}