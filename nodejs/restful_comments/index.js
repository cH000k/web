const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { v4: uuid } = require('uuid');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const comments = [
    {id: uuid(), username: "mikusimp", comment: "Miku is best girl!!!!"},
    {id: uuid(), username: "meguri_kanou", comment: "M e g u m i  is my waifu"},
    {id: uuid(), username: "kotori", comment: "kyahhhhhh!"}
];

// Home Page
app.get('/', (req, res) => {
    res.render('index', { comments });
})

// Add Comment
app.get('/new', (req, res) => {
    res.render('new');
})

app.post('/', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ id: uuid(), username, comment });
    res.render('index', {comments});
})

// Show One Comment
app.get('/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('details', {comment});
})

// Edit One Comment 
app.get('/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('update', {comment});
})

// Update One Comment
app.patch('/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    console.log(newComment);
    res.send("OKAY");
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
})