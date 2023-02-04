import styles from './imageGallery.module.css';

const ImageGallery = ({ children }) => {
    return <ul className={styles.imageGallery}>{children}</ul>;
}

export default ImageGallery;