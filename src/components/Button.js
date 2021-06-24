import React, { Component } from "react";
import "./button.css";
import Modal from './Modal';

class Button extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState(
            {
                show: true
            }
        )
    }

    hideModal = () => {
        this.setState(
            {
                show: false
            }
        )
    }

    render() {
        return(
            <div className="button-container">
                <div>
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        <p>Modal</p>
                    </Modal>
                    <button className="button-rules" onClick={this.showModal}>RULES</button>
                </div>
            </div>
        );
    }

}

export default Button;