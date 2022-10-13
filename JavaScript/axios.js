
// Normal Axios
// axios.get('https://swapi.dev/api/people/1/')
//     .then(res => {
//         console.log("Resolved", res)
//         console.log("Name: ", res.data.name)
//         return res.data.name
//     })
//     .catch(err => {
//         console.log("Error", err)
//     })

// Using Async Await
// const getStarWarsPerson = async () => {
//     const res = await axios.get('https://swapi.dev/api/people/1/');
//     console.log(res.data.name);
// }    

// Passing Inputs
// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data.name);
//     } catch (e) {
//         console.log("ERROR", e);
//     }
    
// }    
// getStarWarsPerson(1);
// getStarWarsPerson(5);
// getStarWarsPerson(10);
// getStarWarsPerson(15);
// getStarWarsPerson(20);

// APIs with Headers
// This will vary from API to API. Read the docs
const getDadJokes = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res);
    console.log(res.data.joke);
    return res.data.joke;
}

const p = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener('click', async () => {
    let joke = await getDadJokes();
    p.innerText = joke;
})

// TV APi
const form = document.querySelector('form');
const img = document.querySelector('image');
const input = document.querySelector('input');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.dir(form);
    // 'query' is the input name
    const searchTerm = form.elements.query.value;
    // For passing multitple parameters like query string, headers, etc
    const config = { params: { q: searchTerm } };
    const res = await axios.get("https://api.tvmaze.com/search/shows", config);
    // Send request to API. Passing single parameter
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);

    // Clear Search Result box
    input.value = "";

    // Clear existing results
    clearResults();

    // Feed API search results
    displayResults(res.data);
    
})

// Loop over API search results and display image
const displayResults = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;;
            document.body.append(img);
        }
    }
}

// Clear All images to display new search results
const clearResults = () => {
    const allImages = document.querySelectorAll('img');
    for (let image of allImages) {
        image.remove();
    }
}
//8mins