let i,j,n=100;

for(i=2;i<=n;i++){
    z=true;
    for(j=2;j<i;j++){
       if(i%j==0){
        z=false;
       }
}
if(z){
    console.log(i);
}
}