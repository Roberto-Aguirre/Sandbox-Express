//* Iniciar las utilidades del sistema.
var mysql = require("mysql2");
const controllerGet = require("../Controller/sqlGet")
require('dotenv').config()

const credencialesMySql = {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT
};

var con = mysql.createConnection(credencialesMySql);

function consutaGet() {
    return new Promise((resolve,reject)=>{
        con.connect(function (err) {
            if (err) throw err;
    
            con.query(controllerGet.GetAlumnos, function (err, results, fields) {
                if (err) reject(new Error("No se consulto la query"));
                resolve(results);
            })
        });
    })
};

module.exports = {
    consutaGet
};