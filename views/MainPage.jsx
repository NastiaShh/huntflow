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
        <section className="candidate-card"></section>
      </main>
      <script src="/js/candidates.js" defer />
    </Layout>
  );
};
