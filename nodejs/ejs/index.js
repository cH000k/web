const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { fileURLToPath } = require('url');
const redditData = require('./data.json');
console.log(redditData);

// Use EJS. No need to require the package
app.set('view engine', 'ejs');

// Set path to cwd and add /views
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
})

// Passing data to templates
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // res.render('rand', { rand: num });
    res.render('rand', { num });
})

// Passing data from params to templates
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];

    // with error handling
    if (data) {
        res.render('subreddit', { subreddit, ...data });
    } else {
        res.render('notfound', { subreddit });
    }
    
})

// Loop in templats

app.get('/cats', (req, res) => {
    const cats = ['meowy', 'monti', 'jerry', 'tom'];
    res.render('cats', { cats });
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
})

// 1. create / setup express app
// 2. create new directory called 'views'
// 3. app.set 'view engine' and 'views'
// 4. create an ejs file
// 5. write html and js inside
// 6. res.render to load ejs file
