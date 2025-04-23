// =====================================
// Comparison Operators & Conditionals
// =====================================

// Check if the user is logged in and temperature status
const isUserLoggedIn = true;
const temperature = 51;

if (temperature < 50) {
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is greater than or equal to 50");
}

// Useful comparison operators in JS:
// <, >, <=, >=, ==, !=, ===, !==
// == and != compare value only
// === and !== compare value AND type


// ==========================
// Variable Scope in JavaScript
// ==========================

const score = 200;

if (score > 100) {
    const power = "fly"; // 'const' or 'let' keeps this variable scoped to the block
    console.log(`User Power inside block: ${power}`);
}

// Trying to access `power` here will result in an error
// console.log(`User Power outside block: ${power}`); // ❌ ReferenceError


// ============================
// One-liner conditionals (avoid for readability)
// ============================

const balance = 1000;

// Technically valid, but not recommended due to poor readability
if (balance > 500) console.log("test"), console.log("test2");

// Recommended: use blocks for clarity
if (balance < 500) {
    console.log("Less than 500");
} else if (balance < 700) {
    console.log("Less than 700");
} else if (balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Less than 1700");
}


// ===============================
// Logical Operators in Conditions
// ===============================

const userLoggedIn = true;
const hasDebitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND condition (both must be true)
if (userLoggedIn && hasDebitCard) {
    console.log("Allow to buy the course");
}

// OR condition (at least one must be true)
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in from at least one method");
}

//✅ Key Takeaways:

// Use const or let to keep variables scoped within blocks.

// Avoid one-line if statements for better clarity.

// Understand logical operators: && (AND), || (OR).

// Prefer === over == to avoid type coercion bugs.
