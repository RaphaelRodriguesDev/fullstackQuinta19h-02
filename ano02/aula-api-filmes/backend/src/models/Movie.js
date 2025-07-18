const { Model, DataTypes } = require("sequelize");

class Movie extends Model {
  static init(connection) {
    super.init(
      {
        title: DataTypes.STRING,
        poster: DataTypes.STRING,
        overview: DataTypes.TEXT,
      },
      {
        sequelize: connection,
        schema: "public",
        tableName: "moviesAula",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        timestamps: true,
        underscored: false,
      }
    );
  }
}
module.exports = Movie;
