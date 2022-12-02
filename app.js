require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');
const mainRouter = require('./routes/mainRouter');
// const emptyCardRouter = require('./routes/emptyCardRouter')

const app = express();

expressConfig(app);

app.use(mainRouter);
// app.use(emptyCardRouter)

app.listen(3000, () => console.log('Server started at 3000'));
