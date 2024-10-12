//* Iniciar las utilidades del sistema.
var mysql = require("mysql2/promise");
require('dotenv').config()


const credencialesMySql = {
    host: process.env.MYSQL_HOST || 'localhost',
    database: process.env.MYSQL_DATABASE || 'express',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'Ilike2pizza@',
    port: process.env.MYSQL_PORT || 3306
};

var pool = mysql.createPool(credencialesMySql);

module.exports = {
    pool
};