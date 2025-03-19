// Singleton => ensures a class has only one instance and provides a global point of access to it

//Object.create

// Objects literals

const mySym = Symbol("Key1"); // declaring symbol

const jsUser = {
    name: "Abhisek", // name is also acts as string
    "full name": "Abhisek Sahoo", // you can't access the value with " . "
    age: "21",
    [mySym]: "myKey1", // output: [Symbol(Key1)]: 'myKey1'
                       // without [] => it acts as string
    location: "japan",
    email: "Abhi@hotmail.com",
    isloggedin: false,
    lastLoginDays: ["Monday" , "Friday"]
}

// Accessing the objects


// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// change the value of objects

jsUser.email = "luffy@ace.com"
// console.log(jsUser.email)

// how to restrict the value change

// Object.freeze(jsUser)
jsUser.email = "Abhi@hotmail.com"
// console.log(jsUser)


jsUser.greeting = function() {
    console.log("Hello weeb")
}

jsUser.greetingTwo = function() {
    console.log(`Hello ${this.name}`)
}

// console.log(jsUser.greeting()) 
// console.log(jsUser.greetingTwo())