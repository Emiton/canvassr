module.exports = app => {
  const reports = require('../controllers/report.controller');

  var router = require('express').Router();
  
  // Create new report
  router.post('/', reports.create);

  // Get all reports
  router.get('/', reports.findAll);

  // Get a single report
  router.get('/published/:id', reports.findOne);
  

  app.use('/api/reports', router);
}