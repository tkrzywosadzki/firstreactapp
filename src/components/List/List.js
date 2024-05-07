import styles from './List.module.scss';
import Column from '../Column/Column';
import { useSelector } from 'react-redux';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getAllColumns } from '../../redux/store';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';


const List = () => {

    
    //const columns = useSelector(getAllColumns);
    const columns = useSelector(state => getColumnsByList(state, 1));
    const listData = useSelector(state => getListById(state, 1));
        



        return (
            <div className={styles.list}>
                <header className={styles.header}>
                    <h2 className={styles.title}>{listData.title}</h2>
                </header>
                <p className={styles.description}>{listData.description}</p>
                <section className={styles.columns}>
                    {columns.map(column => <Column key={column.id}  {...column} />)}
                </section>
                <ColumnForm/>
            </div>
        );
};


export default List;