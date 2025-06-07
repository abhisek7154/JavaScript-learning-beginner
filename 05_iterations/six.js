// const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values)

const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
 
// const newNums = myNums.filter((num) => {
//     return num > 4
// } )

// console.log(newNums);

const newNums = [];

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }else return 0;
} )

// console.log(newNums)

const books = [
  { title: "The Shadow Code", genre: "Thriller", publish: 2012, edition: 3 },
  { title: "Whispers of Time", genre: "Science Fiction", publish: 2018, edition: 1 },
  { title: "Echoes of the Void", genre: "Fantasy", publish: 2015, edition: 2 },
  { title: "Rust & Reality", genre: "Programming", publish: 2021, edition: 1 },
  { title: "The Art of Silence", genre: "Philosophy", publish: 2010, edition: 4 },
  { title: "Midnight Circuits", genre: "Technology", publish: 2019, edition: 2 },
  { title: "Code of Shadows", genre: "Cyberpunk", publish: 2020, edition: 1 },
  { title: "Sands of Innovation", genre: "Sci-Fi", publish: 2016, edition: 3 },
  { title: "Beneath the Binary", genre: "Tech Thriller", publish: 2022, edition: 1 },
  { title: "Dreams in JavaScript", genre: "Programming", publish: 2017, edition: 2 },
  { title: "Tales of the Shell", genre: "Mystery", publish: 2011, edition: 5 },
  { title: "Quantum Heist", genre: "Science Fiction", publish: 2023, edition: 1 },
  { title: "Lost in the Loop", genre: "Programming", publish: 2020, edition: 2 },
  { title: "Fragments of Light", genre: "Fantasy", publish: 2014, edition: 3 },
  { title: "Ethics of AI", genre: "Non-Fiction", publish: 2019, edition: 1 },
  { title: "Silicon Sorcery", genre: "Tech Fantasy", publish: 2021, edition: 2 },
  { title: "Zero Day Dreams", genre: "Cyber Thriller", publish: 2016, edition: 4 },
  { title: "Mind Over Module", genre: "Programming", publish: 2013, edition: 2 },
  { title: "The Debugger's Diary", genre: "Programming", publish: 2020, edition: 1 },
  { title: "Neon Nights", genre: "Sci-Fi", publish: 2018, edition: 3 },
  { title: "Chronicles of Code", genre: "Tech Fiction", publish: 2015, edition: 2 },
  { title: "Pixels and Prophets", genre: "Futuristic", publish: 2022, edition: 1 },
  { title: "Legends of Logic", genre: "Programming", publish: 2011, edition: 5 },
  { title: "Beyond the Compiler", genre: "Tech", publish: 2023, edition: 1 },
  { title: "The Algorithmic Alchemist", genre: "Fantasy/Programming", publish: 2020, edition: 2 },
];


let userBooks = books.filter( (bk) => bk.genre === 'Programming') 

userBooks = books.filter( (bk) => { 
  return bk.publish > 2003 && bk.genre === 'Futuristic'} )
// console.log(userBooks)