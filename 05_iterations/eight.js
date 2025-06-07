// reduce 

const myNums = [1 , 2 , 3];

// const myTotal = myNums.reduce(function (acc , currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// } , 0)

// console.log(myTotal)


const myTotal = myNums.reduce((acc , currval)=> acc + currval , 0 );
// console.log(myTotal);



const shoppingCart = [
    {
        itemName: 'js course',
        price: '399'
    },
      {
        itemName: 'Rect native',
        price: '599'
    },
      {
        itemName: 'Node / Express js',
        price: '799'
    },
      {
        itemName: 'Python',
        price: '499'
    },
      {
        itemName: 'Rust',
        price: '999'
    },
]

const totalvalue = shoppingCart.reduce((acc , item) => acc + item.price , 0);
console.log(totalvalue)