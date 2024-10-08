//* Iniciar las utilidades del sistema.
var mysql = require("mysql");
const controllerGet = require("../Controller/sqlGet")
require('dotenv').config()

const credencialesMySql = {
    host : process.env.MYSQL_HOST,
    database:process.env.MYSQL_DATABASE,
    user : process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT
};

var con = mysql.createConnection(credencialesMySql);

function consutaGet() {
    con.connect(function (err) {
        if(err) throw err;
    // console.log("Coneccion realizada correctamente");
    con.query(controllerGet.GetAlumnos ,function (err) {
        if(err) throw err;
        
        console.log("Query realizada");
    })
    con.end();
    });
};

module.exports ={
    consutaGet
};