import React, { Component } from 'react';
import MemoryCard from "../MemoryCard/MemoryCard"
import clickitems from "../../clickitems.json"
import Wrapper from "../Wrapper/Wrapper"
import Jumbotron from "../Jumbotron"
import Header from "../Header"
import "./style.css"



class GameContainer extends Component {
  state = {
    score: 0,
    highScore: 0,
    chosenCards: [],
    clickItems: clickitems
  }

  //Presents state for development purposes
  componentDidMount() {
    // console.log(this.state);
    // this.randomizeItems()
  }

  flipItems = () => {
    this.setState({
      clickItems: clickitems.reverse()
    })
    // console.log(this.state.clickItems)
  }

  //This will randomize the items in the array and re-send to the user for another guess
  randomizeItems = () => {

    // var currentArray = this.state.clickItems;
    // console.log("pre-randomize: " + JSON.stringify(this.state.clickItems[0].id))

    for (var i = this.state.clickItems.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.state.clickItems[i];
      this.state.clickItems[i] = this.state.clickItems[j];
      this.state.clickItems[j] = temp;
    }

    // console.log("post-randomize: " + JSON.stringify(this.state.clickItems[0].id));
    // console.log(this.state.clickItems)

  }

  //This handles the users guess and passes it into the handleSubmit function
  checkValue = (id) => {
    // const value = event.target.value;
    console.log(id)
    this.handleSubmit(id);
  }

  //This is where the app checks if the user's guess exists in the user's current guess array
  handleSubmit = (val) => {

    var cardArray = this.state.chosenCards
    // var validateNum = cardArray.length;
    // var checked = "false"

    var exists = cardArray.includes(val);
    // console.log(exists);
    if (exists === false) {
      this.state.chosenCards.push(val)
      this.setState({
        score: this.state.score + 1
      })
      this.randomizeItems()
    } else {
      this.endGame()
    }

    // console.log(this.state.chosenCards);
  }


  //This handles the results after the game has been lost. It also resets the state and randomizes the images again
  endGame = () => {
    alert("Game is over!");

    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      })
    }

    this.setState({
      chosenCards: [],
      score: 0
    })

    this.randomizeItems()
  }

  render() {
    return (
      <div className=""> 
        <Jumbotron>
        <Header score={this.state.score} highScore={this.state.highScore}/>
        </Jumbotron>
        <Wrapper>
        <div className="row">
          {this.state.clickItems.map(memCard => (
            <MemoryCard 
            name={memCard.name}
            image={memCard.image}
            id={memCard.id}
            handleClick={this.checkValue}
            />
          ))}
        </div>
        </Wrapper>
      </div>
    )
  }
}

export default GameContainer;
