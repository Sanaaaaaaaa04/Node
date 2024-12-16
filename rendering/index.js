const express = require('express');
const app = express();

app.get("", (req, resp) => {
    resp.send(`
        <h1>HEYYYYY !!!</h1> <a href="/about">Go to About Page</a>
        `);
});

app.get("/about", (req, resp) => {

    resp.send(`
        <input type="text" placeholder="User name" value="${req.query.name}" />
        <button>Click me<button/>
        <a href="/">Go to Home Page</a>
        `);
});

app.get("/help", (req, resp) => {
    resp.send([
        {
            name: 'Haya',
            email: 'haya@gmail.com'
        },
        {
            name: 'Khirad',
            email: 'khirad@gmail.com'
        },
        {
            name: 'Hania',
            email: 'hania@gmail.com'
        },
    ]);
});

app.listen(3000);
