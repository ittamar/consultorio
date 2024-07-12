let sucess;
module.exports.dashboard = function (application, req, res) {

    if (req.session.autorizado) {
        res.render("admin/dashboard-admin.ejs");
    } else {
        res.send("Usuário não autenticado!");
    }

}
module.exports.logout = function (application, req, res) {
    req.session.destroy(function (erro) {
        res.redirect("/index");
    })

}

//exibe o fom addfuncionário
module.exports.formaddemployee = function (application, req, res) {
    res.render("admin/form-add-employee");

}


module.exports.addemployee = function (application, req, res) {

    var dadosForm = {
        name_funcionario: req.body.nameuser,
        password_funcionario: req.body.passworduser,
        id_tab_admin_fg: 1
    }

    var connection = application.config.dbConnection();//inicia a conexão

    var dataAdmin = new application.app.models.AdminDao(connection);//conecta com o dao

    dataAdmin.isertFuncionario(dadosForm, function (erro, result) {
        if (erro == null) {
            sucess = "Adicionado com sucesso!";
            res.redirect("msg");
        } else {
            console.log("ferrou")
        }


    });

}

//msg
module.exports.msg = function (application, req, res) {
    res.render("msg", { msg: sucess });
}

//Exibir funcionários
module.exports.tabelaFuncionario = function (application, req, res) {
    var connection = application.config.dbConnection();//inicia a conexão
    var dataAdmin = new application.app.models.AdminDao(connection);//conecta com o dao

    dataAdmin.getFuncionarios(function (erro, result) {
        res.render('admin/tabela-funcionarios', { funcionario: result });

    });

}

module.exports.deleteFuncionario = function (application, req, res) {
    var idFuncionario = req.body;


    var connection = application.config.dbConnection();//inicia a conexão
    var dataAdmin = new application.app.models.AdminDao(connection);//conecta com o dao

    if (idFuncionario != undefined) {

        if (!isNaN(idFuncionario.idDelete)) {
            dataAdmin.deleteFuncionario(idFuncionario.idDelete, function (erro, result) {
                res.redirect("/tabela-funcionarios");
            });

        } else {
            res.redirect("/tabela-funcionarios");
        }
    } else {
        res.redirect("/tabela-funcionarios");
    }
}





module.exports.formEditFuncionario = function (application, req, res) {
    var id = req.query.id

    var connection = application.config.dbConnection();//inicia a conexão
    var dataAdmin = new application.app.models.AdminDao(connection);//conecta com o dao

    if (!isNaN(id)) {
        
        if (id != undefined) {

            dataAdmin.buscarFuncionarioId(id, function (erro, result) {
                if (erro) {
                    console.log(erro);
                } else {
                 
                    res.render("admin/form-edit-employee",{dataFuncionario:result[0]});                   
                }
            });
        } else {
            res.redirect("/tabela-funcionarios");
        }
    }


}

module.exports.formUpdateEmployee = function(application, req, res){
  var employee = req.body
 
   var connection = application.config.dbConnection();//inicia a conexão
   var dataAdmin = new application.app.models.AdminDao(connection);//conecta com o dao

   dataAdmin.updateEmployee(employee, function(erro, result){
    sucess = "Funcionário atualizado com sucesso!";
    res.render("msg", { msg: sucess });

   });

}

module.exports.examesLaboratoriais = function(application, req, res){
    res.render("admin/exames-laboratoriais");
}
