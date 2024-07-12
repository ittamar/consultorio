var mysql = require('mysql');

var conneMysql = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'laboratorio'
    }
    );

}
module.exports = function () {
   return conneMysql;
}