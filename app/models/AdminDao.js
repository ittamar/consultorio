function AdminDao(connection){
    this._connection = connection;
}

AdminDao.prototype.autenticar= function(callback){
    this._connection.query('select * from laboratorio.admin', callback);   
}


AdminDao.prototype.insertAdmin= function(callback){
    this._connection.query('INSERT INTO admin(idadmin, col_name, col_password) VALUES(5,"boba","2312");', callback);
}

//Insert funcionário
AdminDao.prototype.isertFuncionario = function(funcionario, callback){
    this._connection.query('insert into funcionario_table set ?',funcionario, callback)
}

AdminDao.prototype.getFuncionarios = function(callback){
    this._connection.query('SELECT * FROM funcionario_table',callback);
}
AdminDao.prototype.deleteFuncionario = function(idDelete, callback){
    this._connection.query(`DELETE FROM funcionario_table WHERE idnew_table = ${idDelete}`, callback);
}

AdminDao.prototype.buscarFuncionarioId = function(idFuncionario, callback){
    
    this._connection.query(`SELECT * FROM funcionario_table WHERE idnew_table = ${idFuncionario}`, callback);
}

AdminDao.prototype.updateEmployee = function(employee, callback){
    this._connection.query(`UPDATE funcionario_table SET name_funcionario ='${employee.nameuser}', password_funcionario = '${employee.passworduser}' WHERE idnew_table = ${employee.idupdate}`, callback);
}

module.exports = function(){
    return AdminDao;
}
