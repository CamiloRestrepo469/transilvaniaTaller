const express = require('express');

//se traen las rutas 
const rutas=require('../routes/rutasHoteles')

//se trae la concion a BD
const { conectarBD } = require('../database/conexion')

class ServidorModelo{

    constructor(){

        //atributo (variable)  global para configurar el servidor 
        this.app=express();
        this.despertarBaseDatos();
        this.activarAPI();
    }

    //Metodo (que acciones hace mi servidor)

    puertoApp(){
        this.app.listen(process.env.PORT, function(){
            console.log(`Estoy en otro puerto diferente al del profe  ${process.env.PORT}`);
          });
    }

    activarAPI(){

        this.app.use('/',rutas);

    }
    despertarBaseDatos(){
        conectarBD();
    }


}

module.exports=ServidorModelo;