import React from "react";
import styles from './Form.module.css'

const Form = () => {
    return (
        <form className={styles.form}>
            <input className={styles.title} type="text" placeholder="Введите заголовок" />
            <textarea className={styles.text} type="text" placeholder="Введите текст поста" />
            <button className={styles.btn}>Создать</button>
        </form>
    );
}
export default Form;