const Neas = require("../models/neas");

const createNeas = async (req, res) => {
    try {
      const neas = await new Neas(req.body).save();
      res.status(200).send({ message: "user created successfully" });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };

  const updateNeas = async (req, res) => {
    try {
        const neas = await Neas.findOne(req.params.id );
        console.log(neas);
        Object.assign(neas, req.body);
        neas.save();
        res.status(200).send({ message: "user updated successfully" });
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
    };



  const deleteNeas = async (req, res) => {
    try {
      const neas = await Neas.findOneAndRemove(req.params.id).exec()
      console.log(neas);
    //   neas.remove();
      
    } catch {
      res.status(404).send({ error: "Meteorit is not found" });
    }
  }; 
  //http://localhost:3000/api/astronomy/neas​/create







  module.exports = {
   createNeas,
   updateNeas,
   deleteNeas
  };