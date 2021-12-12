import { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { FETCH_POSTS, NEW_POST } from '../actions/types';
import fetchPosts from '../actions/postAction';

function Posts() {
    // posts will eventually come from redux (application state from the store)
    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //   const getPosts = async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const data = await res.json();
    //     setPosts(data);
    //   }
    //   getPosts()
    // }, [])
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('dispatching')
        dispatch(fetchPosts());
        console.log('dispatched');
    }, []);

    const posts = useSelector((state) => state.posts.items);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                // need key when using map
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

// mapStateToProps (if no hooks, use this to get state from redux and map it to the props of the components)
export default Posts

