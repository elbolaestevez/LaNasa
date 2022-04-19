const express = require("express");
require('dotenv').config();
const landingRouter = require("./routes/landingsRoutes.js");
const neasRouter = require("./routes/neasRoutes.js");
const app = express();
const port = 3000;



app.use(express.urlencoded({ extended: true })); //Estas dos son para los métodos put y post, para que el servidor pueda leer la información nueva que le mandamos
app.use(express.json());

app.use("/api", landingRouter);
app.use("/api", neasRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
