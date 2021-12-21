const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {titulo:"nuevo titulo"})
})
router.get('/servicios', (req, res)=>{
    res.render("servicios",{tituloServicios : "mi titulo dinamico en pag servicios"})
})
router.get('/CrearCampeonato', (req, res)=>{
    res.render('CrearCampeonato')
})
// router.get('/mascotas', (req, res)=>{
//     res.render('mascotas')
// })
module.exports = router;