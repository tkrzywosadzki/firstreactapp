import styles from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
    return (
        <div>
            <PageTitle>404 not found</PageTitle>
            <p className={styles.subtitle}>wrong address</p>
        </div>
    );
};

export default NotFound;