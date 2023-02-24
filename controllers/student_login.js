const Student = require("../models/student");
const bcrypt = require("bcryptjs");


module.exports.login = function(req, res){
    if(!req.cookies.student_jwt){
        return res.render('login');
    }
    else{
        return res.redirect('/');
    }
}


module.exports.login_post = async function(req , res){

    try{

        const foundID = await Student.findOne({rollNumber: req.body.LoginName});

            if(foundID){
                //Compare the Hash password- returning true or false
                const isMatch = await bcrypt.compare(req.body.LoginPassword, foundID.studentPassword);

                //If password is matched
                if(isMatch){
                    //json web token is generating
                    const token = await foundID.generateAuthToken();

                   //Saving the token in cookie
                    res.cookie("student_jwt", token, {
                    expires: new Date(Date.now() + 600000),    //After 60sec cookie will expire
                    httpOnly: true                            //Now client side can't touch the cookie to alter it
                    // secure: true
                });
            
                return res.redirect("/complain");
                }
                else{
                    //If password didn't match
                    return res.redirect('back');
                }
                
            }

            else{
            //User not found
            return res.redirect('back');
            }
    }
    catch(err){
        // console.log("Error", err);
        res.redirect('back');
    }
}