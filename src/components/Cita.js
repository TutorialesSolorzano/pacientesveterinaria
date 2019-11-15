import React from "react";

const Cita = ({ cita, eliminarCita}) => {
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3 className="mt-0">{cita.mascota}</h3>
        <p className="card-text">
          Nombre Dueño:<span> {cita.dueno}</span>
        </p>
        <p className="card-text">
          Fecha: <span> {cita.fecha}</span>
        </p>
        <p className="card-text">
          Hora: <span>{cita.hora}</span>
        </p>
        <p className="card-text">
          Sintomas: <span> {cita.sintomas}</span>
        </p>

        <button 
        className="btn btn-danger"
        onClick={() => eliminarCita(cita.id)}>Borar &times;</button>
      </div>
    </div>
  );
};

export default Cita;
