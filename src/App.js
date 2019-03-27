import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer"
import Game from "./components/Game"

class App extends Component {

  render() {
    return(
      <div>
        <Game></Game>
      <Footer></Footer>
      </div>
    );
  };
};

export default App;
