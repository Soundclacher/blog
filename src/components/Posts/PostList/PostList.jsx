import React from "react";
import styles from "./PostList.module.css";
import PostPreview from "../PostPreview/PostPreview";



const PostList = (props) => {



    return (
        <>
            {(props.posts.length) > 0 ? props.posts.map((item, index) => {
                return <PostPreview post={item} key={index} setPosts={props.setPosts} />;
            }) : <div>
                    <h1 className={styles.report} >Посты не найдены</h1>
                </div>}
        </>

    );
}

export default PostList;