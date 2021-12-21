const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Campeonato = new Schema({
    nombreC: String,
    lugar: String, 
    cantidad: String,
    premio1: String,
    premio2: String,
    fechaAp: String,
    fechaCl: String,
    estado: String,

})

//crear el modelo
const Campeonato = mongoose.model('Campeonato', campeonatoSchema);

module.exports = Campeonato;