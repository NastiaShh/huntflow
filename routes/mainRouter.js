const mainRouter = require('express').Router();
const { Op } = require('sequelize');
const { Candidate } = require('../db/models');
const MainPage = require('../views/MainPage');
const CardList = require('../views/CardList');
const CandidateCard = require('../views/CandidateCard');

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
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/all-candidates', async (req, res) => {
  const candidates = await Candidate.findAll();
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/:id', async (req, res) => {
  const candidate = await Candidate.findOne({ where: { id: Number(req.params.id) }});
  const stages = await Candidate.findOne({
    where: { id: Number(req.params.id) },
    attributes: ['invitation_letter', 'screening_call', 'video_interview', 'cv_sent', 'interview_scheduled', 'offer', 'hired', 'denied'],
  });
  res.renderComponent(CandidateCard, { candidate, stages });
});

module.exports = mainRouter;
