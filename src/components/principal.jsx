import bootstrap from 'bootstrap'
import React, { Component } from 'react'
import Formulario from './03-formulario.jsx';
import LoginUsuario from './LoginUser.jsx';
import Registrar from './registrarUser.jsx';


class Principal extends Component {
    state = {

        muestracalculadora: false,
        muestraformulario: true,
        muestraRegistar: false

    }

    render() {
        if (this.state.muestracalculadora) {
            return (
                <React.Fragment>
                    <LoginUsuario />
                </React.Fragment>
            );
        }

        if (this.state.muestraformulario) {
            return (
                <React.Fragment>
                    <nav className="navbar navbar-dark bg-dark fixed-top">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">DUX</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">DUX MENU</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#" onClick={(e) => this.muestraformulario()} >Formulario</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" onClick={(e) => this.muestraRegistar()}>Registro</a>
                                        </li>

                                    </ul>
                                    <div className='d-flex justify-content-end'><input id='logout' type='button' className="btn btn-danger btn-sm" onClick={(e) => this.muestracalculadora()} value='Logout' /></div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <br />
                    <br />
                    <br />
                    <h1>Formulario</h1>
                    <Formulario />

                </React.Fragment>
            );
        }
        if (this.state.muestraRegistar) {
            return (
                <React.Fragment>
                    <nav className="navbar navbar-dark bg-dark fixed-top">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">DUX</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">DUX MENU</h5>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#" onClick={(e) => this.muestraformulario()} >Formulario</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#" onClick={(e) => this.muestraRegistar()}>Registro</a>
                                        </li>

                                    </ul>
                                    <div className='d-flex justify-content-end'><input id='logout' type='button' className="btn btn-danger btn-sm" onClick={(e) => this.muestracalculadora()} value='Logout' /></div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <h1>Registrar</h1>
                    <Registrar />

                </React.Fragment>
            );
        }
    }

    muestracalculadora() {

        this.setState({ muestraformulario: false })
        this.setState({ muestracalculadora: true })
        this.setState({ muestraRegistar: false })

    }
    muestraformulario() {

        this.setState({ muestraformulario: true })
        this.setState({ muestracalculadora: false })
        this.setState({ muestraRegistar: false })

    }
    muestraRegistar() {
        this.setState({ muestraformulario: false })
        this.setState({ muestracalculadora: false })
        this.setState({ muestraRegistar: true })
    }
}

export default Principal;