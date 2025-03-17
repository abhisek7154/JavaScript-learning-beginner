const Dc_heros = ["Batman" , "Superman" , "Flash"];
const Anime = ["re:zero" , "Golden time" , "Domestic kanojo"];

// Dc_heros.push(Anime);
// console.log(Dc_heros);


const mergedArray = Dc_heros.concat(Anime);
console.log(mergedArray);

// spread operator
const Spreadoperator = [...Dc_heros , ...Anime]
console.log(Spreadoperator)

const another_array = [1 , 2 , 3 , [ 4 , 5 , 6 ] , 7 , [ 6 , 7 , [ 4 , 5 ] ] ];

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Abhisek"))

console.log(Array.from("Abhisek"))

console.log(Array.from({name: "Abhisek"})) //Intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));