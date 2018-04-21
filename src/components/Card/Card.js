import React from "react";
import "./Card.css";



const Card = props => (
    <div className="card">
        <div className="img-container">
            <span onClick={() => props.verifyIfClicked(props.id)} className="remove">
                <img alt={props.name} src={require(`./images/${props.image}`)} />
            </span>
        </div>
    </div>
);

export default Card;