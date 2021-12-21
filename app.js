
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//parse aplication/x-www-form
app.use(bodyParser.urlencoded({ extended : false }));
//parse aplication json
app.use(bodyParser.json());


// require('dotenv').config()
const port = process.env.PORT || 3000;

//Conexion a bd
const mongoose = require('mongoose');

const user= "YuderTM_user" ;
const password ="YuderTM_user";
const dbname = "LigaAjedrez";
const uri= `mongodb+srv://${user}:${password}@cluster0.y5rvn.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log('Base de datos conectada'))
    .catch(e=> console.log(e))

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');

app.use(express.static(__dirname + '/public'));

//Rutas Web 
app.use ('/', require('./router/RutasWeb'));
app.use ('/mascotas', require('./router/Mascotas'));
app.use ('/campeonatos', require('./router/RutasWeb'));
// app.use ('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
    res.status(404).render("404",
    {titulo: "Error de servicios",
    descripcion:"muchoa errores"
    })
})


app.listen(port, ()=>{
    console.log('servidor a su servicio',  port)
})