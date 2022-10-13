const express = require('express');
const app = express();
const port = 3000;

// app.use((req, res) => {
//     console.log('WE GOT A NEW REQUEST!!');
//     res.send('<h1>Hello World!</h1>');
    
// })


// Get Request
app.get('/', (req, res) => {
    res.send('<h1>This is the Home Page</h1>');
})

app.get('/cats', (req, res) => {
    res.send('<h1>Meow</h1>');
})

app.get('/dogs', (req, res) => {
    res.send('<h1>Woof</h1>');
})

// Express Path Parameter
app.get('/r/:query', (req, res) => {
    const { query } = req.params;
    console.log(query);
    res.send(`<h2>THIS IS A ${query.toUpperCase()} SUB</h2>`);
})

app.get('/r/:query/:postId', (req, res) => {
    const { query, postId } = req.params;
    console.log(query, postId);
    res.send(`<h2>THIS IS A ${query.toUpperCase()} SUB with POST ID of ${postId}</h2>`);
})

// Query String
// http://localhost:3000/search?q=chicken&color=red
app.get('/search', (req, res) => {
    const { q } = req.query;

    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED');
    }
    
    res.send('Halo halo');
})

// Display for all other routes
app.get('*', (req, res) => {
    res.send('ERROR PATH')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})