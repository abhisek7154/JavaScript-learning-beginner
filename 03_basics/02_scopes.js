let a = 300;

if (true) {
    let a = 10;       // Block-scoped, doesn't affect outer 'a'
    const b = 20;     // Also block-scoped
    // console.log("INNER: ", a); // prints 10
}

// console.log(a);       // prints 300 (outer scope)
// console.log(b);       // ❌ ReferenceError: b is not defined (outside block)
// console.log(c);       // ❌ RefeenceError: c is not defined (commented out)

function one(){
    const username = "Abhi"

    function two(){
        const webside = "GitHub"
        // console.log(username);
    }
    // console.log(webside);

    two()
}

one()

if (true) {
    const username = "Abhi"
    if(username === "Abhi")
    {
         const webside = " GitHub"
        //  console.log(username + webside);
    }
    // console.log(webside);
}
//console.log(username)

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));  // ✅ Works due to function hoisting

function addone(num) {
    return num + 1;
}

addTwo(5);  // ❌ Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};