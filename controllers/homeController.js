

module.exports.home = function(req, res){
    const token = req.cookies;
    // console.log(token);
    return res.render('index', {presentCookie: token});
}