// 1. Prompt to enter max Number
// 2. Prompt to ask user to guess the number generated
// 3. If user guesses correctly, show a prompt containing number of guesses it took
// 4. Else it would just repeat in a loop
//     Too Low
//     Too High
// 5. If user wants to quit, press "q", then show prompt on 3


let maxNum = parseInt(prompt("Enter a max number: "));
while (!maxNum) {
    maxNum = parseInt(prompt("Please enter a valid number: "));
}

let secretNum = Math.floor(Math.random() * maxNum) + 1;

console.log(`secretNum: ${secretNum}`)

let guess = prompt("Enter your guess: ")
let counter = 1;

while (parseInt(guess) !== secretNum && guess !== "q") {
    if (guess > secretNum) {
        guess = prompt("Too High! Guess again: ");
        console.log(`Guess: ${guess}`);
    } else {
        guess = prompt("Too Low! Guess again: ");
        console.log(`Guess: ${guess}`);
    }
    counter += 1;
}

if (guess === 'q') {
    console.log("Quitter!!");
} else {
    console.log("Congrats!! You win!");
    prompt(`It took you ${counter} guesses`);
}
