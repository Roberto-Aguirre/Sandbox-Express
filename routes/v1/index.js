const { GetAlumnos, GetAlumno, PostAlumno } = require('../../Controller/v1/alumnosController')
const { notFound } = require('../../Controller/v1/notFound');

const createRoutes = (app) => {
    app.route('/api/v1/alumnos').get(GetAlumnos).post(PostAlumno)
    app.get('/api/v1/alumnos/:id', GetAlumno)
    app.get('*', notFound)
}

module.exports = {
    createRoutes
}