const { GetAlumnos, GetAlumno, CreateAlumno, UpdateAlumno } = require('../../Controller/v1/alumnosController')
const { notFound } = require('../../Controller/v1/notFound');

const createRoutes = (app) => {
    app.route('/api/v1/alumnos').get(GetAlumnos).post(CreateAlumno)
    app.route('/api/v1/alumnos/:id').get(GetAlumno).put(UpdateAlumno)
    app.get('*', notFound)
}

module.exports = {
    createRoutes
}