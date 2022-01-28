const db = require('./db');
const { User , Page } = ('./db/models');
const express = require("express");
const app = express();
const volleyball = require("volleyball");
const router = require('./routes');

// logging middleware
app.use(volleyball);

// static middleware
app.use(express.static('./build'))

// parsing middleware
app.use(express.json());

app.use("/api", router);

app.use((req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

// error middleware -> https://expressjs.com/es/guide/error-handling.html
app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

db.sync({})
  .then(app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000")))
  .catch(err=>console.log(err))
