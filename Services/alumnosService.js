const { pool } = require('./sqlService')
const { SqlGetAlumno, SqlGetAlumnos, SqlInsertarAlumno } = require('../SQL/alumnosQuerys');
const { query } = require('express');

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
        const [result] = await pool.query(SqlGetAlumno, [id])
        // result.fecha_nacimiento.trim()[0];
        return result
    } catch (error) {
        throw new Error(`Error ${error}`)
    }
}

const insertAlumno = async (data) => {
    var valores = Object.values(data);
    try {
        const [result] = await pool.query(SqlInsertarAlumno, valores)
        return result
    } catch (error) {
        throw new Error(`Error ${error}`)
    }
}
const updatedAlumnos = async (data, params) => {
    // console.log(data);
    let queryParam = Object.keys(data);
    let querydatos = Object.values(data);
    let query = 'UPDATE alumnos SET '
    console.log(queryParam, querydatos);
    queryParam.forEach((element, index) => {

        if (Number.isInteger(querydatos[index])) {
            query = query.concat(`${element} = ${querydatos[index]}, `)
            // console.log(`${element} = ${querydatos[index]}`);
        }else{
            query = query.concat(`${element} = '${querydatos[index]}',`)
            // console.log(`${element} = '${querydatos[index]}'`);
        }
        console.log(query);
    });
    // console.log(params);
    let alumno = await getAlumno(params.id);
    // console.log(alumno);

}

module.exports = {
    getAllAlumnos,
    getAlumno,
    insertAlumno,
    updatedAlumnos

}