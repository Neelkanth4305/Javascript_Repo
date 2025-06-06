const accountId = 122445
let accountEmail = "neel@gmail.com"
var accountPass = "12345"
accountCity = "Ahmedabad"
let accountState;

// const should not change
//accountId = 2

accountEmail = "np@gmail.com"
accountPass = "67890"
accountCity = "Pune"

console.log("accountId");

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])