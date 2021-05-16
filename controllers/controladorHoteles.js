//importar de express las variable rquest y response
const { request,response }=require('express');

//se crea funciones para cada uno de los servidores de presentara el api
//el munu del restaurante 
function id_hotel(peticion=request,respuesta=response){
    respuesta.json({
        estado:true,
        mensaje:'ESTE ES PARA EL ID de la reservacion'
      });
}

function buscarHotelTransilvania(peticion=request,respuesta=response){
    respuesta.json({
        estado:true,
        mensaje:'ESTE ES PARA BUSCAR EN LA RESERVA DEL HOTEL  GET'
      });
    
}

function agregarHotelTransilvania(peticion=request,respuesta=response){
    respuesta.json({
        estado:true,
        mensaje:'CON ESTE PUEDO EDITAR EN LA RESERVA  POST'
      });

}

function editarHotelTransilvania(peticion=request,respuesta=response){
    respuesta.json({
        estado:true,
        mensaje:'CON ESTE PUEDE ACTUALIZAR EN LA RESERVA  PUT'
      });

}

function eliminarHotelTransilvania(peticion=request,respuesta=response){
    respuesta.json({
        estado:true,
        mensaje:'CON ESTE PUEDO ELIMINAR  DELETE'
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
