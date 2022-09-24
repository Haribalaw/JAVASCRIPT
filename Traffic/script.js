
let b1=document.getElementById("red");
let b2=document.getElementById("yellow");
let b3=document.getElementById("green");



let d1=document.getElementById("red1");
let d2=document.getElementById("yellow1");
let d3=document.getElementById("green1");


function first()
{
    b1.style.background="red";
    b2.style.background="";
    b3.style.background="";

    d1.style.background="red";
    d2.style.background="";
    d3.style.background="";
}


function second()
{
    b1.style.background="";
    b2.style.background="yellow";
    b3.style.background="";

    d1.style.background="";
    d2.style.background="yellow";
    d3.style.background="";
}

function third()
{
    b1.style.background="";
    b2.style.background="";
    b3.style.background="green";

    d1.style.background="";
    d2.style.background="";
    d3.style.background="green";
}