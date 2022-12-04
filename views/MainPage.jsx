const React = require('react');
const Layout = require('./Layout');
const CardList = require('./CardList');

module.exports = function MainPage({ candidates }) {
  return (
    <Layout>
      <main>
        <section className="cards">
          <CardList candidates={candidates} />
        </section>
        <section className="candidate-card">
          <div className='main-card'>
            <h1 className='huntflow-title'>Huntflow</h1>
            <h2 className='huntflow-subtitle'>сервис для трекинга кандидатов</h2>
            <img src="/img/Man_and_woman_with_briefcase_shake_hand_generated.jpg" className="background-img" alt="Man and woman"/>
          </div>
        </section>
      </main>
      <script src="/js/candidates.js" defer />
    </Layout>
  );
};
