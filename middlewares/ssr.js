const React = require('react');
const ReactDOMServer = require('react-dom/server');

function ssr(req, res, next) {
  res.renderComponent = (Cmp, props, options = { doctype: true }) => {
    const element = React.createElement(Cmp, props);
    const html = ReactDOMServer.renderToStaticMarkup(element);
    if (options.doctype) res.write('<!DOCTYPE html>');
    res.end(html);
  };

  next();
}

module.exports = ssr;
