const num=[9,8,13,-1,10,45,-5,7,3];

for(let i=0;i<num.length;i++){
    if(num[i]<0){
        break;
    }
    console.log(num[i]);
}

console.log("chek continue");
for(let i=0;i<num.length;i++){
    if(num[i]<0){
        continue;
    }
    console.log(num[i]);
}