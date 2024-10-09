const alumnosService = require('../../Services/alumnosService');
const sqlService = require('../../Services/sqlService')

const GetAlumnos = async (req,res) =>{
    res.json(await sqlService.consutaGet());
}

module.exports = {
    GetAlumnos
};