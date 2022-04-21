const mongoose = require("../utils/mongo");
const Schema = mongoose.Schema;

const landingSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  nametype: {
    type: String,
    required: true,
  },
  recclass: {
    type: String,
    required: true,
  },
  mass: {
    type: String,
    required: true,
  },
  fall: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    index: true,
    required: true,
  },
  reclat: {
    type: String,
    required: true,
  },
  reclong: {
    type: String,
    required: true,
  },
  geolocation: {
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
});
module.exports = mongoose.model("Landing", landingSchema);
