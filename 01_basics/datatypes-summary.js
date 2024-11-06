// Primitive data type

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const   scoreValue = 100.58

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);


const bigNumber = 546546165564

// Refference type or Non-primitive type

// Array, objects, Functions

// const heros = ["shaktiman", "naagraj","Doga"];
// let myObj= {
//     name:"Devi"
//     age:18
// }

const myFunction = function(){
    console.log("Hello world");
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and Heap memory(Non-primitive)

let myYoutubename="hiteshchoudharydotcom"

let anothername=myYoutubename
anothername="chaiauurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne
userTwo.email="itsomm143@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



