const mainRouter = require('express').Router();
// const { Op } = require('sequelize');
const { Candidate } = require('../db/models');
const MainPage = require('../views/MainPage');
const CardList = require('../views/CardList');
const CandidateCard = require('../views/CandidateCard');

mainRouter.get('/api/candidates', async (req, res) => {
  const candidates = await Candidate.findAll();
  res.renderComponent(MainPage, { candidates });
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
      //   [Op.gte]: new Date(new Date() - (7 * 24 * 60 * 60 * 1000)),
      // },
      id: 1
    },
  });
  res.renderComponent(CardList, { candidates });
});


mainRouter.post('/api/candidates', async (req,res)=> {
  // console.log(req.body);
  const {pic,name,phone,email,telegram,cv} = req.body;
  // console.log(name, contacts, pic);

 try {const newCandidate = await Candidate.create({photo: pic, fullname: name,phone,email,telegram,cv, })
  res.json(newCandidate);
} catch(error){
  console.log(error.message);
}
})

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
  const candidate = await Candidate.findOne({ where: { id: Number(req.params.id) }});
  res.renderComponent(CandidateCard, { candidate });
});


module.exports = mainRouter;
