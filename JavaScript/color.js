const h1 = document.querySelector('h1');
const btn = document.querySelector('button');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;

    h1.innerText = `RGB(${r}, ${g}, ${b})`;
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})