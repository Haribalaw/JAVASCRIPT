let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let main=document.getElementById("main");

main.classList.add("col-4","m-auto");

let h1=document.getElementById("heading");

h1.textContent=recipeObj.title;

h1.style.color="red";

h1.style.fontFamily="italic";

h1.style.textAlign="center";


let imgdiv=document.getElementById("imgdiv");

let img1=document.getElementById("img1");

img1.src=recipeObj.imgSrc;

img1.style.width="100%"

imgdiv.appendChild(img1);


let uli=document.getElementById("ulid");

let h2=document.getElementById("h2");

h2.textContent="Ingredients";

h2.style.textAlign="center";

let ing =recipeObj.ingredients;    

for(let i of ing){
    let list1=document.createElement("li");
        list1.textContent=i;
        uli.appendChild(list1);
        list1.style.lineHeight="25px";
}


let back1=document.getElementById("listback");
 
back1.style.backgroundColor="#002266";

back1.style.borderRadius="20px";

back1.style.marginTop="10px";

back1.style.padding="3px";

back1.style.color="white";










// let back=document.getElementById("listback");

// back.classList.add("bg-primary");

// back.appendChild(main);

