import { Component } from 'react';
import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const ModalRoot = document.querySelector('#ModalRoot');

class Modal extends Component {
    state = {};

    componentDidMount() {
        window.addEventListener('keydown', this.keydownClick);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keydownClick);
    }

    keydownClick = evt => {
        if (evt.code === 'Escape') {
            this.props.onClose();
        }
    };

    backdropClick = evt => {
        if (evt.target === evt.currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        const { children } = this.props;
        const { backdropClick } = this;
        const { onClick, image: { alt, url } } = this.props;

        return createPortal(
            <div className={styles.overlay} onClick={backdropClick}>
                <div className={styles.modal}>
                    {children}
                    <img src={url} alt={alt} onClick={onClick} />
                </div>
            </div>,
            ModalRoot
        );
    }
}

export default Modal;

Modal.propTypes = {
    image: PropTypes.object,
    onClose: PropTypes.func,
};