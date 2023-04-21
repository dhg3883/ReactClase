import React, { Component, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Mos from './mostrar.jsx'
class Formulario extends Component {
    state = {
        PERSONA: {

            ID: "",
            NOMBREMUS: "",
            NOMBOBRA: "",
            INFOEXTOBRA: "",
            IMAGENOBRA: "",
            COMENTAR: "",
            NOMBREMUSCOM: "",
            NOMBOBRACOM: "",
            INFOEXTOBRACOM: "",
            IMAGENOBRACOM: ""
            
            
        },
        VECTOR:[]
    }
    render() {      
        const inputStyleimg = { border_radius: '50%', cursor: 'pointer', width: '100px' }
        const oculta = { visibility: 'collapse' }
        const muestra = { visibility: 'vivible' }
        return (<React.Fragment>
            <div id='Loginregistro' onLoad={(evt => this.mostrar(evt))}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nombre del museo</span>
                    <input type="text" className="form-control" onChange = {(evt) => this.actualizadatosaguardar(evt)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="NOMBREMUS" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nombre de la obra</span>
                    <input type="text" className="form-control" onChange = {(evt) => this.actualizadatosaguardar(evt)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="NOMBOBRA" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Informacion de la obra</span>
                    <input type="text" className="form-control" onChange = {(evt) => this.actualizadatosaguardar(evt)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="INFOEXTOBRA" />
                </div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control"  onChange = {(evt) => this._onChange(evt)} id="IMAGENOBRA"/>
                        <label className="input-group-text" htmlfor="inputGroupFile02">Subir Imagen de la obra</label>
                </div>
                <input type= 'button' className='btn btn-primary' id='botonguardar' value='Guardar'  onClick={this.guardarpersona} />
                <input type= 'button' className='btn btn-primary' id='botonguardar' value='Mostrar'  onClick={this.mostrar} />
            </div>
            <div id='carta'>
            {Array.isArray(this.state.VECTOR) && this.state.VECTOR.map(op=> <Mos NOMBREMUS = {op.NOMBREMUS}  INFOEXTOBRA={op.INFOEXTOBRA} NOMBOBRA={op.NOMBOBRA} IMAGENOBRA={op.IMAGENOBRA}  Comentar = {this.Comentar} />)}

            </div>
        </React.Fragment>
        );
    }
    Comentar = () => {
        var objetolocal = this.state.PERSONA;
        const recipeUrl = 'http://localhost:8080/api/comentare';
    
         const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
    
            body: JSON.stringify(objetolocal)
            };
    
        fetch(recipeUrl,requestMetadata)
            .then(res => res.json())
            .then(persons => {
    
            console.log(persons);
           
          // this.setState({combosactuales: recipes})

            });
            alert("Comentado");
    }
    mostrar = () => {
        // With all properties
        var objetolocal = this.state.PERSONA;
        const recipeUrl = 'http://localhost:8080/api/seleccionartodos';
    
         const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
    
            body: JSON.stringify(objetolocal)
            };
    
        fetch(recipeUrl,requestMetadata)
            .then(res => res.json())
            .then(persons => {
                this.setState({
                    VECTOR: persons
                  });
    
            console.log(persons);
           
          // this.setState({combosactuales: recipes})
            });
    }
    
    _onChange = (e) => {
        var objetolocalLugar = new Object();
        
        objetolocalLugar = this.state.PERSONA

        if (e.target.files && e.target.files[0]) {
            if (e.target.files[0].size < 2097152) {

                var reader = new FileReader();

                reader.onload = function (e) {
                    console.log(objetolocalLugar.IMAGENOBRA);
                    objetolocalLugar.IMAGENOBRA = e.target.result
                };

                reader.readAsDataURL(e.target.files[0]);

                this.setState({
                    PERSONA: objetolocalLugar
                });

            }
        }
        console.log(e)
    }

    actualizadatosaguardar(evt) {
        var objetolocalpersona = new Object();

        objetolocalpersona = this.state.PERSONA
        switch (evt.target.id) {
            case "NOMBREMUS":
                {
                    console.log(this.state.PERSONA)
                    objetolocalpersona.NOMBREMUS = evt.target.value;
                    break;
                }
            case "NOMBOBRA":
                {
                    console.log(this.state.PERSONA)
                    objetolocalpersona.NOMBOBRA = evt.target.value;
                    break;
                }
            case "INFOEXTOBRA":
                {
                    console.log(this.state.PERSONA)
                    objetolocalpersona.INFOEXTOBRA = evt.target.value;
                    break;
                }
            case "IMAGENOBRA":
                {
                    console.log(this.state.PERSONA)
                    objetolocalpersona.IMAGENOBRA = evt.target.value;
                    break;
                }
            case "COMENTAR":
                console.log(this.state.PERSONA)
                objetolocalpersona.COMENTAR = evt.target.value;
                break;

        }

        this.setState({
            PERSONA: objetolocalpersona
        })


    }
    guardarpersona = () => {
        // With all properties
        var objetolocal = this.state.PERSONA
        // const Url = 'https://kongzilla.herokuapp.com/api/guardarpersona&#39;;
        const Url = 'http://localhost:8080/api/nuevapelicula'
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetolocal)
        };
        
        fetch(Url, requestMetadata)
            .then(res => res.json())
            .then(personas => {


                console.log(personas)

                // this.setState({combosactuales: recipes})
                alert("Guardado");
            });
    }


}





export default Formulario;