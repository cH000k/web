const exrpess = require('express');
const app = exrpess();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
})