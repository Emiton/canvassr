const db = require('../models');
const Report = db.reports;

// Get all reports
exports.findAll = async (req, res) => {
  try {
    const data = await Report.findAll();
    res.json(data);
    console.log('Successfully retrieved reports.');
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: error.message || 'Error while retrieving reports from the database.'
    });
  }
}

// Create a new report
exports.create = async (req, res) => {
  if (!req.body.client_name || !req.body.canvas_entry) {
    res.status(400).send({
      message: 'Request missing name or entry.'
    });
    return;
  }

  const newReport = {
    client_name: req.body.client_name,
    canvas_entry: req.body.canvas_entry,
    is_published: false
  };

  try {
    const data = await Report.create(newReport);
    res.json(data);
    console.log('Successfully created a new report.');
  } catch (error) {
    res.status(500).send({
      message: err.message || 'Error while inserting new report into database.'
    })
  }
}