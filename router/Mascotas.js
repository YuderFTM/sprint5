const express = require('express');
const router = express.Router();
const Mascota = require('../models/mascota');

router.get('/', async(req, res)=>{

    try {
        const arrayMascotasBD = await Mascota.find()
        // console.log(arrayMascotasBD)

        res.render("mascotas", {
           
                arrayMascotas : arrayMascotasBD
              
        })

    }catch(error){
        console.error(error)
    }
})

// para crear mascotas
router.get('/crear', ( req, res )=>{
    res.render('crear');
})

// 
router.post('/', async ( req, res )=>{
    const body = req.body
   try{
       //primer forma
    // const mascotaDB = new Mascota(body)
    // await mascotaDB.save();

    await Mascota.create(body)
    
    res.redirect('/mascotas')
   }catch(error){
       console.log(error);
   }
})

// este es para mostrar 
router.get('/:id', async(req, res)=>{
    const id= req.params.id
    try{
        const mascotaDB = await Mascota.findOne({ _id: id })
        // console.log(mascotaDB)
        res.render('detalle', { 
            mascota: mascotaDB,
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
        const mascotaDB = await Mascota.findByIdAndDelete({ _id : id })
        if(mascotaDB){
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
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, {useFindAndModify: false})
        console.log(mascotaDB)

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