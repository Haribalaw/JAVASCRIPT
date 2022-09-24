let x=document.getElementById("div");

x.classList.add("p-5","text-center","bg-dark");
x.style.margin="auto";
x.style.marginTop="100px";
x.style.width="50%"
x.style.borderRadius="10px"

let y=document.createElement("input");


y.id="inpid";

y.type="checkbox";

x.appendChild(y);



var z=document.createElement("label");

z.id="inpid";

z.textContent="I am a label";

z.style.marginLeft="6px";

z.style.color="white";

x.appendChild(z);


h=function click(){

    z.classList.toggle("j");
}

y.onclick=h;

