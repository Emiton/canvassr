module.exports = app => {
  const reports = require('../controllers/report.controller');

  var router = require('express').Router();

  // Get all reports
  router.get('/', reports.findAll);

  app.use('/api/reports', router);
}