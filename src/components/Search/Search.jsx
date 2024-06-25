import React, {useState} from'react';
import styles from './Search.module.css';

const Search = (props) => {
  

    return (
        <>
            <input 
            className={styles.inp}
            placeholder={'Поиск'}
            value={props.searchString}
            onChange={event => props.searchPosts(event.target.value)}
            />
        </>
    );
}

export default Search;