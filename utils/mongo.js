const mongoose = require("mongoose");
require('dotenv').config();
const database=process.env.DATABASE;
const uri =database


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once('open', () => console.log('DB Connected'))
module.exports = mongoose;


// require('dotenv').config();
// const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nasaapi.uub2i.mongodb.net/NasaApi?retryWrites=true&w=majority`;


// const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     ssl: true
// }

// mongoose.connect(url, connectionParams)
//     .then(() => {
//         console.log('Connected to database ')
//     })
//     .catch((err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })

// module.exports = mongoose;