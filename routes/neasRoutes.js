const express = require("express");
const router = express.Router();
const NeasGetController = require("../controllers/NeasGetController");
const NeasPostController = require("../controllers/NeasPostController");


router.get(
    "/astronomy/neas?:class",
    NeasGetController.getNeasClass
  );
router.get("/astronomy/neas/:from?:to", NeasGetController.neasfilterDate);  

//Neaspost
router.post("/astronomy/neas/create", NeasPostController.createNeas)  
router.put("/astronomy/neas/:designation", NeasPostController.updateNeas);
router.delete("/astronomy/neas/:id",NeasPostController.deleteNeas);

module.exports = router;