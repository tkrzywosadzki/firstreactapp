import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';



const Card = props => {

    const dispatch = useDispatch();

    const handleToggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    };


    return (
        <li className={styles.card}>{props.title}
            <div>
                <button onClick={handleToggleFavorite}><span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)} /></button>
            </div>
        </li>
    );
};

export default Card;