const {GetAlumnos} = require('../../Controller/v1/alumnosController')

const createRoutes = (app) => {
    app.get('/api/v1/alumnos',GetAlumnos)
}

module.exports = {
    createRoutes
}