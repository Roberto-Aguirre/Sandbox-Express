const { getAllAlumnos } = require('../../Services/alumnosService');
const sqlService = require('../../Services/sqlService')

const GetAlumnos = async (req, res) => {
    res.json({
        alumnos: await getAllAlumnos(),
        time: new Date()
    });
}
const GetAlumno = async (req, res) => {
    let id = req.params
    // console.log(id);
    res.json(response);
}

module.exports = {
    GetAlumnos, GetAlumno
};