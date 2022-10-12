const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === "1234") {
        next();
    }
    else {
        throw new Error();
    }
})



app.use('/secret', verifyPassword, (req, res, next) => {
    res.send('/use secret')
})

app.get('/error', (req, res) => {
    ckck.fly();
})

app.get('/', (req, res) => {
    res.send('/')
})

app.use((err, req, res, next) => {
    console.log('********************************')
    console.log('****************Error****************')
    console.log('********************************')
    res.status(500).send('500')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})