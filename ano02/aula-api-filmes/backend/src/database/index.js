const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);
const Movie = require("../models/Movie");

Movie.init(connection);

// module.exports = connection
module.exports = {
  connection,
  Movie,
};
