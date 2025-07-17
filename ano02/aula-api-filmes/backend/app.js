const app = require(".src/config/server");
const port = process.env.PORT;

app.listener(port, () => {
  console.log(`Rodando no link => https://localhost:${port}`);
});
