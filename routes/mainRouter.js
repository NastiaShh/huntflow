const mainRouter = require('express').Router();
const { Candidate } = require('../db/models');
const MainPage = require('../views/MainPage');

mainRouter.get('/', async (req, res) => {
  const candidates = await Candidate.findAll();
  res.renderComponent(MainPage, { candidates });
});

module.exports = mainRouter;
