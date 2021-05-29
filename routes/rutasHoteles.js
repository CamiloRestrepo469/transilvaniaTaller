//traigo el metodo router de express para personalizar mis rutass 
const { Router }= require ('express');

//importar traer los controladores
const { id_hotel }= require('../controllers/controladorHoteles')

const { buscarHotelTransilvania }= require('../controllers/controladorHoteles')

const { agregarHotelTransilvania }= require('../controllers/controladorHoteles')

const { editarHotelTransilvania }= require('../controllers/controladorHoteles')

const { eliminarHotelTransilvania }= require('../controllers/controladorHoteles')

//importar validaciones 
const { validarPeticion }=require('../validations/validaciones')
//importara el metodo 
const {check}=require('express-validator');
const { array } = require('yargs');

//lista de las validaciones
// let validaciones= Array (
//     check('NombreCliente',"este campo es obligatorio").not().isEmpty(),
//     check('ApellidoCliente',"este campo es obligatorio").not().isEmpty(),
//     check('TelefonoCliente',"este campo es obligatorio").not().isEmpty(),
//     check('FechainicioReserva',"este campo es obligatorio").not().isEmpty(),
//     check('FechaFinalReserva',"este campo es obligatorio").not().isEmpty(),
//     check('Numerodepersonas',"este campo es obligatorio").not().isEmpty(),
//     check('Tipopaquete',"este campo es obligatorio").not().isEmpty(),
//     validarPeticion
// );





//personalizo mis rutas 
const rutas=Router();
//listado de rutas
rutas.get('/id/reservas/:id',id_hotel);
rutas.get('/consultar/consultareserva',buscarHotelTransilvania);
rutas.post('/crear/nuevareservacion',agregarHotelTransilvania);
rutas.put('/actualizar/editareservacion/:id',editarHotelTransilvania);
rutas.delete('/eliminar/Eliminareserva/:id',eliminarHotelTransilvania);


//exporto la rutas
module.exports=rutas


