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

  clickImage = id => {
    alert(id, "clicking an image");
    // // Filter this.state.friends for friends with an id not equal to the id being removed
    // const Pics = this.state.Pics.filter(pic => pic.id !== id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ Pics });
  };

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Instructions></Instructions>
        <Container>
          <div className="row">
            <div className="col" style={{ marginRight: "auto", marginLeft: "auto" }}>
              {
                this.state.Pics.map((pic) => (
                <Pictures 
                clickImage={this.clickImage}
                id={pic.id}
                key={pic.id}
                image={pic.image}/>)
                )}
            </div>
          </div>
          {/* {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))} */}
        </Container>
        {/* <ContainerFluid>
          <Footer></Footer>
        </ContainerFluid> */}
      </div>
    );
  }
}

export default App;
