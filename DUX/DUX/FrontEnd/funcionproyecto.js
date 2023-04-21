class cine {
  //contruimos todos los datos con los objetos obtenidos
    constructor(_id,
        NOMBREMUS,
        NOMBOBRA,
        INFOEXTOBRA,
        IMAGENOBRA,
        COMENTAR,
        NOMBREMUSCOM,
        NOMBOBRACOM,
        INFOEXTOBRACOM,
        IMAGENOBRACOM,
        ){
            this._id = _id;
            this.NOMBREMUS=NOMBREMUS
            this.NOMBOBRA=NOMBOBRA
            this.INFOEXTOBRA=INFOEXTOBRA
            this.IMAGENOBRA=IMAGENOBRA
            this.COMENTAR=COMENTAR
            this.NOMBREMUSCOM=NOMBREMUSCOM
            this.NOMBOBRACOM=NOMBOBRACOM
            this.INFOEXTOBRACOM=INFOEXTOBRACOM
            this.IMAGENOBRACOM=IMAGENOBRACOM
        }
        
  Guardar() {
    //Guardamos
    var objetoaenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        //llamamos al exports.Guardar
        xhr.open("POST", "/api/nuevapelicula");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function () {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };

        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Comentar() {
    //Empujamos los datos de comentar
    var objetoaenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        //Llamamos a exports.Comentar
        xhr.open("POST", "/api/comentar");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function () {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };

        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Modificar() {
    //Modificamos todo excepto las imagenes
    var objetoaenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        //Llamamos al exports.Modificar
        xhr.open("POST", "/api/modificapelicula");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function () {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };

        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Eliminar() {
    //Eliminamos
    var objetoaenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        //Llamamos al exports.Eliminar
        xhr.open("POST", "/api/Eliminapelicula");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function () {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };

        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Seleccionartodos() {
    var objetoaenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/seleccionartodos");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function () {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };

        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Coment() {
    var objetoaenviar = this;
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/comentare");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function () {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };

        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }


  

}
class login {
  //contruimos todos los datos con los objetos obtenidos
    constructor(_id,
        nombre,
        apellido,
        email,
        tipodeusuario,
        password,
        foto
        ){
            this._id = _id;
            this.nombre=nombre
            this.apellido=apellido
            this.email=email
            this.tipodeusuario=tipodeusuario
            this.password=password
            this.foto=foto
        }
        
        Guardarpersona() {
          //Guardamos
          var objetoaenviar = this;
          return new Promise(function (resolve, reject) {
            try {
              var xhr = new XMLHttpRequest();
              //llamamos al exports.Guardar
              xhr.open("POST", "/api/nuevapersona");
              xhr.setRequestHeader("Content-Type", "application/json");
      
              xhr.onload = function () {
                if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.responseText));
                } else {
                  reject(xhr);
                }
              };
      
              xhr.send(JSON.stringify(objetoaenviar));
            } catch (err) {
              reject(err.message);
            }
          });
        }
        Login() {
          //Guardamos
          var objetoaenviar = this;
          return new Promise(function (resolve, reject) {
            try {
              var xhr = new XMLHttpRequest();
              //llamamos al exports.Guardar
              xhr.open("POST", "/api/Login");
              xhr.setRequestHeader("Content-Type", "application/json");
      
              xhr.onload = function () {
                if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.responseText));
                } else {
                  reject(xhr);
                }
              };
      
              xhr.send(JSON.stringify(objetoaenviar));
            } catch (err) {
              reject(err.message);
            }
          });
        }
        Eliminar() {
          //Eliminamos
          var objetoaenviar = this;
          return new Promise(function (resolve, reject) {
            try {
              var xhr = new XMLHttpRequest();
              //Llamamos al exports.Eliminar
              xhr.open("POST", "/api/eliminaper");
              xhr.setRequestHeader("Content-Type", "application/json");
      
              xhr.onload = function () {
                if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.responseText));
                } else {
                  reject(xhr);
                }
              };
      
              xhr.send(JSON.stringify(objetoaenviar));
            } catch (err) {
              reject(err.message);
            }
          });
        }
        Seleccionartodos() {
          var objetoaenviar = this;
          return new Promise(function (resolve, reject) {
            try {
              var xhr = new XMLHttpRequest();
              xhr.open("POST", "/api/todos");
              xhr.setRequestHeader("Content-Type", "application/json");
      
              xhr.onload = function () {
                if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.responseText));
                } else {
                  reject(xhr);
                }
              };
      
              xhr.send(JSON.stringify(objetoaenviar));
            } catch (err) {
              reject(err.message);
            }
          });
        }

      }


