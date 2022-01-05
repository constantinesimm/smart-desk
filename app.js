const fs = require('fs');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const stream = fs.createReadStream('./public/index.html', 'utf-8');

    res.setHeader('content-type', 'text/html');

    stream.pipe(res);
});

module.exports = app;
