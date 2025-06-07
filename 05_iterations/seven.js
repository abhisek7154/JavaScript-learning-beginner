const myNumbers = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

let newNum = myNumbers.map((num) => num + 10)
// console.log(newNum);

// Chaining

newNum = myNumbers
            .map((num) => num * 10 )
            .map( (num) => num + 1 ) // The above value is passed to next
            .filter( (num) => num >= 50) // same as above

console.log(newNum);
