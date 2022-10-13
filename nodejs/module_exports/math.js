// const add = (x, y) => x + y;
// const square = x => x * x;
// const PI = 3.1416;

exports.add = (x, y) => x + y;
exports.square = x => x * x;
exports.PI = 3.1416;

// By default, module.exports is an object
// module.exports.add = add;
// module.exports.square = square;
// module.exports.PI = PI;

// OR

// const math = {
//     add: add,
//     square: square.apply,
//     PI: PI
// }

// module.exports = math;