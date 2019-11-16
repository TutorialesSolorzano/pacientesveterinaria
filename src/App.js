import React,{Component} from 'react';
import './bootstrap.min.css'
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


export class App extends Component{
  state = {
   citas: []
  };

  //cuando la aplicacion carga
  componentDidMount(){

    const lsCitas= localStorage.getItem('citas');

    if(lsCitas){
      this.setState({
        citas: JSON.parse(lsCitas)
      })
    }
  }

  //cuando eliminamos o agregamos un acita
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    //console.log(datos);
    const citas = [...this.state.citas, datos];

    this.setState({
      citas: citas
    });
  }

  eliminarCita = id => {
    const citasActuales= [...this.state.citas];

    const citas = citasActuales.filter( cita => cita.id !== id);

    this.setState({
      citas: citas
    });
  }

  render() {

    return (
      <div>
        <div className="container">
          <Header
          titulo='Pacientes Veterinaria'
          />
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita
               crearNuevaCita={this.crearNuevaCita}/>
            </div>

            <div className="mt-5 col-md-10 mx-auto">
                   <ListaCitas
                    citas= {this.state.citas }
                    eliminarCita={this.eliminarCita}
                   /> 
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;