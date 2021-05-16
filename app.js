//importo el modelo del servidor
const ServidorModelo=require('./models/ServidorModelo')

//se trae el paquete de enviar
require('dotenv').config()

//Instancio (saco una fotocopia de mi servidorModelo)
let reservo= new ServidorModelo();

//levanto el servidor 
reservo.puertoApp();