
import styles from './searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types'

const Searchbar = ({ onSubmit }) => {
    return (
        <header className={styles.searchbar}>
            <form className={styles.searchForm} onSubmit={onSubmit}>
                <button type="submit" className={styles.searchFormButton}>
                    <ImSearch size={25} />
                </button>

                <input
                    name="search"
                    className={styles.searchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
}

export default Searchbar;


Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };