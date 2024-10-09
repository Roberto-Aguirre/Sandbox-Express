const GetAlumnos = 'SELECT * FROM alumnos';
const GetAlumno  = 'SELECT * FROM alumnos WHERE id=:id';

module.exports = {
    GetAlumnos, GetAlumno
};