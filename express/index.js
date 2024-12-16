const express = require('express');
const app = express();

app.get('', (req, resp) => {
    console.log("data sent by browser", req.query.name)
    resp.send('Heloooooo,'+req.query.name);
}); 

app.get('/about', (req, resp) => {
    resp.send('Heloooooo, This is About page');
}); 

app.listen(5000);