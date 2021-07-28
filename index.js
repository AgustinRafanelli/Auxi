const express = require("express");
const app = express();
const volleyball = require("volleyball");
const path = require("path");

// logging middleware
app.use(volleyball);

// parsing middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

app.use("/api", (req, res) => {
  res.sendStatus(404);
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));
