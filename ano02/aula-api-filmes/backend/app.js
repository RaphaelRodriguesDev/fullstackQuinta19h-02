const app = require("./src/config/server");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Rodando no link => https://localhost:${port}`);
});
