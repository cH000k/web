const num1 = Math.floor((Math.random() * 10));
const num2 = Math.floor((Math.random() * 10));

let userInput = prompt(`Which is greater, ${num1} or ${num2}?
A.) ${num1}
B.) ${num2}
C.) They are Equal
Answer: `).toUpperCase();

// console.log(typeof(userInput));
let whoIsGreater = null;

if (num1 > num2) {
    whoIsGreater = "A";
} else if (num1 < num2) {
    whoIsGreater = "B";
} else {
    whoIsGreater = "C";
}

if (userInput === whoIsGreater) {
    prompt("Correct!")
} else {
    prompt("Incorrect!")
}


console.log(userInput.toUpperCase());