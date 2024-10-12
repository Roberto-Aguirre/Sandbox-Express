const { pool } = require('./sqlService')
const { SqlGetAlumno,SqlGetAlumnos ,SqlInsertarAlumno  } = require('../SQL/alumnosQuerys')

const getAllAlumnos = async () => {
    try {
        const [result] = await pool.query(SqlGetAlumnos)
        return result;
    } catch (error) {
        console.log(error);
    }
};

const getAlumno = async (id) => {
    try {
        const [result] = await pool.query(SqlGetAlumno,[id])
        return result
    } catch (error) {
        throw new Error(`Error ${error}`)
    }
}

const insertAlumno = async (data) => {
    var valores = Object.values(data);
    try {
        const [result] = await pool.query(SqlInsertarAlumno,valores)
        return result
    } catch (error) {
        throw new Error(`Error ${error}`)
    }
}

module.exports = {
    getAllAlumnos,
    getAlumno,
    insertAlumno
}