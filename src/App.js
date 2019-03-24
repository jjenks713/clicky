import React, { Component } from 'react';
import './App.css';
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
  gameWin = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score }, function () {
        console.log(this.state.highScore);
      });
    }
    this.state.Pics.forEach(pic => {
      pic.count = 0;
    });
      alert(`You Win!!`);
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
            if (this.state.score === 12) {
              this.gameWin();
            }
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
        <div style={
          {
            backgroundImage: "url(" + "https://hdqwalls.com/download/rick-and-morty-5k-fan-art-by-2048x1152.jpg" + ")",
            // backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
          <div className="text-light">
            <div className="text-light p-5 row text-left">
              <div className="col-10">
                <h1>Clicky Game!</h1><br></br>
                <h2>Click a picture to start, don't click the same one twice</h2>
              </div>
              <div className="col-2">
                <h2 className="text-right"><ul style={{ display: "inline", listStyle: "none" }}>
                  <li>Top Score: {this.state.highScore}</li>
                  <li>Score: {this.state.score}</li>
                </ul></h2>
              </div>
            </div>
          </div>
        </div><br></br><br></br>
        <Container>
          <div className="row text-center" style={{ marginRight: "auto", marginLeft: "auto" }}>
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
