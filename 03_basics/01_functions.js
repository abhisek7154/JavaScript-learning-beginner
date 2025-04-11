// Functions
 function sayMyName(){
    console.log("A")
    console.log("B")
    console.log("H")
    console.log("I")
 }
// call a function
// sayMyName()

function addTwoNumbers(number1 , number2) { // these are parameters 
    // console.log(number1 + number2);
}

//addTwoNumbers(3 , null) // these are arguments

const result  = addTwoNumbers(3 ,5)  // 8 

// console.log("Result : " , result);  // Result :  undefined

function loginUserMessage(username){
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Abhisek"))
// console.log(loginUserMessage()) // If not mentioned returns undefined

function calculateCartPrice(val1, val2, ...num1){ // ... -> Rest operator
    return num1
}
console.log(calculateCartPrice(200 , 4000 , 300 , 2000))
// val1 -> 200 , val2 -> 4000

const user = {
    username: "Abhisek",
    netWorth: 999999999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and netWorth is ${anyobject.netWorth}`);
 }
//  handleObject(user)
// or
// handleObject({
//     username: "Sam",
//     netWorth: 399
// })

const myNewArray = [200 , 400 , 100 , 600]

function returnSendValue(getArray){
    return getArray[1]
}
// console.log(returnSendValue(myNewArray));
console.log(returnSendValue([200 , 400 , 100 , 600]))