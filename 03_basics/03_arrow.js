const user = {
    username: "Abhi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to our website`);
        // console.log(this); // Refers to the user object
    }
};

user.welcomeMessage();           // Abhi, welcome to our website
user.username = "Pari";
user.welcomeMessage();           // Pari, welcome to our website

// 📝 Key Points:

// -> Inside an object method, this refers to the object itself.
// -> So this.username refers to user.username.

console.log(this); // In Node.js, it logs an empty object {}

// ----------------------
// ❌ this in Regular Function
// ----------------------

function chai1() {
    let username = "Abhi";
    console.log("Regular function this.username:", this.username); // undefined
}
chai1();

const chai2 = function() {
    let username = "Abhi";
    console.log("Function expression this.username:", this.username); // undefined
};
chai2();

// ----------------------
// 🏹 Arrow Function and this
// ----------------------

const chai3 = () => {
    let username = "Abhi";
    console.log("Arrow function this.username:", this.username); // undefined
};
chai3();

// ----------------------
// ➕ Arrow Function Variations
// ----------------------

// Standard arrow function with return
const addNums = (num1, num2) => {
    return num1 + num2;
};
console.log("addNums(2,3):", addNums(2, 3));

// Implicit return (without curly braces)
const addNums2 = (num1, num2) => num1 + num2;
console.log("addNums2(2,3):", addNums2(2, 3));

// Return an object from arrow function (wrap with parentheses)
const getUser = (num1, num2) => ({ username: "Abhi" });
console.log("getUser(3,4):", getUser(3, 4));

// ----------------------
// 🔁 forEach with Arrow Function
// ----------------------

const myArray = [2, 3, 4, 5];

myArray.forEach((num) => {
    console.log("Double:", num * 2);
});
