import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import FiladelatabladeLugares from './tablaMostrar.jsx'


class Formulario extends Component{
    state={
        PERSONAS:{
            _id: "",
            nombre: "",
            apellido: "",
            email: "",
                tipousuario: "",
                password: "",
            foto: "",
        },
        PERSONASVEC:[]

    }
    render(){
        const inputStyleimg = { border_radius: '50%',cursor:'pointer',width:'100px' }
        const oculta = { visibility: 'collapse'}
        const muestra = { visibility: 'vivible' }
            
        return (<React.Fragment>
            <div id='Loginregistro'>
                <input type='text' className='form-control' id='nombre' placeholder = 'Escriba el nombre' onChange = {(evt) => this.actualizadatosaguardar(evt)}/>
                <input type='text' className='form-control' id='apellido' placeholder = 'Escriba el apellido' onChange = {(evt) => this.actualizadatosaguardar(evt)} />
                <input type='text' className='form-control' id='email' placeholder = 'Escriba el correo del usuario' onChange = {(evt) => this.actualizadatosaguardar(evt)}/>
                <input type='text' className='form-control' id='tipousuario' placeholder = 'Escriba el tipo de usuario' onChange = {(evt) => this.actualizadatosaguardar(evt)}/>
                <input type='text' className='form-control' id='password' placeholder = 'Escriba la contraseña' onChange = {(evt) => this.actualizadatosaguardar(evt)}/>
                <input type='file' className='form-control' id='foto' onChange = {(evt) => this._onChange(evt)}/>
                <input type= 'button' className='btn btn-primary' id='botonguardar' value='mostrar'  onClick={this.mostrar} />
                <input type= 'button' className='btn btn-primary' id='botonguardar' value='Guardar'  onClick={this.guardarpersona} />
                </div>
                <div className='carta'></div>
                    {this.state.PERSONASVEC.map(op=> <FiladelatabladeLugares _id={op._id} nombre = {op.nombre} apellido = {op.apellido} email = {op.email} tipousuario = {op.tipousuario} password = {op.password} foto={op.foto} eliminarLugar = {this.eliminarLugar}/>)}
            </React.Fragment>
               );
    }
actualizadatosaguardar(evt){
    var objetolocalLugar= new Object();
   
    objetolocalLugar= this.state.PERSONAS

    switch(evt.target.id){

            case "nombre":
                
                console.log(this.state.PERSONAS)
                objetolocalLugar.nombre = evt.target.value;

            break;

            case "apellido":
                
                console.log(this.state.PERSONAS)
                objetolocalLugar.apellido = evt.target.value;

            break;

            case "email":
                
                console.log(this.state.PERSONAS)
                objetolocalLugar.email = evt.target.value;

            break;

            case "tipousuario":
                
                console.log(this.state.PERSONAS)
                objetolocalLugar.tipousuario = evt.target.value;

            break;

            case "password":
                
            console.log(this.state.PERSONAS)
            objetolocalLugar.password = evt.target.value;

            break;

            case "foto":
                
            console.log(this.state.PERSONAS)
            objetolocalLugar.foto = evt.target.value;

            break;
               
        }
   
    this.setState({
        PERSONAS: objetolocalLugar
    })
}

_onChange = (e) => {
    var objetolocalLugar = new Object();
        objetolocalLugar = this.state.PERSONAS

        if (e.target.files && e.target.files[0]) {
            if (e.target.files[0].size < 2097152) {

                var reader = new FileReader();

                reader.onload = function (e) {
                 objetolocalLugar.foto= e.target.result
                };

                reader.readAsDataURL(e.target.files[0]);
           
                       this.setState({
                            PERSONAS: objetolocalLugar
                        });

            } 
        }
console.log(e)
}
mostrar = () => {
    // With all properties
    var objetolocal = this.state.PERSONAS;
    const recipeUrl = 'http://localhost:8080/api/todos';

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
                PERSONASVEC: persons
              });

        console.log(persons);
       
      // this.setState({combosactuales: recipes})
        });
}
guardarpersona = () => {
    // With all properties
    var objetolocal = this.state.PERSONAS;
    const recipeUrl = 'http://localhost:8080/api/nuevapersona';

     const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(objetolocal)
        };

    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(persons => {
            this.setState({
                PERSONASVEC: persons
              });

        console.log(persons);
       
      // this.setState({combosactuales: recipes})
        alert("Guardado");
        });
}

eliminarLugar = (id) =>{
    console.log(id)

    var objetolocal = this.state.PERSONAS
    objetolocal._id = id

    const Url = 'http://localhost:8080/api/eliminaper';
    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(objetolocal)
    };
    fetch(Url, requestMetadata)
    .then(res => res.json())
    .then (lugares => {
        console.log(lugares)

        this.setState({
            PERSONASVEC: lugares
        })
        alert('Eliminado')
    });

}

}

export default Formulario;