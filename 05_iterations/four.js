// 🔧 Object with language shortcuts
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
};

// 🔄 for...in with Objects => Gives KEYS 🗝️
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); 
    // js shortcut is for javascript, etc.
}

// 🧮 Array of programming languages
const programming = ["js", "rb", "py", "java", "cpp"];

// 🔄 for...in with Arrays => Gives INDEXES 🔢
for (const index in programming) {
    console.log(index);             // 0, 1, 2, 3, 4
    console.log(programming[index]); // js, rb, py, java, cpp
}

// 🗺️ Map – Stores key-value pairs
const map = new Map();
map.set('IN', 'India');
map.set('JP', 'Japan');
map.set('FR', 'France');

// ⚠️ for...in ❌ DOES NOT work on Map (Map is not enumerable)
for (const key in map) {
    console.log(key);  // ❌ Won’t output keys like 'IN', 'JP' – ignored
}
