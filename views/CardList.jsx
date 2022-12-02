const React = require('react');
const Card = require('./Card');

module.exports = function CardList({ candidates }) {
  return (
    <div className="container card-list">
      {candidates.map((candidate) => (
        <Card key={candidate.id} candidateId={candidate.id} candidateName={candidate.fullname} candidatePhoto={candidate.photo} />
      ))}
    </div>
  );
};
