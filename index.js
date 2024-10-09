const express = require('express');
const app = express();
const port = 3000;
const v1 = require('./routes/v1/');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

v1.createRoutes(app);

app.listen(3000,()=>{
    console.log(`Listening to \n http://localhost:3000`)
})
