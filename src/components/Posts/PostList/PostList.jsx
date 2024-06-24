import React from "react";
import styles from "./PostList.module.css";
import PostPreview from "../PostPreview/PostPreview";



const PostList = (props) => {



    return (
       
        props.posts.map((item, index) => {
            return <PostPreview post={item} key={index} setPosts={props.setPosts}/>;          
        })
    );
}

export default PostList;