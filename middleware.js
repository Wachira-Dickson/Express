const express = require('express');
const app = express();

//define a middleware function
const myFirstMiddleware = (req, res, next) => {
    console.log('This first middleware will run on every request');

    next();
}

app.use(myFirstMiddleware);

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});