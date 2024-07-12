function adminAuth(req, res, next){

if (req.session.userAdmin != undefined){
    next();
    
}else{
    res.redirect("/index");
}
}
module.exports = adminAuth