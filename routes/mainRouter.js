const mainRouter = require('express').Router();
// const { Op } = require('sequelize');
const { Candidate } = require('../db/models');
const MainPage = require('../views/MainPage');
const CardList = require('../views/CardList');

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

mainRouter.post('/api/candidates', async (req,res)=> {
  // console.log(req.body);
  const { name, contacts, pic } = req.body;
  // console.log(name, contacts, pic);

 try {const newCandidate = await Candidate.create({fullname: name,phone: contacts, photo: pic })
  res.json(newCandidate);
} catch(error){
  console.log(error.message);
}
})

module.exports = mainRouter;
