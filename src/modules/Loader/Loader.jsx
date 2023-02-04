import { Grid } from 'react-loader-spinner';
import styles from './loader.module.css';

const Loader = () => {
    return (
        <Grid
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass={styles.loader}
        />
    );
}

export default Loader;