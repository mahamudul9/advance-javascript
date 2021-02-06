const number=[9,6,2,4,3];
const object=[];
for(let i=0; i<number.length; i++){
    const element=number[i];
    const mul=element*element;
    object.push(mul);
}
console.log(object);


const result= number.map(function(element){
    return element*element;
})
console.log(result);