import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Instructions from './components/Instructions';
import Pictures from './components/Pics';
import Pics from "./pics";
import Container from "./components/Container"
import ContainerFluid from "./components/ContainerFluid"
import Footer from "./components/Footer"

class App extends Component {

  state = {
    Pics,
    score: 0,
    highScore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score }, function () {
        console.log(this.state.highScore);
      });
    }
    this.state.Pics.forEach(pic => {
      pic.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  clickImage = id => {
    // alert("clicking an image", id);
    this.state.Pics.find((o, i) => {
      if (o.id === id) {
        if (Pics[i].count === 0) {
          Pics[i].count = Pics[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.Pics.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <nav className="navbar navbar-white bg-white">
            <span className="navbar-brand mb-0 h1">Clicky Game</span>
            <span className="text-center">Click an Image to get started</span>
            <span>  <ul>
              <li>Score: {this.score}</li>
              <li>Top Score: {this.highScore}</li>
            </ul></span>
          </nav>
        </Container>
        <Instructions></Instructions><br></br><br></br>
        <Container>
          <div className="row">
            <div className="col" style={{ marginRight: "auto", marginLeft: "auto" }}>
              {
                this.state.Pics.map((pic) => (
                  <Pictures
                    clickImage={this.clickImage}
                    id={pic.id}
                    key={pic.id}
                    image={pic.image} />)
                )}
            </div>
          </div><br></br><br></br>
        </Container>

        {/* <ContainerFluid> */}
        <Footer></Footer>
        {/* </ContainerFluid> */}
      </div>
    );
  }
}

export default App;
