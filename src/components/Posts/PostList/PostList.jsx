import React from "react";
import styles from "./PostList.module.css";

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
        list.map((item) => {
            return (
                <div key={item.id}
                    className={styles.postblock}
                >
                    <div className={styles.textblock}>
                        <p>{item.title}</p>
                        <span>{item.time}</span>
                    </div>
                    <button className={styles.btn}>Remove</button>
                </div>
            )
        })
    );
}

export default PostList;