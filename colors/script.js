let backcol=document.getElementById("bottom");

let main=document.getElementById("main");

main.style.border="solid 5px black";

main.style.borderRadius="10px";

main.style.backgroundColor="#EDBB99"

backcol.style.padding="100px";

backcol.style.borderRadius="10px";

let b1=document.getElementById("b1");

b1.style.borderRadius="20px";

let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];



function change(){
    
backcol.style.backgroundColor=bgColorsArray[Math.floor(Math.random()*bgColorsArray.length)];

}
