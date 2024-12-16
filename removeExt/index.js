const express = require('express');
const path = require('path');

const app = express();
const removeExt = path.join(__dirname, 'public')

app.get('', (_, resp) => {
    resp.sendFile(`${removeExt}/home.html`)
})

app.get('/about', (_, resp) => {
    resp.sendFile(`${removeExt}/about.html`)
})

app.get('/index', (_, resp) => {
    resp.sendFile(`${removeExt}/index.html`)
})

app.get('/*', (_, resp) => {
    resp.sendFile(`${removeExt}/pagenotfound.html`)
})

app.listen(3000);

