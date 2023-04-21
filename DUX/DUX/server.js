let express = require('express');
let app = express(); //Utilizamos express
let mongoose = require('mongoose'); //Mongoose para mogodb
let port = process.env.PORT || 8080;
var cors = require('cors');
 //Cogemos el puerto 8080

app.configure(function(){
    //app.use(express.static(__dirname + '/'));
    app.use(express.logger('dev')); //Activamos el lof en modo 'dev'
    app.use(express.methodOverride());
});


const mongoAtlasUri = 'mongodb+srv://Admin:contra@cluster0.3x3losy.mongodb.net/?retryWrites=true&w=majority';
try{
    mongoose.connect(mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}
catch (error){
    console.log("could not connect");
}
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));


var bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//Cargamos los endpoints
require('./routes.js')(app);

//Cogemos el puerto para escuchar
app.listen(port);
console.log("APP por el puerto "+port);