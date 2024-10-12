const SqlGetAlumnos = 'SELECT * FROM alumnos';
const SqlGetAlumno  = 'SELECT * FROM alumnos WHERE matricula=?';
const SqlInsertarAlumno = 'INSERT INTO alumnos (nombre,apellido_paterno,apellido_materno,email,telefono,genero,edad,fecha_nacimiento,graduado) VALUES (?,?,?,?,?,?,?,?,?)'


module.exports = {
    SqlGetAlumnos, SqlGetAlumno, SqlInsertarAlumno
};