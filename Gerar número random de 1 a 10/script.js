
var randomNr = Math.floor((Math.random() * 10) + 1);

function getRandomNr(){
    document.getElementById('demo').innerHTML = randomNr
}

function reset(){
    window.location.reload()
}

