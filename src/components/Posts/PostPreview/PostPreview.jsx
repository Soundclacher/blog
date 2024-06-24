import React from 'react';
import styles from './PostPreview.module.css';

const PostPreview = (props) => {

    function deleteHandler()  {
        props.setPosts(prev => [...prev.filter(item => item.id != props.post.id)])
    }

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
            onClick={deleteHandler} 
            className={styles.btn}
            >Remove</button>
        </div>
    );
}
export default PostPreview;