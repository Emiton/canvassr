const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  const Report = sequelize.define('reports', {
    client_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    canvas_entry: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return Report;
}