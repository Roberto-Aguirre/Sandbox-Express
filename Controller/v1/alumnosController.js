const alumnosService = require('../../Services/alumnosService');
const sqlService = require('../../Services/sqlService')

const GetAlumnos = async (req,res) =>{
    res.json(await sqlService.GetAll());
}
const GetAlumno = async (req,res) =>{
    let id = req.params
    // console.log(id);
    res.json(await sqlService.GetAll());
}

module.exports = {
    GetAlumnos,GetAlumno
};