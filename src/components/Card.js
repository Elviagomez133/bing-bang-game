import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    constructor() {
        super()
        this.state = {
            score: 0
        }
    }

    updateScore = () => {
        this.setState({
            score: 0
        }) 
    }

    render() {
        return(
            <div className="score-card">
                <h1 className="score-text">SCORE</h1>
                <p>{this.updateScore}</p>
            </div>
        );
    }
}

export default Card;

