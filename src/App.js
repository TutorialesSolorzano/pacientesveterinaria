import React,{Component} from 'react';
import './bootstrap.min.css'
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';


export class App extends Component{
  state = {
   citas: []
  };

  crearNuevaCita = datos => {
    //console.log(datos);
    const citas = [...this.state.citas, datos];

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
            <div class="col-md-10 mx-auto">
              <NuevaCita
               crearNuevaCita={this.crearNuevaCita}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;