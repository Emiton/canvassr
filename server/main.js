const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware for JSON parsing
app.use(bodyParser.json());

// Serve static files from client
app.use(express.static(path.join(__dirname, '../client/build')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));