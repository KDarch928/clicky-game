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
        startrek: Startrek,
        score: 0,
        highestscore: 0,
        alreadyclicked: [],
        message: "Click an image to begin!"
    };

    checkArray = id => {
        console.log("I make it to the check array function")
        for(let i = 0; i < this.state.alreadyclicked.length; i++){
            if(this.state.alreadyclicked[i] === id) {
                return true
            }
        }
        return false
    }

    checkHighestScore = () => {
        if(this.state.highestscore > this.state.score){
            return this.state.highestscore;
        } else {
            return this.state.score;
        }
    }


    verifyIfClicked = id => {
        // alert(`This ${id} has been clicked`);
        // console.log(this.state.startrek);
        const shuffleArr = this.state.startrek.sort((a,b) => 0.5 - Math.random());
        if (!Array.isArray(this.state.alreadyclicked) || !this.state.alreadyclicked.length) {
            // array does not exist, is not an array, or is empty

            this.state.alreadyclicked.push(id);
            this.setState(
                {
                    startrek: shuffleArr,
                    score: this.state.score + 1,
                    alreadyclicked: this.state.alreadyclicked,
                    message: "You guessed correctly!"
                });
        } else {

            let result = this.checkArray(id);

            if(result) {
                const currScore = this.checkHighestScore();
                this.setState(
                    {
                        startrek: shuffleArr,
                        score: 0,
                        alreadyclicked: [],
                        highestscore: currScore,
                        message: "You guessed incorrectly!"
                    });
            } else {
                this.state.alreadyclicked.push(id);
                this.setState (
                    {
                        startrek: shuffleArr,
                        score: this.state.score + 1,
                        alreadyclicked: this.state.alreadyclicked,
                        message: "You guessed correctly!"
                    });
            }
        }
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
                        {this.state.message}
                    </li>
                    <li>
                        Score: {this.state.score} | Top Score: {this.state.highestscore}
                    </li>
                </ul>
            </Navbar>
            <Header />
            <Wrapper>
                {/*<Header />*/}
                {this.state.startrek.map(star => (
                    <Card
                        verifyIfClicked={this.verifyIfClicked}
                        key={star.id}
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
