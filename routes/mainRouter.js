const mainRouter = require('express').Router();
const { Op } = require('sequelize');
const { Candidate } = require('../db/models');
const MainPage = require('../views/MainPage');
// const Card = require('../views/Card');

mainRouter.get('/api/candidates', async (req, res) => {
  const candidates = await Candidate.findAll();
  res.renderComponent(MainPage, { candidates });
});

mainRouter.get('/api/candidates/new-candidates', async (req, res) => {
  const candidates = await Candidate.findAll({
    where: {
      // createdAt: {
      //   // добавленные за последнюю неделю
      //   [Op.gte]: new Date(new Date() - (7 * 24 * 60 * 60 * 1000)),
      // },
      id: 1
    },
  });
  res.renderComponent(MainPage, { candidates });
});

module.exports = mainRouter;
