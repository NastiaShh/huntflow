const React = require("react");

module.exports = function Card({ candidateName, candidatePhoto }) {
  return (
    <div className="card">
      <img src={candidatePhoto} className="card-img-top" alt="Фотография кандидата" />
      <div className="card-body">
        <h5 className="card-title">{candidateName}</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a> */}
        <a href="/candidate" className="btn btn-info">
          Подробнее
        </a>
      </div>
    </div>
  );
};
