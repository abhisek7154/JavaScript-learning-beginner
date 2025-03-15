const Dc_heros = ["Batman" , "Superman" , "Flash"];
const Anime = ["re:zero" , "Golden time" , "Domestic kanojo"];

// Dc_heros.push(Anime);
// console.log(Dc_heros);


const mergedArray = Dc_heros.concat(Anime);
console.log(mergedArray);

// spread operator
const Spreadoperator = [...Dc_heros , ...Anime]
console.log(Spreadoperator)

