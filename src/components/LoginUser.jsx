import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Principal from './principal.jsx';



class Login extends Component {
    state = {
        PERSONAS: {
            _id: "",
            nombre: "",
            apellido: "",
            email: "",
            tipousuario: "",
            password: "",
            foto: "",
        },
        ingresaaralsistema: false
    }
    render() {
        const inputStyleimg = { border_radius: '50%', cursor: 'pointer', width: '100px' }
        const estiloImagen = { height: "50px" }

        if (this.state.ingresaaralsistema) {
            return <React.Fragment>
                <Principal />
            </React.Fragment>
        }
        else {

            return (<React.Fragment>
                <h1 className="text-light">Login</h1>
                <div id="Login" className="center">
                    <div className="input-group">
                        <span className="input-group-text">Email y Contraseña</span>
                        <input type="text" aria-label="Email" placeholder="Email" className="form-control" />
                        <input type="text" aria-label="Contrasenia" placeholder="Contraseña" className="form-control" />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" id="ing"onClick={this.Ingreso} >Ingresar</button>
                    </div>
                </div>

            </React.Fragment>);
        }
    }

    actualizadatosaverificar(evt) {
        var objetolocalpersona = new Object();

        objetolocalpersona = this.state.PERSONAS
        switch (evt.target.id) {
            case "email":
                {
                    console.log(this.state.PERSONAS)
                    objetolocalpersona.email = evt.target.value;
                    break;
                }
            case "password":
                {
                    console.log(this.state.PERSONAS)
                    objetolocalpersona.password = evt.target.value;
                    break;
                }
        }
        this.setState({
            PERSONAS: objetolocalpersona
        })
    }

    Ingreso = () => {
        var objetolocal = this.state.PERSONAS
        const recipeUrl = 'http://localhost:8080/api/Login';
        const requestMetadata = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objetolocal)
        };

        fetch(recipeUrl, requestMetadata)
            .then(res => res.json())
            .then(personas => {
                if (personas.length === 1) {
                    this.setState({
                        ingresaaralsistema: true
                    });
                    alert('Ingreso exitoso');
                }
                else {
                    alert('Algun dato es erroneo, verifique los datos.')
                }
            });
    }
}



export default Login;