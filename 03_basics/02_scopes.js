let a = 300;

if (true) {
    let a = 10;       // Block-scoped, doesn't affect outer 'a'
    const b = 20;     // Also block-scoped
    // console.log("INNER: ", a); // prints 10
}

console.log(a);       // prints 300 (outer scope)
console.log(b);       // ❌ ReferenceError: b is not defined (outside block)
console.log(c);       // ❌ ReferenceError: c is not defined (commented out)
