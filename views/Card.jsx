const React = require("react");

module.exports = function Card({ candidateId, candidateName, candidatePhoto }) {
  return (
    <div className="card" id={candidateId}>
      <img src={candidatePhoto} className="card-img-top" alt="Фотография кандидата" />
      <div className="card-body">
        <h5 className="card-title">{candidateName}</h5>
        <a href={`/api/candidates/${candidateId}`} className="btn btn-info">
          Подробнее
        </a>
      </div>
    </div>
  );
};
