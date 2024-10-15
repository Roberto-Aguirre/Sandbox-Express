const { getAllAlumnos,getAlumno,insertAlumno,updatedAlumnos } = require('../../Services/alumnosService');
const sqlService = require('../../Services/sqlService')

const GetAlumnos = async (req, res) => {
    res.json({
        alumnos: await getAllAlumnos(),
        time: new Date()
    });
}
const GetAlumno = async (req, res) => {
    let {id} = req.params
    let [alumno] = await getAlumno(id)
    if(alumno){
        res.json(alumno);
    }else{
        res.status(404).json({})
    }
}

const CreateAlumno = async (req, res) => {
    let response = await insertAlumno(req.body);
    if(response.affectedRows!=0){
        let [newAlumno] = await getAlumno(response.insertId)
        res.json(newAlumno);
    }
    else{
        res.status(400).json({message:'Bad Request'})
    }
}

const UpdateAlumno = async (req,res) =>{
    let updatedAlumno = await updatedAlumnos(req.body,req.params);
    // res.json(updatedAlumno)
    res.json({})
}
module.exports = {
    GetAlumnos, GetAlumno, CreateAlumno, UpdateAlumno
};