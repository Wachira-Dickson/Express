const express = require('express');
const app = express();


const requestTimestampLogger = (req, res, next) => {
  const currenttimeStamp = new Date().toISOString();

  console.log(`${currenttimeStamp} - ${req.method} request to ${req.originalUrl}`);
  
  next();
}
app.use(requestTimestampLogger);

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