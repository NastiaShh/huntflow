const mainRouter = require('express').Router();

const MainPage = require('../views/MainPage');

mainRouter.get('/', async (req, res) => {
  res.renderComponent(MainPage);
});

module.exports = mainRouter;
