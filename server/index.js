const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

//routes
app.get('/', (req, res) => {
   res.send('Dashboard server');
});

app.listen(PORT, HOST);
console.log(`Running on ${PORT}:${HOST}`);