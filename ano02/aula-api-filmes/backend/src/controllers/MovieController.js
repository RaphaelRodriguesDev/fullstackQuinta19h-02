const { connection, Movie } = require("../database/index");

Movie.init(connection);

module.exports = {
  async list(req, res) {
    try {
      const movies = await Movie.findAll();
      return res.json(movies);
    } catch (err) {
      console.error("Erro na busca: ", err);
      return res.status(500).json({ error: "Erro na busca" });
    }
  },
};
