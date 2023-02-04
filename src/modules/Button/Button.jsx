import styles from './button.module.css';

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