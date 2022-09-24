let img2=document.getElementById("img1");

let main=document.getElementById("main");

main.style.border="solid 5px ";

main.style.borderRadius="50px";

img2.classList.add("w-50");


let box1=document.getElementById("box1");

let box2=document.getElementById("box2");

let out=document.getElementById("out");

let result=document.getElementById("para");

result.style.marginTop="20px";


function reset()
{
    let frn= Math.random()*100;
    let srn= Math.random()*100;
    box1.textContent=Math.ceil(frn);
    box2.textContent=Math.ceil(srn);
    result.textContent="";
    out.value="";
    result.style.padding="";
    
}

reset();

function check()
{
     let fri=parseInt(box1.textContent);
     let fsi=parseInt(box2.textContent);
     let usum=parseInt(out.value);
     let outsum=fri+fsi;

if(usum===outsum){

       result.textContent="CONGRATULATIONS . . !";
       result.style.backgroundColor="green";
       result.style.borderRadius="20px";
}

else{

       result.textContent="PLEASE TRY AGAIN . . !";
       result.style.backgroundColor="black";
       result.style.color="white";
       result.style.borderRadius="20px";
}
}

