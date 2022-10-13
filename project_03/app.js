// Select Elements
const p1Score = document.querySelector('#p1-score');
const p2Score = document.querySelector('#p2-score');
const upTo = document.querySelector('select');
const p1Btn = document.querySelector('#p1-btn');
const p2Btn = document.querySelector('#p2-btn');
const resetBtn = document.querySelector('#reset-btn');



// Score Count
let p1ScoreCount = 0;
let p2ScoreCount = 0

// Get Up To Value
upTo.addEventListener('change', () => {
    upToValue = upTo.value;
    console.log(upTo.value);
})

// Function check score
function checkScore(p1ScoreCount, p2ScoreCount, upTo) { 
    if (p1ScoreCount == upTo.value || p2ScoreCount == upTo.value) {
        p1Btn.disabled = true;
        p2Btn.disabled = true;

        if (p1ScoreCount>p2ScoreCount) {
            p1Score.style.color = "green";
            p2Score.style.color = "red";
        } else {
            p1Score.style.color = "red";
            p2Score.style.color = "green";
        }
    } 
   
}

// Player 1 Score
p1Btn.addEventListener('click', () => {
    p1ScoreCount += 1;
    p1Score.innerText = p1ScoreCount; 
    checkScore(p1ScoreCount,p2ScoreCount, upTo);   
})

// Player 2 Score
p2Btn.addEventListener('click', () => {
    p2ScoreCount += 1;
    p2Score.innerText = p2ScoreCount; 
    checkScore(p1ScoreCount,p2ScoreCount, upTo);
})

// Reset Button
resetBtn.addEventListener('click', () => {
    p1ScoreCount = 0;
    p2ScoreCount = 0;
    p1Score.innerText = p1ScoreCount; 
    p2Score.innerText = p2ScoreCount;
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    p1Score.style.color = "black";
    p2Score.style.color = "black";
})

