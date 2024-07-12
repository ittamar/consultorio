module.exports = function(application){

    application.post('/authenticate', function(req, res){
        application.app.controllers.autenticarAdmin.autenticar(application, req, res);

    });  
    
  
}