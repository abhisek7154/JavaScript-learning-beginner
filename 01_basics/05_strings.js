// Strings
 
const name = "Abhisek";
const repoCount = 21;
console.log( name + repoCount + " Value");
// Output: Abhisek21 Value

// Don't use above syntax ( it's ugly) 
// Use the one with Backticks ( ` ) 

console.log(`Hello my name is ${name}  and  my repo count is ${repoCount}`)

const gameName = new String('Abhisek-GOAT');

console.log(gameName[0]);

console.log( gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));


const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-8 , 5)
console.log(anotherString);

const newStringOne ="    Abhisek    ";
console.log( newStringOne )
console.log( newStringOne.trim())

const url = "https://AbhisekSahoo.com/abhi%20sah00"

console.log(url)
console.log(url.replace('%20' , '-'))
console.log(url.includes('Omm'))

