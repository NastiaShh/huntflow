const React = require('react');
const Card = require('./Card');

module.exports = function CardList({ candidates }) {
  return (
    <div className="container card-list">
      <div className="card" id="empty-card">
        <img src="/img/20180125_001_1_.jpg" className="card-img-top" alt="Новый кандидат" style={{opacity: "0.5"}}/>
        <div className="card-body empty-card-body">
          <a href="/api/candidates/" className="btn btn-info" >
            Добавить нового кандидата
          </a>
        </div>
      </div>
      {candidates.map((candidate) => (
        <Card key={candidate.id} candidateId={candidate.id} candidateName={candidate.fullname} candidatePhoto={candidate.photo} />
      ))}
  </div>
  );
};
