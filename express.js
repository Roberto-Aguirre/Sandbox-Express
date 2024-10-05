const express = require('express');
const app = express();

const port = 3000;

app.get("/", async(req,res)=>{
    try {
        res.json([{
            "InstitucionClave": "CONDUSEF_EJEMPLO, S.A. de C.V., SOFOM, E.N.R.",
            "Sector": "Sociedades Financieras de Objeto Múltiple E.N.R.",
            "ConsultasTrim": 1,
            "NumConsultas": 1,
            "ConsultasFolio": "REUNE_FOLIO1",
            "ConsultasEstatusCon": 1,
            "ConsultasFecAten": "17/03/2024",
            "EstadosId": 32,
            "ConsultasFecRecepcion": "16/03/2024",
            "MediosId": 14,
            "Producto": "026911811258",
            "CausaId": "0666",
            "ConsultasCP": 87070,
            "ConsultasMpioId": 10,
            "ConsultasLocId": 1,
            "ConsultasColId": 2,
            "ConsultascatnivelatenId": 1,
            "ConsultasPori": "SI"
        },{code:"ok",message:"Status 200 OK"}]);
    } catch (error) {
        res.status(500).send+(`An error ocurred: ${error}`);
    }
});

app.listen(port,()=>{
    console.log(`Server running on port \n localhost:${port}`);
})