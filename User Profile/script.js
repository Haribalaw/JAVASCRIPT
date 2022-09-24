let profileDetails = {

    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",

    name: "Ravi",

    age: 25

};


let div=document.getElementById("main");

div.classList.add("col-6","text-center",);
div.style.margin="auto";
div.style.height="100vh";
div.style.backgroundColor="violet";
div.style.borderRadius="40px";

let img=document.getElementById("im1");

img.src=profileDetails.imgSrc;

img.style.width="50%";

img.style.marginTop="20%";

div.appendChild(img);

let h=document.createElement("h1");

let h1=document.createElement("h1");

h.textContent=profileDetails.name;

h1.textContent="Age : "+profileDetails.age;

h.style.color="white";

h1.style.color="white";



div.appendChild(h);

div.appendChild(h1);

