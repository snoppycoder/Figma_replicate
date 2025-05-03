const express = require('express');
const app = express();
const userRouter = require('./controllers/user');


app.get('/', (req, rep) => {
    rep.send('<h1> Hello World </h1>')
  })

app.use('/api/users', userRouter);
module.exports = app;