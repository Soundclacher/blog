import React from 'react';
import styles from './PostPreview.module.css';

const PostPreview = (props) => {
    return (
        <div key={props.post.id}
            className={styles.postblock}
        >
            <div 
            className={styles.textblock}
            >
                <p>{props.post.title}</p>
                <span>{props.post.time}</span>
            </div>
            <button 
            className={styles.btn}
            >Remove</button>
        </div>
    );
}
export default PostPreview;