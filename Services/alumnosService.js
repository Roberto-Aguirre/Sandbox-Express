const { pool } = require('./sqlService')

const getAllAlumnos = async (data) => {
    try {
        const [result] = await pool.query('SELECT * FROM alumnos;')
        return result;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllAlumnos
}