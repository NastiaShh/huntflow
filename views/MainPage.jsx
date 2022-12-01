const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

module.exports = function MainPage({ candidates }) {
  return (
    <Layout>
      <div className="container card-list">
        {candidates.map((candidate) => (
          <Card candidateName={candidate.fullname} key={candidate.id}/>
        ))}
      </div>
    </Layout>
  );
};
