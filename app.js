require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');
const mainRouter = require('./routes/mainRouter');

const app = express();

expressConfig(app);

app.use(mainRouter);

app.listen(3000, () => console.log('Server started at 3000'));
