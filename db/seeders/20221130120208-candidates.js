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
        Stage: [
          {
            invitation_letter: null,
            screening_call: null,
            video_interview: null,
            cv_sent: null,
            interview_scheduled: null,
            offer: null,
            hired: null,
            denied: null
          },
        ],
      },
      {
        fullname: 'Баженова Екатерина Игоревна',
        phone: '+79117890021',
        email: 'katya.b@yandex.ru',
        telegram: 't.me/katya.b',
        cv: 'https://www.tvserial.it/wp-content/uploads/2021/10/i-protagonisti-di-brassic-credits-serially.jpeg',
        Stage: [
          {
            invitation_letter: null,
            screening_call: null,
            video_interview: null,
            cv_sent: null,
            interview_scheduled: null,
            offer: null,
            hired: null,
            denied: null
          },
        ],
        Comments: [
          {
            comment: 'OK2',
          },
        ],
      },
      {
        fullname: 'Любимова Оксана Петровна',
        phone: '+79114503658',
        email: 'oxana.l@gmail.com',
        telegram: 't.me/oxana.l',
        cv: 'https://www.tvserial.it/wp-content/uploads/2021/10/i-protagonisti-di-brassic-credits-serially.jpeg',
        Stage: [
          {
            invitation_letter: new Date(2022, 11, 11, 12, 0),
            screening_call: new Date(2022, 11, 12),
            video_interview: null,
            cv_sent: null,
            interview_scheduled: null,
            offer: null,
            hired: null,
            denied: null
          },
        ],
        Comments: [
          {
            comment: 'OK',
          },
        ],
      },
    ],
    {
      include: [Candidate.Stage, Candidate.Comments],
    });
  },

  async down() {
    await Candidate.destroy({ truncate: { cascade: true } });
  },
};
