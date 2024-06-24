import React, { useState } from 'react';
import PostList from '../../components/Posts/PostList/PostList';
import Form from '../../components/Form/Form';
import Select from '../../components/Select/Select';


const Home = () => {

    const [posts, setPosts] = useState([]);

    const [sortSelect, setSortSelect] = useState('');

    function sortPosts(sort) {
        setSortSelect(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    }

    return (
        <div>
            <Select
                defaultValue="Сортировка"
                options={[
                    {
                        value: 'title',
                        name: 'По названию'
                    },
                    {
                        value: 'text',
                        name: 'По содержанию'
                    }
                ]}
                value={sortSelect}
                onChange={sortPosts}

            />
            <hr style={{ margin: '15px 0' }} />
            <PostList posts={posts} setPosts={setPosts} />
            <Form setPosts={setPosts} />
        </div>

    )
};

export default Home;