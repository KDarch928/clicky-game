import React, { Component } from 'react';
// import logo from './logo.svg';
import imgURL from "./grey-wood.jpg";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Startrek from "./startrek";
import Card from "./components/Card/Card";


class App extends Component {


    state = {
        Startrek
    };

    verifyIfClicked = id => {
        alert(`This ${id} has been clicked`);
        console.log(Startrek);
    };



  render() {
    return (
        <div className="section-area" style={{ backgroundImage: `url(${imgURL})` }}>
            <Navbar>
                <ul>
                    <li className="brand">
                        <a href="">Clicky Game</a>
                    </li>
                    <li>
                        Click an image to begin!
                    </li>
                    <li>
                        Score: 0 | Top Score: 0
                    </li>
                </ul>
            </Navbar>
            <Header />
            <Wrapper>
                {/*<Header />*/}
                {this.state.Startrek.map(star => (
                    <Card
                        verifyIfClicked={this.verifyIfClicked}
                        id={star.id}
                        name={star.name}
                        picture={star.image}
                        image={star.image}
                    />
                ))}
            </Wrapper>
            <Footer />
        </div>
    );
  }
}

export default App;
