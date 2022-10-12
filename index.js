const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError')

app.use(morgan('dev'));

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === "1234") {
        next();
    }
    else {
        throw new AppError('PASSWORD REQUIRE', 401)
    }
})

app.get('/', (req, res) => {
    res.send('/')
})

app.get('/error', (req, res) => {
    ckck.fly();
})

app.use('/secret', verifyPassword, (req, res, next) => {
    res.send('/use secret')
})



// app.use((err, req, res, next) => {
//     console.log('********************************')
//     console.log('****************Error****************')
//     console.log('********************************')
//     console.log(err)
//     next(err);
//     // res.status(500).send('500')
// })
app.use((err, req, res, next) => {
    const { status = 500 } = err
    console.log(status)
    res.status(status).send('ERRORRRRRRRR!')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})