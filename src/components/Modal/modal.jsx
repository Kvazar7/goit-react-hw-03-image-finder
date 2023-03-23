import React, { Component } from "react";
import css from '../Modal/modal.module.css'

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydownESC', this.keyToClose)
    }

    componentWillUnmount() {
        window.addEventListener('keydownESC', this.keyToClose)
    }

    keyToClose = event => {
        if (event.code === 'Escape') {
            this.props.onModalClose();
        }
    }

    handleBackdropClick = event => {
        if (event.target === event.currentTarget) {
            this.props.onModalClose();
        }
    }

    render() {
        return (
            <div class={css.Overlay}>
                <div class={css.Modal}>
                    <img src="" alt="" />
                </div>
            </div>
        )
    }
        
}
