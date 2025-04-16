// ==============================
// 🚀 Immediately Invoked Function Expressions (IIFE)
// ==============================

// ⚡ IIFE is a function that runs immediately after it is defined.
//    - Helps avoid polluting the global scope
//    - Often used for initialization tasks

// ------------------------------
// ✅ Named IIFE
// ------------------------------
(function chai() {
    console.log("DB CONNECTED"); // Output: DB CONNECTED
})(); // ← The last () immediately invokes the function

// Notes:
// - This is a named IIFE: function name is `chai`
// - Useful when you want to give a name for debugging
// - The function is invoked instantly and does not stay in memory


// ------------------------------
// ✅ Arrow Function IIFE with Parameters
// ------------------------------
((name) => {
    console.log(`DB CONNECTED TWO ${name}`); // Output: DB CONNECTED TWO hitesh
})('hitesh'); // ← Pass argument here

// Notes:
// - This is an anonymous arrow function IIFE
// - You can pass parameters directly after the function
// - Common in modern JavaScript for quick, isolated logic

// ==============================
// ✅ Summary
//
// - IIFE syntax:
//     (functionNameOrAnonymousFunc() { ... })()
//     (() => { ... })()
// - Useful for:
//     - Initialization logic
//     - Encapsulation (creating private scopes)
//     - Avoiding global variable conflicts
// ==============================
