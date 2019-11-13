import React, { Component } from "react";
import uuid from "uuid";

const stateInicial = {
  cita: { mascota: "", dueno: "", fecha: "", hora: "", sintomas: "" },
    error: false
}
class NuevaCita extends Component {
  state = {
   ...stateInicial
  };

  handleChange = e => {
    //console.log(e.target.name+': '+e.target.value);
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { mascota, dueno, fecha, hora, sintomas } = this.state.cita;

    if (
      mascota === "" ||
      dueno === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas === ""
    ) {
      this.setState({
        error: true
      });
      return;
    }

    const nuevaCita = {...this.state.cita};
    nuevaCita.id= uuid();

    this.props.crearNuevaCita(nuevaCita);

    this.setState({
      ...stateInicial
    })
  };

  render() {
    const {error}=this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center">
            Llena el formulario para agregar una cita
          </h2>
          {error? <div className="alert alert-danger mt-2 mb-5">Todos los campos son mandatorios</div>:null}
          <form>
            <div class="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label" for="">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  aria-describedby="helpId"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
                <small id="helpId" class="text-muted">
                  Help text
                </small>
              </div>
            </div>
            {/** form-group */}

            <div class="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label" for="">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño"
                  aria-describedby="helpId"
                  name="dueno"
                  onChange={this.handleChange}
                  value={this.state.cita.dueno}
                />
                <small id="helpId" class="text-muted">
                  Help text
                </small>
              </div>
            </div>
            {/** form-group */}

            <div class="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label" for="">
                Fecha
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  aria-describedby="helpId"
                  onChange={this.handleChange}
                  value={this.state.cita.date}
                />
                <small id="helpId" class="text-muted">
                  Help text
                </small>
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label" for="">
                Hora
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  aria-describedby="helpId"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
                <small id="helpId" class="text-muted">
                  Help text
                </small>
              </div>
            </div>
            {/** form-group */}

            <div class="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label" for="">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  placeholder="Describe los sintomas"
                  aria-describedby="helpId"
                  name="sintomas"
                  onChange={this.handleChange}
                  value={this.state.sintomas}
                ></textarea>
                <small id="helpId" class="text-muted">
                  Help text
                </small>
              </div>
            </div>
            {/** form-group */}

            <input
              type="submit"
              value="Agregar"
              className="py-3 mt-2 btn btn-success btn-block"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;
