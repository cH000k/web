// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png

// span, image, with size???

const div = document.querySelector('div');

let count = 1;

while (count <= 150) {
    const container = document.createElement('div')
    const newImg = document.createElement('img')
    const newName = document.createElement('span')

    newName.innerText = `#${count}`;

    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count}.png`;
    newImg.style = 'display: block';
    container.style = 'display: inline-block; text-align: center';
    
    container.appendChild(newImg);
    container.appendChild(newName);
    div.appendChild(container);

    count++;
}
