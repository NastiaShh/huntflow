const mainRouter = require('express').Router();
const { Op } = require('sequelize');
const { Candidate, Comment } = require('../db/models');
const MainPage = require('../views/MainPage');
const CardList = require('../views/CardList');
const CandidateCard = require('../views/CandidateCard');

mainRouter.get('/api/candidates', async (req, res) => {
  const candidates = await Candidate.findAll();
  res.renderComponent(MainPage, { candidates });
});

mainRouter.post('/api/candidates', async (req, res) => {
  const { pic, name, phone, email, telegram, cv } = req.body;

  try {
    const newCandidate = await Candidate.create({
      photo: pic,
      fullname: name,
      phone,
      email,
      telegram,
      cv,
    });
    res.json(newCandidate);
  } catch (error) {
    console.error(error.message);
  }
});

mainRouter.get('/api/candidates/all-candidates', async (req, res) => {
  const candidates = await Candidate.findAll();
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/new-candidates', async (req, res) => {
  const candidates = await Candidate.findAll({
    where: {
      // createdAt: {
      //   // добавленные за последнюю неделю
      //   [Op.gte]: new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)),
      // },
      id: 1
    },
  });
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/invitation-letters', async (req, res) => {
  const candidates = await Candidate.findAll({
    where: { invitation_letter: {[Op.not]: null}},
  });
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/screening-call', async (req, res) => {
  const candidates = await Candidate.findAll({
    where: { screening_call: {[Op.not]: null}},
  });
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/video-interview', async (req, res) => {
  const candidates = await Candidate.findAll({
    where: { video_interview: {[Op.not]: null}},
  });
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/cv-sent', async (req, res) => {
  const candidates = await Candidate.findAll({
    where: { cv_sent: {[Op.not]: null}},
  });
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/interview-scheduled', async (req, res) => {
  const candidates = await Candidate.findAll({
    where: { interview_scheduled: {[Op.not]: null}},
  });
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/offers', async (req, res) => {
  const candidates = await Candidate.findAll({
    where: { offer: {[Op.not]: null}},
  });
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/hired', async (req, res) => {
  const candidates = await Candidate.findAll({
    where: { hired: {[Op.not]: null}},
  });
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/denied', async (req, res) => {
  const candidates = await Candidate.findAll({
    where: { denied: {[Op.not]: null}},
  });
  res.renderComponent(CardList, { candidates });
});

mainRouter.get('/api/candidates/:id', async (req, res) => {
  const candidate = await Candidate.findOne({
    where: { id: Number(req.params.id) },
    include: [Candidate.Comments],
  });
  res.renderComponent(CandidateCard, { candidate, hideSelect: true });
});

mainRouter.post('/api/candidates/stage/:id', async (req, res) => {
  const candidate = await Candidate.findByPk(Number(req.params.id));
  const { stageValue, stageText } = req.body;
  const currentDate = new Date();
  candidate[stageValue] = currentDate;
  candidate.current_stage = stageText;

  await candidate.save();
  res.send(currentDate);
});

mainRouter.post('/api/candidates/:id', async (req, res) => {
  const newComment = await Comment.create(req.body, {candidate_id: req.params.id});
  newComment.candidate_id = req.params.id;
  await newComment.save();
  res.send(newComment.comment);
});

module.exports = mainRouter;
