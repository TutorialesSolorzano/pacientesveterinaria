import React,{Component} from 'react';
import './bootstrap.min.css'
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';


export class App extends Component{
  state = {
  
  };
  render() {
    return (
      <div>
        <div className="container">
          <Header
          titulo='Pacientes Veterinaria'
          />
          <div className="row">
            <div class="col-md-10 mx-auto">
              <NuevaCita/>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;