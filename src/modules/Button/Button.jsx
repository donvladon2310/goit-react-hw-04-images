import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
    return (
        <div className={styles.buttonContainer}>
            <button type="button" className={styles.button} onClick={onClick}>
                Load more
            </button>
        </div>
    );
}

export default Button;

Button.propTypes = { onClick: PropTypes.func.isRequired, };