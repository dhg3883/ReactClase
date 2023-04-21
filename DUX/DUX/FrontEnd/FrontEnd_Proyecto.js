var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Obras = new Schema({
    //Declaramos todos los objetos que vamos a guardar
    NOMBREMUS: String,
    NOMBOBRA: String,
    INFOEXTOBRA: String,
    IMAGENOBRA: String,
    COMENTAR: String,
    NOMBREMUSCOM: String,
    NOMBOBRACOM: String,
    INFOEXTOBRACOM: String,
    IMAGENOBRACOM: String,
});
module.exports = mongoose.model('Obras', Obras);