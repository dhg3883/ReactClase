var controller = require('./JS/Controller.js')
var controllerper = require('./JS/Controllerpersona.js')
module.exports = function(app){
    app.post('/api/nuevapelicula', controller.Guardar);
    app.post('/api/modificapelicula', controller.Modificar);
    app.post('/api/eliminapelicula', controller.Eliminar);
    app.post('/api/eliminaper', controllerper.Eliminar);
    app.post('/api/seleccionartodos', controller.Seleccionartodos)
    app.post('/api/comentar',controller.Comentar);
    app.post('/api/comentare',controller.Coment);
    app.post('/api/nuevapersona', controllerper.Guardar);
    app.post('/api/Login', controllerper.Login);
    app.post('/api/todos', controllerper.Seleccionartodos)
    app.get('/Admin',
    function(req,res){
        res.sendfile('PaginaAdmin.html');
    }   
    )
    app.get('/Articulos',
        function(req,res){
            res.sendfile('Proyecto_MongoDB.html');
        }
    );

    app.get('/fondo',
    function(req,res){
        res.sendfile('IMG/CanineDefiantAdmiralbutterfly-size_restricted.gif');
    }
    );
    app.get('/com',
    function(req,res){
        res.sendfile('comentar.html');
    }
    );
    app.get('/funcioncine',
    function(req,res){
        res.sendfile('FrontEnd/funcionproyecto.js');
    }
    );
    app.get('cine/frontend/peli',
    function(req,res){
        res.sendfile('FrontEnd/FrontEnd_Proyecto.js')
    }
        )
    app.get('/proyectocss',
    function(req,res){
        res.sendfile('CSS/Proyecto_MongoDB.css')
    }
        )   
    app.get('/register',
    function(req,res){
       res.sendfile('register.html')
    }
       )
    app.get('/login',
    function(req,res){
        res.sendfile('login.html')
    }
    )

    var Persona = require('./persona.js');
    app.get('register', function(req,res){
        Persona.find({email:req.query.email,password:req.query.password}, function(err,persona){
        if(err){
        res.send(err)
        }else{
            if(persona.lenght>0){
                res.sendfile('login.html')
            }else{
                res.json("Hackn't?")
            }
        }
        })
    })
}