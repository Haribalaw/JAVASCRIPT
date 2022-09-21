let i,j,z="";

for(i=1;i<=4;i++)
{
 for(j=1;j<=i;j++)
 {
    z+="*";
 }
 z+="\n";
}

for(i=1;i<=3;i++)
{
 for(j=i;j<=3;j++)
 {
    z+="* ";
 }
 z+="\n";
}
console.log(z);