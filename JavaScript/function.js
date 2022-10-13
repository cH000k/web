// Returning Function
// const name = function(first, last) {
//     return function(age){
//         if(age <= 17) {
//             return `${first} ${last} is a minor`
//         } else if (age >= 18 && age <= 60){
//             return `${first} ${last} is an adult`
//         } else {
//             return `${first} ${last} is a senior`
//         }
//     }
// }


// Methods
// const math = {
//     multiply: function(x, y){ return x * y },
//     divide: function(x, y){ return x / y },
//     square: function (x) { return x * x },
//     cube(x){return x**3}
// }


// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
// const firstNames = fullNames.map(function(obj){
//     return obj.first
// })

const firstNames = fullNames.map((obj) => {
    return obj.first
})

