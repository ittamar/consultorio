 module.exports = function(app){
    app.get('/login-admin',function(req, res){        
        res.render("login/login.ejs")    
    });
} 