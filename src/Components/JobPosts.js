import React, { useContext, useEffect, useState } from 'react';
import postContext from '../context/posts/postContext';
import PostCard from './PostCard';
import '../App.css';


const JobPosts = () => {
    const context = useContext(postContext);
    const { posts } = context;
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const rolesSet = new Set(posts.map(post => post.role));
    const filters = Array.from(rolesSet);

    const [clickedFilters, setClickedFilters] = useState({});

    const handleClick = (selectedCategory) => {
        setClickedFilters(prevState => ({
            ...prevState,
            [selectedCategory]: !prevState[selectedCategory]
        }));

        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    useEffect(() => {
        const filterItems = () => {
            if (selectedFilters.length > 0) {
                const filtered = posts.filter(post => {
                    return selectedFilters.includes(post.role);
                });
                setFilteredPosts(filtered);
            } else {
                setFilteredPosts([...posts]);
            }
        };
        filterItems();
    }, [selectedFilters, posts]);
    


    return (
        <div style={{ display: 'flex' }} >
            <div style={{
                width: '30%',
                height: 41,
                margin: '80px 5px 0 30px',
                background: '#D9D9D9',
                borderRadius: '24px 24px 0 0',
                position: 'relative', /* Set position relative */
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)', /* Center the text */
                    color: 'black',
                    fontSize: 24,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}>
                    filters
                </div>
                <div style={{
                    width: '100%',
                    margin: '40px 53px 0 0',
                    background: '#D9D9D9',
                    borderRadius: '0 0 24px 24px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '20px',
                }}>
                    {filters.map((role, idx) => (
                        <span
                            className={`filter ${clickedFilters[role] ? "active" : ""}`}
                            style={{
                                background: clickedFilters[role] ? 'blue' : 'rgb(247 244 244)',
                                color: clickedFilters[role] ? 'white' : 'black'
                            }}
                            key={`filters-${idx}`}
                            onClick={() => handleClick(role)}>
                            {role}
                        </span>
                    ))}

                </div>
            </div>
            <div className='container' style={{ marginInline: 20 }}>
                <h4 className='my-4'>Showing results number</h4>
                <div className="row">
                    {filteredPosts.map((post) => {
                        return <div className="col-md-12" key={`posts-${post._id}`} >
                            <PostCard post={post} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default JobPosts