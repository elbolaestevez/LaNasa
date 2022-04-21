const mongoose = require("mongoose");
require('dotenv').config();
const database=process.env.DATABASE;
const uri =database


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once('open', () => console.log('DB Connected'))
module.exports = mongoose;


