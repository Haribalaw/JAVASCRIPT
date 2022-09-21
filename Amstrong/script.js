let i,j,k,a,b,c,temp;
 i=prompt("Enter a number");
    temp=i;
    D=String(i);

    a=D.substring(0,1);
    b=D.substring(1,2);
    c=D.slice(2);
    i=parseInt(a);
    j=parseInt(b);
    k=parseInt(c);
if((i*i*i)+(j*j*j)+(k*k*k)==temp) 
{
    console.log("The given number is an Amstrong Number");
}
else
{
    console.log("The given number is not an Amstrong Number");
}
