import './App.css';
import React, { Component } from 'react/cjs/react.production.min';
import {BrowserRouter} from "react-router-dom";
import Headers from './Components/Header';
import AppRoute from './AppRoute';


class App extends Component {
  render() {
    return (
      <div className="App">
       
      <BrowserRouter>
        <Headers/>
        <AppRoute/>
      </BrowserRouter>

      </div>
    );
  }
 
}

export default App;
