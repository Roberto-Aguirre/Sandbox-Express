const { GetAlumnos, GestAlumno, GetAlumno } = require('../../Controller/v1/alumnosController')

const createRoutes = (app) => {
    app.get('/api/v1/alumnos', GetAlumnos)
    app.get('/api/v1/alumno/:id', GetAlumno)
}

module.exports = {
    createRoutes
}