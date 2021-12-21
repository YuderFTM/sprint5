const express = require('express');
const router = express.Router();
const Campeonato = require('../models/campeonato');

router.get('/', async(req, res)=>{

    try {
        const arrayCampeonatosBD = await Campeonato.find()
        // console.log(arrayMascotasBD)

        res.render("campeonato", {
           
                arrayCampeonatos : arrayCampeonatosBD
        })
    }catch(error){
        console.error(error)
    }
})
// para crear caampeonatos
router.get('/CrearCampeonato', ( req, res )=>{
    res.render('CrearCampeonato');
})
// 
router.post('/', async ( req, res )=>{
    const body = req.body
   try{
       //primer forma
    // const mascotaDB = new Mascota(body)
    // await mascotaDB.save();

    await Campeonato.create(body)
    
    res.redirect('/campeonatos')
   }catch(error){
       console.log(error);
   }
})

// este es para mostrar 
router.get('/:id', async(req, res)=>{
    const id= req.params.id
    try{
        const campeonatoDB = await Campeonato.findOne({ _id: id })
        // console.log(mascotaDB)
        res.render('detalle', { 
            campeonato: campeonatoDB,
            error: false
        })

    } catch(error){
        console.log(error)
        res.render('detalle', { 
            error: true,
            mensaje: 'No se encuentra el ID seleccionado'
        }
    )}
})

//este es para eliminar
router.delete('/:id', async(req, res) => {
    const id = req.params.id
    try{
        const campeonatoDB = await Campeonato.findByIdAndDelete({ _id : id })
        if(campeonatoDB){
            res.json({
                estado: true,
                mensaje:'eliminado'
            })
        }else{
            res.json({
                estado: false,
                mensaje:'Fallo eliminar'
            })

        }
    }catch(error){
        console.log(error)
    }
})


//para editar mascota

router.put('/:id', async(req, res)=>{
    const id = req.params.id //para leer el id
    const body = req.body
    try {
        const campeonatoDB = await Campeonato.findByIdAndUpdate(id, body, {useFindAndModify: false})
        console.log(campeonatoDB)

        res.json({
            estado:true,
            mensaje:'editado'
        })
    } catch (error) {
    console.log(error)     
    
    res.json({
        estado:false,
        mensaje:'Fallamos!!'
    })
    }
})

module.exports = router;