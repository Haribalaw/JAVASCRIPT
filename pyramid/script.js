let i,j,z="",n=5;

for(i=1;i<n;i++){
    for(j=i;j<=n;j++){
      z+="  ";
    }
    for(k=1;k<=i;k++){
        z+="*   ";
    }
    z+="\n";
}
for(i=1;i<=n;i++){
    for(j=1;j<=i;j++){
      z+="  ";
    }
    for(k=i;k<=n;k++){
        z+="*   ";
    }
    z+="\n";
}
console.log(z);