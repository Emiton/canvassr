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