const db = require('../models');
const Report = db.reports;
const Op = db.Sequelize.Op;

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
  };

  try {
    const data = await Report.create(newReport);
    res.status(200).json(data);
    console.log('Successfully created a new report.');
  } catch (error) {
    res.status(500).send({
      message: err.message || 'Error while inserting new report into database.'
    })
  }
}

// Get all reports
exports.findAll = async (req, res) => {
  try {
    const data = await Report.findAll();
    res.status(200).json(data);
    console.log('Successfully retrieved reports.');
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: error.message || 'Error while retrieving reports from the database.'
    });
  }
}

// Get a single report
exports.findOne = async (req, res) => {
  if (!req.params.id) {
    res.status(400).send({
      message: 'Must have id'
    });
  }

  const id = req.params.id;

  try {
    const data = await Report.findByPk(id);
    res.status(200).json(data);
  } catch (error) {
    res.send({
      message: error
    })
  }
}

// Search reports for text
exports.search = async (req, res) => {
  console.log('Called search');
  console.log('PARAMS',req.query)

  if (!req.query.queryString) {
    console.log('missing query string')
    res.status(400).send({
      message: 'Missing search terms'
    });
  }

  const queryString = req.query.queryString;

  try {
    const response = await Report.findAll({
      where: {
        [Op.or]: [
          {
            client_name: {
              [Op.like]: `%${queryString}%`
            }
          },
          {
            canvas_entry: {
              [Op.like]: `%${queryString}%`
            }
          }
        ]
      }
    });
  
    if (response.length > 0) {
      res.status(200).json(response);
    } else {
      res.status(404).send({
        message: `Did not find a match for ${queryString}`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err || `Could not find a match for ${queryString}`
    });
  }
}