const express = require("express");
const router = express.Router();
const LandingGetController = require("../controllers/LandingGetController");
const LandingPostController = require("../controllers/LandingPostController");

router.get("/", (req, res) => {
  res.json({ msg: "You are in" });
});

//landings get
router.get(
  "/astronomy/landings?:minimum_mass",
  LandingGetController.getLanding
);
router.get(
  "/astronomy/landings/mass/:mass",
  LandingGetController.getLandingByMass
);
router.get(
  "/astronomy/landings/class/:class",
  LandingGetController.getLandingClass
);
router.get("/astronomy/landings/dates?:from?:to?", LandingGetController.filterDate);

//landing post
router.post("/astronomy/landings/create", LandingPostController.createLanding);
router.put("/astronomy/landings/:id", LandingPostController.updateLanding);
router.delete("/astronomy/landings/:id",LandingPostController.deleteLanding);



module.exports = router;
