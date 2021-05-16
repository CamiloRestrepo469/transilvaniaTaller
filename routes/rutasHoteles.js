//traigo el metodo router de express para personalizar mis rutass 
const { Router }= require ('express');

//importar traer los controladores
const { id_hotel }= require('../controllers/controladorHoteles')

const { buscarHotelTransilvania }= require('../controllers/controladorHoteles')

const { agregarHotelTransilvania }= require('../controllers/controladorHoteles')

const { editarHotelTransilvania }= require('../controllers/controladorHoteles')

const { eliminarHotelTransilvania }= require('../controllers/controladorHoteles')

//personalizo mis rutas 
const rutas=Router();
//listado de rutas
rutas.get('/id/reservas',id_hotel);
rutas.get('/consultar/consultareserva',buscarHotelTransilvania);
rutas.post('/crear/creareservacion',agregarHotelTransilvania);
rutas.put('/actualizar/editareservacion',editarHotelTransilvania);
rutas.delete('/eliminar/Eliminareserva',eliminarHotelTransilvania);


//exporto la rutas
module.exports=rutas


