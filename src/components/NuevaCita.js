import React, { Component } from "react";

class NuevaCita extends Component {
  state = {};

  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center">
            Llena el formulario para agregar una cita
          </h2>

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
                />
                <small id="helpId" class="text-muted">
                  Help text
                </small>
              </div>
            </div>{/** form-group */}

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
                />
                <small id="helpId" class="text-muted">
                  Help text
                </small>
              </div>
            </div>{/** form-group */}

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
                />
                <small id="helpId" class="text-muted">
                  Help text
                </small>
              </div>
            </div>{/** form-group */}

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
                ></textarea>
                <small id="helpId" class="text-muted">
                  Help text
                </small>
              </div>
            </div>{/** form-group */}

<input type="submit" value="Agregar" className="py-3 mt-2 btn btn-success btn-block" />


          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;
