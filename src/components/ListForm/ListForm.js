import { useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { addList } from "../../redux/listsRedux";
import styles from './ListForm.module.scss';


const ListForm = ({listId}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    };

    return(
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <span className={styles.inputName}>Title:</span> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)}  />
            <span className={styles.inputName}>Icon:</span> <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ListForm;