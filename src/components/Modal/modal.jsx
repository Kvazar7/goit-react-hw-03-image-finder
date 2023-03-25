import React, { Component } from "react";
import css from '../Modal/modal.module.css'

export class Modal extends Component {
    

    componentDidMount() {
        window.addEventListener('keydown', this.keyToClose, this.handleClickOnBackdrop)
    }

    componentWillUnmount() {
        window.addEventListener('keydown', this.keyToClose, this.handleClickOnBackdrop)
    }

    keyToClose = event => {
        if (event.code === 'Escape') {
            this.props.closeModal();
        }
    }

    handleClickOnBackdrop = event => {
        if (event.target === event.currentTarget) {
            this.props.closeModal();
        }
    }

    render() {
        return (
            <div onClick={this.handleClickOnBackdrop} className={css.Overlay} >
                <div className={css.Modal}>
                    <img src={this.props.imageToShow} alt={this.props.imageToShowAlt} />
                </div>
            </div>
        )
    }
        
}
