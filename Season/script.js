let medium=document.getElementById("medium");

let small=document.getElementById("small");

let mdspring="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let smspring="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png"


let mdsummer="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let smsummer="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";


let mdautumn="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let smautumn="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";


let mdwinter="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
let smwinter="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";


function spring()
{
        medium.src=mdspring;
        small.src=smspring;
}

function summer()
{
    medium.src=mdsummer;
    small.src=smsummer;
}

function autumn()
{
    medium.src=mdautumn;
    small.src=smautumn;
}

function winter()
{
    medium.src=mdwinter;
    small.src=smwinter;
}