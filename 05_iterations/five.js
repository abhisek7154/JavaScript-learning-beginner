const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// Methods to write a fumction

// 1
coding.forEach( function (item) {
    // console.log(item);
    
})

//2
coding.forEach(greet = (item) => {
    // console.log(item)
})

//3
function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)


coding.forEach( (item , index , arr) => {
    // console.log(item , index , arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "React",
        languageFileName: "jsx"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})