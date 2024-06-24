import React, { useState } from "react";
import styles from './Form.module.css'



const Form = (props) => {

    const [title, setTitle] = useState('');
    const [text, setText]  = useState('');

    const createHandler = (e) => {
        e.preventDefault();
        if (text && title) {
            props.setPosts(prev => [...prev, {title, text, time: new Date().toLocaleTimeString(), id: prev.length}]);
            setTitle(''); 
            setText('');
        } else  {
            alert('Введите заголовок и текст поста');
        }
        console.log({title, text, time: new Date().toLocaleTimeString()});
    }

    return (
        <form className={styles.form}

        >
            <input className={styles.title} type="text" placeholder="Введите заголовок" value={title} onChange={e => setTitle(e.target.value)}/>
            <textarea className={styles.text} type="text" placeholder="Введите текст поста" value={text} onChange={e => setText(e.target.value)}/>
            <button className={styles.btn} onClick={createHandler}>Создать</button>
        </form>
    );
}
export default Form;