var express = require("express");
var consign = require("consign");
const bodyparser = require('body-parser');
const session = require("express-session");


var app = express()


app.set('view engine','ejs');



app.set('views','./app/views');

app.use(express.static('./app/public'));

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//sessão
app.use(session({
    secret:"gjhgjhgjjh",
    resave:false,
    saveUninitialized:false,    
}));

//app.use("/");


consign().include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;