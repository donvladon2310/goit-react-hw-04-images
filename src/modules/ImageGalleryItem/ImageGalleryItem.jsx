import styles from './imageGalleryItem.module.css';

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