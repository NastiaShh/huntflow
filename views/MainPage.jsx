const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');
const candidate = require('../db/models/candidate');

module.exports = function MainPage({ cards }) {
  return (
    <Layout>
      <div className="container card-list">
        {cards.map((card) => (
          <Card candidateName={candidateName} key={candidate.id}/>
        ))}
      </div>
    </Layout>
  );
};
