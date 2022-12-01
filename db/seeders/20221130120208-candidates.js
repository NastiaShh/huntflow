const { Candidate } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Candidate.bulkCreate([
      {
        fullname: 'Никитин Олег Владимирович',
        phone: '+79117897878',
        email: 'oleg.n@mail.ru',
        telegram: 't.me/oleg.n',
        cv: 'https://www.tvserial.it/wp-content/uploads/2021/10/i-protagonisti-di-brassic-credits-serially.jpeg',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        invitation_letter: null,
        screening_call: null,
        video_interview: null,
        cv_sent: null,
        interview_scheduled: null,
        offer: null,
        hired: null,
        denied: null,
        Comments: [
          {
            comment: 'OK',
          },
        ],
      },
      {
        fullname: 'Баженова Екатерина Игоревна',
        phone: '+79117890021',
        email: 'katya.b@yandex.ru',
        telegram: 't.me/katya.b',
        cv: 'https://www.tvserial.it/wp-content/uploads/2021/10/i-protagonisti-di-brassic-credits-serially.jpeg',
        photo: 'https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhZHl8ZW58MHx8MHx8&w=1000&q=80',
        invitation_letter: new Date(2022, 11, 11, 12, 0),
        screening_call: null,
        video_interview: null,
        cv_sent: null,
        interview_scheduled: null,
        offer: null,
        hired: null,
        denied: null,
        Comments: [
          {
            comment: 'OK',
          },
        ],
      },
      {
        fullname: 'Любимова Оксана Петровна',
        phone: '+79114503658',
        email: 'oxana.l@gmail.com',
        telegram: 't.me/oxana.l',
        cv: 'https://www.tvserial.it/wp-content/uploads/2021/10/i-protagonisti-di-brassic-credits-serially.jpeg',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        invitation_letter: new Date(2022, 11, 11, 12, 0),
        screening_call: new Date(2022, 11, 12),
        video_interview: null,
        cv_sent: null,
        interview_scheduled: null,
        offer: null,
        hired: null,
        denied: null,
        Comments: [
          {
            comment: 'OK',
          },
        ],
      },
    ],
    {
      include: [Candidate.Comments],
    });
  },

  async down() {
    await Candidate.destroy({ truncate: { cascade: true } });
  },
};
