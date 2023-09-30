function add()
{
        n1 = document.getElementById("num1").value;
        n2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = parseInt(n1) + parseInt(n2);
}

function sub()
{
        n1 = document.getElementById("num1").value;
        n2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = n1 - n2;
}

function mult()
{
        n1 = document.getElementById("num1").value;
        n2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = n1 * n2;
}

function divi()
{
        n1 = document.getElementById("num1").value;
        n2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = n1 / n2;
}

function reset(){
    window.location.reload()
}