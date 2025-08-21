const express = require("express");
const MovieController = require("./src/controllers/MovieController");
const routes = express.Router();

routes.get("/movies", MovieController.list);
routes.get("/movies/:id", MovieController.show);
routes.post("/movies", MovieController.create);
routes.put("/movies/:id", MovieController.update);
routes.delete("/movies/:id", MovieController.delete);

module.exports = routes;
