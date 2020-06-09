//const name = 'caleb';
//const age = 30;
const rating = 4.5;
const isAge = true;
const x = null;
const y= undefined;
let z;



console.log(typeof(x))

//strings
//concantenation

const name = 'caleb';
const age = 30;
console.log('my name is ' + name + ' and am ' + age);
//template string

const hello =`my name is ${name} and i am ${age}`;
console.log(hello)

const s = 'hello'
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.substring(0,3))
console.log(s.split(''))


const f = 'computer, crash ,mimi , it  ,code ';
console.log(f.split(','))

//array - variables that hold multiple values

var numbers= new Array(1,2,3,4,5);
console.log(numbers)

const fruits = ['apples', ' oranges', 'dates', 'bananas']
fruits[4] = 'mango';

fruits.push('grapes'); //adds at the end

fruits.unshift('avocado'); //adds a the beginning

fruits.pop(); //eliminate the last one

console.log(Array.isArray(fruits)); //check if something is in the array
console.log(fruits.indexOf('dates')) //checking index of value
console.log(fruits)
console.log(fruits[2])


//object

const person = {
    firstName : 'caleb',
    secondName : 'kibusia',
    myAge : 30,
    hobbies: ['music' , 'movies','tech'],
    address: {
        street: 'mission',
        city: 'nairobi',
        state : 'kenya',
    }
}


console.log(person.address.city)
console.log(person.address.state)
console.log(person.address.street)
console.log(person.hobbies[0])
console.log(person.myAge)



//pulling out
 
const {firstName, secondName,myAge} = person

console.log(myAge)

const {address:{state}} = person

console.log(state);

//adding property
person.email ='user@user.com';

console.log(person);


//todo


const todo = [
    {
        id: 1,
        text : 'going to farm',
        isComplete: true,
    },
    {
        id: 2,
        text : 'coding',
        isComplete: true,
    },
    {
        id: 3,
        text : 'meeting with group members',
        isComplete: false,

    }
];

console.log(todo)
console.log(todo[1].text)


//JSONstring
const  todoJSON = JSON.stringify(todo);
console.log(todoJSON)


//loops
//1) for 

for(let i = 0; i<20; i++){
    console.log(`for loop number : ${i}`)
}

//while loop

let i = 0;
while(i<10){
    console.log(`while loop number : ${i}`);
    i++;

}


//loop arrays
for(let i = 0; i<todo.length; i++){
    console.log(todo[i].text)
}




//for 

for(let  todos of todo){
    console.log(todos.id);
}

//high ordered array methods 
//foreach,map,filter


todo.forEach(function(todos){
    console.log(todos.text);
});

//map - returns an array
const todosText =todo.map(function(todos){
    return todo.text;
    
});

console.log(todosText);

//filter

const todosCompleted =todo.filter(function(todos){
    return todo.isCompleted === false;
    
});
console.log(todosCompleted);





//conditionals
//triple equals match the types
 //if

var r = 10;

if( r = 10){
    console.log('r is 10')
}


// else
var p = 20;

if( p === 10){
    console.log('p is 10')
}else{
    console.log('p is not 10')
}

//else if

var o = 9;

if( o === 10){
    console.log('o is 10');
}else if(o>10){
    console.log('o is greater than 10');
}else{
    console.log('o less than 10');

}


//multiple condition
var b = 9;
var u =18;

if( b > 5 && u >10){
    console.log('b is 5 or y is more than 10');


}

//ternary

const j = 10;

const color = j>10 ? 'red': 'blue';


console.log(color);


//switch
const n = 12;

const colors = n>10 ? 'red': 'blue';


switch(colors){
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue')
        break; 
    default:
        console.log('color is not red or blue')
        break;       
}


//functions

function addNums(num1,num2){
    console.log(num1+num2)
}
addNums(5,5);
