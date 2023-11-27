const accountId = 144553
//const => value cannot change
let accountEmail = "abhisek097@gmail.com"
var accountPassoword = "12345"
accountCity = "Odisha"
let accountState;

/*
   prefer not to use "var"
   prefer useing let.
   because of issue in block scope and functional scope.
*/

//accountId = 2 // NOT allowed

accountEmail = "hc@hc.com"
accountPassoword = "212121212"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassoword, accountCity, accountState])