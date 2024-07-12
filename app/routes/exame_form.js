module.exports = function(app){
    app.get('/exame-form',function(req, res){
        res.render("exame-form")
    
    });
}