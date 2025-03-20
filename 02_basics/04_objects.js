// Singleton object (created using Object constructor)
// const tinderUser = new Object();

// Non-singleton object (created using object literal)
const tinderUser = {};

// Adding properties to the object
tinderUser.id = "1234bc";
tinderUser.name = "Abhi";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// Nested object
const regularUser = {
  email: "Abhi@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Abhisek",
      lastname: "Sahoo",
    },
  },
};

// Accessing nested properties using optional chaining
// console.log(regularUser.fullname?.userfullname?.firstname);

// Objects to be merged
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// Merging objects using the spread operator
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// Array of user objects
const users = [
  {
    id: 1,
    email: "hotmail@gmail.com",
  },
  {
    id: 2,
    email: "google@gmail.com",
  },
];

// Accessing email of the second user
// console.log(users[1]?.email);

// Logging tinderUser object
// console.log(tinderUser);

// Getting keys, values, and entries of tinderUser
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// Checking if a property exists in tinderUser
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename:" js in hindi",
    price: "9999999",
    courseInstructer: "hitesh"
}

// Objedct de-structure

const {courseInstructer: instructer} = course
// console.log(courseInstructer)
// console.log(instructer)
// same output

{
  name:""
}