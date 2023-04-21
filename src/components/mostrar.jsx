import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
function puto(params) {
    alert('sexo')
}
class Mos extends Component {
    nose() {
        this.state({ estiloImagen: { display: 'box' } })
    }
    render() {
        const inputStyleimg = { border_radius: '50%', cursor: 'pointer', width: '100px' }
        let estiloImagen = { display: 'none' }
        const estilocard = { width: "288px ", margin: '50px' }

        return <React.Fragment>
            <div class="card" style={estilocard} onClick={this.props.nose}>

                <img id="IMAGENOBRACOM" src={this.props.IMAGENOBRA} />
                <div class="card-body bg-dark">
                    <h2 className="text-light bg-dark">Nombre Museo</h2>
                    <p id='NOMBREMUSCOM' className="card-text text-light bg-dark">{this.props.NOMBREMUS}</p>
                    <h2 className="text-light bg-dark">Nombre de la obra</h2>
                    <p id="NOMBOBRACOM" className="card-text">{this.props.NOMBOBRA}</p>
                    <h2 className="text-light bg-dark">Informacion de la obra</h2>
                    <p id="INFOEXTOBRACOM" className="card-text text-light bg-dark
                    ">{this.props.INFOEXTOBRA}</p>
                    <div className="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="COMENTAR"></textarea>
                        <label for="COMENTAR">Comments</label>
                        <button type="button" class="btn btn-primary btn-sm" onClick={() => this.props.Comentar(this.props._id)}>Enviar</button>
                    </div>

                </div>
            </div>
            <br />
        </React.Fragment>
    }
}
export default Mos;