import React, { Component } from 'react';

//recursos
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//componentes
import Inicio_ from './Components/Routes/Inicio/Inicio'
import Dashboard_ from './Components/Routes/App/Dashboard';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className='noRenderable'>
          <p>
            Tu dispositivo no cumple con las características necesarias.
            <br />
            <b>Ponte en contacto con el proveedor del servicio.</b>
          </p>
        </div>
        <Router>
          <Switch>
            <Route exact path='/' component={Inicio_}></Route>
            <Route usuario path='/Dashboard' component={Dashboard_}></Route>
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
