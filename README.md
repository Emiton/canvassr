# Canvassr

### Application Architecture
This application consists of a React client, a node server which uses an Express API. The Express API is backed by a MySQL instance. The Sequelize ORM library is used to communicate with the MySQL instance. The Express is also used to serve the static files from the React client.

### Features
Canvassr allows users to create reports, view previous reports, update exisiting reports, search existing reports, and export all reports to a CSV file.