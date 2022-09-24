


function valid()
{
    var y=document.getElementById("s1");
    var x=document.getElementById("p1").value;
    var z=x.length;
    let pass;
    if(z>3 && z<=5)
    {
        pass="POOR";
        y.style.color="red";
    }
    else if(z>5 && z<10)
    {
        pass="GOOD";
        y.style.color="blue";
    }
    else
    {
         pass="STRONG"
         y.style.color="darkgreen";
    }

    y.innerText=pass;
}