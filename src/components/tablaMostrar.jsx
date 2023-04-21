import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
class FiladelatabladeLugares extends Component {
    render() {
        const inputStyleimg = { border_radius: '50%', cursor: 'pointer', width: '100px' }
        const estiloImagen = { height: "50px" }
        const estilocard = {width: "150px"}
        return <React.Fragment>
            <div class="card" style={estilocard}>
                <img src={this.props.foto}/>
                <div class="card-body">
                    <p class="card-text">{this.props.nombre}</p>

                </div>
            </div>
            <tr>
                <td>{this.props.apellido}</td>
                <td>{this.props.email}</td>
                <td>{this.props.tipousuario}</td>
                <td>{this.props.password}</td>
                <td></td>
                <td> <button className="btn-primary" onClick={() => this.props.eliminarLugar(this.props._id)}>Eliminar</button> </td>
            </tr>
        </React.Fragment>
    }
}
export default FiladelatabladeLugares;