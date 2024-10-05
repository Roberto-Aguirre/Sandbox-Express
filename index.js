//* Iniciar las utilidades del sistema.
require('dotenv').config()
var mysql = require("mysql");
const express = require('express');

const credencialesMySql = {
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    //port: process.env.MYSQL_PORT
};

var con = mysql.createConnection({
    host: credencialesMySql.host,
    user: credencialesMySql.user,
    password: credencialesMySql.password
  });

console.log(credencialesMySql);

// con.connect(function (err) {
//     if(err) throw err;

// console.log("Coneccion realizada correctamente");

// con.query("CREATE DATABASE PRUEBA",function (err) {
//     if(err) throw err;
    
//     console.log("Query realizada.");
// })
// con.end();
// });

// con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
