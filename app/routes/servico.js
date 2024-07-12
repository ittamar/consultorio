module.exports = function(app){
    app.get('/servico',function(req, res){
        res.render("servico/servico.ejs")
    
    });
}