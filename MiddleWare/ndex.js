const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide age")
    }
    else if (req.query.age) {
        resp.send("You can not access this page")
    }
    else {
        next();
    }


}

app.use(reqFilter)


app.get('/', (req, resp) => {
    resp.send('Welcome to Home page')
})

app.get('/users', (req, resp) => {
    resp.send('Welcome to Users page')
})

app.listen(3000)