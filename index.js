const express = require('express');
const app = express();
const port = 3000;
const v1 = require('./routes/v1/');
var bodyParser = require('body-parser/index');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

v1.createRoutes(app);

app.listen(port,()=>{
    console.log(`Listening to \n http://localhost:3000`)
})
