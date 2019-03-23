import React, { Component } from 'react';
import './App.css';
import Instructions from './components/Instructions';
import Pictures from './components/Pics';
import Pics from "./pics";
import Container from "./components/Container"
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
            <a className="navbar-brand mb-0 h1"><h1>Clicky Game</h1></a>
              <ul style={{ display: "inline" }}>
              <li>Score: {this.state.score}</li>
              <li>Top Score: {this.state.highScore}</li>
            </ul>
          </nav>
        </Container>
        <Instructions></Instructions><br></br><br></br>
        <Container>
          <div className="row" style={{ marginRight: "auto", marginLeft: "auto" }}>
            <div className="col-lg-12">
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
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
