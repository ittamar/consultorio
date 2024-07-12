 const adminAuth = require('../../middlewares/adminAuth.js');

module.exports = function(application){
    application.get('/dashboard-admin', function(req, res){
        application.app.controllers.dashboardAdmin.dashboard(application, req, res);

    });

    application.get("/logout", function(req, res){
        application.app.controllers.dashboardAdmin.logout(application, req, res);
    });

    //ir para form add funcionário
    application.get("/addemployee",adminAuth, function(req, res){
        application.app.controllers.dashboardAdmin.formaddemployee(application, req, res);
    });

    //msg 
    application.get("/msg",adminAuth, function(req, res){
        application.app.controllers.dashboardAdmin.msg(application, req, res);
    });


    //receber dados do form add funcionário
    application.post("/addemployee",function(req, res){
        application.app.controllers.dashboardAdmin.addemployee(application, req, res);
    })

    //Exibir funcionários
    application.get("/tabela-funcionarios",adminAuth, function(req, res){
        application.app.controllers.dashboardAdmin.tabelaFuncionario(application, req, res);
       
    });

    //Deletar funcionário
    application.post("/delete-funcionario",adminAuth, function(req, res){
      application.app.controllers.dashboardAdmin.deleteFuncionario(application, req, res);
    });

    application.get("/form-edit-employee",adminAuth,(req,res)=>{
        application.app.controllers.dashboardAdmin.formEditFuncionario(application, req, res);
  
      });

      application.post("/form-update-employee",(req,res)=>{
        application.app.controllers.dashboardAdmin.formUpdateEmployee(application, req, res);  
      });

      application.get("/exames-laboratoriais",(req,res)=>{
        application.app.controllers.dashboardAdmin.examesLaboratoriais(application, req, res);  
      });


}