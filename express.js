const express = require('express');
const app = express();
const port = 3000;
const sqlService = require('./Services/sqlService');

app.get("/alumnos", async (req,res)=>{
    res.json(await sqlService.consutaGet());
});

app.listen(port,()=>{
    console.log(`Server running on port \n localhost:${port}`);
})