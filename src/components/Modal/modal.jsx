import React, { Component } from "react";
import css from '../Modal/modal.module.css'

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydownESC', this.keyToClose, this.handleClickOnBackdrop)
    }

    componentWillUnmount() {
        window.addEventListener('keydownESC', this.keyToClose, this.handleClickOnBackdrop)
    }

    keyToClose = event => {
        if (event.code === 'Escape') {
            this.props.onModalClose();
        }
    }

    handleClickOnBackdrop = event => {
        if (event.target === event.currentTarget) {
            this.props.onModalClose();
        }
    }

    render() {
        return (
            <div onClick={this.handleClickOnBackdrop} class={css.Overlay} >
                <div class={css.Modal}>
                    <img src={this.props.largFormat} alt={this.props.alt} />
                </div>
            </div>
        )
    }
        
}
