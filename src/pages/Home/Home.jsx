import React, {useState} from 'react';
import PostList from '../../components/Posts/PostList/PostList';
import Form from '../../components/Form/Form';


const Home = () => {

    const [posts, setPosts] = useState([]);

    return (
        <>
            <PostList posts={posts} setPosts={setPosts}/>
            <Form setPosts={setPosts}/>
        </>

    )
};

export default Home;