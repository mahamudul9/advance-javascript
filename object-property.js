const students= [
    {id: 21, name:'Omar Faruk'},
    {id: 22, name:'Omar Sunny'},
    {id: 43, name:'Omar Seikh'},  
    {id: 55, name:'Omar Jamal'}  
]

const names = students.map(s => s.name);
console.log(names);

const number = students.filter(s =>s.id>40);
console.log(number);

const numberOne = students.find(s =>s.id>40);
console.log(numberOne);

