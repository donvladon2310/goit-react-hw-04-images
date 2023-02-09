
import styles from './imageGalleryItem.module.css';
import PropTypes from 'prop-types'

const ImageGalleryItem = ({ image, onClick }) => {
    const { id, webformatURL, tags, largeImageURL } = image;
    return (
        <li className={styles.imageGalleryItem}>
            <img
                id={id}
                src={webformatURL}
                alt={tags}
                data-large={largeImageURL}
                onClick={onClick}
            />
        </li>
    );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};