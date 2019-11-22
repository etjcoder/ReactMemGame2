import React from "react";
import "./style.css"

function MemoryCard(props) {
    return (

            <div className="card">
                <img className="card-image" alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/>
            </div>
            
    );
}

export default MemoryCard;