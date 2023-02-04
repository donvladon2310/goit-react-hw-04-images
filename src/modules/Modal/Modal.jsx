import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './modal.module.css';


const Modal = ({ onClose, image }) => {
    const { url, alt } = image;

    useEffect(() => {
        function keydownClick(evt) {
            if (evt.code === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', keydownClick);

        return () => {
            window.removeEventListener('keydown', keydownClick);
        };
    });

    function backdropClick(evt) {
        if (evt.target === evt.currentTarget) {
            onClose();
        }
    }

    return (
        <div className={styles.overlay} onClick={backdropClick}>
            <div className={styles.modal}>
                <img src={url} alt={alt} />
            </div>
        </div>
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }),
};

export default Modal;