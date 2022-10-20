const express = require('express');
const app = express();
const port = 3000;

// For Forms
app.use(express.urlencoded({ extended: true }));

// For json
app.use(express.json());

app.get('/login', (req, res) => {
    res.send('GET /login reponse');
})

app.post('/login', (req, res) => {
    const { email, secret } = req.body;
    console.log(req.body);
    console.log(email);
    console.log(secret);
    res.send('POST /login reponse')
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
})