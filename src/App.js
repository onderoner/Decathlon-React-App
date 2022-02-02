import './App.css';
import React, { Component } from 'react/cjs/react.production.min';
import {BrowserRouter} from "react-router-dom";
import Header from './Components/Header/Header';
import AppRoute from './AppRoute';


class App extends Component {
  render() {
    return (
      <div className="App">
       
      <BrowserRouter>
        <Header/>
        <AppRoute/>
      </BrowserRouter>

      </div>
    );
  }
 
}

export default App;
