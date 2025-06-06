// 🔁 High Order Array Loops – for...of

// ✅ Works on iterables like Arrays, Strings, Maps

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num); // 🔢 Outputs: 1, 2, 3, 4, 5
}

const greetings = "Hello world!!";
for (const char of greetings) {
  console.log(`Each char is ${char}`); // 🔠 Each character
}

// 🗺️ Working with Maps

const map = new Map();
map.set('IN', 'India');
map.set('JP', 'Japan');
map.set('FR', 'France');

for (const [key, value] of map) {
  console.log(key, ':-', value); // 🔑 IN :- India, etc.
}

// ❌ Objects are NOT iterable directly with for...of

const myObject = {
  game1: 'Days Gone',
  game2: 'Hollow Knight'
};

// ✅ Use Object.entries() to make it iterable
for (const [key, value] of Object.entries(myObject)) {
  console.log(key, ':-', value);
}

// 🔄 Difference: for...of vs for...in

// ✅ for...of => Gives VALUES from iterables
// ✅ for...in => Gives KEYS from objects

// Example:
for (const key in myObject) {
  console.log(key); // 🗝️ Outputs: game1, game2
}


// 🧠 Summary:

// 🔁 for...of → ✅ Arrays, Strings, Maps → 🔍 Values

// 🔄 for...in → ✅ Objects → 🗝️ Keys

// 🛑 Objects ❌ not directly iterable by for...of (use Object.entries)

// 🗺️ Maps ✅ iterable by for...of with [key, value]