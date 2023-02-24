const express = require("express");
const router = express.Router();
const student_auth = require("../middleware/student_auth");



//Import Complain_Controller
const complain_controller = require("../controllers/complain_controller");

const multer  = require('multer')  //used for storing image in db

//Creating Storage for image storage.
const Storage = multer.diskStorage({
    destination: "public/uploads",
    filename:(req, file, cb)=>{
        cb(null , file.originalname);
    }
 });

 const upload = multer({
    storage: Storage
 });

router.get("/", student_auth , complain_controller.complainPage);
router.post("/", upload.single("myImage") , complain_controller.complainPost);


module.exports = router;
