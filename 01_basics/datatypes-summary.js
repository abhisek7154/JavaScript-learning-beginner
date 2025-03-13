// Primitave

// 7 Types : String , Number , Boolearn , null , undefined , Symbol ,
//  Bigint

const score = 100

const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId); // Output: false


const bigNumber = 12345678912n


// Referance ( Non primitive )

// Array , Objects , Functions

const names = ["Abhi" , "Somesh" , "omm"];
let myObj = {
    name: "Abhisek",
    Age: 21,
    interest: "Anime , Music"
}

const myFunction = function(){
    console.log("Hello world");
}

// How to find datatypes 

console.log(typeof bigNumber);


// https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Stack and heap memory in js

// Stack ( Primitive ) , Heap ( Non - premitive) 

// Stack Example

let myYoutubename = "AbhisekSahoodotcom" 

let anothername = myYoutubename

anothername = "Some New value"

console.log(myYoutubename) // Output: AbhisekSahoodotcom
console.log(anothername) // Output: Some New value

// Heap Example

let userOne = {
    email:"user1@gmail.com",
    upi:"User1@ybpl"
}
let userTwo = userOne

userTwo.email = "user2@yahoo.hotmail"

console.log( userOne.email) // Output: user2@yahoo.hotmail
console.log( userTwo.email) // Output: user2@yahoo.hotmail