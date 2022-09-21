let x=document.getElementById("bulb-on");

let y=document.getElementById("cat-on");

let z=document.getElementById("text");

let a=document.getElementById("bulb");

let b=document.getElementById("cat");

function off()
{
    
    x.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";

    y.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

    z.textContent="Switched off";

    a.style.backgroundColor="red";
    b.style.backgroundColor="";
}

function on()
{
    x.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";

    y.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    
    z.textContent="Switched on";    

    a.style.backgroundColor="";

    b.style.backgroundColor="green";
}