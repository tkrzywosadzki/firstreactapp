import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';



const Card = props => {

    const dispatch = useDispatch();

    const handleToggleFavorite = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    };

    const handleRemoveCard = e => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    }


    return (
        <li className={styles.card}>{props.title}
            <div>
                <button onClick={handleToggleFavorite}><span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)} /></button>
                <button onClick={handleRemoveCard}><span className='fa fa-trash' /></button>
            </div>
        </li>
    );
};

export default Card;