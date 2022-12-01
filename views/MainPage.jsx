const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

module.exports = function MainPage({ candidates }) {
  return (
    <Layout>
      <div className="container card-list">
        {candidates.map((candidate) => (
          <Card key={candidate.id} candidateName={candidate.fullname} candidatePhoto={candidate.photo} />
        ))}
      </div>

      {/* <script src="/js/candidates.js" defer /> */}
    </Layout>
  );
};
