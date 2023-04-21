var Item = require('../FrontEnd/FrontEnd_Proyecto.js')
exports.Guardar = function (req, res) {
    console.log(req.body)
    Item.create({
        //Se crea todos los objetos
        NOMBREMUS: req.body.NOMBREMUS,
        NOMBOBRA: req.body.NOMBOBRA,
        INFOEXTOBRA: req.body.INFOEXTOBRA,
        IMAGENOBRA: req.body.IMAGENOBRA,

    },

        function (err, item) {
            if (err) {
                res.send(err)
            } else {
                //busca todos los datos
                Item.find(function (err, item) {
                    //Si da error
                    if (err) {
                        res.send(err)
                    }
                    else {
                        //Si no da error enviamos el dato
                        res.json(item)
                    }
                })
            }
        }
    )
}
exports.Coment = function (req, res) {
    Item.create({
        NOMBREMUSCOM: req.body.NOMBREMUS,
        NOMBOBRACOM: req.body.NOMBOBRA,
        INFOEXTOBRACOM: req.body.INFOEXTOBRA,
        IMAGENOBRACOM: req.body.IMAGENOBRA,
        COMENTAR: req.body.COMENTAR
    }
    
        , function (err, item) {
            Item.remove({
                _id: req.body._id
            }
            //devuelve todos los datos
            , function (err, item) {
                if (err) {
                    //comprueba si hay un error
                    res.send(err);
                }
                else {
                    //ya no hay error entonces enviamos los datos
                    res.json(item);
                }
            });
        }
    )
};

exports.Comentar = function (req, res) {
    Item.update({ _id: req.body._id }, {
        $push: {
            //empujamos un dato a los comentarios
            COMENTAR: req.body.COMENTAR,
        }
    },
        function (err, item) {
            if (err) {
                res.send(err);
            }
            else {
                //encuentra todos los datos
                Item.find(function (err, item) {
                    //error?
                    if (err) {
                        res.send(err);
                    }
                    //no error entonces enviamos los datos
                    else {
                        res.json(item);
                    }
                });
            }
        });
}
exports.Modificar = function (req, res) {
    Item.update({ _id: req.body._id }, {
        $set: {
            //cambiamos los datos
            NOMBREMUS: req.body.NOMBREMUS,
            NOMBOBRA: req.body.NOMBOBRA,
            INFOEXTOBRA: req.body.INFOEXTOBRA,
        }
    },
        function (err, item) {
            if (err) {
                res.send(err);
            }
            else {
                //obtiene y devuelve todos los datos
                Item.find(function (err, item) {
                    if (err) {
                        //por si pasa un error
                        res.send(err);
                    }
                    else {
                        //errorn't entonces devolvemos los datos
                        res.json(item);
                    }
                });
            }
        });
}
exports.Seleccionartodos = function (req, res) {
    console.log(req.body)
    //encontramos todos los objetos
    Item.find(
        function (err, item) {
            if (err) {
                res.send(err)
            } else {
                Item.find(function (err, item) {
                    if (err) {
                        res.send(err)
                    }
                    else {
                        res.json(item)
                    }
                })
            }
        }


    )
}
exports.Eliminar = function (req, res) {
    console.log(req.body)
    //Destruye el dato
    Item.remove({ _id: req.body._id }
        , function (err, item) {
            if (err) {
                res.send(err);
            }
            else {
                //devuelve todos los datos
                Item.find(function (err, item) {
                    if (err) {
                        //comprueba si hay un error
                        res.send(err);
                    }
                    else {
                        //ya no hay error entonces enviamos los datos
                        res.json(item);
                    }
                });
            }
        });
}
