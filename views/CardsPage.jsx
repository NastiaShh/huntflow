const React = require('react');

module.exports = function CardsPage(( candidatesCards )) {
  return (
    {candidatesCards.map((card) => (
      // <div className="cards">
      <div className="card-container">
        <h5 className="card-title">{topic.title}</h5>
        <div id={topic.id} className={`card text-center card-${topic.id}`} style={{ width: '25rem' }}>
          <div className="card-body">
            <a href={`/cards/${topic.id}`} className="btn btn-info">Выбрать</a>
          </div>
        </div>
      </div>
      // </div>
    ))}
  )
}
