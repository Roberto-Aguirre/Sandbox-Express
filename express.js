const express = require('express');
const app = express();
const port = 3000;
const sqlService = require('./Services/sqlService');
app.get("/alumnos", (req,res)=>{
    sqlService.consutaGet();
    res.json({message:"Connexion exitosa"})
});

app.listen(port,()=>{
    console.log(`Server running on port \n localhost:${port}`);
})