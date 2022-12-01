const React = require('react');
const Layout = require('./Layout');
const CardList = require('./CardList');

module.exports = function MainPage({ candidates }) {
  return (
    <Layout>
      <CardList candidates={candidates} />
      <script src="/js/candidates.js" defer />
    </Layout>
  );
};
