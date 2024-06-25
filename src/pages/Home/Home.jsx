import React, { useState } from 'react';
import PostList from '../../components/Posts/PostList/PostList';
import Form from '../../components/Form/Form';
import Select from '../../components/Select/Select';
import Search from '../../components/Search/Search';
import styles from './Home.module.css';


const Home = () => {

    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const [sortSelect, setSortSelect] = useState('');

    const [searchString, setSearchString] = useState('');

    function sortPosts(sort) {
        setSortSelect(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    }
    function searchPosts(searchString)  {
        if (!searchString.length) {
            setSearchString(searchString);
            setFilteredPosts(posts);
            return;
        }
        setSearchString(searchString);
        setFilteredPosts([...posts.filter((post) => post.title.toLowerCase().includes(searchString.toLowerCase()) || post.text.toLowerCase().includes(searchString.toLowerCase()))]);
    }

    return (
        <div>
            <div className={styles.navblock}>
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
            <Search searchString={searchString} searchPosts={searchPosts}  />
            </div>
            
            <hr style={{ margin: '15px 0' }} />
            <PostList posts={searchString ? filteredPosts : posts} setPosts={setPosts} />
            <Form setPosts={setPosts} />
        </div>

    )
};

export default Home;