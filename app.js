require("dotenv").config();
const express= require("express");
const bodyparser= require("body-parser"); 
const { json } = require("body-parser");  
const db = require("./config/mongoose");
const cookieParser = require("cookie-parser");



const app= express();

app.use(cookieParser());


// middlewires
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use('/js', express.static(__dirname + './js'));


//Use Express Route
app.use("/", require("./routes/index"));


app.listen(process.env.PORT || 3000, function(){
    console.log("server started on port 3000");
});




 






