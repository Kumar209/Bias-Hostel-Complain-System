const Complain = require("../models/complain");
const Student = require("../models/student");


module.exports.complainPage = function(req, res){
    res.render("complain");
}


module.exports.complainPost = function(req, res){
   
    const Complain1 = new Complain({
    firstName: req.body.fname,
    lastName: req.body.lname,
    building: req.body.building,
    roomNumber: req.body.RoomNumber,
    complainText: req.body.ComplainText,
    })
    if(req.file && req.file.filename){ Complain1.image =req.file.filename}

    Complain1.save((err)=> {
        if(err){
            res.render("invalidator400Page");
        }
        else{
            res.redirect("/");
        }
    })
}