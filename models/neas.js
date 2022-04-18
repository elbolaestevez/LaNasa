const mongoose = require("../utils/mongo");
const Schema = mongoose.Schema;

const landingSchema = Schema({
  designation: {
    type: String,
    required: true,
    unique: true,
  },
  discovery_date: {
    type: String,
    required: true,
    index: true,
  },
  h_mag: {
    type: String,
    required: true,
  },
  moid_au: {
    type: String,
    required: true,
  },
  q_au_1: {
    type: String,
    required: true,
  },
  q_au_2: {
    type: String,
    required: true,
  },
  period_yr: {
    type: String,
    required: true,
  },
  i_deg: {
    type: String,
    required: true,
  },
  pha: {
    type: String,
    required: true,
  },
  orbit_class: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Neas", landingSchema);
