import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';

const Favorite = () => {

    const cards = useSelector(state => getFavoriteCards(state));

    if(cards.length === 0) return <PageTitle>No favorite cards added yet.</PageTitle>

    return (
        <div className={styles.hero}>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} {...card} />)}
                </ul>
            </article>

        </div>
        
       


    );
    //     <div>
    //         <PageTitle>Favorite</PageTitle>
    //         <p className={styles.subtitle}>Lorem Ipsum</p>
    //     </div>
    // );
};

export default Favorite;