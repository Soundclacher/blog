import React from "react";
import styles from "./PostList.module.css";
import PostPreview from "../PostPreview/PostPreview";

let date = new Date();

const list = [
    {
        id: 1,
        title: "Test post 1",
        time: date.toLocaleTimeString()
    },
    {
        id: 2,
        title: "Test post 2",
        time: date.toLocaleTimeString()
    },
    {
        id: 3,
        title: "Test post 3",
        time: date.toLocaleTimeString()
    },
]

const PostList = () => {



    return (
       
        list.map((item, index) => {
            return <PostPreview post={item} key={index} />;          
        })
    );
}

export default PostList;