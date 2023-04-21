var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var persona = new Schema({
    //Declaramos todos los objetos que vamos a guardar
    nombre: String,
    apellido: String,
    email: String,
    tipousuario: String,
    password: String,
    foto: String,
});
module.exports = mongoose.model('Persona', persona);