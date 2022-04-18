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
  
    try {
      const Neas = await Neas.find({
        $expr: {
          $gte: [
            {
              $convert: {
                input: "$discovery_date",
                to: "date",
                onError: 0,
                onNull: 0,
              },
            },
            new Date(from, 1, 1),
          ],
        },
      })
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