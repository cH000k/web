const form = document.querySelector('form');
const ul = document.querySelector('ul');
const data = document.querySelector('input');



form.addEventListener('submit', (e) => {
    e.preventDefault()

    let li = document.createElement('li');
    li.append(data.value)
    ul.append(li);
    data.value = "";

});

ul.addEventListener('click', (e) => {
    e.target.nodeName === 'LI' && e.target.remove();
})



const h3 = document.querySelector('h3');
const input = document.querySelector('#username');

input.addEventListener('input', () => {
    h3.innerText = `Welcome, ${input.value}`;
    
    if(input.value === ""){
        h3.innerText = "Enter Your Username";
    }
})

