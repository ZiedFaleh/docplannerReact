import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar';
import Introduction from './introduction';
import Clients from './clients';
import Brands from './brands';
import Products from './products';
import Destination from './destination';
import Footer from './footer';

  class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Introduction/>
        <Clients/>
        <Brands/>
        <Products/>
        <Destination/>
        <Footer/>
      </div>
    );
  }
}

export default App;
