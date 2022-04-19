const Neas = require("../models/neas");

const getNeasClass = async (req, res) => {
    const idclass = req.query.class;
    try {
      const neas = await Neas.find({ orbit_class: idclass })
        .select("designation orbit_class period_yr")
        .exec();
     
      res.status(200).send(neas);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  
const neasfilterDate = async (req, res) => {
    const { from, to } = req.query;
    console.log("santito",to);
    console.log("santifrom",from);
    // if(from){
    //   const neas = await Neas.find()
    //   .where("discovery_date")
    //   .gte(`${from}-01-01T00:00:00.000`)
    //   .select("discovery_date")
    //   .exec();
    // }
    if(to){
      console.log("llego el valor");
      const neas = await Neas.find()
      .where("discovery_date")
      .lte(`${to}-12-31T23:59:59.000`)
      .select("discovery_date")
      .exec();
    }
    try {
      const neas = await Neas.find()
        .where("discovery_date")
        .gte(`${from}-01-01T00:00:00.000`)
        .lte(`${to}-12-31T23:59:59.000`)
        .select("discovery_date")
        .exec();
      res.status(200).send(neas);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };


  module.exports = {
    getNeasClass,
    neasfilterDate,
    
  };