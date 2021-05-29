//importar de express las variable rquest y response
const { request,response }=require('express');

const reservaModelos = require('../models/reservaModelos')

//se crea funciones para cada uno de los servidores de presentara el api
//el munu del restaurante 
async function id_hotel(peticion=request,respuesta=response){
    let buscarReserva=await reservaModelos.findOne(id);
    respuesta.json({
        estado:true,
        mensaje:buscarReserva
      });
}

async function buscarHotelTransilvania(peticion=request,respuesta=response){
    let buscarReserva=await reservaModelos.find();
    respuesta.json({
        estado:true,
        mensaje:buscarReserva
      });
    
}

async function agregarHotelTransilvania(peticion=request,respuesta=response){

    let datosReserva=peticion.body;
    let reserva=new reservaModelos(datosReserva);
    await reserva.save();

    respuesta.json({
        estado:true,
        mensaje:'Reserva agregada con Exito',
        datos: reserva,
      });

}

async function editarHotelTransilvania(peticion=request,respuesta=response){
    let id=peticion.params.id;
    let datosReserva=peticion.body;

    await reservaModelos.findByIdAndUpdate(id, datosReserva)

    respuesta.json({
        estado:true,
        mensaje:'Reserva actualizada con exito'
      });

}

async function eliminarHotelTransilvania(peticion=request,respuesta=response){
    let id=peticion.params.id;
    await reservaModelos.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'Reserva eliminada, vuelva pronto'
      });

}

//exporto todas las funciones hacia el archivo rutas
module.exports={
    id_hotel,
    buscarHotelTransilvania,
    agregarHotelTransilvania,
    editarHotelTransilvania,
    eliminarHotelTransilvania
}
