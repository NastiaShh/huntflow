const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ssr = require('../middlewares/ssr');

function expressConfig(app) {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use((express.json()))
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(ssr);
}

module.exports = expressConfig;
