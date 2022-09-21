let x= document.getElementById("count");
x.style.fontSize="100px"

function add()
{
    let pv=x.textContent;
    let uv=parseInt(pv)+1;
if(uv>0){
    x.style.color="green";
}
   x.textContent=uv;
}

function sub()
{
    let pv=x.textContent;
    let uv=parseInt(pv)-1;
if(uv<0){
    x.style.color="red";
}
   x.textContent=uv;
}

function reset()
{
 let y=0;
    x.textContent=y;
}