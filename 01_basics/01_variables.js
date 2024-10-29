const accountId =144553
let accountEmail = "itsomm@gmail.com"
var accountPassword ="12345"
accountCity ="Bhubaneswar"
let accountState;

// accountId =2  not allowed

accountEmail ="hc@hc.com"
accountPassword ="5152536"
accountCity ="Talcher"

console.log(accountId);

/*
Prefer not to use var because of its issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
