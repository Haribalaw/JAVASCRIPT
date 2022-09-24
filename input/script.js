let X=document.getElementById("inid");
let y=document.getElementById("ulid");


let main=document.getElementById("main");

main.style.border="8px solid";

main.style.borderRadius="20px";


function cart()
{
    let q = X.value;
    let z=document.createElement("li");

    z.textContent=q;

    X.value="";

    y.appendChild(z);
}