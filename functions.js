"use strict";


// 1. isHometown

function isHometown(town) {

    return town === 'Busan';

}
console.log(isHometown('Deer River'))
console.log(isHometown('Busan'))


// 2. getFullName

function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(getFullName('Bo', 'Kim'))

// Define your function here


// 3. calculateTotal
function calculateTotal(basePrice, state, tax=0.05) {

    const subtotal = basePrice * (1 + tax);

    let fee = 0;
    if (state === 'CA') {
        fee = 0.03 * subtotal;
        }
        else if (state === 'PA') {
            fee = 2;
        }
        else if (state === 'MA'){
            if (basePrice <= 100){
                fee = 1;}
            else {
                fee = 3;
            }
            
        }
    return subtotal + fee;
}
console.log(calculateTotal(10.00, 'CA',))
// subtotal = base_price * (1 + tax)

//     fee = 0
//     if state == 'CA':
//         fee = 0.03 * subtotal
//     elif state == 'PA':
//         fee = 2
//     elif state == 'MA':
//         if base_price <= 100:
//             fee = 1
//         else:
//             fee = 3

//     return subtotal + fee
// Define your function here
