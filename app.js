const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    //res.status(200).json({ message: 'Hello World!' })
});

module.exports = app;