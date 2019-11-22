import React from "react";
import "./style.css";


function Header(props) {
    return(
        <div className="header">
            


        <h1>Memory Game</h1>
        <h2>High Score: {props.highScore}</h2>
        <h3>Score: {props.score}</h3>
        </div>
    )

}

// <h1>Memory Game</h1>
//         <h2>High Score: {this.state.highScore}</h2>
//         <h3>Score: {this.state.score}</h3>

export default Header;