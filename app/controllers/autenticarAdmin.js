module.exports.autenticar = function (application, req, res) {

    var dadosForm = req.body;
    var connection = application.config.dbConnection();//inicia a conexão

    var dataAdmin = new application.app.models.AdminDao(connection);//conecta com o dao

    dataAdmin.autenticar(function (erro, result, fields) {

        if (result[0] != undefined && dadosForm.password == result[0].col_password) {
            req.session.autorizado = true;
            req.session.userAdmin = result[0].col_name

        }
        if (req.session.autorizado) {
            res.redirect("/dashboard-admin");
        }
        else {
            res.redirect("/login-admin");
        }

    });




    /*  dataAdmin.insertAdmin(function(erro, result, fields){
         console.log(result);
     }); */



}